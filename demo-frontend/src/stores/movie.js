import { ref } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/composables/useFetch.js";

export const useMovieStore = defineStore("counter", () => {
  const discoverMovies = ref([]);
  const discoverMoviesLoading = ref(false);

  const playingMovies = ref([]);
  const playingMoviesLoading = ref(false);

  const popularMovies = ref([]);
  const popularMoviesLoading = ref(false);

  const upcomingMovies = ref([]);
  const upcomingMoviesLoading = ref(false);

  const topRatedMovies = ref([]);
  const topRatedMoviesLoading = ref(false);

  const movie = ref({});
  const movieLoading = ref(false);

  const trailer = ref([]);
  const trailerLoading = ref(false);

  const credit = ref({});
  const creditLoading = ref(false);

  const moreMovies = ref([]);
  const moreMoviesOneMorePageLoading = ref(false);
  const moreMoviesLoading = ref(false);
  const moreMoviesTotalPage = ref(1);

  /**
   * 목록
   *
   * @param page
   * @param genres
   * @returns {Promise<void>}
   */
  const getMoviesBy = async (page = 1, genres) => {
    try {
      discoverMoviesLoading.value = true;

      const response = await useFetch("/api/discover/movie", "get", {
        page: page,
        genres: genres,
      });
      discoverMovies.value = response.data.results;

      discoverMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 현재 상영중 목록
   *
   * @param page
   * @returns {Promise<void>}
   */
  const getNowPlayingMovies = async (page = 1) => {
    try {
      playingMoviesLoading.value = true;

      const response = await useFetch("/api/movie/now_playing", "get", {
        page: page,
      });
      playingMovies.value = response.data.results;

      playingMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 인기 상영중 목록
   *
   * @param page
   * @returns {Promise<void>}
   */
  const getPopularMovies = async (page = 1) => {
    try {
      popularMoviesLoading.value = true;

      const response = await useFetch("/api/movie/popular", "get", {
        page: page,
      });
      popularMovies.value = response.data.results;

      popularMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 개봉 예정 목록
   *
   * @param page
   * @returns {Promise<void>}
   */
  const getUpcomingMovies = async (page = 1) => {
    try {
      upcomingMoviesLoading.value = true;

      const response = await useFetch("/api/movie/upcoming", "get", {
        page: page,
      });
      upcomingMovies.value = response.data.results;

      upcomingMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 높은 평점 목록
   *
   * @param page
   * @returns {Promise<void>}
   */
  const getTopRatedMovies = async (page = 1) => {
    try {
      topRatedMoviesLoading.value = true;

      const response = await useFetch("/api/movie/top_rated", "get", {
        page: page,
      });
      topRatedMovies.value = response.data.results;

      topRatedMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 더보기 목록
   *
   * @param page
   * @param type
   * @param keyword
   * @returns {Promise<void>}
   */
  const getMoreMovies = async (
    page = 1,
    type = "now_playing",
    keyword = "",
  ) => {
    try {
      if (page > moreMoviesTotalPage.value) return;
      if (type === "search" && keyword.trim() === "") return;
      if (page === 1) moreMoviesLoading.value = true;
      if (page > 1) moreMoviesOneMorePageLoading.value = true;

      let response = null;
      if (type === "search") {
        response = await useFetch("/api/search/movie", "get", {
          page: page,
          keyword: keyword,
        });
      } else {
        response = await useFetch(`/api/movie/${type}`, "get", {
          page: page,
        });
      }

      moreMovies.value = [...moreMovies.value, ...response.data.results];
      moreMoviesTotalPage.value = response.data.total_pages;

      moreMoviesOneMorePageLoading.value = false;
      moreMoviesLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 상세 조회
   *
   * @param id
   * @returns {Promise<void>}
   */
  const getMovieBy = async (id) => {
    try {
      movieLoading.value = true;

      const response = await useFetch("/api/movie/" + id, "get");
      movie.value = response.data;

      movieLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 트레일러
   *
   * @param id
   * @returns {Promise<void>}
   */
  const getVideoBy = async (id) => {
    try {
      trailerLoading.value = true;

      const response = await useFetch(`/api/movie/${id}/videos`, "get");
      trailer.value = response.data.results;

      trailerLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  /**
   * 크레딧
   *
   * @param id
   * @returns {Promise<void>}
   */
  const getCreditBy = async (id) => {
    try {
      creditLoading.value = true;

      const response = await useFetch(`/api/movie/${id}/credits`, "get");
      credit.value = response.data;

      creditLoading.value = false;
    } catch (e) {
      alert(e);
    }
  };

  return {
    discoverMovies,
    discoverMoviesLoading,
    playingMovies,
    playingMoviesLoading,
    popularMovies,
    popularMoviesLoading,
    upcomingMovies,
    upcomingMoviesLoading,
    topRatedMovies,
    topRatedMoviesLoading,
    movie,
    movieLoading,
    trailer,
    trailerLoading,
    credit,
    creditLoading,
    moreMovies,
    moreMoviesOneMorePageLoading,
    moreMoviesLoading,

    getMoviesBy,
    getNowPlayingMovies,
    getPopularMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    getMoreMovies,
    getMovieBy,
    getVideoBy,
    getCreditBy,
  };
});
