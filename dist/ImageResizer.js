var De = Object.defineProperty;
var Le = (e, t, r) => t in e ? De(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => (Le(e, typeof t != "symbol" ? t + "" : t, r), r);
var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Be(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ue(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var he = Ue;
function ze(e) {
  return e;
}
var ue = ze, Fe = he, H = Math.max;
function Ge(e, t, r) {
  return t = H(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, i = -1, n = H(a.length - t, 0), o = Array(n); ++i < n; )
      o[i] = a[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = a[i];
    return s[t] = r(o), Fe(e, this, s);
  };
}
var Re = Ge;
function qe(e) {
  return function() {
    return e;
  };
}
var ke = qe, Ne = typeof S == "object" && S && S.Object === Object && S, de = Ne, He = de, Ke = typeof self == "object" && self && self.Object === Object && self, We = He || Ke || Function("return this")(), y = We, Ve = y, Xe = Ve.Symbol, pe = Xe, K = pe, fe = Object.prototype, Qe = fe.hasOwnProperty, Je = fe.toString, x = K ? K.toStringTag : void 0;
function Ye(e) {
  var t = Qe.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var i = Je.call(e);
  return a && (t ? e[x] = r : delete e[x]), i;
}
var Ze = Ye, et = Object.prototype, tt = et.toString;
function rt(e) {
  return tt.call(e);
}
var at = rt, W = pe, it = Ze, nt = at, st = "[object Null]", ot = "[object Undefined]", V = W ? W.toStringTag : void 0;
function lt(e) {
  return e == null ? e === void 0 ? ot : st : V && V in Object(e) ? it(e) : nt(e);
}
var M = lt;
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var f = ct, ht = M, ut = f, dt = "[object AsyncFunction]", pt = "[object Function]", ft = "[object GeneratorFunction]", vt = "[object Proxy]";
function gt(e) {
  if (!ut(e))
    return !1;
  var t = ht(e);
  return t == pt || t == ft || t == dt || t == vt;
}
var z = gt, yt = y, bt = yt["__core-js_shared__"], _t = bt, U = _t, X = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $t(e) {
  return !!X && X in e;
}
var mt = $t, xt = Function.prototype, Ot = xt.toString;
function Ct(e) {
  if (e != null) {
    try {
      return Ot.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var St = Ct, wt = z, jt = mt, Tt = f, At = St, Mt = /[\\^$.*+?()[\]{}|]/g, Pt = /^\[object .+?Constructor\]$/, It = Function.prototype, Et = Object.prototype, Dt = It.toString, Lt = Et.hasOwnProperty, Bt = RegExp(
  "^" + Dt.call(Lt).replace(Mt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ut(e) {
  if (!Tt(e) || jt(e))
    return !1;
  var t = wt(e) ? Bt : Pt;
  return t.test(At(e));
}
var zt = Ut;
function Ft(e, t) {
  return e == null ? void 0 : e[t];
}
var Gt = Ft, Rt = zt, qt = Gt;
function kt(e, t) {
  var r = qt(e, t);
  return Rt(r) ? r : void 0;
}
var F = kt, Nt = F, Ht = function() {
  try {
    var e = Nt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ve = Ht, Kt = ke, Q = ve, Wt = ue, Vt = Q ? function(e, t) {
  return Q(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kt(t),
    writable: !0
  });
} : Wt, Xt = Vt, Qt = 800, Jt = 16, Yt = Date.now;
function Zt(e) {
  var t = 0, r = 0;
  return function() {
    var a = Yt(), i = Jt - (a - r);
    if (r = a, i > 0) {
      if (++t >= Qt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var er = Zt, tr = Xt, rr = er, ar = rr(tr), ir = ar, nr = ue, sr = Re, or = ir;
function lr(e, t) {
  return or(sr(e, t, nr), e + "");
}
var ge = lr;
function cr() {
  this.__data__ = [], this.size = 0;
}
var hr = cr;
function ur(e, t) {
  return e === t || e !== e && t !== t;
}
var P = ur, dr = P;
function pr(e, t) {
  for (var r = e.length; r--; )
    if (dr(e[r][0], t))
      return r;
  return -1;
}
var I = pr, fr = I, vr = Array.prototype, gr = vr.splice;
function yr(e) {
  var t = this.__data__, r = fr(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : gr.call(t, r, 1), --this.size, !0;
}
var br = yr, _r = I;
function $r(e) {
  var t = this.__data__, r = _r(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var mr = $r, xr = I;
function Or(e) {
  return xr(this.__data__, e) > -1;
}
var Cr = Or, Sr = I;
function wr(e, t) {
  var r = this.__data__, a = Sr(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var jr = wr, Tr = hr, Ar = br, Mr = mr, Pr = Cr, Ir = jr;
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = Tr;
b.prototype.delete = Ar;
b.prototype.get = Mr;
b.prototype.has = Pr;
b.prototype.set = Ir;
var E = b, Er = E;
function Dr() {
  this.__data__ = new Er(), this.size = 0;
}
var Lr = Dr;
function Br(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Ur = Br;
function zr(e) {
  return this.__data__.get(e);
}
var Fr = zr;
function Gr(e) {
  return this.__data__.has(e);
}
var Rr = Gr, qr = F, kr = y, Nr = qr(kr, "Map"), ye = Nr, Hr = F, Kr = Hr(Object, "create"), D = Kr, J = D;
function Wr() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
}
var Vr = Wr;
function Xr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qr = Xr, Jr = D, Yr = "__lodash_hash_undefined__", Zr = Object.prototype, ea = Zr.hasOwnProperty;
function ta(e) {
  var t = this.__data__;
  if (Jr) {
    var r = t[e];
    return r === Yr ? void 0 : r;
  }
  return ea.call(t, e) ? t[e] : void 0;
}
var ra = ta, aa = D, ia = Object.prototype, na = ia.hasOwnProperty;
function sa(e) {
  var t = this.__data__;
  return aa ? t[e] !== void 0 : na.call(t, e);
}
var oa = sa, la = D, ca = "__lodash_hash_undefined__";
function ha(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = la && t === void 0 ? ca : t, this;
}
var ua = ha, da = Vr, pa = Qr, fa = ra, va = oa, ga = ua;
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = da;
_.prototype.delete = pa;
_.prototype.get = fa;
_.prototype.has = va;
_.prototype.set = ga;
var ya = _, Y = ya, ba = E, _a = ye;
function $a() {
  this.size = 0, this.__data__ = {
    hash: new Y(),
    map: new (_a || ba)(),
    string: new Y()
  };
}
var ma = $a;
function xa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Oa = xa, Ca = Oa;
function Sa(e, t) {
  var r = e.__data__;
  return Ca(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var L = Sa, wa = L;
function ja(e) {
  var t = wa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ta = ja, Aa = L;
function Ma(e) {
  return Aa(this, e).get(e);
}
var Pa = Ma, Ia = L;
function Ea(e) {
  return Ia(this, e).has(e);
}
var Da = Ea, La = L;
function Ba(e, t) {
  var r = La(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Ua = Ba, za = ma, Fa = Ta, Ga = Pa, Ra = Da, qa = Ua;
function $(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
$.prototype.clear = za;
$.prototype.delete = Fa;
$.prototype.get = Ga;
$.prototype.has = Ra;
$.prototype.set = qa;
var ka = $, Na = E, Ha = ye, Ka = ka, Wa = 200;
function Va(e, t) {
  var r = this.__data__;
  if (r instanceof Na) {
    var a = r.__data__;
    if (!Ha || a.length < Wa - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ka(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Xa = Va, Qa = E, Ja = Lr, Ya = Ur, Za = Fr, ei = Rr, ti = Xa;
function m(e) {
  var t = this.__data__ = new Qa(e);
  this.size = t.size;
}
m.prototype.clear = Ja;
m.prototype.delete = Ya;
m.prototype.get = Za;
m.prototype.has = ei;
m.prototype.set = ti;
var ri = m, Z = ve;
function ai(e, t, r) {
  t == "__proto__" && Z ? Z(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var G = ai, ii = G, ni = P;
function si(e, t, r) {
  (r !== void 0 && !ni(e[t], r) || r === void 0 && !(t in e)) && ii(e, t, r);
}
var be = si;
function oi(e) {
  return function(t, r, a) {
    for (var i = -1, n = Object(t), o = a(t), s = o.length; s--; ) {
      var c = o[e ? s : ++i];
      if (r(n[c], c, n) === !1)
        break;
    }
    return t;
  };
}
var li = oi, ci = li, hi = ci(), ui = hi, j = { exports: {} };
j.exports;
(function(e, t) {
  var r = y, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, o = n ? r.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var p = u.length, v = s ? s(p) : new u.constructor(p);
    return u.copy(v), v;
  }
  e.exports = c;
})(j, j.exports);
var di = j.exports, pi = y, fi = pi.Uint8Array, vi = fi, ee = vi;
function gi(e) {
  var t = new e.constructor(e.byteLength);
  return new ee(t).set(new ee(e)), t;
}
var yi = gi, bi = yi;
function _i(e, t) {
  var r = t ? bi(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var $i = _i;
function mi(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var xi = mi, Oi = f, te = Object.create, Ci = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Oi(t))
      return {};
    if (te)
      return te(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Si = Ci;
function wi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ji = wi, Ti = ji, Ai = Ti(Object.getPrototypeOf, Object), _e = Ai, Mi = Object.prototype;
function Pi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mi;
  return e === r;
}
var $e = Pi, Ii = Si, Ei = _e, Di = $e;
function Li(e) {
  return typeof e.constructor == "function" && !Di(e) ? Ii(Ei(e)) : {};
}
var Bi = Li;
function Ui(e) {
  return e != null && typeof e == "object";
}
var C = Ui, zi = M, Fi = C, Gi = "[object Arguments]";
function Ri(e) {
  return Fi(e) && zi(e) == Gi;
}
var qi = Ri, re = qi, ki = C, me = Object.prototype, Ni = me.hasOwnProperty, Hi = me.propertyIsEnumerable, Ki = re(/* @__PURE__ */ function() {
  return arguments;
}()) ? re : function(e) {
  return ki(e) && Ni.call(e, "callee") && !Hi.call(e, "callee");
}, xe = Ki, Wi = Array.isArray, Oe = Wi, Vi = 9007199254740991;
function Xi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vi;
}
var Ce = Xi, Qi = z, Ji = Ce;
function Yi(e) {
  return e != null && Ji(e.length) && !Qi(e);
}
var R = Yi, Zi = R, en = C;
function tn(e) {
  return en(e) && Zi(e);
}
var rn = tn, T = { exports: {} };
function an() {
  return !1;
}
var nn = an;
T.exports;
(function(e, t) {
  var r = y, a = nn, i = t && !t.nodeType && t, n = i && !0 && e && !e.nodeType && e, o = n && n.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || a;
  e.exports = u;
})(T, T.exports);
var Se = T.exports, sn = M, on = _e, ln = C, cn = "[object Object]", hn = Function.prototype, un = Object.prototype, we = hn.toString, dn = un.hasOwnProperty, pn = we.call(Object);
function fn(e) {
  if (!ln(e) || sn(e) != cn)
    return !1;
  var t = on(e);
  if (t === null)
    return !0;
  var r = dn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && we.call(r) == pn;
}
var vn = fn, gn = M, yn = Ce, bn = C, _n = "[object Arguments]", $n = "[object Array]", mn = "[object Boolean]", xn = "[object Date]", On = "[object Error]", Cn = "[object Function]", Sn = "[object Map]", wn = "[object Number]", jn = "[object Object]", Tn = "[object RegExp]", An = "[object Set]", Mn = "[object String]", Pn = "[object WeakMap]", In = "[object ArrayBuffer]", En = "[object DataView]", Dn = "[object Float32Array]", Ln = "[object Float64Array]", Bn = "[object Int8Array]", Un = "[object Int16Array]", zn = "[object Int32Array]", Fn = "[object Uint8Array]", Gn = "[object Uint8ClampedArray]", Rn = "[object Uint16Array]", qn = "[object Uint32Array]", h = {};
h[Dn] = h[Ln] = h[Bn] = h[Un] = h[zn] = h[Fn] = h[Gn] = h[Rn] = h[qn] = !0;
h[_n] = h[$n] = h[In] = h[mn] = h[En] = h[xn] = h[On] = h[Cn] = h[Sn] = h[wn] = h[jn] = h[Tn] = h[An] = h[Mn] = h[Pn] = !1;
function kn(e) {
  return bn(e) && yn(e.length) && !!h[gn(e)];
}
var Nn = kn;
function Hn(e) {
  return function(t) {
    return e(t);
  };
}
var Kn = Hn, A = { exports: {} };
A.exports;
(function(e, t) {
  var r = de, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, o = n && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(A, A.exports);
var Wn = A.exports, Vn = Nn, Xn = Kn, ae = Wn, ie = ae && ae.isTypedArray, Qn = ie ? Xn(ie) : Vn, je = Qn;
function Jn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Te = Jn, Yn = G, Zn = P, es = Object.prototype, ts = es.hasOwnProperty;
function rs(e, t, r) {
  var a = e[t];
  (!(ts.call(e, t) && Zn(a, r)) || r === void 0 && !(t in e)) && Yn(e, t, r);
}
var as = rs, is = as, ns = G;
function ss(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var n = -1, o = t.length; ++n < o; ) {
    var s = t[n], c = a ? a(r[s], e[s], s, r, e) : void 0;
    c === void 0 && (c = e[s]), i ? ns(r, s, c) : is(r, s, c);
  }
  return r;
}
var os = ss;
function ls(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var cs = ls, hs = 9007199254740991, us = /^(?:0|[1-9]\d*)$/;
function ds(e, t) {
  var r = typeof e;
  return t = t ?? hs, !!t && (r == "number" || r != "symbol" && us.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ae = ds, ps = cs, fs = xe, vs = Oe, gs = Se, ys = Ae, bs = je, _s = Object.prototype, $s = _s.hasOwnProperty;
function ms(e, t) {
  var r = vs(e), a = !r && fs(e), i = !r && !a && gs(e), n = !r && !a && !i && bs(e), o = r || a || i || n, s = o ? ps(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || $s.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ys(u, c))) && s.push(u);
  return s;
}
var xs = ms;
function Os(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Cs = Os, Ss = f, ws = $e, js = Cs, Ts = Object.prototype, As = Ts.hasOwnProperty;
function Ms(e) {
  if (!Ss(e))
    return js(e);
  var t = ws(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !As.call(e, a)) || r.push(a);
  return r;
}
var Ps = Ms, Is = xs, Es = Ps, Ds = R;
function Ls(e) {
  return Ds(e) ? Is(e, !0) : Es(e);
}
var Me = Ls, Bs = os, Us = Me;
function zs(e) {
  return Bs(e, Us(e));
}
var Fs = zs, ne = be, Gs = di, Rs = $i, qs = xi, ks = Bi, se = xe, oe = Oe, Ns = rn, Hs = Se, Ks = z, Ws = f, Vs = vn, Xs = je, le = Te, Qs = Fs;
function Js(e, t, r, a, i, n, o) {
  var s = le(e, r), c = le(t, r), u = o.get(c);
  if (u) {
    ne(e, r, u);
    return;
  }
  var d = n ? n(s, c, r + "", e, t, o) : void 0, p = d === void 0;
  if (p) {
    var v = oe(c), B = !v && Hs(c), N = !v && !B && Xs(c);
    d = c, v || B || N ? oe(s) ? d = s : Ns(s) ? d = qs(s) : B ? (p = !1, d = Gs(c, !0)) : N ? (p = !1, d = Rs(c, !0)) : d = [] : Vs(c) || se(c) ? (d = s, se(s) ? d = Qs(s) : (!Ws(s) || Ks(s)) && (d = ks(c))) : p = !1;
  }
  p && (o.set(c, d), i(d, c, a, n, o), o.delete(c)), ne(e, r, d);
}
var Ys = Js, Zs = ri, eo = be, to = ui, ro = Ys, ao = f, io = Me, no = Te;
function Pe(e, t, r, a, i) {
  e !== t && to(t, function(n, o) {
    if (i || (i = new Zs()), ao(n))
      ro(e, t, o, r, Pe, a, i);
    else {
      var s = a ? a(no(e, o), n, o + "", e, t, i) : void 0;
      s === void 0 && (s = n), eo(e, o, s);
    }
  }, io);
}
var Ie = Pe, so = Ie, ce = f;
function Ee(e, t, r, a, i, n) {
  return ce(e) && ce(t) && (n.set(t, e), so(e, t, void 0, Ee, n), n.delete(t)), e;
}
var oo = Ee, lo = P, co = R, ho = Ae, uo = f;
function po(e, t, r) {
  if (!uo(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? co(r) && ho(t, r.length) : a == "string" && t in r) ? lo(r[t], e) : !1;
}
var fo = po, vo = ge, go = fo;
function yo(e) {
  return vo(function(t, r) {
    var a = -1, i = r.length, n = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
    for (n = e.length > 3 && typeof n == "function" ? (i--, n) : void 0, o && go(r[0], r[1], o) && (n = i < 3 ? void 0 : n, i = 1), t = Object(t); ++a < i; ) {
      var s = r[a];
      s && e(t, s, a, n);
    }
    return t;
  });
}
var bo = yo, _o = Ie, $o = bo, mo = $o(function(e, t, r, a) {
  _o(e, t, r, a);
}), xo = mo, Oo = he, Co = ge, So = oo, wo = xo, jo = Co(function(e) {
  return e.push(void 0, So), Oo(wo, void 0, e);
}), To = jo;
const Ao = /* @__PURE__ */ Be(To), Mo = {
  modules: ["DisplaySize", "Toolbar", "Resize"],
  overlayStyles: {
    position: "absolute",
    boxSizing: "border-box",
    border: "1px dashed #444"
  },
  handleStyles: {
    position: "absolute",
    height: "12px",
    width: "12px",
    backgroundColor: "white",
    border: "1px solid #777",
    boxSizing: "border-box",
    opacity: "0.80"
  },
  displayStyles: {
    position: "absolute",
    font: "12px/1.0 Arial, Helvetica, sans-serif",
    padding: "4px 8px",
    textAlign: "center",
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #777",
    boxSizing: "border-box",
    opacity: "0.80",
    cursor: "default"
  },
  toolbarStyles: {
    position: "absolute",
    top: "-12px",
    right: "0",
    left: "0",
    height: "0",
    minWidth: "100px",
    font: "12px/1.0 Arial, Helvetica, sans-serif",
    textAlign: "center",
    color: "#333",
    boxSizing: "border-box",
    cursor: "default"
  },
  toolbarButtonStyles: {
    display: "inline-block",
    width: "24px",
    height: "24px",
    background: "white",
    border: "1px solid #999",
    verticalAlign: "middle"
  },
  toolbarButtonSvgStyles: {
    fill: "#444",
    stroke: "#444",
    strokeWidth: "2"
  }
};
class q {
  constructor(t) {
    /*
            requestUpdate (passed in by the library during construction, above) can be used to let the library know that
            you've changed something about the image that would require re-calculating the overlay (and all of its child
            elements)
    
            For example, if you add a margin to the element, you'll want to call this or else all the controls will be
            misaligned on-screen.
         */
    /*
            onCreate will be called when the element is clicked on
    
            If the module has any user controls, it should create any containers that it'll need here.
            The overlay has absolute positioning, and will be automatically repositioned and resized as needed, so you can
            use your own absolute positioning and the 'top', 'right', etc. styles to be positioned relative to the element
            on-screen.
         */
    l(this, "onCreate", () => {
    });
    /*
            onDestroy will be called when the element is de-selected, or when this module otherwise needs to tidy up.
    
            If you created any DOM elements in onCreate, please remove them from the DOM and destroy them here.
         */
    l(this, "onDestroy", () => {
    });
    /*
            onUpdate will be called any time that the element is changed (e.g. resized, aligned, etc.)
    
            This frequently happens during resize dragging, so keep computations light while here to ensure a smooth
            user experience.
         */
    l(this, "onUpdate", () => {
    });
    this.overlay = t.overlay, this.img = t.img, this.options = t.options, this.requestUpdate = t.onUpdate;
  }
}
class Po extends q {
  constructor() {
    super(...arguments);
    l(this, "onCreate", () => {
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), this.overlay.appendChild(this.display);
    });
    l(this, "onDestroy", () => {
    });
    l(this, "onUpdate", () => {
      if (!this.display || !this.img)
        return;
      const r = this.getCurrentSize();
      if (this.display.innerHTML = r.join(" &times; "), r[0] > 120 && r[1] > 30)
        Object.assign(this.display.style, {
          right: "4px",
          bottom: "4px",
          left: "auto"
        });
      else if (this.img.style.float == "right") {
        const a = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: "auto",
          bottom: `-${a.height + 4}px`,
          left: `-${a.width + 4}px`
        });
      } else {
        const a = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: `-${a.width + 4}px`,
          bottom: `-${a.height + 4}px`,
          left: "auto"
        });
      }
    });
    l(this, "getCurrentSize", () => [this.img.width, Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight)]);
  }
}
const Io = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, Eo = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, Do = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`, k = window.Quill.imports.parchment, g = new k.StyleAttributor("float", "float"), O = new k.StyleAttributor("margin", "margin"), w = new k.StyleAttributor("display", "display");
class Lo extends q {
  constructor() {
    super(...arguments);
    l(this, "onCreate", () => {
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), this.overlay.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    });
    // The toolbar and its children will be destroyed when the overlay is removed
    l(this, "onDestroy", () => {
    });
    // Nothing to update on drag because we are are positioned relative to the overlay
    l(this, "onUpdate", () => {
    });
    l(this, "_defineAlignments", () => {
      this.alignments = [
        {
          icon: Io,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "left"), O.add(this.img, "0 1em 1em 0");
          },
          isApplied: () => g.value(this.img) == "left"
        },
        {
          icon: Eo,
          apply: () => {
            w.add(this.img, "block"), g.remove(this.img), O.add(this.img, "auto");
          },
          isApplied: () => O.value(this.img) == "auto"
        },
        {
          icon: Do,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "right"), O.add(this.img, "0 0 1em 1em");
          },
          isApplied: () => g.value(this.img) == "right"
        }
      ];
    });
    l(this, "_addToolbarButtons", () => {
      const r = [];
      this.alignments.forEach((a, i) => {
        const n = document.createElement("span");
        r.push(n), n.innerHTML = a.icon, n.addEventListener("click", () => {
          r.forEach((o) => o.style.filter = ""), a.isApplied() ? (g.remove(this.img), O.remove(this.img), w.remove(this.img)) : (this._selectButton(n), a.apply()), this.requestUpdate();
        }), Object.assign(n.style, this.options.toolbarButtonStyles), i > 0 && (n.style.borderLeftWidth = "0"), Object.assign(n.children[0].style, this.options.toolbarButtonSvgStyles), a.isApplied() && this._selectButton(n), this.toolbar.appendChild(n);
      });
    });
    l(this, "_selectButton", (r) => {
      r.style.filter = "invert(20%)";
    });
  }
}
class Bo extends q {
  constructor() {
    super(...arguments);
    l(this, "onCreate", () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    });
    l(this, "onDestroy", () => {
      this.setCursor("");
    });
    l(this, "positionBoxes", () => {
      const r = `${-parseFloat(this.options.handleStyles.width) / 2}px`, a = `${-parseFloat(this.options.handleStyles.height) / 2}px`;
      [
        { left: r, top: a },
        // top left
        { right: r, top: a },
        // top right
        { right: r, bottom: a },
        // bottom right
        { left: r, bottom: a }
        // bottom left
      ].forEach((i, n) => {
        Object.assign(this.boxes[n].style, i);
      });
    });
    l(this, "addBox", (r) => {
      const a = document.createElement("div");
      Object.assign(a.style, this.options.handleStyles), a.style.cursor = r, a.style.width = `${this.options.handleStyles.width}px`, a.style.height = `${this.options.handleStyles.height}px`, a.addEventListener("mousedown", this.handleMousedown, !1), this.overlay.appendChild(a), this.boxes.push(a);
    });
    l(this, "handleMousedown", (r) => {
      this.dragBox = r.target, this.dragStartX = r.clientX, this.preDragWidth = this.img.width || this.img.naturalWidth, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    });
    l(this, "handleMouseup", () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    });
    l(this, "handleDrag", (r) => {
      if (!this.img)
        return;
      const a = r.clientX - this.dragStartX;
      this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3] ? this.img.width = Math.round(this.preDragWidth - a) : this.img.width = Math.round(this.preDragWidth + a), this.requestUpdate();
    });
    l(this, "setCursor", (r) => {
      [document.body, this.img].forEach((a) => {
        a.style.cursor = r;
      });
    });
  }
}
const Uo = { DisplaySize: Po, Toolbar: Lo, Resize: Bo };
class zo {
  constructor(t, r = {}) {
    l(this, "onUpdate", () => {
      this.repositionElements(), this.modules.forEach((t) => {
        t.onUpdate();
      });
    });
    l(this, "removeModules", () => {
      this.modules.forEach((t) => {
        t.onDestroy();
      }), this.modules = [];
    });
    l(this, "handleClick", (t) => {
      if (t.target && t.target.tagName && t.target.tagName.toUpperCase() === "IMG") {
        if (this.img === t.target)
          return;
        this.img && this.hide(), this.show(t.target);
      } else
        this.img && this.hide();
    });
    l(this, "show", (t) => {
      this.img = t, this.showOverlay(), this.initializeModules();
    });
    l(this, "showOverlay", () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImage, !0), this.quill.root.addEventListener("input", this.checkImage, !0), this.overlay = document.createElement("div"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
    });
    l(this, "hideOverlay", () => {
      this.overlay && (this.quill.root.parentNode.removeChild(this.overlay), this.overlay = void 0, document.removeEventListener("keyup", this.checkImage), this.quill.root.removeEventListener("input", this.checkImage), this.setUserSelect(""));
    });
    l(this, "repositionElements", () => {
      if (!this.overlay || !this.img)
        return;
      const t = this.quill.root.parentNode, r = this.img.getBoundingClientRect(), a = t.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${r.left - a.left - 1 + t.scrollLeft}px`,
        top: `${r.top - a.top + t.scrollTop}px`,
        width: `${r.width}px`,
        height: `${r.height}px`
      });
    });
    l(this, "hide", () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    });
    l(this, "setUserSelect", (t) => {
      ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach((r) => {
        this.quill.root.style[r] = t, document.documentElement.style[r] = t;
      });
    });
    l(this, "checkImage", (t) => {
      this.img && ((t.keyCode == 46 || t.keyCode == 8) && window.Quill.find(this.img).deleteAt(0), this.hide());
    });
    this.initializeModules = this.initializeModules.bind(this), this.quill = t;
    let a = !1;
    r.modules && (a = r.modules.slice()), this.options = Ao({}, r, Mo), a !== !1 && (this.options.modules = a), this.quill.root.addEventListener("click", this.handleClick, !1), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = [];
  }
  initializeModules() {
    this.removeModules(), this.modules = this.moduleClasses.map((t) => new (Uo[t] || t)(this)), this.modules.forEach((t) => {
      t.onCreate();
    }), this.onUpdate();
  }
}
window.Quill && (console.log("testitest"), window.Quill.register("modules/imageResizer", zo));
export {
  zo as default
};
