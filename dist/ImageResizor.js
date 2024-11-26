var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Le(e) {
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
var de = Ue;
function Fe(e) {
  return e;
}
var pe = Fe, ze = de, K = Math.max;
function Ge(e, t, r) {
  return t = K(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, s = -1, i = K(a.length - t, 0), n = Array(i); ++s < i; )
      n[s] = a[t + s];
    s = -1;
    for (var o = Array(t + 1); ++s < t; )
      o[s] = a[s];
    return o[t] = r(n), ze(e, this, o);
  };
}
var qe = Ge;
function ke(e) {
  return function() {
    return e;
  };
}
var Re = ke, He = typeof S == "object" && S && S.Object === Object && S, fe = He, Ne = fe, Ke = typeof self == "object" && self && self.Object === Object && self, We = Ne || Ke || Function("return this")(), g = We, Xe = g, Ve = Xe.Symbol, ve = Ve, W = ve, ge = Object.prototype, Qe = ge.hasOwnProperty, Je = ge.toString, m = W ? W.toStringTag : void 0;
function Ye(e) {
  var t = Qe.call(e, m), r = e[m];
  try {
    e[m] = void 0;
    var a = !0;
  } catch {
  }
  var s = Je.call(e);
  return a && (t ? e[m] = r : delete e[m]), s;
}
var Ze = Ye, et = Object.prototype, tt = et.toString;
function rt(e) {
  return tt.call(e);
}
var at = rt, X = ve, it = Ze, st = at, nt = "[object Null]", ot = "[object Undefined]", V = X ? X.toStringTag : void 0;
function lt(e) {
  return e == null ? e === void 0 ? ot : nt : V && V in Object(e) ? it(e) : st(e);
}
var M = lt;
function ht(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var p = ht, ct = M, ut = p, dt = "[object AsyncFunction]", pt = "[object Function]", ft = "[object GeneratorFunction]", vt = "[object Proxy]";
function gt(e) {
  if (!ut(e))
    return !1;
  var t = ct(e);
  return t == pt || t == ft || t == dt || t == vt;
}
var z = gt, yt = g, bt = yt["__core-js_shared__"], _t = bt, U = _t, Q = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $t(e) {
  return !!Q && Q in e;
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
var St = Ct, wt = z, jt = mt, Tt = p, At = St, Mt = /[\\^$.*+?()[\]{}|]/g, It = /^\[object .+?Constructor\]$/, Pt = Function.prototype, Et = Object.prototype, Dt = Pt.toString, Bt = Et.hasOwnProperty, Lt = RegExp(
  "^" + Dt.call(Bt).replace(Mt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ut(e) {
  if (!Tt(e) || jt(e))
    return !1;
  var t = wt(e) ? Lt : It;
  return t.test(At(e));
}
var Ft = Ut;
function zt(e, t) {
  return e == null ? void 0 : e[t];
}
var Gt = zt, qt = Ft, kt = Gt;
function Rt(e, t) {
  var r = kt(e, t);
  return qt(r) ? r : void 0;
}
var G = Rt, Ht = G, Nt = function() {
  try {
    var e = Ht(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ye = Nt, Kt = Re, J = ye, Wt = pe, Xt = J ? function(e, t) {
  return J(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kt(t),
    writable: !0
  });
} : Wt, Vt = Xt, Qt = 800, Jt = 16, Yt = Date.now;
function Zt(e) {
  var t = 0, r = 0;
  return function() {
    var a = Yt(), s = Jt - (a - r);
    if (r = a, s > 0) {
      if (++t >= Qt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var er = Zt, tr = Vt, rr = er, ar = rr(tr), ir = ar, sr = pe, nr = qe, or = ir;
function lr(e, t) {
  return or(nr(e, t, sr), e + "");
}
var be = lr;
function hr() {
  this.__data__ = [], this.size = 0;
}
var cr = hr;
function ur(e, t) {
  return e === t || e !== e && t !== t;
}
var I = ur, dr = I;
function pr(e, t) {
  for (var r = e.length; r--; )
    if (dr(e[r][0], t))
      return r;
  return -1;
}
var P = pr, fr = P, vr = Array.prototype, gr = vr.splice;
function yr(e) {
  var t = this.__data__, r = fr(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : gr.call(t, r, 1), --this.size, !0;
}
var br = yr, _r = P;
function $r(e) {
  var t = this.__data__, r = _r(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var mr = $r, xr = P;
function Or(e) {
  return xr(this.__data__, e) > -1;
}
var Cr = Or, Sr = P;
function wr(e, t) {
  var r = this.__data__, a = Sr(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var jr = wr, Tr = cr, Ar = br, Mr = mr, Ir = Cr, Pr = jr;
function y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
y.prototype.clear = Tr;
y.prototype.delete = Ar;
y.prototype.get = Mr;
y.prototype.has = Ir;
y.prototype.set = Pr;
var E = y, Er = E;
function Dr() {
  this.__data__ = new Er(), this.size = 0;
}
var Br = Dr;
function Lr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Ur = Lr;
function Fr(e) {
  return this.__data__.get(e);
}
var zr = Fr;
function Gr(e) {
  return this.__data__.has(e);
}
var qr = Gr, kr = G, Rr = g, Hr = kr(Rr, "Map"), _e = Hr, Nr = G, Kr = Nr(Object, "create"), D = Kr, Y = D;
function Wr() {
  this.__data__ = Y ? Y(null) : {}, this.size = 0;
}
var Xr = Wr;
function Vr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qr = Vr, Jr = D, Yr = "__lodash_hash_undefined__", Zr = Object.prototype, ea = Zr.hasOwnProperty;
function ta(e) {
  var t = this.__data__;
  if (Jr) {
    var r = t[e];
    return r === Yr ? void 0 : r;
  }
  return ea.call(t, e) ? t[e] : void 0;
}
var ra = ta, aa = D, ia = Object.prototype, sa = ia.hasOwnProperty;
function na(e) {
  var t = this.__data__;
  return aa ? t[e] !== void 0 : sa.call(t, e);
}
var oa = na, la = D, ha = "__lodash_hash_undefined__";
function ca(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = la && t === void 0 ? ha : t, this;
}
var ua = ca, da = Xr, pa = Qr, fa = ra, va = oa, ga = ua;
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = da;
b.prototype.delete = pa;
b.prototype.get = fa;
b.prototype.has = va;
b.prototype.set = ga;
var ya = b, Z = ya, ba = E, _a = _e;
function $a() {
  this.size = 0, this.__data__ = {
    hash: new Z(),
    map: new (_a || ba)(),
    string: new Z()
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
var B = Sa, wa = B;
function ja(e) {
  var t = wa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ta = ja, Aa = B;
function Ma(e) {
  return Aa(this, e).get(e);
}
var Ia = Ma, Pa = B;
function Ea(e) {
  return Pa(this, e).has(e);
}
var Da = Ea, Ba = B;
function La(e, t) {
  var r = Ba(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Ua = La, Fa = ma, za = Ta, Ga = Ia, qa = Da, ka = Ua;
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = Fa;
_.prototype.delete = za;
_.prototype.get = Ga;
_.prototype.has = qa;
_.prototype.set = ka;
var Ra = _, Ha = E, Na = _e, Ka = Ra, Wa = 200;
function Xa(e, t) {
  var r = this.__data__;
  if (r instanceof Ha) {
    var a = r.__data__;
    if (!Na || a.length < Wa - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ka(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Va = Xa, Qa = E, Ja = Br, Ya = Ur, Za = zr, ei = qr, ti = Va;
function $(e) {
  var t = this.__data__ = new Qa(e);
  this.size = t.size;
}
$.prototype.clear = Ja;
$.prototype.delete = Ya;
$.prototype.get = Za;
$.prototype.has = ei;
$.prototype.set = ti;
var ri = $, ee = ye;
function ai(e, t, r) {
  t == "__proto__" && ee ? ee(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var q = ai, ii = q, si = I;
function ni(e, t, r) {
  (r !== void 0 && !si(e[t], r) || r === void 0 && !(t in e)) && ii(e, t, r);
}
var $e = ni;
function oi(e) {
  return function(t, r, a) {
    for (var s = -1, i = Object(t), n = a(t), o = n.length; o--; ) {
      var l = n[e ? o : ++s];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var li = oi, hi = li, ci = hi(), ui = ci, j = { exports: {} };
j.exports;
(function(e, t) {
  var r = g, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = o ? o(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(j, j.exports);
var di = j.exports, pi = g, fi = pi.Uint8Array, vi = fi, te = vi;
function gi(e) {
  var t = new e.constructor(e.byteLength);
  return new te(t).set(new te(e)), t;
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
var xi = mi, Oi = p, re = Object.create, Ci = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Oi(t))
      return {};
    if (re)
      return re(t);
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
var ji = wi, Ti = ji, Ai = Ti(Object.getPrototypeOf, Object), me = Ai, Mi = Object.prototype;
function Ii(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mi;
  return e === r;
}
var xe = Ii, Pi = Si, Ei = me, Di = xe;
function Bi(e) {
  return typeof e.constructor == "function" && !Di(e) ? Pi(Ei(e)) : {};
}
var Li = Bi;
function Ui(e) {
  return e != null && typeof e == "object";
}
var C = Ui, Fi = M, zi = C, Gi = "[object Arguments]";
function qi(e) {
  return zi(e) && Fi(e) == Gi;
}
var ki = qi, ae = ki, Ri = C, Oe = Object.prototype, Hi = Oe.hasOwnProperty, Ni = Oe.propertyIsEnumerable, Ki = ae(/* @__PURE__ */ function() {
  return arguments;
}()) ? ae : function(e) {
  return Ri(e) && Hi.call(e, "callee") && !Ni.call(e, "callee");
}, Ce = Ki, Wi = Array.isArray, Se = Wi, Xi = 9007199254740991;
function Vi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xi;
}
var we = Vi, Qi = z, Ji = we;
function Yi(e) {
  return e != null && Ji(e.length) && !Qi(e);
}
var k = Yi, Zi = k, es = C;
function ts(e) {
  return es(e) && Zi(e);
}
var rs = ts, T = { exports: {} };
function as() {
  return !1;
}
var is = as;
T.exports;
(function(e, t) {
  var r = g, a = is, s = t && !t.nodeType && t, i = s && !0 && e && !e.nodeType && e, n = i && i.exports === s, o = n ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || a;
  e.exports = c;
})(T, T.exports);
var je = T.exports, ss = M, ns = me, os = C, ls = "[object Object]", hs = Function.prototype, cs = Object.prototype, Te = hs.toString, us = cs.hasOwnProperty, ds = Te.call(Object);
function ps(e) {
  if (!os(e) || ss(e) != ls)
    return !1;
  var t = ns(e);
  if (t === null)
    return !0;
  var r = us.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Te.call(r) == ds;
}
var fs = ps, vs = M, gs = we, ys = C, bs = "[object Arguments]", _s = "[object Array]", $s = "[object Boolean]", ms = "[object Date]", xs = "[object Error]", Os = "[object Function]", Cs = "[object Map]", Ss = "[object Number]", ws = "[object Object]", js = "[object RegExp]", Ts = "[object Set]", As = "[object String]", Ms = "[object WeakMap]", Is = "[object ArrayBuffer]", Ps = "[object DataView]", Es = "[object Float32Array]", Ds = "[object Float64Array]", Bs = "[object Int8Array]", Ls = "[object Int16Array]", Us = "[object Int32Array]", Fs = "[object Uint8Array]", zs = "[object Uint8ClampedArray]", Gs = "[object Uint16Array]", qs = "[object Uint32Array]", h = {};
h[Es] = h[Ds] = h[Bs] = h[Ls] = h[Us] = h[Fs] = h[zs] = h[Gs] = h[qs] = !0;
h[bs] = h[_s] = h[Is] = h[$s] = h[Ps] = h[ms] = h[xs] = h[Os] = h[Cs] = h[Ss] = h[ws] = h[js] = h[Ts] = h[As] = h[Ms] = !1;
function ks(e) {
  return ys(e) && gs(e.length) && !!h[vs(e)];
}
var Rs = ks;
function Hs(e) {
  return function(t) {
    return e(t);
  };
}
var Ns = Hs, A = { exports: {} };
A.exports;
(function(e, t) {
  var r = fe, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i && r.process, o = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(A, A.exports);
var Ks = A.exports, Ws = Rs, Xs = Ns, ie = Ks, se = ie && ie.isTypedArray, Vs = se ? Xs(se) : Ws, Ae = Vs;
function Qs(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Me = Qs, Js = q, Ys = I, Zs = Object.prototype, en = Zs.hasOwnProperty;
function tn(e, t, r) {
  var a = e[t];
  (!(en.call(e, t) && Ys(a, r)) || r === void 0 && !(t in e)) && Js(e, t, r);
}
var rn = tn, an = rn, sn = q;
function nn(e, t, r, a) {
  var s = !r;
  r || (r = {});
  for (var i = -1, n = t.length; ++i < n; ) {
    var o = t[i], l = a ? a(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), s ? sn(r, o, l) : an(r, o, l);
  }
  return r;
}
var on = nn;
function ln(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var hn = ln, cn = 9007199254740991, un = /^(?:0|[1-9]\d*)$/;
function dn(e, t) {
  var r = typeof e;
  return t = t ?? cn, !!t && (r == "number" || r != "symbol" && un.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ie = dn, pn = hn, fn = Ce, vn = Se, gn = je, yn = Ie, bn = Ae, _n = Object.prototype, $n = _n.hasOwnProperty;
function mn(e, t) {
  var r = vn(e), a = !r && fn(e), s = !r && !a && gn(e), i = !r && !a && !s && bn(e), n = r || a || s || i, o = n ? pn(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || $n.call(e, c)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    yn(c, l))) && o.push(c);
  return o;
}
var xn = mn;
function On(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Cn = On, Sn = p, wn = xe, jn = Cn, Tn = Object.prototype, An = Tn.hasOwnProperty;
function Mn(e) {
  if (!Sn(e))
    return jn(e);
  var t = wn(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !An.call(e, a)) || r.push(a);
  return r;
}
var In = Mn, Pn = xn, En = In, Dn = k;
function Bn(e) {
  return Dn(e) ? Pn(e, !0) : En(e);
}
var Pe = Bn, Ln = on, Un = Pe;
function Fn(e) {
  return Ln(e, Un(e));
}
var zn = Fn, ne = $e, Gn = di, qn = $i, kn = xi, Rn = Li, oe = Ce, le = Se, Hn = rs, Nn = je, Kn = z, Wn = p, Xn = fs, Vn = Ae, he = Me, Qn = zn;
function Jn(e, t, r, a, s, i, n) {
  var o = he(e, r), l = he(t, r), c = n.get(l);
  if (c) {
    ne(e, r, c);
    return;
  }
  var u = i ? i(o, l, r + "", e, t, n) : void 0, d = u === void 0;
  if (d) {
    var f = le(l), L = !f && Nn(l), N = !f && !L && Vn(l);
    u = l, f || L || N ? le(o) ? u = o : Hn(o) ? u = kn(o) : L ? (d = !1, u = Gn(l, !0)) : N ? (d = !1, u = qn(l, !0)) : u = [] : Xn(l) || oe(l) ? (u = o, oe(o) ? u = Qn(o) : (!Wn(o) || Kn(o)) && (u = Rn(l))) : d = !1;
  }
  d && (n.set(l, u), s(u, l, a, i, n), n.delete(l)), ne(e, r, u);
}
var Yn = Jn, Zn = ri, eo = $e, to = ui, ro = Yn, ao = p, io = Pe, so = Me;
function Ee(e, t, r, a, s) {
  e !== t && to(t, function(i, n) {
    if (s || (s = new Zn()), ao(i))
      ro(e, t, n, r, Ee, a, s);
    else {
      var o = a ? a(so(e, n), i, n + "", e, t, s) : void 0;
      o === void 0 && (o = i), eo(e, n, o);
    }
  }, io);
}
var De = Ee, no = De, ce = p;
function Be(e, t, r, a, s, i) {
  return ce(e) && ce(t) && (i.set(t, e), no(e, t, void 0, Be, i), i.delete(t)), e;
}
var oo = Be, lo = I, ho = k, co = Ie, uo = p;
function po(e, t, r) {
  if (!uo(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? ho(r) && co(t, r.length) : a == "string" && t in r) ? lo(r[t], e) : !1;
}
var fo = po, vo = be, go = fo;
function yo(e) {
  return vo(function(t, r) {
    var a = -1, s = r.length, i = s > 1 ? r[s - 1] : void 0, n = s > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (s--, i) : void 0, n && go(r[0], r[1], n) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++a < s; ) {
      var o = r[a];
      o && e(t, o, a, i);
    }
    return t;
  });
}
var bo = yo, _o = De, $o = bo, mo = $o(function(e, t, r, a) {
  _o(e, t, r, a);
}), xo = mo, Oo = de, Co = be, So = oo, wo = xo, jo = Co(function(e) {
  return e.push(void 0, So), Oo(wo, void 0, e);
}), To = jo;
const Ao = /* @__PURE__ */ Le(To), Mo = {
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
class R {
  constructor(t) {
    this.onCreate = () => {
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this.overlay = t.overlay, this.img = t.img, this.options = t.options, this.requestUpdate = t.onUpdate;
  }
}
class Io extends R {
  constructor(t) {
    super(t), this.display = null, this.onCreate = () => {
      var r;
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), (r = this.overlay) == null || r.appendChild(this.display);
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
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
    }, this.getCurrentSize = () => {
      var r;
      return [
        ((r = this.img) == null ? void 0 : r.width) || 0,
        this.img ? Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight) : 0
      ];
    };
  }
}
const Po = `<svg viewbox="0 0 18 18">
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
</svg>`, H = window.Quill.imports.parchment, v = new H.StyleAttributor("float", "float"), x = new H.StyleAttributor("margin", "margin"), w = new H.StyleAttributor("display", "display");
class Bo extends R {
  constructor(t) {
    super(t), this.alignments = [], this.onCreate = () => {
      var r;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (r = this.overlay) == null || r.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: Po,
          apply: () => {
            w.add(this.img, "inline"), v.add(this.img, "left"), x.add(this.img, "0 1em 1em 0");
          },
          isApplied: () => v.value(this.img) === "left"
        },
        {
          icon: Eo,
          apply: () => {
            w.add(this.img, "block"), v.remove(this.img), x.add(this.img, "auto");
          },
          isApplied: () => x.value(this.img) === "auto"
        },
        {
          icon: Do,
          apply: () => {
            w.add(this.img, "inline"), v.add(this.img, "right"), x.add(this.img, "0 0 1em 1em");
          },
          isApplied: () => v.value(this.img) === "right"
        }
      ];
    }, this._addToolbarButtons = () => {
      const r = [];
      this.alignments.forEach((a, s) => {
        var n;
        const i = document.createElement("span");
        r.push(i), i.innerHTML = a.icon, i.addEventListener("click", () => {
          r.forEach((o) => o.style.filter = ""), a.isApplied() ? (v.remove(this.img), x.remove(this.img), w.remove(this.img)) : (this._selectButton(i), a.apply()), this.requestUpdate();
        }), Object.assign(i.style, this.options.toolbarButtonStyles), s > 0 && (i.style.borderLeftWidth = "0"), Object.assign(i.children[0].style, this.options.toolbarButtonSvgStyles), a.isApplied() && this._selectButton(i), (n = this.toolbar) == null || n.appendChild(i);
      });
    }, this._selectButton = (r) => {
      r.style.filter = "invert(20%)";
    };
  }
}
class Lo extends R {
  constructor(t) {
    super(t), this.boxes = [], this.dragBox = null, this.dragStartX = 0, this.preDragWidth = 0, this.onCreate = () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    }, this.onDestroy = () => {
      this.setCursor("");
    }, this.positionBoxes = () => {
      var s, i;
      const r = `${-parseFloat(((s = this.options.handleStyles) == null ? void 0 : s.width.toString()) || "0") / 2}px`, a = `${-parseFloat(((i = this.options.handleStyles) == null ? void 0 : i.height.toString()) || "0") / 2}px`;
      [
        { left: r, top: a },
        // top left
        { right: r, top: a },
        // top right
        { right: r, bottom: a },
        // bottom right
        { left: r, bottom: a }
        // bottom left
      ].forEach((n, o) => {
        Object.assign(this.boxes[o].style, n);
      });
    }, this.addBox = (r) => {
      var s, i, n;
      const a = document.createElement("div");
      Object.assign(a.style, this.options.handleStyles), a.style.cursor = r, a.style.width = `${((s = this.options.handleStyles) == null ? void 0 : s.width) || 0}px`, a.style.height = `${((i = this.options.handleStyles) == null ? void 0 : i.height) || 0}px`, a.addEventListener("mousedown", this.handleMousedown, !1), (n = this.overlay) == null || n.appendChild(a), this.boxes.push(a);
    }, this.handleMousedown = (r) => {
      var a, s;
      this.dragBox = r.target, this.dragStartX = r.clientX, this.preDragWidth = ((a = this.img) == null ? void 0 : a.width) || ((s = this.img) == null ? void 0 : s.naturalWidth) || 0, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    }, this.handleMouseup = () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    }, this.handleDrag = (r) => {
      if (!this.img)
        return;
      const a = r.clientX - this.dragStartX;
      this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3] ? this.img.width = Math.round(this.preDragWidth - a) : this.img.width = Math.round(this.preDragWidth + a), this.requestUpdate();
    }, this.setCursor = (r) => {
      [document.body, this.img].forEach((s) => {
        s && (s.style.cursor = r);
      });
    };
  }
}
const Uo = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), Fo = { DisplaySize: Io, Toolbar: Bo, Resize: Lo };
var t;
const O = class O {
  constructor(t, r = {}) {
    var s;
    this.moduleClasses = [], this.modules = [], this.onUpdate = () => {
      this.repositionElements(), this.modules.forEach((i) => {
        i.onUpdate();
      });
    }, this.removeModules = () => {
      this.modules.forEach((i) => {
        i.onDestroy();
      }), this.modules = [];
    }, this.handleClick = (i) => {
      var o;
      const n = i.target;
      if (((o = n == null ? void 0 : n.tagName) == null ? void 0 : o.toUpperCase()) === "IMG") {
        if (this.img === n)
          return;
        this.img && this.hide(), this.show(n);
      } else this.img && this.hide();
    }, this.show = (i) => {
      this.img = i, this.showOverlay(), this.initializeModules();
    }, this.showOverlay = () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImageKeyUp, !0), this.quill.root.addEventListener("input", this.checkImageInput, !0), this.overlay = document.createElement("div"), this.overlay.classList.add("ql-image-resizor"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
    }, this.hideOverlay = () => {
      this.overlay && (this.quill.root.parentNode.removeChild(this.overlay), this.overlay = void 0, document.removeEventListener("keyup", this.checkImageKeyUp), this.quill.root.removeEventListener("input", this.checkImageInput), this.setUserSelect(""));
    }, this.repositionElements = () => {
      if (!this.overlay || !this.img)
        return;
      const i = this.quill.root.parentNode, n = this.img.getBoundingClientRect(), o = i.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${n.left - o.left - 1 + i.scrollLeft}px`,
        top: `${n.top - o.top + i.scrollTop}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      });
    }, this.hide = () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    }, this.setUserSelect = (i) => {
      Uo.forEach((n) => {
        this.quill.root.style[n] = i, document.documentElement.style[n] = i;
      });
    }, this.checkImageKeyUp = (i) => {
      if (this.img) {
        if (["Backspace", "Delete"].includes(i.code)) {
          const n = O.QuillFind(this.img);
          n && n.deleteAt(0);
        }
        this.hide();
      }
    }, this.checkImageInput = (i) => {
      if (this.img) {
        if (["deleteContentForward", "deleteContentBackward"].includes(i.inputType)) {
          const n = O.QuillFind(this.img);
          n && n.deleteAt(0);
        }
        this.hide();
      }
    }, this.initializeModules = this.initializeModules.bind(this), this.quill = t, this.options = Ao({}, r, Mo), (s = r.modules) != null && s.length && (this.moduleClasses = r.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const a = this.quill.root.parentNode;
    a.style.position = a.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var t;
    this.removeModules(), this.modules = ((t = this.moduleClasses) == null ? void 0 : t.map((r) => new (Fo[r] || r)(this))) || [], this.modules.forEach((r) => {
      r.onCreate();
    }), this.onUpdate();
  }
};
O.QuillFind = ((t = window.Quill) == null ? void 0 : t.find) ?? (() => null);
let F = O;
var ue;
(ue = window.Quill) == null || ue.register("modules/imageResizor", F);
export {
  F as default
};
