<script setup>
import { useMovieStore } from "@/stores/movie.js";
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import MainBanner from "@/components/main/MainBanner.vue";
import MainMovie from "@/components/main/MainMovie.vue";

const movieStore = useMovieStore();
const {
  playingMoviesLoading,
  popularMoviesLoading,
  upcomingMoviesLoading,
  topRatedMoviesLoading,
  playingMovies,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
} = storeToRefs(movieStore);
onBeforeMount(() => {
  movieStore.getNowPlayingMovies();
  movieStore.getPopularMovies();
  movieStore.getUpcomingMovies();
  movieStore.getTopRatedMovies();
});
</script>

<template>
  <MainBanner
    :movies="popularMovies.filter((v) => v.poster_path !== null)"
    :loading="popularMoviesLoading"
  />
  <MainMovie
    sub-title="Now Moving"
    title="상영중인 영화"
    type="now_playing"
    :movies="playingMovies.filter((v) => v.poster_path !== null)"
    :loading="playingMoviesLoading"
  />
  <MainMovie
    sub-title="Now Popular"
    title="인기있는 영화"
    type="popular"
    :movies="popularMovies.filter((v) => v.poster_path !== null)"
    :loading="popularMoviesLoading"
  />
  <MainMovie
    sub-title="Now Upcoming"
    title="개봉예정 영화"
    type="upcoming"
    :movies="upcomingMovies.filter((v) => v.poster_path !== null)"
    :loading="upcomingMoviesLoading"
  />
  <MainMovie
    sub-title="Top Rated"
    title="높은 평점을 받은 영화"
    type="top_rated"
    :movies="topRatedMovies.filter((v) => v.poster_path !== null)"
    :loading="topRatedMoviesLoading"
  />
</template>
