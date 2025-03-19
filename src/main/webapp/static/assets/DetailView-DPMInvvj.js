import {
  c as p,
  a as n,
  o as a,
  b as i,
  t as c,
  n as T,
  F as k,
  r as C,
  d as f,
  e as M,
  u as $,
  s as j,
  f as B,
  g as L,
  w as N,
  h as V,
  i as w,
  j as x,
  k as O,
  l as r,
  _ as S,
} from "./index-hJIzAj-7.js";
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
      return (g, v) => (
        a(),
        n("section", F, [
          !e.loading && s.value
            ? (a(),
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
              ? (a(),
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
              : (a(), n("iframe", z)),
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
          const t = Math.floor(o / 60),
            d = o % 60;
          let m = "";
          return (
            t > 0 && (m += `${t}h`), (d > 0 || t === 0) && (m += `${d}m`), m
          );
        },
        g = p(() => {
          if (e.movie && e.movie.production_companies.length > 0)
            return e.movie.production_companies.map((o) => o.name).join("•");
        }),
        v = p(() =>
          e.credit && e.credit.cast && e.credit.cast.length > 0
            ? e.credit.cast
                .filter(
                  (o) => o.known_for_department === "Acting" && o.order <= 4,
                )
                .map((o) => o.name)
                .join("•")
            : "",
        ),
        u = p(() =>
          e.credit && e.credit.crew && e.credit.crew.length > 0
            ? e.credit.crew
                .filter((o) => o.job === "Director")
                .map((o) => o.name)
                .join("•")
            : "",
        );
      return (o, t) => (
        a(),
        n("section", H, [
          e.loading
            ? (a(),
              n(
                "div",
                X,
                t[7] ||
                  (t[7] = [
                    M(
                      '<div class="detail-info"><h2 class="detail-title skeleton-list-item ui3"></h2><ul class="detail-features skeleton-list-item ui4"></ul><p class="skeleton-list-item ui4"></p><ul class="detail-maker"><li class="skeleton-list-item ui5"></li><li class="skeleton-list-item ui5"></li><li class="skeleton-list-item ui5"></li></ul></div><div class="detail-poster"><a href="#" class="skeleton-list-item ui0"></a></div>',
                      2,
                    ),
                  ]),
              ))
            : (a(),
              n("div", I, [
                i("div", P, [
                  i("h2", U, c(e.movie.title), 1),
                  i("ul", Y, [
                    i("li", q, [
                      i(
                        "div",
                        {
                          class: T([
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
                          i(
                            "span",
                            null,
                            c(e.movie.vote_average * 10) + "%",
                            1,
                          ),
                          t[0] ||
                            (t[0] = i(
                              "div",
                              { class: "left-half-clipper" },
                              [
                                i("div", { class: "first50-bar" }),
                                i("div", { class: "value-bar" }),
                              ],
                              -1,
                            )),
                        ],
                        2,
                      ),
                    ]),
                    (a(!0),
                    n(
                      k,
                      null,
                      C(
                        e.movie.genres.map((d) => d.name),
                        (d, m) => (
                          a(),
                          n("li", { class: "features-item", key: m }, c(d), 1)
                        ),
                      ),
                      128,
                    )),
                    i("li", G, c(s(e.movie.runtime)), 1),
                  ]),
                  i("p", J, c(e.movie.overview), 1),
                  i("ul", K, [
                    i("li", null, [
                      t[1] || (t[1] = i("strong", null, "Director", -1)),
                      t[2] || (t[2] = f(" : ")),
                      i("span", null, c(u.value), 1),
                    ]),
                    i("li", null, [
                      t[3] || (t[3] = i("strong", null, "Casting", -1)),
                      t[4] || (t[4] = f(" : ")),
                      i("span", null, c(v.value), 1),
                    ]),
                    i("li", null, [
                      t[5] || (t[5] = i("strong", null, "Production", -1)),
                      t[6] || (t[6] = f(" : ")),
                      i("span", null, c(g.value), 1),
                    ]),
                  ]),
                ]),
                i("div", Q, [
                  i(
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
  ie = {
    __name: "DetailView",
    setup(_) {
      const e = L(),
        s = $(),
        {
          discoverMovies: g,
          discoverMoviesLoading: v,
          movie: u,
          movieLoading: o,
          trailer: t,
          trailerLoading: d,
          credit: m,
          creditLoading: y,
        } = j(s);
      B(() => {
        const l = e.params.id;
        s.getMovieBy(l), s.getVideoBy(l), s.getCreditBy(l);
      });
      const b = p(() => {
          var l;
          return (
            ((l = u.value.genres) == null
              ? void 0
              : l.map((D) => D.id).join(",")) || ""
          );
        }),
        h = p(() => g.value.filter((l) => l.id !== Number(e.params.id)));
      return (
        N(b, (l) => {
          s.getMoviesBy(1, l);
        }),
        V(() => {
          (u.value = []), (v.value = !0);
        }),
        (l, D) => (
          a(),
          n(
            k,
            null,
            [
              w(
                E,
                { "movie-detail": r(u), "movie-trailers": r(t), loading: r(d) },
                null,
                8,
                ["movie-detail", "movie-trailers", "loading"],
              ),
              w(
                Z,
                {
                  "movie-detail": r(u),
                  loading: r(o),
                  "movie-credits": r(m),
                  "credit-loading": r(y),
                  "movie-discover": r(g),
                  "discover-loading": r(v),
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
                ? (a(),
                  x(
                    S,
                    {
                      key: 0,
                      "sub-title": "Relative Movies",
                      title: "비슷한 장르의 영화",
                      type: "relative",
                      movies: h.value,
                      loading: r(v),
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
export { ie as default };
