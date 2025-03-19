<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  movies: Array,
  loading: Boolean,
});

const randomMovie = computed(() => {
  if (!props.movies || props.movies.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * props.movies.length);
  return props.movies[randomIndex];
});
</script>

<template>
  <section class="release">
    <div
      v-if="!props.loading"
      class="release-item"
      :style="`background-image: url('https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}')`"
    >
      <div class="release__text">
        <strong class="release__category">NEW RELEASE</strong>
        <h2 class="release__title">{{ randomMovie.title }}</h2>
        <p class="release__desc">
          {{ randomMovie.overview }}
        </p>
        <button
          class="release__btn"
          @click="router.push('/detail/' + randomMovie.id)"
        >
          자세히보기
        </button>
      </div>
    </div>
  </section>
</template>
