(function(p,f){typeof exports=="object"&&typeof module<"u"?module.exports=f():typeof define=="function"&&define.amd?define(f):(p=typeof globalThis<"u"?globalThis:p||self,p["quill-image-resizor"]=f())})(this,function(){"use strict";var Fo=Object.defineProperty;var Go=(p,f,y)=>f in p?Fo(p,f,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[f]=y;var h=(p,f,y)=>(Go(p,typeof f!="symbol"?f+"":f,y),y);var Le;var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var K=y;function ze(e){return e}var W=ze,Fe=K,V=Math.max;function Ge(e,t,r){return t=V(t===void 0?e.length-1:t,0),function(){for(var a=arguments,s=-1,i=V(a.length-t,0),n=Array(i);++s<i;)n[s]=a[t+s];s=-1;for(var o=Array(t+1);++s<t;)o[s]=a[s];return o[t]=r(n),Fe(e,this,o)}}var Re=Ge;function qe(e){return function(){return e}}var ke=qe,He=typeof p=="object"&&p&&p.Object===Object&&p,X=He,Ne=X,Ke=typeof self=="object"&&self&&self.Object===Object&&self,We=Ne||Ke||Function("return this")(),b=We,Ve=b,Xe=Ve.Symbol,Q=Xe,J=Q,Y=Object.prototype,Qe=Y.hasOwnProperty,Je=Y.toString,S=J?J.toStringTag:void 0;function Ye(e){var t=Qe.call(e,S),r=e[S];try{e[S]=void 0;var a=!0}catch{}var s=Je.call(e);return a&&(t?e[S]=r:delete e[S]),s}var Ze=Ye,et=Object.prototype,tt=et.toString;function rt(e){return tt.call(e)}var at=rt,Z=Q,it=Ze,nt=at,st="[object Null]",ot="[object Undefined]",ee=Z?Z.toStringTag:void 0;function lt(e){return e==null?e===void 0?ot:st:ee&&ee in Object(e)?it(e):nt(e)}var T=lt;function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var v=ct,ht=T,ut=v,dt="[object AsyncFunction]",pt="[object Function]",ft="[object GeneratorFunction]",vt="[object Proxy]";function gt(e){if(!ut(e))return!1;var t=ht(e);return t==pt||t==ft||t==dt||t==vt}var z=gt,yt=b,bt=yt["__core-js_shared__"],_t=bt,F=_t,te=function(){var e=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $t(e){return!!te&&te in e}var mt=$t,xt=Function.prototype,Ot=xt.toString;function Ct(e){if(e!=null){try{return Ot.call(e)}catch{}try{return e+""}catch{}}return""}var St=Ct,wt=z,jt=mt,Tt=v,At=St,It=/[\\^$.*+?()[\]{}|]/g,Mt=/^\[object .+?Constructor\]$/,Pt=Function.prototype,Et=Object.prototype,Dt=Pt.toString,Bt=Et.hasOwnProperty,Lt=RegExp("^"+Dt.call(Bt).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ut(e){if(!Tt(e)||jt(e))return!1;var t=wt(e)?Lt:Mt;return t.test(At(e))}var zt=Ut;function Ft(e,t){return e==null?void 0:e[t]}var Gt=Ft,Rt=zt,qt=Gt;function kt(e,t){var r=qt(e,t);return Rt(r)?r:void 0}var G=kt,Ht=G,Nt=function(){try{var e=Ht(Object,"defineProperty");return e({},"",{}),e}catch{}}(),re=Nt,Kt=ke,ae=re,Wt=W,Vt=ae?function(e,t){return ae(e,"toString",{configurable:!0,enumerable:!1,value:Kt(t),writable:!0})}:Wt,Xt=Vt,Qt=800,Jt=16,Yt=Date.now;function Zt(e){var t=0,r=0;return function(){var a=Yt(),s=Jt-(a-r);if(r=a,s>0){if(++t>=Qt)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var er=Zt,tr=Xt,rr=er,ar=rr(tr),ir=ar,nr=W,sr=Re,or=ir;function lr(e,t){return or(sr(e,t,nr),e+"")}var ie=lr;function cr(){this.__data__=[],this.size=0}var hr=cr;function ur(e,t){return e===t||e!==e&&t!==t}var A=ur,dr=A;function pr(e,t){for(var r=e.length;r--;)if(dr(e[r][0],t))return r;return-1}var I=pr,fr=I,vr=Array.prototype,gr=vr.splice;function yr(e){var t=this.__data__,r=fr(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():gr.call(t,r,1),--this.size,!0}var br=yr,_r=I;function $r(e){var t=this.__data__,r=_r(t,e);return r<0?void 0:t[r][1]}var mr=$r,xr=I;function Or(e){return xr(this.__data__,e)>-1}var Cr=Or,Sr=I;function wr(e,t){var r=this.__data__,a=Sr(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var jr=wr,Tr=hr,Ar=br,Ir=mr,Mr=Cr,Pr=jr;function _(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}_.prototype.clear=Tr,_.prototype.delete=Ar,_.prototype.get=Ir,_.prototype.has=Mr,_.prototype.set=Pr;var M=_,Er=M;function Dr(){this.__data__=new Er,this.size=0}var Br=Dr;function Lr(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Ur=Lr;function zr(e){return this.__data__.get(e)}var Fr=zr;function Gr(e){return this.__data__.has(e)}var Rr=Gr,qr=G,kr=b,Hr=qr(kr,"Map"),ne=Hr,Nr=G,Kr=Nr(Object,"create"),P=Kr,se=P;function Wr(){this.__data__=se?se(null):{},this.size=0}var Vr=Wr;function Xr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qr=Xr,Jr=P,Yr="__lodash_hash_undefined__",Zr=Object.prototype,ea=Zr.hasOwnProperty;function ta(e){var t=this.__data__;if(Jr){var r=t[e];return r===Yr?void 0:r}return ea.call(t,e)?t[e]:void 0}var ra=ta,aa=P,ia=Object.prototype,na=ia.hasOwnProperty;function sa(e){var t=this.__data__;return aa?t[e]!==void 0:na.call(t,e)}var oa=sa,la=P,ca="__lodash_hash_undefined__";function ha(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=la&&t===void 0?ca:t,this}var ua=ha,da=Vr,pa=Qr,fa=ra,va=oa,ga=ua;function $(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}$.prototype.clear=da,$.prototype.delete=pa,$.prototype.get=fa,$.prototype.has=va,$.prototype.set=ga;var ya=$,oe=ya,ba=M,_a=ne;function $a(){this.size=0,this.__data__={hash:new oe,map:new(_a||ba),string:new oe}}var ma=$a;function xa(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Oa=xa,Ca=Oa;function Sa(e,t){var r=e.__data__;return Ca(t)?r[typeof t=="string"?"string":"hash"]:r.map}var E=Sa,wa=E;function ja(e){var t=wa(this,e).delete(e);return this.size-=t?1:0,t}var Ta=ja,Aa=E;function Ia(e){return Aa(this,e).get(e)}var Ma=Ia,Pa=E;function Ea(e){return Pa(this,e).has(e)}var Da=Ea,Ba=E;function La(e,t){var r=Ba(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Ua=La,za=ma,Fa=Ta,Ga=Ma,Ra=Da,qa=Ua;function m(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}m.prototype.clear=za,m.prototype.delete=Fa,m.prototype.get=Ga,m.prototype.has=Ra,m.prototype.set=qa;var ka=m,Ha=M,Na=ne,Ka=ka,Wa=200;function Va(e,t){var r=this.__data__;if(r instanceof Ha){var a=r.__data__;if(!Na||a.length<Wa-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ka(a)}return r.set(e,t),this.size=r.size,this}var Xa=Va,Qa=M,Ja=Br,Ya=Ur,Za=Fr,ei=Rr,ti=Xa;function x(e){var t=this.__data__=new Qa(e);this.size=t.size}x.prototype.clear=Ja,x.prototype.delete=Ya,x.prototype.get=Za,x.prototype.has=ei,x.prototype.set=ti;var ri=x,le=re;function ai(e,t,r){t=="__proto__"&&le?le(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var R=ai,ii=R,ni=A;function si(e,t,r){(r!==void 0&&!ni(e[t],r)||r===void 0&&!(t in e))&&ii(e,t,r)}var ce=si;function oi(e){return function(t,r,a){for(var s=-1,i=Object(t),n=a(t),o=n.length;o--;){var l=n[e?o:++s];if(r(i[l],l,i)===!1)break}return t}}var li=oi,ci=li,hi=ci(),ui=hi,D={exports:{}};D.exports,function(e,t){var r=b,a=t&&!t.nodeType&&t,s=a&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===a,n=i?r.Buffer:void 0,o=n?n.allocUnsafe:void 0;function l(u,d){if(d)return u.slice();var g=u.length,C=o?o(g):new u.constructor(g);return u.copy(C),C}e.exports=l}(D,D.exports);var di=D.exports,pi=b,fi=pi.Uint8Array,vi=fi,he=vi;function gi(e){var t=new e.constructor(e.byteLength);return new he(t).set(new he(e)),t}var yi=gi,bi=yi;function _i(e,t){var r=t?bi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var $i=_i;function mi(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var xi=mi,Oi=v,ue=Object.create,Ci=function(){function e(){}return function(t){if(!Oi(t))return{};if(ue)return ue(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),Si=Ci;function wi(e,t){return function(r){return e(t(r))}}var ji=wi,Ti=ji,Ai=Ti(Object.getPrototypeOf,Object),de=Ai,Ii=Object.prototype;function Mi(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ii;return e===r}var pe=Mi,Pi=Si,Ei=de,Di=pe;function Bi(e){return typeof e.constructor=="function"&&!Di(e)?Pi(Ei(e)):{}}var Li=Bi;function Ui(e){return e!=null&&typeof e=="object"}var w=Ui,zi=T,Fi=w,Gi="[object Arguments]";function Ri(e){return Fi(e)&&zi(e)==Gi}var qi=Ri,fe=qi,ki=w,ve=Object.prototype,Hi=ve.hasOwnProperty,Ni=ve.propertyIsEnumerable,Ki=fe(function(){return arguments}())?fe:function(e){return ki(e)&&Hi.call(e,"callee")&&!Ni.call(e,"callee")},ge=Ki,Wi=Array.isArray,ye=Wi,Vi=9007199254740991;function Xi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vi}var be=Xi,Qi=z,Ji=be;function Yi(e){return e!=null&&Ji(e.length)&&!Qi(e)}var q=Yi,Zi=q,en=w;function tn(e){return en(e)&&Zi(e)}var rn=tn,B={exports:{}};function an(){return!1}var nn=an;B.exports,function(e,t){var r=b,a=nn,s=t&&!t.nodeType&&t,i=s&&!0&&e&&!e.nodeType&&e,n=i&&i.exports===s,o=n?r.Buffer:void 0,l=o?o.isBuffer:void 0,u=l||a;e.exports=u}(B,B.exports);var _e=B.exports,sn=T,on=de,ln=w,cn="[object Object]",hn=Function.prototype,un=Object.prototype,$e=hn.toString,dn=un.hasOwnProperty,pn=$e.call(Object);function fn(e){if(!ln(e)||sn(e)!=cn)return!1;var t=on(e);if(t===null)return!0;var r=dn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&$e.call(r)==pn}var vn=fn,gn=T,yn=be,bn=w,_n="[object Arguments]",$n="[object Array]",mn="[object Boolean]",xn="[object Date]",On="[object Error]",Cn="[object Function]",Sn="[object Map]",wn="[object Number]",jn="[object Object]",Tn="[object RegExp]",An="[object Set]",In="[object String]",Mn="[object WeakMap]",Pn="[object ArrayBuffer]",En="[object DataView]",Dn="[object Float32Array]",Bn="[object Float64Array]",Ln="[object Int8Array]",Un="[object Int16Array]",zn="[object Int32Array]",Fn="[object Uint8Array]",Gn="[object Uint8ClampedArray]",Rn="[object Uint16Array]",qn="[object Uint32Array]",c={};c[Dn]=c[Bn]=c[Ln]=c[Un]=c[zn]=c[Fn]=c[Gn]=c[Rn]=c[qn]=!0,c[_n]=c[$n]=c[Pn]=c[mn]=c[En]=c[xn]=c[On]=c[Cn]=c[Sn]=c[wn]=c[jn]=c[Tn]=c[An]=c[In]=c[Mn]=!1;function kn(e){return bn(e)&&yn(e.length)&&!!c[gn(e)]}var Hn=kn;function Nn(e){return function(t){return e(t)}}var Kn=Nn,L={exports:{}};L.exports,function(e,t){var r=X,a=t&&!t.nodeType&&t,s=a&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===a,n=i&&r.process,o=function(){try{var l=s&&s.require&&s.require("util").types;return l||n&&n.binding&&n.binding("util")}catch{}}();e.exports=o}(L,L.exports);var Wn=L.exports,Vn=Hn,Xn=Kn,me=Wn,xe=me&&me.isTypedArray,Qn=xe?Xn(xe):Vn,Oe=Qn;function Jn(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Ce=Jn,Yn=R,Zn=A,es=Object.prototype,ts=es.hasOwnProperty;function rs(e,t,r){var a=e[t];(!(ts.call(e,t)&&Zn(a,r))||r===void 0&&!(t in e))&&Yn(e,t,r)}var as=rs,is=as,ns=R;function ss(e,t,r,a){var s=!r;r||(r={});for(var i=-1,n=t.length;++i<n;){var o=t[i],l=a?a(r[o],e[o],o,r,e):void 0;l===void 0&&(l=e[o]),s?ns(r,o,l):is(r,o,l)}return r}var os=ss;function ls(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var cs=ls,hs=9007199254740991,us=/^(?:0|[1-9]\d*)$/;function ds(e,t){var r=typeof e;return t=t??hs,!!t&&(r=="number"||r!="symbol"&&us.test(e))&&e>-1&&e%1==0&&e<t}var Se=ds,ps=cs,fs=ge,vs=ye,gs=_e,ys=Se,bs=Oe,_s=Object.prototype,$s=_s.hasOwnProperty;function ms(e,t){var r=vs(e),a=!r&&fs(e),s=!r&&!a&&gs(e),i=!r&&!a&&!s&&bs(e),n=r||a||s||i,o=n?ps(e.length,String):[],l=o.length;for(var u in e)(t||$s.call(e,u))&&!(n&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ys(u,l)))&&o.push(u);return o}var xs=ms;function Os(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Cs=Os,Ss=v,ws=pe,js=Cs,Ts=Object.prototype,As=Ts.hasOwnProperty;function Is(e){if(!Ss(e))return js(e);var t=ws(e),r=[];for(var a in e)a=="constructor"&&(t||!As.call(e,a))||r.push(a);return r}var Ms=Is,Ps=xs,Es=Ms,Ds=q;function Bs(e){return Ds(e)?Ps(e,!0):Es(e)}var we=Bs,Ls=os,Us=we;function zs(e){return Ls(e,Us(e))}var Fs=zs,je=ce,Gs=di,Rs=$i,qs=xi,ks=Li,Te=ge,Ae=ye,Hs=rn,Ns=_e,Ks=z,Ws=v,Vs=vn,Xs=Oe,Ie=Ce,Qs=Fs;function Js(e,t,r,a,s,i,n){var o=Ie(e,r),l=Ie(t,r),u=n.get(l);if(u){je(e,r,u);return}var d=i?i(o,l,r+"",e,t,n):void 0,g=d===void 0;if(g){var C=Ae(l),N=!C&&Ns(l),Ue=!C&&!N&&Xs(l);d=l,C||N||Ue?Ae(o)?d=o:Hs(o)?d=qs(o):N?(g=!1,d=Gs(l,!0)):Ue?(g=!1,d=Rs(l,!0)):d=[]:Vs(l)||Te(l)?(d=o,Te(o)?d=Qs(o):(!Ws(o)||Ks(o))&&(d=ks(l))):g=!1}g&&(n.set(l,d),s(d,l,a,i,n),n.delete(l)),je(e,r,d)}var Ys=Js,Zs=ri,eo=ce,to=ui,ro=Ys,ao=v,io=we,no=Ce;function Me(e,t,r,a,s){e!==t&&to(t,function(i,n){if(s||(s=new Zs),ao(i))ro(e,t,n,r,Me,a,s);else{var o=a?a(no(e,n),i,n+"",e,t,s):void 0;o===void 0&&(o=i),eo(e,n,o)}},io)}var Pe=Me,so=Pe,Ee=v;function De(e,t,r,a,s,i){return Ee(e)&&Ee(t)&&(i.set(t,e),so(e,t,void 0,De,i),i.delete(t)),e}var oo=De,lo=A,co=q,ho=Se,uo=v;function po(e,t,r){if(!uo(r))return!1;var a=typeof t;return(a=="number"?co(r)&&ho(t,r.length):a=="string"&&t in r)?lo(r[t],e):!1}var fo=po,vo=ie,go=fo;function yo(e){return vo(function(t,r){var a=-1,s=r.length,i=s>1?r[s-1]:void 0,n=s>2?r[2]:void 0;for(i=e.length>3&&typeof i=="function"?(s--,i):void 0,n&&go(r[0],r[1],n)&&(i=s<3?void 0:i,s=1),t=Object(t);++a<s;){var o=r[a];o&&e(t,o,a,i)}return t})}var bo=yo,_o=Pe,$o=bo,mo=$o(function(e,t,r,a){_o(e,t,r,a)}),xo=mo,Oo=K,Co=ie,So=oo,wo=xo,jo=Co(function(e){return e.push(void 0,So),Oo(wo,void 0,e)}),To=jo;const Ao=f(To),Io={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}};class k{constructor(t){h(this,"onCreate",()=>{});h(this,"onDestroy",()=>{});h(this,"onUpdate",()=>{});this.overlay=t.overlay,this.img=t.img,this.options=t.options,this.requestUpdate=t.onUpdate}}class Mo extends k{constructor(){super(...arguments);h(this,"onCreate",()=>{this.display=document.createElement("div"),Object.assign(this.display.style,this.options.displayStyles),this.overlay.appendChild(this.display)});h(this,"onDestroy",()=>{});h(this,"onUpdate",()=>{if(!this.display||!this.img)return;const r=this.getCurrentSize();if(this.display.innerHTML=r.join(" &times; "),r[0]>120&&r[1]>30)Object.assign(this.display.style,{right:"4px",bottom:"4px",left:"auto"});else if(this.img.style.float=="right"){const a=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:"auto",bottom:`-${a.height+4}px`,left:`-${a.width+4}px`})}else{const a=this.display.getBoundingClientRect();Object.assign(this.display.style,{right:`-${a.width+4}px`,bottom:`-${a.height+4}px`,left:"auto"})}});h(this,"getCurrentSize",()=>[this.img.width,Math.round(this.img.width/this.img.naturalWidth*this.img.naturalHeight)])}}const Po=`<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`,Eo=`<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`,Do=`<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`,H=window.Quill.imports.parchment,O=new H.StyleAttributor("float","float"),j=new H.StyleAttributor("margin","margin"),U=new H.StyleAttributor("display","display");class Bo extends k{constructor(){super(...arguments);h(this,"onCreate",()=>{this.toolbar=document.createElement("div"),Object.assign(this.toolbar.style,this.options.toolbarStyles),this.overlay.appendChild(this.toolbar),this._defineAlignments(),this._addToolbarButtons()});h(this,"onDestroy",()=>{});h(this,"onUpdate",()=>{});h(this,"_defineAlignments",()=>{this.alignments=[{icon:Po,apply:()=>{U.add(this.img,"inline"),O.add(this.img,"left"),j.add(this.img,"0 1em 1em 0")},isApplied:()=>O.value(this.img)=="left"},{icon:Eo,apply:()=>{U.add(this.img,"block"),O.remove(this.img),j.add(this.img,"auto")},isApplied:()=>j.value(this.img)=="auto"},{icon:Do,apply:()=>{U.add(this.img,"inline"),O.add(this.img,"right"),j.add(this.img,"0 0 1em 1em")},isApplied:()=>O.value(this.img)=="right"}]});h(this,"_addToolbarButtons",()=>{const r=[];this.alignments.forEach((a,s)=>{const i=document.createElement("span");r.push(i),i.innerHTML=a.icon,i.addEventListener("click",()=>{r.forEach(n=>n.style.filter=""),a.isApplied()?(O.remove(this.img),j.remove(this.img),U.remove(this.img)):(this._selectButton(i),a.apply()),this.requestUpdate()}),Object.assign(i.style,this.options.toolbarButtonStyles),s>0&&(i.style.borderLeftWidth="0"),Object.assign(i.children[0].style,this.options.toolbarButtonSvgStyles),a.isApplied()&&this._selectButton(i),this.toolbar.appendChild(i)})});h(this,"_selectButton",r=>{r.style.filter="invert(20%)"})}}class Lo extends k{constructor(){super(...arguments);h(this,"onCreate",()=>{this.boxes=[],this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.positionBoxes()});h(this,"onDestroy",()=>{this.setCursor("")});h(this,"positionBoxes",()=>{const r=`${-parseFloat(this.options.handleStyles.width)/2}px`,a=`${-parseFloat(this.options.handleStyles.height)/2}px`;[{left:r,top:a},{right:r,top:a},{right:r,bottom:a},{left:r,bottom:a}].forEach((s,i)=>{Object.assign(this.boxes[i].style,s)})});h(this,"addBox",r=>{const a=document.createElement("div");Object.assign(a.style,this.options.handleStyles),a.style.cursor=r,a.style.width=`${this.options.handleStyles.width}px`,a.style.height=`${this.options.handleStyles.height}px`,a.addEventListener("mousedown",this.handleMousedown,!1),this.overlay.appendChild(a),this.boxes.push(a)});h(this,"handleMousedown",r=>{this.dragBox=r.target,this.dragStartX=r.clientX,this.preDragWidth=this.img.width||this.img.naturalWidth,this.setCursor(this.dragBox.style.cursor),document.addEventListener("mousemove",this.handleDrag,!1),document.addEventListener("mouseup",this.handleMouseup,!1)});h(this,"handleMouseup",()=>{this.setCursor(""),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleMouseup)});h(this,"handleDrag",r=>{if(!this.img)return;const a=r.clientX-this.dragStartX;this.dragBox===this.boxes[0]||this.dragBox===this.boxes[3]?this.img.width=Math.round(this.preDragWidth-a):this.img.width=Math.round(this.preDragWidth+a),this.requestUpdate()});h(this,"setCursor",r=>{[document.body,this.img].forEach(a=>{a.style.cursor=r})})}}const Uo=Object.freeze(["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"]),zo={DisplaySize:Mo,Toolbar:Bo,Resize:Lo};class Be{constructor(t,r={}){var s;this.moduleClasses=[],this.modules=[],this.onUpdate=()=>{this.repositionElements(),this.modules.forEach(i=>{i.onUpdate()})},this.removeModules=()=>{this.modules.forEach(i=>{i.onDestroy()}),this.modules=[]},this.handleClick=i=>{var o;const n=i.target;if(((o=n==null?void 0:n.tagName)==null?void 0:o.toUpperCase())==="IMG"){if(this.img===n)return;this.img&&this.hide(),this.show(n)}else this.img&&this.hide()},this.show=i=>{this.img=i,this.showOverlay(),this.initializeModules()},this.showOverlay=()=>{this.overlay&&this.hideOverlay(),this.quill.setSelection(null),this.setUserSelect("none"),document.addEventListener("keyup",this.checkImageKeyUp,!0),this.quill.root.addEventListener("input",this.checkImageInput,!0),this.overlay=document.createElement("div"),Object.assign(this.overlay.style,this.options.overlayStyles),this.quill.root.parentNode.appendChild(this.overlay),this.repositionElements()},this.hideOverlay=()=>{this.overlay&&(this.quill.root.parentNode.removeChild(this.overlay),this.overlay=void 0,document.removeEventListener("keyup",this.checkImageKeyUp),this.quill.root.removeEventListener("input",this.checkImageInput),this.setUserSelect(""))},this.repositionElements=()=>{if(!this.overlay||!this.img)return;const i=this.quill.root.parentNode,n=this.img.getBoundingClientRect(),o=i.getBoundingClientRect();Object.assign(this.overlay.style,{left:`${n.left-o.left-1+i.scrollLeft}px`,top:`${n.top-o.top+i.scrollTop}px`,width:`${n.width}px`,height:`${n.height}px`})},this.hide=()=>{this.hideOverlay(),this.removeModules(),this.img=void 0},this.setUserSelect=i=>{Uo.forEach(n=>{this.quill.root.style[n]=i,document.documentElement.style[n]=i})},this.checkImageKeyUp=i=>{var n;this.img&&(["Backspace","Delete"].includes(i.code)&&((n=window.Quill)==null||n.find(this.img).deleteAt(0)),this.hide())},this.checkImageInput=i=>{var n;this.img&&(["deleteContentForward","deleteContentBackward"].includes(i.inputType)&&((n=window.Quill)==null||n.find(this.img).deleteAt(0)),this.hide())},this.initializeModules=this.initializeModules.bind(this),this.quill=t,this.options=Ao({},r,Io),(s=r.modules)!=null&&s.length&&(this.moduleClasses=r.modules.slice()),this.quill.root.addEventListener("click",this.handleClick,!1);const a=this.quill.root.parentNode;a.style.position=a.style.position||"relative",this.modules=[],this.moduleClasses=this.options.modules||[]}initializeModules(){var t;this.removeModules(),this.modules=((t=this.moduleClasses)==null?void 0:t.map(r=>new(zo[r]||r)(this)))||[],this.modules.forEach(r=>{r.onCreate()}),this.onUpdate()}}return(Le=window.Quill)==null||Le.register("modules/imageResizor",Be),Be});
