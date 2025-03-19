<script setup>
import DetailTrailer from "@/components/detail/DetailTrailer.vue";
import DetailInfo from "@/components/detail/DetailInfo.vue";
import MainMovie from "@/components/main/MainMovie.vue";
import { useMovieStore } from "@/stores/movie.js";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onBeforeUnmount, watch } from "vue";

const route = useRoute();
const movieStore = useMovieStore();
const {
  discoverMovies,
  discoverMoviesLoading,
  movie,
  movieLoading,
  trailer,
  trailerLoading,
  credit,
  creditLoading,
} = storeToRefs(movieStore);

onBeforeMount(() => {
  const id = route.params.id;
  movieStore.getMovieBy(id);
  movieStore.getVideoBy(id);
  movieStore.getCreditBy(id);
});

const genre = computed(() => {
  return movie.value.genres?.map((v) => v.id).join(",") || "";
});

const filteredDiscoverMovies = computed(() => {
  return discoverMovies.value.filter((v) => v.id !== Number(route.params.id));
});

watch(genre, (newValue) => {
  movieStore.getMoviesBy(1, newValue);
});

onBeforeUnmount(() => {
  movie.value = [];
  discoverMoviesLoading.value = true;
});
</script>
<template>
  <DetailTrailer
    :movie="movie"
    :trailer="trailer"
    :trailerLoading="trailerLoading"
  />
  <DetailInfo
    :movie="movie"
    :movieLoading="movieLoading"
    :credit="credit"
    :creditLoading="creditLoading"
    :discoverMovies="discoverMovies"
    :discoverMoviesLoading="discoverMoviesLoading"
  />
  <MainMovie
    v-if="filteredDiscoverMovies.length > 0"
    sub-title="Relative Movies"
    title="비슷한 장르의 영화"
    type="relative"
    :movies="filteredDiscoverMovies"
    :loading="discoverMoviesLoading"
  />
</template>
