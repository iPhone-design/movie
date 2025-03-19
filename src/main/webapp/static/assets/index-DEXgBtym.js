(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ir(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {},
  Jt = [],
  ct = () => {},
  $a = () => !1,
  ps = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Lr = (e) => e.startsWith("onUpdate:"),
  Oe = Object.assign,
  Br = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Wa = Object.prototype.hasOwnProperty,
  ae = (e, t) => Wa.call(e, t),
  J = Array.isArray,
  Zt = (e) => hs(e) === "[object Map]",
  Io = (e) => hs(e) === "[object Set]",
  ee = (e) => typeof e == "function",
  ye = (e) => typeof e == "string",
  yt = (e) => typeof e == "symbol",
  me = (e) => e !== null && typeof e == "object",
  Lo = (e) => (me(e) || ee(e)) && ee(e.then) && ee(e.catch),
  Bo = Object.prototype.toString,
  hs = (e) => Bo.call(e),
  qa = (e) => hs(e).slice(8, -1),
  Do = (e) => hs(e) === "[object Object]",
  Dr = (e) =>
    ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  wn = Ir(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ms = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ka = /-(\w)/g,
  Ke = ms((e) => e.replace(Ka, (t, n) => (n ? n.toUpperCase() : ""))),
  Ya = /\B([A-Z])/g,
  Mt = ms((e) => e.replace(Ya, "-$1").toLowerCase()),
  gs = ms((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ds = ms((e) => (e ? `on${gs(e)}` : "")),
  Pt = (e, t) => !Object.is(e, t),
  Kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  No = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  or = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ci;
const vs = () =>
  ci ||
  (ci =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function ws(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ye(s) ? Za(s) : ws(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (ye(e) || me(e)) return e;
}
const Xa = /;(?![^(]*\))/g,
  Qa = /:([^]+)/,
  Ja = /\/\*[^]*?\*\//g;
function Za(e) {
  const t = {};
  return (
    e
      .replace(Ja, "")
      .split(Xa)
      .forEach((n) => {
        if (n) {
          const s = n.split(Qa);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function _n(e) {
  let t = "";
  if (ye(e)) t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = _n(e[n]);
      s && (t += s + " ");
    }
  else if (me(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ec =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  tc = Ir(ec);
function Fo(e) {
  return !!e || e === "";
}
const ko = (e) => !!(e && e.__v_isRef === !0),
  _t = (e) =>
    ye(e)
      ? e
      : e == null
        ? ""
        : J(e) || (me(e) && (e.toString === Bo || !ee(e.toString)))
          ? ko(e)
            ? _t(e.value)
            : JSON.stringify(e, jo, 2)
          : String(e),
  jo = (e, t) =>
    ko(t)
      ? jo(e, t.value)
      : Zt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Ns(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : Io(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ns(n)) }
          : yt(t)
            ? Ns(t)
            : me(t) && !J(t) && !Do(t)
              ? String(t)
              : t,
  Ns = (e, t = "") => {
    var n;
    return yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Me;
class Vo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Me),
      !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Me;
      try {
        return (Me = this), t();
      } finally {
        Me = n;
      }
    }
  }
  on() {
    Me = this;
  }
  off() {
    Me = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function zo(e) {
  return new Vo(e);
}
function Ho() {
  return Me;
}
function nc(e, t = !1) {
  Me && Me.cleanups.push(e);
}
let he;
const Fs = new WeakSet();
class Uo {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Me && Me.active && Me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Fs.has(this) && (Fs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || $o(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), ui(this), Wo(this);
    const t = he,
      n = Qe;
    (he = this), (Qe = !0);
    try {
      return this.fn();
    } finally {
      qo(this), (he = t), (Qe = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) kr(t);
      (this.deps = this.depsTail = void 0),
        ui(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Fs.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    lr(this) && this.run();
  }
  get dirty() {
    return lr(this);
  }
}
let Go = 0,
  yn,
  bn;
function $o(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = bn), (bn = e);
    return;
  }
  (e.next = yn), (yn = e);
}
function Nr() {
  Go++;
}
function Fr() {
  if (--Go > 0) return;
  if (bn) {
    let t = bn;
    for (bn = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; yn; ) {
    let t = yn;
    for (yn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Wo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function qo(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), kr(s), sc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function lr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ko(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Ko(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Cn)
  )
    return;
  e.globalVersion = Cn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !lr(e))) {
    e.flags &= -3;
    return;
  }
  const n = he,
    s = Qe;
  (he = e), (Qe = !0);
  try {
    Wo(e);
    const r = e.fn(e._value);
    (t.version === 0 || Pt(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (he = n), (Qe = s), qo(e), (e.flags &= -3);
  }
}
function kr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) kr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function sc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Qe = !0;
const Yo = [];
function It() {
  Yo.push(Qe), (Qe = !1);
}
function Lt() {
  const e = Yo.pop();
  Qe = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = he;
    he = void 0;
    try {
      t();
    } finally {
      he = n;
    }
  }
}
let Cn = 0;
class rc {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class jr {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!he || !Qe || he === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== he)
      (n = this.activeLink = new rc(he, this)),
        he.deps
          ? ((n.prevDep = he.depsTail),
            (he.depsTail.nextDep = n),
            (he.depsTail = n))
          : (he.deps = he.depsTail = n),
        Xo(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = he.depsTail),
        (n.nextDep = void 0),
        (he.depsTail.nextDep = n),
        (he.depsTail = n),
        he.deps === n && (he.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Cn++, this.notify(t);
  }
  notify(t) {
    Nr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fr();
    }
  }
}
function Xo(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Xo(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const ns = new WeakMap(),
  kt = Symbol(""),
  ar = Symbol(""),
  Pn = Symbol("");
function Ae(e, t, n) {
  if (Qe && he) {
    let s = ns.get(e);
    s || ns.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new jr())), (r.map = s), (r.key = n)), r.track();
  }
}
function mt(e, t, n, s, r, i) {
  const o = ns.get(e);
  if (!o) {
    Cn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Nr(), t === "clear")) o.forEach(l);
  else {
    const a = J(e),
      u = a && Dr(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((f, d) => {
        (d === "length" || d === Pn || (!yt(d) && d >= c)) && l(f);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Pn)), t)
      ) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(kt)), Zt(e) && l(o.get(ar)));
          break;
        case "delete":
          a || (l(o.get(kt)), Zt(e) && l(o.get(ar)));
          break;
        case "set":
          Zt(e) && l(o.get(kt));
          break;
      }
  }
  Fr();
}
function ic(e, t) {
  const n = ns.get(e);
  return n && n.get(t);
}
function qt(e) {
  const t = oe(e);
  return t === e ? t : (Ae(t, "iterate", Pn), We(e) ? t : t.map(_e));
}
function ys(e) {
  return Ae((e = oe(e)), "iterate", Pn), e;
}
const oc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ks(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return qt(this).concat(...e.map((t) => (J(t) ? qt(t) : t)));
  },
  entries() {
    return ks(this, "entries", (e) => ((e[1] = _e(e[1])), e));
  },
  every(e, t) {
    return ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ft(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return ft(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ft(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return js(this, "includes", e);
  },
  indexOf(...e) {
    return js(this, "indexOf", e);
  },
  join(e) {
    return qt(this).join(e);
  },
  lastIndexOf(...e) {
    return js(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return pn(this, "pop");
  },
  push(...e) {
    return pn(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return pn(this, "shift");
  },
  some(e, t) {
    return ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return pn(this, "splice", e);
  },
  toReversed() {
    return qt(this).toReversed();
  },
  toSorted(e) {
    return qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return pn(this, "unshift", e);
  },
  values() {
    return ks(this, "values", _e);
  },
};
function ks(e, t, n) {
  const s = ys(e),
    r = s[t]();
  return (
    s !== e &&
      !We(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const lc = Array.prototype;
function ft(e, t, n, s, r, i) {
  const o = ys(e),
    l = o !== e && !We(e),
    a = o[t];
  if (a !== lc[t]) {
    const f = a.apply(e, i);
    return l ? _e(f) : f;
  }
  let u = n;
  o !== e &&
    (l
      ? (u = function (f, d) {
          return n.call(this, _e(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = a.call(o, u, s);
  return l && r ? r(c) : c;
}
function fi(e, t, n, s) {
  const r = ys(e);
  let i = n;
  return (
    r !== e &&
      (We(e)
        ? n.length > 3 &&
          (i = function (o, l, a) {
            return n.call(this, o, l, a, e);
          })
        : (i = function (o, l, a) {
            return n.call(this, o, _e(l), a, e);
          })),
    r[t](i, ...s)
  );
}
function js(e, t, n) {
  const s = oe(e);
  Ae(s, "iterate", Pn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Hr(n[0])
    ? ((n[0] = oe(n[0])), s[t](...n))
    : r;
}
function pn(e, t, n = []) {
  It(), Nr();
  const s = oe(e)[t].apply(e, n);
  return Fr(), Lt(), s;
}
const ac = Ir("__proto__,__v_isRef,__isVue"),
  Qo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(yt),
  );
function cc(e) {
  yt(e) || (e = String(e));
  const t = oe(this);
  return Ae(t, "has", e), t.hasOwnProperty(e);
}
class Jo {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? yc : nl) : i ? tl : el).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = J(t);
    if (!r) {
      let a;
      if (o && (a = oc[n])) return a;
      if (n === "hasOwnProperty") return cc;
    }
    const l = Reflect.get(t, n, ve(t) ? t : s);
    return (yt(n) ? Qo.has(n) : ac(n)) || (r || Ae(t, "get", n), i)
      ? l
      : ve(l)
        ? o && Dr(n)
          ? l
          : l.value
        : me(l)
          ? r
            ? rl(l)
            : Nn(l)
          : l;
  }
}
class Zo extends Jo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = zt(i);
      if (
        (!We(s) && !zt(s) && ((i = oe(i)), (s = oe(s))),
        !J(t) && ve(i) && !ve(s))
      )
        return a ? !1 : ((i.value = s), !0);
    }
    const o = J(t) && Dr(n) ? Number(n) < t.length : ae(t, n),
      l = Reflect.set(t, n, s, ve(t) ? t : r);
    return (
      t === oe(r) && (o ? Pt(s, i) && mt(t, "set", n, s) : mt(t, "add", n, s)),
      l
    );
  }
  deleteProperty(t, n) {
    const s = ae(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && mt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !Qo.has(n)) && Ae(t, "has", n), s;
  }
  ownKeys(t) {
    return Ae(t, "iterate", J(t) ? "length" : kt), Reflect.ownKeys(t);
  }
}
class uc extends Jo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const fc = new Zo(),
  dc = new uc(),
  pc = new Zo(!0);
const cr = (e) => e,
  Hn = (e) => Reflect.getPrototypeOf(e);
function hc(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = oe(r),
      o = Zt(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      u = r[e](...s),
      c = n ? cr : t ? ur : _e;
    return (
      !t && Ae(i, "iterate", a ? ar : kt),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: l ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Un(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mc(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = oe(i),
        l = oe(r);
      e || (Pt(r, l) && Ae(o, "get", r), Ae(o, "get", l));
      const { has: a } = Hn(o),
        u = t ? cr : e ? ur : _e;
      if (a.call(o, r)) return u(i.get(r));
      if (a.call(o, l)) return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ae(oe(r), "iterate", kt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw,
        o = oe(i),
        l = oe(r);
      return (
        e || (Pt(r, l) && Ae(o, "has", r), Ae(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        a = oe(l),
        u = t ? cr : e ? ur : _e;
      return (
        !e && Ae(a, "iterate", kt),
        l.forEach((c, f) => r.call(i, u(c), u(f), o))
      );
    },
  };
  return (
    Oe(
      n,
      e
        ? {
            add: Un("add"),
            set: Un("set"),
            delete: Un("delete"),
            clear: Un("clear"),
          }
        : {
            add(r) {
              !t && !We(r) && !zt(r) && (r = oe(r));
              const i = oe(this);
              return (
                Hn(i).has.call(i, r) || (i.add(r), mt(i, "add", r, r)), this
              );
            },
            set(r, i) {
              !t && !We(i) && !zt(i) && (i = oe(i));
              const o = oe(this),
                { has: l, get: a } = Hn(o);
              let u = l.call(o, r);
              u || ((r = oe(r)), (u = l.call(o, r)));
              const c = a.call(o, r);
              return (
                o.set(r, i),
                u ? Pt(i, c) && mt(o, "set", r, i) : mt(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = oe(this),
                { has: o, get: l } = Hn(i);
              let a = o.call(i, r);
              a || ((r = oe(r)), (a = o.call(i, r))), l && l.call(i, r);
              const u = i.delete(r);
              return a && mt(i, "delete", r, void 0), u;
            },
            clear() {
              const r = oe(this),
                i = r.size !== 0,
                o = r.clear();
              return i && mt(r, "clear", void 0, void 0), o;
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = hc(r, e, t);
    }),
    n
  );
}
function Vr(e, t) {
  const n = mc(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(ae(n, r) && r in s ? n : s, r, i);
}
const gc = { get: Vr(!1, !1) },
  vc = { get: Vr(!1, !0) },
  wc = { get: Vr(!0, !1) };
const el = new WeakMap(),
  tl = new WeakMap(),
  nl = new WeakMap(),
  yc = new WeakMap();
function bc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Sc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bc(qa(e));
}
function Nn(e) {
  return zt(e) ? e : zr(e, !1, fc, gc, el);
}
function sl(e) {
  return zr(e, !1, pc, vc, tl);
}
function rl(e) {
  return zr(e, !0, dc, wc, nl);
}
function zr(e, t, n, s, r) {
  if (!me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = Sc(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function wt(e) {
  return zt(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zt(e) {
  return !!(e && e.__v_isReadonly);
}
function We(e) {
  return !!(e && e.__v_isShallow);
}
function Hr(e) {
  return e ? !!e.__v_raw : !1;
}
function oe(e) {
  const t = e && e.__v_raw;
  return t ? oe(t) : e;
}
function Ur(e) {
  return (
    !ae(e, "__v_skip") && Object.isExtensible(e) && No(e, "__v_skip", !0), e
  );
}
const _e = (e) => (me(e) ? Nn(e) : e),
  ur = (e) => (me(e) ? rl(e) : e);
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ne(e) {
  return il(e, !1);
}
function Ec(e) {
  return il(e, !0);
}
function il(e, t) {
  return ve(e) ? e : new xc(e, t);
}
class xc {
  constructor(t, n) {
    (this.dep = new jr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : oe(t)),
      (this._value = n ? t : _e(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || We(t) || zt(t);
    (t = s ? t : oe(t)),
      Pt(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : _e(t)),
        this.dep.trigger());
  }
}
function ge(e) {
  return ve(e) ? e.value : e;
}
const Tc = {
  get: (e, t, n) => (t === "__v_raw" ? e : ge(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return ve(r) && !ve(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function ol(e) {
  return wt(e) ? e : new Proxy(e, Tc);
}
function Ac(e) {
  const t = J(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = ll(e, n);
  return t;
}
class _c {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ic(oe(this._object), this._key);
  }
}
class Cc {
  constructor(t) {
    (this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Pc(e, t, n) {
  return ve(e)
    ? e
    : ee(e)
      ? new Cc(e)
      : me(e) && arguments.length > 1
        ? ll(e, t, n)
        : ne(e);
}
function ll(e, t, n) {
  const s = e[t];
  return ve(s) ? s : new _c(e, t, n);
}
class Oc {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new jr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Cn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && he !== this))
      return $o(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ko(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Rc(e, t, n = !1) {
  let s, r;
  return ee(e) ? (s = e) : ((s = e.get), (r = e.set)), new Oc(s, r, n);
}
const Gn = {},
  ss = new WeakMap();
let Nt;
function Mc(e, t = !1, n = Nt) {
  if (n) {
    let s = ss.get(n);
    s || ss.set(n, (s = [])), s.push(e);
  }
}
function Ic(e, t, n = fe) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    u = (T) => (r ? T : We(T) || r === !1 || r === 0 ? gt(T, 1) : gt(T));
  let c,
    f,
    d,
    p,
    g = !1,
    v = !1;
  if (
    (ve(e)
      ? ((f = () => e.value), (g = We(e)))
      : wt(e)
        ? ((f = () => u(e)), (g = !0))
        : J(e)
          ? ((v = !0),
            (g = e.some((T) => wt(T) || We(T))),
            (f = () =>
              e.map((T) => {
                if (ve(T)) return T.value;
                if (wt(T)) return u(T);
                if (ee(T)) return a ? a(T, 2) : T();
              })))
          : ee(e)
            ? t
              ? (f = a ? () => a(e, 2) : e)
              : (f = () => {
                  if (d) {
                    It();
                    try {
                      d();
                    } finally {
                      Lt();
                    }
                  }
                  const T = Nt;
                  Nt = c;
                  try {
                    return a ? a(e, 3, [p]) : e(p);
                  } finally {
                    Nt = T;
                  }
                })
            : (f = ct),
    t && r)
  ) {
    const T = f,
      O = r === !0 ? 1 / 0 : r;
    f = () => gt(T(), O);
  }
  const y = Ho(),
    b = () => {
      c.stop(), y && y.active && Br(y.effects, c);
    };
  if (i && t) {
    const T = t;
    t = (...O) => {
      T(...O), b();
    };
  }
  let S = v ? new Array(e.length).fill(Gn) : Gn;
  const E = (T) => {
    if (!(!(c.flags & 1) || (!c.dirty && !T)))
      if (t) {
        const O = c.run();
        if (r || g || (v ? O.some((U, k) => Pt(U, S[k])) : Pt(O, S))) {
          d && d();
          const U = Nt;
          Nt = c;
          try {
            const k = [O, S === Gn ? void 0 : v && S[0] === Gn ? [] : S, p];
            a ? a(t, 3, k) : t(...k), (S = O);
          } finally {
            Nt = U;
          }
        }
      } else c.run();
  };
  return (
    l && l(E),
    (c = new Uo(f)),
    (c.scheduler = o ? () => o(E, !1) : E),
    (p = (T) => Mc(T, !1, c)),
    (d = c.onStop =
      () => {
        const T = ss.get(c);
        if (T) {
          if (a) a(T, 4);
          else for (const O of T) O();
          ss.delete(c);
        }
      }),
    t ? (s ? E(!0) : (S = c.run())) : o ? o(E.bind(null, !0), !0) : c.run(),
    (b.pause = c.pause.bind(c)),
    (b.resume = c.resume.bind(c)),
    (b.stop = b),
    b
  );
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, ve(e))) gt(e.value, t, n);
  else if (J(e)) for (let s = 0; s < e.length; s++) gt(e[s], t, n);
  else if (Io(e) || Zt(e))
    e.forEach((s) => {
      gt(s, t, n);
    });
  else if (Do(e)) {
    for (const s in e) gt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && gt(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Fn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    bs(r, t, n);
  }
}
function ut(e, t, n, s) {
  if (ee(e)) {
    const r = Fn(e, t, n, s);
    return (
      r &&
        Lo(r) &&
        r.catch((i) => {
          bs(i, t, n);
        }),
      r
    );
  }
  if (J(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(ut(e[i], t, n, s));
    return r;
  }
}
function bs(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      It(), Fn(i, null, 10, [e, a, u]), Lt();
      return;
    }
  }
  Lc(e, n, r, s, o);
}
function Lc(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Ie = [];
let ot = -1;
const en = [];
let xt = null,
  Yt = 0;
const al = Promise.resolve();
let rs = null;
function Ss(e) {
  const t = rs || al;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bc(e) {
  let t = ot + 1,
    n = Ie.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ie[s],
      i = On(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Gr(e) {
  if (!(e.flags & 1)) {
    const t = On(e),
      n = Ie[Ie.length - 1];
    !n || (!(e.flags & 2) && t >= On(n)) ? Ie.push(e) : Ie.splice(Bc(t), 0, e),
      (e.flags |= 1),
      cl();
  }
}
function cl() {
  rs || (rs = al.then(fl));
}
function Dc(e) {
  J(e)
    ? en.push(...e)
    : xt && e.id === -1
      ? xt.splice(Yt + 1, 0, e)
      : e.flags & 1 || (en.push(e), (e.flags |= 1)),
    cl();
}
function di(e, t, n = ot + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Ie.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ul(e) {
  if (en.length) {
    const t = [...new Set(en)].sort((n, s) => On(n) - On(s));
    if (((en.length = 0), xt)) {
      xt.push(...t);
      return;
    }
    for (xt = t, Yt = 0; Yt < xt.length; Yt++) {
      const n = xt[Yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (xt = null), (Yt = 0);
  }
}
const On = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function fl(e) {
  try {
    for (ot = 0; ot < Ie.length; ot++) {
      const t = Ie[ot];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Fn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ot < Ie.length; ot++) {
      const t = Ie[ot];
      t && (t.flags &= -2);
    }
    (ot = -1),
      (Ie.length = 0),
      ul(),
      (rs = null),
      (Ie.length || en.length) && fl();
  }
}
let Se = null,
  dl = null;
function is(e) {
  const t = Se;
  return (Se = e), (dl = (e && e.type.__scopeId) || null), t;
}
function at(e, t = Se, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ti(-1);
    const i = is(t);
    let o;
    try {
      o = e(...r);
    } finally {
      is(i), s._d && Ti(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function pi(e, t) {
  if (Se === null) return e;
  const n = As(Se),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = fe] = t[r];
    i &&
      (ee(i) && (i = { mounted: i, updated: i }),
      i.deep && gt(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function Bt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (It(), ut(a, n, 8, [e.el, l, e, t]), Lt());
  }
}
const Nc = Symbol("_vte"),
  Fc = (e) => e.__isTeleport;
function $r(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), $r(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function pl(e, t) {
  return ee(e) ? Oe({ name: e.name }, t, { setup: e }) : e;
}
function hl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function os(e, t, n, s, r = !1) {
  if (J(e)) {
    e.forEach((g, v) => os(g, t && (J(t) ? t[v] : t), n, s, r));
    return;
  }
  if (tn(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      os(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? As(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === fe ? (l.refs = {}) : l.refs,
    f = l.setupState,
    d = oe(f),
    p = f === fe ? () => !1 : (g) => ae(d, g);
  if (
    (u != null &&
      u !== a &&
      (ye(u)
        ? ((c[u] = null), p(u) && (f[u] = null))
        : ve(u) && (u.value = null)),
    ee(a))
  )
    Fn(a, l, 12, [o, c]);
  else {
    const g = ye(a),
      v = ve(a);
    if (g || v) {
      const y = () => {
        if (e.f) {
          const b = g ? (p(a) ? f[a] : c[a]) : a.value;
          r
            ? J(b) && Br(b, i)
            : J(b)
              ? b.includes(i) || b.push(i)
              : g
                ? ((c[a] = [i]), p(a) && (f[a] = c[a]))
                : ((a.value = [i]), e.k && (c[e.k] = a.value));
        } else
          g
            ? ((c[a] = o), p(a) && (f[a] = o))
            : v && ((a.value = o), e.k && (c[e.k] = o));
      };
      o ? ((y.id = -1), je(y, n)) : y();
    }
  }
}
vs().requestIdleCallback;
vs().cancelIdleCallback;
const tn = (e) => !!e.type.__asyncLoader,
  ml = (e) => e.type.__isKeepAlive;
function kc(e, t) {
  gl(e, "a", t);
}
function jc(e, t) {
  gl(e, "da", t);
}
function gl(e, t, n = xe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Es(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      ml(r.parent.vnode) && Vc(s, t, n, r), (r = r.parent);
  }
}
function Vc(e, t, n, s) {
  const r = Es(t, e, s, !0);
  wl(() => {
    Br(s[t], r);
  }, n);
}
function Es(e, t, n = xe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          It();
          const l = kn(n),
            a = ut(t, n, e, o);
          return l(), Lt(), a;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const bt =
    (e) =>
    (t, n = xe) => {
      (!In || e === "sp") && Es(e, (...s) => t(...s), n);
    },
  Wr = bt("bm"),
  qr = bt("m"),
  vl = bt("bu"),
  Kr = bt("u"),
  Yr = bt("bum"),
  wl = bt("um"),
  zc = bt("sp"),
  Hc = bt("rtg"),
  Uc = bt("rtc");
function Gc(e, t = xe) {
  Es("ec", e, t);
}
const $c = "components";
function yl(e, t) {
  return qc($c, e, !0, t) || e;
}
const Wc = Symbol.for("v-ndc");
function qc(e, t, n = !0, s = !1) {
  const r = Se || xe;
  if (r) {
    const i = r.type;
    {
      const l = Du(i, !1);
      if (l && (l === t || l === Ke(t) || l === gs(Ke(t)))) return i;
    }
    const o = hi(r[e] || i[e], t) || hi(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function hi(e, t) {
  return e && (e[t] || e[Ke(t)] || e[gs(Ke(t))]);
}
function mi(e, t, n, s) {
  let r;
  const i = n,
    o = J(e);
  if (o || ye(e)) {
    const l = o && wt(e);
    let a = !1;
    l && ((a = !We(e)), (e = ys(e))), (r = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(a ? _e(e[u]) : e[u], u, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (me(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, i);
      }
    }
  else r = [];
  return r;
}
function Kc(e, t, n = {}, s, r) {
  if (Se.ce || (Se.parent && tn(Se.parent) && Se.parent.ce))
    return be(), Ot(Ee, null, [de("slot", n, s)], 64);
  let i = e[t];
  i && i._c && (i._d = !1), be();
  const o = i && bl(i(n)),
    l = n.key || (o && o.key),
    a = Ot(
      Ee,
      { key: (l && !yt(l) ? l : `_${t}`) + "" },
      o || [],
      o && e._ === 1 ? 64 : -2,
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
  );
}
function bl(e) {
  return e.some((t) =>
    Mn(t) ? !(t.type === Rt || (t.type === Ee && !bl(t.children))) : !0,
  )
    ? e
    : null;
}
const fr = (e) => (e ? (zl(e) ? As(e) : fr(e.parent)) : null),
  Sn = Oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fr(e.parent),
    $root: (e) => fr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => El(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Gr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ss.bind(e.proxy)),
    $watch: (e) => gu.bind(e),
  }),
  Vs = (e, t) => e !== fe && !e.__isScriptSetup && ae(e, t),
  Yc = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const p = o[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Vs(s, t)) return (o[t] = 1), s[t];
          if (r !== fe && ae(r, t)) return (o[t] = 2), r[t];
          if ((u = e.propsOptions[0]) && ae(u, t)) return (o[t] = 3), i[t];
          if (n !== fe && ae(n, t)) return (o[t] = 4), n[t];
          dr && (o[t] = 0);
        }
      }
      const c = Sn[t];
      let f, d;
      if (c) return t === "$attrs" && Ae(e.attrs, "get", ""), c(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== fe && ae(n, t)) return (o[t] = 4), n[t];
      if (((d = a.config.globalProperties), ae(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return Vs(r, t)
        ? ((r[t] = n), !0)
        : s !== fe && ae(s, t)
          ? ((s[t] = n), !0)
          : ae(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== fe && ae(e, o)) ||
        Vs(t, o) ||
        ((l = i[0]) && ae(l, o)) ||
        ae(s, o) ||
        ae(Sn, o) ||
        ae(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ae(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function gi(e) {
  return J(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let dr = !0;
function Xc(e) {
  const t = El(e),
    n = e.proxy,
    s = e.ctx;
  (dr = !1), t.beforeCreate && vi(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: g,
    activated: v,
    deactivated: y,
    beforeDestroy: b,
    beforeUnmount: S,
    destroyed: E,
    unmounted: T,
    render: O,
    renderTracked: U,
    renderTriggered: k,
    errorCaptured: M,
    serverPrefetch: C,
    expose: I,
    inheritAttrs: z,
    components: Y,
    directives: H,
    filters: q,
  } = t;
  if ((u && Qc(u, s, null), o))
    for (const X in o) {
      const ie = o[X];
      ee(ie) && (s[X] = ie.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    me(X) && (e.data = Nn(X));
  }
  if (((dr = !0), i))
    for (const X in i) {
      const ie = i[X],
        Ue = ee(ie) ? ie.bind(n, n) : ee(ie.get) ? ie.get.bind(n, n) : ct,
        Ye = !ee(ie) && ee(ie.set) ? ie.set.bind(n) : ct,
        Ge = Ce({ get: Ue, set: Ye });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ge.value,
        set: (Te) => (Ge.value = Te),
      });
    }
  if (l) for (const X in l) Sl(l[X], s, n, X);
  if (a) {
    const X = ee(a) ? a.call(n) : a;
    Reflect.ownKeys(X).forEach((ie) => {
      nn(ie, X[ie]);
    });
  }
  c && vi(c, e, "c");
  function se(X, ie) {
    J(ie) ? ie.forEach((Ue) => X(Ue.bind(n))) : ie && X(ie.bind(n));
  }
  if (
    (se(Wr, f),
    se(qr, d),
    se(vl, p),
    se(Kr, g),
    se(kc, v),
    se(jc, y),
    se(Gc, M),
    se(Uc, U),
    se(Hc, k),
    se(Yr, S),
    se(wl, T),
    se(zc, C),
    J(I))
  )
    if (I.length) {
      const X = e.exposed || (e.exposed = {});
      I.forEach((ie) => {
        Object.defineProperty(X, ie, {
          get: () => n[ie],
          set: (Ue) => (n[ie] = Ue),
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === ct && (e.render = O),
    z != null && (e.inheritAttrs = z),
    Y && (e.components = Y),
    H && (e.directives = H),
    C && hl(e);
}
function Qc(e, t, n = ct) {
  J(e) && (e = pr(e));
  for (const s in e) {
    const r = e[s];
    let i;
    me(r)
      ? "default" in r
        ? (i = qe(r.from || s, r.default, !0))
        : (i = qe(r.from || s))
      : (i = qe(r)),
      ve(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i);
  }
}
function vi(e, t, n) {
  ut(J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sl(e, t, n, s) {
  let r = s.includes(".") ? Nl(n, s) : () => n[s];
  if (ye(e)) {
    const i = t[e];
    ee(i) && sn(r, i);
  } else if (ee(e)) sn(r, e.bind(n));
  else if (me(e))
    if (J(e)) e.forEach((i) => Sl(i, t, n, s));
    else {
      const i = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(i) && sn(r, i, e);
    }
}
function El(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
        ? (a = t)
        : ((a = {}),
          r.length && r.forEach((u) => ls(a, u, o, !0)),
          ls(a, t, o)),
    me(t) && i.set(t, a),
    a
  );
}
function ls(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && ls(e, i, n, !0), r && r.forEach((o) => ls(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Jc[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Jc = {
  data: wi,
  props: yi,
  emits: yi,
  methods: vn,
  computed: vn,
  beforeCreate: Re,
  created: Re,
  beforeMount: Re,
  mounted: Re,
  beforeUpdate: Re,
  updated: Re,
  beforeDestroy: Re,
  beforeUnmount: Re,
  destroyed: Re,
  unmounted: Re,
  activated: Re,
  deactivated: Re,
  errorCaptured: Re,
  serverPrefetch: Re,
  components: vn,
  directives: vn,
  watch: eu,
  provide: wi,
  inject: Zc,
};
function wi(e, t) {
  return t
    ? e
      ? function () {
          return Oe(
            ee(e) ? e.call(this, this) : e,
            ee(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Zc(e, t) {
  return vn(pr(e), pr(t));
}
function pr(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vn(e, t) {
  return e ? Oe(Object.create(null), e, t) : t;
}
function yi(e, t) {
  return e
    ? J(e) && J(t)
      ? [...new Set([...e, ...t])]
      : Oe(Object.create(null), gi(e), gi(t ?? {}))
    : t;
}
function eu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Oe(Object.create(null), e);
  for (const s in t) n[s] = Re(e[s], t[s]);
  return n;
}
function xl() {
  return {
    app: null,
    config: {
      isNativeTag: $a,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let tu = 0;
function nu(e, t) {
  return function (s, r = null) {
    ee(s) || (s = Oe({}, s)), r != null && !me(r) && (r = null);
    const i = xl(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const u = (i.app = {
      _uid: tu++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Fu,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          o.has(c) ||
            (c && ee(c.install)
              ? (o.add(c), c.install(u, ...f))
              : ee(c) && (o.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((i.components[c] = f), u) : i.components[c];
      },
      directive(c, f) {
        return f ? ((i.directives[c] = f), u) : i.directives[c];
      },
      mount(c, f, d) {
        if (!a) {
          const p = u._ceVNode || de(s, r);
          return (
            (p.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            e(p, c, d),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            As(p.component)
          );
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a &&
          (ut(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (i.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = jt;
        jt = u;
        try {
          return c();
        } finally {
          jt = f;
        }
      },
    });
    return u;
  };
}
let jt = null;
function nn(e, t) {
  if (xe) {
    let n = xe.provides;
    const s = xe.parent && xe.parent.provides;
    s === n && (n = xe.provides = Object.create(s)), (n[e] = t);
  }
}
function qe(e, t, n = !1) {
  const s = xe || Se;
  if (s || jt) {
    const r = jt
      ? jt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
function su() {
  return !!(xe || Se || jt);
}
const Tl = {},
  Al = () => Object.create(Tl),
  _l = (e) => Object.getPrototypeOf(e) === Tl;
function ru(e, t, n, s = !1) {
  const r = {},
    i = Al();
  (e.propsDefaults = Object.create(null)), Cl(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : sl(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function iu(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = oe(r),
    [a] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (xs(e.emitsOptions, d)) continue;
        const p = t[d];
        if (a)
          if (ae(i, d)) p !== i[d] && ((i[d] = p), (u = !0));
          else {
            const g = Ke(d);
            r[g] = hr(a, l, g, p, e, !1);
          }
        else p !== i[d] && ((i[d] = p), (u = !0));
      }
    }
  } else {
    Cl(e, t, r, i) && (u = !0);
    let c;
    for (const f in l)
      (!t || (!ae(t, f) && ((c = Mt(f)) === f || !ae(t, c)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (r[f] = hr(a, l, f, void 0, e, !0))
          : delete r[f]);
    if (i !== l)
      for (const f in i) (!t || !ae(t, f)) && (delete i[f], (u = !0));
  }
  u && mt(e.attrs, "set", "");
}
function Cl(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (wn(a)) continue;
      const u = t[a];
      let c;
      r && ae(r, (c = Ke(a)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : xs(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (o = !0)));
    }
  if (i) {
    const a = oe(n),
      u = l || fe;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = hr(r, a, f, u[f], e, !ae(u, f));
    }
  }
  return o;
}
function hr(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = ae(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ee(a)) {
        const { propsDefaults: u } = r;
        if (n in u) s = u[n];
        else {
          const c = kn(r);
          (s = u[n] = a.call(null, t)), c();
        }
      } else s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
const ou = new WeakMap();
function Pl(e, t, n = !1) {
  const s = n ? ou : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!ee(e)) {
    const c = (f) => {
      a = !0;
      const [d, p] = Pl(f, t, !0);
      Oe(o, d), p && l.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a) return me(e) && s.set(e, Jt), Jt;
  if (J(i))
    for (let c = 0; c < i.length; c++) {
      const f = Ke(i[c]);
      bi(f) && (o[f] = fe);
    }
  else if (i)
    for (const c in i) {
      const f = Ke(c);
      if (bi(f)) {
        const d = i[c],
          p = (o[f] = J(d) || ee(d) ? { type: d } : Oe({}, d)),
          g = p.type;
        let v = !1,
          y = !0;
        if (J(g))
          for (let b = 0; b < g.length; ++b) {
            const S = g[b],
              E = ee(S) && S.name;
            if (E === "Boolean") {
              v = !0;
              break;
            } else E === "String" && (y = !1);
          }
        else v = ee(g) && g.name === "Boolean";
        (p[0] = v), (p[1] = y), (v || ae(p, "default")) && l.push(f);
      }
    }
  const u = [o, l];
  return me(e) && s.set(e, u), u;
}
function bi(e) {
  return e[0] !== "$" && !wn(e);
}
const Ol = (e) => e[0] === "_" || e === "$stable",
  Xr = (e) => (J(e) ? e.map(lt) : [lt(e)]),
  lu = (e, t, n) => {
    if (t._n) return t;
    const s = at((...r) => Xr(t(...r)), n);
    return (s._c = !1), s;
  },
  Rl = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Ol(r)) continue;
      const i = e[r];
      if (ee(i)) t[r] = lu(r, i, s);
      else if (i != null) {
        const o = Xr(i);
        t[r] = () => o;
      }
    }
  },
  Ml = (e, t) => {
    const n = Xr(t);
    e.slots.default = () => n;
  },
  Il = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  au = (e, t, n) => {
    const s = (e.slots = Al());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Il(s, t, n), n && No(s, "_", r, !0)) : Rl(t, s);
    } else t && Ml(e, t);
  },
  cu = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = fe;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Il(r, t, n)
        : ((i = !t.$stable), Rl(t, r)),
        (o = t);
    } else t && (Ml(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Ol(l) && o[l] == null && delete r[l];
  },
  je = xu;
function uu(e) {
  return fu(e);
}
function fu(e, t) {
  const n = vs();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = ct,
      insertStaticContent: g,
    } = e,
    v = (
      h,
      m,
      w,
      A = null,
      R = null,
      P = null,
      N = void 0,
      D = null,
      B = !!m.dynamicChildren,
    ) => {
      if (h === m) return;
      h && !hn(h, m) && ((A = _(h)), Te(h, R, P, !0), (h = null)),
        m.patchFlag === -2 && ((B = !1), (m.dynamicChildren = null));
      const { type: L, ref: Q, shapeFlag: j } = m;
      switch (L) {
        case Ts:
          y(h, m, w, A);
          break;
        case Rt:
          b(h, m, w, A);
          break;
        case Yn:
          h == null && S(m, w, A, N);
          break;
        case Ee:
          Y(h, m, w, A, R, P, N, D, B);
          break;
        default:
          j & 1
            ? O(h, m, w, A, R, P, N, D, B)
            : j & 6
              ? H(h, m, w, A, R, P, N, D, B)
              : (j & 64 || j & 128) && L.process(h, m, w, A, R, P, N, D, B, G);
      }
      Q != null && R && os(Q, h && h.ref, P, m || h, !m);
    },
    y = (h, m, w, A) => {
      if (h == null) s((m.el = l(m.children)), w, A);
      else {
        const R = (m.el = h.el);
        m.children !== h.children && u(R, m.children);
      }
    },
    b = (h, m, w, A) => {
      h == null ? s((m.el = a(m.children || "")), w, A) : (m.el = h.el);
    },
    S = (h, m, w, A) => {
      [h.el, h.anchor] = g(h.children, m, w, A, h.el, h.anchor);
    },
    E = ({ el: h, anchor: m }, w, A) => {
      let R;
      for (; h && h !== m; ) (R = d(h)), s(h, w, A), (h = R);
      s(m, w, A);
    },
    T = ({ el: h, anchor: m }) => {
      let w;
      for (; h && h !== m; ) (w = d(h)), r(h), (h = w);
      r(m);
    },
    O = (h, m, w, A, R, P, N, D, B) => {
      m.type === "svg" ? (N = "svg") : m.type === "math" && (N = "mathml"),
        h == null ? U(m, w, A, R, P, N, D, B) : C(h, m, R, P, N, D, B);
    },
    U = (h, m, w, A, R, P, N, D) => {
      let B, L;
      const { props: Q, shapeFlag: j, transition: K, dirs: Z } = h;
      if (
        ((B = h.el = o(h.type, P, Q && Q.is, Q)),
        j & 8
          ? c(B, h.children)
          : j & 16 && M(h.children, B, null, A, R, zs(h, P), N, D),
        Z && Bt(h, null, A, "created"),
        k(B, h, h.scopeId, N, A),
        Q)
      ) {
        for (const pe in Q)
          pe !== "value" && !wn(pe) && i(B, pe, null, Q[pe], P, A);
        "value" in Q && i(B, "value", null, Q.value, P),
          (L = Q.onVnodeBeforeMount) && st(L, A, h);
      }
      Z && Bt(h, null, A, "beforeMount");
      const re = du(R, K);
      re && K.beforeEnter(B),
        s(B, m, w),
        ((L = Q && Q.onVnodeMounted) || re || Z) &&
          je(() => {
            L && st(L, A, h), re && K.enter(B), Z && Bt(h, null, A, "mounted");
          }, R);
    },
    k = (h, m, w, A, R) => {
      if ((w && p(h, w), A)) for (let P = 0; P < A.length; P++) p(h, A[P]);
      if (R) {
        let P = R.subTree;
        if (
          m === P ||
          (kl(P.type) && (P.ssContent === m || P.ssFallback === m))
        ) {
          const N = R.vnode;
          k(h, N, N.scopeId, N.slotScopeIds, R.parent);
        }
      }
    },
    M = (h, m, w, A, R, P, N, D, B = 0) => {
      for (let L = B; L < h.length; L++) {
        const Q = (h[L] = D ? Tt(h[L]) : lt(h[L]));
        v(null, Q, m, w, A, R, P, N, D);
      }
    },
    C = (h, m, w, A, R, P, N) => {
      const D = (m.el = h.el);
      let { patchFlag: B, dynamicChildren: L, dirs: Q } = m;
      B |= h.patchFlag & 16;
      const j = h.props || fe,
        K = m.props || fe;
      let Z;
      if (
        (w && Dt(w, !1),
        (Z = K.onVnodeBeforeUpdate) && st(Z, w, m, h),
        Q && Bt(m, h, w, "beforeUpdate"),
        w && Dt(w, !0),
        ((j.innerHTML && K.innerHTML == null) ||
          (j.textContent && K.textContent == null)) &&
          c(D, ""),
        L
          ? I(h.dynamicChildren, L, D, w, A, zs(m, R), P)
          : N || ie(h, m, D, null, w, A, zs(m, R), P, !1),
        B > 0)
      ) {
        if (B & 16) z(D, j, K, w, R);
        else if (
          (B & 2 && j.class !== K.class && i(D, "class", null, K.class, R),
          B & 4 && i(D, "style", j.style, K.style, R),
          B & 8)
        ) {
          const re = m.dynamicProps;
          for (let pe = 0; pe < re.length; pe++) {
            const ce = re[pe],
              Fe = j[ce],
              Be = K[ce];
            (Be !== Fe || ce === "value") && i(D, ce, Fe, Be, R, w);
          }
        }
        B & 1 && h.children !== m.children && c(D, m.children);
      } else !N && L == null && z(D, j, K, w, R);
      ((Z = K.onVnodeUpdated) || Q) &&
        je(() => {
          Z && st(Z, w, m, h), Q && Bt(m, h, w, "updated");
        }, A);
    },
    I = (h, m, w, A, R, P, N) => {
      for (let D = 0; D < m.length; D++) {
        const B = h[D],
          L = m[D],
          Q =
            B.el && (B.type === Ee || !hn(B, L) || B.shapeFlag & 70)
              ? f(B.el)
              : w;
        v(B, L, Q, null, A, R, P, N, !0);
      }
    },
    z = (h, m, w, A, R) => {
      if (m !== w) {
        if (m !== fe)
          for (const P in m) !wn(P) && !(P in w) && i(h, P, m[P], null, R, A);
        for (const P in w) {
          if (wn(P)) continue;
          const N = w[P],
            D = m[P];
          N !== D && P !== "value" && i(h, P, D, N, R, A);
        }
        "value" in w && i(h, "value", m.value, w.value, R);
      }
    },
    Y = (h, m, w, A, R, P, N, D, B) => {
      const L = (m.el = h ? h.el : l("")),
        Q = (m.anchor = h ? h.anchor : l(""));
      let { patchFlag: j, dynamicChildren: K, slotScopeIds: Z } = m;
      Z && (D = D ? D.concat(Z) : Z),
        h == null
          ? (s(L, w, A), s(Q, w, A), M(m.children || [], w, Q, R, P, N, D, B))
          : j > 0 && j & 64 && K && h.dynamicChildren
            ? (I(h.dynamicChildren, K, w, R, P, N, D),
              (m.key != null || (R && m === R.subTree)) && Ll(h, m, !0))
            : ie(h, m, w, Q, R, P, N, D, B);
    },
    H = (h, m, w, A, R, P, N, D, B) => {
      (m.slotScopeIds = D),
        h == null
          ? m.shapeFlag & 512
            ? R.ctx.activate(m, w, A, N, B)
            : q(m, w, A, R, P, N, B)
          : $(h, m, B);
    },
    q = (h, m, w, A, R, P, N) => {
      const D = (h.component = Ru(h, A, R));
      if ((ml(h) && (D.ctx.renderer = G), Mu(D, !1, N), D.asyncDep)) {
        if ((R && R.registerDep(D, se, N), !h.el)) {
          const B = (D.subTree = de(Rt));
          b(null, B, m, w);
        }
      } else se(D, h, m, w, R, P, N);
    },
    $ = (h, m, w) => {
      const A = (m.component = h.component);
      if (Su(h, m, w))
        if (A.asyncDep && !A.asyncResolved) {
          X(A, m, w);
          return;
        } else (A.next = m), A.update();
      else (m.el = h.el), (A.vnode = m);
    },
    se = (h, m, w, A, R, P, N) => {
      const D = () => {
        if (h.isMounted) {
          let { next: j, bu: K, u: Z, parent: re, vnode: pe } = h;
          {
            const tt = Bl(h);
            if (tt) {
              j && ((j.el = pe.el), X(h, j, N)),
                tt.asyncDep.then(() => {
                  h.isUnmounted || D();
                });
              return;
            }
          }
          let ce = j,
            Fe;
          Dt(h, !1),
            j ? ((j.el = pe.el), X(h, j, N)) : (j = pe),
            K && Kn(K),
            (Fe = j.props && j.props.onVnodeBeforeUpdate) && st(Fe, re, j, pe),
            Dt(h, !0);
          const Be = Ei(h),
            et = h.subTree;
          (h.subTree = Be),
            v(et, Be, f(et.el), _(et), h, R, P),
            (j.el = Be.el),
            ce === null && Eu(h, Be.el),
            Z && je(Z, R),
            (Fe = j.props && j.props.onVnodeUpdated) &&
              je(() => st(Fe, re, j, pe), R);
        } else {
          let j;
          const { el: K, props: Z } = m,
            { bm: re, m: pe, parent: ce, root: Fe, type: Be } = h,
            et = tn(m);
          Dt(h, !1),
            re && Kn(re),
            !et && (j = Z && Z.onVnodeBeforeMount) && st(j, ce, m),
            Dt(h, !0);
          {
            Fe.ce && Fe.ce._injectChildStyle(Be);
            const tt = (h.subTree = Ei(h));
            v(null, tt, w, A, h, R, P), (m.el = tt.el);
          }
          if ((pe && je(pe, R), !et && (j = Z && Z.onVnodeMounted))) {
            const tt = m;
            je(() => st(j, ce, tt), R);
          }
          (m.shapeFlag & 256 ||
            (ce && tn(ce.vnode) && ce.vnode.shapeFlag & 256)) &&
            h.a &&
            je(h.a, R),
            (h.isMounted = !0),
            (m = w = A = null);
        }
      };
      h.scope.on();
      const B = (h.effect = new Uo(D));
      h.scope.off();
      const L = (h.update = B.run.bind(B)),
        Q = (h.job = B.runIfDirty.bind(B));
      (Q.i = h), (Q.id = h.uid), (B.scheduler = () => Gr(Q)), Dt(h, !0), L();
    },
    X = (h, m, w) => {
      m.component = h;
      const A = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        iu(h, m.props, A, w),
        cu(h, m.children, w),
        It(),
        di(h),
        Lt();
    },
    ie = (h, m, w, A, R, P, N, D, B = !1) => {
      const L = h && h.children,
        Q = h ? h.shapeFlag : 0,
        j = m.children,
        { patchFlag: K, shapeFlag: Z } = m;
      if (K > 0) {
        if (K & 128) {
          Ye(L, j, w, A, R, P, N, D, B);
          return;
        } else if (K & 256) {
          Ue(L, j, w, A, R, P, N, D, B);
          return;
        }
      }
      Z & 8
        ? (Q & 16 && $e(L, R, P), j !== L && c(w, j))
        : Q & 16
          ? Z & 16
            ? Ye(L, j, w, A, R, P, N, D, B)
            : $e(L, R, P, !0)
          : (Q & 8 && c(w, ""), Z & 16 && M(j, w, A, R, P, N, D, B));
    },
    Ue = (h, m, w, A, R, P, N, D, B) => {
      (h = h || Jt), (m = m || Jt);
      const L = h.length,
        Q = m.length,
        j = Math.min(L, Q);
      let K;
      for (K = 0; K < j; K++) {
        const Z = (m[K] = B ? Tt(m[K]) : lt(m[K]));
        v(h[K], Z, w, null, R, P, N, D, B);
      }
      L > Q ? $e(h, R, P, !0, !1, j) : M(m, w, A, R, P, N, D, B, j);
    },
    Ye = (h, m, w, A, R, P, N, D, B) => {
      let L = 0;
      const Q = m.length;
      let j = h.length - 1,
        K = Q - 1;
      for (; L <= j && L <= K; ) {
        const Z = h[L],
          re = (m[L] = B ? Tt(m[L]) : lt(m[L]));
        if (hn(Z, re)) v(Z, re, w, null, R, P, N, D, B);
        else break;
        L++;
      }
      for (; L <= j && L <= K; ) {
        const Z = h[j],
          re = (m[K] = B ? Tt(m[K]) : lt(m[K]));
        if (hn(Z, re)) v(Z, re, w, null, R, P, N, D, B);
        else break;
        j--, K--;
      }
      if (L > j) {
        if (L <= K) {
          const Z = K + 1,
            re = Z < Q ? m[Z].el : A;
          for (; L <= K; )
            v(null, (m[L] = B ? Tt(m[L]) : lt(m[L])), w, re, R, P, N, D, B),
              L++;
        }
      } else if (L > K) for (; L <= j; ) Te(h[L], R, P, !0), L++;
      else {
        const Z = L,
          re = L,
          pe = new Map();
        for (L = re; L <= K; L++) {
          const ke = (m[L] = B ? Tt(m[L]) : lt(m[L]));
          ke.key != null && pe.set(ke.key, L);
        }
        let ce,
          Fe = 0;
        const Be = K - re + 1;
        let et = !1,
          tt = 0;
        const dn = new Array(Be);
        for (L = 0; L < Be; L++) dn[L] = 0;
        for (L = Z; L <= j; L++) {
          const ke = h[L];
          if (Fe >= Be) {
            Te(ke, R, P, !0);
            continue;
          }
          let nt;
          if (ke.key != null) nt = pe.get(ke.key);
          else
            for (ce = re; ce <= K; ce++)
              if (dn[ce - re] === 0 && hn(ke, m[ce])) {
                nt = ce;
                break;
              }
          nt === void 0
            ? Te(ke, R, P, !0)
            : ((dn[nt - re] = L + 1),
              nt >= tt ? (tt = nt) : (et = !0),
              v(ke, m[nt], w, null, R, P, N, D, B),
              Fe++);
        }
        const li = et ? pu(dn) : Jt;
        for (ce = li.length - 1, L = Be - 1; L >= 0; L--) {
          const ke = re + L,
            nt = m[ke],
            ai = ke + 1 < Q ? m[ke + 1].el : A;
          dn[L] === 0
            ? v(null, nt, w, ai, R, P, N, D, B)
            : et && (ce < 0 || L !== li[ce] ? Ge(nt, w, ai, 2) : ce--);
        }
      }
    },
    Ge = (h, m, w, A, R = null) => {
      const { el: P, type: N, transition: D, children: B, shapeFlag: L } = h;
      if (L & 6) {
        Ge(h.component.subTree, m, w, A);
        return;
      }
      if (L & 128) {
        h.suspense.move(m, w, A);
        return;
      }
      if (L & 64) {
        N.move(h, m, w, G);
        return;
      }
      if (N === Ee) {
        s(P, m, w);
        for (let j = 0; j < B.length; j++) Ge(B[j], m, w, A);
        s(h.anchor, m, w);
        return;
      }
      if (N === Yn) {
        E(h, m, w);
        return;
      }
      if (A !== 2 && L & 1 && D)
        if (A === 0) D.beforeEnter(P), s(P, m, w), je(() => D.enter(P), R);
        else {
          const { leave: j, delayLeave: K, afterLeave: Z } = D,
            re = () => s(P, m, w),
            pe = () => {
              j(P, () => {
                re(), Z && Z();
              });
            };
          K ? K(P, re, pe) : pe();
        }
      else s(P, m, w);
    },
    Te = (h, m, w, A = !1, R = !1) => {
      const {
        type: P,
        props: N,
        ref: D,
        children: B,
        dynamicChildren: L,
        shapeFlag: Q,
        patchFlag: j,
        dirs: K,
        cacheIndex: Z,
      } = h;
      if (
        (j === -2 && (R = !1),
        D != null && os(D, null, w, h, !0),
        Z != null && (m.renderCache[Z] = void 0),
        Q & 256)
      ) {
        m.ctx.deactivate(h);
        return;
      }
      const re = Q & 1 && K,
        pe = !tn(h);
      let ce;
      if ((pe && (ce = N && N.onVnodeBeforeUnmount) && st(ce, m, h), Q & 6))
        zn(h.component, w, A);
      else {
        if (Q & 128) {
          h.suspense.unmount(w, A);
          return;
        }
        re && Bt(h, null, m, "beforeUnmount"),
          Q & 64
            ? h.type.remove(h, m, w, G, A)
            : L && !L.hasOnce && (P !== Ee || (j > 0 && j & 64))
              ? $e(L, m, w, !1, !0)
              : ((P === Ee && j & 384) || (!R && Q & 16)) && $e(B, m, w),
          A && $t(h);
      }
      ((pe && (ce = N && N.onVnodeUnmounted)) || re) &&
        je(() => {
          ce && st(ce, m, h), re && Bt(h, null, m, "unmounted");
        }, w);
    },
    $t = (h) => {
      const { type: m, el: w, anchor: A, transition: R } = h;
      if (m === Ee) {
        Wt(w, A);
        return;
      }
      if (m === Yn) {
        T(h);
        return;
      }
      const P = () => {
        r(w), R && !R.persisted && R.afterLeave && R.afterLeave();
      };
      if (h.shapeFlag & 1 && R && !R.persisted) {
        const { leave: N, delayLeave: D } = R,
          B = () => N(w, P);
        D ? D(h.el, P, B) : B();
      } else P();
    },
    Wt = (h, m) => {
      let w;
      for (; h !== m; ) (w = d(h)), r(h), (h = w);
      r(m);
    },
    zn = (h, m, w) => {
      const { bum: A, scope: R, job: P, subTree: N, um: D, m: B, a: L } = h;
      Si(B),
        Si(L),
        A && Kn(A),
        R.stop(),
        P && ((P.flags |= 8), Te(N, h, m, w)),
        D && je(D, m),
        je(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    $e = (h, m, w, A = !1, R = !1, P = 0) => {
      for (let N = P; N < h.length; N++) Te(h[N], m, w, A, R);
    },
    _ = (h) => {
      if (h.shapeFlag & 6) return _(h.component.subTree);
      if (h.shapeFlag & 128) return h.suspense.next();
      const m = d(h.anchor || h.el),
        w = m && m[Nc];
      return w ? d(w) : m;
    };
  let V = !1;
  const F = (h, m, w) => {
      h == null
        ? m._vnode && Te(m._vnode, null, null, !0)
        : v(m._vnode || null, h, m, null, null, null, w),
        (m._vnode = h),
        V || ((V = !0), di(), ul(), (V = !1));
    },
    G = {
      p: v,
      um: Te,
      m: Ge,
      r: $t,
      mt: q,
      mc: M,
      pc: ie,
      pbc: I,
      n: _,
      o: e,
    };
  return { render: F, hydrate: void 0, createApp: nu(F) };
}
function zs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Dt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function du(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ll(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (J(s) && J(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Tt(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Ll(o, l)),
        l.type === Ts && (l.el = o.el);
    }
}
function pu(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l);
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Bl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Bl(t);
}
function Si(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const hu = Symbol.for("v-scx"),
  mu = () => qe(hu);
function sn(e, t, n) {
  return Dl(e, t, n);
}
function Dl(e, t, n = fe) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = Oe({}, n),
    a = (t && s) || (!t && i !== "post");
  let u;
  if (In) {
    if (i === "sync") {
      const p = mu();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {};
      return (p.stop = ct), (p.resume = ct), (p.pause = ct), p;
    }
  }
  const c = xe;
  l.call = (p, g, v) => ut(p, c, g, v);
  let f = !1;
  i === "post"
    ? (l.scheduler = (p) => {
        je(p, c && c.suspense);
      })
    : i !== "sync" &&
      ((f = !0),
      (l.scheduler = (p, g) => {
        g ? p() : Gr(p);
      })),
    (l.augmentJob = (p) => {
      t && (p.flags |= 4),
        f && ((p.flags |= 2), c && ((p.id = c.uid), (p.i = c)));
    });
  const d = Ic(e, t, l);
  return In && (u ? u.push(d) : a && d()), d;
}
function gu(e, t, n) {
  const s = this.proxy,
    r = ye(e) ? (e.includes(".") ? Nl(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  ee(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = kn(this),
    l = Dl(r, i.bind(s), n);
  return o(), l;
}
function Nl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const vu = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${Mt(t)}Modifiers`];
function wu(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && vu(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((c) => (ye(c) ? c.trim() : c))),
    o.number && (r = n.map(or)));
  let l,
    a = s[(l = Ds(t))] || s[(l = Ds(Ke(t)))];
  !a && i && (a = s[(l = Ds(Mt(t)))]), a && ut(a, e, 6, r);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ut(u, e, 6, r);
  }
}
function Fl(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!ee(e)) {
    const a = (u) => {
      const c = Fl(u, t, !0);
      c && ((l = !0), Oe(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (me(e) && s.set(e, null), null)
    : (J(i) ? i.forEach((a) => (o[a] = null)) : Oe(o, i),
      me(e) && s.set(e, o),
      o);
}
function xs(e, t) {
  return !e || !ps(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Mt(t)) || ae(e, t));
}
function Ei(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: p,
      ctx: g,
      inheritAttrs: v,
    } = e,
    y = is(e);
  let b, S;
  try {
    if (n.shapeFlag & 4) {
      const T = r || s,
        O = T;
      (b = lt(u.call(O, T, c, f, p, d, g))), (S = l);
    } else {
      const T = t;
      (b = lt(
        T.length > 1 ? T(f, { attrs: l, slots: o, emit: a }) : T(f, null),
      )),
        (S = t.props ? l : yu(l));
    }
  } catch (T) {
    (En.length = 0), bs(T, e, 1), (b = de(Rt));
  }
  let E = b;
  if (S && v !== !1) {
    const T = Object.keys(S),
      { shapeFlag: O } = E;
    T.length &&
      O & 7 &&
      (i && T.some(Lr) && (S = bu(S, i)), (E = ln(E, S, !1, !0)));
  }
  return (
    n.dirs &&
      ((E = ln(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && $r(E, n.transition),
    (b = E),
    is(y),
    b
  );
}
const yu = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ps(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  bu = (e, t) => {
    const n = {};
    for (const s in e) (!Lr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Su(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: a } = t,
    u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? xi(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (o[d] !== s[d] && !xs(u, d)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? xi(s, o, u)
            : !0
          : !!o;
  return !1;
}
function xi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !xs(n, i)) return !0;
  }
  return !1;
}
function Eu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const kl = (e) => e.__isSuspense;
function xu(e, t) {
  t && t.pendingBranch
    ? J(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Dc(e);
}
const Ee = Symbol.for("v-fgt"),
  Ts = Symbol.for("v-txt"),
  Rt = Symbol.for("v-cmt"),
  Yn = Symbol.for("v-stc"),
  En = [];
let ze = null;
function be(e = !1) {
  En.push((ze = e ? null : []));
}
function Tu() {
  En.pop(), (ze = En[En.length - 1] || null);
}
let Rn = 1;
function Ti(e, t = !1) {
  (Rn += e), e < 0 && ze && t && (ze.hasOnce = !0);
}
function jl(e) {
  return (
    (e.dynamicChildren = Rn > 0 ? ze || Jt : null),
    Tu(),
    Rn > 0 && ze && ze.push(e),
    e
  );
}
function Xe(e, t, n, s, r, i) {
  return jl(W(e, t, n, s, r, i, !0));
}
function Ot(e, t, n, s, r) {
  return jl(de(e, t, n, s, r, !0));
}
function Mn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vl = ({ key: e }) => e ?? null,
  Xn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ye(e) || ve(e) || ee(e)
        ? { i: Se, r: e, k: t, f: !!n }
        : e
      : null
  );
function W(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Ee ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vl(t),
    ref: t && Xn(t),
    scopeId: dl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Se,
  };
  return (
    l
      ? (Jr(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ye(n) ? 8 : 16),
    Rn > 0 &&
      !o &&
      ze &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      ze.push(a),
    a
  );
}
const de = Au;
function Au(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Wc) && (e = Rt), Mn(e))) {
    const l = ln(e, t, !0);
    return (
      n && Jr(l, n),
      Rn > 0 &&
        !i &&
        ze &&
        (l.shapeFlag & 6 ? (ze[ze.indexOf(e)] = l) : ze.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Nu(e) && (e = e.__vccOpts), t)) {
    t = _u(t);
    let { class: l, style: a } = t;
    l && !ye(l) && (t.class = _n(l)),
      me(a) && (Hr(a) && !J(a) && (a = Oe({}, a)), (t.style = ws(a)));
  }
  const o = ye(e) ? 1 : kl(e) ? 128 : Fc(e) ? 64 : me(e) ? 4 : ee(e) ? 2 : 0;
  return W(e, t, n, s, r, o, i, !0);
}
function _u(e) {
  return e ? (Hr(e) || _l(e) ? Oe({}, e) : e) : null;
}
function ln(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e,
    u = t ? Cu(r || {}, t) : r,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Vl(u),
      ref:
        t && t.ref
          ? n && i
            ? J(i)
              ? i.concat(Xn(t))
              : [i, Xn(t)]
            : Xn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ee ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ln(e.ssContent),
      ssFallback: e.ssFallback && ln(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && $r(c, a.clone(c)), c;
}
function rn(e = " ", t = 0) {
  return de(Ts, null, e, t);
}
function ug(e, t) {
  const n = de(Yn, null, e);
  return (n.staticCount = t), n;
}
function Qr(e = "", t = !1) {
  return t ? (be(), Ot(Rt, null, e)) : de(Rt, null, e);
}
function lt(e) {
  return e == null || typeof e == "boolean"
    ? de(Rt)
    : J(e)
      ? de(Ee, null, e.slice())
      : Mn(e)
        ? Tt(e)
        : de(Ts, null, String(e));
}
function Tt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ln(e);
}
function Jr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (J(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Jr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !_l(t)
        ? (t._ctx = Se)
        : r === 3 &&
          Se &&
          (Se.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ee(t)
      ? ((t = { default: t, _ctx: Se }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [rn(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Cu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = _n([t.class, s.class]));
      else if (r === "style") t.style = ws([t.style, s.style]);
      else if (ps(r)) {
        const i = t[r],
          o = s[r];
        o &&
          i !== o &&
          !(J(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function st(e, t, n, s = null) {
  ut(e, t, 7, [n, s]);
}
const Pu = xl();
let Ou = 0;
function Ru(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Pu,
    i = {
      uid: Ou++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Vo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Pl(s, r),
      emitsOptions: Fl(s, r),
      emit: null,
      emitted: null,
      propsDefaults: fe,
      inheritAttrs: s.inheritAttrs,
      ctx: fe,
      data: fe,
      props: fe,
      attrs: fe,
      slots: fe,
      refs: fe,
      setupState: fe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = wu.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let xe = null,
  as,
  mr;
{
  const e = vs(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (as = t("__VUE_INSTANCE_SETTERS__", (n) => (xe = n))),
    (mr = t("__VUE_SSR_SETTERS__", (n) => (In = n)));
}
const kn = (e) => {
    const t = xe;
    return (
      as(e),
      e.scope.on(),
      () => {
        e.scope.off(), as(t);
      }
    );
  },
  Ai = () => {
    xe && xe.scope.off(), as(null);
  };
function zl(e) {
  return e.vnode.shapeFlag & 4;
}
let In = !1;
function Mu(e, t = !1, n = !1) {
  t && mr(t);
  const { props: s, children: r } = e.vnode,
    i = zl(e);
  ru(e, s, i, t), au(e, r, n);
  const o = i ? Iu(e, t) : void 0;
  return t && mr(!1), o;
}
function Iu(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Yc));
  const { setup: s } = n;
  if (s) {
    It();
    const r = (e.setupContext = s.length > 1 ? Bu(e) : null),
      i = kn(e),
      o = Fn(s, e, 0, [e.props, r]),
      l = Lo(o);
    if ((Lt(), i(), (l || e.sp) && !tn(e) && hl(e), l)) {
      if ((o.then(Ai, Ai), t))
        return o
          .then((a) => {
            _i(e, a);
          })
          .catch((a) => {
            bs(a, e, 0);
          });
      e.asyncDep = o;
    } else _i(e, o);
  } else Hl(e);
}
function _i(e, t, n) {
  ee(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : me(t) && (e.setupState = ol(t)),
    Hl(e);
}
function Hl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const r = kn(e);
    It();
    try {
      Xc(e);
    } finally {
      Lt(), r();
    }
  }
}
const Lu = {
  get(e, t) {
    return Ae(e, "get", ""), e[t];
  },
};
function Bu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Lu),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function As(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ol(Ur(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Sn) return Sn[n](e);
          },
          has(t, n) {
            return n in t || n in Sn;
          },
        }))
    : e.proxy;
}
function Du(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Nu(e) {
  return ee(e) && "__vccOpts" in e;
}
const Ce = (e, t) => Rc(e, t, In);
function De(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? me(t) && !J(t)
      ? Mn(t)
        ? de(e, null, [t])
        : de(e, t)
      : de(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Mn(n) && (n = [n]),
      de(e, t, n));
}
const Fu = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let gr;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    gr = Ci.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Ul = gr ? (e) => gr.createHTML(e) : (e) => e,
  ku = "http://www.w3.org/2000/svg",
  ju = "http://www.w3.org/1998/Math/MathML",
  ht = typeof document < "u" ? document : null,
  Pi = ht && ht.createElement("template"),
  Vu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? ht.createElementNS(ku, e)
          : t === "mathml"
            ? ht.createElementNS(ju, e)
            : n
              ? ht.createElement(e, { is: n })
              : ht.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => ht.createTextNode(e),
    createComment: (e) => ht.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ht.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Pi.innerHTML = Ul(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = Pi.content;
        if (s === "svg" || s === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  zu = Symbol("_vtc");
function Hu(e, t, n) {
  const s = e[zu];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const Oi = Symbol("_vod"),
  Uu = Symbol("_vsh"),
  Gu = Symbol(""),
  $u = /(^|;)\s*display\s*:/;
function Wu(e, t, n) {
  const s = e.style,
    r = ye(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ye(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Qn(s, l, "");
        }
      else for (const o in t) n[o] == null && Qn(s, o, "");
    for (const o in n) o === "display" && (i = !0), Qn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Gu];
      o && (n += ";" + o), (s.cssText = n), (i = $u.test(n));
    }
  } else t && e.removeAttribute("style");
  Oi in e && ((e[Oi] = i ? s.display : ""), e[Uu] && (s.display = "none"));
}
const Ri = /\s*!important$/;
function Qn(e, t, n) {
  if (J(n)) n.forEach((s) => Qn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = qu(e, t);
    Ri.test(n)
      ? e.setProperty(Mt(s), n.replace(Ri, ""), "important")
      : (e[s] = n);
  }
}
const Mi = ["Webkit", "Moz", "ms"],
  Hs = {};
function qu(e, t) {
  const n = Hs[t];
  if (n) return n;
  let s = Ke(t);
  if (s !== "filter" && s in e) return (Hs[t] = s);
  s = gs(s);
  for (let r = 0; r < Mi.length; r++) {
    const i = Mi[r] + s;
    if (i in e) return (Hs[t] = i);
  }
  return t;
}
const Ii = "http://www.w3.org/1999/xlink";
function Li(e, t, n, s, r, i = tc(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Ii, t.slice(6, t.length))
      : e.setAttributeNS(Ii, t, n)
    : n == null || (i && !Fo(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : yt(n) ? String(n) : n);
}
function Bi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ul(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Fo(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function Xt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ku(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Di = Symbol("_vei");
function Yu(e, t, n, s, r = null) {
  const i = e[Di] || (e[Di] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = Xu(t);
    if (s) {
      const u = (i[t] = Zu(s, r));
      Xt(e, l, u, a);
    } else o && (Ku(e, l, o, a), (i[t] = void 0));
  }
}
const Ni = /(?:Once|Passive|Capture)$/;
function Xu(e) {
  let t;
  if (Ni.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ni)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let Us = 0;
const Qu = Promise.resolve(),
  Ju = () => Us || (Qu.then(() => (Us = 0)), (Us = Date.now()));
function Zu(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ut(ef(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Ju()), n;
}
function ef(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Fi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  tf = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? Hu(e, s, o)
      : t === "style"
        ? Wu(e, n, s)
        : ps(t)
          ? Lr(t) || Yu(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : nf(e, t, s, o)
              )
            ? (Bi(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Li(e, t, s, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !ye(s))
              ? Bi(e, Ke(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Li(e, t, s, o));
  };
function nf(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Fi(t) && ee(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Fi(t) && ye(n) ? !1 : t in e;
}
const ki = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => Kn(t, n) : t;
};
function sf(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Gs = Symbol("_assign"),
  Vi = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Gs] = ki(r);
      const i = s || (r.props && r.props.type === "number");
      Xt(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), i && (l = or(l)), e[Gs](l);
      }),
        n &&
          Xt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Xt(e, "compositionstart", sf),
          Xt(e, "compositionend", ji),
          Xt(e, "change", ji));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } },
      o,
    ) {
      if (((e[Gs] = ki(o)), e.composing)) return;
      const l =
          (i || e.type === "number") && !/^0\d/.test(e.value)
            ? or(e.value)
            : e.value,
        a = t ?? "";
      l !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (r && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  rf = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  zi = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const i = Mt(r.key);
        if (t.some((o) => o === i || rf[o] === i)) return e(r);
      })
    );
  },
  of = Oe({ patchProp: tf }, Vu);
let Hi;
function lf() {
  return Hi || (Hi = uu(of));
}
const af = (...e) => {
  const t = lf().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = uf(s);
      if (!r) return;
      const i = t._component;
      !ee(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const o = n(r, !1, cf(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function cf(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function uf(e) {
  return ye(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let Gl;
const _s = (e) => (Gl = e),
  $l = Symbol();
function vr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var xn;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(xn || (xn = {}));
function ff() {
  const e = zo(!0),
    t = e.run(() => ne({}));
  let n = [],
    s = [];
  const r = Ur({
    install(i) {
      _s(r),
        (r._a = i),
        i.provide($l, r),
        (i.config.globalProperties.$pinia = r),
        s.forEach((o) => n.push(o)),
        (s = []);
    },
    use(i) {
      return this._a ? n.push(i) : s.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const Wl = () => {};
function Ui(e, t, n, s = Wl) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && Ho() && nc(r), r;
}
function Kt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const df = (e) => e(),
  Gi = Symbol(),
  $s = Symbol();
function wr(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, s) => e.set(s, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    vr(r) && vr(s) && e.hasOwnProperty(n) && !ve(s) && !wt(s)
      ? (e[n] = wr(r, s))
      : (e[n] = s);
  }
  return e;
}
const pf = Symbol();
function hf(e) {
  return !vr(e) || !e.hasOwnProperty(pf);
}
const { assign: Et } = Object;
function mf(e) {
  return !!(ve(e) && e.effect);
}
function gf(e, t, n, s) {
  const { state: r, actions: i, getters: o } = t,
    l = n.state.value[e];
  let a;
  function u() {
    l || (n.state.value[e] = r ? r() : {});
    const c = Ac(n.state.value[e]);
    return Et(
      c,
      i,
      Object.keys(o || {}).reduce(
        (f, d) => (
          (f[d] = Ur(
            Ce(() => {
              _s(n);
              const p = n._s.get(e);
              return o[d].call(p, p);
            }),
          )),
          f
        ),
        {},
      ),
    );
  }
  return (a = ql(e, u, t, n, s, !0)), a;
}
function ql(e, t, n = {}, s, r, i) {
  let o;
  const l = Et({ actions: {} }, n),
    a = { deep: !0 };
  let u,
    c,
    f = [],
    d = [],
    p;
  const g = s.state.value[e];
  !i && !g && (s.state.value[e] = {}), ne({});
  let v;
  function y(M) {
    let C;
    (u = c = !1),
      typeof M == "function"
        ? (M(s.state.value[e]),
          (C = { type: xn.patchFunction, storeId: e, events: p }))
        : (wr(s.state.value[e], M),
          (C = { type: xn.patchObject, payload: M, storeId: e, events: p }));
    const I = (v = Symbol());
    Ss().then(() => {
      v === I && (u = !0);
    }),
      (c = !0),
      Kt(f, C, s.state.value[e]);
  }
  const b = i
    ? function () {
        const { state: C } = n,
          I = C ? C() : {};
        this.$patch((z) => {
          Et(z, I);
        });
      }
    : Wl;
  function S() {
    o.stop(), (f = []), (d = []), s._s.delete(e);
  }
  const E = (M, C = "") => {
      if (Gi in M) return (M[$s] = C), M;
      const I = function () {
        _s(s);
        const z = Array.from(arguments),
          Y = [],
          H = [];
        function q(X) {
          Y.push(X);
        }
        function $(X) {
          H.push(X);
        }
        Kt(d, { args: z, name: I[$s], store: O, after: q, onError: $ });
        let se;
        try {
          se = M.apply(this && this.$id === e ? this : O, z);
        } catch (X) {
          throw (Kt(H, X), X);
        }
        return se instanceof Promise
          ? se
              .then((X) => (Kt(Y, X), X))
              .catch((X) => (Kt(H, X), Promise.reject(X)))
          : (Kt(Y, se), se);
      };
      return (I[Gi] = !0), (I[$s] = C), I;
    },
    T = {
      _p: s,
      $id: e,
      $onAction: Ui.bind(null, d),
      $patch: y,
      $reset: b,
      $subscribe(M, C = {}) {
        const I = Ui(f, M, C.detached, () => z()),
          z = o.run(() =>
            sn(
              () => s.state.value[e],
              (Y) => {
                (C.flush === "sync" ? c : u) &&
                  M({ storeId: e, type: xn.direct, events: p }, Y);
              },
              Et({}, a, C),
            ),
          );
        return I;
      },
      $dispose: S,
    },
    O = Nn(T);
  s._s.set(e, O);
  const k = ((s._a && s._a.runWithContext) || df)(() =>
    s._e.run(() => (o = zo()).run(() => t({ action: E }))),
  );
  for (const M in k) {
    const C = k[M];
    if ((ve(C) && !mf(C)) || wt(C))
      i ||
        (g && hf(C) && (ve(C) ? (C.value = g[M]) : wr(C, g[M])),
        (s.state.value[e][M] = C));
    else if (typeof C == "function") {
      const I = E(C, M);
      (k[M] = I), (l.actions[M] = C);
    }
  }
  return (
    Et(O, k),
    Et(oe(O), k),
    Object.defineProperty(O, "$state", {
      get: () => s.state.value[e],
      set: (M) => {
        y((C) => {
          Et(C, M);
        });
      },
    }),
    s._p.forEach((M) => {
      Et(
        O,
        o.run(() => M({ store: O, app: s._a, pinia: s, options: l })),
      );
    }),
    g && i && n.hydrate && n.hydrate(O.$state, g),
    (u = !0),
    (c = !0),
    O
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function vf(e, t, n) {
  let s;
  const r = typeof t == "function";
  s = r ? n : t;
  function i(o, l) {
    const a = su();
    return (
      (o = o || (a ? qe($l, null) : null)),
      o && _s(o),
      (o = Gl),
      o._s.has(e) || (r ? ql(e, t, s, o) : gf(e, s, o)),
      o._s.get(e)
    );
  }
  return (i.$id = e), i;
}
function wf(e) {
  const t = oe(e),
    n = {};
  for (const s in t) {
    const r = t[s];
    r.effect
      ? (n[s] = Ce({
          get: () => e[s],
          set(i) {
            e[s] = i;
          },
        }))
      : (ve(r) || wt(r)) && (n[s] = Pc(e, s));
  }
  return n;
}
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Qt = typeof document < "u";
function Kl(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function yf(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Kl(e.default))
  );
}
const le = Object.assign;
function Ws(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Je(r) ? r.map(e) : e(r);
  }
  return n;
}
const Tn = () => {},
  Je = Array.isArray,
  Yl = /#/g,
  bf = /&/g,
  Sf = /\//g,
  Ef = /=/g,
  xf = /\?/g,
  Xl = /\+/g,
  Tf = /%5B/g,
  Af = /%5D/g,
  Ql = /%5E/g,
  _f = /%60/g,
  Jl = /%7B/g,
  Cf = /%7C/g,
  Zl = /%7D/g,
  Pf = /%20/g;
function Zr(e) {
  return encodeURI("" + e)
    .replace(Cf, "|")
    .replace(Tf, "[")
    .replace(Af, "]");
}
function Of(e) {
  return Zr(e).replace(Jl, "{").replace(Zl, "}").replace(Ql, "^");
}
function yr(e) {
  return Zr(e)
    .replace(Xl, "%2B")
    .replace(Pf, "+")
    .replace(Yl, "%23")
    .replace(bf, "%26")
    .replace(_f, "`")
    .replace(Jl, "{")
    .replace(Zl, "}")
    .replace(Ql, "^");
}
function Rf(e) {
  return yr(e).replace(Ef, "%3D");
}
function Mf(e) {
  return Zr(e).replace(Yl, "%23").replace(xf, "%3F");
}
function If(e) {
  return e == null ? "" : Mf(e).replace(Sf, "%2F");
}
function Ln(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Lf = /\/$/,
  Bf = (e) => e.replace(Lf, "");
function qs(e, t, n = "/") {
  let s,
    r = {},
    i = "",
    o = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (r = e(i))),
    l > -1 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = kf(s ?? t, n)),
    { fullPath: s + (i && "?") + i + o, path: s, query: r, hash: Ln(o) }
  );
}
function Df(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function $i(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Nf(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    an(t.matched[s], n.matched[r]) &&
    ea(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function an(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ea(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ff(e[n], t[n])) return !1;
  return !0;
}
function Ff(e, t) {
  return Je(e) ? Wi(e, t) : Je(t) ? Wi(t, e) : e === t;
}
function Wi(e, t) {
  return Je(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function kf(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let i = n.length - 1,
    o,
    l;
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + s.slice(o).join("/");
}
const St = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Bn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Bn || (Bn = {}));
var An;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(An || (An = {}));
function jf(e) {
  if (!e)
    if (Qt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bf(e);
}
const Vf = /^[^#]+#/;
function zf(e, t) {
  return e.replace(Vf, "#") + t;
}
function Hf(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const Cs = () => ({ left: window.scrollX, top: window.scrollY });
function Uf(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Hf(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function qi(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const br = new Map();
function Gf(e, t) {
  br.set(e, t);
}
function $f(e) {
  const t = br.get(e);
  return br.delete(e), t;
}
let Wf = () => location.protocol + "//" + location.host;
function ta(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), $i(a, "");
  }
  return $i(n, e) + s + r;
}
function qf(e, t, n, s) {
  let r = [],
    i = [],
    o = null;
  const l = ({ state: d }) => {
    const p = ta(e, location),
      g = n.value,
      v = t.value;
    let y = 0;
    if (d) {
      if (((n.value = p), (t.value = d), o && o === g)) {
        o = null;
        return;
      }
      y = v ? d.position - v.position : 0;
    } else s(p);
    r.forEach((b) => {
      b(n.value, g, {
        delta: y,
        type: Bn.pop,
        direction: y ? (y > 0 ? An.forward : An.back) : An.unknown,
      });
    });
  };
  function a() {
    o = n.value;
  }
  function u(d) {
    r.push(d);
    const p = () => {
      const g = r.indexOf(d);
      g > -1 && r.splice(g, 1);
    };
    return i.push(p), p;
  }
  function c() {
    const { history: d } = window;
    d.state && d.replaceState(le({}, d.state, { scroll: Cs() }), "");
  }
  function f() {
    for (const d of i) d();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: f }
  );
}
function Ki(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Cs() : null,
  };
}
function Kf(e) {
  const { history: t, location: n } = window,
    s = { value: ta(e, n) },
    r = { value: t.state };
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function i(a, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a
          : Wf() + e + a;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (r.value = u);
    } catch (p) {
      console.error(p), n[c ? "replace" : "assign"](d);
    }
  }
  function o(a, u) {
    const c = le({}, t.state, Ki(r.value.back, a, r.value.forward, !0), u, {
      position: r.value.position,
    });
    i(a, c, !0), (s.value = a);
  }
  function l(a, u) {
    const c = le({}, r.value, t.state, { forward: a, scroll: Cs() });
    i(c.current, c, !0);
    const f = le({}, Ki(s.value, a, null), { position: c.position + 1 }, u);
    i(a, f, !1), (s.value = a);
  }
  return { location: s, state: r, push: l, replace: o };
}
function Yf(e) {
  e = jf(e);
  const t = Kf(e),
    n = qf(e, t.state, t.location, t.replace);
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const r = le(
    { location: "", base: e, go: s, createHref: zf.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Xf(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function na(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const sa = Symbol("");
var Yi;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Yi || (Yi = {}));
function cn(e, t) {
  return le(new Error(), { type: e, [sa]: !0 }, t);
}
function dt(e, t) {
  return e instanceof Error && sa in e && (t == null || !!(e.type & t));
}
const Xi = "[^/]+?",
  Qf = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Jf = /[.+*?^${}()[\]/\\]/g;
function Zf(e, t) {
  const n = le({}, Qf, t),
    s = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (r += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (r += "/"), (r += d.value.replace(Jf, "\\$&")), (p += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: v, optional: y, regexp: b } = d;
        i.push({ name: g, repeatable: v, optional: y });
        const S = b || Xi;
        if (S !== Xi) {
          p += 10;
          try {
            new RegExp(`(${S})`);
          } catch (T) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${S}): ` + T.message,
            );
          }
        }
        let E = v ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        f || (E = y && u.length < 2 ? `(?:/${E})` : "/" + E),
          y && (E += "?"),
          (r += E),
          (p += 20),
          y && (p += -8),
          v && (p += -20),
          S === ".*" && (p += -50);
      }
      c.push(p);
    }
    s.push(c);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"),
    n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function l(u) {
    const c = u.match(o),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const p = c[d] || "",
        g = i[d - 1];
      f[g.name] = p && g.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function a(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const p of d)
        if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: g, repeatable: v, optional: y } = p,
            b = g in u ? u[g] : "";
          if (Je(b) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const S = Je(b) ? b.join("/") : b;
          if (!S)
            if (y)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          c += S;
        }
    }
    return c || "/";
  }
  return { re: o, score: s, keys: i, parse: l, stringify: a };
}
function ed(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function ra(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const i = ed(s[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Qi(s)) return 1;
    if (Qi(r)) return -1;
  }
  return r.length - s.length;
}
function Qi(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const td = { type: 0, value: "" },
  nd = /[a-zA-Z0-9_]/;
function sd(e) {
  if (!e) return [[]];
  if (e === "/") return [[td]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let i;
  function o() {
    i && r.push(i), (i = []);
  }
  let l = 0,
    a,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? i.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (a === "*" || a === "+") &&
              t(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
              ),
            i.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (u && f(), o()) : a === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = s);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : nd.test(a)
            ? d()
            : (f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a);
        break;
      case 3:
        f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), r;
}
function rd(e, t, n) {
  const s = Zf(sd(e.path), n),
    r = le(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function id(e, t) {
  const n = [],
    s = new Map();
  t = to({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(f) {
    return s.get(f);
  }
  function i(f, d, p) {
    const g = !p,
      v = Zi(f);
    v.aliasOf = p && p.record;
    const y = to(t, f),
      b = [v];
    if ("alias" in f) {
      const T = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const O of T)
        b.push(
          Zi(
            le({}, v, {
              components: p ? p.record.components : v.components,
              path: O,
              aliasOf: p ? p.record : v,
            }),
          ),
        );
    }
    let S, E;
    for (const T of b) {
      const { path: O } = T;
      if (d && O[0] !== "/") {
        const U = d.record.path,
          k = U[U.length - 1] === "/" ? "" : "/";
        T.path = d.record.path + (O && k + O);
      }
      if (
        ((S = rd(T, d, y)),
        p
          ? p.alias.push(S)
          : ((E = E || S),
            E !== S && E.alias.push(S),
            g && f.name && !eo(S) && o(f.name)),
        ia(S) && a(S),
        v.children)
      ) {
        const U = v.children;
        for (let k = 0; k < U.length; k++) i(U[k], S, p && p.children[k]);
      }
      p = p || S;
    }
    return E
      ? () => {
          o(E);
        }
      : Tn;
  }
  function o(f) {
    if (na(f)) {
      const d = s.get(f);
      d &&
        (s.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(o),
        d.alias.forEach(o));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o));
    }
  }
  function l() {
    return n;
  }
  function a(f) {
    const d = ad(f, n);
    n.splice(d, 0, f), f.record.name && !eo(f) && s.set(f.record.name, f);
  }
  function u(f, d) {
    let p,
      g = {},
      v,
      y;
    if ("name" in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw cn(1, { location: f });
      (y = p.record.name),
        (g = le(
          Ji(
            d.params,
            p.keys
              .filter((E) => !E.optional)
              .concat(p.parent ? p.parent.keys.filter((E) => E.optional) : [])
              .map((E) => E.name),
          ),
          f.params &&
            Ji(
              f.params,
              p.keys.map((E) => E.name),
            ),
        )),
        (v = p.stringify(g));
    } else if (f.path != null)
      (v = f.path),
        (p = n.find((E) => E.re.test(v))),
        p && ((g = p.parse(v)), (y = p.record.name));
    else {
      if (((p = d.name ? s.get(d.name) : n.find((E) => E.re.test(d.path))), !p))
        throw cn(1, { location: f, currentLocation: d });
      (y = p.record.name),
        (g = le({}, d.params, f.params)),
        (v = p.stringify(g));
    }
    const b = [];
    let S = p;
    for (; S; ) b.unshift(S.record), (S = S.parent);
    return { name: y, path: v, params: g, matched: b, meta: ld(b) };
  }
  e.forEach((f) => i(f));
  function c() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: i,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: l,
    getRecordMatcher: r,
  };
}
function Ji(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Zi(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: od(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function od(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function eo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ld(e) {
  return e.reduce((t, n) => le(t, n.meta), {});
}
function to(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function ad(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const i = (n + s) >> 1;
    ra(e, t[i]) < 0 ? (s = i) : (n = i + 1);
  }
  const r = cd(e);
  return r && (s = t.lastIndexOf(r, s - 1)), s;
}
function cd(e) {
  let t = e;
  for (; (t = t.parent); ) if (ia(t) && ra(e, t) === 0) return t;
}
function ia({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function ud(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Xl, " "),
      o = i.indexOf("="),
      l = Ln(o < 0 ? i : i.slice(0, o)),
      a = o < 0 ? null : Ln(i.slice(o + 1));
    if (l in t) {
      let u = t[l];
      Je(u) || (u = t[l] = [u]), u.push(a);
    } else t[l] = a;
  }
  return t;
}
function no(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Rf(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Je(s) ? s.map((i) => i && yr(i)) : [s && yr(s)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function fd(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Je(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
          ? s
          : "" + s);
  }
  return t;
}
const dd = Symbol(""),
  so = Symbol(""),
  Ps = Symbol(""),
  ei = Symbol(""),
  Sr = Symbol("");
function mn() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function At(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((l, a) => {
      const u = (d) => {
          d === !1
            ? a(cn(4, { from: n, to: t }))
            : d instanceof Error
              ? a(d)
              : Xf(d)
                ? a(cn(2, { from: t, to: d }))
                : (o &&
                    s.enterCallbacks[r] === o &&
                    typeof d == "function" &&
                    o.push(d),
                  l());
        },
        c = i(() => e.call(s && s.instances[r], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => a(d));
    });
}
function Ks(e, t, n, s, r = (i) => i()) {
  const i = [];
  for (const o of e)
    for (const l in o.components) {
      let a = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l]))
        if (Kl(a)) {
          const c = (a.__vccOpts || a)[t];
          c && i.push(At(c, n, s, o, l, r));
        } else {
          let u = a();
          i.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${o.path}"`,
                );
              const f = yf(c) ? c.default : c;
              (o.mods[l] = c), (o.components[l] = f);
              const p = (f.__vccOpts || f)[t];
              return p && At(p, n, s, o, l, r)();
            }),
          );
        }
    }
  return i;
}
function ro(e) {
  const t = qe(Ps),
    n = qe(ei),
    s = Ce(() => {
      const a = ge(e.to);
      return t.resolve(a);
    }),
    r = Ce(() => {
      const { matched: a } = s.value,
        { length: u } = a,
        c = a[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(an.bind(null, c));
      if (d > -1) return d;
      const p = io(a[u - 2]);
      return u > 1 && io(c) === p && f[f.length - 1].path !== p
        ? f.findIndex(an.bind(null, a[u - 2]))
        : d;
    }),
    i = Ce(() => r.value > -1 && vd(n.params, s.value.params)),
    o = Ce(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        ea(n.params, s.value.params),
    );
  function l(a = {}) {
    if (gd(a)) {
      const u = t[ge(e.replace) ? "replace" : "push"](ge(e.to)).catch(Tn);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: Ce(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l,
  };
}
function pd(e) {
  return e.length === 1 ? e[0] : e;
}
const hd = pl({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ro,
    setup(e, { slots: t }) {
      const n = Nn(ro(e)),
        { options: s } = qe(Ps),
        r = Ce(() => ({
          [oo(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [oo(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && pd(t.default(n));
        return e.custom
          ? i
          : De(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i,
            );
      };
    },
  }),
  md = hd;
function gd(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function vd(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Je(r) || r.length !== s.length || s.some((i, o) => i !== r[o]))
      return !1;
  }
  return !0;
}
function io(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const oo = (e, t, n) => e ?? t ?? n,
  wd = pl({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = qe(Sr),
        r = Ce(() => e.route || s.value),
        i = qe(so, 0),
        o = Ce(() => {
          let u = ge(i);
          const { matched: c } = r.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        l = Ce(() => r.value.matched[o.value]);
      nn(
        so,
        Ce(() => o.value + 1),
      ),
        nn(dd, l),
        nn(Sr, r);
      const a = ne();
      return (
        sn(
          () => [a.value, l.value, e.name],
          ([u, c, f], [d, p, g]) => {
            c &&
              ((c.instances[f] = u),
              p &&
                p !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards),
                c.updateGuards.size || (c.updateGuards = p.updateGuards))),
              u &&
                c &&
                (!p || !an(c, p) || !d) &&
                (c.enterCallbacks[f] || []).forEach((v) => v(u));
          },
          { flush: "post" },
        ),
        () => {
          const u = r.value,
            c = e.name,
            f = l.value,
            d = f && f.components[c];
          if (!d) return lo(n.default, { Component: d, route: u });
          const p = f.props[c],
            g = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                  ? p(u)
                  : p
              : null,
            y = De(
              d,
              le({}, g, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (f.instances[c] = null);
                },
                ref: a,
              }),
            );
          return lo(n.default, { Component: y, route: u }) || y;
        }
      );
    },
  });
function lo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const oa = wd;
function yd(e) {
  const t = id(e.routes, e),
    n = e.parseQuery || ud,
    s = e.stringifyQuery || no,
    r = e.history,
    i = mn(),
    o = mn(),
    l = mn(),
    a = Ec(St);
  let u = St;
  Qt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Ws.bind(null, (_) => "" + _),
    f = Ws.bind(null, If),
    d = Ws.bind(null, Ln);
  function p(_, V) {
    let F, G;
    return (
      na(_) ? ((F = t.getRecordMatcher(_)), (G = V)) : (G = _), t.addRoute(G, F)
    );
  }
  function g(_) {
    const V = t.getRecordMatcher(_);
    V && t.removeRoute(V);
  }
  function v() {
    return t.getRoutes().map((_) => _.record);
  }
  function y(_) {
    return !!t.getRecordMatcher(_);
  }
  function b(_, V) {
    if (((V = le({}, V || a.value)), typeof _ == "string")) {
      const w = qs(n, _, V.path),
        A = t.resolve({ path: w.path }, V),
        R = r.createHref(w.fullPath);
      return le(w, A, {
        params: d(A.params),
        hash: Ln(w.hash),
        redirectedFrom: void 0,
        href: R,
      });
    }
    let F;
    if (_.path != null) F = le({}, _, { path: qs(n, _.path, V.path).path });
    else {
      const w = le({}, _.params);
      for (const A in w) w[A] == null && delete w[A];
      (F = le({}, _, { params: f(w) })), (V.params = f(V.params));
    }
    const G = t.resolve(F, V),
      ue = _.hash || "";
    G.params = c(d(G.params));
    const h = Df(s, le({}, _, { hash: Of(ue), path: G.path })),
      m = r.createHref(h);
    return le(
      { fullPath: h, hash: ue, query: s === no ? fd(_.query) : _.query || {} },
      G,
      { redirectedFrom: void 0, href: m },
    );
  }
  function S(_) {
    return typeof _ == "string" ? qs(n, _, a.value.path) : le({}, _);
  }
  function E(_, V) {
    if (u !== _) return cn(8, { from: V, to: _ });
  }
  function T(_) {
    return k(_);
  }
  function O(_) {
    return T(le(S(_), { replace: !0 }));
  }
  function U(_) {
    const V = _.matched[_.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: F } = V;
      let G = typeof F == "function" ? F(_) : F;
      return (
        typeof G == "string" &&
          ((G = G.includes("?") || G.includes("#") ? (G = S(G)) : { path: G }),
          (G.params = {})),
        le(
          {
            query: _.query,
            hash: _.hash,
            params: G.path != null ? {} : _.params,
          },
          G,
        )
      );
    }
  }
  function k(_, V) {
    const F = (u = b(_)),
      G = a.value,
      ue = _.state,
      h = _.force,
      m = _.replace === !0,
      w = U(F);
    if (w)
      return k(
        le(S(w), {
          state: typeof w == "object" ? le({}, ue, w.state) : ue,
          force: h,
          replace: m,
        }),
        V || F,
      );
    const A = F;
    A.redirectedFrom = V;
    let R;
    return (
      !h && Nf(s, G, F) && ((R = cn(16, { to: A, from: G })), Ge(G, G, !0, !1)),
      (R ? Promise.resolve(R) : I(A, G))
        .catch((P) => (dt(P) ? (dt(P, 2) ? P : Ye(P)) : ie(P, A, G)))
        .then((P) => {
          if (P) {
            if (dt(P, 2))
              return k(
                le({ replace: m }, S(P.to), {
                  state: typeof P.to == "object" ? le({}, ue, P.to.state) : ue,
                  force: h,
                }),
                V || A,
              );
          } else P = Y(A, G, !0, m, ue);
          return z(A, G, P), P;
        })
    );
  }
  function M(_, V) {
    const F = E(_, V);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function C(_) {
    const V = Wt.values().next().value;
    return V && typeof V.runWithContext == "function"
      ? V.runWithContext(_)
      : _();
  }
  function I(_, V) {
    let F;
    const [G, ue, h] = bd(_, V);
    F = Ks(G.reverse(), "beforeRouteLeave", _, V);
    for (const w of G)
      w.leaveGuards.forEach((A) => {
        F.push(At(A, _, V));
      });
    const m = M.bind(null, _, V);
    return (
      F.push(m),
      $e(F)
        .then(() => {
          F = [];
          for (const w of i.list()) F.push(At(w, _, V));
          return F.push(m), $e(F);
        })
        .then(() => {
          F = Ks(ue, "beforeRouteUpdate", _, V);
          for (const w of ue)
            w.updateGuards.forEach((A) => {
              F.push(At(A, _, V));
            });
          return F.push(m), $e(F);
        })
        .then(() => {
          F = [];
          for (const w of h)
            if (w.beforeEnter)
              if (Je(w.beforeEnter))
                for (const A of w.beforeEnter) F.push(At(A, _, V));
              else F.push(At(w.beforeEnter, _, V));
          return F.push(m), $e(F);
        })
        .then(
          () => (
            _.matched.forEach((w) => (w.enterCallbacks = {})),
            (F = Ks(h, "beforeRouteEnter", _, V, C)),
            F.push(m),
            $e(F)
          ),
        )
        .then(() => {
          F = [];
          for (const w of o.list()) F.push(At(w, _, V));
          return F.push(m), $e(F);
        })
        .catch((w) => (dt(w, 8) ? w : Promise.reject(w)))
    );
  }
  function z(_, V, F) {
    l.list().forEach((G) => C(() => G(_, V, F)));
  }
  function Y(_, V, F, G, ue) {
    const h = E(_, V);
    if (h) return h;
    const m = V === St,
      w = Qt ? history.state : {};
    F &&
      (G || m
        ? r.replace(_.fullPath, le({ scroll: m && w && w.scroll }, ue))
        : r.push(_.fullPath, ue)),
      (a.value = _),
      Ge(_, V, F, m),
      Ye();
  }
  let H;
  function q() {
    H ||
      (H = r.listen((_, V, F) => {
        if (!zn.listening) return;
        const G = b(_),
          ue = U(G);
        if (ue) {
          k(le(ue, { replace: !0, force: !0 }), G).catch(Tn);
          return;
        }
        u = G;
        const h = a.value;
        Qt && Gf(qi(h.fullPath, F.delta), Cs()),
          I(G, h)
            .catch((m) =>
              dt(m, 12)
                ? m
                : dt(m, 2)
                  ? (k(le(S(m.to), { force: !0 }), G)
                      .then((w) => {
                        dt(w, 20) &&
                          !F.delta &&
                          F.type === Bn.pop &&
                          r.go(-1, !1);
                      })
                      .catch(Tn),
                    Promise.reject())
                  : (F.delta && r.go(-F.delta, !1), ie(m, G, h)),
            )
            .then((m) => {
              (m = m || Y(G, h, !1)),
                m &&
                  (F.delta && !dt(m, 8)
                    ? r.go(-F.delta, !1)
                    : F.type === Bn.pop && dt(m, 20) && r.go(-1, !1)),
                z(G, h, m);
            })
            .catch(Tn);
      }));
  }
  let $ = mn(),
    se = mn(),
    X;
  function ie(_, V, F) {
    Ye(_);
    const G = se.list();
    return (
      G.length ? G.forEach((ue) => ue(_, V, F)) : console.error(_),
      Promise.reject(_)
    );
  }
  function Ue() {
    return X && a.value !== St
      ? Promise.resolve()
      : new Promise((_, V) => {
          $.add([_, V]);
        });
  }
  function Ye(_) {
    return (
      X ||
        ((X = !_),
        q(),
        $.list().forEach(([V, F]) => (_ ? F(_) : V())),
        $.reset()),
      _
    );
  }
  function Ge(_, V, F, G) {
    const { scrollBehavior: ue } = e;
    if (!Qt || !ue) return Promise.resolve();
    const h =
      (!F && $f(qi(_.fullPath, 0))) ||
      ((G || !F) && history.state && history.state.scroll) ||
      null;
    return Ss()
      .then(() => ue(_, V, h))
      .then((m) => m && Uf(m))
      .catch((m) => ie(m, _, V));
  }
  const Te = (_) => r.go(_);
  let $t;
  const Wt = new Set(),
    zn = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: y,
      getRoutes: v,
      resolve: b,
      options: e,
      push: T,
      replace: O,
      go: Te,
      back: () => Te(-1),
      forward: () => Te(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: se.add,
      isReady: Ue,
      install(_) {
        const V = this;
        _.component("RouterLink", md),
          _.component("RouterView", oa),
          (_.config.globalProperties.$router = V),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ge(a),
          }),
          Qt &&
            !$t &&
            a.value === St &&
            (($t = !0), T(r.location).catch((ue) => {}));
        const F = {};
        for (const ue in St)
          Object.defineProperty(F, ue, {
            get: () => a.value[ue],
            enumerable: !0,
          });
        _.provide(Ps, V), _.provide(ei, sl(F)), _.provide(Sr, a);
        const G = _.unmount;
        Wt.add(_),
          (_.unmount = function () {
            Wt.delete(_),
              Wt.size < 1 &&
                ((u = St),
                H && H(),
                (H = null),
                (a.value = St),
                ($t = !1),
                (X = !1)),
              G();
          });
      },
    };
  function $e(_) {
    return _.reduce((V, F) => V.then(() => C(F)), Promise.resolve());
  }
  return zn;
}
function bd(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const l = t.matched[o];
    l && (e.matched.find((u) => an(u, l)) ? s.push(l) : n.push(l));
    const a = e.matched[o];
    a && (t.matched.find((u) => an(u, a)) || r.push(a));
  }
  return [n, s, r];
}
function la() {
  return qe(Ps);
}
function Sd(e) {
  return qe(ei);
}
const Ed =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA2CAYAAACBWxqaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB7ZqBTcMwEEUvEQOUDcIEdISyQVfoBMAEDRMwAmzQMkFHSDcIG7QbfO6IES0oSuzavlj1k66potq+33xblzhEgQAw43iVoNTgpCuOPX5p5RylACe6MAn/Rc4taMpwgo8YZk1Tw/j9DeOR385oChi/t7Cnhfa84ASWHAe4I22XpAEPvIY/4s0LdH7fwT8bhLYUDzCHm9/H0gYTgW6JvMTvY5Exnsgn6EqC2Fw+L/C/JIhNA1dLob8kiE3LMbdNfkxJEJthS8G+JIiNzMWzEqQ4Sb7iw5bjnqbNJ8dDURRypFI+0JW5DU0/eaHi2MGUIAU6b9WUJrUIACVMSYmTBWhztQJeOG4LT0hfHM/kAuzxW+qe51LDEpdlVP75IwXAlAkHmzbWAswlD4ZtPnkV0uaGPKFlxWwhbbIAbbIAbbIAbbIAbbIAbbIAbbIAbbIAbURAkEckkTiKgA9Kl608F5IdwGZsi76bcV839Zb93JXcz56/rCg9Vj/7ZN+g29R+x8DrBH29wRLHfiS3DU72jb8Az4SFya+gtyEAAAAASUVORK5CYII=",
  xd =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAYAAACGRC3XAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASmSURBVHgB7VrrcdswDEZ6/V91gnKDuhNUG9SdoMoE8QZ2J4g7gZ0JkkxgdQJnA6kTyJ0AJWsqoSCAD9V2Ijffnc5H8iMIgi8QNEAAiDjRX6O/Sn/fYCTQuk4dvScwBLpiZgW0qGAk0LpuXb1NXzjem4CcK/0pJ72D8cDVVelvBinQFlPYRw4jgdGV6G6Wg0oRsCYCVjAyDO6DMPoKRgbbjya5H+cw+i207oukvpzL6LfA/UnWkL3g8UTgToGcpNcXFxc1jBRad3Ma3DhZpvPyiYDdc3/Uo98C+ydCFUvcwJnA9IX0LTf5dAlMSfoGwoLNGlvaBhScELq9K9tuEUG/J+kpJ3CbOv2xe2I0cCLg3tfvjaiHn3HL4K1DUPrHvTSUoc3PWt69IGUQ34GJbU/ZLLNZPeg2y0gRtK2VlvnJbno9mHxdXsLTJq/c04Cz6ALCnahS6thRmGPfOemMjP5WodmH/YtaTPvUJyjcwiWmTamCKh7gXwU6TmG484BMzt/PEvhLt3BDCrNA43S/KDzcFQ7HdUCPDeHPPFy6D2zdwoYt4AVRb7HycK/x33HtkZ90dGN32TSSZe4CQmaEPxN4hdAhY2yzHpXDnVi5lVCn8OhDl5ZvGdy5RBCsuAS/ATaErwRexXTkNqCgshzOaJlQh+5fU4/8Drd1hKjgGvxwj8uaOy7tiCmSbY7Wr9JRZWBkGY7hkiKjYyFUo9wcZNRuQjKAqKAdhUwS6IALoF5CPC4ZPb4I3AeSfgcyOjJbAyhCqkFGLDcn6aRbpeVS9zXnlgEjV4EM1gApoAr8ogTkw9D3kI6SyVMCdxfBobxBBohBFmo4EnWk7MFtDTEAFf4B4hB9TxgIV36yAXYeYRSU+57h1EwetyxC4OrQDQ+YfeE3RCLZAHbDcfkfIzgGnyEdVyRdC0coNVQNMpSbGDIDDNxRUIKDQoMpZgefQSQ0l75KGZQCfRrJAxAMUPtIDH6SdMFw7pi8OUY8VFrOgin6LlShs+sBZGRcg6l3gagLiODSGswFfhsv4LAS6kwIL3SR27hkt8C9UARfgbHv5+cMR6F8uWmsgRb2W6EcL6hQvm+sCbcI6N15IxAtg+F4AI2uSLNggmmBEApTdyLIVgxfeXTORJ0x4UblCKMdm3kUrTAdFXr2DOzL9D57YT/st4wrlAXSuEDj4RojLDEObbwgS+hMheE4ojzIKISNI4ywSaljDVFgP6SGVtYMA8vPyqHBliKiDm0z83UGMe5dQNl6FcY9ULT1csYAOSQA9yNq2g36F9jfLzYciW5sCzgSDmGAxPbCYTzGSls4Ep7BABVpS5n8zm3Q+vClkzU5plKngu2DcrIeX7246zANXHgfJ0aCgqTlR1/kz3cFB8aplgCzrCv0/UPEXjd/kOwxz4IFSZe+qPRfCLMghwPiFDMAI1xlNiR2RrPglqTjI9OY4OsPwbFnADKv15i6l2HfeTjYn6VPYICo12tvVFhPF3MhKp2sIaHtlwATS1zDEOCTr2+CF0Miu5LcY88AV28FLw14YldYwrFehkaDVwPAf45XA8DzYReZd77AbpAyGIQ9S+D+3eBg/kUq/gCaMM/os48DDgAAAABJRU5ErkJggg==",
  Td =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ8SURBVHgBzVvbddswDIVz+l+PoA3iTlBlgnqDuhM0mSDuBPEG8QbOBnIniDOBtIHdCW5Bk2pUB3yIImXdc2AlFAnw8iUIpGY0EgDM+dKVFg3LaTabnWgEzCgDDLkFy5LllqUw4oIifGB5Y3nhBtjT1MFES5aK5Yg02LEsaUpQvcnymJCkhJplRdcGV+JnZqLTIM5GF9BDNwZHU/Ea8Y1VsxQ0BqB7NRQVy4Zl6aogdAMuTd6qh/5HygXoufocUImK5R56pY61VbCsoHvShydKDUP2EEC0pMQIJP46pIEvDfrIqnl4T5kRQDwNaQ/ZCmMtHvRvqFfZSHPhJ4fyNV0JyrajXs8UA2hnYnJkO/Vzke43xaCHzmTJtvCQXvRRVOckC/PcpQRwkK5CFawGKQizUSduwMpSZ//Qhty7Kq2gBIB+o0raiNBTUHJTVdrcVdDWuytKBNa1vdBdUAJAe3cS1q5CtVCgpoQQbKwpESAP7aMt8xL5e7cU9KdcG0oLh1LK/IL8vbu1VCiNH0zWXq6kjFl719ioLXaS+eKQ5/L/ixfsQ6GgRHDYkHsg3s7cYqNU9z+ZfJITsOfIYUNhRlZ8+erJVrrusY4d6cilDX9YNr46qXAv69oL9hTHfUv4Vij7RgEwQyXOYf9YIR8+s/wIyKfqXl6knTnemH8kv3NP4WhoHPwOzLcX0orzr2PMhzvfWs8G+VCjRzQF9pefufUmRQDhcag+2CHisWXRVdhWzyNFAv6oRCgGhY4g+9aLG0v+6I0ttYqy3PGfvygeDcsX1rOheEgc5jeUCVzZNV/uqD8a0mQbygBFWGwJSoOYkdIk2joVOeQmXFJ/LJDGt5Z0NDbC58WHhuM79Yeq6KDwD+yP1NONGT6NcLPXc1gwWgzQ4XNTfSiEtPMpg3bRaoQMJQ2Dq5f2LA9k99CWA4d1KaQd1E9LWPKbJf+6D74JaWo0PajHlnnkqFV8L+Rrj0zEwv1uAPurW1QrQ/beatu6ADnUGvVCArtbWXYzzS2eSZSng4/BwI2v8UxF606ZKG8PlkCklLES8kW9mHeMqkYMXnEN6a0pGxVeguzLv0gZwwNgYYZLxE+JqLKwh5mXtgLHVL18DaBvmBn2fZpkQbZcQMwmAuyLl0oraKLAxwXP37udwrYti8kObdjfv1dDFeQ7JhQJ2Dfuw1d56P1bTJ003KcUij66XEN7EqSR40gG7HtBVyXtIRsfFoJetV8dyitM69jSgYYigHSNEU64wn9yV50nS3oaz0U6G3G8HzrHKGQvjIfsLtTQXk9BkTANfI+w+PY2C9lOZdYIR4X348MLh84CcceHx3F5YXflQpDigHiFnntfqYjn2EtyYZSTu1MgroiqqZRvrsYAeh7ukAaKZIXEh86zfKilYCrafqil5puvdxoj5w+1WA45vlbLRvgSeP8Ur+gkn1oZ61O8v7YDOk70b1gvAAAAAElFTkSuQmCC",
  Ad =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIsSURBVHgB7ZqNbcIwEIVfEAPQDTwCnQDYoJ2gdIJ2A8IGZQLIBGWDpBu0E+ANYAP3DocKRUExBP+l+aQnwHKQX3y5XOwAJUqpKSkn7VVY8Hhy0hOuhQ5aqDhYmHpKlD4Tn4iHWZIkRVOnAekNcWE0azxje/ocIR4ONGMPTZ3YmKppn5Ek/CNIebWRjCVNBw4vtEs6VsIz9efcjAE6Sm8sRJS+cZ/YKX0/PibCLs2YIKUkNjvqYiiOSe9dvcZeWhtTunhOSQLuyUhLUlFpF7hQbAoYwP3OjtlfU6Te8P9/1PRLq33azpg4+87ZKC2z0xyesXGNCdKazK09hecRm8ljTtrdOzxNcZEVvYSnq3Qv4Dg8Xd/H5nAUnr5u0KfwFLCEz8pDQM+gFXwak6QNLOHD2AG6DHq0+ZQ+hFsK0quLZQdXxiS0oQKOsG2Mw25F+iBTBzjEprECjsKuDhvGJByHXR1tjcmz797Cro5WxjjMqHrgVWNeZ9iGsMh6onUoliFXIDD6BdPY6I3FRm8sNi6le6FabLrdEYEbYWNcJVT3oHOEi1FVw6H4jbgwGi8bWyIuViadBmVJFIu5JY13a9LxmBWpc0ofz9A1n/fKvAKPp4B+IyfFf8LGNlKwGD228O58pSmjsNggYEyfx6aV318InFsfNCcc1wiHSbWh8WUrhjcQ0KK88YA0TR4Z4iIznTGuJTmBjBE+P6Sp0YyVy2m8GsUVikSYSOjxTXm8vwEYZXORBdV0AAAAAElFTkSuQmCC",
  _d =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgB7ZuNcRoxEIWXNBB3kEsFpgQ6MB2EDkIHxhUkHeAOPKngTAWmgyMV4FTwIkVicsOsTnfM6XbB+83sMCPgkJ5Wq9UPRIZhGIZhGIbBMKNCAKjcy9LZvbO5sztnVesj78728XXn7HU2m+3plnGi3Dl7dFbjMpr4/YpuiZYwR4zH9iaEco34PrIwbfxz13SNIHjNFsPwDW4wXNAa1+RNvrLO3pAXwzds7Wzu7I55ji9fOnuOwnXRXIVIUZwmI8yGE6THs1eZZ+sWCWFYdTXg5yXCML+zRnoYNmpFchV76aj0gkYE3Z76NkZHjArCND5pjyJ4bCrW/SAtxN48TilO67e7RFqQBpCeziuaAKSHW03SxMpxbGhCvLeo9KKE9zQkAEK+pMuLwMeeFQnQ4c0yMxpClqvCe1p1qpk6FVuvfcq8/8CU/SJZnpiyB5IA/PS6IEEQpv3zYX8kCbjBTgpIDLMvVIDkEAOf42jZEv3NlH2lAnTFoIopeycdHJiyigqQC9LnHEgHk3XUUIE+HF0Ccb1UkQ64xPBABegS6MCUVaSDe9IA+GWG+EZVIj8rUq9cDOKm9TkJEtOP8zrs3alskcCdE2jHlC1JlgVTJpOfgd+DOUoOs0QWLddpifG+IQESHSa6u+ArtdHiReC3XbckCfjVs2fSUwWEOwAcFUmT8CLPJBcLkN5JlPWeNkgf4i2oIEifaDQqvOcEwkUDDj/8vlEB0H26uiJtIJyZp3ikEfGiI30+L38elgLpeDSK20eveUGeUTtkVDIiITZwUPKGkONsMYziIl18yxUhWcxV8EBhGbCj/zdaT2umKppfmS/p8p2CjVuHPZFGkL/wNAb/7ikiTBJHKU+6GISY8Ywy1GjFtKsVyTOyUDUS+dVVi+SJQq0x/DK5XxT74J/db5pSpGJ/RfAgLGjn0Spnn1tv/6EQxL29Dt3wikL6fIhbNOsN3FOS8SQ9V/QkyYikZzEriYnUAxOpByZSD0ykHphIPTCRegDLk/J0iCRzr1EjCZFkDxy1EUVqTt4DyeNqrSAcgvqtXV3/NTMMwzCMIvwFdshwZj35L4QAAAAASUVORK5CYII=",
  Cd = { class: "header" },
  Pd = { class: "header__navi" },
  Od = { class: "header-search" },
  Rd = { class: "navigator" },
  Md = { class: "navigator-list" },
  Id = { key: 0, class: "search-box" },
  Ld = { class: "search-input" },
  Bd = { class: "search-wrap" },
  Dd = {
    __name: "TheHeader",
    setup(e) {
      const t = la(),
        n = Sd(),
        s = ne(""),
        r = ne(!1),
        i = () => {
          (r.value = !1), t.push("/movie/search?keyword=" + s.value.trim());
        };
      return (
        Wr(async () => {
          await t.isReady(), (s.value = n.query.keyword);
        }),
        (o, l) => {
          const a = yl("RouterLink");
          return (
            be(),
            Xe(
              Ee,
              null,
              [
                W("header", Cd, [
                  de(
                    a,
                    { to: "/" },
                    {
                      default: at(
                        () =>
                          l[8] ||
                          (l[8] = [
                            W("h1", { class: "header__logo" }, "Wave", -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  W("ul", Pd, [
                    W("li", null, [
                      de(
                        a,
                        { to: "/movie/now_playing" },
                        {
                          default: at(() => l[9] || (l[9] = [rn("상영중")])),
                          _: 1,
                        },
                      ),
                    ]),
                    W("li", null, [
                      de(
                        a,
                        { to: "/movie/popular" },
                        {
                          default: at(() => l[10] || (l[10] = [rn("인기작")])),
                          _: 1,
                        },
                      ),
                    ]),
                    W("li", null, [
                      de(
                        a,
                        { to: "/movie/upcoming" },
                        {
                          default: at(
                            () => l[11] || (l[11] = [rn("개봉예정")]),
                          ),
                          _: 1,
                        },
                      ),
                    ]),
                  ]),
                  W("div", Od, [
                    pi(
                      W(
                        "input",
                        {
                          "onUpdate:modelValue":
                            l[0] || (l[0] = (u) => (s.value = u)),
                          type: "text",
                          class: "header-search__input",
                          placeholder: "제목으로 찾아보세요.",
                          onKeyup: zi(i, ["enter"]),
                        },
                        null,
                        544,
                      ),
                      [[Vi, s.value]],
                    ),
                    W(
                      "span",
                      { class: "material-symbols-outlined icon", onClick: i },
                      " search ",
                    ),
                  ]),
                ]),
                W("nav", Rd, [
                  W("ul", Md, [
                    W(
                      "li",
                      {
                        class: "navigator-list__item",
                        onClick: l[1] || (l[1] = (u) => ge(t).push("/")),
                      },
                      l[12] ||
                        (l[12] = [
                          W(
                            "img",
                            { src: Ed, alt: "", class: "navigator-list__icon" },
                            null,
                            -1,
                          ),
                          W(
                            "strong",
                            { class: "navigator-list__txt" },
                            "메인",
                            -1,
                          ),
                        ]),
                    ),
                    W(
                      "li",
                      {
                        class: "navigator-list__item",
                        onClick:
                          l[2] ||
                          (l[2] = (u) => ge(t).push("/movie/now_playing")),
                      },
                      l[13] ||
                        (l[13] = [
                          W(
                            "img",
                            { src: xd, alt: "", class: "navigator-list__icon" },
                            null,
                            -1,
                          ),
                          W(
                            "strong",
                            { class: "navigator-list__txt" },
                            "상영중",
                            -1,
                          ),
                        ]),
                    ),
                    W(
                      "li",
                      {
                        class: "navigator-list__item",
                        onClick:
                          l[3] || (l[3] = (u) => ge(t).push("/movie/popular")),
                      },
                      l[14] ||
                        (l[14] = [
                          W(
                            "img",
                            { src: Td, alt: "", class: "navigator-list__icon" },
                            null,
                            -1,
                          ),
                          W(
                            "strong",
                            { class: "navigator-list__txt" },
                            "인기작",
                            -1,
                          ),
                        ]),
                    ),
                    W(
                      "li",
                      {
                        class: "navigator-list__item",
                        onClick:
                          l[4] || (l[4] = (u) => ge(t).push("/movie/upcoming")),
                      },
                      l[15] ||
                        (l[15] = [
                          W(
                            "img",
                            { src: Ad, alt: "", class: "navigator-list__icon" },
                            null,
                            -1,
                          ),
                          W(
                            "strong",
                            { class: "navigator-list__txt" },
                            "개봉예정",
                            -1,
                          ),
                        ]),
                    ),
                    W(
                      "li",
                      {
                        class: "navigator-list__item",
                        onClick: l[5] || (l[5] = (u) => (r.value = !0)),
                      },
                      l[16] ||
                        (l[16] = [
                          W(
                            "img",
                            { src: _d, alt: "", class: "navigator-list__icon" },
                            null,
                            -1,
                          ),
                          W(
                            "strong",
                            { class: "navigator-list__txt" },
                            "검색",
                            -1,
                          ),
                        ]),
                    ),
                  ]),
                ]),
                r.value
                  ? (be(),
                    Xe("section", Id, [
                      W("div", Ld, [
                        W("div", Bd, [
                          W(
                            "button",
                            { onClick: l[6] || (l[6] = (u) => (r.value = !1)) },
                            "x",
                          ),
                          pi(
                            W(
                              "input",
                              {
                                "onUpdate:modelValue":
                                  l[7] || (l[7] = (u) => (s.value = u)),
                                type: "text",
                                placeholder: "영화 제목을 입력하세요",
                                autocomplete: "off",
                                onKeyup: zi(i, ["enter"]),
                              },
                              null,
                              544,
                            ),
                            [[Vi, s.value]],
                          ),
                          W(
                            "span",
                            {
                              class: "material-symbols-outlined icon",
                              onClick: i,
                            },
                            " search ",
                          ),
                        ]),
                      ]),
                    ]))
                  : Qr("", !0),
              ],
              64,
            )
          );
        }
      );
    },
  },
  Nd = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Fd = {},
  kd = { class: "footer" };
function jd(e, t) {
  return (
    be(),
    Xe(
      "footer",
      kd,
      t[0] || (t[0] = [W("p", null, "copyright @ sucoding vuejs course", -1)]),
    )
  );
}
const Vd = Nd(Fd, [["render", jd]]),
  zd = {
    __name: "DefaultLayout",
    setup(e) {
      return (t, n) => (
        be(), Xe(Ee, null, [de(Dd), Kc(t.$slots, "default"), de(Vd)], 64)
      );
    },
  },
  Hd = {
    __name: "App",
    setup(e) {
      return (t, n) => (
        be(),
        Ot(zd, null, {
          default: at(() => [(be(), Ot(ge(oa), { key: t.$route.fullPath }))]),
          _: 1,
        })
      );
    },
  },
  Ud = "modulepreload",
  Gd = function (e) {
    return "/" + e;
  },
  ao = {},
  co = function (t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        l =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      r = Promise.allSettled(
        n.map((a) => {
          if (((a = Gd(a)), a in ao)) return;
          ao[a] = !0;
          const u = a.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : Ud),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = a),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, p) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    function i(o) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented))
        throw o;
    }
    return r.then((o) => {
      for (const l of o || []) l.status === "rejected" && i(l.reason);
      return t().catch(i);
    });
  };
function aa(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: $d } = Object.prototype,
  { getPrototypeOf: ti } = Object,
  Os = ((e) => (t) => {
    const n = $d.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ze = (e) => ((e = e.toLowerCase()), (t) => Os(t) === e),
  Rs = (e) => (t) => typeof t === e,
  { isArray: un } = Array,
  Dn = Rs("undefined");
function Wd(e) {
  return (
    e !== null &&
    !Dn(e) &&
    e.constructor !== null &&
    !Dn(e.constructor) &&
    He(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ca = Ze("ArrayBuffer");
function qd(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ca(e.buffer)),
    t
  );
}
const Kd = Rs("string"),
  He = Rs("function"),
  ua = Rs("number"),
  Ms = (e) => e !== null && typeof e == "object",
  Yd = (e) => e === !0 || e === !1,
  Jn = (e) => {
    if (Os(e) !== "object") return !1;
    const t = ti(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Xd = Ze("Date"),
  Qd = Ze("File"),
  Jd = Ze("Blob"),
  Zd = Ze("FileList"),
  ep = (e) => Ms(e) && He(e.pipe),
  tp = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (He(e.append) &&
          ((t = Os(e)) === "formdata" ||
            (t === "object" &&
              He(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  np = Ze("URLSearchParams"),
  [sp, rp, ip, op] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ze,
  ),
  lp = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function jn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, r;
  if ((typeof e != "object" && (e = [e]), un(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let l;
    for (s = 0; s < o; s++) (l = i[s]), t.call(null, e[l], l, e);
  }
}
function fa(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const Ft =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  da = (e) => !Dn(e) && e !== Ft;
function Er() {
  const { caseless: e } = (da(this) && this) || {},
    t = {},
    n = (s, r) => {
      const i = (e && fa(t, r)) || r;
      Jn(t[i]) && Jn(s)
        ? (t[i] = Er(t[i], s))
        : Jn(s)
          ? (t[i] = Er({}, s))
          : un(s)
            ? (t[i] = s.slice())
            : (t[i] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && jn(arguments[s], n);
  return t;
}
const ap = (e, t, n, { allOwnKeys: s } = {}) => (
    jn(
      t,
      (r, i) => {
        n && He(r) ? (e[i] = aa(r, n)) : (e[i] = r);
      },
      { allOwnKeys: s },
    ),
    e
  ),
  cp = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  up = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  fp = (e, t, n, s) => {
    let r, i, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
        (o = r[i]), (!s || s(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && ti(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  dp = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  pp = (e) => {
    if (!e) return null;
    if (un(e)) return e;
    let t = e.length;
    if (!ua(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  hp = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ti(Uint8Array)),
  mp = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const i = r.value;
      t.call(e, i[0], i[1]);
    }
  },
  gp = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  vp = Ze("HTMLFormElement"),
  wp = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  uo = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  yp = Ze("RegExp"),
  pa = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    jn(n, (r, i) => {
      let o;
      (o = t(r, i, e)) !== !1 && (s[i] = o || r);
    }),
      Object.defineProperties(e, s);
  },
  bp = (e) => {
    pa(e, (t, n) => {
      if (He(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const s = e[n];
      if (He(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Sp = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((i) => {
          n[i] = !0;
        });
      };
    return un(e) ? s(e) : s(String(e).split(t)), n;
  },
  Ep = () => {},
  xp = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Tp(e) {
  return !!(
    e &&
    He(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Ap = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (Ms(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[r] = s;
            const i = un(s) ? [] : {};
            return (
              jn(s, (o, l) => {
                const a = n(o, r + 1);
                !Dn(a) && (i[l] = a);
              }),
              (t[r] = void 0),
              i
            );
          }
        }
        return s;
      };
    return n(e, 0);
  },
  _p = Ze("AsyncFunction"),
  Cp = (e) => e && (Ms(e) || He(e)) && He(e.then) && He(e.catch),
  ha = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, s) => (
            Ft.addEventListener(
              "message",
              ({ source: r, data: i }) => {
                r === Ft && i === n && s.length && s.shift()();
              },
              !1,
            ),
            (r) => {
              s.push(r), Ft.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    He(Ft.postMessage),
  ),
  Pp =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ft)
      : (typeof process < "u" && process.nextTick) || ha,
  x = {
    isArray: un,
    isArrayBuffer: ca,
    isBuffer: Wd,
    isFormData: tp,
    isArrayBufferView: qd,
    isString: Kd,
    isNumber: ua,
    isBoolean: Yd,
    isObject: Ms,
    isPlainObject: Jn,
    isReadableStream: sp,
    isRequest: rp,
    isResponse: ip,
    isHeaders: op,
    isUndefined: Dn,
    isDate: Xd,
    isFile: Qd,
    isBlob: Jd,
    isRegExp: yp,
    isFunction: He,
    isStream: ep,
    isURLSearchParams: np,
    isTypedArray: hp,
    isFileList: Zd,
    forEach: jn,
    merge: Er,
    extend: ap,
    trim: lp,
    stripBOM: cp,
    inherits: up,
    toFlatObject: fp,
    kindOf: Os,
    kindOfTest: Ze,
    endsWith: dp,
    toArray: pp,
    forEachEntry: mp,
    matchAll: gp,
    isHTMLForm: vp,
    hasOwnProperty: uo,
    hasOwnProp: uo,
    reduceDescriptors: pa,
    freezeMethods: bp,
    toObjectSet: Sp,
    toCamelCase: wp,
    noop: Ep,
    toFiniteNumber: xp,
    findKey: fa,
    global: Ft,
    isContextDefined: da,
    isSpecCompliantForm: Tp,
    toJSONObject: Ap,
    isAsyncFn: _p,
    isThenable: Cp,
    setImmediate: ha,
    asap: Pp,
  };
function te(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && ((this.response = r), (this.status = r.status ? r.status : null));
}
x.inherits(te, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ma = te.prototype,
  ga = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ga[e] = { value: e };
});
Object.defineProperties(te, ga);
Object.defineProperty(ma, "isAxiosError", { value: !0 });
te.from = (e, t, n, s, r, i) => {
  const o = Object.create(ma);
  return (
    x.toFlatObject(
      e,
      o,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError",
    ),
    te.call(o, e.message, t, n, s, r),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const Op = null;
function xr(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function va(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fo(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, i) {
          return (r = va(r)), !n && i ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : t;
}
function Rp(e) {
  return x.isArray(e) && !e.some(xr);
}
const Mp = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Is(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, y) {
        return !x.isUndefined(y[v]);
      },
    ));
  const s = n.metaTokens,
    r = n.visitor || c,
    i = n.dots,
    o = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(r)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (x.isDate(g)) return g.toISOString();
    if (!a && x.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(g) || x.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, v, y) {
    let b = g;
    if (g && !y && typeof g == "object") {
      if (x.endsWith(v, "{}"))
        (v = s ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (x.isArray(g) && Rp(g)) ||
        ((x.isFileList(g) || x.endsWith(v, "[]")) && (b = x.toArray(g)))
      )
        return (
          (v = va(v)),
          b.forEach(function (E, T) {
            !(x.isUndefined(E) || E === null) &&
              t.append(
                o === !0 ? fo([v], T, i) : o === null ? v : v + "[]",
                u(E),
              );
          }),
          !1
        );
    }
    return xr(g) ? !0 : (t.append(fo(y, v, i), u(g)), !1);
  }
  const f = [],
    d = Object.assign(Mp, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: xr,
    });
  function p(g, v) {
    if (!x.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(g),
        x.forEach(g, function (b, S) {
          (!(x.isUndefined(b) || b === null) &&
            r.call(t, b, x.isString(S) ? S.trim() : S, v, d)) === !0 &&
            p(b, v ? v.concat(S) : [S]);
        }),
        f.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function po(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function ni(e, t) {
  (this._pairs = []), e && Is(e, this, t);
}
const wa = ni.prototype;
wa.append = function (t, n) {
  this._pairs.push([t, n]);
};
wa.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, po);
      }
    : po;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function Ip(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ya(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || Ip;
  x.isFunction(n) && (n = { serialize: n });
  const r = n && n.serialize;
  let i;
  if (
    (r
      ? (i = r(t, n))
      : (i = x.isURLSearchParams(t) ? t.toString() : new ni(t, n).toString(s)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ho {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const ba = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Lp = typeof URLSearchParams < "u" ? URLSearchParams : ni,
  Bp = typeof FormData < "u" ? FormData : null,
  Dp = typeof Blob < "u" ? Blob : null,
  Np = {
    isBrowser: !0,
    classes: { URLSearchParams: Lp, FormData: Bp, Blob: Dp },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  si = typeof window < "u" && typeof document < "u",
  Tr = (typeof navigator == "object" && navigator) || void 0,
  Fp =
    si &&
    (!Tr || ["ReactNative", "NativeScript", "NS"].indexOf(Tr.product) < 0),
  kp =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  jp = (si && window.location.href) || "http://localhost",
  Vp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: si,
        hasStandardBrowserEnv: Fp,
        hasStandardBrowserWebWorkerEnv: kp,
        navigator: Tr,
        origin: jp,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Pe = { ...Vp, ...Np };
function zp(e, t) {
  return Is(
    e,
    new Pe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, i) {
          return Pe.isNode && x.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Hp(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Up(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let i;
  for (s = 0; s < r; s++) (i = n[s]), (t[i] = e[i]);
  return t;
}
function Sa(e) {
  function t(n, s, r, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      a = i >= n.length;
    return (
      (o = !o && x.isArray(r) ? r.length : o),
      a
        ? (x.hasOwnProp(r, o) ? (r[o] = [r[o], s]) : (r[o] = s), !l)
        : ((!r[o] || !x.isObject(r[o])) && (r[o] = []),
          t(n, s, r[o], i) && x.isArray(r[o]) && (r[o] = Up(r[o])),
          !l)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (s, r) => {
        t(Hp(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function Gp(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(e);
}
const Vn = {
  transitional: ba,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || "",
        r = s.indexOf("application/json") > -1,
        i = x.isObject(t);
      if ((i && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return r ? JSON.stringify(Sa(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t) ||
        x.isReadableStream(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return zp(t, this.formSerializer).toString();
        if ((l = x.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Is(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || r ? (n.setContentType("application/json", !1), Gp(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Vn.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (x.isResponse(t) || x.isReadableStream(t)) return t;
      if (t && x.isString(t) && ((s && !this.responseType) || r)) {
        const o = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? te.from(l, te.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Pe.classes.FormData, Blob: Pe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Vn.headers[e] = {};
});
const $p = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Wp = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (n = o.substring(0, r).trim().toLowerCase()),
              (s = o.substring(r + 1).trim()),
              !(!n || (t[n] && $p[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ", " + s : s));
          }),
      t
    );
  },
  mo = Symbol("internals");
function gn(e) {
  return e && String(e).trim().toLowerCase();
}
function Zn(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Zn) : String(e);
}
function qp(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Kp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ys(e, t, n, s, r) {
  if (x.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!x.isString(t))) {
    if (x.isString(s)) return t.indexOf(s) !== -1;
    if (x.isRegExp(s)) return s.test(t);
  }
}
function Yp(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Xp(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, i, o) {
        return this[s].call(this, t, r, i, o);
      },
      configurable: !0,
    });
  });
}
let Ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function i(l, a, u) {
      const c = gn(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = x.findKey(r, c);
      (!f || r[f] === void 0 || u === !0 || (u === void 0 && r[f] !== !1)) &&
        (r[f || a] = Zn(l));
    }
    const o = (l, a) => x.forEach(l, (u, c) => i(u, c, a));
    if (x.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (x.isString(t) && (t = t.trim()) && !Kp(t)) o(Wp(t), n);
    else if (x.isHeaders(t)) for (const [l, a] of t.entries()) i(a, l, s);
    else t != null && i(n, t, s);
    return this;
  }
  get(t, n) {
    if (((t = gn(t)), t)) {
      const s = x.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return qp(r);
        if (x.isFunction(n)) return n.call(this, r, s);
        if (x.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = gn(t)), t)) {
      const s = x.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Ys(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function i(o) {
      if (((o = gn(o)), o)) {
        const l = x.findKey(s, o);
        l && (!n || Ys(s, s[l], l, n)) && (delete s[l], (r = !0));
      }
    }
    return x.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--; ) {
      const i = n[s];
      (!t || Ys(this, this[i], i, t, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      x.forEach(this, (r, i) => {
        const o = x.findKey(s, i);
        if (o) {
          (n[o] = Zn(r)), delete n[i];
          return;
        }
        const l = t ? Yp(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Zn(r)), (s[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && x.isArray(s) ? s.join(", ") : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[mo] = this[mo] = { accessors: {} }).accessors,
      r = this.prototype;
    function i(o) {
      const l = gn(o);
      s[l] || (Xp(r, o), (s[l] = !0));
    }
    return x.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Ne.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
x.freezeMethods(Ne);
function Xs(e, t) {
  const n = this || Vn,
    s = t || n,
    r = Ne.from(s.headers);
  let i = s.data;
  return (
    x.forEach(e, function (l) {
      i = l.call(n, i, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    i
  );
}
function Ea(e) {
  return !!(e && e.__CANCEL__);
}
function fn(e, t, n) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(fn, te, { __CANCEL__: !0 });
function xa(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new te(
          "Request failed with status code " + n.status,
          [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function Qp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Jp(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = s[i];
      o || (o = u), (n[r] = a), (s[r] = u);
      let f = i,
        d = 0;
      for (; f !== r; ) (d += n[f++]), (f = f % e);
      if (((r = (r + 1) % e), r === i && (i = (i + 1) % e), u - o < t)) return;
      const p = c && u - c;
      return p ? Math.round((d * 1e3) / p) : void 0;
    }
  );
}
function Zp(e, t) {
  let n = 0,
    s = 1e3 / t,
    r,
    i;
  const o = (u, c = Date.now()) => {
    (n = c), (r = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= s
        ? o(u, c)
        : ((r = u),
          i ||
            (i = setTimeout(() => {
              (i = null), o(r);
            }, s - f)));
    },
    () => r && o(r),
  ];
}
const cs = (e, t, n = 3) => {
    let s = 0;
    const r = Jp(50, 250);
    return Zp((i) => {
      const o = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        a = o - s,
        u = r(a),
        c = o <= l;
      s = o;
      const f = {
        loaded: o,
        total: l,
        progress: l ? o / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && c ? (l - o) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  go = (e, t) => {
    const n = e != null;
    return [(s) => t[0]({ lengthComputable: n, total: e, loaded: s }), t[1]];
  },
  vo =
    (e) =>
    (...t) =>
      x.asap(() => e(...t)),
  eh = Pe.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Pe.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Pe.origin),
        Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent),
      )
    : () => !0,
  th = Pe.hasStandardBrowserEnv
    ? {
        write(e, t, n, s, r, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          x.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            x.isString(s) && o.push("path=" + s),
            x.isString(r) && o.push("domain=" + r),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function nh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sh(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ta(e, t, n) {
  let s = !nh(t);
  return (e && s) || n == !1 ? sh(e, t) : t;
}
const wo = (e) => (e instanceof Ne ? { ...e } : e);
function Ht(e, t) {
  t = t || {};
  const n = {};
  function s(u, c, f, d) {
    return x.isPlainObject(u) && x.isPlainObject(c)
      ? x.merge.call({ caseless: d }, u, c)
      : x.isPlainObject(c)
        ? x.merge({}, c)
        : x.isArray(c)
          ? c.slice()
          : c;
  }
  function r(u, c, f, d) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return s(void 0, u, f, d);
    } else return s(u, c, f, d);
  }
  function i(u, c) {
    if (!x.isUndefined(c)) return s(void 0, c);
  }
  function o(u, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return s(void 0, u);
    } else return s(void 0, c);
  }
  function l(u, c, f) {
    if (f in t) return s(u, c);
    if (f in e) return s(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, c, f) => r(wo(u), wo(c), f, !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = a[c] || r,
        d = f(e[c], t[c], c);
      (x.isUndefined(d) && f !== l) || (n[c] = d);
    }),
    n
  );
}
const Aa = (e) => {
    const t = Ht({}, e);
    let {
      data: n,
      withXSRFToken: s,
      xsrfHeaderName: r,
      xsrfCookieName: i,
      headers: o,
      auth: l,
    } = t;
    (t.headers = o = Ne.from(o)),
      (t.url = ya(
        Ta(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      l &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
        );
    let a;
    if (x.isFormData(n)) {
      if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((a = o.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Pe.hasStandardBrowserEnv &&
      (s && x.isFunction(s) && (s = s(t)), s || (s !== !1 && eh(t.url)))
    ) {
      const u = r && i && th.read(i);
      u && o.set(r, u);
    }
    return t;
  },
  rh = typeof XMLHttpRequest < "u",
  ih =
    rh &&
    function (e) {
      return new Promise(function (n, s) {
        const r = Aa(e);
        let i = r.data;
        const o = Ne.from(r.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = r,
          c,
          f,
          d,
          p,
          g;
        function v() {
          p && p(),
            g && g(),
            r.cancelToken && r.cancelToken.unsubscribe(c),
            r.signal && r.signal.removeEventListener("abort", c);
        }
        let y = new XMLHttpRequest();
        y.open(r.method.toUpperCase(), r.url, !0), (y.timeout = r.timeout);
        function b() {
          if (!y) return;
          const E = Ne.from(
              "getAllResponseHeaders" in y && y.getAllResponseHeaders(),
            ),
            O = {
              data:
                !l || l === "text" || l === "json"
                  ? y.responseText
                  : y.response,
              status: y.status,
              statusText: y.statusText,
              headers: E,
              config: e,
              request: y,
            };
          xa(
            function (k) {
              n(k), v();
            },
            function (k) {
              s(k), v();
            },
            O,
          ),
            (y = null);
        }
        "onloadend" in y
          ? (y.onloadend = b)
          : (y.onreadystatechange = function () {
              !y ||
                y.readyState !== 4 ||
                (y.status === 0 &&
                  !(y.responseURL && y.responseURL.indexOf("file:") === 0)) ||
                setTimeout(b);
            }),
          (y.onabort = function () {
            y &&
              (s(new te("Request aborted", te.ECONNABORTED, e, y)), (y = null));
          }),
          (y.onerror = function () {
            s(new te("Network Error", te.ERR_NETWORK, e, y)), (y = null);
          }),
          (y.ontimeout = function () {
            let T = r.timeout
              ? "timeout of " + r.timeout + "ms exceeded"
              : "timeout exceeded";
            const O = r.transitional || ba;
            r.timeoutErrorMessage && (T = r.timeoutErrorMessage),
              s(
                new te(
                  T,
                  O.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
                  e,
                  y,
                ),
              ),
              (y = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in y &&
            x.forEach(o.toJSON(), function (T, O) {
              y.setRequestHeader(O, T);
            }),
          x.isUndefined(r.withCredentials) ||
            (y.withCredentials = !!r.withCredentials),
          l && l !== "json" && (y.responseType = r.responseType),
          u && (([d, g] = cs(u, !0)), y.addEventListener("progress", d)),
          a &&
            y.upload &&
            (([f, p] = cs(a)),
            y.upload.addEventListener("progress", f),
            y.upload.addEventListener("loadend", p)),
          (r.cancelToken || r.signal) &&
            ((c = (E) => {
              y &&
                (s(!E || E.type ? new fn(null, e, y) : E),
                y.abort(),
                (y = null));
            }),
            r.cancelToken && r.cancelToken.subscribe(c),
            r.signal &&
              (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
        const S = Qp(r.url);
        if (S && Pe.protocols.indexOf(S) === -1) {
          s(new te("Unsupported protocol " + S + ":", te.ERR_BAD_REQUEST, e));
          return;
        }
        y.send(i || null);
      });
    },
  oh = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let s = new AbortController(),
        r;
      const i = function (u) {
        if (!r) {
          (r = !0), l();
          const c = u instanceof Error ? u : this.reason;
          s.abort(
            c instanceof te ? c : new fn(c instanceof Error ? c.message : c),
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: a } = s;
      return (a.unsubscribe = () => x.asap(l)), a;
    }
  },
  lh = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let s = 0,
      r;
    for (; s < n; ) (r = s + t), yield e.slice(s, r), (s = r);
  },
  ah = async function* (e, t) {
    for await (const n of ch(e)) yield* lh(n, t);
  },
  ch = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: s } = await t.read();
        if (n) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  yo = (e, t, n, s) => {
    const r = ah(e, t);
    let i = 0,
      o,
      l = (a) => {
        o || ((o = !0), s && s(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await r.next();
            if (u) {
              l(), a.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let d = (i += f);
              n(d);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(a) {
          return l(a), r.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Ls =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  _a = Ls && typeof ReadableStream == "function",
  uh =
    Ls &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Ca = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  fh =
    _a &&
    Ca(() => {
      let e = !1;
      const t = new Request(Pe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  bo = 64 * 1024,
  Ar = _a && Ca(() => x.isReadableStream(new Response("").body)),
  us = { stream: Ar && ((e) => e.body) };
Ls &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !us[t] &&
        (us[t] = x.isFunction(e[t])
          ? (n) => n[t]()
          : (n, s) => {
              throw new te(
                `Response type '${t}' is not supported`,
                te.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const dh = async (e) => {
    if (e == null) return 0;
    if (x.isBlob(e)) return e.size;
    if (x.isSpecCompliantForm(e))
      return (
        await new Request(Pe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (x.isArrayBufferView(e) || x.isArrayBuffer(e)) return e.byteLength;
    if ((x.isURLSearchParams(e) && (e = e + ""), x.isString(e)))
      return (await uh(e)).byteLength;
  },
  ph = async (e, t) => {
    const n = x.toFiniteNumber(e.getContentLength());
    return n ?? dh(t);
  },
  hh =
    Ls &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: s,
        signal: r,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: d,
      } = Aa(e);
      u = u ? (u + "").toLowerCase() : "text";
      let p = oh([r, i && i.toAbortSignal()], o),
        g;
      const v =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let y;
      try {
        if (
          a &&
          fh &&
          n !== "get" &&
          n !== "head" &&
          (y = await ph(c, s)) !== 0
        ) {
          let O = new Request(t, { method: "POST", body: s, duplex: "half" }),
            U;
          if (
            (x.isFormData(s) &&
              (U = O.headers.get("content-type")) &&
              c.setContentType(U),
            O.body)
          ) {
            const [k, M] = go(y, cs(vo(a)));
            s = yo(O.body, bo, k, M);
          }
        }
        x.isString(f) || (f = f ? "include" : "omit");
        const b = "credentials" in Request.prototype;
        g = new Request(t, {
          ...d,
          signal: p,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: b ? f : void 0,
        });
        let S = await fetch(g);
        const E = Ar && (u === "stream" || u === "response");
        if (Ar && (l || (E && v))) {
          const O = {};
          ["status", "statusText", "headers"].forEach((C) => {
            O[C] = S[C];
          });
          const U = x.toFiniteNumber(S.headers.get("content-length")),
            [k, M] = (l && go(U, cs(vo(l), !0))) || [];
          S = new Response(
            yo(S.body, bo, k, () => {
              M && M(), v && v();
            }),
            O,
          );
        }
        u = u || "text";
        let T = await us[x.findKey(us, u) || "text"](S, e);
        return (
          !E && v && v(),
          await new Promise((O, U) => {
            xa(O, U, {
              data: T,
              headers: Ne.from(S.headers),
              status: S.status,
              statusText: S.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (b) {
        throw (
          (v && v(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new te("Network Error", te.ERR_NETWORK, e, g), {
                cause: b.cause || b,
              })
            : te.from(b, b && b.code, e, g))
        );
      }
    }),
  _r = { http: Op, xhr: ih, fetch: hh };
x.forEach(_r, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const So = (e) => `- ${e}`,
  mh = (e) => x.isFunction(e) || e === null || e === !1,
  Pa = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      const r = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((s = n),
          !mh(n) && ((s = _r[(o = String(n)).toLowerCase()]), s === void 0))
        )
          throw new te(`Unknown adapter '${o}'`);
        if (s) break;
        r[o || "#" + i] = s;
      }
      if (!s) {
        const i = Object.entries(r).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(So).join(`
`)
            : " " + So(i[0])
          : "as no adapter specified";
        throw new te(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: _r,
  };
function Qs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new fn(null, e);
}
function Eo(e) {
  return (
    Qs(e),
    (e.headers = Ne.from(e.headers)),
    (e.data = Xs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Pa.getAdapter(e.adapter || Vn.adapter)(e).then(
      function (s) {
        return (
          Qs(e),
          (s.data = Xs.call(e, e.transformResponse, s)),
          (s.headers = Ne.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Ea(s) ||
            (Qs(e),
            s &&
              s.response &&
              ((s.response.data = Xs.call(e, e.transformResponse, s.response)),
              (s.response.headers = Ne.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const Oa = "1.8.3",
  Bs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Bs[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const xo = {};
Bs.transitional = function (t, n, s) {
  function r(i, o) {
    return (
      "[Axios v" +
      Oa +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (s ? ". " + s : "")
    );
  }
  return (i, o, l) => {
    if (t === !1)
      throw new te(
        r(o, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED,
      );
    return (
      n &&
        !xo[o] &&
        ((xo[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, o, l) : !0
    );
  };
};
Bs.spelling = function (t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function gh(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r],
      o = t[i];
    if (o) {
      const l = e[i],
        a = l === void 0 || o(l, i, e);
      if (a !== !0)
        throw new te("option " + i + " must be " + a, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const es = { assertOptions: gh, validators: Bs },
  rt = es.validators;
let Vt = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ho(), response: new ho() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(r)
          : (r = new Error());
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? i &&
              !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + i)
            : (s.stack = i);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ht(this.defaults, n));
    const { transitional: s, paramsSerializer: r, headers: i } = n;
    s !== void 0 &&
      es.assertOptions(
        s,
        {
          silentJSONParsing: rt.transitional(rt.boolean),
          forcedJSONParsing: rt.transitional(rt.boolean),
          clarifyTimeoutError: rt.transitional(rt.boolean),
        },
        !1,
      ),
      r != null &&
        (x.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : es.assertOptions(
              r,
              { encode: rt.function, serialize: rt.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      es.assertOptions(
        n,
        {
          baseUrl: rt.spelling("baseURL"),
          withXsrfToken: rt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && x.merge(i.common, i[n.method]);
    i &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        },
      ),
      (n.headers = Ne.concat(o, i));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((a = a && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      d;
    if (!a) {
      const g = [Eo.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, u),
          d = g.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    d = l.length;
    let p = n;
    for (f = 0; f < d; ) {
      const g = l[f++],
        v = l[f++];
      try {
        p = g(p);
      } catch (y) {
        v.call(this, y);
        break;
      }
    }
    try {
      c = Eo.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Ht(this.defaults, t);
    const n = Ta(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ya(n, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function (t) {
  Vt.prototype[t] = function (n, s) {
    return this.request(
      Ht(s || {}, { method: t, url: n, data: (s || {}).data }),
    );
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(s) {
    return function (i, o, l) {
      return this.request(
        Ht(l || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        }),
      );
    };
  }
  (Vt.prototype[t] = n()), (Vt.prototype[t + "Form"] = n(!0));
});
let vh = class Ra {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; ) s._listeners[i](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let i;
        const o = new Promise((l) => {
          s.subscribe(l), (i = l);
        }).then(r);
        return (
          (o.cancel = function () {
            s.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, l) {
        s.reason || ((s.reason = new fn(i, o, l)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (s) => {
        t.abort(s);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Ra(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
};
function wh(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function yh(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const Cr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Cr).forEach(([e, t]) => {
  Cr[t] = e;
});
function Ma(e) {
  const t = new Vt(e),
    n = aa(Vt.prototype.request, t);
  return (
    x.extend(n, Vt.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Ma(Ht(e, r));
    }),
    n
  );
}
const we = Ma(Vn);
we.Axios = Vt;
we.CanceledError = fn;
we.CancelToken = vh;
we.isCancel = Ea;
we.VERSION = Oa;
we.toFormData = Is;
we.AxiosError = te;
we.Cancel = we.CanceledError;
we.all = function (t) {
  return Promise.all(t);
};
we.spread = wh;
we.isAxiosError = yh;
we.mergeConfig = Ht;
we.AxiosHeaders = Ne;
we.formToJSON = (e) => Sa(x.isHTMLForm(e) ? new FormData(e) : e);
we.getAdapter = Pa.getAdapter;
we.HttpStatusCode = Cr;
we.default = we;
const {
    Axios: pg,
    AxiosError: hg,
    CanceledError: mg,
    isCancel: gg,
    CancelToken: vg,
    VERSION: wg,
    all: yg,
    Cancel: bg,
    isAxiosError: Sg,
    spread: Eg,
    toFormData: xg,
    AxiosHeaders: Tg,
    HttpStatusCode: Ag,
    formToJSON: _g,
    getAdapter: Cg,
    mergeConfig: Pg,
  } = we,
  bh = we.create({ baseURL: "http://localhost:8080" });
async function it(e, t, n, s = {}) {
  try {
    const r = { url: e, method: t, headers: s };
    return t === "get" && n && (r.params = n), await bh(r);
  } catch (r) {
    throw new Error(r);
  }
}
const Sh = vf("counter", () => {
    const e = ne("ko"),
      t = ne(!1),
      n = ne([]),
      s = ne(!1),
      r = ne([]),
      i = ne(!1),
      o = ne([]),
      l = ne(!1),
      a = ne([]),
      u = ne(!1),
      c = ne([]),
      f = ne(!1),
      d = ne({}),
      p = ne(!1),
      g = ne([]),
      v = ne(!1),
      y = ne({}),
      b = ne(!1),
      S = ne(!1),
      E = ne([]),
      T = ne(1);
    return {
      discoverMoviesLoading: t,
      playingMoviesLoading: s,
      popularMoviesLoading: i,
      upcomingMoviesLoading: l,
      topRatedMoviesLoading: u,
      movieLoading: f,
      trailerLoading: p,
      creditLoading: v,
      moreMoviesLoading: b,
      moreMoviesOneMorePageLoading: S,
      discoverMovies: n,
      playingMovies: r,
      popularMovies: o,
      upcomingMovies: a,
      topRatedMovies: c,
      movie: d,
      trailer: g,
      credit: y,
      moreMovies: E,
      getMoviesBy: async (q = 1, $) => {
        try {
          t.value = !0;
          const se = await it("/api/discover/movie", "get", {
            page: q,
            language: e.value,
            with_genres: $,
          });
          (n.value = se.data.results), (t.value = !1);
        } catch (se) {
          alert(se);
        }
      },
      getNowPlayingMovies: async (q = 1) => {
        try {
          s.value = !0;
          const $ = await it("/api/movie/now_playing", "get", {
            page: q,
            language: e.value,
          });
          (r.value = $.data.results), (s.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getPopularMovies: async (q = 1) => {
        try {
          i.value = !0;
          const $ = await it("/api/movie/popular", "get", {
            page: q,
            language: e.value,
          });
          (o.value = $.data.results), (i.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getUpcomingMovies: async (q = 1) => {
        try {
          l.value = !0;
          const $ = await it("/api/movie/upcoming", "get", {
            page: q,
            language: e.value,
          });
          (a.value = $.data.results), (l.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getTopRatedMovies: async (q = 1) => {
        try {
          u.value = !0;
          const $ = await it("/api/movie/top_rated", "get", {
            page: q,
            language: e.value,
          });
          (c.value = $.data.results), (u.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getMovieBy: async (q) => {
        try {
          f.value = !0;
          const $ = await it("/api/movie/" + q, "get", { language: e.value });
          (d.value = $.data), (f.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getVideoBy: async (q) => {
        try {
          p.value = !0;
          const $ = await it(`/api/movie/${q}/videos`, "get");
          (g.value = $.data.results), (p.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getCreditBy: async (q) => {
        try {
          v.value = !0;
          const $ = await it(`/api/movie/${q}/credits`, "get", {
            language: e.value,
          });
          (y.value = $.data), (v.value = !1);
        } catch ($) {
          alert($);
        }
      },
      getMoreMovies: async (q = 1, $ = "now_playing", se = "") => {
        try {
          if (q > T.value) return;
          q === 1 && (b.value = !0), q > 1 && (S.value = !0);
          let X = null;
          se === ""
            ? (X = await it(`/api/movie/${$}`, "get", {
                page: q,
                language: e.value,
              }))
            : (X = await it("/api/search/movie", "get", {
                page: q,
                language: e.value,
                query: se,
              })),
            (E.value = [...E.value, ...X.data.results]),
            (T.value = X.data.total_pages),
            (S.value = !1),
            (b.value = !1);
        } catch (X) {
          alert(X);
        }
      },
    };
  }),
  Eh = { class: "release" },
  xh = { class: "release__text" },
  Th = { class: "release__title" },
  Ah = { class: "release__desc" },
  _h = {
    __name: "MainBanner",
    props: { movies: Array, loading: Boolean },
    setup(e) {
      const t = la(),
        n = e,
        s = Ce(() => {
          if (!n.movies || n.movies.length === 0) return null;
          const r = Math.floor(Math.random() * n.movies.length);
          return n.movies[r];
        });
      return (r, i) => (
        be(),
        Xe("section", Eh, [
          n.loading
            ? Qr("", !0)
            : (be(),
              Xe(
                "div",
                {
                  key: 0,
                  class: "release-item",
                  style: ws(
                    `background-image: url('https://image.tmdb.org/t/p/w500/${s.value.poster_path}')`,
                  ),
                },
                [
                  W("div", xh, [
                    i[1] ||
                      (i[1] = W(
                        "strong",
                        { class: "release__category" },
                        "NEW RELEASE",
                        -1,
                      )),
                    W("h2", Th, _t(s.value.title), 1),
                    W("p", Ah, _t(s.value.overview), 1),
                    W(
                      "button",
                      {
                        class: "release__btn",
                        onClick:
                          i[0] ||
                          (i[0] = (o) => ge(t).push("/detail/" + s.value.id)),
                      },
                      " 자세히보기 ",
                    ),
                  ]),
                ],
                4,
              )),
        ])
      );
    },
  };
function To(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ri(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {});
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : To(t[s]) &&
          To(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          ri(e[s], t[s]);
    });
}
const Ia = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Gt() {
  const e = typeof document < "u" ? document : {};
  return ri(e, Ia), e;
}
const Ch = {
  document: Ia,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Le() {
  const e = typeof window < "u" ? window : {};
  return ri(e, Ch), e;
}
function Ph(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Oh(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Pr(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function fs() {
  return Date.now();
}
function Rh(e) {
  const t = Le();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Mh(e, t) {
  t === void 0 && (t = "x");
  const n = Le();
  let s, r, i;
  const o = Rh(e);
  return (
    n.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (i = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((i =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = i.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (r = i.m41)
        : s.length === 16
          ? (r = parseFloat(s[12]))
          : (r = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (r = i.m42)
        : s.length === 16
          ? (r = parseFloat(s[13]))
          : (r = parseFloat(s[5]))),
    r || 0
  );
}
function $n(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Ih(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ve() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !Ih(s)) {
      const r = Object.keys(Object(s)).filter((i) => t.indexOf(i) < 0);
      for (let i = 0, o = r.length; i < o; i += 1) {
        const l = r[i],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 &&
          a.enumerable &&
          ($n(e[l]) && $n(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : Ve(e[l], s[l])
            : !$n(e[l]) && $n(s[l])
              ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : Ve(e[l], s[l]))
              : (e[l] = s[l]));
      }
    }
  }
  return e;
}
function Wn(e, t, n) {
  e.style.setProperty(t, n);
}
function La(e) {
  let { swiper: t, targetPosition: n, side: s } = e;
  const r = Le(),
    i = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > i ? "next" : "prev",
    c = (d, p) => (u === "next" && d >= p) || (u === "prev" && d <= p),
    f = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const d = Math.max(Math.min((l - o) / a, 1), 0),
        p = 0.5 - Math.cos(d * Math.PI) / 2;
      let g = i + p * (n - i);
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [s]: g }), c(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: g });
          }),
          r.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = r.requestAnimationFrame(f);
    };
  f();
}
function vt(e, t) {
  t === void 0 && (t = "");
  const n = Le(),
    s = [...e.children];
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((r) => r.matches(t)) : s
  );
}
function Lh(e, t) {
  const n = [t];
  for (; n.length > 0; ) {
    const s = n.shift();
    if (e === s) return !0;
    n.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : []),
    );
  }
}
function Bh(e, t) {
  const n = Le();
  let s = t.contains(e);
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = Lh(e, t))),
    s
  );
}
function ds(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Or(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Ph(t))), n;
}
function Dh(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function Nh(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling;
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s);
  }
  return n;
}
function Ct(e, t) {
  return Le().getComputedStyle(e, null).getPropertyValue(t);
}
function Ao(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Fh(e, t) {
  const n = [];
  let s = e.parentElement;
  for (; s; ) n.push(s), (s = s.parentElement);
  return n;
}
function _o(e, t, n) {
  const s = Le();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
let Js;
function kh() {
  const e = Le(),
    t = Gt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Ba() {
  return Js || (Js = kh()), Js;
}
let Zs;
function jh(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Ba(),
    s = Le(),
    r = s.navigator.platform,
    i = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = i.match(/(iPad).*OS\s([\d_]+)/);
  const f = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = r === "Win32";
  let g = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      g &&
      n.touch &&
      v.indexOf(`${l}x${a}`) >= 0 &&
      ((c = i.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !p && ((o.os = "android"), (o.android = !0)),
    (c || d || f) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Da(e) {
  return e === void 0 && (e = {}), Zs || (Zs = jh(e)), Zs;
}
let er;
function Vh() {
  const e = Le(),
    t = Da();
  let n = !1;
  function s() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (s()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    i = s(),
    o = i || (r && t.ios);
  return {
    isSafari: n || i,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: r,
  };
}
function Na() {
  return er || (er = Vh()), er;
}
function zh(e) {
  let { swiper: t, on: n, emit: s } = e;
  const r = Le();
  let i = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((i = new ResizeObserver((f) => {
          o = r.requestAnimationFrame(() => {
            const { width: d, height: p } = t;
            let g = d,
              v = p;
            f.forEach((y) => {
              let { contentBoxSize: b, contentRect: S, target: E } = y;
              (E && E !== t.el) ||
                ((g = S ? S.width : (b[0] || b).inlineSize),
                (v = S ? S.height : (b[0] || b).blockSize));
            }),
              (g !== d || v !== p) && l();
          });
        })),
        i.observe(t.el));
    },
    u = () => {
      o && r.cancelAnimationFrame(o),
        i && i.unobserve && t.el && (i.unobserve(t.el), (i = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", l), r.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        r.removeEventListener("resize", l),
        r.removeEventListener("orientationchange", c);
    });
}
function Hh(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e;
  const i = [],
    o = Le(),
    l = function (c, f) {
      f === void 0 && (f = {});
      const d = o.MutationObserver || o.WebkitMutationObserver,
        p = new d((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            r("observerUpdate", g[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", g[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0);
        });
      p.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > "u" ? !0 : f).childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        i.push(p);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Fh(t.hostEl);
          for (let f = 0; f < c.length; f += 1) l(c[f]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      i.forEach((c) => {
        c.disconnect();
      }),
        i.splice(0, i.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", u);
}
var Uh = {
  on(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const r = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((i) => {
        s.eventsListeners[i] || (s.eventsListeners[i] = []),
          s.eventsListeners[i][r](t);
      }),
      s
    );
  },
  once(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function r() {
      s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
        o[l] = arguments[l];
      t.apply(s, o);
    }
    return (r.__emitterProxy = t), s.on(e, r, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const s = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((r, i) => {
                (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(i, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, s;
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return (
      typeof i[0] == "string" || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (s = e))
        : ((t = i[0].events), (n = i[0].data), (s = i[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(s, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(s, n);
            });
      }),
      e
    );
  },
};
function Gh() {
  const e = this;
  let t, n;
  const s = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ct(s, "padding-left") || 0, 10) -
        parseInt(Ct(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ct(s, "padding-top") || 0, 10) -
        parseInt(Ct(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function $h() {
  const e = this;
  function t(I, z) {
    return parseFloat(I.getPropertyValue(e.getDirectionLabel(z)) || 0);
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: r, size: i, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = vt(r, `.${e.params.slideClass}, swiper-slide`),
    f = a ? e.virtual.slides.length : c.length;
  let d = [];
  const p = [],
    g = [];
  let v = n.slidesOffsetBefore;
  typeof v == "function" && (v = n.slidesOffsetBefore.call(e));
  let y = n.slidesOffsetAfter;
  typeof y == "function" && (y = n.slidesOffsetAfter.call(e));
  const b = e.snapGrid.length,
    S = e.slidesGrid.length;
  let E = n.spaceBetween,
    T = -v,
    O = 0,
    U = 0;
  if (typeof i > "u") return;
  typeof E == "string" && E.indexOf("%") >= 0
    ? (E = (parseFloat(E.replace("%", "")) / 100) * i)
    : typeof E == "string" && (E = parseFloat(E)),
    (e.virtualSize = -E),
    c.forEach((I) => {
      o ? (I.style.marginLeft = "") : (I.style.marginRight = ""),
        (I.style.marginBottom = ""),
        (I.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Wn(s, "--swiper-centered-offset-before", ""),
      Wn(s, "--swiper-centered-offset-after", ""));
  const k = n.grid && n.grid.rows > 1 && e.grid;
  k ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let M;
  const C =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (I) => typeof n.breakpoints[I].slidesPerView < "u",
    ).length > 0;
  for (let I = 0; I < f; I += 1) {
    M = 0;
    let z;
    if (
      (c[I] && (z = c[I]),
      k && e.grid.updateSlide(I, z, c),
      !(c[I] && Ct(z, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        C && (c[I].style[e.getDirectionLabel("width")] = "");
        const Y = getComputedStyle(z),
          H = z.style.transform,
          q = z.style.webkitTransform;
        if (
          (H && (z.style.transform = "none"),
          q && (z.style.webkitTransform = "none"),
          n.roundLengths)
        )
          M = e.isHorizontal() ? _o(z, "width") : _o(z, "height");
        else {
          const $ = t(Y, "width"),
            se = t(Y, "padding-left"),
            X = t(Y, "padding-right"),
            ie = t(Y, "margin-left"),
            Ue = t(Y, "margin-right"),
            Ye = Y.getPropertyValue("box-sizing");
          if (Ye && Ye === "border-box") M = $ + ie + Ue;
          else {
            const { clientWidth: Ge, offsetWidth: Te } = z;
            M = $ + se + X + ie + Ue + (Te - Ge);
          }
        }
        H && (z.style.transform = H),
          q && (z.style.webkitTransform = q),
          n.roundLengths && (M = Math.floor(M));
      } else
        (M = (i - (n.slidesPerView - 1) * E) / n.slidesPerView),
          n.roundLengths && (M = Math.floor(M)),
          c[I] && (c[I].style[e.getDirectionLabel("width")] = `${M}px`);
      c[I] && (c[I].swiperSlideSize = M),
        g.push(M),
        n.centeredSlides
          ? ((T = T + M / 2 + O / 2 + E),
            O === 0 && I !== 0 && (T = T - i / 2 - E),
            I === 0 && (T = T - i / 2 - E),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            n.roundLengths && (T = Math.floor(T)),
            U % n.slidesPerGroup === 0 && d.push(T),
            p.push(T))
          : (n.roundLengths && (T = Math.floor(T)),
            (U - Math.min(e.params.slidesPerGroupSkip, U)) %
              e.params.slidesPerGroup ===
              0 && d.push(T),
            p.push(T),
            (T = T + M + E)),
        (e.virtualSize += M + E),
        (O = M),
        (U += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, i) + y),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + E}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + E}px`),
    k && e.grid.updateWrapperSize(M, d),
    !n.centeredSlides)
  ) {
    const I = [];
    for (let z = 0; z < d.length; z += 1) {
      let Y = d[z];
      n.roundLengths && (Y = Math.floor(Y)),
        d[z] <= e.virtualSize - i && I.push(Y);
    }
    (d = I),
      Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(e.virtualSize - i);
  }
  if (a && n.loop) {
    const I = g[0] + E;
    if (n.slidesPerGroup > 1) {
      const z = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        Y = I * n.slidesPerGroup;
      for (let H = 0; H < z; H += 1) d.push(d[d.length - 1] + Y);
    }
    for (let z = 0; z < e.virtual.slidesBefore + e.virtual.slidesAfter; z += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + I),
        p.push(p[p.length - 1] + I),
        (e.virtualSize += I);
  }
  if ((d.length === 0 && (d = [0]), E !== 0)) {
    const I =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((z, Y) =>
      !n.cssMode || n.loop ? !0 : Y !== c.length - 1,
    ).forEach((z) => {
      z.style[I] = `${E}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let I = 0;
    g.forEach((Y) => {
      I += Y + (E || 0);
    }),
      (I -= E);
    const z = I > i ? I - i : 0;
    d = d.map((Y) => (Y <= 0 ? -v : Y > z ? z + y : Y));
  }
  if (n.centerInsufficientSlides) {
    let I = 0;
    g.forEach((Y) => {
      I += Y + (E || 0);
    }),
      (I -= E);
    const z = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (I + z < i) {
      const Y = (i - I - z) / 2;
      d.forEach((H, q) => {
        d[q] = H - Y;
      }),
        p.forEach((H, q) => {
          p[q] = H + Y;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: d,
      slidesGrid: p,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Wn(s, "--swiper-centered-offset-before", `${-d[0]}px`),
      Wn(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`,
      );
    const I = -e.snapGrid[0],
      z = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((Y) => Y + I)),
      (e.slidesGrid = e.slidesGrid.map((Y) => Y + z));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    d.length !== b &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    p.length !== S && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const I = `${n.containerModifierClass}backface-hidden`,
      z = e.el.classList.contains(I);
    f <= n.maxBackfaceHiddenSlides
      ? z || e.el.classList.add(I)
      : z && e.el.classList.remove(I);
  }
}
function Wh(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled;
  let r = 0,
    i;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (s ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const l = t.activeIndex + i;
        if (l > t.slides.length && !s) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (i = 0; i < n.length; i += 1)
    if (typeof n[i] < "u") {
      const l = n[i].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && (t.wrapperEl.style.height = `${r}px`);
}
function qh() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const Co = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Kh(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: r, snapGrid: i } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  r && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset);
    const f =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      d =
        (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      p = -(o - c),
      g = p + t.slidesSizesGrid[a],
      v = p >= 0 && p <= t.size - t.slidesSizesGrid[a],
      y =
        (p >= 0 && p < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (p <= 0 && g >= t.size);
    y && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      Co(u, y, n.slideVisibleClass),
      Co(u, v, n.slideFullyVisibleClass),
      (u.progress = r ? -f : f),
      (u.originalProgress = r ? -d : d);
  }
}
function Yh(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: r, isBeginning: i, isEnd: o, progressLoop: l } = t;
  const a = i,
    u = o;
  if (s === 0) (r = 0), (i = !0), (o = !0);
  else {
    r = (e - t.minTranslate()) / s;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (i = c || r <= 0), (o = f || r >= 1), c && (r = 0), f && (r = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[c],
      p = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e);
    v >= d ? (l = (v - d) / g) : (l = (v + g - p) / g), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: r, progressLoop: l, isBeginning: i, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    i && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !i) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", r);
}
const tr = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Xh() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: r } = e,
    i = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (f) => vt(s, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  let a, u, c;
  if (i)
    if (n.loop) {
      let f = r - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${f}"]`));
    } else a = l(`[data-swiper-slide-index="${r}"]`);
  else
    o
      ? ((a = t.find((f) => f.column === r)),
        (c = t.find((f) => f.column === r + 1)),
        (u = t.find((f) => f.column === r - 1)))
      : (a = t[r]);
  a &&
    (o ||
      ((c = Nh(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = Dh(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      tr(f, f === a, n.slideActiveClass),
        tr(f, f === c, n.slideNextClass),
        tr(f, f === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const ts = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n());
    if (s) {
      let r = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      !r &&
        e.isElement &&
        (s.shadowRoot
          ? (r = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((r = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                r && r.remove());
            })),
        r && r.remove();
    }
  },
  nr = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Rr = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      r = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = r,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, u) => o + s + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && nr(e, u);
        });
      return;
    }
    const i = r + s - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = r - t; o <= i + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < r || l > i) && nr(e, l);
      }
    else
      for (let o = Math.max(r - t, 0); o <= Math.min(i + t, n - 1); o += 1)
        o !== r && (o > i || o < r) && nr(e, o);
  };
function Qh(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let r;
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u"
      ? s >= t[i] && s < t[i + 1] - (t[i + 1] - t[i]) / 2
        ? (r = i)
        : s >= t[i] && s < t[i + 1] && (r = i + 1)
      : s >= t[i] && (r = i);
  return n.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Jh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: r, activeIndex: i, realIndex: o, snapIndex: l } = t;
  let a = e,
    u;
  const c = (p) => {
    let g = p - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof a > "u" && (a = Qh(t)), s.indexOf(n) >= 0)) u = s.indexOf(n);
  else {
    const p = Math.min(r.slidesPerGroupSkip, a);
    u = p + Math.floor((a - p) / r.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), a === i && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === i && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const f = t.grid && r.grid && r.grid.rows > 1;
  let d;
  if (t.virtual && r.virtual.enabled && r.loop) d = c(a);
  else if (f) {
    const p = t.slides.find((v) => v.column === a);
    let g = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(p), 0)),
      (d = Math.floor(g / r.grid.rows));
  } else if (t.slides[a]) {
    const p = t.slides[a].getAttribute("data-swiper-slide-index");
    p ? (d = parseInt(p, 10)) : (d = a);
  } else d = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: d,
    previousIndex: i,
    activeIndex: a,
  }),
    t.initialized && Rr(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== d && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Zh(e, t) {
  const n = this,
    s = n.params;
  let r = e.closest(`.${s.slideClass}, swiper-slide`);
  !r &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l);
    });
  let i = !1,
    o;
  if (r) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === r) {
        (i = !0), (o = l);
        break;
      }
  }
  if (r && i)
    (n.clickedSlide = r),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var em = {
  updateSize: Gh,
  updateSlides: $h,
  updateAutoHeight: Wh,
  updateSlidesOffset: qh,
  updateSlidesProgress: Kh,
  updateProgress: Yh,
  updateSlidesClasses: Xh,
  updateActiveIndex: Jh,
  updateClickedSlide: Zh,
};
function tm(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: s, translate: r, wrapperEl: i } = t;
  if (n.virtualTranslate) return s ? -r : r;
  if (n.cssMode) return r;
  let o = Mh(i, e);
  return (o += t.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function nm(e, t) {
  const n = this,
    { rtlTranslate: s, params: r, wrapperEl: i, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = s ? -e : e) : (a = e),
    r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    r.cssMode
      ? (i[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : r.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (i.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function sm() {
  return -this.snapGrid[0];
}
function rm() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function im(e, t, n, s, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0);
  const i = this,
    { params: o, wrapperEl: l } = i;
  if (i.animating && o.preventInteractionOnTransition) return !1;
  const a = i.minTranslate(),
    u = i.maxTranslate();
  let c;
  if (
    (s && e > a ? (c = a) : s && e < u ? (c = u) : (c = e),
    i.updateProgress(c),
    o.cssMode)
  ) {
    const f = i.isHorizontal();
    if (t === 0) l[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!i.support.smoothScroll)
        return (
          La({ swiper: i, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      l.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (i.setTransition(0),
        i.setTranslate(c),
        n && (i.emit("beforeTransitionStart", t, r), i.emit("transitionEnd")))
      : (i.setTransition(t),
        i.setTranslate(c),
        n && (i.emit("beforeTransitionStart", t, r), i.emit("transitionStart")),
        i.animating ||
          ((i.animating = !0),
          i.onTranslateToWrapperTransitionEnd ||
            (i.onTranslateToWrapperTransitionEnd = function (d) {
              !i ||
                i.destroyed ||
                (d.target === this &&
                  (i.wrapperEl.removeEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd,
                  ),
                  (i.onTranslateToWrapperTransitionEnd = null),
                  delete i.onTranslateToWrapperTransitionEnd,
                  (i.animating = !1),
                  n && i.emit("transitionEnd")));
            }),
          i.wrapperEl.addEventListener(
            "transitionend",
            i.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var om = {
  getTranslate: tm,
  setTranslate: nm,
  minTranslate: sm,
  maxTranslate: rm,
  translateTo: im,
};
function lm(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Fa(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: r } = e;
  const { activeIndex: i, previousIndex: o } = t;
  let l = s;
  if (
    (l || (i > o ? (l = "next") : i < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${r}`),
    n && i !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${r}`);
      return;
    }
    t.emit(`slideChangeTransition${r}`),
      l === "next"
        ? t.emit(`slideNextTransition${r}`)
        : t.emit(`slidePrevTransition${r}`);
  }
}
function am(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Fa({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function cm(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  (n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Fa({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var um = { setTransition: lm, transitionStart: am, transitionEnd: cm };
function fm(e, t, n, s, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: p,
    enabled: g,
  } = i;
  if (
    (!g && !s && !r) ||
    i.destroyed ||
    (i.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = i.params.speed);
  const v = Math.min(i.params.slidesPerGroupSkip, o);
  let y = v + Math.floor((o - v) / i.params.slidesPerGroup);
  y >= a.length && (y = a.length - 1);
  const b = -a[y];
  if (l.normalizeSlideIndex)
    for (let k = 0; k < u.length; k += 1) {
      const M = -Math.floor(b * 100),
        C = Math.floor(u[k] * 100),
        I = Math.floor(u[k + 1] * 100);
      typeof u[k + 1] < "u"
        ? M >= C && M < I - (I - C) / 2
          ? (o = k)
          : M >= C && M < I && (o = k + 1)
        : M >= C && (o = k);
    }
  if (
    i.initialized &&
    o !== f &&
    ((!i.allowSlideNext &&
      (d
        ? b > i.translate && b > i.minTranslate()
        : b < i.translate && b < i.minTranslate())) ||
      (!i.allowSlidePrev &&
        b > i.translate &&
        b > i.maxTranslate() &&
        (f || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && i.emit("beforeSlideChangeStart"), i.updateProgress(b);
  let S;
  o > f ? (S = "next") : o < f ? (S = "prev") : (S = "reset");
  const E = i.virtual && i.params.virtual.enabled;
  if (!(E && r) && ((d && -b === i.translate) || (!d && b === i.translate)))
    return (
      i.updateActiveIndex(o),
      l.autoHeight && i.updateAutoHeight(),
      i.updateSlidesClasses(),
      l.effect !== "slide" && i.setTranslate(b),
      S !== "reset" && (i.transitionStart(n, S), i.transitionEnd(n, S)),
      !1
    );
  if (l.cssMode) {
    const k = i.isHorizontal(),
      M = d ? b : -b;
    if (t === 0)
      E &&
        ((i.wrapperEl.style.scrollSnapType = "none"),
        (i._immediateVirtual = !0)),
        E && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
          ? ((i._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[k ? "scrollLeft" : "scrollTop"] = M;
            }))
          : (p[k ? "scrollLeft" : "scrollTop"] = M),
        E &&
          requestAnimationFrame(() => {
            (i.wrapperEl.style.scrollSnapType = ""), (i._immediateVirtual = !1);
          });
    else {
      if (!i.support.smoothScroll)
        return (
          La({ swiper: i, targetPosition: M, side: k ? "left" : "top" }), !0
        );
      p.scrollTo({ [k ? "left" : "top"]: M, behavior: "smooth" });
    }
    return !0;
  }
  const U = Na().isSafari;
  return (
    E && !r && U && i.isElement && i.virtual.update(!1, !1, o),
    i.setTransition(t),
    i.setTranslate(b),
    i.updateActiveIndex(o),
    i.updateSlidesClasses(),
    i.emit("beforeTransitionStart", t, s),
    i.transitionStart(n, S),
    t === 0
      ? i.transitionEnd(n, S)
      : i.animating ||
        ((i.animating = !0),
        i.onSlideToWrapperTransitionEnd ||
          (i.onSlideToWrapperTransitionEnd = function (M) {
            !i ||
              i.destroyed ||
              (M.target === this &&
                (i.wrapperEl.removeEventListener(
                  "transitionend",
                  i.onSlideToWrapperTransitionEnd,
                ),
                (i.onSlideToWrapperTransitionEnd = null),
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(n, S)));
          }),
        i.wrapperEl.addEventListener(
          "transitionend",
          i.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function dm(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  if (r.destroyed) return;
  typeof t > "u" && (t = r.params.speed);
  const i = r.grid && r.params.grid && r.params.grid.rows > 1;
  let o = e;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
    else {
      let l;
      if (i) {
        const d = o * r.params.grid.rows;
        l = r.slides.find(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === d,
        ).column;
      } else l = r.getSlideIndexByData(o);
      const a = i
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: u } = r.params;
      let c = r.params.slidesPerView;
      c === "auto"
        ? (c = r.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let f = a - l < c;
      if (
        (u && (f = f || l < Math.ceil(c / 2)),
        s && u && r.params.slidesPerView !== "auto" && !i && (f = !1),
        f)
      ) {
        const d = u
          ? l < r.activeIndex
            ? "prev"
            : "next"
          : l - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
        r.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === "next" ? l + 1 : l - a + 1,
          slideRealIndex: d === "next" ? r.realIndex : void 0,
        });
      }
      if (i) {
        const d = o * r.params.grid.rows;
        o = r.slides.find(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === d,
        ).column;
      } else o = r.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, t, n, s);
    }),
    r
  );
}
function pm(e, t, n) {
  t === void 0 && (t = !0);
  const s = this,
    { enabled: r, params: i, animating: o } = s;
  if (!r || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  let l = i.slidesPerGroup;
  i.slidesPerView === "auto" &&
    i.slidesPerGroup === 1 &&
    i.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < i.slidesPerGroupSkip ? 1 : l,
    u = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (o && !u && i.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && i.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return i.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + a, e, t, n);
}
function hm(e, t, n) {
  t === void 0 && (t = !0);
  const s = this,
    {
      params: r,
      snapGrid: i,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = s;
  if (!a || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  const c = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (u && !c && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const f = l ? s.translate : -s.translate;
  function d(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
  }
  const p = d(f),
    g = i.map((S) => d(S)),
    v = r.freeMode && r.freeMode.enabled;
  let y = i[g.indexOf(p) - 1];
  if (typeof y > "u" && (r.cssMode || v)) {
    let S;
    i.forEach((E, T) => {
      p >= E && (S = T);
    }),
      typeof S < "u" && (y = v ? i[S] : i[S > 0 ? S - 1 : S]);
  }
  let b = 0;
  if (
    (typeof y < "u" &&
      ((b = o.indexOf(y)),
      b < 0 && (b = s.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((b = b - s.slidesPerViewDynamic("previous", !0) + 1),
        (b = Math.max(b, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const S =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(S, e, t, n);
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(b, e, t, n);
      }),
      !0
    );
  return s.slideTo(b, e, t, n);
}
function mm(e, t, n) {
  t === void 0 && (t = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    );
}
function gm(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof e > "u" && (e = r.params.speed);
  let i = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, i),
    l = o + Math.floor((i - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate;
  if (a >= r.snapGrid[l]) {
    const u = r.snapGrid[l],
      c = r.snapGrid[l + 1];
    a - u > (c - u) * s && (i += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[l - 1],
      c = r.snapGrid[l];
    a - u <= (c - u) * s && (i -= r.params.slidesPerGroup);
  }
  return (
    (i = Math.max(i, 0)),
    (i = Math.min(i, r.slidesGrid.length - 1)),
    r.slideTo(i, e, t, n)
  );
}
function vm() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let r = e.clickedIndex,
    i;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? r < e.loopedSlides - s / 2 ||
          r > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (r = e.getSlideIndex(
              vt(n, `${o}[data-swiper-slide-index="${i}"]`)[0],
            )),
            Pr(() => {
              e.slideTo(r);
            }))
          : e.slideTo(r)
        : r > e.slides.length - s
          ? (e.loopFix(),
            (r = e.getSlideIndex(
              vt(n, `${o}[data-swiper-slide-index="${i}"]`)[0],
            )),
            Pr(() => {
              e.slideTo(r);
            }))
          : e.slideTo(r);
  } else e.slideTo(r);
}
var wm = {
  slideTo: fm,
  slideToLoop: dm,
  slideNext: pm,
  slidePrev: hm,
  slideReset: mm,
  slideToClosest: gm,
  slideToClickedSlide: vm,
};
function ym(e) {
  const t = this,
    { params: n, slidesEl: s } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const r = () => {
      vt(s, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
        f.setAttribute("data-swiper-slide-index", d);
      });
    },
    i = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (i ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = i && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let f = 0; f < c; f += 1) {
        const d = t.isElement
          ? Or("swiper-slide", [n.slideBlankClass])
          : Or("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(d);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      ds(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      ds(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else r();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function bm(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: i,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: f,
      slidesEl: d,
      params: p,
    } = a,
    { centeredSlides: g } = p;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && p.virtual.enabled)
  ) {
    n &&
      (!p.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && a.snapIndex < p.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 &&
            a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = f),
      a.emit("loopFix");
    return;
  }
  let v = p.slidesPerView;
  v === "auto"
    ? (v = a.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(p.slidesPerView, 10))),
      g && v % 2 === 0 && (v = v + 1));
  const y = p.slidesPerGroupAuto ? v : p.slidesPerGroup;
  let b = y;
  b % y !== 0 && (b += y - (b % y)),
    (b += p.loopAdditionalSlides),
    (a.loopedSlides = b);
  const S = a.grid && p.grid && p.grid.rows > 1;
  u.length < v + b
    ? ds(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : S &&
      p.grid.fill === "row" &&
      ds(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const E = [],
    T = [];
  let O = a.activeIndex;
  typeof i > "u"
    ? (i = a.getSlideIndex(
        u.find((H) => H.classList.contains(p.slideActiveClass)),
      ))
    : (O = i);
  const U = s === "next" || !s,
    k = s === "prev" || !s;
  let M = 0,
    C = 0;
  const I = S ? Math.ceil(u.length / p.grid.rows) : u.length,
    Y = (S ? u[i].column : i) + (g && typeof r > "u" ? -v / 2 + 0.5 : 0);
  if (Y < b) {
    M = Math.max(b - Y, y);
    for (let H = 0; H < b - Y; H += 1) {
      const q = H - Math.floor(H / I) * I;
      if (S) {
        const $ = I - q - 1;
        for (let se = u.length - 1; se >= 0; se -= 1)
          u[se].column === $ && E.push(se);
      } else E.push(I - q - 1);
    }
  } else if (Y + v > I - b) {
    C = Math.max(Y - (I - b * 2), y);
    for (let H = 0; H < C; H += 1) {
      const q = H - Math.floor(H / I) * I;
      S
        ? u.forEach(($, se) => {
            $.column === q && T.push(se);
          })
        : T.push(q);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    k &&
      E.forEach((H) => {
        (u[H].swiperLoopMoveDOM = !0),
          d.prepend(u[H]),
          (u[H].swiperLoopMoveDOM = !1);
      }),
    U &&
      T.forEach((H) => {
        (u[H].swiperLoopMoveDOM = !0),
          d.append(u[H]),
          (u[H].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    p.slidesPerView === "auto"
      ? a.updateSlides()
      : S &&
        ((E.length > 0 && k) || (T.length > 0 && U)) &&
        a.slides.forEach((H, q) => {
          a.grid.updateSlide(q, H, a.slides);
        }),
    p.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (E.length > 0 && k) {
      if (typeof t > "u") {
        const H = a.slidesGrid[O],
          $ = a.slidesGrid[O + M] - H;
        l
          ? a.setTranslate(a.translate - $)
          : (a.slideTo(O + Math.ceil(M), 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - $),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - $)));
      } else if (r) {
        const H = S ? E.length / p.grid.rows : E.length;
        a.slideTo(a.activeIndex + H, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (T.length > 0 && U)
      if (typeof t > "u") {
        const H = a.slidesGrid[O],
          $ = a.slidesGrid[O - C] - H;
        l
          ? a.setTranslate(a.translate - $)
          : (a.slideTo(O - C, 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - $),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - $)));
      } else {
        const H = S ? T.length / p.grid.rows : T.length;
        a.slideTo(a.activeIndex - H, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = f),
    a.controller && a.controller.control && !o)
  ) {
    const H = {
      slideRealIndex: t,
      direction: s,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((q) => {
          !q.destroyed &&
            q.params.loop &&
            q.loopFix({
              ...H,
              slideTo: q.params.slidesPerView === p.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...H,
          slideTo:
            a.controller.control.params.slidesPerView === p.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function Sm() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const s = [];
  e.slides.forEach((r) => {
    const i =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    s[i] = r;
  }),
    e.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((r) => {
      n.append(r);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Em = { loopCreate: ym, loopFix: bm, loopDestroy: Sm };
function xm(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Tm() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Am = { setGrabCursor: xm, unsetGrabCursor: Tm };
function _m(e, t) {
  t === void 0 && (t = this);
  function n(s) {
    if (!s || s === Gt() || s === Le()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const r = s.closest(e);
    return !r && !s.getRootNode ? null : r || n(s.getRootNode().host);
  }
  return n(t);
}
function Po(e, t, n) {
  const s = Le(),
    { params: r } = e,
    i = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold;
  return i && (n <= o || n >= s.innerWidth - o)
    ? i === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Cm(e) {
  const t = this,
    n = Gt();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  const r = t.touchEventsData;
  if (s.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return;
    r.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (r.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    Po(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: i, touches: o, enabled: l } = t;
  if (
    !l ||
    (!i.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && i.preventInteractionOnTransition)
  )
    return;
  !t.animating && i.cssMode && i.loop && t.loopFix();
  let a = s.target;
  if (
    (i.touchEventsTarget === "wrapper" && !Bh(a, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const u = !!i.noSwipingClass && i.noSwipingClass !== "",
    c = s.composedPath ? s.composedPath() : s.path;
  u && s.target && s.target.shadowRoot && c && (a = c[0]);
  const f = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
    d = !!(s.target && s.target.shadowRoot);
  if (i.noSwiping && (d ? _m(f, a) : a.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (i.swipeHandler && !a.closest(i.swipeHandler)) return;
  (o.currentX = s.pageX), (o.currentY = s.pageY);
  const p = o.currentX,
    g = o.currentY;
  if (!Po(t, s, p)) return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = g),
    (r.touchStartTime = fs()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    i.threshold > 0 && (r.allowThresholdMove = !1);
  let v = !0;
  a.matches(r.focusableElements) &&
    ((v = !1), a.nodeName === "SELECT" && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== a &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !a.matches(r.focusableElements))) &&
      n.activeElement.blur();
  const y = v && t.allowTouchMove && i.touchStartPreventDefault;
  (i.touchStartForcePreventDefault || y) &&
    !a.isContentEditable &&
    s.preventDefault(),
    i.freeMode &&
      i.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !i.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function Pm(e) {
  const t = Gt(),
    n = this,
    s = n.touchEventsData,
    { params: r, touches: i, rtlTranslate: o, enabled: l } = n;
  if (!l || (!r.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].find((O) => O.identifier === s.touchId)),
      !u || u.identifier !== s.touchId)
    )
      return;
  } else u = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    f = u.pageY;
  if (a.preventedByNestedSwiper) {
    (i.startX = c), (i.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(i, { startX: c, startY: f, currentX: c, currentY: f }),
        (s.touchStartTime = fs()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (f < i.startY && n.translate <= n.maxTranslate()) ||
        (f > i.startY && n.translate >= n.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (c < i.startX && n.translate <= n.maxTranslate()) ||
      (c > i.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(s.focusableElements))
  ) {
    (s.isMoved = !0), (n.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && n.emit("touchMove", a),
    (i.previousX = i.currentX),
    (i.previousY = i.currentY),
    (i.currentX = c),
    (i.currentY = f);
  const d = i.currentX - i.startX,
    p = i.currentY - i.startY;
  if (n.params.threshold && Math.sqrt(d ** 2 + p ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let O;
    (n.isHorizontal() && i.currentY === i.startY) ||
    (n.isVertical() && i.currentX === i.startX)
      ? (s.isScrolling = !1)
      : d * d + p * p >= 25 &&
        ((O = (Math.atan2(Math.abs(p), Math.abs(d)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? O > r.touchAngle
          : 90 - O > r.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (i.currentX !== i.startX || i.currentY !== i.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (a.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (n.allowClick = !1),
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
  let g = n.isHorizontal() ? d : p,
    v = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY;
  r.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (i.diff = g),
    (g *= r.touchRatio),
    o && ((g = -g), (v = -v));
  const y = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = v > 0 ? "prev" : "next");
  const b = n.params.loop && !r.cssMode,
    S =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (b && S && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const O = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(O);
    }
    (s.allowMomentumBounce = !1),
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  if (
    (new Date().getTime(),
    r._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      y !== n.touchesDirection &&
      b &&
      S &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(i, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = g + s.startTranslate);
  let E = !0,
    T = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (T = 0),
    g > 0
      ? (b &&
          S &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (r.slidesPerView !== "auto" &&
                n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((E = !1),
          r.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + g) ** T)))
      : g < 0 &&
        (b &&
          S &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (r.slidesPerView !== "auto" &&
                n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (r.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((E = !1),
          r.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - g) ** T))),
    E && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (s.currentTranslate = s.startTranslate),
          (i.diff = n.isHorizontal()
            ? i.currentX - i.startX
            : i.currentY - i.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
      r.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function Om(e) {
  const t = this,
    n = t.touchEventsData;
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let r;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((r = [...s.changedTouches].find((O) => O.identifier === n.touchId)),
      !r || r.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return;
    r = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = fs(),
    d = f - n.touchStartTime;
  if (t.allowClick) {
    const O = s.path || (s.composedPath && s.composedPath());
    t.updateClickedSlide((O && O[0]) || s.target, O),
      t.emit("tap click", s),
      d < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", s);
  }
  if (
    ((n.lastClickTime = fs()),
    Pr(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (o.followFinger
      ? (p = a ? t.translate : -t.translate)
      : (p = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const g = p >= -t.maxTranslate() && !t.params.loop;
  let v = 0,
    y = t.slidesSizesGrid[0];
  for (
    let O = 0;
    O < u.length;
    O += O < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const U = O < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[O + U] < "u"
      ? (g || (p >= u[O] && p < u[O + U])) && ((v = O), (y = u[O + U] - u[O]))
      : (g || p >= u[O]) && ((v = O), (y = u[u.length - 1] - u[u.length - 2]));
  }
  let b = null,
    S = null;
  o.rewind &&
    (t.isBeginning
      ? (S =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (b = 0));
  const E = (p - u[v]) / y,
    T = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (d > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (E >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? b : v + T)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (E > 1 - o.longSwipesRatio
          ? t.slideTo(v + T)
          : S !== null && E < 0 && Math.abs(E) > o.longSwipesRatio
            ? t.slideTo(S)
            : t.slideTo(v));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(v + T)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(b !== null ? b : v + T),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : v));
  }
}
function Oo() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: i } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = r),
    (e.allowSlideNext = s),
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
}
function Rm(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Mm() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
  if (!s) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let r;
  const i = e.maxTranslate() - e.minTranslate();
  i === 0 ? (r = 0) : (r = (e.translate - e.minTranslate()) / i),
    r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Im(e) {
  const t = this;
  ts(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Lm() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const ka = (e, t) => {
  const n = Gt(),
    { params: s, el: r, wrapperEl: i, device: o } = e,
    l = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !r ||
    typeof r == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    r[a]("touchstart", e.onTouchStart, { passive: !1 }),
    r[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      r[a]("click", e.onClick, !0),
    s.cssMode && i[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Oo,
          !0,
        )
      : e[u]("observerUpdate", Oo, !0),
    r[a]("load", e.onLoad, { capture: !0 }));
};
function Bm() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = Cm.bind(e)),
    (e.onTouchMove = Pm.bind(e)),
    (e.onTouchEnd = Om.bind(e)),
    (e.onDocumentTouchStart = Lm.bind(e)),
    t.cssMode && (e.onScroll = Mm.bind(e)),
    (e.onClick = Rm.bind(e)),
    (e.onLoad = Im.bind(e)),
    ka(e, "on");
}
function Dm() {
  ka(this, "off");
}
var Nm = { attachEvents: Bm, detachEvents: Dm };
const Ro = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Fm() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: r } = e,
    i = s.breakpoints;
  if (!i || (i && Object.keys(i).length === 0)) return;
  const o = Gt(),
    l =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : o.querySelector(s.breakpointsBase),
    u = e.getBreakpoint(i, l, a);
  if (!u || e.currentBreakpoint === u) return;
  const f = (u in i ? i[u] : void 0) || e.originalParams,
    d = Ro(e, s),
    p = Ro(e, f),
    g = e.params.grabCursor,
    v = f.grabCursor,
    y = s.enabled;
  d && !p
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !d &&
      p &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((f.grid.fill && f.grid.fill === "column") ||
        (!f.grid.fill && s.grid.fill === "column")) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    g && !v ? e.unsetGrabCursor() : !g && v && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((U) => {
      if (typeof f[U] > "u") return;
      const k = s[U] && s[U].enabled,
        M = f[U] && f[U].enabled;
      k && !M && e[U].disable(), !k && M && e[U].enable();
    });
  const b = f.direction && f.direction !== s.direction,
    S = s.loop && (f.slidesPerView !== s.slidesPerView || b),
    E = s.loop;
  b && n && e.changeDirection(), Ve(e.params, f);
  const T = e.params.enabled,
    O = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    y && !T ? e.disable() : !y && T && e.enable(),
    (e.currentBreakpoint = u),
    e.emit("_beforeBreakpoint", f),
    n &&
      (S
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !E && O
          ? (e.loopCreate(t), e.updateSlides())
          : E && !O && e.loopDestroy()),
    e.emit("breakpoint", f);
}
function km(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let s = !1;
  const r = Le(),
    i = t === "window" ? r.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: i * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    t === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (s = a)
      : u <= n.clientWidth && (s = a);
  }
  return s || "max";
}
var jm = { setBreakpoint: Fm, getBreakpoint: km };
function Vm(e, t) {
  const n = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((r) => {
            s[r] && n.push(t + r);
          })
        : typeof s == "string" && n.push(t + s);
    }),
    n
  );
}
function zm() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: r, device: i } = e,
    o = Vm(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: i.android },
        { ios: i.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...o), r.classList.add(...t), e.emitContainerClasses();
}
function Hm() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var Um = { addClasses: zm, removeClasses: Hm };
function Gm() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const r = e.slides.length - 1,
      i = e.slidesGrid[r] + e.slidesSizesGrid[r] + s * 2;
    e.isLocked = e.size > i;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var $m = { checkOverflow: Gm },
  Mr = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Wm(e, t) {
  return function (s) {
    s === void 0 && (s = {});
    const r = Object.keys(s)[0],
      i = s[r];
    if (typeof i != "object" || i === null) {
      Ve(t, s);
      return;
    }
    if (
      (e[r] === !0 && (e[r] = { enabled: !0 }),
      r === "navigation" &&
        e[r] &&
        e[r].enabled &&
        !e[r].prevEl &&
        !e[r].nextEl &&
        (e[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        e[r] &&
        e[r].enabled &&
        !e[r].el &&
        (e[r].auto = !0),
      !(r in e && "enabled" in i))
    ) {
      Ve(t, s);
      return;
    }
    typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0),
      e[r] || (e[r] = { enabled: !1 }),
      Ve(t, s);
  };
}
const sr = {
    eventsEmitter: Uh,
    update: em,
    translate: om,
    transition: um,
    slide: wm,
    loop: Em,
    grabCursor: Am,
    events: Nm,
    breakpoints: jm,
    checkOverflow: $m,
    classes: Um,
  },
  rr = {};
let ii = class pt {
  constructor() {
    let t, n;
    for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++)
      r[i] = arguments[i];
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (n = r[0])
      : ([t, n] = r),
      n || (n = {}),
      (n = Ve({}, n)),
      t && !n.el && (n.el = t);
    const o = Gt();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((f) => {
          const d = Ve({}, n, { el: f });
          c.push(new pt(d));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Ba()),
      (l.device = Da({ userAgent: n.userAgent })),
      (l.browser = Na()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: Wm(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = Ve({}, Mr, a);
    return (
      (l.params = Ve({}, u, rr, n)),
      (l.originalParams = Ve({}, l.params)),
      (l.passedParams = Ve({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: s } = this,
      r = vt(n, `.${s.slideClass}, swiper-slide`),
      i = Ao(r[0]);
    return Ao(t) - i;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      ),
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t;
    t.slides = vt(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const r = s.minTranslate(),
      o = (s.maxTranslate() - r) * t + r;
    s.translateTo(o, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((s) => {
      const r = t.getSlideClasses(s);
      n.push({ slideEl: s, classNames: r }), t.emit("_slideClass", s, r);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const s = this,
      {
        params: r,
        slides: i,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = s;
    let c = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let f = i[u] ? Math.ceil(i[u].swiperSlideSize) : 0,
        d;
      for (let p = u + 1; p < i.length; p += 1)
        i[p] &&
          !d &&
          ((f += Math.ceil(i[p].swiperSlideSize)), (c += 1), f > a && (d = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        i[p] &&
          !d &&
          ((f += i[p].swiperSlideSize), (c += 1), f > a && (d = !0));
    } else if (t === "current")
      for (let f = u + 1; f < i.length; f += 1)
        (n ? o[f] + l[f] - o[u] < a : o[f] - o[u] < a) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) o[u] - o[f] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && ts(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function r() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let i;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      r(), s.autoHeight && t.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        i = t.slideTo(o.length - 1, 0, !1, !0);
      } else i = t.slideTo(t.activeIndex, 0, !1, !0);
      i || r();
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const s = this,
      r = s.params.direction;
    return (
      t || (t = r === "horizontal" ? "vertical" : "horizontal"),
      t === r ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((i) => {
          t === "vertical" ? (i.style.width = "") : (i.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let s = t || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const r = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : vt(s, r())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Or("div", n.params.wrapperClass)),
        s.append(o),
        vt(s, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || Ct(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || Ct(s, "direction") === "rtl"),
        wrongRTL: Ct(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const r = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((i) => {
        i.complete
          ? ts(n, i)
          : i.addEventListener("load", (o) => {
              ts(n, o.target);
            });
      }),
      Rr(n),
      (n.initialized = !0),
      Rr(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const s = this,
      { params: r, el: i, wrapperEl: o, slides: l } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          i && typeof i != "string" && i.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), Oh(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ve(rr, t);
  }
  static get extendedDefaults() {
    return rr;
  }
  static get defaults() {
    return Mr;
  }
  static installModule(t) {
    pt.prototype.__modules__ || (pt.prototype.__modules__ = []);
    const n = pt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => pt.installModule(n)), pt)
      : (pt.installModule(t), pt);
  }
};
Object.keys(sr).forEach((e) => {
  Object.keys(sr[e]).forEach((t) => {
    ii.prototype[t] = sr[e][t];
  });
});
ii.use([zh, Hh]);
const ja = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Ut(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function on(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Ut(t[s]) && Ut(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : on(e[s], t[s])
          : (e[s] = t[s]);
    });
}
function Va(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function za(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Ha(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Ua(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function qm(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Km(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: r,
    nextEl: i,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const u = r.filter(
      (C) => C !== "children" && C !== "direction" && C !== "wrapperClass",
    ),
    {
      params: c,
      pagination: f,
      navigation: d,
      scrollbar: p,
      virtual: g,
      thumbs: v,
    } = t;
  let y, b, S, E, T, O, U, k;
  r.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (y = !0),
    r.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (b = !0),
    r.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (S = !0),
    r.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      p &&
      !p.el &&
      (E = !0),
    r.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || i) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (T = !0);
  const M = (C) => {
    t[C] &&
      (t[C].destroy(),
      C === "navigation"
        ? (t.isElement && (t[C].prevEl.remove(), t[C].nextEl.remove()),
          (c[C].prevEl = void 0),
          (c[C].nextEl = void 0),
          (t[C].prevEl = void 0),
          (t[C].nextEl = void 0))
        : (t.isElement && t[C].el.remove(),
          (c[C].el = void 0),
          (t[C].el = void 0)));
  };
  r.includes("loop") &&
    t.isElement &&
    (c.loop && !s.loop ? (O = !0) : !c.loop && s.loop ? (U = !0) : (k = !0)),
    u.forEach((C) => {
      if (Ut(c[C]) && Ut(s[C]))
        Object.assign(c[C], s[C]),
          (C === "navigation" || C === "pagination" || C === "scrollbar") &&
            "enabled" in s[C] &&
            !s[C].enabled &&
            M(C);
      else {
        const I = s[C];
        (I === !0 || I === !1) &&
        (C === "navigation" || C === "pagination" || C === "scrollbar")
          ? I === !1 && M(C)
          : (c[C] = s[C]);
      }
    }),
    u.includes("controller") &&
      !b &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    r.includes("children") && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : r.includes("virtual") &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    r.includes("children") && n && c.loop && (k = !0),
    y && v.init() && v.update(!0),
    b && (t.controller.control = c.controller.control),
    S &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      f.init(),
      f.render(),
      f.update()),
    E &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    T &&
      (t.isElement &&
        ((!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-next"),
          (i.innerHTML = t.hostEl.constructor.nextButtonSvg),
          i.part.add("button-next"),
          t.el.appendChild(i)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      i && (c.navigation.nextEl = i),
      o && (c.navigation.prevEl = o),
      d.init(),
      d.update()),
    r.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    r.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    r.includes("direction") && t.changeDirection(s.direction, !1),
    (O || k) && t.loopDestroy(),
    (U || k) && t.loopCreate(),
    t.update();
}
function Mo(e, t) {
  e === void 0 && (e = {});
  const n = { on: {} },
    s = {},
    r = {};
  on(n, Mr), (n._emitClasses = !0), (n.init = !1);
  const i = {},
    o = ja.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? Ut(e[a])
            ? ((n[a] = {}), (r[a] = {}), on(n[a], e[a]), on(r[a], e[a]))
            : ((n[a] = e[a]), (r[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
            ? (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (i[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: r, rest: i, events: s }
  );
}
function Ym(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: r,
    paginationEl: i,
    scrollbarEl: o,
    swiper: l,
  } = e;
  Va(t) &&
    s &&
    r &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = r),
    (l.originalParams.navigation.prevEl = r)),
    za(t) &&
      i &&
      ((l.params.pagination.el = i), (l.originalParams.pagination.el = i)),
    Ha(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function Xm(e, t, n, s, r) {
  const i = [];
  if (!t) return i;
  const o = (a) => {
    i.indexOf(a) < 0 && i.push(a);
  };
  if (n && s) {
    const a = s.map(r),
      u = n.map(r);
    a.join("") !== u.join("") && o("children"),
      s.length !== n.length && o("children");
  }
  return (
    ja
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Ut(e[a]) && Ut(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? o(a)
              : (u.forEach((f) => {
                  e[a][f] !== t[a][f] && o(a);
                }),
                c.forEach((f) => {
                  e[a][f] !== t[a][f] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    i
  );
}
const Qm = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function ir(e, t, n) {
  e === void 0 && (e = {});
  const s = [],
    r = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    i = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const u = typeof a.type == "symbol";
          l === "default" && (l = "container-end"),
            u && a.children
              ? i(a.children, l)
              : (a.type &&
                    (a.type.name === "SwiperSlide" ||
                      a.type.name === "AsyncComponentWrapper")) ||
                  (a.componentOptions &&
                    a.componentOptions.tag === "SwiperSlide")
                ? s.push(a)
                : r[l] && r[l].push(a);
        });
    };
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != "function") return;
      const l = e[o]();
      i(l, o);
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: r }
  );
}
function Jm(e, t, n) {
  if (!n) return null;
  const s = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
      );
    },
    r = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: i, to: o } = n,
    l = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < a; c += 1)
    c >= i && c <= o && u.length < t.length && u.push(t[s(c)]);
  return u.map((c) => {
    if (
      (c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = r),
      c.type)
    )
      return De(c.type, { ...c.props }, c.children);
    if (c.componentOptions)
      return De(
        c.componentOptions.Ctor,
        { ...c.props },
        c.componentOptions.children,
      );
  });
}
const Zm = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: s } = t;
      const { tag: r, wrapperTag: i } = e,
        o = ne("swiper"),
        l = ne(null),
        a = ne(!1),
        u = ne(!1),
        c = ne(null),
        f = ne(null),
        d = ne(null),
        p = { value: [] },
        g = { value: [] },
        v = ne(null),
        y = ne(null),
        b = ne(null),
        S = ne(null),
        { params: E, passedParams: T } = Mo(e);
      ir(n, p, g), (d.value = T), (g.value = p.value);
      const O = () => {
        ir(n, p, g), (a.value = !0);
      };
      (E.onAny = function (M) {
        for (
          var C = arguments.length, I = new Array(C > 1 ? C - 1 : 0), z = 1;
          z < C;
          z++
        )
          I[z - 1] = arguments[z];
        s(M, ...I);
      }),
        Object.assign(E.on, {
          _beforeBreakpoint: O,
          _containerClasses(M, C) {
            o.value = C;
          },
        });
      const U = { ...E };
      if (
        (delete U.wrapperClass,
        (f.value = new ii(U)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = p.value;
        const M = {
          cache: !1,
          slides: p.value,
          renderExternal: (C) => {
            l.value = C;
          },
          renderExternalUpdate: !1,
        };
        on(f.value.params.virtual, M), on(f.value.originalParams.virtual, M);
      }
      Kr(() => {
        !u.value && f.value && (f.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: M } = Mo(e),
          C = Xm(M, d.value, p.value, g.value, (I) => I.props && I.props.key);
        (d.value = M),
          (C.length || a.value) &&
            f.value &&
            !f.value.destroyed &&
            Km({
              swiper: f.value,
              slides: p.value,
              passedParams: M,
              changedParams: C,
              nextEl: v.value,
              prevEl: y.value,
              scrollbarEl: S.value,
              paginationEl: b.value,
            }),
          (a.value = !1);
      }),
        nn("swiper", f),
        sn(l, () => {
          Ss(() => {
            Qm(f.value);
          });
        }),
        qr(() => {
          c.value &&
            (Ym(
              {
                el: c.value,
                nextEl: v.value,
                prevEl: y.value,
                paginationEl: b.value,
                scrollbarEl: S.value,
                swiper: f.value,
              },
              E,
            ),
            s("swiper", f.value));
        }),
        Yr(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1);
        });
      function k(M) {
        return E.virtual
          ? Jm(f, M, l.value)
          : (M.forEach((C, I) => {
              C.props || (C.props = {}),
                (C.props.swiperRef = f),
                (C.props.swiperSlideIndex = I);
            }),
            M);
      }
      return () => {
        const { slides: M, slots: C } = ir(n, p, g);
        return De(r, { ref: c, class: Ua(o.value) }, [
          C["container-start"],
          De(i, { class: qm(E.wrapperClass) }, [
            C["wrapper-start"],
            k(M),
            C["wrapper-end"],
          ]),
          Va(e) && [
            De("div", { ref: y, class: "swiper-button-prev" }),
            De("div", { ref: v, class: "swiper-button-next" }),
          ],
          Ha(e) && De("div", { ref: S, class: "swiper-scrollbar" }),
          za(e) && De("div", { ref: b, class: "swiper-pagination" }),
          C["container-end"],
        ]);
      };
    },
  },
  eg = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        s = !1;
      const { swiperRef: r } = e,
        i = ne(null),
        o = ne("swiper-slide"),
        l = ne(!1);
      function a(f, d, p) {
        d === i.value && (o.value = p);
      }
      qr(() => {
        !r || !r.value || (r.value.on("_slideClass", a), (s = !0));
      }),
        vl(() => {
          s || !r || !r.value || (r.value.on("_slideClass", a), (s = !0));
        }),
        Kr(() => {
          !i.value ||
            !r ||
            !r.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (i.value.swiperSlideIndex = e.swiperSlideIndex),
            r.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        Yr(() => {
          !r || !r.value || r.value.off("_slideClass", a);
        });
      const u = Ce(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }));
      nn("swiperSlide", u);
      const c = () => {
        l.value = !0;
      };
      return () =>
        De(
          e.tag,
          {
            class: Ua(`${o.value}`),
            ref: i,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && r && r.value && r.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? De(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !l.value &&
                    De("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !l.value &&
                  De("div", { class: "swiper-lazy-preloader" }),
              ],
        );
    },
  },
  tg = { class: "movie" },
  ng = { class: "movie-category" },
  sg = { class: "movie-subtext" },
  rg = { class: "movie-list__item" },
  ig = ["src"],
  og = { class: "movie-list__txt" },
  lg = { class: "movie-list__title" },
  ag = { class: "release_date" },
  qn = {
    __name: "MainMovie",
    props: {
      subTitle: String,
      title: String,
      movies: Array,
      loading: Boolean,
      type: String,
    },
    setup(e) {
      const t = e,
        n = Ce(() => {
          const s = window.innerWidth;
          return s >= 980
            ? new Array(5).fill(0)
            : s >= 740
              ? new Array(4).fill(0)
              : s >= 480
                ? new Array(3).fill(0)
                : s >= 380
                  ? new Array(2).fill(0)
                  : new Array(1).fill(0);
        });
      return (s, r) => {
        const i = yl("RouterLink");
        return (
          be(),
          Xe("section", tg, [
            W("h3", ng, _t(t.subTitle), 1),
            W("h4", sg, [
              rn(_t(t.title) + " ", 1),
              t.type && t.type !== "relative"
                ? (be(),
                  Ot(
                    i,
                    { key: 0, to: `/movie/${e.type}` },
                    {
                      default: at(() => r[0] || (r[0] = [rn("더보기 ")])),
                      _: 1,
                    },
                    8,
                    ["to"],
                  ))
                : Qr("", !0),
            ]),
            W(
              "div",
              { class: _n(["movie-list", { loading: t.loading }]) },
              [
                t.loading
                  ? (be(!0),
                    Xe(
                      Ee,
                      { key: 1 },
                      mi(
                        n.value,
                        (o, l) => (
                          be(),
                          Xe(
                            "div",
                            { class: "movie-list__item", key: l },
                            r[2] ||
                              (r[2] = [
                                W(
                                  "a",
                                  {
                                    href: "#",
                                    class: "skeleton-list-item ui0",
                                  },
                                  null,
                                  -1,
                                ),
                              ]),
                          )
                        ),
                      ),
                      128,
                    ))
                  : (be(),
                    Ot(
                      ge(Zm),
                      {
                        key: 0,
                        "slides-per-view": 1,
                        breakpoints: {
                          380: { slidesPerView: 2 },
                          480: { slidesPerView: 3 },
                          740: { slidesPerView: 4 },
                          980: { slidesPerView: 5 },
                        },
                      },
                      {
                        default: at(() => [
                          (be(!0),
                          Xe(
                            Ee,
                            null,
                            mi(
                              t.movies,
                              (o) => (
                                be(),
                                Ot(
                                  ge(eg),
                                  { key: o.id },
                                  {
                                    default: at(() => [
                                      W("div", rg, [
                                        de(
                                          i,
                                          { to: `/detail/${o.id}` },
                                          {
                                            default: at(() => {
                                              var l;
                                              return [
                                                W("figure", null, [
                                                  W(
                                                    "img",
                                                    {
                                                      src: `https://image.tmdb.org/t/p/w300/${o.poster_path}`,
                                                      alt: "",
                                                    },
                                                    null,
                                                    8,
                                                    ig,
                                                  ),
                                                ]),
                                                W("div", og, [
                                                  W(
                                                    "div",
                                                    {
                                                      class: _n([
                                                        "progress-circle",
                                                        [
                                                          `p${Math.floor(o.vote_average * 10)}`,
                                                          {
                                                            over50:
                                                              Math.floor(
                                                                o.vote_average *
                                                                  10,
                                                              ) > 50,
                                                          },
                                                        ],
                                                      ]),
                                                    },
                                                    [
                                                      W(
                                                        "span",
                                                        null,
                                                        _t(
                                                          Math.floor(
                                                            o.vote_average * 10,
                                                          ),
                                                        ) + "%",
                                                        1,
                                                      ),
                                                      r[1] ||
                                                        (r[1] = W(
                                                          "div",
                                                          {
                                                            class:
                                                              "left-half-clipper",
                                                          },
                                                          [
                                                            W("div", {
                                                              class:
                                                                "first50-bar",
                                                            }),
                                                            W("div", {
                                                              class:
                                                                "value-bar",
                                                            }),
                                                          ],
                                                          -1,
                                                        )),
                                                    ],
                                                    2,
                                                  ),
                                                  W(
                                                    "strong",
                                                    lg,
                                                    _t(o.title),
                                                    1,
                                                  ),
                                                  W(
                                                    "span",
                                                    ag,
                                                    _t(
                                                      (l = o.release_date) ==
                                                        null
                                                        ? void 0
                                                        : l.replace(/-/gi, "."),
                                                    ),
                                                    1,
                                                  ),
                                                ]),
                                              ];
                                            }),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"],
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                    )),
              ],
              2,
            ),
          ])
        );
      };
    },
  },
  cg = {
    __name: "HomeView",
    setup(e) {
      const t = Sh(),
        {
          playingMoviesLoading: n,
          popularMoviesLoading: s,
          upcomingMoviesLoading: r,
          topRatedMoviesLoading: i,
          playingMovies: o,
          popularMovies: l,
          upcomingMovies: a,
          topRatedMovies: u,
        } = wf(t);
      return (
        Wr(() => {
          t.getNowPlayingMovies(),
            t.getPopularMovies(),
            t.getUpcomingMovies(),
            t.getTopRatedMovies();
        }),
        (c, f) => (
          be(),
          Xe(
            Ee,
            null,
            [
              de(
                _h,
                {
                  movies: ge(l).filter((d) => d.poster_path !== null),
                  loading: ge(s),
                },
                null,
                8,
                ["movies", "loading"],
              ),
              de(
                qn,
                {
                  "sub-title": "Now Moving",
                  title: "상영중인 영화",
                  type: "now_playing",
                  movies: ge(o).filter((d) => d.poster_path !== null),
                  loading: ge(n),
                },
                null,
                8,
                ["movies", "loading"],
              ),
              de(
                qn,
                {
                  "sub-title": "Now Popular",
                  title: "인기있는 영화",
                  type: "popular",
                  movies: ge(l).filter((d) => d.poster_path !== null),
                  loading: ge(s),
                },
                null,
                8,
                ["movies", "loading"],
              ),
              de(
                qn,
                {
                  "sub-title": "Now Upcoming",
                  title: "개봉예정 영화",
                  type: "upcoming",
                  movies: ge(a).filter((d) => d.poster_path !== null),
                  loading: ge(r),
                },
                null,
                8,
                ["movies", "loading"],
              ),
              de(
                qn,
                {
                  "sub-title": "Top Rated",
                  title: "높은 평점을 받은 영화",
                  type: "top_rated",
                  movies: ge(u).filter((d) => d.poster_path !== null),
                  loading: ge(i),
                },
                null,
                8,
                ["movies", "loading"],
              ),
            ],
            64,
          )
        )
      );
    },
  },
  Ga = yd({
    history: Yf("/"),
    routes: [
      { path: "/", name: "home", component: cg, meta: { title: "Home" } },
      {
        path: "/detail/:id",
        name: "detail",
        component: () => co(() => import("./DetailView-CbITMUyb.js"), []),
        meta: { title: "Detail" },
      },
      {
        path: "/movie/:type",
        name: "movieList",
        component: () => co(() => import("./ListView-D2SC0uFJ.js"), []),
        meta: { title: "List" },
      },
    ],
    scrollBehavior(e, t, n) {
      return n || { top: 0 };
    },
  });
Ga.afterEach((e, t) => {
  const n = e.meta.title || "Home";
  document.title = n;
});
const oi = af(Hd);
oi.use(ff());
oi.use(Ga);
oi.mount("#app");
export {
  Ee as F,
  qn as _,
  Xe as a,
  W as b,
  Ce as c,
  rn as d,
  ug as e,
  Wr as f,
  Sd as g,
  Yr as h,
  de as i,
  Ot as j,
  Qr as k,
  ge as l,
  yl as m,
  _n as n,
  be as o,
  at as p,
  ne as q,
  mi as r,
  wf as s,
  _t as t,
  Sh as u,
  sn as w,
};
