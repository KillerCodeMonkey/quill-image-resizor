var C = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Be(e, t, r) {
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
var ce = Be;
function Le(e) {
  return e;
}
var ue = Le, Ue = ce, H = Math.max;
function ze(e, t, r) {
  return t = H(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, s = -1, i = H(a.length - t, 0), n = Array(i); ++s < i; )
      n[s] = a[t + s];
    s = -1;
    for (var o = Array(t + 1); ++s < t; )
      o[s] = a[s];
    return o[t] = r(n), Ue(e, this, o);
  };
}
var Fe = ze;
function Ge(e) {
  return function() {
    return e;
  };
}
var Re = Ge, qe = typeof C == "object" && C && C.Object === Object && C, de = qe, ke = de, He = typeof self == "object" && self && self.Object === Object && self, Ne = ke || He || Function("return this")(), g = Ne, Ke = g, We = Ke.Symbol, pe = We, N = pe, fe = Object.prototype, Xe = fe.hasOwnProperty, Ve = fe.toString, m = N ? N.toStringTag : void 0;
function Qe(e) {
  var t = Xe.call(e, m), r = e[m];
  try {
    e[m] = void 0;
    var a = !0;
  } catch {
  }
  var s = Ve.call(e);
  return a && (t ? e[m] = r : delete e[m]), s;
}
var Je = Qe, Ye = Object.prototype, Ze = Ye.toString;
function et(e) {
  return Ze.call(e);
}
var tt = et, K = pe, rt = Je, at = tt, it = "[object Null]", st = "[object Undefined]", W = K ? K.toStringTag : void 0;
function nt(e) {
  return e == null ? e === void 0 ? st : it : W && W in Object(e) ? rt(e) : at(e);
}
var A = nt;
function ot(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var p = ot, lt = A, ht = p, ct = "[object AsyncFunction]", ut = "[object Function]", dt = "[object GeneratorFunction]", pt = "[object Proxy]";
function ft(e) {
  if (!ht(e))
    return !1;
  var t = lt(e);
  return t == ut || t == dt || t == ct || t == pt;
}
var U = ft, vt = g, gt = vt["__core-js_shared__"], yt = gt, L = yt, X = function() {
  var e = /[^.]+$/.exec(L && L.keys && L.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bt(e) {
  return !!X && X in e;
}
var _t = bt, $t = Function.prototype, mt = $t.toString;
function xt(e) {
  if (e != null) {
    try {
      return mt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ot = xt, Ct = U, St = _t, wt = p, jt = Ot, Tt = /[\\^$.*+?()[\]{}|]/g, At = /^\[object .+?Constructor\]$/, It = Function.prototype, Mt = Object.prototype, Pt = It.toString, Et = Mt.hasOwnProperty, Dt = RegExp(
  "^" + Pt.call(Et).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bt(e) {
  if (!wt(e) || St(e))
    return !1;
  var t = Ct(e) ? Dt : At;
  return t.test(jt(e));
}
var Lt = Bt;
function Ut(e, t) {
  return e == null ? void 0 : e[t];
}
var zt = Ut, Ft = Lt, Gt = zt;
function Rt(e, t) {
  var r = Gt(e, t);
  return Ft(r) ? r : void 0;
}
var z = Rt, qt = z, kt = function() {
  try {
    var e = qt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ve = kt, Ht = Re, V = ve, Nt = ue, Kt = V ? function(e, t) {
  return V(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ht(t),
    writable: !0
  });
} : Nt, Wt = Kt, Xt = 800, Vt = 16, Qt = Date.now;
function Jt(e) {
  var t = 0, r = 0;
  return function() {
    var a = Qt(), s = Vt - (a - r);
    if (r = a, s > 0) {
      if (++t >= Xt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Yt = Jt, Zt = Wt, er = Yt, tr = er(Zt), rr = tr, ar = ue, ir = Fe, sr = rr;
function nr(e, t) {
  return sr(ir(e, t, ar), e + "");
}
var ge = nr;
function or() {
  this.__data__ = [], this.size = 0;
}
var lr = or;
function hr(e, t) {
  return e === t || e !== e && t !== t;
}
var I = hr, cr = I;
function ur(e, t) {
  for (var r = e.length; r--; )
    if (cr(e[r][0], t))
      return r;
  return -1;
}
var M = ur, dr = M, pr = Array.prototype, fr = pr.splice;
function vr(e) {
  var t = this.__data__, r = dr(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : fr.call(t, r, 1), --this.size, !0;
}
var gr = vr, yr = M;
function br(e) {
  var t = this.__data__, r = yr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var _r = br, $r = M;
function mr(e) {
  return $r(this.__data__, e) > -1;
}
var xr = mr, Or = M;
function Cr(e, t) {
  var r = this.__data__, a = Or(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Sr = Cr, wr = lr, jr = gr, Tr = _r, Ar = xr, Ir = Sr;
function y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
y.prototype.clear = wr;
y.prototype.delete = jr;
y.prototype.get = Tr;
y.prototype.has = Ar;
y.prototype.set = Ir;
var P = y, Mr = P;
function Pr() {
  this.__data__ = new Mr(), this.size = 0;
}
var Er = Pr;
function Dr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Br = Dr;
function Lr(e) {
  return this.__data__.get(e);
}
var Ur = Lr;
function zr(e) {
  return this.__data__.has(e);
}
var Fr = zr, Gr = z, Rr = g, qr = Gr(Rr, "Map"), ye = qr, kr = z, Hr = kr(Object, "create"), E = Hr, Q = E;
function Nr() {
  this.__data__ = Q ? Q(null) : {}, this.size = 0;
}
var Kr = Nr;
function Wr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Xr = Wr, Vr = E, Qr = "__lodash_hash_undefined__", Jr = Object.prototype, Yr = Jr.hasOwnProperty;
function Zr(e) {
  var t = this.__data__;
  if (Vr) {
    var r = t[e];
    return r === Qr ? void 0 : r;
  }
  return Yr.call(t, e) ? t[e] : void 0;
}
var ea = Zr, ta = E, ra = Object.prototype, aa = ra.hasOwnProperty;
function ia(e) {
  var t = this.__data__;
  return ta ? t[e] !== void 0 : aa.call(t, e);
}
var sa = ia, na = E, oa = "__lodash_hash_undefined__";
function la(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = na && t === void 0 ? oa : t, this;
}
var ha = la, ca = Kr, ua = Xr, da = ea, pa = sa, fa = ha;
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = ca;
b.prototype.delete = ua;
b.prototype.get = da;
b.prototype.has = pa;
b.prototype.set = fa;
var va = b, J = va, ga = P, ya = ye;
function ba() {
  this.size = 0, this.__data__ = {
    hash: new J(),
    map: new (ya || ga)(),
    string: new J()
  };
}
var _a = ba;
function $a(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ma = $a, xa = ma;
function Oa(e, t) {
  var r = e.__data__;
  return xa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var D = Oa, Ca = D;
function Sa(e) {
  var t = Ca(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var wa = Sa, ja = D;
function Ta(e) {
  return ja(this, e).get(e);
}
var Aa = Ta, Ia = D;
function Ma(e) {
  return Ia(this, e).has(e);
}
var Pa = Ma, Ea = D;
function Da(e, t) {
  var r = Ea(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Ba = Da, La = _a, Ua = wa, za = Aa, Fa = Pa, Ga = Ba;
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
_.prototype.clear = La;
_.prototype.delete = Ua;
_.prototype.get = za;
_.prototype.has = Fa;
_.prototype.set = Ga;
var Ra = _, qa = P, ka = ye, Ha = Ra, Na = 200;
function Ka(e, t) {
  var r = this.__data__;
  if (r instanceof qa) {
    var a = r.__data__;
    if (!ka || a.length < Na - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ha(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Wa = Ka, Xa = P, Va = Er, Qa = Br, Ja = Ur, Ya = Fr, Za = Wa;
function $(e) {
  var t = this.__data__ = new Xa(e);
  this.size = t.size;
}
$.prototype.clear = Va;
$.prototype.delete = Qa;
$.prototype.get = Ja;
$.prototype.has = Ya;
$.prototype.set = Za;
var ei = $, Y = ve;
function ti(e, t, r) {
  t == "__proto__" && Y ? Y(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var F = ti, ri = F, ai = I;
function ii(e, t, r) {
  (r !== void 0 && !ai(e[t], r) || r === void 0 && !(t in e)) && ri(e, t, r);
}
var be = ii;
function si(e) {
  return function(t, r, a) {
    for (var s = -1, i = Object(t), n = a(t), o = n.length; o--; ) {
      var l = n[e ? o : ++s];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var ni = si, oi = ni, li = oi(), hi = li, w = { exports: {} };
w.exports;
(function(e, t) {
  var r = g, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = o ? o(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(w, w.exports);
var ci = w.exports, ui = g, di = ui.Uint8Array, pi = di, Z = pi;
function fi(e) {
  var t = new e.constructor(e.byteLength);
  return new Z(t).set(new Z(e)), t;
}
var vi = fi, gi = vi;
function yi(e, t) {
  var r = t ? gi(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var bi = yi;
function _i(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var $i = _i, mi = p, ee = Object.create, xi = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!mi(t))
      return {};
    if (ee)
      return ee(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Oi = xi;
function Ci(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Si = Ci, wi = Si, ji = wi(Object.getPrototypeOf, Object), _e = ji, Ti = Object.prototype;
function Ai(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ti;
  return e === r;
}
var $e = Ai, Ii = Oi, Mi = _e, Pi = $e;
function Ei(e) {
  return typeof e.constructor == "function" && !Pi(e) ? Ii(Mi(e)) : {};
}
var Di = Ei;
function Bi(e) {
  return e != null && typeof e == "object";
}
var O = Bi, Li = A, Ui = O, zi = "[object Arguments]";
function Fi(e) {
  return Ui(e) && Li(e) == zi;
}
var Gi = Fi, te = Gi, Ri = O, me = Object.prototype, qi = me.hasOwnProperty, ki = me.propertyIsEnumerable, Hi = te(/* @__PURE__ */ function() {
  return arguments;
}()) ? te : function(e) {
  return Ri(e) && qi.call(e, "callee") && !ki.call(e, "callee");
}, xe = Hi, Ni = Array.isArray, Oe = Ni, Ki = 9007199254740991;
function Wi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ki;
}
var Ce = Wi, Xi = U, Vi = Ce;
function Qi(e) {
  return e != null && Vi(e.length) && !Xi(e);
}
var G = Qi, Ji = G, Yi = O;
function Zi(e) {
  return Yi(e) && Ji(e);
}
var es = Zi, j = { exports: {} };
function ts() {
  return !1;
}
var rs = ts;
j.exports;
(function(e, t) {
  var r = g, a = rs, s = t && !t.nodeType && t, i = s && !0 && e && !e.nodeType && e, n = i && i.exports === s, o = n ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || a;
  e.exports = c;
})(j, j.exports);
var Se = j.exports, as = A, is = _e, ss = O, ns = "[object Object]", os = Function.prototype, ls = Object.prototype, we = os.toString, hs = ls.hasOwnProperty, cs = we.call(Object);
function us(e) {
  if (!ss(e) || as(e) != ns)
    return !1;
  var t = is(e);
  if (t === null)
    return !0;
  var r = hs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && we.call(r) == cs;
}
var ds = us, ps = A, fs = Ce, vs = O, gs = "[object Arguments]", ys = "[object Array]", bs = "[object Boolean]", _s = "[object Date]", $s = "[object Error]", ms = "[object Function]", xs = "[object Map]", Os = "[object Number]", Cs = "[object Object]", Ss = "[object RegExp]", ws = "[object Set]", js = "[object String]", Ts = "[object WeakMap]", As = "[object ArrayBuffer]", Is = "[object DataView]", Ms = "[object Float32Array]", Ps = "[object Float64Array]", Es = "[object Int8Array]", Ds = "[object Int16Array]", Bs = "[object Int32Array]", Ls = "[object Uint8Array]", Us = "[object Uint8ClampedArray]", zs = "[object Uint16Array]", Fs = "[object Uint32Array]", h = {};
h[Ms] = h[Ps] = h[Es] = h[Ds] = h[Bs] = h[Ls] = h[Us] = h[zs] = h[Fs] = !0;
h[gs] = h[ys] = h[As] = h[bs] = h[Is] = h[_s] = h[$s] = h[ms] = h[xs] = h[Os] = h[Cs] = h[Ss] = h[ws] = h[js] = h[Ts] = !1;
function Gs(e) {
  return vs(e) && fs(e.length) && !!h[ps(e)];
}
var Rs = Gs;
function qs(e) {
  return function(t) {
    return e(t);
  };
}
var ks = qs, T = { exports: {} };
T.exports;
(function(e, t) {
  var r = de, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i && r.process, o = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(T, T.exports);
var Hs = T.exports, Ns = Rs, Ks = ks, re = Hs, ae = re && re.isTypedArray, Ws = ae ? Ks(ae) : Ns, je = Ws;
function Xs(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Te = Xs, Vs = F, Qs = I, Js = Object.prototype, Ys = Js.hasOwnProperty;
function Zs(e, t, r) {
  var a = e[t];
  (!(Ys.call(e, t) && Qs(a, r)) || r === void 0 && !(t in e)) && Vs(e, t, r);
}
var en = Zs, tn = en, rn = F;
function an(e, t, r, a) {
  var s = !r;
  r || (r = {});
  for (var i = -1, n = t.length; ++i < n; ) {
    var o = t[i], l = a ? a(r[o], e[o], o, r, e) : void 0;
    l === void 0 && (l = e[o]), s ? rn(r, o, l) : tn(r, o, l);
  }
  return r;
}
var sn = an;
function nn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var on = nn, ln = 9007199254740991, hn = /^(?:0|[1-9]\d*)$/;
function cn(e, t) {
  var r = typeof e;
  return t = t ?? ln, !!t && (r == "number" || r != "symbol" && hn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ae = cn, un = on, dn = xe, pn = Oe, fn = Se, vn = Ae, gn = je, yn = Object.prototype, bn = yn.hasOwnProperty;
function _n(e, t) {
  var r = pn(e), a = !r && dn(e), s = !r && !a && fn(e), i = !r && !a && !s && gn(e), n = r || a || s || i, o = n ? un(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || bn.call(e, c)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vn(c, l))) && o.push(c);
  return o;
}
var $n = _n;
function mn(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var xn = mn, On = p, Cn = $e, Sn = xn, wn = Object.prototype, jn = wn.hasOwnProperty;
function Tn(e) {
  if (!On(e))
    return Sn(e);
  var t = Cn(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !jn.call(e, a)) || r.push(a);
  return r;
}
var An = Tn, In = $n, Mn = An, Pn = G;
function En(e) {
  return Pn(e) ? In(e, !0) : Mn(e);
}
var Ie = En, Dn = sn, Bn = Ie;
function Ln(e) {
  return Dn(e, Bn(e));
}
var Un = Ln, ie = be, zn = ci, Fn = bi, Gn = $i, Rn = Di, se = xe, ne = Oe, qn = es, kn = Se, Hn = U, Nn = p, Kn = ds, Wn = je, oe = Te, Xn = Un;
function Vn(e, t, r, a, s, i, n) {
  var o = oe(e, r), l = oe(t, r), c = n.get(l);
  if (c) {
    ie(e, r, c);
    return;
  }
  var u = i ? i(o, l, r + "", e, t, n) : void 0, d = u === void 0;
  if (d) {
    var f = ne(l), B = !f && kn(l), k = !f && !B && Wn(l);
    u = l, f || B || k ? ne(o) ? u = o : qn(o) ? u = Gn(o) : B ? (d = !1, u = zn(l, !0)) : k ? (d = !1, u = Fn(l, !0)) : u = [] : Kn(l) || se(l) ? (u = o, se(o) ? u = Xn(o) : (!Nn(o) || Hn(o)) && (u = Rn(l))) : d = !1;
  }
  d && (n.set(l, u), s(u, l, a, i, n), n.delete(l)), ie(e, r, u);
}
var Qn = Vn, Jn = ei, Yn = be, Zn = hi, eo = Qn, to = p, ro = Ie, ao = Te;
function Me(e, t, r, a, s) {
  e !== t && Zn(t, function(i, n) {
    if (s || (s = new Jn()), to(i))
      eo(e, t, n, r, Me, a, s);
    else {
      var o = a ? a(ao(e, n), i, n + "", e, t, s) : void 0;
      o === void 0 && (o = i), Yn(e, n, o);
    }
  }, ro);
}
var Pe = Me, io = Pe, le = p;
function Ee(e, t, r, a, s, i) {
  return le(e) && le(t) && (i.set(t, e), io(e, t, void 0, Ee, i), i.delete(t)), e;
}
var so = Ee, no = I, oo = G, lo = Ae, ho = p;
function co(e, t, r) {
  if (!ho(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? oo(r) && lo(t, r.length) : a == "string" && t in r) ? no(r[t], e) : !1;
}
var uo = co, po = ge, fo = uo;
function vo(e) {
  return po(function(t, r) {
    var a = -1, s = r.length, i = s > 1 ? r[s - 1] : void 0, n = s > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (s--, i) : void 0, n && fo(r[0], r[1], n) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++a < s; ) {
      var o = r[a];
      o && e(t, o, a, i);
    }
    return t;
  });
}
var go = vo, yo = Pe, bo = go, _o = bo(function(e, t, r, a) {
  yo(e, t, r, a);
}), $o = _o, mo = ce, xo = ge, Oo = so, Co = $o, So = xo(function(e) {
  return e.push(void 0, Oo), mo(Co, void 0, e);
}), wo = So;
const jo = /* @__PURE__ */ De(wo), To = {
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
class Ao extends R {
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
const Io = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, Mo = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, Po = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`, q = window.Quill.imports.parchment, v = new q.StyleAttributor("float", "float"), x = new q.StyleAttributor("margin", "margin"), S = new q.StyleAttributor("display", "display");
class Eo extends R {
  constructor(t) {
    super(t), this.alignments = [], this.onCreate = () => {
      var r;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (r = this.overlay) == null || r.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: Io,
          apply: () => {
            S.add(this.img, "inline"), v.add(this.img, "left"), x.add(this.img, "0 1em 1em 0");
          },
          isApplied: () => v.value(this.img) === "left"
        },
        {
          icon: Mo,
          apply: () => {
            S.add(this.img, "block"), v.remove(this.img), x.add(this.img, "auto");
          },
          isApplied: () => x.value(this.img) === "auto"
        },
        {
          icon: Po,
          apply: () => {
            S.add(this.img, "inline"), v.add(this.img, "right"), x.add(this.img, "0 0 1em 1em");
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
          r.forEach((o) => o.style.filter = ""), a.isApplied() ? (v.remove(this.img), x.remove(this.img), S.remove(this.img)) : (this._selectButton(i), a.apply()), this.requestUpdate();
        }), Object.assign(i.style, this.options.toolbarButtonStyles), s > 0 && (i.style.borderLeftWidth = "0"), Object.assign(i.children[0].style, this.options.toolbarButtonSvgStyles), a.isApplied() && this._selectButton(i), (n = this.toolbar) == null || n.appendChild(i);
      });
    }, this._selectButton = (r) => {
      r.style.filter = "invert(20%)";
    };
  }
}
class Do extends R {
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
const Bo = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), Lo = { DisplaySize: Ao, Toolbar: Eo, Resize: Do };
class Uo {
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
      Bo.forEach((n) => {
        this.quill.root.style[n] = i, document.documentElement.style[n] = i;
      });
    }, this.checkImageKeyUp = (i) => {
      var n;
      this.img && (["Backspace", "Delete"].includes(i.code) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.checkImageInput = (i) => {
      var n;
      this.img && (["deleteContentForward", "deleteContentBackward"].includes(i.inputType) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.initializeModules = this.initializeModules.bind(this), this.quill = t, this.options = jo({}, r, To), (s = r.modules) != null && s.length && (this.moduleClasses = r.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const a = this.quill.root.parentNode;
    a.style.position = a.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var t;
    this.removeModules(), this.modules = ((t = this.moduleClasses) == null ? void 0 : t.map((r) => new (Lo[r] || r)(this))) || [], this.modules.forEach((r) => {
      r.onCreate();
    }), this.onUpdate();
  }
}
var he;
(he = window.Quill) == null || he.register("modules/imageResizor", Uo);
export {
  Uo as default
};
