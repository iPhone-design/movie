import {
  g as y,
  c as k,
  m as w,
  a as r,
  o as s,
  b as t,
  t as i,
  k as L,
  F as _,
  r as p,
  i as M,
  p as B,
  n as b,
  u as x,
  s as R,
  q as T,
  f as $,
  h as C,
  j as E,
  l as v,
} from "./index-DI_D98mm.js";
const S = { class: "movie list" },
  V = { class: "movie-subtext" },
  q = { class: "movie-list" },
  A = { key: 0 },
  N = ["src"],
  F = { key: 1, class: "skeleton-list-item" },
  H = { class: "movie-list__txt" },
  j = { class: "movie-list__title" },
  z = { class: "movie-list__desc" },
  D = { class: "movie-list__release" },
  U = {
    __name: "ListMovie",
    props: { movies: Array, loading: Boolean, moreLoading: Boolean },
    setup(g) {
      const n = y(),
        a = g,
        c = k(() => {
          switch (n.params.type) {
            case "now_playing":
              return "현재 사용중인 영화";
            case "popular":
              return "인기 있는 영화";
            case "upcoming":
              return "개봉예정 영화";
            case "top_rated":
              return "높은 평점을 받은 영화";
            case "search":
              return `'${n.query.keyword}' 검색결과`;
          }
        });
      return (u, o) => {
        const d = w("RouterLink");
        return (
          s(),
          r("section", S, [
            t("h4", V, i(c.value), 1),
            t("div", q, [
              a.movies
                ? (s(!0),
                  r(
                    _,
                    { key: 0 },
                    p(
                      a.movies,
                      (e) => (
                        s(),
                        r("div", { class: "movie-list__item", key: e.id }, [
                          M(
                            d,
                            { to: `/detail/${e.id}` },
                            {
                              default: B(() => [
                                e.poster_path
                                  ? (s(),
                                    r("figure", A, [
                                      t(
                                        "img",
                                        {
                                          src: `https://image.tmdb.org/t/p/w300/${e.poster_path}`,
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        N,
                                      ),
                                    ]))
                                  : (s(), r("figure", F)),
                                t("div", H, [
                                  t(
                                    "div",
                                    {
                                      class: b([
                                        "progress-circle",
                                        [
                                          `p${Math.floor(e.vote_average * 10)}`,
                                          {
                                            over50:
                                              Math.floor(e.vote_average * 10) >
                                              50,
                                          },
                                        ],
                                      ]),
                                    },
                                    [
                                      t(
                                        "span",
                                        null,
                                        i(Math.floor(e.vote_average * 10)) +
                                          "%",
                                        1,
                                      ),
                                      o[0] ||
                                        (o[0] = t(
                                          "div",
                                          { class: "left-half-clipper" },
                                          [
                                            t("div", { class: "first50-bar" }),
                                            t("div", { class: "value-bar" }),
                                          ],
                                          -1,
                                        )),
                                    ],
                                    2,
                                  ),
                                  t("strong", j, i(e.title), 1),
                                  t("p", z, i(e.overview), 1),
                                  t(
                                    "span",
                                    D,
                                    i(e.release_date.replace(/-/gi, ".")) +
                                      " / 평점 " +
                                      i(e.vote_average),
                                    1,
                                  ),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["to"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  ))
                : (s(!0),
                  r(
                    _,
                    { key: 1 },
                    p(
                      new Array(20).fill(0),
                      (e, l) => (
                        s(),
                        r(
                          "div",
                          { class: "movie-list__item", key: l },
                          o[1] ||
                            (o[1] = [
                              t(
                                "a",
                                { href: "#", class: "skeleton-list-item ui0" },
                                null,
                                -1,
                              ),
                            ]),
                        )
                      ),
                    ),
                    128,
                  )),
              a.moreLoading
                ? (s(!0),
                  r(
                    _,
                    { key: 2 },
                    p(
                      new Array(20).fill(0),
                      (e, l) => (
                        s(),
                        r(
                          "div",
                          { class: "movie-list__item", key: l },
                          o[2] ||
                            (o[2] = [
                              t(
                                "a",
                                { href: "#", class: "skeleton-list-item ui0" },
                                null,
                                -1,
                              ),
                            ]),
                        )
                      ),
                    ),
                    128,
                  ))
                : L("", !0),
            ]),
          ])
        );
      };
    },
  },
  I = {
    __name: "ListView",
    setup(g) {
      const n = y(),
        a = x(),
        c = n.params.type,
        u = n.query.keyword,
        {
          moreMovies: o,
          moreMoviesLoading: d,
          moreMoviesOneMorePageLoading: e,
        } = R(a),
        l = T(1);
      let m = null;
      const f = () => {
        m && clearTimeout(m),
          (m = setTimeout(() => {
            window.innerHeight + window.scrollY >=
              document.documentElement.offsetHeight &&
              a.getMoreMovies(++l.value, c, u);
          }, 200));
      };
      return (
        $(() => {
          a.getMoreMovies(1, c, u), window.addEventListener("scroll", f);
        }),
        C(() => {
          (o.value = []), window.removeEventListener("scroll", f);
        }),
        (h, Y) => (
          s(),
          E(
            U,
            {
              "sub-title": "Top Rated",
              title: "높은 평점을 받은 영화",
              movies: v(o),
              loading: v(d),
              moreLoading: v(e),
            },
            null,
            8,
            ["movies", "loading", "moreLoading"],
          )
        )
      );
    },
  };
export { I as default };
