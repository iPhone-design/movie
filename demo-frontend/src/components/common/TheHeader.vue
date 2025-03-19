<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const keyword = ref("");
const searchFlag = ref(false);

const search = () => {
  searchFlag.value = false;
  router.push("/movie/search?keyword=" + keyword.value);
};

onBeforeMount(async () => {
  await router.isReady();
  keyword.value = route.query.keyword;
});
</script>
<template>
  <header class="header">
    <RouterLink to="/"><h1 class="header__logo">Wave</h1></RouterLink>
    <ul class="header__navi">
      <li>
        <RouterLink to="/movie/now_playing">상영중</RouterLink>
      </li>
      <li>
        <RouterLink to="/movie/popular">인기작</RouterLink>
      </li>
      <li>
        <RouterLink to="/movie/upcoming">개봉예정</RouterLink>
      </li>
    </ul>
    <div class="header-search">
      <input
        v-model="keyword"
        type="text"
        class="header-search__input"
        placeholder="제목으로 찾아보세요."
        @keyup.enter="search"
      />
      <span class="material-symbols-outlined icon" @click="search">
        search
      </span>
    </div>
  </header>
  <nav class="navigator">
    <ul class="navigator-list">
      <li class="navigator-list__item" @click="router.push('/')">
        <img
          src="@/assets/icons/home.png"
          alt=""
          class="navigator-list__icon"
        />
        <strong class="navigator-list__txt">메인</strong>
      </li>
      <li
        class="navigator-list__item"
        @click="router.push('/movie/now_playing')"
      >
        <img
          src="@/assets/icons/live.png"
          alt=""
          class="navigator-list__icon"
        />
        <strong class="navigator-list__txt">상영중</strong>
      </li>
      <li class="navigator-list__item" @click="router.push('/movie/popular')">
        <img
          src="@/assets/icons/popluar.png"
          alt=""
          class="navigator-list__icon"
        />
        <strong class="navigator-list__txt">인기작</strong>
      </li>

      <li class="navigator-list__item" @click="router.push('/movie/upcoming')">
        <img
          src="@/assets/icons/video.png"
          alt=""
          class="navigator-list__icon"
        />
        <strong class="navigator-list__txt">개봉예정</strong>
      </li>
      <li class="navigator-list__item" @click="searchFlag = true">
        <img
          src="@/assets/icons/search.png"
          alt=""
          class="navigator-list__icon"
        />
        <strong class="navigator-list__txt">검색</strong>
      </li>
    </ul>
  </nav>
  <section v-if="searchFlag" class="search-box">
    <div class="search-input">
      <div class="search-wrap">
        <button @click="searchFlag = false">x</button>
        <input
          v-model="keyword"
          type="text"
          placeholder="영화 제목을 입력하세요"
          autocomplete="off"
          @keyup.enter="search"
        />
        <span class="material-symbols-outlined icon" @click="search">
          search
        </span>
      </div>
    </div>
  </section>
</template>
