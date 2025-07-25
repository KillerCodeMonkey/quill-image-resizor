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
class F extends T {
  constructor(t) {
    super(t), this.display = null, this.onCreate = () => {
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), this.overlay?.appendChild(this.display);
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
    }, this.getCurrentSize = () => [
      this.img?.width || 0,
      this.img ? Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight) : 0
    ];
  }
}
const Q = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, X = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, Y = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`;
class V extends T {
  constructor(t) {
    super(t), this.alignments = [], this.onCreate = () => {
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), this.overlay?.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._stylesSet = () => c.displayStyle && c.floatStyle && c.marginStyle, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: Q,
          apply: () => {
            this.img && (c.displayStyle?.add(this.img, "inline"), c.floatStyle?.add(this.img, "left"), c.marginStyle?.add(this.img, "0 1em 1em 0"));
          },
          isApplied: () => this.img ? c.floatStyle?.value(this.img) === "left" : !1
        },
        {
          icon: X,
          apply: () => {
            this.img && (c.floatStyle?.remove(this.img), c.displayStyle?.add(this.img, "block"), c.marginStyle?.add(this.img, "auto"));
          },
          isApplied: () => this.img ? c.marginStyle?.value(this.img) === "auto" : !1
        },
        {
          icon: Y,
          apply: () => {
            if (!this.img)
              return !1;
            c.displayStyle?.add(this.img, "inline"), c.floatStyle?.add(this.img, "right"), c.marginStyle?.add(this.img, "0 0em 1em 1em");
          },
          isApplied: () => this.img ? c.floatStyle?.value(this.img) === "right" : !1
        }
      ];
    }, this._addToolbarButtons = () => {
      const e = [];
      this.alignments.forEach((s, i) => {
        const r = document.createElement("span");
        e.push(r), r.innerHTML = s.icon, r.addEventListener("click", () => {
          e.forEach((o) => o.style.filter = ""), s.isApplied() ? this.img && (c.floatStyle?.remove(this.img), c.marginStyle?.remove(this.img), c.displayStyle?.remove(this.img)) : (this._selectButton(r), s.apply()), this.requestUpdate();
        }), Object.assign(r.style, this.options.toolbarButtonStyles), i > 0 && (r.style.borderLeftWidth = "0"), Object.assign(r.children[0].style, this.options.toolbarButtonSvgStyles), s.isApplied() && this._selectButton(r), this.toolbar?.appendChild(r);
      });
    }, this._selectButton = (e) => {
      e.style.filter = "invert(20%)";
    };
  }
}
class H extends T {
  constructor(t) {
    super(t), this.boxes = [], this.dragBox = null, this.dragStartX = 0, this.preDragWidth = 0, this.onCreate = () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    }, this.onDestroy = () => {
      this.setCursor("");
    }, this.positionBoxes = () => {
      const e = `${-parseFloat(this.options.handleStyles?.width.toString() || "0") / 2}px`, s = `${-parseFloat(this.options.handleStyles?.height.toString() || "0") / 2}px`;
      [
        { left: e, top: s },
        // top left
        { right: e, top: s },
        // top right
        { right: e, bottom: s },
        // bottom right
        { left: e, bottom: s }
        // bottom left
      ].forEach((i, r) => {
        Object.assign(this.boxes[r].style, i);
      });
    }, this.addBox = (e) => {
      const s = document.createElement("div");
      Object.assign(s.style, this.options.handleStyles), s.style.cursor = e, s.style.width = `${this.options.handleStyles?.width || 0}px`, s.style.height = `${this.options.handleStyles?.height || 0}px`, s.addEventListener("mousedown", this.handleMousedown, !1), this.overlay?.appendChild(s), this.boxes.push(s);
    }, this.handleMousedown = (e) => {
      this.dragBox = e.target, this.dragStartX = e.clientX, this.preDragWidth = this.img?.width || this.img?.naturalWidth || 0, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
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
var a = /* @__PURE__ */ ((l) => (l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY", l))(a || {});
class x {
  constructor(t, e, s = {}) {
    this.attrName = t, this.keyName = e;
    const i = a.TYPE & a.ATTRIBUTE;
    this.scope = s.scope != null ? (
      // Ignore type bits, force attribute bit
      s.scope & a.LEVEL | i
    ) : a.ATTRIBUTE, s.whitelist != null && (this.whitelist = s.whitelist);
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
class N extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const z = class C {
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
      throw new N(`Unable to create ${e} blot`);
    const r = i, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : r.create(s)
    ), n = new r(t, o, s);
    return C.blots.set(n.domNode, n), n;
  }
  find(t, e = !1) {
    return C.find(t, e);
  }
  query(t, e = a.ANY) {
    let s;
    return typeof t == "string" ? s = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? s = this.types.text : typeof t == "number" ? t & a.LEVEL & a.BLOCK ? s = this.types.block : t & a.LEVEL & a.INLINE && (s = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((i) => (s = this.classes[i], !!s)), s = s || this.tags[t.tagName]), s == null ? null : "scope" in s && e & a.LEVEL & s.scope && e & a.TYPE & s.scope ? s : null;
  }
  register(...t) {
    return t.map((e) => {
      const s = "blotName" in e, i = "attrName" in e;
      if (!s && !i)
        throw new N("Invalid definition");
      if (s && e.blotName === "abstract")
        throw new N("Cannot register abstract class");
      const r = s ? e.blotName : i ? e.attrName : void 0;
      return this.types[r] = e, i ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : s && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
z.blots = /* @__PURE__ */ new WeakMap();
let L = z;
function k(l, t) {
  return (l.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class G extends x {
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
const Z = G;
function w(l) {
  const t = l.split("-"), e = t.slice(1).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  return t[0] + e;
}
class J extends x {
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
const tt = J;
class et {
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
    const e = x.keys(this.domNode), s = Z.keys(this.domNode), i = tt.keys(this.domNode);
    e.concat(s).concat(i).forEach((r) => {
      const o = t.scroll.query(r, a.ATTRIBUTE);
      o instanceof x && (this.attributes[o.attrName] = o);
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
const q = et, D = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, L.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new N("Blot definition missing tagName");
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
    if (this.scroll.query(s, a.BLOT) != null && i)
      r.wrap(s, i);
    else if (this.scroll.query(s, a.ATTRIBUTE) != null) {
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
      throw new N(`Cannot wrap ${t}`);
    return s.appendChild(this), s;
  }
};
D.blotName = "abstract";
let R = D;
const $ = class extends R {
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
$.scope = a.INLINE_BLOT;
let st = $;
const E = st;
class it {
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
    const n = this.iterator(i);
    let h = n();
    for (; h && o < t + e; ) {
      const u = h.length();
      t > o ? s(
        h,
        t - o,
        Math.min(e, o + u - t)
      ) : s(h, 0, Math.min(u, t + e - o)), o += u, h = n();
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
    const s = t.create(a.INLINE);
    return Array.from(l.childNodes).forEach((i) => {
      s.domNode.appendChild(i);
    }), l.parentNode && l.parentNode.replaceChild(s.domNode, l), s.attach(), s;
  }
}
const W = class m extends R {
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
    this.children = new it(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = I(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof N)
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
      (o, n, h) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && i.push(o), o instanceof m && (i = i.concat(
          o.descendants(t, n, r)
        )), r -= h;
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
      ) || (e.statics.scope === a.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof m ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, s, i) {
    this.children.forEachAt(t, e, (r, o, n) => {
      r.formatAt(o, n, s, i);
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
      const n = i.split(r, e);
      n != null && s.appendChild(n);
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
      const n = I(r, this.scroll);
      (n.next !== o || n.next == null) && (n.parent != null && n.parent.removeChild(this), this.insertBefore(n, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
W.uiClass = "";
let rt = W;
const b = rt;
function ot(l, t) {
  if (Object.keys(l).length !== Object.keys(t).length)
    return !1;
  for (const e in l)
    if (l[e] !== t[e])
      return !1;
  return !0;
}
const f = class g extends b {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const s = e.query(g.blotName);
    if (!(s != null && t.tagName === s.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new q(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((s) => {
        s instanceof g || (s = s.wrap(g.blotName, !0)), this.attributes.copy(s);
      }), this.unwrap();
    else {
      const s = this.scroll.query(t, a.INLINE);
      if (s == null)
        return;
      s instanceof x ? this.attributes.attribute(s, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, i) {
    this.formats()[s] != null || this.scroll.query(s, a.ATTRIBUTE) ? this.isolate(t, e).format(s, i) : super.formatAt(t, e, s, i);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const s = this.next;
    s instanceof g && s.prev === this && ot(e, s.formats()) && (s.moveChildren(this), s.remove());
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
    return s instanceof g && this.attributes.move(s), s;
  }
};
f.allowedChildren = [f, E], f.blotName = "inline", f.scope = a.INLINE_BLOT, f.tagName = "SPAN";
let lt = f;
const at = lt, y = class S extends b {
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
    super(t, e), this.attributes = new q(this.domNode);
  }
  format(t, e) {
    const s = this.scroll.query(t, a.BLOCK);
    s != null && (s instanceof x ? this.attributes.attribute(s, e) : t === this.statics.blotName && !e ? this.replaceWith(S.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, s, i) {
    this.scroll.query(s, a.BLOCK) != null ? this.format(s, i) : super.formatAt(t, e, s, i);
  }
  insertAt(t, e, s) {
    if (s == null || this.scroll.query(e, a.INLINE) != null)
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
y.blotName = "block", y.scope = a.BLOCK_BLOT, y.tagName = "P", y.allowedChildren = [
  at,
  y,
  E
];
let nt = y;
const M = nt, O = class extends b {
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
O.blotName = "container", O.scope = a.BLOCK_BLOT;
let ht = O;
const ct = ht;
class dt extends E {
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
const ut = dt, mt = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, pt = 100, A = class extends b {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((s) => {
      this.update(s);
    }), this.observer.observe(this.domNode, mt), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const s = this.registry.find(t, e);
    return s ? s.scroll === this ? s : e ? this.find(s.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = a.ANY) {
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
    const r = (h, u = !0) => {
      h == null || h === this || h.domNode.parentNode != null && (s.has(h.domNode) || s.set(h.domNode, []), u && r(h.parent));
    }, o = (h) => {
      s.has(h.domNode) && (h instanceof b && h.children.forEach(o), s.delete(h.domNode), h.optimize(e));
    };
    let n = t;
    for (let h = 0; n.length > 0; h += 1) {
      if (h >= pt)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (n.forEach((u) => {
        const v = this.find(u.target, !0);
        v != null && (v.domNode === u.target && (u.type === "childList" ? (r(this.find(u.previousSibling, !1)), Array.from(u.addedNodes).forEach((P) => {
          const B = this.find(P, !1);
          r(B, !1), B instanceof b && B.children.forEach((K) => {
            r(K, !1);
          });
        })) : u.type === "attributes" && r(v.prev)), r(v));
      }), this.children.forEach(o), n = Array.from(this.observer.takeRecords()), i = n.slice(); i.length > 0; )
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
A.blotName = "scroll", A.defaultChild = M, A.allowedChildren = [M, ct], A.scope = a.BLOCK_BLOT, A.tagName = "DIV";
const U = class _ extends E {
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
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _ && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
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
U.blotName = "text", U.scope = a.INLINE_BLOT;
class j extends ut {
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
j.blotName = "break";
j.tagName = "BR";
function ft(l, t) {
  const e = document.createElement("a");
  e.href = l;
  const s = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(s) > -1;
}
const gt = ["alt", "height", "width", "style"], yt = (l) => {
  var e;
  const t = l.import("blots/block/embed");
  return e = class extends t {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static create(i) {
      const r = super.create(i);
      return typeof i == "string" ? r.setAttribute("src", i) : typeof i == "object" && i !== null && (i.src && r.setAttribute("src", i.src), this.allowedFormatAttributesList.forEach((o) => {
        i[o] && r.setAttribute(o, i[o] ?? "");
      })), r;
    }
    static formats(i) {
      return this.allowedFormatAttributesList.reduce((r, o) => (i.hasAttribute(o) && (r[o] = i.getAttribute(o) || ""), r), {});
    }
    static match(i) {
      return /\.(jpe?g|gif|png)$/.test(i) || /^data:image\/.+;base64/.test(i);
    }
    static sanitize(i) {
      return ft(i, ["http", "https", "data"]) ? i : "//:0";
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
      if (e.allowedFormatAttributesList.indexOf(i) > -1) {
        const o = this.domNode;
        r ? o.setAttribute(i, r) : o.removeAttribute(i);
      } else
        super.format(i, r);
    }
  }, e.blotName = "image", e.tagName = "IMG", e.internalName = "ResizorImageFormat", e.allowedFormatAttributesList = gt, e;
}, Nt = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), bt = { DisplaySize: F, Toolbar: V, Resize: H }, d = class d {
  constructor(t, e = {}) {
    if (this.moduleClasses = [], this.modules = [], this.onUpdate = () => {
      this.repositionElements(), this.modules.forEach((i) => {
        i.onUpdate();
      });
    }, this.removeModules = () => {
      this.modules.forEach((i) => {
        i.onDestroy();
      }), this.modules = [];
    }, this.handleClick = (i) => {
      const r = i.target;
      if (r?.tagName?.toUpperCase() === "IMG") {
        if (this.img === r)
          return;
        this.img && this.hide(), this.show(r);
      } else this.img && this.hide();
    }, this.show = (i) => {
      this.img = i, this.showOverlay(), this.initializeModules();
    }, this.showOverlay = () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImageKeyUp, !0), this.quill.root.addEventListener("input", this.checkImageInput, !0), window.addEventListener("resize", this.repositionElements), this.overlay = document.createElement("div"), this.overlay.classList.add("ql-image-resizor"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
    }, this.hideOverlay = () => {
      this.overlay && (this.quill.root.parentNode.removeChild(this.overlay), this.overlay = void 0, document.removeEventListener("keyup", this.checkImageKeyUp), this.quill.root.removeEventListener("input", this.checkImageInput), window.removeEventListener("resize", this.repositionElements), this.setUserSelect(""));
    }, this.repositionElements = () => {
      if (!this.overlay || !this.img)
        return;
      const i = this.quill.root.parentNode, r = this.img.getBoundingClientRect(), o = i.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${r.left - o.left - 1 + i.scrollLeft}px`,
        top: `${r.top - o.top + i.scrollTop}px`,
        width: `${r.width}px`,
        height: `${r.height}px`
      });
    }, this.hide = () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    }, this.setUserSelect = (i) => {
      Nt.forEach((r) => {
        this.quill.root.style[r] = i, document.documentElement.style[r] = i;
      });
    }, this.checkImageKeyUp = (i) => {
      if (this.img) {
        if (["Backspace", "Delete"].includes(i.code)) {
          const r = d.Quill?.find(this.img);
          r && r.deleteAt(0);
        }
        this.hide();
      }
    }, this.checkImageInput = (i) => {
      if (this.img) {
        if (["deleteContentForward", "deleteContentBackward"].includes(i.inputType)) {
          const r = d.Quill?.find(this.img);
          r && r.deleteAt(0);
        }
        this.hide();
      }
    }, !d.Quill)
      throw "ImageResizor.Quill not set.";
    if (this.initializeModules = this.initializeModules.bind(this), d.Quill.import("formats/image")?.internalName !== "ResizorImageFormat" && d.Quill.register("formats/image", yt(d.Quill)), !d.floatStyle || !d.displayStyle || !d.marginStyle) {
      const i = d.Quill.imports.parchment;
      d.floatStyle = new i.StyleAttributor("float", "float"), d.displayStyle = new i.StyleAttributor("display", "display"), d.marginStyle = new i.StyleAttributor("margin", "margin");
    }
    this.quill = t, this.options = {
      modules: e.modules?.length ? e.modules : p.modules,
      displayStyles: { ...p.displayStyles, ...e.displayStyles },
      handleStyles: { ...p.handleStyles, ...e.handleStyles },
      overlayStyles: { ...p.overlayStyles, ...e.overlayStyles },
      toolbarButtonStyles: { ...p.toolbarButtonStyles, ...e.toolbarButtonStyles },
      toolbarButtonSvgStyles: { ...p.toolbarButtonSvgStyles, ...e.toolbarButtonSvgStyles },
      toolbarStyles: { ...p.toolbarStyles, ...e.toolbarStyles }
    }, e.modules?.length && (this.moduleClasses = e.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const s = this.quill.root.parentNode;
    s.style.position = s.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    this.removeModules(), this.modules = this.moduleClasses?.map((t) => new (bt[t] || t)(this)) || [], this.modules.forEach((t) => {
      t.onCreate();
    }), this.onUpdate();
  }
};
d.floatStyle = null, d.marginStyle = null, d.displayStyle = null, d.Quill = window.Quill ?? null;
let c = d;
window.Quill?.register("modules/imageResizor", c);
export {
  c as default
};
