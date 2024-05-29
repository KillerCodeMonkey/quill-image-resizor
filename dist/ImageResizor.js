var Be = Object.defineProperty;
var Le = (e, t, r) => t in e ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var h = (e, t, r) => (Le(e, typeof t != "symbol" ? t + "" : t, r), r);
var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ue(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ze(e, t, r) {
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
var ue = ze;
function Fe(e) {
  return e;
}
var de = Fe, Ge = ue, N = Math.max;
function Re(e, t, r) {
  return t = N(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, s = -1, i = N(a.length - t, 0), n = Array(i); ++s < i; )
      n[s] = a[t + s];
    s = -1;
    for (var o = Array(t + 1); ++s < t; )
      o[s] = a[s];
    return o[t] = r(n), Ge(e, this, o);
  };
}
var ke = Re;
function qe(e) {
  return function() {
    return e;
  };
}
var He = qe, Ne = typeof S == "object" && S && S.Object === Object && S, pe = Ne, Ke = pe, We = typeof self == "object" && self && self.Object === Object && self, Ve = Ke || We || Function("return this")(), y = Ve, Xe = y, Qe = Xe.Symbol, fe = Qe, K = fe, ve = Object.prototype, Je = ve.hasOwnProperty, Ye = ve.toString, x = K ? K.toStringTag : void 0;
function Ze(e) {
  var t = Je.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var s = Ye.call(e);
  return a && (t ? e[x] = r : delete e[x]), s;
}
var et = Ze, tt = Object.prototype, rt = tt.toString;
function at(e) {
  return rt.call(e);
}
var it = at, W = fe, nt = et, st = it, ot = "[object Null]", lt = "[object Undefined]", V = W ? W.toStringTag : void 0;
function ct(e) {
  return e == null ? e === void 0 ? lt : ot : V && V in Object(e) ? nt(e) : st(e);
}
var I = ct;
function ht(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var f = ht, ut = I, dt = f, pt = "[object AsyncFunction]", ft = "[object Function]", vt = "[object GeneratorFunction]", gt = "[object Proxy]";
function yt(e) {
  if (!dt(e))
    return !1;
  var t = ut(e);
  return t == ft || t == vt || t == pt || t == gt;
}
var z = yt, bt = y, _t = bt["__core-js_shared__"], $t = _t, U = $t, X = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mt(e) {
  return !!X && X in e;
}
var xt = mt, Ot = Function.prototype, Ct = Ot.toString;
function St(e) {
  if (e != null) {
    try {
      return Ct.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wt = St, jt = z, Tt = xt, At = f, It = wt, Mt = /[\\^$.*+?()[\]{}|]/g, Pt = /^\[object .+?Constructor\]$/, Et = Function.prototype, Dt = Object.prototype, Bt = Et.toString, Lt = Dt.hasOwnProperty, Ut = RegExp(
  "^" + Bt.call(Lt).replace(Mt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zt(e) {
  if (!At(e) || Tt(e))
    return !1;
  var t = jt(e) ? Ut : Pt;
  return t.test(It(e));
}
var Ft = zt;
function Gt(e, t) {
  return e == null ? void 0 : e[t];
}
var Rt = Gt, kt = Ft, qt = Rt;
function Ht(e, t) {
  var r = qt(e, t);
  return kt(r) ? r : void 0;
}
var F = Ht, Nt = F, Kt = function() {
  try {
    var e = Nt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ge = Kt, Wt = He, Q = ge, Vt = de, Xt = Q ? function(e, t) {
  return Q(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wt(t),
    writable: !0
  });
} : Vt, Qt = Xt, Jt = 800, Yt = 16, Zt = Date.now;
function er(e) {
  var t = 0, r = 0;
  return function() {
    var a = Zt(), s = Yt - (a - r);
    if (r = a, s > 0) {
      if (++t >= Jt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var tr = er, rr = Qt, ar = tr, ir = ar(rr), nr = ir, sr = de, or = ke, lr = nr;
function cr(e, t) {
  return lr(or(e, t, sr), e + "");
}
var ye = cr;
function hr() {
  this.__data__ = [], this.size = 0;
}
var ur = hr;
function dr(e, t) {
  return e === t || e !== e && t !== t;
}
var M = dr, pr = M;
function fr(e, t) {
  for (var r = e.length; r--; )
    if (pr(e[r][0], t))
      return r;
  return -1;
}
var P = fr, vr = P, gr = Array.prototype, yr = gr.splice;
function br(e) {
  var t = this.__data__, r = vr(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : yr.call(t, r, 1), --this.size, !0;
}
var _r = br, $r = P;
function mr(e) {
  var t = this.__data__, r = $r(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var xr = mr, Or = P;
function Cr(e) {
  return Or(this.__data__, e) > -1;
}
var Sr = Cr, wr = P;
function jr(e, t) {
  var r = this.__data__, a = wr(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Tr = jr, Ar = ur, Ir = _r, Mr = xr, Pr = Sr, Er = Tr;
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = Ar;
b.prototype.delete = Ir;
b.prototype.get = Mr;
b.prototype.has = Pr;
b.prototype.set = Er;
var E = b, Dr = E;
function Br() {
  this.__data__ = new Dr(), this.size = 0;
}
var Lr = Br;
function Ur(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var zr = Ur;
function Fr(e) {
  return this.__data__.get(e);
}
var Gr = Fr;
function Rr(e) {
  return this.__data__.has(e);
}
var kr = Rr, qr = F, Hr = y, Nr = qr(Hr, "Map"), be = Nr, Kr = F, Wr = Kr(Object, "create"), D = Wr, J = D;
function Vr() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
}
var Xr = Vr;
function Qr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Jr = Qr, Yr = D, Zr = "__lodash_hash_undefined__", ea = Object.prototype, ta = ea.hasOwnProperty;
function ra(e) {
  var t = this.__data__;
  if (Yr) {
    var r = t[e];
    return r === Zr ? void 0 : r;
  }
  return ta.call(t, e) ? t[e] : void 0;
}
var aa = ra, ia = D, na = Object.prototype, sa = na.hasOwnProperty;
function oa(e) {
  var t = this.__data__;
  return ia ? t[e] !== void 0 : sa.call(t, e);
}
var la = oa, ca = D, ha = "__lodash_hash_undefined__";
function ua(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ca && t === void 0 ? ha : t, this;
}
var da = ua, pa = Xr, fa = Jr, va = aa, ga = la, ya = da;
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = pa;
_.prototype.delete = fa;
_.prototype.get = va;
_.prototype.has = ga;
_.prototype.set = ya;
var ba = _, Y = ba, _a = E, $a = be;
function ma() {
  this.size = 0, this.__data__ = {
    hash: new Y(),
    map: new ($a || _a)(),
    string: new Y()
  };
}
var xa = ma;
function Oa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ca = Oa, Sa = Ca;
function wa(e, t) {
  var r = e.__data__;
  return Sa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var B = wa, ja = B;
function Ta(e) {
  var t = ja(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Aa = Ta, Ia = B;
function Ma(e) {
  return Ia(this, e).get(e);
}
var Pa = Ma, Ea = B;
function Da(e) {
  return Ea(this, e).has(e);
}
var Ba = Da, La = B;
function Ua(e, t) {
  var r = La(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var za = Ua, Fa = xa, Ga = Aa, Ra = Pa, ka = Ba, qa = za;
function $(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
$.prototype.clear = Fa;
$.prototype.delete = Ga;
$.prototype.get = Ra;
$.prototype.has = ka;
$.prototype.set = qa;
var Ha = $, Na = E, Ka = be, Wa = Ha, Va = 200;
function Xa(e, t) {
  var r = this.__data__;
  if (r instanceof Na) {
    var a = r.__data__;
    if (!Ka || a.length < Va - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Wa(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Qa = Xa, Ja = E, Ya = Lr, Za = zr, ei = Gr, ti = kr, ri = Qa;
function m(e) {
  var t = this.__data__ = new Ja(e);
  this.size = t.size;
}
m.prototype.clear = Ya;
m.prototype.delete = Za;
m.prototype.get = ei;
m.prototype.has = ti;
m.prototype.set = ri;
var ai = m, Z = ge;
function ii(e, t, r) {
  t == "__proto__" && Z ? Z(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var G = ii, ni = G, si = M;
function oi(e, t, r) {
  (r !== void 0 && !si(e[t], r) || r === void 0 && !(t in e)) && ni(e, t, r);
}
var _e = oi;
function li(e) {
  return function(t, r, a) {
    for (var s = -1, i = Object(t), n = a(t), o = n.length; o--; ) {
      var l = n[e ? o : ++s];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var ci = li, hi = ci, ui = hi(), di = ui, j = { exports: {} };
j.exports;
(function(e, t) {
  var r = y, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function l(u, d) {
    if (d)
      return u.slice();
    var p = u.length, v = o ? o(p) : new u.constructor(p);
    return u.copy(v), v;
  }
  e.exports = l;
})(j, j.exports);
var pi = j.exports, fi = y, vi = fi.Uint8Array, gi = vi, ee = gi;
function yi(e) {
  var t = new e.constructor(e.byteLength);
  return new ee(t).set(new ee(e)), t;
}
var bi = yi, _i = bi;
function $i(e, t) {
  var r = t ? _i(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var mi = $i;
function xi(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Oi = xi, Ci = f, te = Object.create, Si = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ci(t))
      return {};
    if (te)
      return te(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), wi = Si;
function ji(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ti = ji, Ai = Ti, Ii = Ai(Object.getPrototypeOf, Object), $e = Ii, Mi = Object.prototype;
function Pi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mi;
  return e === r;
}
var me = Pi, Ei = wi, Di = $e, Bi = me;
function Li(e) {
  return typeof e.constructor == "function" && !Bi(e) ? Ei(Di(e)) : {};
}
var Ui = Li;
function zi(e) {
  return e != null && typeof e == "object";
}
var C = zi, Fi = I, Gi = C, Ri = "[object Arguments]";
function ki(e) {
  return Gi(e) && Fi(e) == Ri;
}
var qi = ki, re = qi, Hi = C, xe = Object.prototype, Ni = xe.hasOwnProperty, Ki = xe.propertyIsEnumerable, Wi = re(/* @__PURE__ */ function() {
  return arguments;
}()) ? re : function(e) {
  return Hi(e) && Ni.call(e, "callee") && !Ki.call(e, "callee");
}, Oe = Wi, Vi = Array.isArray, Ce = Vi, Xi = 9007199254740991;
function Qi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xi;
}
var Se = Qi, Ji = z, Yi = Se;
function Zi(e) {
  return e != null && Yi(e.length) && !Ji(e);
}
var R = Zi, en = R, tn = C;
function rn(e) {
  return tn(e) && en(e);
}
var an = rn, T = { exports: {} };
function nn() {
  return !1;
}
var sn = nn;
T.exports;
(function(e, t) {
  var r = y, a = sn, s = t && !t.nodeType && t, i = s && !0 && e && !e.nodeType && e, n = i && i.exports === s, o = n ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, u = l || a;
  e.exports = u;
})(T, T.exports);
var we = T.exports, on = I, ln = $e, cn = C, hn = "[object Object]", un = Function.prototype, dn = Object.prototype, je = un.toString, pn = dn.hasOwnProperty, fn = je.call(Object);
function vn(e) {
  if (!cn(e) || on(e) != hn)
    return !1;
  var t = ln(e);
  if (t === null)
    return !0;
  var r = pn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && je.call(r) == fn;
}
var gn = vn, yn = I, bn = Se, _n = C, $n = "[object Arguments]", mn = "[object Array]", xn = "[object Boolean]", On = "[object Date]", Cn = "[object Error]", Sn = "[object Function]", wn = "[object Map]", jn = "[object Number]", Tn = "[object Object]", An = "[object RegExp]", In = "[object Set]", Mn = "[object String]", Pn = "[object WeakMap]", En = "[object ArrayBuffer]", Dn = "[object DataView]", Bn = "[object Float32Array]", Ln = "[object Float64Array]", Un = "[object Int8Array]", zn = "[object Int16Array]", Fn = "[object Int32Array]", Gn = "[object Uint8Array]", Rn = "[object Uint8ClampedArray]", kn = "[object Uint16Array]", qn = "[object Uint32Array]", c = {};
c[Bn] = c[Ln] = c[Un] = c[zn] = c[Fn] = c[Gn] = c[Rn] = c[kn] = c[qn] = !0;
c[$n] = c[mn] = c[En] = c[xn] = c[Dn] = c[On] = c[Cn] = c[Sn] = c[wn] = c[jn] = c[Tn] = c[An] = c[In] = c[Mn] = c[Pn] = !1;
function Hn(e) {
  return _n(e) && bn(e.length) && !!c[yn(e)];
}
var Nn = Hn;
function Kn(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = Kn, A = { exports: {} };
A.exports;
(function(e, t) {
  var r = pe, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i && r.process, o = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(A, A.exports);
var Vn = A.exports, Xn = Nn, Qn = Wn, ae = Vn, ie = ae && ae.isTypedArray, Jn = ie ? Qn(ie) : Xn, Te = Jn;
function Yn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ae = Yn, Zn = G, es = M, ts = Object.prototype, rs = ts.hasOwnProperty;
function as(e, t, r) {
  var a = e[t];
  (!(rs.call(e, t) && es(a, r)) || r === void 0 && !(t in e)) && Zn(e, t, r);
}
var is = as, ns = is, ss = G;
function os(e, t, r, a) {
  var s = !r;
  r || (r = {});
  for (var i = -1, n = t.length; ++i < n; ) {
    var o = t[i], l = a ? a(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), s ? ss(r, o, l) : ns(r, o, l);
  }
  return r;
}
var ls = os;
function cs(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var hs = cs, us = 9007199254740991, ds = /^(?:0|[1-9]\d*)$/;
function ps(e, t) {
  var r = typeof e;
  return t = t ?? us, !!t && (r == "number" || r != "symbol" && ds.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ie = ps, fs = hs, vs = Oe, gs = Ce, ys = we, bs = Ie, _s = Te, $s = Object.prototype, ms = $s.hasOwnProperty;
function xs(e, t) {
  var r = gs(e), a = !r && vs(e), s = !r && !a && ys(e), i = !r && !a && !s && _s(e), n = r || a || s || i, o = n ? fs(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || ms.call(e, u)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    bs(u, l))) && o.push(u);
  return o;
}
var Os = xs;
function Cs(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ss = Cs, ws = f, js = me, Ts = Ss, As = Object.prototype, Is = As.hasOwnProperty;
function Ms(e) {
  if (!ws(e))
    return Ts(e);
  var t = js(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Is.call(e, a)) || r.push(a);
  return r;
}
var Ps = Ms, Es = Os, Ds = Ps, Bs = R;
function Ls(e) {
  return Bs(e) ? Es(e, !0) : Ds(e);
}
var Me = Ls, Us = ls, zs = Me;
function Fs(e) {
  return Us(e, zs(e));
}
var Gs = Fs, ne = _e, Rs = pi, ks = mi, qs = Oi, Hs = Ui, se = Oe, oe = Ce, Ns = an, Ks = we, Ws = z, Vs = f, Xs = gn, Qs = Te, le = Ae, Js = Gs;
function Ys(e, t, r, a, s, i, n) {
  var o = le(e, r), l = le(t, r), u = n.get(l);
  if (u) {
    ne(e, r, u);
    return;
  }
  var d = i ? i(o, l, r + "", e, t, n) : void 0, p = d === void 0;
  if (p) {
    var v = oe(l), L = !v && Ks(l), H = !v && !L && Qs(l);
    d = l, v || L || H ? oe(o) ? d = o : Ns(o) ? d = qs(o) : L ? (p = !1, d = Rs(l, !0)) : H ? (p = !1, d = ks(l, !0)) : d = [] : Xs(l) || se(l) ? (d = o, se(o) ? d = Js(o) : (!Vs(o) || Ws(o)) && (d = Hs(l))) : p = !1;
  }
  p && (n.set(l, d), s(d, l, a, i, n), n.delete(l)), ne(e, r, d);
}
var Zs = Ys, eo = ai, to = _e, ro = di, ao = Zs, io = f, no = Me, so = Ae;
function Pe(e, t, r, a, s) {
  e !== t && ro(t, function(i, n) {
    if (s || (s = new eo()), io(i))
      ao(e, t, n, r, Pe, a, s);
    else {
      var o = a ? a(so(e, n), i, n + "", e, t, s) : void 0;
      o === void 0 && (o = i), to(e, n, o);
    }
  }, no);
}
var Ee = Pe, oo = Ee, ce = f;
function De(e, t, r, a, s, i) {
  return ce(e) && ce(t) && (i.set(t, e), oo(e, t, void 0, De, i), i.delete(t)), e;
}
var lo = De, co = M, ho = R, uo = Ie, po = f;
function fo(e, t, r) {
  if (!po(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? ho(r) && uo(t, r.length) : a == "string" && t in r) ? co(r[t], e) : !1;
}
var vo = fo, go = ye, yo = vo;
function bo(e) {
  return go(function(t, r) {
    var a = -1, s = r.length, i = s > 1 ? r[s - 1] : void 0, n = s > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (s--, i) : void 0, n && yo(r[0], r[1], n) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++a < s; ) {
      var o = r[a];
      o && e(t, o, a, i);
    }
    return t;
  });
}
var _o = bo, $o = Ee, mo = _o, xo = mo(function(e, t, r, a) {
  $o(e, t, r, a);
}), Oo = xo, Co = ue, So = ye, wo = lo, jo = Oo, To = So(function(e) {
  return e.push(void 0, wo), Co(jo, void 0, e);
}), Ao = To;
const Io = /* @__PURE__ */ Ue(Ao), Mo = {
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
class k {
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
    h(this, "onCreate", () => {
    });
    /*
            onDestroy will be called when the element is de-selected, or when this module otherwise needs to tidy up.
    
            If you created any DOM elements in onCreate, please remove them from the DOM and destroy them here.
         */
    h(this, "onDestroy", () => {
    });
    /*
            onUpdate will be called any time that the element is changed (e.g. resized, aligned, etc.)
    
            This frequently happens during resize dragging, so keep computations light while here to ensure a smooth
            user experience.
         */
    h(this, "onUpdate", () => {
    });
    this.overlay = t.overlay, this.img = t.img, this.options = t.options, this.requestUpdate = t.onUpdate;
  }
}
class Po extends k {
  constructor() {
    super(...arguments);
    h(this, "onCreate", () => {
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), this.overlay.appendChild(this.display);
    });
    h(this, "onDestroy", () => {
    });
    h(this, "onUpdate", () => {
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
    h(this, "getCurrentSize", () => [this.img.width, Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight)]);
  }
}
const Eo = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, Do = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, Bo = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`, q = window.Quill.imports.parchment, g = new q.StyleAttributor("float", "float"), O = new q.StyleAttributor("margin", "margin"), w = new q.StyleAttributor("display", "display");
class Lo extends k {
  constructor() {
    super(...arguments);
    h(this, "onCreate", () => {
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), this.overlay.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    });
    // The toolbar and its children will be destroyed when the overlay is removed
    h(this, "onDestroy", () => {
    });
    // Nothing to update on drag because we are are positioned relative to the overlay
    h(this, "onUpdate", () => {
    });
    h(this, "_defineAlignments", () => {
      this.alignments = [
        {
          icon: Eo,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "left"), O.add(this.img, "0 1em 1em 0");
          },
          isApplied: () => g.value(this.img) == "left"
        },
        {
          icon: Do,
          apply: () => {
            w.add(this.img, "block"), g.remove(this.img), O.add(this.img, "auto");
          },
          isApplied: () => O.value(this.img) == "auto"
        },
        {
          icon: Bo,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "right"), O.add(this.img, "0 0 1em 1em");
          },
          isApplied: () => g.value(this.img) == "right"
        }
      ];
    });
    h(this, "_addToolbarButtons", () => {
      const r = [];
      this.alignments.forEach((a, s) => {
        const i = document.createElement("span");
        r.push(i), i.innerHTML = a.icon, i.addEventListener("click", () => {
          r.forEach((n) => n.style.filter = ""), a.isApplied() ? (g.remove(this.img), O.remove(this.img), w.remove(this.img)) : (this._selectButton(i), a.apply()), this.requestUpdate();
        }), Object.assign(i.style, this.options.toolbarButtonStyles), s > 0 && (i.style.borderLeftWidth = "0"), Object.assign(i.children[0].style, this.options.toolbarButtonSvgStyles), a.isApplied() && this._selectButton(i), this.toolbar.appendChild(i);
      });
    });
    h(this, "_selectButton", (r) => {
      r.style.filter = "invert(20%)";
    });
  }
}
class Uo extends k {
  constructor() {
    super(...arguments);
    h(this, "onCreate", () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    });
    h(this, "onDestroy", () => {
      this.setCursor("");
    });
    h(this, "positionBoxes", () => {
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
      ].forEach((s, i) => {
        Object.assign(this.boxes[i].style, s);
      });
    });
    h(this, "addBox", (r) => {
      const a = document.createElement("div");
      Object.assign(a.style, this.options.handleStyles), a.style.cursor = r, a.style.width = `${this.options.handleStyles.width}px`, a.style.height = `${this.options.handleStyles.height}px`, a.addEventListener("mousedown", this.handleMousedown, !1), this.overlay.appendChild(a), this.boxes.push(a);
    });
    h(this, "handleMousedown", (r) => {
      this.dragBox = r.target, this.dragStartX = r.clientX, this.preDragWidth = this.img.width || this.img.naturalWidth, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    });
    h(this, "handleMouseup", () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    });
    h(this, "handleDrag", (r) => {
      if (!this.img)
        return;
      const a = r.clientX - this.dragStartX;
      this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3] ? this.img.width = Math.round(this.preDragWidth - a) : this.img.width = Math.round(this.preDragWidth + a), this.requestUpdate();
    });
    h(this, "setCursor", (r) => {
      [document.body, this.img].forEach((a) => {
        a.style.cursor = r;
      });
    });
  }
}
const zo = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), Fo = { DisplaySize: Po, Toolbar: Lo, Resize: Uo };
class Go {
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
      } else
        this.img && this.hide();
    }, this.show = (i) => {
      this.img = i, this.showOverlay(), this.initializeModules();
    }, this.showOverlay = () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImageKeyUp, !0), this.quill.root.addEventListener("input", this.checkImageInput, !0), this.overlay = document.createElement("div"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
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
      zo.forEach((n) => {
        this.quill.root.style[n] = i, document.documentElement.style[n] = i;
      });
    }, this.checkImageKeyUp = (i) => {
      var n;
      this.img && (["Backspace", "Delete"].includes(i.code) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.checkImageInput = (i) => {
      var n;
      this.img && (["deleteContentForward", "deleteContentBackward"].includes(i.inputType) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.initializeModules = this.initializeModules.bind(this), this.quill = t, this.options = Io({}, r, Mo), (s = r.modules) != null && s.length && (this.moduleClasses = r.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const a = this.quill.root.parentNode;
    a.style.position = a.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var t;
    this.removeModules(), this.modules = ((t = this.moduleClasses) == null ? void 0 : t.map((r) => new (Fo[r] || r)(this))) || [], this.modules.forEach((r) => {
      r.onCreate();
    }), this.onUpdate();
  }
}
var he;
(he = window.Quill) == null || he.register("modules/imageResizor", Go);
export {
  Go as default
};
