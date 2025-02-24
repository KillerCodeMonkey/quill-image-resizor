const r = {
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
class y {
  constructor(n) {
    this.onCreate = () => {
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this.overlay = n.overlay, this.img = n.img, this.options = n.options, this.requestUpdate = n.onUpdate;
  }
}
class m extends y {
  constructor(n) {
    super(n), this.display = null, this.onCreate = () => {
      var t;
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), (t = this.overlay) == null || t.appendChild(this.display);
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
      if (!this.display || !this.img)
        return;
      const t = this.getCurrentSize();
      if (this.display.innerHTML = t.join(" &times; "), t[0] > 120 && t[1] > 30)
        Object.assign(this.display.style, {
          right: "4px",
          bottom: "4px",
          left: "auto"
        });
      else if (this.img.style.float == "right") {
        const e = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: "auto",
          bottom: `-${e.height + 4}px`,
          left: `-${e.width + 4}px`
        });
      } else {
        const e = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: `-${e.width + 4}px`,
          bottom: `-${e.height + 4}px`,
          left: "auto"
        });
      }
    }, this.getCurrentSize = () => {
      var t;
      return [
        ((t = this.img) == null ? void 0 : t.width) || 0,
        this.img ? Math.round(this.img.width / this.img.naturalWidth * this.img.naturalHeight) : 0
      ];
    };
  }
}
const f = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
</svg>`, S = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
</svg>`, b = `<svg viewbox="0 0 18 18">
  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
</svg>`;
class x extends y {
  constructor(n) {
    if (super(n), this.floatStyle = null, this.marginStyle = null, this.displayStyle = null, this.alignments = [], this.onCreate = () => {
      var t;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (t = this.overlay) == null || t.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._stylesSet = () => this.displayStyle && this.floatStyle && this.marginStyle, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: f,
          apply: () => {
            var t, e, s;
            this.img && ((t = this.displayStyle) == null || t.add(this.img, "inline"), (e = this.floatStyle) == null || e.add(this.img, "left"), (s = this.marginStyle) == null || s.add(this.img, "0 1em 1em 0"));
          },
          isApplied: () => {
            var t;
            return this.img ? ((t = this.floatStyle) == null ? void 0 : t.value(this.img)) === "left" : !1;
          }
        },
        {
          icon: S,
          apply: () => {
            var t, e, s;
            this.img && ((t = this.displayStyle) == null || t.add(this.img, "block"), (e = this.floatStyle) == null || e.remove(this.img), (s = this.marginStyle) == null || s.add(this.img, "auto"));
          },
          isApplied: () => {
            var t;
            return this.img ? ((t = this.marginStyle) == null ? void 0 : t.value(this.img)) === "auto" : !1;
          }
        },
        {
          icon: b,
          apply: () => {
            var t, e, s;
            if (!this.img)
              return !1;
            (t = this.displayStyle) == null || t.add(this.img, "inline"), (e = this.floatStyle) == null || e.add(this.img, "right"), (s = this.marginStyle) == null || s.add(this.img, "0 0 1em 1em");
          },
          isApplied: () => {
            var t;
            return this.img ? ((t = this.floatStyle) == null ? void 0 : t.value(this.img)) === "right" : !1;
          }
        }
      ];
    }, this._addToolbarButtons = () => {
      const t = [];
      this.alignments.forEach((e, s) => {
        var i;
        const o = document.createElement("span");
        t.push(o), o.innerHTML = e.icon, o.addEventListener("click", () => {
          var l, h, c;
          t.forEach((g) => g.style.filter = ""), e.isApplied() ? this.img && ((l = this.floatStyle) == null || l.remove(this.img), (h = this.marginStyle) == null || h.remove(this.img), (c = this.displayStyle) == null || c.remove(this.img)) : (this._selectButton(o), e.apply()), this.requestUpdate();
        }), Object.assign(o.style, this.options.toolbarButtonStyles), s > 0 && (o.style.borderLeftWidth = "0"), Object.assign(o.children[0].style, this.options.toolbarButtonSvgStyles), e.isApplied() && this._selectButton(o), (i = this.toolbar) == null || i.appendChild(o);
      });
    }, this._selectButton = (t) => {
      t.style.filter = "invert(20%)";
    }, d.Quill) {
      const t = d.Quill.imports.parchment;
      this.floatStyle = new t.StyleAttributor("float", "float"), this.marginStyle = new t.StyleAttributor("margin", "margin"), this.displayStyle = new t.StyleAttributor("display", "display");
    }
  }
}
class v extends y {
  constructor(n) {
    super(n), this.boxes = [], this.dragBox = null, this.dragStartX = 0, this.preDragWidth = 0, this.onCreate = () => {
      this.boxes = [], this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.addBox("nwse-resize"), this.addBox("nesw-resize"), this.positionBoxes();
    }, this.onDestroy = () => {
      this.setCursor("");
    }, this.positionBoxes = () => {
      var s, o;
      const t = `${-parseFloat(((s = this.options.handleStyles) == null ? void 0 : s.width.toString()) || "0") / 2}px`, e = `${-parseFloat(((o = this.options.handleStyles) == null ? void 0 : o.height.toString()) || "0") / 2}px`;
      [
        { left: t, top: e },
        // top left
        { right: t, top: e },
        // top right
        { right: t, bottom: e },
        // bottom right
        { left: t, bottom: e }
        // bottom left
      ].forEach((i, l) => {
        Object.assign(this.boxes[l].style, i);
      });
    }, this.addBox = (t) => {
      var s, o, i;
      const e = document.createElement("div");
      Object.assign(e.style, this.options.handleStyles), e.style.cursor = t, e.style.width = `${((s = this.options.handleStyles) == null ? void 0 : s.width) || 0}px`, e.style.height = `${((o = this.options.handleStyles) == null ? void 0 : o.height) || 0}px`, e.addEventListener("mousedown", this.handleMousedown, !1), (i = this.overlay) == null || i.appendChild(e), this.boxes.push(e);
    }, this.handleMousedown = (t) => {
      var e, s;
      this.dragBox = t.target, this.dragStartX = t.clientX, this.preDragWidth = ((e = this.img) == null ? void 0 : e.width) || ((s = this.img) == null ? void 0 : s.naturalWidth) || 0, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    }, this.handleMouseup = () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    }, this.handleDrag = (t) => {
      if (!this.img)
        return;
      const e = t.clientX - this.dragStartX;
      this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3] ? this.img.width = Math.round(this.preDragWidth - e) : this.img.width = Math.round(this.preDragWidth + e), this.requestUpdate();
    }, this.setCursor = (t) => {
      [document.body, this.img].forEach((s) => {
        s && (s.style.cursor = t);
      });
    };
  }
}
const w = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), B = { DisplaySize: m, Toolbar: x, Resize: v }, a = class a {
  constructor(n, t = {}) {
    var s, o;
    this.moduleClasses = [], this.modules = [], this.onUpdate = () => {
      this.repositionElements(), this.modules.forEach((i) => {
        i.onUpdate();
      });
    }, this.removeModules = () => {
      this.modules.forEach((i) => {
        i.onDestroy();
      }), this.modules = [];
    }, this.handleClick = (i) => {
      var h;
      const l = i.target;
      if (((h = l == null ? void 0 : l.tagName) == null ? void 0 : h.toUpperCase()) === "IMG") {
        if (this.img === l)
          return;
        this.img && this.hide(), this.show(l);
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
      const i = this.quill.root.parentNode, l = this.img.getBoundingClientRect(), h = i.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${l.left - h.left - 1 + i.scrollLeft}px`,
        top: `${l.top - h.top + i.scrollTop}px`,
        width: `${l.width}px`,
        height: `${l.height}px`
      });
    }, this.hide = () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    }, this.setUserSelect = (i) => {
      w.forEach((l) => {
        this.quill.root.style[l] = i, document.documentElement.style[l] = i;
      });
    }, this.checkImageKeyUp = (i) => {
      var l;
      if (this.img) {
        if (["Backspace", "Delete"].includes(i.code)) {
          const h = (l = a.Quill) == null ? void 0 : l.find(this.img);
          h && h.deleteAt(0);
        }
        this.hide();
      }
    }, this.checkImageInput = (i) => {
      var l;
      if (this.img) {
        if (["deleteContentForward", "deleteContentBackward"].includes(i.inputType)) {
          const h = (l = a.Quill) == null ? void 0 : l.find(this.img);
          h && h.deleteAt(0);
        }
        this.hide();
      }
    }, this.initializeModules = this.initializeModules.bind(this), this.quill = n, this.options = {
      modules: (s = t.modules) != null && s.length ? t.modules : r.modules,
      displayStyles: { ...r.displayStyles, ...t.displayStyles },
      handleStyles: { ...r.handleStyles, ...t.handleStyles },
      overlayStyles: { ...r.overlayStyles, ...t.overlayStyles },
      toolbarButtonStyles: { ...r.toolbarButtonStyles, ...t.toolbarButtonStyles },
      toolbarButtonSvgStyles: { ...r.toolbarButtonSvgStyles, ...t.toolbarButtonSvgStyles },
      toolbarStyles: { ...r.toolbarStyles, ...t.toolbarStyles }
    }, (o = t.modules) != null && o.length && (this.moduleClasses = t.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const e = this.quill.root.parentNode;
    e.style.position = e.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var n;
    this.removeModules(), this.modules = ((n = this.moduleClasses) == null ? void 0 : n.map((t) => new (B[t] || t)(this))) || [], this.modules.forEach((t) => {
      t.onCreate();
    }), this.onUpdate();
  }
};
a.Quill = window.Quill ?? null;
let d = a;
var p;
(p = window.Quill) == null || p.register("modules/imageResizor", d);
export {
  d as default
};
