<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "vue";

const props = defineProps({
  title: String,
  subTitle: String,
  movies: Array,
  loading: Boolean,
  type: String,
});

const slidePerView = computed(() => {
  const width = window.innerWidth;
  if (width >= 980) return new Array(5).fill(0);
  if (width >= 740) return new Array(4).fill(0);
  if (width >= 480) return new Array(3).fill(0);
  if (width >= 380) return new Array(2).fill(0);
  return new Array(1).fill(0);
});
</script>

<template>
  <section class="movie">
    <h3 class="movie-category">{{ props.subTitle }}</h3>
    <h4 class="movie-subtext">
      {{ props.title }}
      <RouterLink
        v-if="props.type && props.type !== 'relative'"
        :to="`/movie/${type}`"
        >더보기
      </RouterLink>
    </h4>
    <div class="movie-list" :class="{ loading: props.loading }">
      <swiper
        :slides-per-view="1"
        :breakpoints="{
          '380': {
            slidesPerView: 2,
          },
          '480': {
            slidesPerView: 3,
          },
          '740': {
            slidesPerView: 4,
          },
          '980': {
            slidesPerView: 5,
          },
        }"
        v-if="!props.loading"
      >
        <swiper-slide v-for="movie in props.movies" :key="movie.id">
          <div class="movie-list__item">
            <RouterLink :to="`/detail/${movie.id}`">
              <figure>
                <img
                  :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
                  alt=""
                />
              </figure>
              <div class="movie-list__txt">
                <div
                  class="progress-circle"
                  :class="[
                    `p${Math.floor(movie.vote_average * 10)}`,
                    { over50: Math.floor(movie.vote_average * 10) > 50 },
                  ]"
                >
                  <span>{{ Math.floor(movie.vote_average * 10) }}%</span>
                  <div class="left-half-clipper">
                    <div class="first50-bar"></div>
                    <div class="value-bar"></div>
                  </div>
                </div>
                <strong class="movie-list__title">{{ movie.title }}</strong>
                <span class="release_date">{{
                  movie.release_date?.replace(/-/gi, ".")
                }}</span>
              </div>
            </RouterLink>
          </div>
        </swiper-slide>
      </swiper>
      <template v-else>
        <div
          class="movie-list__item"
          v-for="(dummy, index) in slidePerView"
          :key="index"
        >
          <a href="#" class="skeleton-list-item ui0"> </a>
        </div>
      </template>
    </div>
  </section>
</template>
