const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var bootstrap_min = "";
var main$1 = "";
var overlay = "";
var redline = "";
var toolbar = "";
var tippy$1 = "";
var light = "";
var OsPlatform = /* @__PURE__ */ ((OsPlatform2) => {
  OsPlatform2[OsPlatform2["Mac_OS"] = 0] = "Mac_OS";
  OsPlatform2[OsPlatform2["iOS"] = 1] = "iOS";
  OsPlatform2[OsPlatform2["Windows"] = 2] = "Windows";
  OsPlatform2[OsPlatform2["Android"] = 3] = "Android";
  OsPlatform2[OsPlatform2["Linux"] = 4] = "Linux";
  OsPlatform2[OsPlatform2["Unknown"] = 5] = "Unknown";
  return OsPlatform2;
})(OsPlatform || {});
var sliderEvents = /* @__PURE__ */ ((sliderEvents2) => {
  sliderEvents2[sliderEvents2["stop"] = 0] = "stop";
  sliderEvents2[sliderEvents2["change"] = 1] = "change";
  return sliderEvents2;
})(sliderEvents || {});
var backColor = /* @__PURE__ */ ((backColor2) => {
  backColor2[backColor2["white"] = 0] = "white";
  backColor2[backColor2["black"] = 1] = "black";
  return backColor2;
})(backColor || {});
var PanZoomEvt = /* @__PURE__ */ ((PanZoomEvt2) => {
  PanZoomEvt2[PanZoomEvt2["stop"] = 0] = "stop";
  PanZoomEvt2[PanZoomEvt2["pan"] = 1] = "pan";
  PanZoomEvt2[PanZoomEvt2["zoom"] = 2] = "zoom";
  PanZoomEvt2[PanZoomEvt2["select"] = 3] = "select";
  PanZoomEvt2[PanZoomEvt2["edit"] = 4] = "edit";
  return PanZoomEvt2;
})(PanZoomEvt || {});
var NodeName = /* @__PURE__ */ ((NodeName2) => {
  NodeName2[NodeName2["path"] = 0] = "path";
  NodeName2[NodeName2["line"] = 1] = "line";
  NodeName2[NodeName2["text"] = 2] = "text";
  NodeName2[NodeName2["tspan"] = 3] = "tspan";
  NodeName2[NodeName2["circle"] = 4] = "circle";
  NodeName2[NodeName2["ellipse"] = 5] = "ellipse";
  NodeName2[NodeName2["rect"] = 6] = "rect";
  NodeName2[NodeName2["g"] = 7] = "g";
  NodeName2[NodeName2["use"] = 8] = "use";
  NodeName2[NodeName2["defs"] = 9] = "defs";
  NodeName2[NodeName2["pattern"] = 10] = "pattern";
  NodeName2[NodeName2["clipPath"] = 11] = "clipPath";
  NodeName2[NodeName2["svg"] = 12] = "svg";
  return NodeName2;
})(NodeName || {});
var RedlineTyp = /* @__PURE__ */ ((RedlineTyp2) => {
  RedlineTyp2[RedlineTyp2["none"] = 0] = "none";
  RedlineTyp2[RedlineTyp2["line"] = 1] = "line";
  RedlineTyp2[RedlineTyp2["shp"] = 2] = "shp";
  RedlineTyp2[RedlineTyp2["redlinetext"] = 14] = "redlinetext";
  RedlineTyp2[RedlineTyp2["circle"] = 5] = "circle";
  return RedlineTyp2;
})(RedlineTyp || {});
var RedlineMethod = /* @__PURE__ */ ((RedlineMethod2) => {
  RedlineMethod2[RedlineMethod2["select"] = 0] = "select";
  RedlineMethod2[RedlineMethod2["copy"] = 1] = "copy";
  RedlineMethod2[RedlineMethod2["edit"] = 2] = "edit";
  return RedlineMethod2;
})(RedlineMethod || {});
var TypeConstant = /* @__PURE__ */ ((TypeConstant2) => {
  TypeConstant2[TypeConstant2["line"] = 1] = "line";
  TypeConstant2[TypeConstant2["lines"] = 11] = "lines";
  TypeConstant2[TypeConstant2["shp"] = 2] = "shp";
  TypeConstant2[TypeConstant2["arc"] = 3] = "arc";
  TypeConstant2[TypeConstant2["text"] = 40] = "text";
  TypeConstant2[TypeConstant2["redlinetext"] = 14] = "redlinetext";
  TypeConstant2[TypeConstant2["circle"] = 5] = "circle";
  TypeConstant2[TypeConstant2["ellipse"] = 6] = "ellipse";
  TypeConstant2[TypeConstant2["lineString"] = 7] = "lineString";
  TypeConstant2[TypeConstant2["solidHole"] = 9] = "solidHole";
  TypeConstant2[TypeConstant2["cell"] = 10] = "cell";
  TypeConstant2[TypeConstant2["reference"] = 20] = "reference";
  TypeConstant2[TypeConstant2["link"] = 30] = "link";
  return TypeConstant2;
})(TypeConstant || {});
var vertexType = /* @__PURE__ */ ((vertexType2) => {
  vertexType2[vertexType2["vertex"] = 0] = "vertex";
  vertexType2[vertexType2["interVertex"] = 1] = "interVertex";
  vertexType2[vertexType2["tuft"] = 2] = "tuft";
  return vertexType2;
})(vertexType || {});
var StyleKey = /* @__PURE__ */ ((StyleKey2) => {
  StyleKey2[StyleKey2["fill"] = 0] = "fill";
  StyleKey2[StyleKey2["stroke"] = 1] = "stroke";
  StyleKey2[StyleKey2["stroke-width"] = 2] = "stroke-width";
  StyleKey2[StyleKey2["stroke-dasharray"] = 3] = "stroke-dasharray";
  StyleKey2[StyleKey2["stroke-opacity"] = 4] = "stroke-opacity";
  StyleKey2[StyleKey2["fill-opacity"] = 5] = "fill-opacity";
  return StyleKey2;
})(StyleKey || {});
var TextJustification = /* @__PURE__ */ ((TextJustification2) => {
  TextJustification2[TextJustification2["LT"] = 0] = "LT";
  TextJustification2[TextJustification2["LC"] = 1] = "LC";
  TextJustification2[TextJustification2["LB"] = 2] = "LB";
  TextJustification2[TextJustification2["CT"] = 3] = "CT";
  TextJustification2[TextJustification2["CC"] = 4] = "CC";
  TextJustification2[TextJustification2["CB"] = 5] = "CB";
  TextJustification2[TextJustification2["RT"] = 6] = "RT";
  TextJustification2[TextJustification2["RC"] = 7] = "RC";
  TextJustification2[TextJustification2["RB"] = 8] = "RB";
  return TextJustification2;
})(TextJustification || {});
const standardStyles = ["2 6", "8 3", "14 4", "10 4 4 4", "3 5", "6 3 2 3 2 3", "10 3 3 3"];
class GeometryStyle {
  static getLineStyle(n) {
    let r = "";
    if (n > 0) {
      r = standardStyles[n - 1];
    }
    return r;
  }
  static get(s) {
    const strokeBar = svgArea.container.querySelector("div[id='rdl-stroke-manager']");
    const fillBar = svgArea.container.querySelector("div[id='rdl-fill-manager']");
    let input;
    const q = StyleKey[s];
    if (q.startsWith("fill")) {
      input = fillBar.querySelector(`input[key="${q}"]`);
    } else {
      input = strokeBar.querySelector(`input[key="${q}"]`);
    }
    if (input) {
      return input.value;
    }
    return void 0;
  }
  static init(stl) {
    const gs = new GeometryStyle(false);
    let key;
    for (key in stl) {
      if (gs.hasOwnProperty(key)) {
        gs[key] = stl[key];
      }
    }
    return gs;
  }
  constructor(byBar = true) {
    if (byBar) {
      this.stroke = GeometryStyle.get(StyleKey.stroke);
      let test;
      test = GeometryStyle.get(StyleKey["stroke-width"]);
      this["stroke-width"] = parseInt(test, 10);
      test = parseFloat(GeometryStyle.get(StyleKey["stroke-opacity"]));
      if (test === 0) {
        this["stroke-opacity"] = void 0;
      } else {
        this["stroke-opacity"] = Round(1 - test, 1);
      }
      test = parseFloat(GeometryStyle.get(StyleKey["fill-opacity"]));
      if (test === 0) {
        this["fill-opacity"] = void 0;
      } else {
        this["fill-opacity"] = Round(1 - test, 1);
      }
      test = parseInt(GeometryStyle.get(StyleKey["stroke-dasharray"]), 10);
      this["stroke-dasharray"] = test ? test : void 0;
    }
  }
}
const svgNs$1 = "http://www.w3.org/2000/svg";
class Point {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
    this.x = x === void 0 ? 0 : x;
    this.y = y === void 0 ? 0 : y;
  }
  static PointFromObject(o) {
    return new Point(o.x, o.y);
  }
  static PointsFromObjects(oo) {
    const ret = [];
    const h = oo.length;
    for (let i = 0; i < h; i++) {
      ret.push(Point.PointFromObject(oo[i]));
    }
    return ret;
  }
  static ExactPoint(b, r = 0) {
    return new Point(parseFloat(b.x.toFixed(r)), parseFloat(b.y.toFixed(r)));
  }
  static Rotate(origin, angle, b) {
    if (angle === 0) {
      return b.Clone();
    }
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const p2 = new Point(b.x - origin.x, b.y - origin.y);
    const x = p2.x * c - p2.y * s;
    const y = p2.x * s + p2.y * c;
    return new Point(origin.x + x, origin.y + y);
  }
  static String2Points(t) {
    const res = t.match(/-?\d+(\.\d+)?/g);
    const length = res.length;
    let i = 0;
    const ret = [];
    while (i < length) {
      const p2 = new Point(Number.parseFloat(res[i]), Number.parseFloat(res[i + 1]));
      ret.push(p2);
      i += 2;
    }
    return ret;
  }
  Clone() {
    return new Point(this.x, this.y);
  }
  SubtractPoint(point) {
    return new Point(this.x - point.x, this.y - point.y);
  }
  AddPoint(point) {
    return new Point(point.x + this.x, point.y + this.y);
  }
  toString() {
    return this.y < 0 ? this.x + "" + this.y : this.x + " " + this.y;
  }
}
var OS;
const getOS = () => {
  const userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"], iosPlatforms = ["iPhone", "iPad", "iPod"];
  OS = OsPlatform.Unknown;
  if (macosPlatforms.indexOf(platform) !== -1) {
    OS = OsPlatform.Mac_OS;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    OS = OsPlatform.iOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    OS = OsPlatform.Windows;
  } else if (/Android/.test(userAgent)) {
    OS = OsPlatform.Android;
  } else if (OS === OsPlatform.Unknown && /Linux/.test(platform)) {
    OS = OsPlatform.Linux;
  }
};
const loadData = async (path) => {
  return await (await fetch(path).then()).text();
};
const createFragment = (htmlStr) => {
  const frag = document.createDocumentFragment(), temp = document.createElement("div");
  temp.innerHTML = htmlStr.trim();
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  let ret = void 0;
  let h = frag.children.length;
  if (h > 0) {
    for (let i = 0; i < h; i++) {
      const e = frag.children[i];
      if (e.toString() !== "[object HTMLScriptElement]") {
        if (!ret) {
          ret = [];
        }
        ret.push(e);
      }
    }
  }
  if (ret) {
    if (ret.length === 1) {
      return ret[0];
    } else {
      const div2 = document.createElement("div");
      div2.setAttribute("children-fragment-list", "");
      ret.forEach((e) => {
        div2.appendChild(e);
      });
      return div2;
    }
  }
  return null;
};
const createGuid = () => {
  const S4 = () => {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-4" + S4().substring(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
};
function CreateSvgObject(name, j) {
  const nod = NodeName[name];
  const e = document.createElementNS(svgNs$1, nod);
  let key;
  for (key in j) {
    e.setAttribute(key, j[key]);
  }
  return e;
}
const Round = (n, digits) => {
  if (digits === void 0) {
    digits = 2;
  }
  return parseFloat(n.toFixed(digits));
};
const getSize = (svgArea2) => {
  return new Point(svgArea2.clientWidth, svgArea2.clientHeight);
};
const styleFromObject = (obj) => {
  const t = [];
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== void 0) {
      if (key === "stroke-dasharray") {
        t.push(key + ":" + GeometryStyle.getLineStyle(obj[key]));
      } else {
        let value = obj[key];
        if (key === "stroke" || key === "fill") {
          value = updateColor(value, svgArea.background);
        }
        t.push(key + ":" + value);
      }
    }
  }
  return t.join(";");
};
const MiniPath = (a, b) => {
  let d = "";
  const m = new Point(Round(a.x - b.x, 1), Round(a.y - b.y, 1));
  if (m.x === 0 && m.y !== 0) {
    d += "v" + m.y;
  } else if (m.x !== 0 && m.y === 0) {
    d += "h" + m.x;
  } else if (m.x !== 0 && m.y !== 0) {
    d += "l" + m.x + " " + m.y;
  }
  return d;
};
const PathFromPoints = (bb, cutFirst = false) => {
  if (bb === void 0 || bb.length === 0) {
    return "";
  }
  const length = bb.length;
  let d = cutFirst === true ? "" : "M" + bb[0].toString();
  if (length > 1) {
    for (let i = 1; i < length; i++) {
      d += MiniPath(bb[i], bb[i - 1]);
    }
  }
  return d;
};
const Distance = (a, b) => {
  if (a && b) {
    const A = b.x - a.x;
    const B = b.y - a.y;
    return Math.sqrt(A * A + B * B);
  }
  return 0;
};
const updateColor = (value, bc) => {
  let q = value.toLowerCase();
  if (q === "#ffffff" || q === "white") {
    q = "#fff";
  }
  if (q === "#000000" || q === "black") {
    q = "#000";
  }
  if (q === "#fff" && bc === backColor.white) {
    q = "#000";
  }
  if (q === "#000" && bc === backColor.black) {
    q = "#fff";
  }
  return q;
};
const RemoveChildren = (n) => {
  if (n) {
    while (n.firstChild) {
      n.removeChild(n.firstChild);
    }
  }
};
const GetScreenCordinates = (obj) => {
  var p2 = new Point(obj.offsetLeft, obj.offsetTop);
  p2.x += Math.round(obj.offsetWidth / 2);
  p2.y += Math.round(obj.offsetHeight / 2);
  while (obj.offsetParent) {
    p2.x = p2.x + obj.offsetParent.offsetLeft;
    p2.y = p2.y + obj.offsetParent.offsetTop;
    if (obj == document.getElementsByTagName("body")[0]) {
      break;
    } else {
      obj = obj.offsetParent;
    }
  }
  return p2;
};
const CloneJson = (src) => {
  return JSON.parse(JSON.stringify(src));
};
const _RangeManager = class {
  static getRangePoints(rg) {
    let tl = new Point(rg.origin.x, rg.origin.y);
    let br = new Point(rg.origin.x + rg.width, rg.origin.y - rg.height);
    let tr = new Point(br.x, tl.y);
    let bl = new Point(tl.x, br.y);
    return [tl, tr, br, bl];
  }
  static isRange(e) {
    const props = ["origin", "width", "height"];
    let ret = true;
    props.forEach(function(prop) {
      if (e.hasOwnProperty(prop) === false) {
        ret = false;
        return;
      }
    });
    return ret;
  }
  static rangeByPoints(b, realPosition) {
    const length = b.length;
    const rg = { origin: new Point(), width: 0, height: 0 };
    if (b.length < 0) {
      throw new Error("Range undefined");
    }
    if (length < 2) {
      rg.origin = b[0];
      rg.width = rg.height = 0;
      return rg;
    }
    const origin = new Point(b[0].x, b[0].y);
    const oB = origin.Clone();
    for (let i = 1; i < length; i++) {
      const n = b[i];
      if (n.x < origin.x) {
        origin.x = n.x;
      }
      if (n.x > oB.x) {
        oB.x = n.x;
      }
      if (n.y < origin.y) {
        origin.y = n.y;
      }
      if (n.y > oB.y) {
        oB.y = n.y;
      }
    }
    const width = Round(oB.x - origin.x, 4);
    const height = Round(oB.y - origin.y, 4);
    if (realPosition === true) {
      origin.y += height;
    }
    rg.origin = origin;
    rg.width = width;
    rg.height = height;
    return rg;
  }
  static rangeByRanges(bb) {
    bb = bb.filter((f) => f);
    const b = new Array();
    bb.forEach((box) => {
      b.push(box.origin);
      b.push(new Point(box.origin.x + box.width, box.origin.y - box.height));
    });
    return this.rangeByPoints(b, true);
  }
  static circleRange(c, r, realPosition) {
    const b = [
      new Point(c.x, c.y + r),
      new Point(c.x - r, c.y - r),
      new Point(c.x + r, c.y - r)
    ];
    return this.rangeByPoints(b, realPosition);
  }
  static ellipseRange(geom, realPosition) {
    if (geom.rx === geom.ry) {
      return this.circleRange(geom.center, geom.rx, realPosition);
    }
    const b = [];
    const step = Math.PI / 8;
    const full = 2 * Math.PI;
    const angle = geom.angle ? geom.angle / 180 * Math.PI : 0;
    let u = 0;
    while (u < full) {
      const m = geom.rx * Math.cos(u);
      const n = geom.ry * Math.sin(u);
      b.push(new Point(geom.center.x + Math.cos(angle) * m - Math.sin(angle) * n, geom.center.y + Math.sin(angle) * m + Math.cos(angle) * n));
      u += step;
    }
    return this.rangeByPoints(b, realPosition);
  }
  static RangesOverlap(rg, window2, testDiadonal = true) {
    const o = rg.origin.Clone();
    const o1 = window2.origin.Clone();
    const w = rg.width;
    const h = rg.height;
    const W = window2.width;
    const H = window2.height;
    let out = true;
    let part = false;
    let all = false;
    const diagonal = Math.round(Math.sqrt(w * w + h * h));
    if (diagonal > 1) {
      if (o1.x !== 0 || o1.y !== 0) {
        o.x -= o1.x;
        o.y -= o1.y;
        o1.x = 0;
        o1.y = 0;
      }
      if (o.x + w >= 0 && o.x <= W) {
        if (o.y + h >= 0 && o.y <= H) {
          out = false;
          part = true;
        }
      }
      if (part) {
        if (o.x >= 0 && o.x + w <= W) {
          if (o.y >= 0 && o.y + h <= H) {
            all = true;
          }
        }
      }
    }
    let ret = {
      out,
      part,
      all
    };
    return ret;
  }
};
let RangeManager = _RangeManager;
RangeManager.GetRange = (e) => {
  let r;
  const hasRange = e.hasOwnProperty("range");
  if (hasRange === false) {
    if (e.type === TypeConstant.cell) {
      let ranges = e.visuals.map((a) => a.range);
      let rg2 = _RangeManager.rangeByRanges(ranges);
      e.range = rg2;
      return rg2;
    } else {
      return null;
    }
  } else {
    r = e.range;
  }
  const p2 = Point.PointFromObject(r.origin);
  const w = r.width;
  const h = r.height;
  const rg = { origin: p2, width: w, height: h };
  return rg;
};
RangeManager.getRangeRecursive = (visuals) => {
  const rgs = [];
  visuals.forEach((e) => {
    if (e.range) {
      rgs.push(e.range);
    } else {
      if (e.visuals) {
        const r = _RangeManager.getRangeRecursive(e.visuals);
        if (r) {
          rgs.push(_RangeManager.rangeByRanges(r));
        }
      }
    }
  });
  return rgs;
};
class Transform {
  static getDefaultTP(window2, range) {
    let scl = window2.width / range.width;
    const r = window2.height / range.height;
    const trl = new Point();
    const bb = range.origin;
    if (r < scl) {
      scl = r;
      trl.x = Round((window2.width - range.width * scl) / 2, 2);
    } else {
      trl.y = Round((window2.height - range.height * scl) / 2, 2);
    }
    return { trl, scl, bb };
  }
  static transform2Window(b, trf, r) {
    if (!r) {
      r = 1;
    }
    const x = Round((b.x - trf.bb.x) * trf.scl + trf.trl.x, r);
    const y = Round((b.y - trf.bb.y) * -trf.scl + trf.trl.y, 1);
    return new Point(x, y);
  }
  static transformArray2Window(bb, trf, r) {
    const ret = [];
    bb.forEach((b) => {
      ret.push(this.transform2Window(b, trf, r));
    });
    return ret;
  }
  static scale2Window(n, scl, r) {
    if (!r) {
      r = 2;
    }
    return Round(n * scl, r);
  }
  static transform2Real(b, trf, r) {
    if (!r) {
      r = 3;
    }
    return new Point(Round((b.x - trf.trl.x) / trf.scl + trf.bb.x, r), Round((trf.trl.y - b.y) / trf.scl + trf.bb.y, r));
  }
  static transformArray2Real(bb, trf, r) {
    const ret = [];
    bb.forEach((b) => {
      ret.push(this.transform2Real(b, trf, r));
    });
    return ret;
  }
  static scale2Real(n, scl, r) {
    if (!r) {
      r = 3;
    }
    return Round(n / scl, r);
  }
  static transformToRealRange(rv) {
    const v = rv;
    const r = 6;
    const origin = this.transform2Real(v.range.origin, v.trf, r);
    const width = this.scale2Real(v.range.width, v.trf.scl, r);
    const height = this.scale2Real(v.range.height, v.trf.scl, r);
    return { origin, width, height };
  }
}
const _BarStyleManager = class {
  static Hide(barMg) {
    barMg.bar.style.display = "none";
    barMg.button.style.backgroundColor = "";
    barMg.button.style.border = "";
  }
  static ShowHide(barMg, pos) {
    let ret = false;
    const hide2 = () => {
      this.Hide(barMg);
      ret = true;
    };
    barMg.button.style.border = _BarStyleManager.borderStyle;
    if (barMg.bar.style.display === "none") {
      barMg.bar.style.display = "";
      barMg.bar.style.left = pos.x + 30 + "px";
      barMg.bar.style.top = pos.y - 55 + "px";
      barMg.pos = pos;
      barMg.redlinePlatform.allBars.forEach((e) => {
        if (e !== barMg) {
          e.button.style.backgroundColor = "";
          e.bar.style.display = "none";
          e.button.style.border = "";
        }
      });
      barMg.setPreview();
    } else {
      hide2();
    }
    return ret;
  }
  updateColor() {
    if (this.picker) {
      let col = updateColor(this.picker.value, this.redlinePlatform.svgArea.background);
      if (col === "#000") {
        col = "#000000";
      } else if (col === "#fff") {
        col = "#ffffff";
      }
      this.picker.parentElement.style.backgroundColor = col;
      this.picker.value = col;
    }
  }
  setPreview() {
    if (this.preview) {
      if (this.redlinePlatform.svgArea.background === backColor.black) {
        this.preview.style.backgroundColor = "#000";
      } else {
        this.preview.style.backgroundColor = "#fff";
      }
      let stroke = updateColor(this.picker.value, this.redlinePlatform.svgArea.background);
      let pth = this.preview.querySelector("path");
      pth.setAttribute("stroke", stroke);
      let q = "stroke-width";
      let numInput = this.bar.querySelector(`input[type='number'][key='${q}']`);
      if (numInput) {
        pth.setAttribute(q, numInput.value);
      }
      q = "stroke-dasharray";
      numInput = this.bar.querySelector(`input[type='number'][key='${q}']`);
      if (numInput) {
        let dash = GeometryStyle.getLineStyle(parseInt(numInput.value, 10));
        if (dash) {
          pth.setAttribute(q, dash);
        } else {
          pth.removeAttribute(q);
        }
      }
      q = "stroke-opacity";
      numInput = this.bar.querySelector(`input[type='number'][key='${q}']`);
      if (numInput) {
        let val = 1 - parseFloat(numInput.value);
        pth.setAttribute(q, val);
      }
    }
    if (this.picker) {
      this.updateColor();
    }
  }
  modifiVisual(keyValue, c) {
    if (c) {
      if (c.type === TypeConstant.redlinetext) {
        const cTx = c;
        if (keyValue.key === "stroke") {
          cTx.tp.color = keyValue.value;
          cTx.draw();
        } else if (keyValue.key === "stroke-opacity") {
          let opacity = Number.parseFloat(keyValue.value);
          if (opacity < 1) {
            cTx.tp.opacity = opacity;
          } else if (opacity === 1) {
            cTx.tp.opacity = void 0;
          }
          cTx.draw();
        }
      } else {
        if (keyValue.key === "stroke-dasharray") {
          if (keyValue.value == 0) {
            c.style[keyValue.key] = void 0;
          } else {
            c.style[keyValue.key] = parseInt(keyValue.value);
          }
          c.setStyle();
          return;
        }
        if (keyValue.key.endsWith("-opacity")) {
          let val = 1 - parseFloat(keyValue.value);
          val = Round(val, 1);
          if (val === 1) {
            delete c.style[keyValue.key];
          } else {
            c.style[keyValue.key] = val;
          }
          c.setStyle();
          return;
        }
        if (c.style[keyValue.key]) {
          c.style[keyValue.key] = keyValue.value;
          c.setStyle();
        }
      }
    }
  }
  modifiVisuals(keyValue) {
    let cc = this.redlinePlatform.redline.curVisual ? [this.redlinePlatform.redline.curVisual] : [];
    cc = cc.concat(this.redlinePlatform.redline.getSelected());
    if (keyValue.key === "fill" || keyValue.key === "stroke") {
      keyValue.value = updateColor(keyValue.value, this.redlinePlatform.svgArea.background);
    }
    if (keyValue.key.startsWith("fill")) {
      cc = cc.filter((f) => f.fillable === true);
      if (keyValue.key === "fill-add") {
        cc.forEach((c) => {
          if (!c.style.fill) {
            c.style.fill = "none";
          }
        });
        keyValue.key = "fill";
      } else if (keyValue.key === "fill-remove") {
        cc.forEach((c) => {
          if (c.style.fill) {
            delete c.style.fill;
          }
          if (c.style["fill-opacity"]) {
            delete c.style["fill-opacity"];
          }
          c.setStyle();
        });
        return;
      }
    }
    cc.forEach((c) => {
      this.modifiVisual(keyValue, c);
    });
  }
  showHide(pos) {
    _BarStyleManager.ShowHide(this, pos);
  }
  events() {
    let headers = this.bar.querySelectorAll("th[key]");
    headers.forEach((e) => {
      e.addEventListener("click", (th) => {
        const key = th.target.getAttribute("key");
        let top2 = th.target.parentElement.parentElement;
        if (top2) {
          let input = top2.querySelector(`input[key="${key}"]`);
          if (input) {
            this.modifiVisuals({
              key,
              value: input.value
            });
          }
        }
      });
    });
    let pickerMethod = (e) => {
      let key = e.getAttribute("key");
      let value = updateColor(e.value, this.redlinePlatform.svgArea.background);
      this.updateColor();
      if (key !== "fill") {
        this.setPreview();
      }
      this.modifiVisuals({ key, value });
    };
    if (this.picker) {
      this.picker.addEventListener("input", (e) => {
        pickerMethod(e.target);
      });
      this.picker.addEventListener("change", (e) => {
        pickerMethod(e.target);
      });
    }
    if (this.inputs) {
      this.inputs.forEach((e) => {
        e.addEventListener("change", (e2) => {
          this.setPreview();
          let el = e2.target;
          this.modifiVisuals({
            key: el.getAttribute("key"),
            value: el.value
          });
        });
      });
    }
    let applyRemoveFill = this.bar.querySelectorAll("td.rdl-style-apply[key^='fill-']");
    applyRemoveFill.forEach((e) => {
      e.addEventListener("click", () => {
        let key = e.getAttribute("key");
        let value = updateColor(this.picker.value, this.redlinePlatform.svgArea.background);
        this.updateColor();
        this.modifiVisuals({ key, value });
      });
    });
  }
  constructor(rp, styleBarId, buttonKey) {
    this.redlinePlatform = rp;
    this.bar = rp.parent.querySelector(`div[id='${styleBarId}']`);
    if (this.bar) {
      this.bar.style.zIndex = "100";
      this.button = rp.parent.querySelector(`div[id="rdlToolbar"] button[f="${buttonKey}"]`);
      this.inputs = this.bar.querySelectorAll("input[type='number']");
      this.chBoxes = this.bar.querySelectorAll("input[type='checkbox']");
      this.picker = this.bar.querySelector("input[type='color']");
      this.preview = this.bar.querySelector("div[id='rdl-stroke-preview']");
      this.events();
      this.setPreview();
    } else {
      console.log(`Missing bar ${styleBarId}`);
    }
  }
};
let BarStyleManager = _BarStyleManager;
BarStyleManager.borderStyle = "solid 2px #3C8DBC";
class SelBox {
  static destroy(v) {
    if (v.selBox) {
      v.selBox.target.remove();
      v.selBox = void 0;
    }
  }
  static create(v) {
    try {
      if (v.selBox) {
        SelBox.destroy(v);
      } else {
        v.selBox = new SelBox(v);
      }
    } catch {
    }
  }
  events() {
    let r = this.v.redline;
    let t = this.target;
    let cursor;
    let moving = false;
    let pressed = false;
    let g;
    let trl;
    let selection;
    let dockDisplStyle;
    const changePoints = async () => {
      let dt = new Point(Transform.scale2Real(trl.x, this.v.trf.scl), -Transform.scale2Real(trl.y, this.v.trf.scl));
      selection.forEach((v) => {
        v.move(dt);
      });
    };
    const eventEnd = async (ev) => {
      ev.stopPropagation();
      t.style.cursor = cursor;
      this.v.redline.tuftsDock.style.display = dockDisplStyle;
      pressed = false;
      if (moving) {
        await changePoints().finally(() => {
          this.v.redline.panZoom.run();
        });
      }
      setTimeout(() => {
        moving = false;
      }, 50);
    };
    this.target.addEventListener("pointermove", (ev) => {
      if (pressed) {
        ev.stopPropagation();
        let x = ev.movementX;
        let y = ev.movementY;
        if (x !== 0 || y !== 0) {
          moving = true;
        }
        trl = trl.AddPoint(new Point(x, y));
        g.setAttribute("transform", `translate(${trl.toString()})`);
      }
    });
    t.addEventListener("pointerdown", (ev) => {
      ev.stopPropagation();
      pressed = true;
      trl = new Point();
      cursor = t.style.cursor;
      t.style.cursor = "grabbing";
      dockDisplStyle = this.v.redline.tuftsDock.style.display;
      this.v.redline.tuftsDock.style.display = "none";
      g = r.selBoxDock.parentNode.insertBefore(CreateSvgObject(NodeName.g, { class: "rdl-selected-box" }), r.selBoxDock);
      selection = r.rdl.visuals.filter((f) => f.selBox);
      selection.forEach((v) => {
        g.append(v.elem);
        g.append(v.selBox.target);
      });
    });
    this.target.addEventListener("pointerup", (ev) => {
      if (moving) {
        eventEnd(ev);
      } else {
        SelBox.destroy(this.v);
        if (this.v.isEdited) {
          this.v.isEdited = false;
          if (this.v.type === TypeConstant.redlinetext) {
            BarStyleManager.Hide(this.v.redline.textManager);
          }
        }
      }
    });
    this.target.addEventListener("pointerleave", (ev) => {
      eventEnd(ev);
    });
  }
  init() {
    let bufer = this.v.redline.buffer;
    let origin = this.v.range.origin.Clone();
    let x = Math.round(origin.x - bufer / 2);
    let y = Math.round(origin.y - bufer / 2);
    let width = Math.round(this.v.range.width + bufer);
    let height = Math.round(this.v.range.height + bufer);
    let style = "stroke:red;stroke-width:2;stroke-dasharray:5,5;stroke-opacity:0.5;fill-opacity:0.05;fill:green;cursor:grab";
    this.target = CreateSvgObject(NodeName.rect, {
      _id: this.v._id,
      width,
      height,
      x,
      y,
      style
    });
    this.v.redline.selBoxDock.append(this.target);
    this.events();
    if (this.v.isEdited) {
      RemoveChildren(this.v.redline.tuftsDock);
      this.v.redline.tuftsDock.style.display = "";
      this.v.edit();
    }
  }
  constructor(v) {
    this.v = v;
    this.init();
  }
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement$1(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement$1(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement$1(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce$1(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn3, ms) {
  if (ms === 0) {
    return fn3;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn3(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn3(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
Object.assign({}, applyStyles$1, {
  effect: function effect2(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  mouseCoords = {
    clientX,
    clientY
  };
}
function addMouseCoordsListener(doc) {
  doc.addEventListener("mousemove", storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
  doc.removeEventListener("mousemove", storeMouseCoords);
}
var followCursor = {
  name: "followCursor",
  defaultValue: false,
  fn: function fn2(instance) {
    var reference2 = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference2);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;
    function getIsInitialBehavior() {
      return instance.props.followCursor === "initial" && instance.state.isVisible;
    }
    function addListener() {
      doc.addEventListener("mousemove", onMouseMove);
    }
    function removeListener() {
      doc.removeEventListener("mousemove", onMouseMove);
    }
    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }
    function onMouseMove(event) {
      var isCursorOverReference = event.target ? reference2.contains(event.target) : true;
      var followCursor2 = instance.props.followCursor;
      var clientX = event.clientX, clientY = event.clientY;
      var rect = reference2.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;
      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          getReferenceClientRect: function getReferenceClientRect() {
            var rect2 = reference2.getBoundingClientRect();
            var x = clientX;
            var y = clientY;
            if (followCursor2 === "initial") {
              x = rect2.left + relativeX;
              y = rect2.top + relativeY;
            }
            var top2 = followCursor2 === "horizontal" ? rect2.top : y;
            var right2 = followCursor2 === "vertical" ? rect2.right : x;
            var bottom2 = followCursor2 === "horizontal" ? rect2.bottom : y;
            var left2 = followCursor2 === "vertical" ? rect2.left : x;
            return {
              width: right2 - left2,
              height: bottom2 - top2,
              top: top2,
              right: right2,
              bottom: bottom2,
              left: left2
            };
          }
        });
      }
    }
    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance,
          doc
        });
        addMouseCoordsListener(doc);
      }
    }
    function destroy() {
      activeInstances = activeInstances.filter(function(data) {
        return data.instance !== instance;
      });
      if (activeInstances.filter(function(data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }
    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate2() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate2(_, _ref2) {
        var followCursor2 = _ref2.followCursor;
        if (isInternalUpdate) {
          return;
        }
        if (followCursor2 !== void 0 && prevProps.followCursor !== followCursor2) {
          destroy();
          if (followCursor2) {
            create();
            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount2() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }
          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger2(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }
        wasFocusEvent = event.type === "focus";
      },
      onHidden: function onHidden2() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};
tippy.setDefaultProps({
  render
});
const qHilite = "rdl-geom-selector-hilite";
const addHiliteToVisual = (e) => {
  const ee = e.querySelectorAll("*[style]");
  ee.forEach((el) => {
    el.classList.add(qHilite);
  });
  if (e.hasAttribute("style")) {
    e.classList.add(qHilite);
  }
};
const removeHiliteFromVisual = (e) => {
  const ee = e.querySelectorAll("*." + qHilite);
  ee.forEach((el) => {
    el.classList.remove("rdl-geom-selector-hilite");
  });
  if (e.classList.contains(qHilite)) {
    e.classList.remove(qHilite);
  }
};
const showSelectionContext = (tuft, sel, ev) => {
  let pos;
  let r;
  if (tuft) {
    pos = tuft.center;
    r = tuft.redline;
  } else {
    if (sel.length < 1) {
      return;
    } else {
      r = sel[0].visual.redline;
    }
  }
  const pad = r.panZoom.pad;
  const id = "015dc3b5-6c3d-45d5-b88b-ee188f9b0cf9";
  let p2 = new Point(ev.clientX, ev.clientY);
  if (!pos) {
    pos = p2;
  }
  let w = pad.parentElement.offsetWidth;
  if (w - pos.x < 60) {
    p2.x -= 120;
  }
  let content = `<ul id="${id}" style="margin:0;pading:10px"><li class="rdl-geom-selector" _id="none">none</li>
  <li class="rdl-geom-selector" _id="all" ${r.curMethod === RedlineMethod.edit ? 'style="display:none"' : ""}>all</li>`;
  sel.forEach((e) => {
    let li = `<li class="rdl-geom-selector" _id="${e.visual._id}">${TypeConstant[e.visual.type]}</li>`;
    content += li;
  });
  content += "</ul>";
  r.tippyContextInstance = tippy(pad, {
    content,
    allowHTML: true,
    placement: "left-start",
    trigger: "manual",
    interactive: true,
    arrow: false,
    offset: [p2.y, p2.x + 10],
    onShown: function(instance) {
      let ul = document.getElementById(id);
      let ee = ul.querySelectorAll("li");
      let selList = [];
      let prep = false;
      ee.forEach((e) => {
        e.addEventListener("click", (ev2) => {
          const _id2 = e.getAttribute("_id");
          instance.destroy();
          r.tippyContextInstance = void 0;
          selList.forEach((e2) => {
            e2.style.filter = "";
            removeHiliteFromVisual(e2);
            e2.removeAttribute("fill-opacity");
          });
          switch (_id2) {
            case "all":
              if (prep === false) {
                sel.forEach((e2) => SelBox.create(e2.visual));
                prep = true;
              }
              break;
            case "none":
              if (r.curMethod === RedlineMethod.edit && r.curVisual) {
                r.mouseDownContinue(pos);
              }
              break;
            default:
              let v = sel.find((f) => f.visual._id === _id2);
              if (v) {
                if (r.curMethod === RedlineMethod.edit) {
                  if (r.curVisual) {
                    pos = Transform.transform2Window(v.closest.p, r.transform);
                    tuft.updatePos(pos, true);
                  } else if (r.curMethod === RedlineMethod.edit) {
                    pos = Transform.transform2Window(v.closest.p, r.transform);
                    if (tuft) {
                      tuft.updatePos(pos, true);
                      SelBox.destroy(tuft.visual);
                      SelBox.create(tuft.visual);
                    } else {
                      v.visual.isEdited = true;
                      SelBox.create(v.visual);
                    }
                  } else if (r.curMethod === RedlineMethod.select) {
                    SelBox.create(v.visual);
                  }
                } else if (r.curMethod === RedlineMethod.select) {
                  SelBox.create(v.visual);
                }
              }
              break;
          }
        });
        const _id = e.getAttribute("_id");
        e.addEventListener("mouseover", (ev2) => {
          selList.forEach((el) => {
            if (el.getAttribute("_id") === _id || _id === "all") {
              el.style.filter = "";
              addHiliteToVisual(el);
            } else {
              el.style.filter = "grayscale(1)";
              if (el.hasAttribute("stroke")) {
                el.classList.remove("rdl-geom-selector-hilite");
              }
            }
          });
        });
        if (e.hasAttribute("_id")) {
          const _id2 = e.getAttribute("_id");
          let curSel = r.rdlDock.querySelectorAll(`*[_id="${_id2}"]`);
          curSel.forEach((el) => {
            el.style.filter = "grayscale(1)";
            let test = r.rdl.visuals.find((f) => f._id === _id2);
            if (test.type !== RedlineTyp.redlinetext) {
              el.setAttribute("fill-opacity", "0");
            }
            selList.push(el);
          });
        }
      });
    }
  });
  r.tippyContextInstance.setProps({
    getReferenceClientRect: () => ({
      x: 0,
      y: 0,
      toJSON: void 0,
      width: 0,
      height: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  });
  r.tippyContextInstance.show();
};
class LineGeom {
  constructor(a, b) {
    this.start = a;
    this.end = b;
  }
}
class CircleGeom {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}
const _Geometry = class {
  static DistPoint2Line(a, b, m) {
    let u = new Point(b.x - a.x, b.y - a.y);
    let p2 = { a: u.y, b: -u.x, c: -(u.y * a.x - u.x * a.y) };
    let d = Math.abs(p2.a * m.x + p2.b * m.y + p2.c) / Math.sqrt(p2.a * p2.a + p2.b * p2.b);
    return d;
  }
  static ClosestPoint2Line(a, b, p2) {
    let a_to_p = new Point(p2.x - a.x, p2.y - a.y);
    let a_to_b = new Point(b.x - a.x, b.y - a.y);
    let atb2 = a_to_b.x ** 2 + a_to_b.y ** 2;
    let atp_dot_atb = a_to_p.x * a_to_b.x + a_to_p.y * a_to_b.y;
    let t = atp_dot_atb / atb2;
    return new Point(a.x + a_to_b.x * t, a.y + a_to_b.y * t);
  }
  static ClosestPoint2Usecka(a, b, p2) {
    let a_to_p = new Point(p2.x - a.x, p2.y - a.y);
    let a_to_b = new Point(b.x - a.x, b.y - a.y);
    let atb2 = a_to_b.x ** 2 + a_to_b.y ** 2;
    let atp_dot_atb = a_to_p.x * a_to_b.x + a_to_p.y * a_to_b.y;
    let t = atp_dot_atb / atb2;
    let test = new Point(a.x + a_to_b.x * t, a.y + a_to_b.y * t);
    let dStart = Distance(a, test);
    let dEnd = Distance(b, test);
    let length = Distance(a, b);
    if (dStart > length || dEnd > length) {
      if (dStart > dEnd) {
        return b;
      } else {
        return a;
      }
    }
    return test;
  }
  static ClosestPoint2LineArray(bb, b, minVertex) {
    let h = bb.length - 1;
    let dist;
    let min2;
    for (let i = 0; i < h; i++) {
      if (Distance(bb[i], b) <= minVertex) {
        return { part: i, p: bb[i] };
      }
      if (Distance(bb[i + 1], b) <= minVertex) {
        return { part: i + 1, p: bb[i + 1] };
      }
      let p2 = this.ClosestPoint2Usecka(bb[i], bb[i + 1], b);
      let curDist = Distance(b, p2);
      if (i === 0) {
        min2 = { p: p2, part: i };
        dist = curDist;
      } else {
        if (curDist < dist) {
          dist = curDist;
          min2 = { p: p2, part: i };
        }
      }
    }
    return min2;
  }
  static ClosestPointOnCircle(circle, p2) {
    let dist = Distance(circle.center, p2);
    if (dist < circle.radius) {
      let p1 = circle.center.Clone();
      p1.x += circle.radius + 1;
      let u = Math.atan2(p2.y - circle.center.y, p2.x - circle.center.x);
      p2 = this.Rotate(circle.center, u, p1);
    }
    let ln = new LineGeom(circle.center, p2);
    let ret = this.InteceptCircleLineSeg(circle, ln);
    if (ret) {
      return ret[0];
    }
    return null;
  }
  static ClosestPointOnText(origin, outlinePoints, p2) {
    let bb = outlinePoints;
    bb.push(origin);
    let minDist = -1;
    let ret;
    bb.forEach((b) => {
      let dist = Distance(b, p2);
      if (!ret) {
        ret = b;
        minDist = dist;
      } else {
        if (minDist >= dist) {
          ret = b;
          minDist = dist;
        }
      }
    });
    return ret;
  }
  static InteceptCircleLineSeg(circle, line) {
    var b, c, d, u1, u2;
    let ret = [];
    let v1 = new Point(line.end.x - line.start.x, line.end.y - line.start.y);
    let v2 = new Point(line.start.x - circle.center.x, line.start.y - circle.center.y);
    b = v1.x * v2.x + v1.y * v2.y;
    c = 2 * (v1.x * v1.x + v1.y * v1.y);
    b *= -2;
    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius));
    if (isNaN(d)) {
      return [];
    }
    u1 = (b - d) / c;
    u2 = (b + d) / c;
    if (u1 <= 1 && u1 >= 0) {
      ret.push(new Point(line.start.x + v1.x * u1, line.start.y + v1.y * u1));
    }
    if (u2 <= 1 && u2 >= 0) {
      ret.push(new Point(line.start.x + v1.x * u2, line.start.y + v1.y * u2));
    }
    return ret;
  }
  static Rotate(origin, angle, b) {
    if (angle === 0) {
      return b;
    }
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const p2 = new Point(b.x - origin.x, b.y - origin.y);
    const x = p2.x * c - p2.y * s;
    const y = p2.x * s + p2.y * c;
    return new Point(origin.x + x, origin.y + y);
  }
  static Angle(p1, p2) {
    const a = Round(p2.x - p1.x, 6);
    const b = Round(p2.y - p1.y, 6);
    if (a === 0 && b === 0) {
      return 0;
    }
    if (a === 0 && b > 0) {
      return Math.PI / 2;
    }
    if (a === 0 && b < 0) {
      return Math.PI * 3 / 2;
    }
    if (a > 0 && b === 0) {
      return 0;
    }
    if (a < 0 && b === 0) {
      return Math.PI;
    }
    let u = Math.atan(b / a);
    if (a < 0) {
      u += Math.PI;
    } else if (a > 0 && b < 0) {
      u += 2 * Math.PI;
    }
    return u;
  }
  static ScaleByOrigin(origin, b, scl) {
    const d = Distance(origin, b) * scl;
    const u = this.Angle(origin, b);
    const ret = new Point(origin.x + Math.cos(u) * d, origin.y + Math.sin(u) * d);
    return ret;
  }
  static pointInPolygon(polygon, point) {
    let odd = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
      if (polygon[i].y > point.y !== polygon[j].y > point.y && point.x < (polygon[j].x - polygon[i].x) * (point.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x) {
        odd = !odd;
      }
      j = i;
    }
    return odd;
  }
  static closestVisuals(p2, r, bufer = 0, pReal) {
    let test = r.rdl.visuals.filter((f) => !f.isEdited && _Geometry.testInRange(p2, f.range, r.buffer));
    bufer = bufer === 0 ? Transform.scale2Real(r.buffer, r.transform.scl) : bufer;
    let sel = [];
    pReal = pReal ? pReal : Transform.transform2Real(p2, r.transform);
    test.forEach((e) => {
      let b = e.getClosestPoint(pReal, bufer);
      if (b) {
        sel.push({ visual: e, closest: { p: b, d: Distance(pReal, b) } });
      }
    });
    return sel;
  }
  static selectByPosition(p2, ev, r, mouseContinue, tuft) {
    let pReal = Transform.transform2Real(p2, r.transform);
    let bufer = Transform.scale2Real(r.buffer, r.transform.scl);
    let sel = _Geometry.closestVisuals(p2, r, bufer, pReal);
    if (r.pin) {
      let selfClosest = r.curVisual.getSelfClosestPoint(pReal, bufer, r.curVisual.points.length - 1);
      if (selfClosest) {
        sel.push({ visual: r.curVisual, closest: selfClosest });
      }
      if (sel.length === 1) {
        p2 = Transform.transform2Window(sel[0].closest.p, r.transform);
        r.mouseDownContinue(p2);
        return;
      }
    }
    if (sel.length < 1) {
      if (mouseContinue) {
        r.mouseDownContinue(p2);
      }
    } else if (sel.length === 1) {
      if (mouseContinue) {
        const pt = Transform.transform2Window(sel[0].closest.p, r.transform);
        if (tuft) {
          tuft.center = pt;
          tuft.visual.dynamic(tuft);
        } else {
          r.mouseDownContinue(pt);
        }
      } else {
        if (r.curMethod === RedlineMethod.edit && r.curType === RedlineTyp.none) {
          r.fillTextDialog = true;
          sel[0].visual.isEdited = true;
          sel[0].visual.snapPoint = sel[0].closest.p;
        }
        SelBox.create(sel[0].visual);
      }
    } else {
      showSelectionContext(tuft, sel, ev);
    }
  }
};
let Geometry = _Geometry;
Geometry.testInRange = (p2, rg, bufer) => {
  let ret = false;
  let r = {
    origin: new Point(rg.origin.x - bufer, rg.origin.y - bufer),
    width: rg.width + 2 * bufer,
    height: rg.height + 2 * bufer
  };
  if (r.origin.x <= p2.x && r.origin.y <= p2.y && r.origin.x + r.width >= p2.x && r.origin.y + r.height >= p2.y) {
    ret = true;
  }
  return ret;
};
const RdlTuftRadius = 15;
class Tuft {
  constructor(visual, winPoint, pad, redline2, idx, type) {
    this.timer = null;
    this.dynamic = false;
    this.lastPoint = false;
    this.finalized = false;
    this.type = type;
    this.center = winPoint;
    if (visual) {
      this.redline = redline2;
      this.visual = visual;
      this.pad = pad;
      this.target = this.makeTarget(this.center, this.visual._id);
      this.pad.appendChild(this.target);
      this.idx = idx;
      if (idx === -1) {
        this.lastPoint = true;
      }
      this.events();
    }
  }
  makeTarget(c, _id) {
    return CreateSvgObject(NodeName.circle, {
      class: "tuft-point",
      cx: c.x,
      cy: c.y,
      r: RdlTuftRadius,
      _id,
      "rdl-vertex-type": vertexType[this.type]
    });
  }
  draw(winPoint) {
    this.target.setAttribute("cx", winPoint.x + "");
    this.target.setAttribute("cy", winPoint.y + "");
  }
  updatePos(winPoint, dynamic) {
    this.dynamic = dynamic;
    this.center = winPoint;
    this.draw(this.center);
    if (dynamic) {
      if (this.lastPoint) {
        this.idx = this.visual.points.length - 1;
      }
      this.visual.dynamic(this);
    }
  }
  finalize(ev) {
    let r = this.redline;
    if (this.visual.isEdited) {
      this.target.remove();
      SelBox.create(this.visual);
    }
    if (ev && !this.finalized && this.redline.snap) {
      this.finalized = true;
      let p2;
      let sel = Geometry.closestVisuals(this.center, r);
      let selfPoint = this.visual.getSelfClosestPoint(Transform.transform2Real(this.center, r.transform), Transform.scale2Real(r.buffer, r.transform.scl), this.idx);
      if (selfPoint) {
        sel.push({ visual: this.visual, closest: selfPoint });
      }
      if (sel.length === 1) {
        p2 = Transform.transform2Window(sel[0].closest.p, r.transform);
        if (r.curVisual) {
          r.createOrModifyPin(p2, true);
        } else {
          this.updatePos(p2, true);
          SelBox.destroy(this.visual);
          SelBox.create(this.visual);
        }
      } else if (sel.length > 1) {
        showSelectionContext(this, sel, ev);
      }
    }
    r.panZoom.activeTuft = void 0;
    r.panZoom.cancelClick = true;
    this.timer = setTimeout(() => {
      r.panZoom.cancelClick = false;
      this.timer = null;
    }, 50);
  }
  events() {
    const prerequest = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    };
    this.target.addEventListener("pointerdown", (ev) => {
      prerequest(ev);
      if (this.type === vertexType.interVertex || this.type === vertexType.vertex) {
        SelBox.destroy(this.visual);
      }
      this.redline.panZoom.activeTuft = this;
      Array.from(this.redline.tuftsDock.children).forEach((e) => {
        e.style.display = "none";
      });
      this.target.style.display = "";
    });
    if (this.type === vertexType.tuft) {
      this.target.addEventListener("click", (ev) => {
        prerequest(ev);
        if (this.dynamic) {
          this.dynamic = false;
        } else {
          this.redline.finalize();
        }
      });
    }
  }
}
class Visual {
}
class Circle extends Visual {
  constructor(src, trf) {
    super();
    this.trf = trf;
    this.type = TypeConstant.circle;
    this.points = Transform.transformArray2Window([src.center], trf);
    this.r = Transform.scale2Window(src.r, trf.scl);
    if (this.points.length === 1 && this.r > 0) {
      this.valid = true;
      this.level = src.level ? src.level : void 0;
      this.handle = src.handle ? src.handle : void 0;
      this.style = src.style ? src.style : void 0;
    }
  }
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  create() {
    let e;
    const stl = this.style2String();
    const c = this.points[0];
    e = CreateSvgObject(NodeName.circle, {
      cx: c.x,
      cy: c.y,
      r: this.r
    });
    if (stl) {
      e.setAttribute("style", stl);
    }
    return e;
  }
}
class RCircle {
  move(dt) {
    this.points.forEach((p2, i) => {
      this.points[i] = p2.AddPoint(dt);
    });
  }
  copy() {
    throw new Error("Method not implemented.");
  }
  edit() {
    if (this.points.length === 2) {
      if (this.snapPoint) {
        this.points[1] = this.snapPoint;
      }
      const pts = Transform.transformArray2Window(this.points, this.trf);
      this.nodeList = [new Tuft(this, pts[1], this.redline.tuftsDock, this.redline, 1, vertexType.vertex)];
      this.interNodeList = [new Tuft(this, pts[0], this.redline.tuftsDock, this.redline, 0, vertexType.interVertex)];
    }
    this.snapPoint = void 0;
  }
  dynamic(nod) {
    const b = Transform.transform2Real(nod.center, nod.redline.transform);
    this.points[nod.idx] = b;
    this.draw();
  }
  removeVertex(pin) {
  }
  create() {
    const e = CreateSvgObject(NodeName.g, { _id: this._id });
    return e;
  }
  draw() {
    const core = this.toVisual(this.points, this.style);
    this.range = void 0;
    RemoveChildren(this.elem);
    if (core) {
      const circle = new Circle(core, this.trf);
      const e = circle.create();
      if (e) {
        this.elem.append(e);
      }
      const geom = {
        center: circle.points[0],
        r: circle.r
      };
      this.range = RangeManager.circleRange(geom.center, parseFloat(geom.r), false);
    }
  }
  setStyle() {
    const stl = this.style2String();
    if (stl) {
      const o = this.elem.firstElementChild;
      o.setAttribute("style", stl);
    }
  }
  addPoint(p2) {
    if (this.points.length < 2) {
      this.points.push(p2);
    } else if (this.points.length === 2) {
      this.points[1] = p2;
    }
    if (this.points.length === 2) {
      this.draw();
    }
  }
  init(pad) {
    this.elem = this.create();
    this.pad = pad;
    this.pad.appendChild(this.elem);
  }
  getRange() {
    const geom = {
      center: this.points[0],
      r: Distance(this.points[0], this.points[1])
    };
    return RangeManager.circleRange(geom.center, geom.r, true);
  }
  finalize() {
    (this == null ? void 0 : this.points.length) === 2 ? this.valid = true : this.valid = false;
  }
  getClosestPoint(realP, bufer) {
    let ret = null;
    const r = Distance(this.points[0], this.points[1]);
    const c = new CircleGeom(this.points[0], r);
    let test = Geometry.ClosestPointOnCircle(c, realP);
    let d = Distance(c.center, realP);
    const r1 = Distance(realP, c.center);
    let d1 = r - r1;
    if (r1 >= r && r1 - r <= bufer) {
      ret = test;
    } else if (r > r1 && r - r1 <= bufer) {
      if (d1 < d) {
        ret = test;
      }
    }
    if (this.style.fill && this.style.fill !== "none") {
      if (!ret) {
        if (r >= r1) {
          if (Distance(realP, c.center) <= Distance(realP, test)) {
            ret = c.center;
          } else {
            ret = test;
          }
        }
      }
    }
    return ret;
  }
  getSelfClosestPoint(realP, bufer, idx) {
    return null;
  }
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  toVisual(points, stl) {
    if (!points || points.length !== 2) {
      return null;
    }
    const style = {};
    for (const key in stl) {
      if (stl[key]) {
        style[key] = stl[key];
      }
    }
    const ret = {
      points,
      center: points[0],
      r: Distance(points[0], points[1]),
      style
    };
    return ret;
  }
  save() {
    throw new Error("Method not implemented.");
  }
  firstStep(r, stl, _id, p2) {
    this.redline = r;
    this.trf = r.transform;
    this.style = stl;
    this._id = _id;
    this.init(r.rdlDock);
    this.fillable = true;
    if (p2) {
      this.points = [p2];
    }
  }
  constructor() {
    this.type = TypeConstant.circle;
  }
}
class Line extends Visual {
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  create() {
    let e;
    const d = PathFromPoints(this.points);
    const stl = this.style2String();
    e = CreateSvgObject(NodeName.path, { d });
    if (stl) {
      e.setAttribute("style", stl);
    }
    return e;
  }
  constructor(src, trf) {
    super();
    this.trf = trf;
    this.type = TypeConstant.line;
    this.points = Transform.transformArray2Window(src.points, trf);
    if (this.points.length > 1) {
      this.valid = true;
      this.level = src.level ? src.level : void 0;
      this.handle = src.handle ? src.handle : void 0;
      this.style = src.style ? src.style : void 0;
    }
  }
}
class RLine {
  setStyle() {
    const stl = this.style2String();
    if (stl) {
      const o = this.elem.firstElementChild;
      o.setAttribute("style", stl);
    }
  }
  getRange() {
    return RangeManager.rangeByPoints(this.points, true);
  }
  draw() {
    const core = this.toVisual(this.points, this.style);
    this.range = void 0;
    RemoveChildren(this.elem);
    if (core) {
      const line = new Line(core, this.trf);
      const e = line.create();
      if (e) {
        this.elem.append(e);
        this.range = RangeManager.rangeByPoints(line.points, false);
      }
    }
  }
  move(dt) {
    this.points.forEach((p2, i) => {
      this.points[i] = p2.AddPoint(dt);
    });
  }
  copy() {
    throw new Error("Method not implemented.");
  }
  edit() {
    let h = this.points.length;
    if (h < 2) {
      return;
    }
    this.nodeList = [];
    this.interNodeList = [];
    for (let i = 0; i < h; i++) {
      let j = i + 1;
      let a = this.points[i];
      let b = j < h ? this.points[i + 1] : null;
      let p2 = Transform.transform2Window(a, this.trf);
      this.nodeList.push(new Tuft(this, p2, this.redline.tuftsDock, this.redline, i, vertexType.vertex));
      if (b) {
        let dist = Transform.scale2Window(Distance(a, b), this.trf.scl, 0);
        p2 = a.AddPoint(b);
        p2.x = p2.x / 2;
        p2.y = p2.y / 2;
        p2 = Transform.transform2Window(p2, this.trf);
        if (dist > 100) {
          this.interNodeList.push(new Tuft(this, p2, this.redline.tuftsDock, this.redline, i, vertexType.interVertex));
        }
      }
    }
  }
  dynamic(nod) {
    let b = Transform.transform2Real(nod.center, nod.redline.transform);
    if (nod.type === vertexType.interVertex) {
      let idx = nod.idx + 1;
      this.points.splice(idx, 0, b);
      nod.type = vertexType.vertex;
      nod.idx = idx;
    }
    this.points[nod.idx] = b;
    this.draw();
  }
  removeVertex(pin) {
    this.points.splice(pin.idx, 1);
    if (this.points.length > 1) {
      this.draw();
    } else {
      let idx = this.redline.rdl.visuals.findIndex((f) => f._id === this._id);
      if (idx > -1) {
        this.redline.rdl.visuals.splice(idx, 1);
        this.redline.panZoom.run();
      }
    }
  }
  addPoint(p2) {
    this.points.push(p2);
    if (this.points.length > 1) {
      this.draw();
    }
  }
  init(pad) {
    this.elem = this.create();
    this.pad = pad;
    this.pad.appendChild(this.elem);
  }
  finalize() {
    (this == null ? void 0 : this.points.length) > 1 ? this.valid = true : this.valid = false;
  }
  getClosestPoint(realP, bufer, points) {
    if (points) {
      points = CloneJson(points);
    } else {
      points = CloneJson(this.points);
    }
    const calck = () => {
      let h = points.length;
      if (h < 2) {
        return null;
      }
      let test = Geometry.ClosestPoint2LineArray(points, realP, bufer);
      if (test.part === h - 1) {
        test.part -= 1;
      }
      let d = Geometry.DistPoint2Line(points[test.part], points[test.part + 1], realP);
      if (d <= bufer) {
        return test.p;
      }
      return null;
    };
    return calck();
  }
  getSelfClosestPoint(realP, bufer, idx) {
    return null;
  }
  create() {
    const e = CreateSvgObject(NodeName.g, { _id: this._id });
    return e;
  }
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  toVisual(points, stl) {
    if (!points || points.length < 1) {
      return null;
    }
    const style = {};
    for (const key in stl) {
      if (stl[key]) {
        style[key] = stl[key];
      }
    }
    const ret = {
      points,
      style
    };
    return ret;
  }
  save() {
    const e = this.toVisual(this.points, this.style);
    if (e) {
      e.range = this.range;
    }
    return e;
  }
  firstStep(r, stl, _id, p2) {
    this.redline = r;
    this.trf = r.transform;
    this.style = stl;
    this._id = _id;
    this.init(r.rdlDock);
    this.fillable = false;
    if (p2) {
      this.points = [p2];
    }
  }
  constructor() {
    this.type = TypeConstant.line;
  }
}
class Shape extends Visual {
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  create() {
    let e;
    const d = PathFromPoints(this.points) + "z";
    const stl = this.style2String();
    e = CreateSvgObject(NodeName.path, { d });
    if (stl) {
      e.setAttribute("style", stl);
    }
    return e;
  }
  constructor(src, trf) {
    super();
    this.trf = trf;
    this.type = TypeConstant.line;
    this.points = Transform.transformArray2Window(src.points, trf);
    if (this.points.length > 1) {
      this.valid = true;
      this.level = src.level ? src.level : void 0;
      this.handle = src.handle ? src.handle : void 0;
      this.style = src.style ? src.style : void 0;
    }
  }
}
class RShape {
  move(dt) {
    this.points.forEach((p2, i) => {
      this.points[i] = p2.AddPoint(dt);
    });
  }
  copy() {
    throw new Error("Method not implemented.");
  }
  edit() {
    let h = this.points.length;
    if (h < 3) {
      return;
    }
    this.nodeList = [];
    this.interNodeList = [];
    for (let i = 0; i < h; i++) {
      let j = i + 1;
      let a = this.points[i];
      let b = j < h ? this.points[i + 1] : this.points[0];
      let p2 = Transform.transform2Window(a, this.trf);
      this.nodeList.push(new Tuft(this, p2, this.redline.tuftsDock, this.redline, i, vertexType.vertex));
      let dist = Transform.scale2Window(Distance(a, b), this.trf.scl, 0);
      p2 = a.AddPoint(b);
      p2.x = p2.x / 2;
      p2.y = p2.y / 2;
      p2 = Transform.transform2Window(p2, this.trf);
      if (dist > 100) {
        this.interNodeList.push(new Tuft(this, p2, this.redline.tuftsDock, this.redline, i, vertexType.interVertex));
      }
    }
  }
  dynamic(nod) {
    let b = Transform.transform2Real(nod.center, nod.redline.transform);
    if (nod.type === vertexType.interVertex) {
      let idx = nod.idx + 1;
      this.points.splice(idx, 0, b);
      nod.type = vertexType.vertex;
      nod.idx = idx;
    }
    this.points[nod.idx] = b;
    this.draw();
  }
  removeVertex(pin) {
    this.points.splice(pin.idx, 1);
    if (this.points.length > 2) {
      this.draw();
    } else {
      let idx = this.redline.rdl.visuals.findIndex((f) => f._id === this._id);
      if (idx > -1) {
        this.redline.rdl.visuals.splice(idx, 1);
        this.redline.panZoom.run();
      }
    }
  }
  create() {
    const e = CreateSvgObject(NodeName.g, { _id: this._id });
    return e;
  }
  draw() {
    const core = this.toVisual(this.points, this.style);
    this.range = void 0;
    RemoveChildren(this.elem);
    if (core) {
      const shape = new Shape(core, this.trf);
      const e = shape.create();
      if (e) {
        this.elem.append(e);
        this.range = RangeManager.rangeByPoints(shape.points, false);
      }
    }
  }
  setStyle() {
    const stl = this.style2String();
    if (stl) {
      const o = this.elem.firstElementChild;
      o.setAttribute("style", stl);
    }
  }
  addPoint(p2) {
    this.points.push(p2);
    if (this.points.length > 1) {
      this.draw();
    }
  }
  init(pad) {
    this.elem = this.create();
    this.pad = pad;
    this.pad.appendChild(this.elem);
  }
  getRange() {
    return RangeManager.rangeByPoints(this.points, true);
  }
  finalize() {
    (this == null ? void 0 : this.points.length) > 2 ? this.valid = true : this.valid = false;
  }
  getClosestPoint(realP, bufer) {
    let points = CloneJson(this.points);
    const calck = () => {
      if (points.length < 3) {
        return null;
      }
      if (Round(Distance(points[0], points[points.length - 1]), 6) !== 0) {
        points.push(points[0]);
      }
      let test = Geometry.ClosestPoint2LineArray(points, realP, bufer);
      let d = Geometry.DistPoint2Line(points[test.part], points[test.part + 1], realP);
      if (d <= bufer) {
        return test.p;
      }
      if (this.style.fill && this.style.fill !== "none") {
        if (Geometry.pointInPolygon(this.points, realP)) {
          return test.p;
        }
      }
      return null;
    };
    return calck();
  }
  getSelfClosestPoint(realP, bufer, idx) {
    return null;
  }
  style2String() {
    return this.style ? styleFromObject(this.style) : "";
  }
  toVisual(points, stl) {
    if (!points || points.length < 1) {
      return null;
    }
    const style = {};
    for (const key in stl) {
      if (stl[key]) {
        style[key] = stl[key];
      }
    }
    const ret = {
      points,
      style,
      type: TypeConstant.shp
    };
    return ret;
  }
  save() {
    throw new Error("Method not implemented.");
  }
  firstStep(r, stl, _id, p2) {
    this.redline = r;
    this.trf = r.transform;
    this.style = stl;
    this._id = _id;
    this.init(r.rdlDock);
    this.fillable = true;
    if (p2) {
      this.points = [p2];
    }
  }
  constructor() {
    this.type = TypeConstant.shp;
  }
}
const Presahy = "g,q,y,j,{,},[,],(,|,)";
const centerBaseline = (txt) => {
  let qq = Presahy.split(",");
  let ret = "central";
  let count = qq.length;
  for (let i = 0; i < count; i++) {
    if (txt.indexOf(qq[i]) > -1) {
      ret = "middle";
      i = count;
    }
  }
  return ret;
};
const bottomBaseline = (txt) => {
  let qq = Presahy.split(",");
  let ret = "alphabetic";
  let count = qq.length;
  for (let i = 0; i < count; i++) {
    if (txt.indexOf(qq[i]) > -1) {
      ret = "ideographic";
      i = count;
    }
  }
  return ret;
};
class Text extends Visual {
  constructor(src, trf) {
    super();
    this.lines = [];
    this.trf = trf;
    this.type = TypeConstant.text;
    this.alignment = src.alignment;
    if (src.points) {
      this.points = Transform.transformArray2Window(src.points, trf);
      this.boxHeiht = Round(Distance(this.points[0], this.points[this.points.length - 1]), 1);
    }
    if (src.origin) {
      this.origin = Transform.transform2Window(src.origin, trf);
    } else {
      const ct = (a, b) => {
        return new Point((a.x + b.x) / 2, (a.y + b.y) / 2);
      };
      if (this.points) {
        switch (this.alignment) {
          case TextJustification.LT:
            this.origin = this.points[3].Clone();
            break;
          case TextJustification.LC:
            this.origin = ct(this.points[0], this.points[3]);
            break;
          case TextJustification.LB:
            this.origin = this.points[0].Clone();
            break;
          case TextJustification.CT:
            this.origin = ct(this.points[2], this.points[3]);
            break;
          case TextJustification.CC:
            this.origin = ct(this.points[0], this.points[2]);
            break;
          case TextJustification.CB:
            this.origin = ct(this.points[0], this.points[1]);
            break;
          case TextJustification.RT:
            this.origin = this.points[2].Clone();
            break;
          case TextJustification.RC:
            this.origin = ct(this.points[1], this.points[2]);
            break;
          case TextJustification.RB:
            this.origin = this.points[1].Clone();
            break;
        }
        this.origin.x = Round(this.origin.x, 1);
        this.origin.y = Round(this.origin.y, 1);
      } else {
        console.log("Pozor v texte nevieme definovat origin");
      }
    }
    this.angle = src.angle ? src.angle : 0;
    let rescale = src.rescale ? src.rescale : 1;
    this.size = Transform.scale2Window(src.fontSize * rescale, trf.scl, 1);
    this.gap = src.gap ? Transform.scale2Window(src.gap * rescale, trf.scl, 1) : 0;
    this.style = src.style;
    if (src.lines) {
      this.lines = src.lines;
      this.valid = true;
    }
  }
  makeTop(tx) {
    tx.setAttribute("dominant-baseline", "hanging");
    let context;
    let gapSize = this.size + this.gap;
    this.lines.forEach((t, i) => {
      if (i < 1) {
        context = t;
      } else {
        context += `<tspan x="0" y="${gapSize * i}">${t}</tspan>`;
      }
    });
    tx.innerHTML = context;
  }
  makeCenter(tx) {
    let txt = [...this.lines];
    let count = txt.length;
    let context;
    if (count < 2) {
      context = txt[0];
      tx.setAttribute("dominant-baseline", centerBaseline(context));
    } else {
      let m = count % 2;
      let i = count / 2;
      let isEmpty = false;
      if (m === 0) {
        txt.splice(i, 0, "");
        isEmpty = true;
      }
      count = txt.length;
      let idx = Math.round(count / 2 - 0.5);
      context = txt[idx];
      tx.setAttribute("dominant-baseline", isEmpty ? centerBaseline(context) : "middle");
      let j = 0;
      let fsz;
      let gapSize = this.size + this.gap;
      for (let i2 = idx - 1; i2 > -1; i2--) {
        j += 1;
        if (j === 1) {
          fsz = isEmpty ? gapSize / 2 : gapSize;
        }
        context += `<tspan x="0" y="${-fsz * j}">${txt[i2]}</tspan>`;
        fsz = gapSize;
      }
      j = 0;
      for (let i2 = idx + 1; i2 < count; i2++) {
        j += 1;
        if (j === 1) {
          fsz = isEmpty ? gapSize / 2 : gapSize;
        }
        context += `<tspan x="0" y="${fsz * j}">${txt[i2]}</tspan>`;
        fsz = gapSize;
      }
    }
    tx.innerHTML = context;
  }
  makeBottom(tx) {
    let count = this.lines.length - 1;
    let context = this.lines[count];
    let i = 1;
    let gapSize = this.size + this.gap;
    while (count > 0) {
      count -= 1;
      context += `<tspan x="0" y="${-gapSize * i}">${this.lines[count]}</tspan>`;
      i += 1;
    }
    tx.innerHTML = context;
    tx.setAttribute("dominant-baseline", bottomBaseline(this.lines[count]));
  }
  create() {
    let transform;
    if (this.angle != 0) {
      transform = `translate(${this.origin.toString()}) rotate(-${this.angle})`;
    } else {
      transform = `translate(${this.origin.toString()})`;
    }
    this.tx = CreateSvgObject(NodeName.text, {
      transform,
      dy: "0em",
      style: this.style2String()
    });
    switch (TextJustification[this.alignment].substring(2, 1)) {
      case "T":
        this.makeTop(this.tx);
        break;
      case "C":
        this.makeCenter(this.tx);
        break;
      case "B":
        this.makeBottom(this.tx);
        break;
    }
    let anchor = TextJustification[this.alignment].substring(0, 1);
    if (anchor === "C") {
      this.tx.setAttribute("text-anchor", "middle");
    } else if (anchor === "R") {
      this.tx.setAttribute("text-anchor", "end");
    }
    return this.tx;
  }
  style2String() {
    let stl = this.style ? styleFromObject(this.style) : "";
    stl += ";font-size:" + this.size + "px";
    return stl;
  }
}
class RText {
  createText(p2, tp = null) {
    if (!tp) {
      tp = this.texManager.getTextParams();
    }
    let test = this.toVisual(tp, p2);
    let text = new Text(test, this.trf);
    let ret = null;
    if (text.valid) {
      ret = text.create();
    }
    return ret;
  }
  move(dt) {
    this.points[0] = this.points[0].AddPoint(dt);
  }
  copy() {
    throw new Error("Method not implemented.");
  }
  edit() {
    this.nodeList = [];
    const b = Transform.transform2Window(this.points[0], this.trf);
    this.nodeList = [new Tuft(this, b, this.redline.tuftsDock, this.redline, 1, vertexType.vertex)];
    this.snapPoint = void 0;
    const btn = this.redline.textManager.button;
    const test = this.redline.textManager.bar.style.display;
    if (this.redline.fillTextDialog) {
      this.redline.fillTextDialog = false;
      this.redline.textManager.setByParams(this.tp);
      if (test === "none") {
        const click = GetScreenCordinates(btn);
        this.redline.textManager.showHide(click);
      }
    }
  }
  dynamic(nod) {
    const b = Transform.transform2Real(nod.center, nod.redline.transform);
    this.addPoint(b);
  }
  removeVertex(pin) {
  }
  rangeByDumyTemplate(orig, w, h, u, just) {
    let bb = [
      orig,
      new Point(orig.x + w, orig.y),
      new Point(orig.x + w, orig.y - h),
      new Point(orig.x, orig.y - h)
    ];
    let dt = new Point();
    switch (just) {
      case TextJustification.LC:
        dt.y = h / 2;
        break;
      case TextJustification.LB:
        dt.y = h;
        break;
      case TextJustification.CT:
        dt.x = w / 2;
        break;
      case TextJustification.CC:
        dt.x = w / 2;
        dt.y = h / 2;
        break;
      case TextJustification.CB:
        dt.x = w / 2;
        dt.y = h;
        break;
      case TextJustification.RT:
        dt.x = w;
        break;
      case TextJustification.RC:
        dt.x = w;
        dt.y = h / 2;
        break;
      case TextJustification.RB:
        dt.x = w;
        dt.y = h;
        break;
    }
    bb.forEach((b, i) => {
      b.x -= dt.x;
      b.y += dt.y;
      if (u === 0) {
        bb[i] = b;
      } else {
        bb[i] = Geometry.Rotate(this.points[0], u, b);
      }
    });
    this.outlinePoints = bb;
    return RangeManager.rangeByPoints(bb, true);
  }
  getRange() {
    return RangeManager.rangeByPoints(this.outlinePoints, true);
  }
  calculateRange(tp) {
    let p2 = this.points[0];
    tp.lines.forEach((line, i) => {
      if (line.trim().length === 0) {
        tp.lines[i] = "-";
      }
    });
    let u = tp.angle / 180 * Math.PI;
    let just = tp.alignment;
    let gap = tp.gap;
    tp.alignment = TextJustification.LT;
    tp.angle = 0;
    tp.gap = 0;
    let size = Transform.scale2Real(100, this.trf.scl);
    let scl = size / tp.size;
    tp.size = size;
    const core = this.createText(p2, tp);
    core.setAttribute("opacity", "0");
    this.redline.miscDock.append(core);
    let bx = core.getBoundingClientRect();
    core.remove();
    let w = bx.width / scl;
    let h = tp.lines.length === 1 ? 100 / scl : bx.height / scl;
    return this.rangeByDumyTemplate(this.points[0].Clone(), Transform.scale2Real(w, this.trf.scl, 6), Transform.scale2Real(h, this.trf.scl, 6) + gap * (tp.lines.length - 1), u, just);
  }
  drawFromDialog() {
    var _a;
    let opacity = ((_a = this.tp) == null ? void 0 : _a.opacity) ? this.tp.opacity : void 0;
    this.tp = this.texManager.getTextParams();
    if (opacity) {
      this.tp.opacity = opacity;
    }
    this.draw();
  }
  draw() {
    let p2 = this.points[0];
    const core = this.createText(p2, this.tp);
    RemoveChildren(this.elem);
    if (core) {
      this.elem.append(core);
    }
    if (!this.tp) {
      this.tp = this.texManager.getTextParams();
    }
    this.calculateRange(CloneJson(this.tp));
    const points = Transform.transformArray2Window(this.outlinePoints, this.trf);
    this.range = RangeManager.rangeByPoints(points, false);
  }
  setStyle() {
    throw new Error("Method not implemented.");
  }
  addPoint(p2) {
    const dist = this.points[0].SubtractPoint(p2);
    this.points = [p2];
    let bb = [];
    this.outlinePoints.forEach((b2) => {
      let n = b2.SubtractPoint(dist);
      bb.push(n);
    });
    this.outlinePoints = [...bb];
    this.range = RangeManager.rangeByPoints(Transform.transformArray2Window(bb, this.trf), false);
    const b = Transform.transform2Window(p2, this.trf);
    let transform = `translate(${b.toString()})`;
    let curTx = this.elem.querySelector("text[transform]");
    if (curTx) {
      let t = curTx.getAttribute("transform");
      const res = t.match(new RegExp("(?<=rotate\\()(.*)(?=\\))", "g"));
      if (res) {
        transform += ` rotate(${res[0]})`;
      }
      curTx.setAttribute("transform", transform);
    }
  }
  init(pad) {
    this.elem = this.create();
    this.pad = pad;
    this.pad.appendChild(this.elem);
    if (this.tp) {
      this.draw();
    }
  }
  finalize() {
    (this == null ? void 0 : this.points.length) === 1 ? this.valid = true : this.valid = false;
  }
  getClosestPoint(realP, bufer) {
    let p2 = Geometry.ClosestPointOnText(this.points[0], this.outlinePoints, realP);
    return p2;
  }
  getSelfClosestPoint(realP, bufer, idx) {
    return null;
  }
  create() {
    const e = CreateSvgObject(NodeName.g, { _id: this._id, origin: "" });
    return e;
  }
  style2String() {
    return "";
  }
  toVisual(src, origin) {
    if (src) {
      const ret = {
        type: TypeConstant.text,
        origin,
        alignment: src.alignment,
        angle: src.angle,
        lines: src.lines
      };
      if (src.gap) {
        ret["gap"] = src.gap;
      }
      let style = {};
      for (const [key, value] of Object.entries(src)) {
        switch (key) {
          case "font":
            style["font-family"] = value;
            break;
          case "color":
            style["fill"] = value;
            break;
          case "size":
            ret["fontSize"] = value;
            break;
          case "range":
            ret["range"] = value;
            break;
          case "opacity":
            if (value < 1) {
              style["opacity"] = value;
            }
            break;
        }
      }
      if (src.bold) {
        style["font-weight"] = "bold";
      }
      if (src.underline) {
        style["text-decoration"] = "underline";
      }
      if (src.italic) {
        style["font-style"] = "italic";
      }
      ret["style"] = style;
      return ret;
    }
  }
  save() {
    throw new Error("Method not implemented.");
  }
  firstStep(r, stl, _id, p2) {
    this.redline = r;
    this.texManager = r.textManager;
    this.trf = r.transform;
    this.style = stl;
    this._id = _id;
    if (p2) {
      this.points = [p2];
    }
    this.init(r.rdlDock);
    this.fillable = false;
  }
  constructor() {
    this.type = TypeConstant.redlinetext;
  }
}
class SvgManager {
  setSize() {
    const sz = getSize(this.parent);
    this.size = { width: sz.x, height: sz.y, origin: new Point() };
  }
  getRange(visuals) {
    const ranges = RangeManager.getRangeRecursive(visuals);
    return RangeManager.rangeByRanges(ranges);
  }
  setGlobalTransform() {
    this.setSize();
    this.range = this.getRange(this.visuals);
    this.transform = Transform.getDefaultTP(this.size, this.range);
  }
  render(svg, pubVisuals) {
    const g = CreateSvgObject(NodeName.g, {
      id: "grf",
      fill: "none",
      transform: ""
    });
    pubVisuals.forEach((v) => {
      g.appendChild(v.create());
    });
    svg.innerHTML = g.outerHTML;
    svgArea.panZoom.panStart();
  }
  static getVisual(src, manager) {
    let visual;
    switch (src.type) {
      case TypeConstant.line:
        visual = new Line(src, manager.transform);
        break;
      case TypeConstant.shp:
        visual = new Shape(src, manager.transform);
        break;
      case TypeConstant.circle:
        visual = new Circle(src, manager.transform);
        break;
      case TypeConstant.text:
        visual = new Text(src, manager.transform);
    }
    return visual;
  }
  setObjectsFromVisuals() {
    this.setSize();
    const out = [];
    this.visuals.forEach((e) => {
      const origin = new Point(e.range.origin.x, e.range.origin.y);
      const width = e.range.width;
      const height = e.range.height;
      let rg = { origin, width, height };
      const screenRange = () => {
        let lt = rg.origin;
        let rb = new Point(lt.x + rg.width, lt.y - rg.height);
        let pts = [];
        [lt, rb].forEach((p2) => {
          const b = Transform.transform2Window(p2, this.transform);
          pts.push(b);
        });
        rg.origin = pts[0];
        rg.width = pts[1].x - pts[0].x;
        rg.height = pts[1].y - pts[0].y;
      };
      screenRange();
      const posTest = RangeManager.RangesOverlap(rg, this.size);
      if (posTest.out === false) {
        const v = SvgManager.getVisual(e, this);
        if (v.valid) {
          out.push(v);
        }
      }
    });
    return out;
  }
  async run(trf) {
    if (trf) {
      const tp = this.transform;
      tp.scl *= trf.scl;
      tp.trl.x = (tp.trl.x + trf.trl.x) * trf.scl;
      tp.trl.y = (tp.trl.y + trf.trl.y) * trf.scl;
    }
    return new Promise((resolve) => {
      this.pubVisuals = this.setObjectsFromVisuals();
      this.render(this.parent.querySelector("svg.canvas"), this.pubVisuals);
      resolve("success");
    }).then(() => {
      var _a, _b;
      const r = (_b = (_a = this.svgArea) == null ? void 0 : _a.redlinesManagement) == null ? void 0 : _b.redline;
      if (r) {
        if (r.afterScroll) {
          r.afterScroll = false;
        }
        r.transform = this.transform;
        r.draw();
      }
    });
  }
  constructor(svgArea2, e) {
    this.drawingName = e.name;
    this.visuals = e.visuals;
    this.parent = svgArea2.drawing;
    this.svgArea = svgArea2;
    this.setGlobalTransform();
  }
}
document.getElementById("btInit").addEventListener("click", () => {
  initSvgArea(document.getElementById("micro-drawing"));
});
document.getElementById("btLoad").addEventListener("click", async () => {
  if (svgArea) {
    const URL2 = "https://rendererdatastorage.blob.core.windows.net/renderdata/data.json?sp=r&st=2023-01-30T08:32:17Z&se=2023-12-31T16:32:17Z&spr=https&sv=2021-06-08&sr=b&sig=D7tzNUh3UNVHCK8BYTOOwM4J8jj6D%2Bvg%2BwlTHMGnKpo%3D";
    fetch(URL2, {
      mode: "cors",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "https://rendererdatastorage.blob.core.windows.net",
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      svgArea.svgManager = new SvgManager(svgArea, data.drawing[0]);
      svgArea.svgManager.run();
    });
  }
});
document.getElementById("btRedline").addEventListener("click", () => {
  const path = new URL("data:text/html;base64,PGRpdiBjbGFzcz0ibW9kYWwiIGlkPSJzdGF0aWNCYWNrZHJvcExpdmUiIGRhdGEtYnMtYmFja2Ryb3A9InN0YXRpYyIgZGF0YS1icy1rZXlib2FyZD0iZmFsc2UiIHRhYmluZGV4PSItMSINCiAgICBhcmlhLWxhYmVsbGVkYnk9InN0YXRpY0JhY2tkcm9wTGl2ZUxhYmVsIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiIGFyaWEtbW9kYWw9InRydWUiPg0KICAgIDxkaXYgY2xhc3M9Im1vZGFsLWRpYWxvZyI+DQogICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWNvbnRlbnQiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtaGVhZGVyIj4NCiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9Im1vZGFsLXRpdGxlIiBpZD0ic3RhdGljQmFja2Ryb3BMaXZlTGFiZWwiPjwvaDU+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4tY2xvc2UiIGRhdGEtYnMtZGlzbWlzcz0ibW9kYWwiIGFyaWEtbGFiZWw9IkNsb3NlIj48L2J1dHRvbj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtYm9keSI+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWZvb3RlciI+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXNlY29uZGFyeSIgZGF0YS1icy1kaXNtaXNzPSJtb2RhbCI+RGlzbWlzcyBjaGFuZ2VzPC9idXR0b24+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXByaW1hcnkgcmVkbGluZS1zYXZlIj5TYXZlPC9idXR0b24+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgPC9kaXY+DQo8L2Rpdj4=", self.location).href;
  loadData(path).then((data) => {
    svgArea.drawing.appendChild(createFragment(data));
  });
});
document.getElementById("testDb").addEventListener("click", async () => {
  let redlines = getData$1();
  redlines.then((data) => {
    console.log(JSON.stringify(data));
  });
});
document.getElementById("btTest").addEventListener("click", () => {
  var _a;
  let r = (_a = svgArea == null ? void 0 : svgArea.redlinesManagement) == null ? void 0 : _a.redline;
  if (r) {
    r.save();
  }
});
document.getElementById("getSize").addEventListener("click", () => {
  if (svgArea) {
    const sz = getSize(svgArea.drawing);
    console.log("size> " + sz.toString());
  }
});
const getData$1 = async () => {
  let order2;
  let unOrderedRedlines;
  await fetch("http://localhost:3000/order?list").then((response) => response.json()).then((data) => {
    order2 = data;
  });
  await fetch("http://localhost:3000/redlines").then((response) => response.json()).then((data) => {
    unOrderedRedlines = data;
  });
  if (order2) {
    let redlines = [];
    order2.list.forEach((id) => {
      let e = unOrderedRedlines.find((f) => f.id === id);
      redlines.push(e);
    });
    return redlines;
  } else {
    return unOrderedRedlines;
  }
};
const svgNs = "http://www.w3.org/2000/svg";
const scrolRatio = () => OS === OsPlatform.Mac_OS ? 1.1 : 1.3;
class PanZoom {
  constructor(pad, svgArea2) {
    this.pressed = false;
    this.timerScroll = null;
    this.timeResize = null;
    this.cancelClick = false;
    this.busy = false;
    this.sr = scrolRatio();
    this.svgArea = svgArea2;
    this.pad = pad;
    this.events();
    this.panStart();
  }
  testSvgManager() {
    if (this.svgArea.svgManager) {
      return true;
    }
  }
  testRedlineActive() {
    var _a, _b;
    if (this.svgArea.svgManager) {
      if ((_b = (_a = this.svgArea) == null ? void 0 : _a.redlinesManagement) == null ? void 0 : _b.redline) {
        return true;
      }
    }
    return false;
  }
  setCursor(key) {
    this.pad.setAttribute("redline-method", key);
  }
  setSnap(snap) {
    if (snap) {
      this.pad.setAttribute("redline-method-snap", "");
    } else {
      this.pad.removeAttribute("redline-method-snap");
    }
  }
  run() {
    if (this.testSvgManager()) {
      const cur = this.type;
      this.type = PanZoomEvt.stop;
      this.svgArea.svgManager.run(this.trf).then(() => {
        this.type = cur;
        if (this.testRedlineActive()) {
          this.svgArea.redlinesManagement.redline.pause = true;
          setTimeout(() => {
            this.svgArea.redlinesManagement.redline.pause = false;
          }, 50);
        }
      });
    }
  }
  panStart() {
    this.grf = this.pad.querySelector("g[id='grf']");
    this.trf = { scl: 1, trl: new Point() };
    this.type = PanZoomEvt.pan;
  }
  getElms(b) {
    const orig = "oprig-style";
    const a = [];
    let obj = null;
    let ret = { cancel: false, _id: [] };
    const showBack = () => {
      for (let i = 0; i < a.length; ++i) {
        const e = a[i];
        e.setAttribute("style", e.getAttribute(orig));
        e.removeAttribute(orig);
        const uri = e.namespaceURI.toLocaleLowerCase();
        let id = e.getAttribute("_id");
        if (id && uri === svgNs && e.nodeName.toLocaleLowerCase() !== "svg") {
          if (!ret._id.includes(id)) {
            ret._id.push(e);
          }
        }
      }
    };
    if ("elementFromPoint" in document) {
      do {
        obj = document.elementFromPoint(b.x, b.y);
        obj.setAttribute(orig, obj.getAttribute("style"));
        console.log(obj);
        if (obj.nodeName.toLocaleLowerCase() === "div" && obj.getAttribute("id") === "svgArea") {
          showBack();
          return ret;
        } else {
          obj.parentNode;
        }
        a.push(obj);
        obj.style.display = "none";
      } while (true);
    }
    showBack();
  }
  zoom(p2, deltaY, r) {
    const rr = deltaY < 0 ? r : 1 / r;
    const scl = this.trf.scl;
    this.trf.scl *= rr;
    this.trf.trl.x -= (p2.x + this.trf.trl.x) * (this.trf.scl - scl) / this.trf.scl;
    this.trf.trl.y -= (p2.y + this.trf.trl.y) * (this.trf.scl - scl) / this.trf.scl;
    this.grf.setAttribute("transform", `scale(${this.trf.scl}) translate(${this.trf.trl.toString()})`);
  }
  click(ev) {
    if (this.cancelClick) {
      console.log("po posune ni\u010D nerie\u0161");
      return;
    }
    if (this.testRedlineActive()) {
      this.svgArea.redlinesManagement.redline.onMouseDown(ev);
    }
  }
  events() {
    this.pad.addEventListener("pointerdown", (ev) => {
      if (this.type === PanZoomEvt.stop) {
        return;
      }
      this.pad.setAttribute("pan", "panstart");
      this.pressed = true;
    });
    this.pad.addEventListener("pointerup", (ev) => {
      if (this.activeTuft) {
        if (this.activeTuft.type === vertexType.vertex) {
          if (this.activeTuft.dynamic) {
            this.activeTuft.dynamic = false;
          } else {
            this.activeTuft.visual.removeVertex(this.activeTuft);
          }
        }
        this.activeTuft.finalize(ev);
        return;
      }
      if (this.type === PanZoomEvt.stop) {
        return;
      }
      this.pad.removeAttribute("pan");
      this.pressed = false;
      if (Math.abs(this.trf.trl.x) + Math.abs(this.trf.trl.y) > 0) {
        this.run();
      }
    });
    this.pad.addEventListener("pointermove", (ev) => {
      if (this.activeTuft) {
        let p2 = Point.ExactPoint(new Point(ev.movementX, ev.movementY), 0);
        let c = this.activeTuft.center.AddPoint(p2);
        this.activeTuft.updatePos(c, true);
        this.activeTuft.finalized = false;
        return;
      }
      if (this.type === PanZoomEvt.stop) {
        return;
      }
      if (this.pressed) {
        this.pad.setAttribute("pan", "pan");
        let p2 = Point.ExactPoint(new Point(ev.movementX, ev.movementY), 0);
        this.trf.trl = this.trf.trl.AddPoint(p2);
        this.grf.setAttribute("transform", `scale(${this.trf.scl}) translate(${this.trf.trl.toString()})`);
      }
    });
    this.pad.addEventListener("wheel", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      if (this.type === PanZoomEvt.stop) {
        return false;
      }
      if (this.pressed === false) {
        let p2 = Point.ExactPoint(new Point(ev.offsetX, ev.offsetY), 0);
        this.zoom(p2, ev.deltaY, this.sr);
        try {
          if (this.timerScroll === null) {
            this.timerScroll = setTimeout(() => {
              var _a, _b;
              clearTimeout(this.timerScroll);
              this.timerScroll = null;
              const r = (_b = (_a = this.svgArea) == null ? void 0 : _a.redlinesManagement) == null ? void 0 : _b.redline;
              if (r) {
                r.afterScroll = true;
              }
              this.run();
            }, 600);
          }
        } catch (e) {
          console.log("Zooming error: " + e);
        }
      }
      return false;
    }, { passive: false });
    this.pad.addEventListener("pointerleave", () => {
      if (this.type === PanZoomEvt.stop) {
        return;
      }
      this.pad.removeAttribute("pan");
      this.pressed = false;
    });
    this.pad.addEventListener("click", (ev) => {
      if (this.type === PanZoomEvt.stop) {
        return;
      }
      this.click(ev);
    });
    window.addEventListener("resize", (ev) => {
      if (this.testSvgManager()) {
        if (this.timeResize === null) {
          this.timeResize = setTimeout(() => {
            const oldsz = new Point(this.svgArea.svgManager.size.width, this.svgArea.svgManager.size.height);
            const sz = getSize(this.svgArea.container);
            this.svgArea.svgManager.size = { width: sz.x, height: sz.y, origin: new Point() };
            clearTimeout(this.timeResize);
            this.timeResize = null;
            let redraw = sz.x - oldsz.x > 0 ? true : false;
            redraw = sz.y - oldsz.y > 0 ? true : redraw;
            if (redraw) {
              this.run();
            }
          }, 600);
        }
      }
    });
  }
}
const url = "http://localhost:3000/";
const getData = async () => {
  const path = new URL("data:text/html;base64,PGRpdiBpZD0iYmxvY2stc2NyZWVuLXNhdmUiIGNsYXNzPSJtb2RhbCBmYWRlIHNob3ciIHRhYmluZGV4PSItMSIgcm9sZT0iZGlhbG9nIiBhcmlhLWxhYmVsbGVkYnk9ImJsb2NrLXNjcmVlbi1zYXZlIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IHBhZGRpbmctcmlnaHQ6IDE3cHg7Ij4NCiAgPGRpdiBjbGFzcz0ibW9kYWwtZGlhbG9nIiByb2xlPSJkb2N1bWVudCI+DQogICAgPGRpdiBjbGFzcz0ibW9kYWwtY29udGVudCI+DQogICAgICA8ZGl2IGNsYXNzPSJtb2RhbC1ib2R5Ij4NCiAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCjwvZGl2Pg==", self.location).href;
  let banner = svgArea.container.querySelector("#block-screen-save");
  if (!banner) {
    await loadData(path).then((data) => {
      banner = createFragment(data);
      svgArea.container.appendChild(banner);
    });
  }
  banner.style.display = "block";
  let order2;
  let unOrderedRedlines;
  await fetch(url + "order?list").then((response) => response.json()).then((data) => {
    order2 = data;
  });
  await fetch(url + "redlines").then((response) => response.json()).then((data) => {
    unOrderedRedlines = data;
  });
  banner.style.display = "none";
  if (order2) {
    let redlines = [];
    order2.list.forEach((id) => {
      let e = unOrderedRedlines.find((f) => f.id === id);
      redlines.push(e);
    });
    return redlines;
  } else {
    return unOrderedRedlines;
  }
};
class Redline {
  constructor(rdl, transform, panZoom) {
    this.guid = "e70c0e43-731a-416f-82de-aa3958498ff8";
    this.pause = false;
    this.afterScroll = false;
    this.buffer = 15;
    this.clearEditedVisual = () => {
      let edited = this.rdl.visuals.find((f) => f.isEdited === true);
      if (edited) {
        edited.isEdited = false;
        RemoveChildren(this.tuftsDock);
        SelBox.destroy(edited);
      }
    };
    this.rdl = rdl;
    this.transform = transform;
    this.panZoom = panZoom;
    this.jsonList2Visual();
    this.draw();
    this.curMethod = RedlineMethod.select;
    panZoom.setCursor("select");
  }
  init() {
    let root = this.panZoom.pad.querySelector(`g[id="${this.guid}"]`);
    if (root) {
      root.remove();
    }
    this.panZoom.grf.setAttribute("id", "grf-orginal");
    let grf = CreateSvgObject(NodeName.g, { "id": "grf" });
    this.panZoom.pad.insertBefore(grf, this.panZoom.grf);
    grf.appendChild(this.panZoom.grf);
    this.panZoom.grf = grf;
    root = CreateSvgObject(NodeName.g, { style: "fill:none", id: this.guid });
    this.rdlDock = CreateSvgObject(NodeName.g, { class: "rdlDock" });
    this.selBoxDock = CreateSvgObject(NodeName.g, { class: "selBoxDock" });
    this.miscDock = CreateSvgObject(NodeName.g, { class: "miscDock" });
    this.tuftsDock = CreateSvgObject(NodeName.g, { class: "tuftsDock" });
    root.appendChild(this.rdlDock);
    root.appendChild(this.selBoxDock);
    root.appendChild(this.miscDock);
    root.appendChild(this.tuftsDock);
    this.panZoom.grf.appendChild(root);
  }
  jsonList2Visual() {
    const visuals = [];
    this.rdl.visuals.forEach((e) => {
      let v;
      let _id = createGuid();
      switch (e.type) {
        case RedlineTyp.line:
          v = new RLine();
          v.points = Point.PointsFromObjects(e.points);
          v.redline = this;
          v._id = _id;
          break;
      }
      if (v) {
        visuals.push(v);
      }
    });
    this.rdl.visuals = visuals;
  }
  save() {
    const x = [];
    this.rdl.visuals.forEach((v) => {
      const data = v.save();
      if (data) {
        x.push(data);
      }
    });
    console.log(JSON.stringify(x));
  }
  editVisual() {
    this.curMethod = RedlineMethod.edit;
    this.curType = RedlineTyp.none;
    let refresh = false;
    if (this.curVisual) {
      let _id = this.curVisual._id;
      this.finalize();
      let v = this.rdl.visuals.find((f) => f._id === _id);
      v.isEdited = true;
      SelBox.create(v);
    } else {
      let v = this.rdl.visuals.find((f) => f.isEdited);
      if (v) {
        v.isEdited = false;
        v.selBox.target.remove();
        RemoveChildren(this.tuftsDock);
      } else {
        let sel = this.getSelected();
        if (sel.length === 1) {
          const sel0 = sel[0];
          if (sel0.type === TypeConstant.redlinetext) {
            this.fillTextDialog = true;
          }
          sel0.isEdited = true;
          sel0.edit();
          refresh = true;
        } else if (sel.length > 1) {
          sel.forEach((v2) => SelBox.destroy(v2));
          refresh = true;
        }
      }
      if (refresh) {
        this.panZoom.run();
      }
    }
  }
  removeSelected() {
    if (this.curVisual) {
      this.curVisual.elem.remove();
      this.curVisual = void 0;
      this.pin.finalize(void 0);
      this.pin.target.remove();
      this.pin = void 0;
    } else {
      let h = this.rdl.visuals.length - 1;
      if (h > -1) {
        for (let i = h; i > -1; i--) {
          if (this.rdl.visuals[i].selBox) {
            this.rdl.visuals.splice(i, 1);
          }
        }
        this.panZoom.run();
      }
    }
  }
  moveSelected2Top() {
    let h = this.rdl.visuals.length - 1;
    if (h > -1) {
      for (let i = h; i > -1; i--) {
        if (this.rdl.visuals[i].selBox) {
          let v = this.rdl.visuals[i];
          const fooClone = Object.assign(Object.create(Object.getPrototypeOf(v)), v);
          this.rdl.visuals.splice(i, 1);
          this.rdl.visuals.push(fooClone);
        }
      }
      this.panZoom.run();
    }
  }
  getSelected() {
    return this.rdl.visuals.filter((f) => f.selBox);
  }
  draw() {
    this.init();
    if (this.rdl.visuals) {
      this.rdl.visuals.forEach((v) => {
        v.trf = this.transform;
        v.init(this.rdlDock);
        v.draw();
        if (v.selBox) {
          v.selBox.init();
        }
      });
    }
    if (this.curVisual) {
      this.curVisual.init(this.rdlDock);
      this.curVisual.draw();
      const winPoint = Transform.transform2Window(this.curVisual.points[this.curVisual.points.length - 1], this.transform);
      this.pin = new Tuft(this.curVisual, winPoint, this.tuftsDock, this, -1, vertexType.tuft);
    }
  }
  createOrModifyPin(winPoint, dynamic) {
    if (this.pin) {
      this.pin.updatePos(winPoint, dynamic);
    } else {
      this.pin = new Tuft(this.curVisual, winPoint, this.tuftsDock, this, -1, vertexType.tuft);
    }
  }
  finalize() {
    if (this.curVisual) {
      this.curVisual.finalize();
      if (this.curVisual.valid) {
        this.rdl.visuals.push(this.curVisual);
      } else {
        this.rdlDock.querySelectorAll(`*[_id="${this.curVisual._id}"]`).forEach((e) => {
          e.remove();
        });
      }
      this.curVisual = void 0;
      if (this.pin) {
        this.pin.target.remove();
        this.pin = void 0;
      }
    }
    this.unselectAll();
    this.clearEditedVisual();
  }
  mouseDownContinue(p2) {
    const b = Transform.transform2Real(p2, this.transform);
    const stl = new GeometryStyle();
    if (!this.curVisual) {
      if (this.curMethod === RedlineMethod.edit) {
        if (this.curType === RedlineTyp.none) {
          if (this.pin && this.pin.type === vertexType.vertex) {
            this.pin.dynamic = false;
            this.pin.finalize(null);
          }
        } else {
          let _id = createGuid();
          switch (this.curType) {
            case RedlineTyp.line:
              this.curVisual = new RLine();
              this.curVisual.firstStep(this, stl, _id, b);
              break;
            case RedlineTyp.shp:
              this.curVisual = new RShape();
              this.curVisual.firstStep(this, stl, _id, b);
              break;
            case RedlineTyp.circle:
              this.curVisual = new RCircle();
              this.curVisual.firstStep(this, stl, _id, b);
              break;
            case RedlineTyp.redlinetext:
              const rt = new RText();
              rt.firstStep(this, stl, _id, b);
              rt.drawFromDialog();
              this.curVisual = rt;
              break;
          }
        }
      } else if (this.curMethod === RedlineMethod.select) {
        console.log("select");
      }
    } else {
      this.curVisual.addPoint(b);
    }
    if (this.curVisual) {
      this.createOrModifyPin(p2, false);
    }
  }
  unselectAll() {
    this.getSelected().forEach((v) => SelBox.destroy(v));
  }
  onMouseDown(ev) {
    if (this.pause) {
      this.pause = false;
      return;
    }
    if (this.eventFtromTextInput) {
      this.finalize();
      this.eventFtromTextInput = false;
    }
    let p2 = Point.ExactPoint(new Point(ev.offsetX, ev.offsetY), 0);
    if (this.curMethod === RedlineMethod.select) {
      if (this.tippyContextInstance) {
        this.tippyContextInstance.destroy();
        this.tippyContextInstance = void 0;
      }
      Geometry.selectByPosition(p2, ev, this, false, this.pin);
      return;
    } else if (this.curMethod === RedlineMethod.edit && this.curType === RedlineTyp.none) {
      this.unselectAll();
      this.clearEditedVisual();
      this.rdl.visuals.filter((f) => f.isEdited === true).forEach((v) => v.isEdited = false);
      Geometry.selectByPosition(p2, ev, this, false, this.pin);
      return;
    }
    if (this.snap) {
      Geometry.selectByPosition(p2, ev, this, true, this.pin);
      return;
    }
    this.mouseDownContinue(p2);
  }
}
class ConfirmationDialog {
  show(redlineName) {
    this.panel.querySelector(".modal-title").innerHTML = `Akt\xEDvna redline vrstva <b>${redlineName}</b>`;
    this.panel.querySelector(".modal-body").innerHTML = `<p>Najprv je potrebn\xE9 akt\xEDvnu vrstvu deaktivova\u0165 potvtden\xEDm alebo zru\u0161en\xEDm zmien!</p>`;
    this.panel.style.display = "block";
    this.panel.setAttribute("role", "dialog");
    this.panel.classList.remove("show");
  }
  close() {
    this.panel.style.display = "none";
    this.panel.removeAttribute("role");
    this.panel.classList.remove("show");
  }
  events() {
    const close = this.panel.querySelector(".modal-header .btn-close");
    close.addEventListener("click", () => {
      this.close();
    });
    const save = this.panel.querySelector(".modal-footer .redline-save");
    save.addEventListener("click", () => {
      svgArea.redlinesManagement.saveCurrentRedline();
    });
    const dismiss = this.panel.querySelector(".modal-footer [data-bs-dismiss]");
    dismiss.addEventListener("click", () => {
      svgArea.redlinesManagement.cancel();
      this.close();
    });
  }
  load(redlineName) {
    const path = new URL("data:text/html;base64,PGRpdiBjbGFzcz0ibW9kYWwiIGlkPSJzdGF0aWNCYWNrZHJvcExpdmUiIGRhdGEtYnMtYmFja2Ryb3A9InN0YXRpYyIgZGF0YS1icy1rZXlib2FyZD0iZmFsc2UiIHRhYmluZGV4PSItMSINCiAgICBhcmlhLWxhYmVsbGVkYnk9InN0YXRpY0JhY2tkcm9wTGl2ZUxhYmVsIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiIGFyaWEtbW9kYWw9InRydWUiPg0KICAgIDxkaXYgY2xhc3M9Im1vZGFsLWRpYWxvZyI+DQogICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWNvbnRlbnQiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtaGVhZGVyIj4NCiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9Im1vZGFsLXRpdGxlIiBpZD0ic3RhdGljQmFja2Ryb3BMaXZlTGFiZWwiPjwvaDU+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4tY2xvc2UiIGRhdGEtYnMtZGlzbWlzcz0ibW9kYWwiIGFyaWEtbGFiZWw9IkNsb3NlIj48L2J1dHRvbj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtYm9keSI+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWZvb3RlciI+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXNlY29uZGFyeSIgZGF0YS1icy1kaXNtaXNzPSJtb2RhbCI+RGlzbWlzcyBjaGFuZ2VzPC9idXR0b24+DQogICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXByaW1hcnkgcmVkbGluZS1zYXZlIj5TYXZlPC9idXR0b24+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgPC9kaXY+DQo8L2Rpdj4=", self.location).href;
    loadData(path).then((data) => {
      this.panel = createFragment(data);
      this.parent.appendChild(this.panel);
      this.events();
      this.show(redlineName);
    });
  }
  constructor(parent, redlineName) {
    this.parent = parent;
    this.load(redlineName);
  }
}
class CreateRedlineDialog {
  show() {
    if (this.panel.style.display === "none") {
      this.panel.style.display = "";
    } else {
      this.panel.style.display = "none";
    }
  }
  events() {
    this.panel.querySelector("button.close").addEventListener("click", () => {
      this.panel.style.display = "none";
    });
    this.panel.querySelector("button#btnRedlineCancel").addEventListener("click", () => {
      this.panel.style.display = "none";
    });
    this.panel.querySelector("button#btnRedlineAccept").addEventListener("click", () => {
      let i = this.panel.querySelector("input#rdlName");
      let val = i.value.trim();
      if (val) {
        this.name = val;
        svgArea.redlinesManagement.newRedline(this.name);
        i.value = "";
        this.panel.style.display = "none";
      } else {
        alert(`Najprv je potrebn\xE9 zadat n\xE1zov`);
      }
    });
  }
  set() {
    this.parent.appendChild(this.panel);
    this.events();
  }
  load() {
    const path = new URL("data:text/html;base64,PGRpdiBpZD0iY3JlYXRlLXJlZGxpbmUiIGNsYXNzPSJtb2RhbC1kaWFsb2cgbW9kYWwtc20gbW9kYWwtZGlhbG9nLWNlbnRlcmVkIiByb2xlPSJkb2N1bWVudCI+ICAgICAgICANCiAgICA8ZGl2IGNsYXNzPSJtb2RhbC1jb250ZW50Ij4gICAgICANCiAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtaGVhZGVyIj4gICAgICAgIA0KICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJjbG9zZSIgZGF0YS1kaXNtaXNzPSJtb2RhbCIgYXJpYS1sYWJlbD0iQ2xvc2UiPiAgICAgICAgICANCiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0idHJ1ZSI+w5cNCiAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICANCiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgDQogICAgICAgICAgICA8aDQgY2xhc3M9Im1vZGFsLXRpdGxlIj5WeXR2b3JlbmllIHJlZGxpbmU8L2g0PiAgICAgIA0KICAgICAgICA8L2Rpdj4gICAgICANCiAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtYm9keSI+ICAgICAgICANCiAgICAgICAgICAgIDxwPk7DoXpvdiBub3bDqWhvIHJlZGxpbmUNCiAgICAgICAgICAgIDwvcD4gICAgICAgIA0KICAgICAgICAgICAgPGlucHV0IGlkPSJyZGxOYW1lIiB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0iUHJvc8OtbSwgdmxvxb50ZSBuw6F6b3YuIj4gICAgICAgIA0KICAgICAgICA8L2Rpdj4gICAgICANCiAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtZm9vdGVyIj4gICAgICAgIA0KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYnRuUmVkbGluZUNhbmNlbCIgdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IHB1bGwtbGVmdCIgZGF0YS1kaXNtaXNzPSJtb2RhbCI+WnJ1xaFpxaUNCiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgDQogICAgICAgICAgICA8YnV0dG9uIGlkPSJidG5SZWRsaW5lQWNjZXB0IiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXByaW1hcnkiPlBvdHZyZGnFpQ0KICAgICAgICAgICAgPC9idXR0b24+ICAgICAgDQogICAgICAgIDwvZGl2PiAgICANCiAgICA8L2Rpdj4gICAgDQo8L2Rpdj4=", self.location).href;
    loadData(path).then((e) => {
      this.panel = createFragment(e);
      this.set();
    });
  }
  constructor(parent) {
    this.parent = parent;
    this.load();
  }
}
class TextParams {
  clone(src) {
    if (src) {
      for (const [key, value] of Object.entries(src)) {
        this[key] = value;
      }
    }
  }
  setTextJust() {
    let anchor = "";
    let just = TextJustification[this.alignment];
    if (this.alignment) {
      switch (just.charAt(0)) {
        case "C":
          anchor = "text-anchor:middle";
          break;
        case "R":
          anchor = "text-anchor:end";
          break;
      }
    }
    return anchor;
  }
}
class TextStyleManager {
  constructor(rp, styleBarId, buttonKey) {
    this.move = false;
    this.redlinePlatform = rp;
    this.bar = rp.parent.querySelector(`div[id='${styleBarId}']`);
    this.trf = rp.redline.transform;
    if (this.bar) {
      this.header = this.bar.querySelector("div[header]");
      this.bar.style.zIndex = "100";
      this.button = rp.parent.querySelector(`div[id="rdlToolbar"] button[f="${buttonKey}"]`);
      this.selElems = this.bar.querySelectorAll("select[key]");
      this.inputs = this.bar.querySelectorAll("input[type='number'][key]");
      this.chBoxes = this.bar.querySelectorAll("input[type='checkbox'][key]");
      this.fontButtons = this.bar.querySelectorAll("button[key^='font_']");
      this.picker = this.bar.querySelector("input[type='color'][key]");
      this.textInput = this.bar.querySelector("textarea[f='input']");
      this.onSelected = this.bar.querySelector("button[key='applyOnSelected']");
      this.textEditArea = this.bar.querySelector("div[id='switch-text-edit']");
      this.textEditApply = this.bar.querySelector("div[id='apply-sel-changes']");
      this.btDraw = this.header.querySelector("button[key='draw-text']");
      this.setPreview();
      this.prepareFontSize();
      this.events();
    } else {
      console.log(`Missing bar ${styleBarId}`);
    }
  }
  getTextParams() {
    const getFromSelection = (q) => {
      const e2 = this.bar.querySelector(`select[key='${q}']`);
      return e2.options[e2.selectedIndex].value;
    };
    const getFromButton = (key) => {
      return this.bar.querySelector(`div[footer] button[key='${key}']`).classList.contains("selected");
    };
    let tp = new TextParams();
    tp.color = this.picker.value;
    tp.font = getFromSelection("textFont");
    const just = getFromSelection("textJust");
    tp.alignment = TextJustification[just];
    tp.bold = getFromButton("font_bold");
    tp.underline = getFromButton("font_underline");
    tp.italic = getFromButton("font_italic");
    let e = this.bar.querySelector(`input[key='fontSize']`);
    tp.size = parseFloat(e.getAttribute("title"));
    e = this.bar.querySelector(`input[key='lineGap']`);
    tp.gap = parseFloat(e.getAttribute("title"));
    tp.lines = this.textInput.value.split("\n");
    e = this.bar.querySelector(`input[key='textRotation']`);
    tp.angle = parseFloat(e.value);
    return tp;
  }
  refreshActive() {
    let r = svgArea.redlinesManagement.redline;
    if (r && r.curVisual && r.curVisual.type === TypeConstant.redlinetext) {
      const rtx = r.curVisual;
      rtx.drawFromDialog();
    } else {
      const rtxEdited = r.rdl.visuals.find((f) => f.isEdited === true && f.type === TypeConstant.redlinetext);
      if (rtxEdited) {
        rtxEdited.drawFromDialog();
        SelBox.destroy(rtxEdited);
        SelBox.create(rtxEdited);
      }
    }
  }
  setPreview(refreshActive = true) {
    const setJust = (just) => {
      let j = ["right", "center"];
      j.forEach((q2) => {
        this.textInput.classList.remove("text-" + q2);
      });
      let q = just.charAt(0);
      switch (q) {
        case "C":
          this.textInput.classList.add("text-center");
          break;
        case "R":
          this.textInput.classList.add("text-right");
          break;
      }
    };
    const setFontStyleData = (tp) => {
      let stl;
      const bc = this.redlinePlatform.svgArea.background;
      stl = `font-family:${tp.font};color:${tp.color};background-color:${bc === backColor.black ? "#000" : "#fff"};`;
      if (tp.bold) {
        stl += ";font-weight:bold";
      }
      if (tp.underline) {
        stl += ";text-decoration:underline";
      }
      if (tp.italic) {
        stl += ";font-style:italic";
      }
      this.textInput.setAttribute("style", stl);
    };
    this.updateColor();
    this.tp = this.getTextParams();
    setJust(TextJustification[this.tp.alignment]);
    setFontStyleData(this.tp);
    if (refreshActive) {
      this.refreshActive();
    }
  }
  updateColor() {
    let col = updateColor(this.picker.value, this.redlinePlatform.svgArea.background);
    if (col === "#000") {
      col = "#000000";
    } else if (col === "#fff") {
      col = "#ffffff";
    }
    this.picker.parentElement.style.backgroundColor = col;
    this.picker.value = col;
  }
  prepareFontSize() {
    let val = {};
    let qq = ["fontSize", "lineGap"];
    qq.forEach((q) => {
      const e2 = this.bar.querySelector(`input[key='${q}']`);
      const x = parseFloat(e2.value);
      val[q] = Transform.scale2Real(x, this.trf.scl, 6);
      e2.setAttribute("title", val[q]);
      e2.value = val[q].toFixed(3);
      if (q === "lineGap")
        e2.setAttribute("step", val[q]);
    });
    const e = this.bar.querySelector(`input[key='lineGap']`);
    e.setAttribute("step", val.fontSize / 10 + "");
    this.tp.size = val.fontSize;
    this.tp.gap = val.lineGap;
  }
  modifiVisual(keyValue, c) {
  }
  modifiVisuals(keyValue) {
    console.log("modifiVisuals() textStyleManager");
  }
  showHide(pos) {
    const hide2 = BarStyleManager.ShowHide(this, pos);
    const r = this.redlinePlatform.redline;
    this.pos = new Point(parseInt(this.bar.style.left, 10), parseInt(this.bar.style.top, 10));
    this.move = false;
    if (hide2) {
      r.curMethod = RedlineMethod.select;
      r.curType = RedlineTyp.none;
      this.redlinePlatform.setButtons("select", void 0);
    } else {
      r.curMethod = RedlineMethod.edit;
      r.curType = RedlineTyp.redlinetext;
    }
  }
  getDialogText(pos) {
    alert(pos.toString());
  }
  events() {
    let pickerMethod = (e) => {
      let key = e.getAttribute("key");
      let value = updateColor(e.value, this.redlinePlatform.svgArea.background);
      this.updateColor();
      if (key !== "fill") {
        this.setPreview();
      }
      this.modifiVisuals({ key, value });
    };
    if (this.picker) {
      this.picker.addEventListener("input", (e) => {
        pickerMethod(e.target);
        this.refreshActive();
      });
      this.picker.addEventListener("change", (e) => {
        pickerMethod(e.target);
        this.refreshActive();
      });
    }
    this.selElems.forEach((e) => {
      e.addEventListener("change", () => {
        this.setPreview();
      });
    });
    this.inputs.forEach((e) => {
      e.addEventListener("change", (e2) => {
        let el = e2.target;
        let key = el.getAttribute("key");
        let n = parseFloat(el.value);
        if (isNaN(n)) {
          el.value = "0";
        } else {
          if (key === "textRotation") {
            n = n % 360;
            el.value = n.toFixed(0);
          }
          if (n < 0) {
            el.value = "0";
            n = 0;
          }
        }
        el.setAttribute("title", n);
        this.refreshActive();
      });
    });
    this.fontButtons.forEach((e) => {
      e.addEventListener("click", (e2) => {
        const btn = e2.target;
        const s = "selected";
        btn.classList.contains(s) ? btn.classList.remove(s) : btn.classList.add(s);
        this.setPreview();
      });
    });
    this.textEditApply.querySelectorAll("div[footer] button[key]").forEach((button) => {
      button.addEventListener("click", (e) => {
        let bt = e.target;
        switch (bt.getAttribute("key")) {
          case "apply":
            break;
          case "clear":
            let checks = this.textEditApply.querySelectorAll("input[type='checkbox']:checked");
            checks.forEach((e2) => {
              e2.checked = false;
            });
            break;
          case "cancel":
            this.textEditArea.style.display = "";
            this.textEditApply.style.display = "none";
            break;
        }
      });
    });
    this.onSelected.addEventListener("click", () => {
      this.textEditArea.style.display = "none";
      this.textEditApply.style.display = "";
    });
    this.textInput.addEventListener("input", () => {
      this.redlinePlatform.redline.eventFtromTextInput = true;
      this.refreshActive();
    });
    this.header.addEventListener("pointerdown", () => {
      this.move = true;
    });
    this.header.addEventListener("pointerup", () => {
      this.move = false;
    });
    this.header.addEventListener("pointerleave", () => {
      this.move = false;
    });
    this.header.addEventListener("pointercancel", () => {
      this.move = false;
    });
    this.btDraw.addEventListener("click", () => {
      const key = "text";
      const rp = this.redlinePlatform;
      rp.redline.finalize();
      rp.setButtons(key, void 0);
      rp.redline.curMethod = RedlineMethod.edit;
      rp.redline.curType = RedlineTyp.redlinetext;
      rp.panZoom.setCursor(key);
    });
    this.redlinePlatform.svgArea.container.addEventListener("pointermove", (ev) => {
      if (this.move) {
        let p2 = Point.ExactPoint(new Point(ev.movementX, ev.movementY), 0);
        this.pos.x += p2.x;
        this.pos.y += p2.y;
        this.bar.style.left = this.pos.x.toFixed(0) + "px";
        this.bar.style.top = this.pos.y.toFixed(0) + "px";
      }
    });
  }
  setByParams(tp) {
    let tx = null;
    tp.lines.forEach((t) => {
      if (tx) {
        tx += "\n" + t;
      } else {
        tx = t;
      }
    });
    this.textInput.value = tx;
    this.picker.value = tp.color;
    const inputs = Array.from(this.inputs);
    const fSize = inputs.find((f) => f.getAttribute("key") === "fontSize");
    fSize.value = tp.size + "";
    fSize.setAttribute("title", fSize.value);
    const lGap = inputs.find((f) => f.getAttribute("key") === "lineGap");
    lGap.value = tp.gap + "";
    lGap.setAttribute("step", (tp.size / 10).toFixed(6));
    const rt = inputs.find((f) => f.getAttribute("key") === "textRotation");
    rt.value = tp.angle + "";
    const select = Array.from(this.selElems);
    const fnt = select.find((f) => f.getAttribute("key") === "textFont");
    fnt.value = tp.font;
    const alin = select.find((f) => f.getAttribute("key") === "textJust");
    alin.value = TextJustification[tp.alignment];
    Array.from(this.fontButtons);
    this.setPreview(false);
  }
}
class RedlinePlatform {
  constructor(svgArea2, redline2) {
    this.allBars = [];
    this.redline = redline2;
    this.svgArea = svgArea2;
    this.parent = svgArea2.drawing;
    this.panZoom = svgArea2.panZoom;
    this.load();
  }
  allignAcceptButton() {
    const btSelect = this.panel.querySelector("button[f='select']");
    if (btSelect) {
      const click = GetScreenCordinates(btSelect);
      const offsetLeft = click.x + btSelect.offsetWidth;
      this.acceptButton.style.left = offsetLeft + "px";
      this.acceptButton.style.top = "5px";
    }
  }
  hide() {
    this.panel.style.display = "none";
  }
  show() {
    this.panel.style.display = "";
    this.allignAcceptButton();
  }
  setButtons(key, f) {
    if (key.startsWith("snap")) {
      return;
    }
    const active = "rdl-active-method";
    const clearButtons = () => {
      this.btns.forEach((e) => {
        e.classList.remove(active);
        if (e.hasAttribute("expandable")) {
          e.style.width = "100%";
        }
      });
    };
    if (key === "remove")
      ;
    else if (key === "move-top")
      ;
    else if (key === "stroke-picker" || key === "fill-picker")
      ;
    else {
      clearButtons();
      if (f) {
        f.classList.add(active);
        if (f.hasAttribute("expandable")) {
          f.style.width = "120%";
        }
      }
      const hideTextDialog = () => {
        const q = ["text", "select", "modify"];
        return !q.includes(key);
      };
      if (hideTextDialog()) {
        BarStyleManager.Hide(this.redline.textManager);
      }
    }
  }
  events() {
    this.btns = this.panel.querySelectorAll("button[f]");
    const pos = (click) => {
      return new Point(click.clientX, click.clientY);
    };
    const animeButton = (bc, col, f) => {
      f.style.backgroundColor = col;
      setTimeout(() => {
        f.style.backgroundColor = bc;
      }, 400);
    };
    this.btns.forEach((e) => {
      e.addEventListener("click", (click) => {
        const f = click.target;
        if (f.hasAttribute("f")) {
          const bc = f.style.backgroundColor;
          const key = f.getAttribute("f");
          this.panZoom.setCursor(key);
          this.setButtons(key, f);
          switch (key) {
            case "select":
              this.redline.finalize();
              this.redline.curMethod = RedlineMethod.select;
              this.redline.curType = RedlineTyp.none;
              break;
            case "modify":
              this.redline.curMethod = RedlineMethod.edit;
              this.redline.clearEditedVisual();
              this.redline.editVisual();
              break;
            case "remove":
              animeButton(bc, "#ff3300", f);
              this.redline.removeSelected();
              break;
            case "lineString":
              this.redline.finalize();
              this.redline.curMethod = RedlineMethod.edit;
              this.redline.curType = RedlineTyp.line;
              break;
            case "shape":
              this.redline.finalize();
              this.redline.curMethod = RedlineMethod.edit;
              this.redline.curType = RedlineTyp.shp;
              break;
            case "circle":
              this.redline.finalize();
              this.redline.curMethod = RedlineMethod.edit;
              this.redline.curType = RedlineTyp.circle;
              break;
            case "text":
              this.redline.finalize();
              this.redline.curMethod = RedlineMethod.edit;
              this.redline.textManager.showHide(pos(click));
              break;
            case "stroke-picker":
              this.strokeManager.showHide(pos(click));
              break;
            case "fill-picker":
              this.fillManager.showHide(pos(click));
              break;
            case "copy":
              break;
            case "move-top":
              animeButton(bc, "#198754", f);
              this.redline.moveSelected2Top();
              break;
            case "snap":
              this.redline.snap = true;
              animeButton(bc, "#5bc0de", f);
              e.setAttribute("f", "snap-active");
              break;
            case "snap-active":
              f.style.backgroundColor = "#5cb85c";
              setTimeout(() => {
                f.style.backgroundColor = bc;
              }, 400);
              e.setAttribute("f", "snap");
              this.redline.snap = false;
              break;
          }
        }
      });
    });
    this.strokeManager = new BarStyleManager(this, "rdl-stroke-manager", "stroke-picker");
    this.fillManager = new BarStyleManager(this, "rdl-fill-manager", "fill-picker");
    this.snapManager = new BarStyleManager(this, "rdl-snap-manager", "snap");
    this.redline.textManager = new TextStyleManager(this, "rdl-textPickerBox", "text");
    this.allBars.push(this.strokeManager);
    this.allBars.push(this.fillManager);
    this.allBars.push(this.snapManager);
    this.allBars.push(this.redline.textManager);
    this.acceptButton = this.parent.querySelector("div[id='redline-accept-button']");
    this.acceptButton.addEventListener("click", () => {
      alert("ahoj");
    });
  }
  updateTheme(bc, btns) {
    svgArea.background = bc;
    switch (bc) {
      case backColor.black:
        svgArea.drawing.style.background = "#000";
        break;
      case backColor.white:
        svgArea.drawing.style.background = "#fff";
        break;
    }
    const h = btns.length;
    for (let i = 0; i < h; i++) {
      let btn = btns[i];
      let btn1 = createFragment(btn.outerHTML);
      btn1.outerHTML = btn.outerHTML;
      btn.parentNode.insertBefore(btn1, btn);
      btn.remove();
      tippy(btn1, {
        content: btn1.getAttribute("tip"),
        placement: "right-start",
        theme: bc === backColor.black ? "light" : "dark"
      });
    }
    this.events();
  }
  set() {
    const btns = this.panel.querySelectorAll("*[tip]");
    btns.forEach((e) => {
      tippy(e, {
        content: e.getAttribute("tip"),
        placement: "right-start",
        theme: svgArea.background === backColor.black ? "light" : "dark"
      });
    });
    this.events();
    this.show();
  }
  load() {
    const path = new URL("/assets/redlineBarPanel.7f0ec731.html", self.location).href;
    loadData(path).then((data) => {
      const svg = this.parent.querySelector("svg.canvas");
      const node = createFragment(data);
      this.parent.insertBefore(node, svg);
      this.panel = this.parent.querySelector("div[id='rdlToolbar'");
      this.panel.setAttribute("block-pointer-events", "");
      this.set();
    });
  }
}
class RedlinesManagement {
  newRedline(name) {
    const r = { name, id: createGuid(), selected: true, visible: true, active: true, visuals: [] };
    this.data.push(r);
    this.setTable(this.data);
  }
  getId(e) {
    while (e.nodeName.toLocaleLowerCase() !== "tr") {
      e = e.parentElement;
    }
    return e.id;
  }
  set() {
    this.parent.innerHTML = "";
    this.parent.appendChild(this.panel);
    this.setTable(this.data);
  }
  hiliteName(id) {
    const nl = this.panel.querySelectorAll("tr[id][selected]");
    nl.forEach((e) => {
      e.removeAttribute("selected");
    });
    const tr = this.panel.querySelector(`tr[id='${id}']`);
    tr.setAttribute("selected", "");
  }
  moveRowPosition(row, rowPins) {
    const id = row.getAttribute("id");
    const q = "selected";
    let a = this.data.findIndex((f) => f.selected === true && f.id !== id);
    if (a > -1) {
      let b = this.data.findIndex((f) => f.id === id);
      const itm = this.data.splice(a, 1)[0];
      this.data.splice(b, 0, itm);
      this.setTable(this.data);
      return;
    }
    let r = this.data.find((f) => f.id === id);
    r.selected = false;
    if (row.classList.contains(q)) {
      row.classList.remove(q);
    } else {
      rowPins.forEach((e) => {
        e.parentElement.classList.remove(q);
      });
      row.classList.add(q);
      r.selected = true;
    }
  }
  active(radios) {
    const clear = (src) => {
      const selected = Array.from(radios).find((f) => f.checked === true && f !== src);
      if (selected) {
        selected.checked = false;
      }
      const active = this.data.find((f) => f.active === true);
      if (active) {
        active.active = false;
      }
    };
    const testActive = (radio) => {
      const rdl = this.data.find((f) => f.active === true);
      if (!rdl) {
        return false;
      }
      if (!this.confirmationDialog) {
        this.confirmationDialog = new ConfirmationDialog(this.svgArea.drawing, rdl.name);
      } else {
        this.confirmationDialog.show(rdl.name);
      }
      return true;
    };
    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (testActive()) {
          radio.checked = false;
          return;
        }
        const r = e.target;
        const id = this.getId(r);
        this.hiliteName(id);
        clear(r);
        const i = this.data.findIndex((f) => f.id === id);
        const rdl = this.data[i];
        this.unmodifiedActive = CloneJson(rdl.visuals);
        rdl.active = true;
        this.redline = new Redline(rdl, this.svgArea.svgManager.transform, this.svgArea.panZoom);
        if (this.redlinePlatform) {
          this.redlinePlatform.show();
        } else {
          this.redlinePlatform = new RedlinePlatform(this.svgArea, this.redline);
        }
        if (rdl.visible === false) {
          rdl.visible = true;
          const chVisible = this.panel.querySelector(`tbody tr[id="${id}"] input[f="visible"]`);
          chVisible.checked = true;
        }
      });
    });
  }
  visibility(chbs) {
    chbs.forEach((chb) => {
      chb.addEventListener("change", (e) => {
        const id = this.getId(e.target);
        const rdl = this.data.find((f) => f.id === id);
        chb.checked = rdl.active ? rdl.active : chb.checked;
        rdl.visible = chb.checked;
      });
    });
  }
  events() {
    const rowPins = this.panel.querySelectorAll("tbody th[scope='row'] button.rdl-move");
    rowPins.forEach((rowPin) => {
      rowPin.addEventListener("click", (e) => {
        this.moveRowPosition(rowPin.parentElement.parentElement, rowPins);
        e.preventDefault();
        e.stopPropagation();
      });
    });
    this.active(this.panel.querySelectorAll("tbody td input[f='active']"));
    this.visibility(this.panel.querySelectorAll("tbody td input[f='visible']"));
  }
  setTable(data) {
    let content = "";
    data.forEach((e, i) => {
      const tr = `<tr id="${e.id}"  ${e.selected ? "class='selected'" : ""}>
                <th scope="row"><button class="rdl-move"></button></th>
                <th scope="row"><span>${i + 1}.</span></th>
                <td><input type="text" value="${e.name}" f="name"></td>
                <td><input type="radio" f="active" ${e.active ? "checked" : ""}></td>
                <td><input type="checkbox" ${e.visible ? "checked" : ""} f="visible"></td>
                <td>${e.visuals ? e.visuals.length : 0}</td>
                <td f="save" class="bt-ico-small"></td>
                <td f="delete" class="bt-ico-small"></td>
            </tr>`;
      content += tr;
    });
    if (content) {
      this.panel.querySelector("tbody").innerHTML = content;
      this.events();
      const r = this.data.find((f) => f.active === true);
      if (r) {
        this.hiliteName(r.id);
      }
    }
  }
  async save() {
    let banner = this.svgArea.container.querySelector("#block-screen-save");
    const dataOrder = [];
    const doSaving = () => {
      const data = {
        "list": dataOrder
      };
      fetch("http://localhost:3000/order?list", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }).then((response) => response.json()).then((data2) => {
        banner.style.display = "none";
        const s = this.panel.querySelector("tbody tr.selected");
        if (s) {
          s.classList.remove("selected");
        }
      });
    };
    this.data.map((f) => dataOrder.push(f.id));
    if (banner) {
      banner.style.display = "block";
      doSaving();
    } else {
      const path = new URL("data:text/html;base64,PGRpdiBpZD0iYmxvY2stc2NyZWVuLXNhdmUiIGNsYXNzPSJtb2RhbCBmYWRlIHNob3ciIHRhYmluZGV4PSItMSIgcm9sZT0iZGlhbG9nIiBhcmlhLWxhYmVsbGVkYnk9ImJsb2NrLXNjcmVlbi1zYXZlIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IHBhZGRpbmctcmlnaHQ6IDE3cHg7Ij4NCiAgPGRpdiBjbGFzcz0ibW9kYWwtZGlhbG9nIiByb2xlPSJkb2N1bWVudCI+DQogICAgPGRpdiBjbGFzcz0ibW9kYWwtY29udGVudCI+DQogICAgICA8ZGl2IGNsYXNzPSJtb2RhbC1ib2R5Ij4NCiAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCjwvZGl2Pg==", self.location).href;
      await loadData(path).then((data) => {
        banner = createFragment(data);
        this.svgArea.container.appendChild(banner);
      });
      doSaving();
    }
  }
  load() {
    const path = new URL("data:text/html;base64,PGRpdj4NCiAgPHNwYW4gaWQ9InJlZGxpbmUtY3JlYXRlLXNhdmUiPg0KICAgIDxpbnB1dCB0eXBlPSJidXR0b24iIGNsYXNzPSJidC1pY28iIGY9Im5ldyIgdGlwPSJWeXR2b3JlbmllIG5vdmVqIHZyc3R2eSI+DQogICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0LWljbyIgZj0ic2F2ZS1hbGwiIHRpcD0iVWxvxb5lbmllIGNlbGtvdsOpaG8gbmFzdGF2ZW5pYSAocG9yYWRpYSwgdmlkaXRlxL5ub3N0aSkgYWogZWRpdG92YW5laiB2cnN0dnkiPg0KICAgIDxpbnB1dCB0eXBlPSJidXR0b24iIGNsYXNzPSJidC1pY28iIGY9InJlZnJlc2gtZnJvbS1kYiIgdGlwPSJPYm5vdmEgdnJzdGlldiBwb2TEvmEgcG9ka2xhZG92IHpvIHNlcnZlcmEsIHBvem9yIGxva8OhbG5lIHptZW55IHNhIHN0cmF0aWEiPg0KICAgPC9zcGFuPg0KPHRhYmxlIGlkPSJyZWRsaW5lcy10YWJsZSIgY2xhc3M9InRhYmxlIHRhYmxlLXN0cmlwZWQiIHNwZWxsY2hlY2s9ImZhbHNlIj4NCiAgICA8dGhlYWQ+DQogICAgICA8dHI+DQogICAgICAgIDx0aCBzY29wZT0iY29sIiBjbGFzcz0idGgtaWNvIHJkbC1tb3ZlLWljbyI+PC90aD4NCiAgICAgICAgPHRoIHNjb3BlPSJjb2wiPiM8L3RoPg0KICAgICAgICA8dGggc2NvcGU9ImNvbCI+TmFtZTwvdGg+DQogICAgICAgIDx0aCBzY29wZT0iY29sIiBjbGFzcz0idGgtaWNvIHJkbC1lZGl0Ij48L3RoPg0KICAgICAgICA8dGggc2NvcGU9ImNvbCIgY2xhc3M9InRoLWljbyByZGwtdmlzaWJsZSI+PC90aD4NCiAgICAgICAgPHRoIHNjb3BlPSJjb2wiPiYjODcyMTwvdGg+DQogICAgICAgIDx0aD48L3RoPg0KICAgICAgICA8dGg+PC90aD4NCiAgICAgIDwvdHI+DQogICAgPC90aGVhZD4NCiAgICA8dGJvZHk+DQogICAgICA8dHIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+DQogICAgICAgIDx0aCBzY29wZT0icm93Ij48YnV0dG9uIGNsYXNzPSJyZGwtbW92ZSI+PC9idXR0b24+PC90aD4NCiAgICAgICAgPHRoIHNjb3BlPSJyb3ciPjxzcGFuPjE8L3NwYW4+PC90aD4NCiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSJ0ZXh0IiB2YWx1ZT0iS3J1aHkgYSDEjWlhcnkiIGY9Im5hbWUiPjwvdGQ+DQogICAgICAgIDx0ZD48aW5wdXQgdHlwZT0icmFkaW8iIGY9ImFjdGl2ZSI+PC90ZD4NCiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgZj0idmlzaWJsZSIgY2hlY2tlZD0iIj48L3RkPg0KICAgICAgICA8dGQ+MDwvdGQ+DQogICAgICAgIDx0ZCBmPSJzYXZlIiBjbGFzcz0iYnQtaWNvLXNtYWxsIj48L3RkPg0KICAgICAgICA8dGQgZj0iZGVsZXRlIiBjbGFzcz0iYnQtaWNvLXNtYWxsIj48L3RkPg0KICAgICAgPC90cj4NCiAgICA8L3Rib2R5Pg0KPC90YWJsZT4NCjwvZGl2Pg==", self.location).href;
    loadData(path).then((e) => {
      this.panel = createFragment(e);
      this.set();
      const createSave = this.parent.querySelectorAll("[id='redline-create-save'] [f][tip]");
      createSave.forEach((btn) => {
        const f = btn.getAttribute("f");
        tippy(btn, {
          content: btn.getAttribute("tip"),
          placement: "bottom",
          plugins: [followCursor]
        });
        btn.addEventListener("click", (e2) => {
          e2.preventDefault();
          e2.stopPropagation();
          switch (f) {
            case "new":
              if (this.create) {
                this.create.show();
              } else {
                this.create = new CreateRedlineDialog(this.svgArea.drawing);
              }
              break;
            case "save-all":
              this.save();
              break;
          }
        });
      });
    });
  }
  async render() {
    console.log("------ render ------");
  }
  cancel() {
    const i = this.data.findIndex((f) => f.active === true);
    if (i > -1) {
      const rdl = this.data[i];
      rdl.active = false;
      const tr = this.panel.querySelector(`tbody tr[id="${rdl.id}"`);
      const e = tr.querySelector(`input[f="active"]`);
      tr.removeAttribute("selected");
      e.checked = false;
      rdl.visuals = CloneJson(this.unmodifiedActive);
      this.unmodifiedActive = null;
      this.render();
    }
  }
  async saveCurrentRedline() {
    const rdl = this.data.find((f) => f.active === true);
    if (!rdl) {
      return;
    }
    this.cancel();
  }
  constructor(svgArea2, data) {
    const test = svgArea2.drawing.querySelector("div#rdlToolbar");
    if (test) {
      test.style.display = "none";
    }
    this.svgArea = svgArea2;
    this.parent = svgArea2.layout;
    this.data = data;
    this.load();
  }
}
class Toolbar {
  events() {
    const btns = this.panel.querySelectorAll("button[tip]");
    btns.forEach((e) => {
      e.addEventListener("click", (btn) => {
        var _a;
        const f = btn.target;
        if (f.hasAttribute("f")) {
          const value = f.getAttribute("f");
          if (svgArea.svgManager) {
            switch (value) {
              case "background-black":
                f.setAttribute("f", "background-white");
                this.updateTheme(backColor.white, btns);
                break;
              case "background-white":
                f.setAttribute("f", "background-black");
                this.updateTheme(backColor.black, btns);
                break;
              case "redline":
                getData().then((data) => {
                  svgArea.redlinesManagement = new RedlinesManagement(svgArea, data);
                });
                break;
            }
          }
          switch (value) {
            case "fit":
              let mg = svgArea.svgManager;
              if (mg) {
                let sz = getSize(svgArea.drawing);
                const size = { width: sz.x, height: sz.y, origin: new Point() };
                let rg = mg.getRange(mg.visuals);
                let transform;
                mg.range = rg;
                transform = Transform.getDefaultTP(size, rg);
                const r = (_a = svgArea == null ? void 0 : svgArea.redlinesManagement) == null ? void 0 : _a.redline;
                if (r) {
                  let rgs = [];
                  if (r.curVisual) {
                    r.finalize();
                  }
                  r.rdl.visuals.forEach((e2) => {
                    rgs.push(e2.getRange());
                  });
                  if (rgs.length > 0) {
                    rgs.push(rg);
                    rg = RangeManager.rangeByRanges(rgs);
                    transform = Transform.getDefaultTP(size, rg);
                  }
                }
                mg.transform = transform;
                svgArea.panZoom.run();
              } else {
                initSvgArea(document.getElementById("micro-drawing"));
              }
              break;
          }
        }
      });
    });
  }
  updateTheme(bc, btns) {
    this.svgArea.background = bc;
    switch (bc) {
      case backColor.black:
        this.svgArea.drawing.style.background = "#000";
        break;
      case backColor.white:
        this.svgArea.drawing.style.background = "#fff";
        break;
    }
    const h = btns.length;
    for (let i = 0; i < h; i++) {
      let btn = btns[i];
      let btn1 = btn.cloneNode(true);
      btn.parentNode.insertBefore(btn1, btn);
      btn.remove();
      tippy(btn1, {
        content: btn1.getAttribute("tip"),
        placement: "right-start",
        theme: bc === backColor.black ? "light" : "dark"
      });
    }
    this.events();
    this.svgArea.panZoom.run();
  }
  set() {
    this.parent.appendChild(this.panel);
    const btns = document.querySelectorAll("#toolbarPanel button[tip]");
    btns.forEach((e) => {
      tippy(e, {
        content: e.getAttribute("tip"),
        placement: "right-start",
        plugins: [followCursor],
        theme: this.svgArea.background === backColor.black ? "light" : "dark"
      });
    });
    this.events();
  }
  load() {
    const path = new URL("data:text/html;base64,PGRpdiBpZD0idG9vbGJhclBhbmVsIj4NCiAgPGJ1dHRvbiBmPSJmaXQiIHRpcD0iVnljZW50cm92YcWlIiBjbGFzcz0iYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxpZ2h0IGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAiPjwvYnV0dG9uPg0KICA8YnV0dG9uIGY9ImN1dCIgdGlwPSJQcmlibMOtxb5lbmllIHBvZMS+YSB2w71iZXJ1Ig0KICAgIGNsYXNzPSJidG4gYnRuLXNlY29uZGFyeSBidG4tbGlnaHQgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICI+PC9idXR0b24+DQogIDxidXR0b24gaWQ9ImJhY2tncm91bmQiIGY9ImJhY2tncm91bmQtYmxhY2siIHRpcD0iRmFyYmEgcG96YWRpYSINCiAgICBjbGFzcz0iYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxpZ2h0IGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAiPjwvYnV0dG9uPg0KICA8YnV0dG9uIGY9InJlZnJlc2giIHRpcD0iT2Jub3ZpxaUiIGNsYXNzPSJidG4gYnRuLXNlY29uZGFyeSBidG4tbGlnaHQgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICI+PC9idXR0b24+DQogIDxidXR0b24gZj0iZXhwb3J0IiB0aXA9IkV4cG9ydCBkbyBzw7pib3J1IiBjbGFzcz0iYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxpZ2h0IGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAiPjwvYnV0dG9uPg0KICA8YnV0dG9uIGY9ImNvbG91cmVkIiB0aXA9IsSMaWVybm8tYmllbG8vZmFyZWJuZSIgY2xhc3M9ImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1saWdodCBidG4tb3V0bGluZS1zZWNvbmRhcnkgIj48L2J1dHRvbj4NCiAgPGJ1dHRvbiBmPSJsYXllcnMiIHRpcD0iWm96bmFtIHZyc3R2aWV2IiBjbGFzcz0iYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxpZ2h0IGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAiPjwvYnV0dG9uPg0KICA8YnV0dG9uIGY9InJlZGxpbmUiIHRpcD0iUmVkbGluZSIgY2xhc3M9ImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1saWdodCBidG4tb3V0bGluZS1zZWNvbmRhcnkgIj48L2J1dHRvbj4NCiAgPGJ1dHRvbiBpZD0iZm9jdXNlciIgc3R5bGU9ImhlaWdodDogMDt3aWR0aDogMDttYXJnaW46IDA7cGFkZGluZzogMDtvcGFjaXR5OiAwOyI+PC9idXR0b24+DQo8L2Rpdj4=", self.location).href;
    loadData(path).then((e) => {
      createFragment(e);
      this.panel = createFragment(e);
      this.panel.setAttribute("block-pointer-events", "");
      this.set();
    });
  }
  constructor(parent, svgArea2) {
    this.svgArea = svgArea2;
    this.parent = parent;
    this.load();
  }
}
const drawingAreaName = "svgArea";
const drawingLayoutName = "svg-layout";
const drawingleftSliderName = "svg-left-slider";
class SvgArea {
  manageSlider() {
    let s = sliderEvents.stop;
    let startOffset;
    this.slider = document.createElement("div");
    this.slider.setAttribute("id", drawingleftSliderName);
    this.container.appendChild(this.slider);
    this.slider.addEventListener("pointerdown", (e) => {
      startOffset = this.slider.offsetLeft;
      s = sliderEvents.change;
    });
    this.container.addEventListener("mousemove", (e) => {
      if (s === sliderEvents.change) {
        let w = e.clientX;
        if (w > 10) {
          this.container.style.gridTemplateColumns = `${w}px 10px 1fr`;
        }
        if (w > this.container.offsetWidth - 10) {
          s = sliderEvents.stop;
          this.container.style.gridTemplateColumns = `1fr 10px 5fr`;
        }
        this.redlinesManagement.redlinePlatform.allignAcceptButton();
      }
    });
    const refreshView = () => {
      if (this.svgManager && this.panZoom && startOffset) {
        const sz = getSize(this.container);
        this.svgManager.size = { width: sz.x, height: sz.y, origin: new Point() };
        const ofs = this.slider.offsetLeft;
        const delta = ofs - startOffset;
        if (delta < 0) {
          this.panZoom.run();
        }
        startOffset = void 0;
      }
    };
    this.container.addEventListener("mouseup", (e) => {
      s = sliderEvents.stop;
      refreshView();
    });
    this.container.addEventListener("mouseleave", (e) => {
      s = sliderEvents.stop;
      refreshView();
    });
  }
  manageLayout() {
    this.layout = document.createElement("div");
    this.layout.setAttribute("id", drawingLayoutName);
    this.container.appendChild(this.layout);
  }
  async createSvgCanvas() {
    const path = new URL("data:text/html;base64,PHN2ZyBjbGFzcz0iY2FudmFzIGRpc2FibGUtc2VsZWN0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4NCiAgICA8ZyBpZD0iZ3JmIiBmaWxsPSJub25lIj4NCiAgICAgICAgPHBhdGggZD0iTTAgMCA2MDAgNTAwIiBzdHlsZT0ic3Ryb2tlOiNmMDA7c3Ryb2tlLXdpZHRoOjMiPjwvcGF0aD4NCiAgICAgICAgPGNpcmNsZSBjeD0iMzc1LjEzIiBjeT0iMzU3LjI0IiByPSIxOTguMTUiIHN0eWxlPSJzdHJva2U6IzBmMDtzdHJva2UtZGFzaGFycmF5OjEwLDMsMywzO2ZpbGw6YXF1YSI+PC9jaXJjbGU+DQogICAgPC9nPg0KICAgIDxkZWZzIGlkPSJncmYtZGVmaW5pdGlvbnMiPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg==", self.location).href;
    await loadData(path).then((e) => {
      const d = createFragment(e);
      this.drawing.appendChild(d);
      this.panZoom = new PanZoom(d, this);
    });
  }
  async manageDrawingArea() {
    this.drawing = document.createElement("div");
    this.drawing.setAttribute("id", drawingAreaName);
    switch (this.background) {
      case backColor.black:
        this.drawing.style.backgroundColor = "#000";
        break;
      case backColor.white:
        this.drawing.style.backgroundColor = "#fff";
        break;
    }
    this.container.appendChild(this.drawing);
    this.toolbar = new Toolbar(this.drawing, this);
    await this.createSvgCanvas();
  }
  makeSceleton() {
    this.container.innerHTML = "";
    this.manageLayout();
    this.manageSlider();
    this.manageDrawingArea();
  }
  constructor(container, bc) {
    this.background = bc;
    this.container = container;
    this.container.style.gridTemplateColumns = `2fr 10px 5fr`;
    this.makeSceleton();
  }
}
let svgArea;
const initSvgArea = (root) => {
  getOS();
  svgArea = new SvgArea(root, backColor.black);
};
//# sourceMappingURL=index.e560bc38.js.map
