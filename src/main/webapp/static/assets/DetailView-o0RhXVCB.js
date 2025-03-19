import {
  c as p,
  a as n,
  o as l,
  b as t,
  t as d,
  n as M,
  F as k,
  r as $,
  d as f,
  e as j,
  u as D,
  s as L,
  f as V,
  g as N,
  w as T,
  h as x,
  i as w,
  j as C,
  k as O,
  l as a,
  _ as S,
} from "./index-Dd3xZI8x.js";
const F = { class: "trailer" },
  R = ["src", "title"],
  A = ["src"],
  z = {
    key: 2,
    class: "skeleton-list-item",
    width: "900",
    height: "506",
    title: "YouTube video player",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen: "",
  },
  E = {
    __name: "DetailTrailer",
    props: { movie: Object, trailer: Array, loading: Boolean },
    setup(_) {
      const e = _,
        s = p(() =>
          e.trailer.length > 0 && e.trailer[0].site && e.trailer[0].key
            ? e.trailer[0].site.toLowerCase() === "youtube"
              ? "http://www.youtube.com/embed/" + e.trailer[0].key
              : "http://player.vimeo.com/video/" + e.trailer[0].key
            : null,
        );
      return (g, m) => (
        l(),
        n("section", F, [
          !e.loading && s.value
            ? (l(),
              n(
                "iframe",
                {
                  key: 0,
                  width: "900",
                  height: "506",
                  src: s.value,
                  title: e.trailer[0].name,
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowfullscreen: "",
                },
                null,
                8,
                R,
              ))
            : !e.loading && !s.value
              ? (l(),
                n(
                  "img",
                  {
                    key: 1,
                    src: `https://image.tmdb.org/t/p/original/${e.movie.poster_path}`,
                    width: "900",
                    height: "500",
                    style: { "object-fit": "cover" },
                  },
                  null,
                  8,
                  A,
                ))
              : (l(), n("iframe", z)),
        ])
      );
    },
  },
  H = { class: "detail" },
  I = { key: 0, class: "detail-wrap" },
  P = { class: "detail-info" },
  U = { class: "detail-title" },
  Y = { class: "detail-features" },
  q = { class: "features-item" },
  G = { class: "features-item" },
  J = { class: "detail-desc" },
  K = { class: "detail-maker" },
  Q = { class: "detail-poster" },
  W = ["src"],
  X = { key: 1, class: "detail-wrap" },
  Z = {
    __name: "DetailInfo",
    props: {
      movie: Object,
      loading: Boolean,
      credit: Object,
      creditLoading: Boolean,
      movieDiscover: Object,
      discoverLoading: Boolean,
    },
    setup(_) {
      const e = _,
        s = (o) => {
          const i = Math.floor(o / 60),
            c = o % 60;
          let u = "";
          return (
            i > 0 && (u += `${i}h`), (c > 0 || i === 0) && (u += `${c}m`), u
          );
        },
        g = p(() => {
          if (e.movie && e.movie.production_companies.length > 0)
            return e.movie.production_companies.map((o) => o.name).join("•");
        }),
        m = p(() =>
          e.credit && e.credit.cast && e.credit.cast.length > 0
            ? e.credit.cast
                .filter(
                  (o) => o.known_for_department === "Acting" && o.order <= 4,
                )
                .map((o) => o.name)
                .join("•")
            : "",
        ),
        v = p(() =>
          e.credit && e.credit.crew && e.credit.crew.length > 0
            ? e.credit.crew
                .filter((o) => o.job === "Director")
                .map((o) => o.name)
                .join("•")
            : "",
        );
      return (o, i) => (
        l(),
        n("section", H, [
          e.loading
            ? (l(),
              n(
                "div",
                X,
                i[7] ||
                  (i[7] = [
                    j(
                      '<div class="detail-info"><h2 class="detail-title skeleton-list-item ui3"></h2><ul class="detail-features skeleton-list-item ui4"></ul><p class="skeleton-list-item ui4"></p><ul class="detail-maker"><li class="skeleton-list-item ui5"></li><li class="skeleton-list-item ui5"></li><li class="skeleton-list-item ui5"></li></ul></div><div class="detail-poster"><a href="#" class="skeleton-list-item ui0"></a></div>',
                      2,
                    ),
                  ]),
              ))
            : (l(),
              n("div", I, [
                t("div", P, [
                  t("h2", U, d(e.movie.title), 1),
                  t("ul", Y, [
                    t("li", q, [
                      t(
                        "div",
                        {
                          class: M([
                            "progress-circle",
                            [
                              `p${Math.floor(e.movie.vote_average * 10)}`,
                              {
                                over50:
                                  Math.floor(e.movie.vote_average * 10) > 50,
                              },
                            ],
                          ]),
                        },
                        [
                          t(
                            "span",
                            null,
                            d(e.movie.vote_average * 10) + "%",
                            1,
                          ),
                          i[0] ||
                            (i[0] = t(
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
                    ]),
                    (l(!0),
                    n(
                      k,
                      null,
                      $(
                        e.movie.genres.map((c) => c.name),
                        (c, u) => (
                          l(),
                          n("li", { class: "features-item", key: u }, d(c), 1)
                        ),
                      ),
                      128,
                    )),
                    t("li", G, d(s(e.movie.runtime)), 1),
                  ]),
                  t("p", J, d(e.movie.overview), 1),
                  t("ul", K, [
                    t("li", null, [
                      i[1] || (i[1] = t("strong", null, "Director", -1)),
                      i[2] || (i[2] = f(" : ")),
                      t("span", null, d(v.value), 1),
                    ]),
                    t("li", null, [
                      i[3] || (i[3] = t("strong", null, "Casting", -1)),
                      i[4] || (i[4] = f(" : ")),
                      t("span", null, d(m.value), 1),
                    ]),
                    t("li", null, [
                      i[5] || (i[5] = t("strong", null, "Production", -1)),
                      i[6] || (i[6] = f(" : ")),
                      t("span", null, d(g.value), 1),
                    ]),
                  ]),
                ]),
                t("div", Q, [
                  t(
                    "img",
                    {
                      src: `https://image.tmdb.org/t/p/w500/${e.movie.poster_path}`,
                      alt: "",
                    },
                    null,
                    8,
                    W,
                  ),
                ]),
              ])),
        ])
      );
    },
  },
  te = {
    __name: "DetailView",
    setup(_) {
      const e = N(),
        s = D(),
        {
          discoverMovies: g,
          discoverMoviesLoading: m,
          movie: v,
          movieLoading: o,
          trailer: i,
          trailerLoading: c,
          credit: u,
          creditLoading: b,
        } = L(s);
      V(() => {
        const r = e.params.id;
        s.getMovieBy(r), s.getVideoBy(r), s.getCreditBy(r);
      });
      const B = p(() => {
          var r;
          return (
            ((r = v.value.genres) == null
              ? void 0
              : r.map((y) => y.id).join(",")) || ""
          );
        }),
        h = p(() => g.value.filter((r) => r.id !== Number(e.params.id)));
      return (
        T(B, (r) => {
          s.getMoviesBy(1, r);
        }),
        x(() => {
          (v.value = []), (m.value = !0);
        }),
        (r, y) => (
          l(),
          n(
            k,
            null,
            [
              w(
                E,
                { "movie-detail": a(v), "movie-trailers": a(i), loading: a(c) },
                null,
                8,
                ["movie-detail", "movie-trailers", "loading"],
              ),
              w(
                Z,
                {
                  "movie-detail": a(v),
                  loading: a(o),
                  "movie-credits": a(u),
                  "credit-loading": a(b),
                  "movie-discover": a(g),
                  "discover-loading": a(m),
                },
                null,
                8,
                [
                  "movie-detail",
                  "loading",
                  "movie-credits",
                  "credit-loading",
                  "movie-discover",
                  "discover-loading",
                ],
              ),
              h.value.length > 0
                ? (l(),
                  C(
                    S,
                    {
                      key: 0,
                      "sub-title": "Relative Movies",
                      title: "비슷한 장르의 영화",
                      type: "relative",
                      movies: h.value,
                      loading: a(m),
                    },
                    null,
                    8,
                    ["movies", "loading"],
                  ))
                : O("", !0),
            ],
            64,
          )
        )
      );
    },
  };
export { te as default };
