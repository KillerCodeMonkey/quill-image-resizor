const p = {
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
class T {
  constructor(t) {
    this.onCreate = () => {
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this.overlay = t.overlay, this.img = t.img, this.options = t.options, this.requestUpdate = t.onUpdate;
  }
}
class Q extends T {
  constructor(t) {
    super(t), this.display = null, this.onCreate = () => {
      var e;
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), (e = this.overlay) == null || e.appendChild(this.display);
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
      if (!this.display || !this.img)
        return;
      const e = this.getCurrentSize();
      if (this.display.innerHTML = e.join(" &times; "), e[0] > 120 && e[1] > 30)
        Object.assign(this.display.style, {
          right: "4px",
          bottom: "4px",
          left: "auto"
        });
      else if (this.img.style.float == "right") {
        const s = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: "auto",
          bottom: `-${s.height + 4}px`,
          left: `-${s.width + 4}px`
        });
      } else {
        const s = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: `-${s.width + 4}px`,
          bottom: `-${s.height + 4}px`,
          left: "auto"
        });
      }
    }, this.getCurrentSize = () => {
      var e;
      return [
        ((e = this.img) == null ? void 0 : e.width) || 0,
        this.img ? Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight) : 0
      ];
    };
  }
}
const X = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, Y = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, V = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`;
class H extends T {
  constructor(t) {
    super(t), this.alignments = [], this.onCreate = () => {
      var e;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (e = this.overlay) == null || e.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._stylesSet = () => d.displayStyle && d.floatStyle && d.marginStyle, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: X,
          apply: () => {
            var e, s, i;
            this.img && ((e = d.displayStyle) == null || e.add(this.img, "inline"), (s = d.floatStyle) == null || s.add(this.img, "left"), (i = d.marginStyle) == null || i.add(this.img, "0 1em 1em 0"));
          },
          isApplied: () => {
            var e;
            return this.img ? ((e = d.floatStyle) == null ? void 0 : e.value(this.img)) === "left" : !1;
          }
        },
        {
          icon: Y,
          apply: () => {
            var e, s, i;
            this.img && ((e = d.floatStyle) == null || e.remove(this.img), (s = d.displayStyle) == null || s.add(this.img, "block"), (i = d.marginStyle) == null || i.add(this.img, "auto"));
          },
          isApplied: () => {
            var e;
            return this.img ? ((e = d.marginStyle) == null ? void 0 : e.value(this.img)) === "auto" : !1;
          }
        },
        {
          icon: V,
          apply: () => {
            var e, s, i;
            if (!this.img)
              return !1;
            (e = d.displayStyle) == null || e.add(this.img, "inline"), (s = d.floatStyle) == null || s.add(this.img, "right"), (i = d.marginStyle) == null || i.add(this.img, "0 0em 1em 1em");
          },
          isApplied: () => {
            var e;
            return this.img ? ((e = d.floatStyle) == null ? void 0 : e.value(this.img)) === "right" : !1;
          }
        }
      ];
    }, this._addToolbarButtons = () => {
      const e = [];
      this.alignments.forEach((s, i) => {
        var o;
        const r = document.createElement("span");
        e.push(r), r.innerHTML = s.icon, r.addEventListener("click", () => {
          var a, n, c;
          e.forEach((f) => f.style.filter = ""), s.isApplied() ? this.img && ((a = d.floatStyle) == null || a.remove(this.img), (n = d.marginStyle) == null || n.remove(this.img), (c = d.displayStyle) == null || c.remove(this.img)) : (this._selectButton(r), s.apply()), this.requestUpdate();
        }), Object.assign(r.style, this.options.toolbarButtonStyles), i > 0 && (r.style.borderLeftWidth = "0"), Object.assign(r.children[0].style, this.options.toolbarButtonSvgStyles), s.isApplied() && this._selectButton(r), (o = this.toolbar) == null || o.appendChild(r);
      });
    }, this._selectButton = (e) => {
      e.style.filter = "invert(20%)";
    };
  }
}
class G extends T {
  constructor(t) {
    super(t), this.boxes = [], this.dragBox = null, this.dragStartX = 0, this.preDragWidth = 0, this.onCreate = () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    }, this.onDestroy = () => {
      this.setCursor("");
    }, this.positionBoxes = () => {
      var i, r;
      const e = `${-parseFloat(((i = this.options.handleStyles) == null ? void 0 : i.width.toString()) || "0") / 2}px`, s = `${-parseFloat(((r = this.options.handleStyles) == null ? void 0 : r.height.toString()) || "0") / 2}px`;
      [
        { left: e, top: s },
        // top left
        { right: e, top: s },
        // top right
        { right: e, bottom: s },
        // bottom right
        { left: e, bottom: s }
        // bottom left
      ].forEach((o, a) => {
        Object.assign(this.boxes[a].style, o);
      });
    }, this.addBox = (e) => {
      var i, r, o;
      const s = document.createElement("div");
      Object.assign(s.style, this.options.handleStyles), s.style.cursor = e, s.style.width = `${((i = this.options.handleStyles) == null ? void 0 : i.width) || 0}px`, s.style.height = `${((r = this.options.handleStyles) == null ? void 0 : r.height) || 0}px`, s.addEventListener("mousedown", this.handleMousedown, !1), (o = this.overlay) == null || o.appendChild(s), this.boxes.push(s);
    }, this.handleMousedown = (e) => {
      var s, i;
      this.dragBox = e.target, this.dragStartX = e.clientX, this.preDragWidth = ((s = this.img) == null ? void 0 : s.width) || ((i = this.img) == null ? void 0 : i.naturalWidth) || 0, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    }, this.handleMouseup = () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    }, this.handleDrag = (e) => {
      if (!this.img)
        return;
      const s = e.clientX - this.dragStartX;
      this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3] ? this.img.width = Math.round(this.preDragWidth - s) : this.img.width = Math.round(this.preDragWidth + s), this.requestUpdate();
    }, this.setCursor = (e) => {
      [document.body, this.img].forEach((i) => {
        i && (i.style.cursor = e);
      });
    };
  }
}
var h = /* @__PURE__ */ ((l) => (l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY", l))(h || {});
class A {
  constructor(t, e, s = {}) {
    this.attrName = t, this.keyName = e;
    const i = h.TYPE & h.ATTRIBUTE;
    this.scope = s.scope != null ? (
      // Ignore type bits, force attribute bit
      s.scope & h.LEVEL | i
    ) : h.ATTRIBUTE, s.whitelist != null && (this.whitelist = s.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class b extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const q = class C {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let s = null;
      try {
        s = t.parentNode;
      } catch {
        return null;
      }
      return this.find(s, e);
    }
    return null;
  }
  create(t, e, s) {
    const i = this.query(e);
    if (i == null)
      throw new b(`Unable to create ${e} blot`);
    const r = i, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : r.create(s)
    ), a = new r(t, o, s);
    return C.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return C.find(t, e);
  }
  query(t, e = h.ANY) {
    let s;
    return typeof t == "string" ? s = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? s = this.types.text : typeof t == "number" ? t & h.LEVEL & h.BLOCK ? s = this.types.block : t & h.LEVEL & h.INLINE && (s = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((i) => (s = this.classes[i], !!s)), s = s || this.tags[t.tagName]), s == null ? null : "scope" in s && e & h.LEVEL & s.scope && e & h.TYPE & s.scope ? s : null;
  }
  register(...t) {
    return t.map((e) => {
      const s = "blotName" in e, i = "attrName" in e;
      if (!s && !i)
        throw new b("Invalid definition");
      if (s && e.blotName === "abstract")
        throw new b("Cannot register abstract class");
      const r = s ? e.blotName : i ? e.attrName : void 0;
      return this.types[r] = e, i ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : s && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
q.blots = /* @__PURE__ */ new WeakMap();
let L = q;
function k(l, t) {
  return (l.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class Z extends A {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    k(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (k(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const J = Z;
function w(l) {
  const t = l.split("-"), e = t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  return t[0] + e;
}
class tt extends A {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[w(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[w(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[w(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const et = tt;
class st {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = L.find(this.domNode);
    if (t == null)
      return;
    const e = A.keys(this.domNode), s = J.keys(this.domNode), i = et.keys(this.domNode);
    e.concat(s).concat(i).forEach((r) => {
      const o = t.scroll.query(r, h.ATTRIBUTE);
      o instanceof A && (this.attributes[o.attrName] = o);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const s = this.attributes[e].value(this.domNode);
      t.format(e, s);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const D = st, R = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, L.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new b("Blot definition missing tagName");
    let e, s;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (s = t.toUpperCase(), parseInt(s, 10).toString() === s && (s = parseInt(s, 10))) : typeof t == "number" && (s = t), typeof s == "number" ? e = document.createElement(this.tagName[s - 1]) : s && this.tagName.indexOf(s) > -1 ? e = document.createElement(s) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), L.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, s, i) {
    const r = this.isolate(t, e);
    if (this.scroll.query(s, h.BLOT) != null && i)
      r.wrap(s, i);
    else if (this.scroll.query(s, h.ATTRIBUTE) != null) {
      const o = this.scroll.create(this.statics.scope);
      r.wrap(o), o.format(s, i);
    }
  }
  insertAt(t, e, s) {
    const i = s == null ? this.scroll.create("text", e) : this.scroll.create(e, s), r = this.split(t);
    this.parent.insertBefore(i, r || void 0);
  }
  isolate(t, e) {
    const s = this.split(t);
    if (s == null)
      throw new Error("Attempt to isolate at end");
    return s.split(e), s;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(s, this.next || void 0), this.remove()), s;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(s, this.next || void 0), typeof s.appendChild != "function")
      throw new b(`Cannot wrap ${t}`);
    return s.appendChild(this), s;
  }
};
R.blotName = "abstract";
let $ = R;
const W = class extends $ {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let s = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (s += 1), [this.parent.domNode, s];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
W.scope = h.INLINE_BLOT;
let it = W;
const E = it;
class rt {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let s = e();
    for (; s && t > 0; )
      t -= 1, s = e();
    return s;
  }
  contains(t) {
    const e = this.iterator();
    let s = e();
    for (; s; ) {
      if (s === t)
        return !0;
      s = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let s = e(), i = 0;
    for (; s; ) {
      if (s === t)
        return i;
      i += 1, s = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, s = this.head;
    for (; s != null; ) {
      if (s === t)
        return e;
      e += s.length(), s = s.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const s = this.iterator();
    let i = s();
    for (; i; ) {
      const r = i.length();
      if (t < r || e && t === r && (i.next == null || i.next.length() !== 0))
        return [i, t];
      t -= r, i = s();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let s = e();
    for (; s; )
      t(s), s = e();
  }
  forEachAt(t, e, s) {
    if (e <= 0)
      return;
    const [i, r] = this.find(t);
    let o = t - r;
    const a = this.iterator(i);
    let n = a();
    for (; n && o < t + e; ) {
      const c = n.length();
      t > o ? s(
        n,
        t - o,
        Math.min(e, o + c - t)
      ) : s(n, 0, Math.min(c, t + e - o)), o += c, n = a();
    }
  }
  map(t) {
    return this.reduce((e, s) => (e.push(t(s)), e), []);
  }
  reduce(t, e) {
    const s = this.iterator();
    let i = s();
    for (; i; )
      e = t(e, i), i = s();
    return e;
  }
}
function I(l, t) {
  const e = t.find(l);
  if (e)
    return e;
  try {
    return t.create(l);
  } catch {
    const s = t.create(h.INLINE);
    return Array.from(l.childNodes).forEach((i) => {
      s.domNode.appendChild(i);
    }), l.parentNode && l.parentNode.replaceChild(s.domNode, l), s.attach(), s;
  }
}
const j = class m extends $ {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, m.uiClass && this.uiNode.classList.add(m.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new rt(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = I(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof b)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (s, i, r) => {
      s.deleteAt(i, r);
    });
  }
  descendant(t, e = 0) {
    const [s, i] = this.children.find(e);
    return t.blotName == null && t(s) || t.blotName != null && s instanceof t ? [s, i] : s instanceof m ? s.descendant(t, i) : [null, -1];
  }
  descendants(t, e = 0, s = Number.MAX_VALUE) {
    let i = [], r = s;
    return this.children.forEachAt(
      e,
      s,
      (o, a, n) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && i.push(o), o instanceof m && (i = i.concat(
          o.descendants(t, a, r)
        )), r -= n;
      }
    ), i;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (s) => e instanceof s
      ) || (e.statics.scope === h.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof m ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, s, i) {
    this.children.forEachAt(t, e, (r, o, a) => {
      r.formatAt(o, a, s, i);
    });
  }
  insertAt(t, e, s) {
    const [i, r] = this.children.find(t);
    if (i)
      i.insertAt(r, e, s);
    else {
      const o = s == null ? this.scroll.create("text", e) : this.scroll.create(e, s);
      this.appendChild(o);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let s = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (s = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== s) && this.domNode.insertBefore(t.domNode, s), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((s) => {
      t.insertBefore(s, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [s, i] = this.children.find(t, e), r = [[this, t]];
    return s instanceof m ? r.concat(s.path(i, e)) : (s != null && r.push([s, i]), r);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const s = typeof t == "string" ? this.scroll.create(t, e) : t;
    return s instanceof m && this.moveChildren(s), super.replaceWith(s);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const s = this.clone();
    return this.parent && this.parent.insertBefore(s, this.next || void 0), this.children.forEachAt(t, this.length(), (i, r, o) => {
      const a = i.split(r, e);
      a != null && s.appendChild(a);
    }), s;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const s = [], i = [];
    t.forEach((r) => {
      r.target === this.domNode && r.type === "childList" && (s.push(...r.addedNodes), i.push(...r.removedNodes));
    }), i.forEach((r) => {
      if (r.parentNode != null && // @ts-expect-error Fix me later
      r.tagName !== "IFRAME" && document.body.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const o = this.scroll.find(r);
      o != null && (o.domNode.parentNode == null || o.domNode.parentNode === this.domNode) && o.detach();
    }), s.filter((r) => r.parentNode === this.domNode && r !== this.uiNode).sort((r, o) => r === o ? 0 : r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((r) => {
      let o = null;
      r.nextSibling != null && (o = this.scroll.find(r.nextSibling));
      const a = I(r, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
j.uiClass = "";
let ot = j;
const x = ot;
function lt(l, t) {
  if (Object.keys(l).length !== Object.keys(t).length)
    return !1;
  for (const e in l)
    if (l[e] !== t[e])
      return !1;
  return !0;
}
const g = class y extends x {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(y.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new D(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((s) => {
        s instanceof y || (s = s.wrap(y.blotName, !0)), this.attributes.copy(s);
      }), this.unwrap();
    else {
      const s = this.scroll.query(t, h.INLINE);
      if (s == null)
        return;
      s instanceof A ? this.attributes.attribute(s, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, i) {
    this.formats()[s] != null || this.scroll.query(s, h.ATTRIBUTE) ? this.isolate(t, e).format(s, i) : super.formatAt(t, e, s, i);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const s = this.next;
    s instanceof y && s.prev === this && lt(e, s.formats()) && (s.moveChildren(this), s.remove());
  }
  replaceWith(t, e) {
    const s = super.replaceWith(t, e);
    return this.attributes.copy(s), s;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (s) => s.target === this.domNode && s.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const s = super.wrap(t, e);
    return s instanceof y && this.attributes.move(s), s;
  }
};
g.allowedChildren = [g, E], g.blotName = "inline", g.scope = h.INLINE_BLOT, g.tagName = "SPAN";
let at = g;
const nt = at, N = class S extends x {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(S.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new D(this.domNode);
  }
  format(t, e) {
    const s = this.scroll.query(t, h.BLOCK);
    s != null && (s instanceof A ? this.attributes.attribute(s, e) : t === this.statics.blotName && !e ? this.replaceWith(S.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, i) {
    this.scroll.query(s, h.BLOCK) != null ? this.format(s, i) : super.formatAt(t, e, s, i);
  }
  insertAt(t, e, s) {
    if (s == null || this.scroll.query(e, h.INLINE) != null)
      super.insertAt(t, e, s);
    else {
      const i = this.split(t);
      if (i != null) {
        const r = this.scroll.create(e, s);
        i.parent.insertBefore(r, i);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const s = super.replaceWith(t, e);
    return this.attributes.copy(s), s;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (s) => s.target === this.domNode && s.type === "attributes"
    ) && this.attributes.build();
  }
};
N.blotName = "block", N.scope = h.BLOCK_BLOT, N.tagName = "P", N.allowedChildren = [
  nt,
  N,
  E
];
let ht = N;
const M = ht, O = class extends x {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, s, i) {
    super.formatAt(t, e, s, i), this.enforceAllowedChildren();
  }
  insertAt(t, e, s) {
    super.insertAt(t, e, s), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
O.blotName = "container", O.scope = h.BLOCK_BLOT;
let ct = O;
const dt = ct;
class ut extends E {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, s, i) {
    t === 0 && e === this.length() ? this.format(s, i) : super.formatAt(t, e, s, i);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const mt = ut, pt = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, ft = 100, v = class extends x {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((s) => {
      this.update(s);
    }), this.observer.observe(this.domNode, pt), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const s = this.registry.find(t, e);
    return s ? s.scroll === this ? s : e ? this.find(s.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = h.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((s) => {
      s.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, s, i) {
    this.update(), super.formatAt(t, e, s, i);
  }
  insertAt(t, e, s) {
    this.update(), super.insertAt(t, e, s);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const s = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let i = Array.from(this.observer.takeRecords());
    for (; i.length > 0; )
      t.push(i.pop());
    const r = (n, c = !0) => {
      n == null || n === this || n.domNode.parentNode != null && (s.has(n.domNode) || s.set(n.domNode, []), c && r(n.parent));
    }, o = (n) => {
      s.has(n.domNode) && (n instanceof x && n.children.forEach(o), s.delete(n.domNode), n.optimize(e));
    };
    let a = t;
    for (let n = 0; a.length > 0; n += 1) {
      if (n >= ft)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((c) => {
        const f = this.find(c.target, !0);
        f != null && (f.domNode === c.target && (c.type === "childList" ? (r(this.find(c.previousSibling, !1)), Array.from(c.addedNodes).forEach((K) => {
          const B = this.find(K, !1);
          r(B, !1), B instanceof x && B.children.forEach((F) => {
            r(F, !1);
          });
        })) : c.type === "attributes" && r(f.prev)), r(f));
      }), this.children.forEach(o), a = Array.from(this.observer.takeRecords()), i = a.slice(); i.length > 0; )
        t.push(i.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const s = /* @__PURE__ */ new WeakMap();
    t.map((i) => {
      const r = this.find(i.target, !0);
      return r == null ? null : s.has(r.domNode) ? (s.get(r.domNode).push(i), null) : (s.set(r.domNode, [i]), r);
    }).forEach((i) => {
      i != null && i !== this && s.has(i.domNode) && i.update(s.get(i.domNode) || [], e);
    }), e.mutationsMap = s, s.has(this.domNode) && super.update(s.get(this.domNode), e), this.optimize(t, e);
  }
};
v.blotName = "scroll", v.defaultChild = M, v.allowedChildren = [M, dt], v.scope = h.BLOCK_BLOT, v.tagName = "DIV";
const U = class P extends E {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, s) {
    s == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, s);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof P && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const s = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(s, this.next || void 0), this.text = this.statics.value(this.domNode), s;
  }
  update(t, e) {
    t.some((s) => s.type === "characterData" && s.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
U.blotName = "text", U.scope = h.INLINE_BLOT;
class _ extends mt {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
_.blotName = "break";
_.tagName = "BR";
function gt(l, t) {
  const e = document.createElement("a");
  e.href = l;
  const s = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(s) > -1;
}
const yt = ["alt", "height", "width", "style"], Nt = (l) => {
  var e;
  const t = l.import("blots/block/embed");
  return e = class extends t {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static create(i) {
      const r = super.create(i);
      return typeof i == "string" ? r.setAttribute("src", i) : typeof i == "object" && i !== null && (i.src && r.setAttribute("src", i.src), this.allowedFormatAttributesList.forEach((o) => {
        i[o] && r.setAttribute(o, i[o] ?? "");
      })), console.log(r), r;
    }
    static formats(i) {
      return this.allowedFormatAttributesList.reduce((r, o) => (i.hasAttribute(o) && (r[o] = i.getAttribute(o) || ""), r), {});
    }
    static match(i) {
      return /\.(jpe?g|gif|png)$/.test(i) || /^data:image\/.+;base64/.test(i);
    }
    static sanitize(i) {
      return gt(i, ["http", "https", "data"]) ? i : "//:0";
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static value(i) {
      const r = i.getAttribute("src");
      if (!r) return null;
      const o = this.formats(i);
      return Object.keys(o).length > 0 ? {
        src: r,
        ...o
      } : r;
    }
    format(i, r) {
      if (console.log("format", i, r), e.allowedFormatAttributesList.indexOf(i) > -1) {
        const o = this.domNode;
        r ? o.setAttribute(i, r) : o.removeAttribute(i);
      } else
        super.format(i, r);
    }
  }, e.blotName = "image", e.tagName = "IMG", e.internalName = "ResizorImageFormat", e.allowedFormatAttributesList = yt, e;
}, bt = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), xt = { DisplaySize: Q, Toolbar: H, Resize: G }, u = class u {
  constructor(t, e = {}) {
    var i, r, o;
    if (this.moduleClasses = [], this.modules = [], this.onUpdate = () => {
      this.repositionElements(), this.modules.forEach((a) => {
        a.onUpdate();
      });
    }, this.removeModules = () => {
      this.modules.forEach((a) => {
        a.onDestroy();
      }), this.modules = [];
    }, this.handleClick = (a) => {
      var c;
      const n = a.target;
      if (((c = n == null ? void 0 : n.tagName) == null ? void 0 : c.toUpperCase()) === "IMG") {
        if (this.img === n)
          return;
        this.img && this.hide(), this.show(n);
      } else this.img && this.hide();
    }, this.show = (a) => {
      this.img = a, this.showOverlay(), this.initializeModules();
    }, this.showOverlay = () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImageKeyUp, !0), this.quill.root.addEventListener("input", this.checkImageInput, !0), window.addEventListener("resize", this.repositionElements), this.overlay = document.createElement("div"), this.overlay.classList.add("ql-image-resizor"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
    }, this.hideOverlay = () => {
      this.overlay && (this.quill.root.parentNode.removeChild(this.overlay), this.overlay = void 0, document.removeEventListener("keyup", this.checkImageKeyUp), this.quill.root.removeEventListener("input", this.checkImageInput), window.removeEventListener("resize", this.repositionElements), this.setUserSelect(""));
    }, this.repositionElements = () => {
      if (!this.overlay || !this.img)
        return;
      const a = this.quill.root.parentNode, n = this.img.getBoundingClientRect(), c = a.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${n.left - c.left - 1 + a.scrollLeft}px`,
        top: `${n.top - c.top + a.scrollTop}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      });
    }, this.hide = () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    }, this.setUserSelect = (a) => {
      bt.forEach((n) => {
        this.quill.root.style[n] = a, document.documentElement.style[n] = a;
      });
    }, this.checkImageKeyUp = (a) => {
      var n;
      if (this.img) {
        if (["Backspace", "Delete"].includes(a.code)) {
          const c = (n = u.Quill) == null ? void 0 : n.find(this.img);
          c && c.deleteAt(0);
        }
        this.hide();
      }
    }, this.checkImageInput = (a) => {
      var n;
      if (this.img) {
        if (["deleteContentForward", "deleteContentBackward"].includes(a.inputType)) {
          const c = (n = u.Quill) == null ? void 0 : n.find(this.img);
          c && c.deleteAt(0);
        }
        this.hide();
      }
    }, !u.Quill)
      throw "ImageResizor.Quill not set.";
    if (this.initializeModules = this.initializeModules.bind(this), ((i = u.Quill.import("formats/image")) == null ? void 0 : i.internalName) !== "ResizorImageFormat" && u.Quill.register("formats/image", Nt(u.Quill)), !u.floatStyle || !u.displayStyle || !u.marginStyle) {
      const a = u.Quill.imports.parchment;
      u.floatStyle = new a.StyleAttributor("float", "float"), u.displayStyle = new a.StyleAttributor("display", "display"), u.marginStyle = new a.StyleAttributor("margin", "margin");
    }
    this.quill = t, this.options = {
      modules: (r = e.modules) != null && r.length ? e.modules : p.modules,
      displayStyles: { ...p.displayStyles, ...e.displayStyles },
      handleStyles: { ...p.handleStyles, ...e.handleStyles },
      overlayStyles: { ...p.overlayStyles, ...e.overlayStyles },
      toolbarButtonStyles: { ...p.toolbarButtonStyles, ...e.toolbarButtonStyles },
      toolbarButtonSvgStyles: { ...p.toolbarButtonSvgStyles, ...e.toolbarButtonSvgStyles },
      toolbarStyles: { ...p.toolbarStyles, ...e.toolbarStyles }
    }, (o = e.modules) != null && o.length && (this.moduleClasses = e.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const s = this.quill.root.parentNode;
    s.style.position = s.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var t;
    this.removeModules(), this.modules = ((t = this.moduleClasses) == null ? void 0 : t.map((e) => new (xt[e] || e)(this))) || [], this.modules.forEach((e) => {
      e.onCreate();
    }), this.onUpdate();
  }
};
u.floatStyle = null, u.marginStyle = null, u.displayStyle = null, u.Quill = window.Quill ?? null;
let d = u;
var z;
(z = window.Quill) == null || z.register("modules/imageResizor", d);
export {
  d as default
};
