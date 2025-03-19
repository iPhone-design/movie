<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  movie: Object,
  trailer: Array,
  trailerLoading: Boolean,
});

const movieTrailer = computed(() => {
  if (
    props.trailer.length > 0 &&
    props.trailer[0].site &&
    props.trailer[0].key
  ) {
    return props.trailer[0].site.toLowerCase() === "youtube"
      ? "http://www.youtube.com/embed/" + props.trailer[0].key
      : "http://player.vimeo.com/video/" + props.trailer[0].key;
  }
  return null;
});
</script>

<template>
  <section class="trailer">
    <iframe
      v-if="!props.trailerLoading && movieTrailer"
      width="900"
      height="506"
      :src="movieTrailer"
      :title="props.trailer[0].name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
    <img
      v-else-if="!props.trailerLoading && !movieTrailer"
      :src="`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`"
      width="900"
      height="500"
      style="object-fit: cover"
    />
    <iframe
      v-else
      class="skeleton-list-item"
      width="900"
      height="506"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </section>
</template>
