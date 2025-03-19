<script setup>
import { computed } from "vue";

const props = defineProps({
  movie: Object,
  movieLoading: Boolean,
  credit: Object,
  creditLoading: Boolean,
  discoverMovies: Object,
  discoverMoviesLoading: Boolean,
});

const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainMinutes = minutes % 60;

  let result = "";
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (remainMinutes > 0 || hours === 0) {
    result += `${remainMinutes}m`;
  }
  return result;
};

const production = computed(() => {
  if (props.movie && props.movie.production_companies.length > 0) {
    return props.movie.production_companies.map((v) => v.name).join("•");
  }
});

const casting = computed(() => {
  if (props.credit && props.credit.cast && props.credit.cast.length > 0) {
    return props.credit.cast
      .filter((v) => v.known_for_department === "Acting" && v.order <= 4)
      .map((v) => v.name)
      .join("•");
  }
  return "";
});

const director = computed(() => {
  if (props.credit && props.credit.crew && props.credit.crew.length > 0) {
    return props.credit.crew
      .filter((v) => v.job === "Director")
      .map((v) => v.name)
      .join("•");
  }
  return "";
});
</script>

<template>
  <section class="detail">
    <div class="detail-wrap" v-if="!props.movieLoading">
      <div class="detail-info">
        <h2 class="detail-title">{{ props.movie.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div
              class="progress-circle"
              :class="[
                `p${Math.floor(props.movie.vote_average * 10)}`,
                {
                  over50: Math.floor(props.movie.vote_average * 10) > 50,
                },
              ]"
            >
              <span>{{ props.movie.vote_average * 10 }}%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li
            class="features-item"
            v-for="(genre, index) in props.movie.genres.map((v) => v.name)"
            :key="index"
          >
            {{ genre }}
          </li>
          <li class="features-item">
            {{ convertMinutesToHours(props.movie.runtime) }}
          </li>
        </ul>
        <p class="detail-desc">
          {{ props.movie.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span>{{ director }}</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span>{{ casting }}</span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span>{{ production }}</span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`"
          alt=""
        />
      </div>
    </div>
    <div class="detail-wrap" v-else>
      <div class="detail-info">
        <h2 class="detail-title skeleton-list-item ui3"></h2>
        <ul class="detail-features skeleton-list-item ui4"></ul>
        <p class="skeleton-list-item ui4"></p>
        <ul class="detail-maker">
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
        </ul>
      </div>
      <div class="detail-poster">
        <a href="#" class="skeleton-list-item ui0"></a>
      </div>
    </div>
  </section>
</template>
