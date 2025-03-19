<script setup>
import ListMovie from "@/components/list/ListMovie.vue";
import { useRoute } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useMovieStore } from "@/stores/movie.js";
import { storeToRefs } from "pinia";

const route = useRoute();
const movieStore = useMovieStore();
const type = route.params.type;
const keyword = route.query.keyword;
const { moreMovies, moreMoviesLoading, moreMoviesOneMorePageLoading } =
  storeToRefs(movieStore);

let debounceTimer = null;
const page = ref(1);
const onScroll = () => {
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight;
    if (nearBottom) {
      movieStore.getMoreMovies(++page.value, type, keyword);
    }
  }, 200);
};

onBeforeMount(() => {
  movieStore.getMoreMovies(1, type, keyword);
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  moreMovies.value = [];
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <ListMovie
    sub-title="Top Rated"
    title="높은 평점을 받은 영화"
    :movies="moreMovies"
    :loading="moreMoviesLoading"
    :moreLoading="moreMoviesOneMorePageLoading"
  />
</template>
