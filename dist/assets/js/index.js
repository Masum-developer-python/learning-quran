(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = s(c);
    fetch(c.href, f);
  }
})();
var Cs = { exports: {} },
  Vr = {},
  Rs = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qc;
function ph() {
  if (qc) return re;
  qc = 1;
  var o = Symbol.for("react.element"),
    l = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function R(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (_ && E[_]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    T = {};
  function P(E, D, ne) {
    (this.props = E),
      (this.context = D),
      (this.refs = T),
      (this.updater = ne || I);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (E, D) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, D, "setState");
    }),
    (P.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function A() {}
  A.prototype = P.prototype;
  function M(E, D, ne) {
    (this.props = E),
      (this.context = D),
      (this.refs = T),
      (this.updater = ne || I);
  }
  var b = (M.prototype = new A());
  (b.constructor = M), k(b, P.prototype), (b.isPureReactComponent = !0);
  var G = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    le = { current: null },
    ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(E, D, ne) {
    var oe,
      se = {},
      ue = null,
      pe = null;
    if (D != null)
      for (oe in (D.ref !== void 0 && (pe = D.ref),
      D.key !== void 0 && (ue = "" + D.key),
      D))
        J.call(D, oe) && !ce.hasOwnProperty(oe) && (se[oe] = D[oe]);
    var fe = arguments.length - 2;
    if (fe === 1) se.children = ne;
    else if (1 < fe) {
      for (var xe = Array(fe), et = 0; et < fe; et++)
        xe[et] = arguments[et + 2];
      se.children = xe;
    }
    if (E && E.defaultProps)
      for (oe in ((fe = E.defaultProps), fe))
        se[oe] === void 0 && (se[oe] = fe[oe]);
    return {
      $$typeof: o,
      type: E,
      key: ue,
      ref: pe,
      props: se,
      _owner: le.current,
    };
  }
  function ye(E, D) {
    return {
      $$typeof: o,
      type: E.type,
      key: D,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    };
  }
  function Oe(E) {
    return typeof E == "object" && E !== null && E.$$typeof === o;
  }
  function kt(E) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (ne) {
        return D[ne];
      })
    );
  }
  var Et = /\/+/g;
  function Ze(E, D) {
    return typeof E == "object" && E !== null && E.key != null
      ? kt("" + E.key)
      : D.toString(36);
  }
  function pt(E, D, ne, oe, se) {
    var ue = typeof E;
    (ue === "undefined" || ue === "boolean") && (E = null);
    var pe = !1;
    if (E === null) pe = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case o:
            case l:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = E),
        (se = se(pe)),
        (E = oe === "" ? "." + Ze(pe, 0) : oe),
        G(se)
          ? ((ne = ""),
            E != null && (ne = E.replace(Et, "$&/") + "/"),
            pt(se, D, ne, "", function (et) {
              return et;
            }))
          : se != null &&
            (Oe(se) &&
              (se = ye(
                se,
                ne +
                  (!se.key || (pe && pe.key === se.key)
                    ? ""
                    : ("" + se.key).replace(Et, "$&/") + "/") +
                  E
              )),
            D.push(se)),
        1
      );
    if (((pe = 0), (oe = oe === "" ? "." : oe + ":"), G(E)))
      for (var fe = 0; fe < E.length; fe++) {
        ue = E[fe];
        var xe = oe + Ze(ue, fe);
        pe += pt(ue, D, ne, xe, se);
      }
    else if (((xe = R(E)), typeof xe == "function"))
      for (E = xe.call(E), fe = 0; !(ue = E.next()).done; )
        (ue = ue.value),
          (xe = oe + Ze(ue, fe++)),
          (pe += pt(ue, D, ne, xe, se));
    else if (ue === "object")
      throw (
        ((D = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return pe;
  }
  function Ct(E, D, ne) {
    if (E == null) return E;
    var oe = [],
      se = 0;
    return (
      pt(E, oe, "", "", function (ue) {
        return D.call(ne, ue, se++);
      }),
      oe
    );
  }
  function Qe(E) {
    if (E._status === -1) {
      var D = E._result;
      (D = D()),
        D.then(
          function (ne) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = ne));
          },
          function (ne) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = ne));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = D));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Re = { current: null },
    B = { transition: null },
    Z = {
      ReactCurrentDispatcher: Re,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: le,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (re.Children = {
      map: Ct,
      forEach: function (E, D, ne) {
        Ct(
          E,
          function () {
            D.apply(this, arguments);
          },
          ne
        );
      },
      count: function (E) {
        var D = 0;
        return (
          Ct(E, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (E) {
        return (
          Ct(E, function (D) {
            return D;
          }) || []
        );
      },
      only: function (E) {
        if (!Oe(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (re.Component = P),
    (re.Fragment = s),
    (re.Profiler = c),
    (re.PureComponent = M),
    (re.StrictMode = a),
    (re.Suspense = y),
    (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (re.act = V),
    (re.cloneElement = function (E, D, ne) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            "."
        );
      var oe = k({}, E.props),
        se = E.key,
        ue = E.ref,
        pe = E._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ue = D.ref), (pe = le.current)),
          D.key !== void 0 && (se = "" + D.key),
          E.type && E.type.defaultProps)
        )
          var fe = E.type.defaultProps;
        for (xe in D)
          J.call(D, xe) &&
            !ce.hasOwnProperty(xe) &&
            (oe[xe] = D[xe] === void 0 && fe !== void 0 ? fe[xe] : D[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) oe.children = ne;
      else if (1 < xe) {
        fe = Array(xe);
        for (var et = 0; et < xe; et++) fe[et] = arguments[et + 2];
        oe.children = fe;
      }
      return {
        $$typeof: o,
        type: E.type,
        key: se,
        ref: ue,
        props: oe,
        _owner: pe,
      };
    }),
    (re.createContext = function (E) {
      return (
        (E = {
          $$typeof: p,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: f, _context: E }),
        (E.Consumer = E)
      );
    }),
    (re.createElement = ge),
    (re.createFactory = function (E) {
      var D = ge.bind(null, E);
      return (D.type = E), D;
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (re.isValidElement = Oe),
    (re.lazy = function (E) {
      return { $$typeof: w, _payload: { _status: -1, _result: E }, _init: Qe };
    }),
    (re.memo = function (E, D) {
      return { $$typeof: g, type: E, compare: D === void 0 ? null : D };
    }),
    (re.startTransition = function (E) {
      var D = B.transition;
      B.transition = {};
      try {
        E();
      } finally {
        B.transition = D;
      }
    }),
    (re.unstable_act = V),
    (re.useCallback = function (E, D) {
      return Re.current.useCallback(E, D);
    }),
    (re.useContext = function (E) {
      return Re.current.useContext(E);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (E) {
      return Re.current.useDeferredValue(E);
    }),
    (re.useEffect = function (E, D) {
      return Re.current.useEffect(E, D);
    }),
    (re.useId = function () {
      return Re.current.useId();
    }),
    (re.useImperativeHandle = function (E, D, ne) {
      return Re.current.useImperativeHandle(E, D, ne);
    }),
    (re.useInsertionEffect = function (E, D) {
      return Re.current.useInsertionEffect(E, D);
    }),
    (re.useLayoutEffect = function (E, D) {
      return Re.current.useLayoutEffect(E, D);
    }),
    (re.useMemo = function (E, D) {
      return Re.current.useMemo(E, D);
    }),
    (re.useReducer = function (E, D, ne) {
      return Re.current.useReducer(E, D, ne);
    }),
    (re.useRef = function (E) {
      return Re.current.useRef(E);
    }),
    (re.useState = function (E) {
      return Re.current.useState(E);
    }),
    (re.useSyncExternalStore = function (E, D, ne) {
      return Re.current.useSyncExternalStore(E, D, ne);
    }),
    (re.useTransition = function () {
      return Re.current.useTransition();
    }),
    (re.version = "18.3.1"),
    re
  );
}
var Jc;
function Vs() {
  return Jc || ((Jc = 1), (Rs.exports = ph())), Rs.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc;
function hh() {
  if (Yc) return Vr;
  Yc = 1;
  var o = Vs(),
    l = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, y, g) {
    var w,
      _ = {},
      R = null,
      I = null;
    g !== void 0 && (R = "" + g),
      y.key !== void 0 && (R = "" + y.key),
      y.ref !== void 0 && (I = y.ref);
    for (w in y) a.call(y, w) && !f.hasOwnProperty(w) && (_[w] = y[w]);
    if (h && h.defaultProps)
      for (w in ((y = h.defaultProps), y)) _[w] === void 0 && (_[w] = y[w]);
    return {
      $$typeof: l,
      type: h,
      key: R,
      ref: I,
      props: _,
      _owner: c.current,
    };
  }
  return (Vr.Fragment = s), (Vr.jsx = p), (Vr.jsxs = p), Vr;
}
var Xc;
function mh() {
  return Xc || ((Xc = 1), (Cs.exports = hh())), Cs.exports;
}
var S = mh(),
  L = Vs(),
  dl = {},
  Ns = { exports: {} },
  Xe = {},
  _s = { exports: {} },
  Ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gc;
function gh() {
  return (
    Gc ||
      ((Gc = 1),
      (function (o) {
        function l(B, Z) {
          var V = B.length;
          B.push(Z);
          e: for (; 0 < V; ) {
            var E = (V - 1) >>> 1,
              D = B[E];
            if (0 < c(D, Z)) (B[E] = Z), (B[V] = D), (V = E);
            else break e;
          }
        }
        function s(B) {
          return B.length === 0 ? null : B[0];
        }
        function a(B) {
          if (B.length === 0) return null;
          var Z = B[0],
            V = B.pop();
          if (V !== Z) {
            B[0] = V;
            e: for (var E = 0, D = B.length, ne = D >>> 1; E < ne; ) {
              var oe = 2 * (E + 1) - 1,
                se = B[oe],
                ue = oe + 1,
                pe = B[ue];
              if (0 > c(se, V))
                ue < D && 0 > c(pe, se)
                  ? ((B[E] = pe), (B[ue] = V), (E = ue))
                  : ((B[E] = se), (B[oe] = V), (E = oe));
              else if (ue < D && 0 > c(pe, V))
                (B[E] = pe), (B[ue] = V), (E = ue);
              else break e;
            }
          }
          return Z;
        }
        function c(B, Z) {
          var V = B.sortIndex - Z.sortIndex;
          return V !== 0 ? V : B.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          o.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            h = p.now();
          o.unstable_now = function () {
            return p.now() - h;
          };
        }
        var y = [],
          g = [],
          w = 1,
          _ = null,
          R = 3,
          I = !1,
          k = !1,
          T = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          M = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(B) {
          for (var Z = s(g); Z !== null; ) {
            if (Z.callback === null) a(g);
            else if (Z.startTime <= B)
              a(g), (Z.sortIndex = Z.expirationTime), l(y, Z);
            else break;
            Z = s(g);
          }
        }
        function G(B) {
          if (((T = !1), b(B), !k))
            if (s(y) !== null) (k = !0), Qe(J);
            else {
              var Z = s(g);
              Z !== null && Re(G, Z.startTime - B);
            }
        }
        function J(B, Z) {
          (k = !1), T && ((T = !1), A(ge), (ge = -1)), (I = !0);
          var V = R;
          try {
            for (
              b(Z), _ = s(y);
              _ !== null && (!(_.expirationTime > Z) || (B && !kt()));

            ) {
              var E = _.callback;
              if (typeof E == "function") {
                (_.callback = null), (R = _.priorityLevel);
                var D = E(_.expirationTime <= Z);
                (Z = o.unstable_now()),
                  typeof D == "function"
                    ? (_.callback = D)
                    : _ === s(y) && a(y),
                  b(Z);
              } else a(y);
              _ = s(y);
            }
            if (_ !== null) var ne = !0;
            else {
              var oe = s(g);
              oe !== null && Re(G, oe.startTime - Z), (ne = !1);
            }
            return ne;
          } finally {
            (_ = null), (R = V), (I = !1);
          }
        }
        var le = !1,
          ce = null,
          ge = -1,
          ye = 5,
          Oe = -1;
        function kt() {
          return !(o.unstable_now() - Oe < ye);
        }
        function Et() {
          if (ce !== null) {
            var B = o.unstable_now();
            Oe = B;
            var Z = !0;
            try {
              Z = ce(!0, B);
            } finally {
              Z ? Ze() : ((le = !1), (ce = null));
            }
          } else le = !1;
        }
        var Ze;
        if (typeof M == "function")
          Ze = function () {
            M(Et);
          };
        else if (typeof MessageChannel < "u") {
          var pt = new MessageChannel(),
            Ct = pt.port2;
          (pt.port1.onmessage = Et),
            (Ze = function () {
              Ct.postMessage(null);
            });
        } else
          Ze = function () {
            P(Et, 0);
          };
        function Qe(B) {
          (ce = B), le || ((le = !0), Ze());
        }
        function Re(B, Z) {
          ge = P(function () {
            B(o.unstable_now());
          }, Z);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            k || I || ((k = !0), Qe(J));
          }),
          (o.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ye = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return s(y);
          }),
          (o.unstable_next = function (B) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = R;
            }
            var V = R;
            R = Z;
            try {
              return B();
            } finally {
              R = V;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (B, Z) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var V = R;
            R = B;
            try {
              return Z();
            } finally {
              R = V;
            }
          }),
          (o.unstable_scheduleCallback = function (B, Z, V) {
            var E = o.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? E + V : E))
                : (V = E),
              B)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = V + D),
              (B = {
                id: w++,
                callback: Z,
                priorityLevel: B,
                startTime: V,
                expirationTime: D,
                sortIndex: -1,
              }),
              V > E
                ? ((B.sortIndex = V),
                  l(g, B),
                  s(y) === null &&
                    B === s(g) &&
                    (T ? (A(ge), (ge = -1)) : (T = !0), Re(G, V - E)))
                : ((B.sortIndex = D), l(y, B), k || I || ((k = !0), Qe(J))),
              B
            );
          }),
          (o.unstable_shouldYield = kt),
          (o.unstable_wrapCallback = function (B) {
            var Z = R;
            return function () {
              var V = R;
              R = Z;
              try {
                return B.apply(this, arguments);
              } finally {
                R = V;
              }
            };
          });
      })(Ps)),
    Ps
  );
}
var Zc;
function yh() {
  return Zc || ((Zc = 1), (_s.exports = gh())), _s.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef;
function vh() {
  if (ef) return Xe;
  ef = 1;
  var o = Vs(),
    l = yh();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    c = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    _ = {};
  function R(e) {
    return y.call(_, e)
      ? !0
      : y.call(w, e)
      ? !1
      : g.test(e)
      ? (_[e] = !0)
      : ((w[e] = !0), !1);
  }
  function I(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function k(e, t, n, r) {
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function T(e, t, n, r, i, u, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = d);
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      P[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      P[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      P[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      P[e] = new T(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        P[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      P[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      P[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      P[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      P[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, M);
      P[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, M);
        P[t] = new T(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, M);
      P[t] = new T(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      P[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new T(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      P[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function b(e, t, n, r) {
    var i = P.hasOwnProperty(t) ? P[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (k(t, n, i, r) && (n = null),
      r || i === null
        ? R(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    J = Symbol.for("react.element"),
    le = Symbol.for("react.portal"),
    ce = Symbol.for("react.fragment"),
    ge = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    Oe = Symbol.for("react.provider"),
    kt = Symbol.for("react.context"),
    Et = Symbol.for("react.forward_ref"),
    Ze = Symbol.for("react.suspense"),
    pt = Symbol.for("react.suspense_list"),
    Ct = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    Re = Symbol.for("react.offscreen"),
    B = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (B && e[B]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    E;
  function D(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var ne = !1;
  function oe(e, t) {
    if (!e || ne) return "";
    ne = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var r = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            r = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          r = j;
        }
        e();
      }
    } catch (j) {
      if (j && r && typeof j.stack == "string") {
        for (
          var i = j.stack.split(`
`),
            u = r.stack.split(`
`),
            d = i.length - 1,
            m = u.length - 1;
          1 <= d && 0 <= m && i[d] !== u[m];

        )
          m--;
        for (; 1 <= d && 0 <= m; d--, m--)
          if (i[d] !== u[m]) {
            if (d !== 1 || m !== 1)
              do
                if ((d--, m--, 0 > m || i[d] !== u[m])) {
                  var v =
                    `
` + i[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= d && 0 <= m);
            break;
          }
      }
    } finally {
      (ne = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function se(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case le:
        return "Portal";
      case ye:
        return "Profiler";
      case ge:
        return "StrictMode";
      case Ze:
        return "Suspense";
      case pt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case kt:
          return (e.displayName || "Context") + ".Consumer";
        case Oe:
          return (e._context.displayName || "Context") + ".Provider";
        case Et:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ct:
          return (
            (t = e.displayName || null), t !== null ? t : ue(e.type) || "Memo"
          );
        case Qe:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function pe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(t);
      case 8:
        return t === ge ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function fe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function et(e) {
    var t = xe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (d) {
            (r = "" + d), u.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (d) {
            r = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function to(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function eu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function no(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function tu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = fe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function nu(e, t) {
    (t = t.checked), t != null && b(e, "checked", t, !1);
  }
  function Ol(e, t) {
    nu(e, t);
    var n = fe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, fe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || no(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var lr = Array.isArray;
  function jn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fe(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Al(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ou(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (lr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function lu(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function iu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function su(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function zl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? su(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ro,
    uu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ro = ro || document.createElement("div"),
            ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ro.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ir(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    yd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(sr).forEach(function (e) {
    yd.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
    });
  });
  function au(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function cu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = au(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var vd = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Dl(e, t) {
    if (t) {
      if (vd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $l = null;
  function Ml(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ul = null,
    Ln = null,
    On = null;
  function fu(e) {
    if ((e = Tr(e))) {
      if (typeof Ul != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = _o(t)), Ul(e.stateNode, e.type, t));
    }
  }
  function du(e) {
    Ln ? (On ? On.push(e) : (On = [e])) : (Ln = e);
  }
  function pu() {
    if (Ln) {
      var e = Ln,
        t = On;
      if (((On = Ln = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
    }
  }
  function hu(e, t) {
    return e(t);
  }
  function mu() {}
  var Bl = !1;
  function gu(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return hu(e, t, n);
    } finally {
      (Bl = !1), (Ln !== null || On !== null) && (mu(), pu());
    }
  }
  function ur(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _o(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (h)
    try {
      var ar = {};
      Object.defineProperty(ar, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", ar, ar),
        window.removeEventListener("test", ar, ar);
    } catch {
      Hl = !1;
    }
  function wd(e, t, n, r, i, u, d, m, v) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (F) {
      this.onError(F);
    }
  }
  var cr = !1,
    oo = null,
    lo = !1,
    Wl = null,
    xd = {
      onError: function (e) {
        (cr = !0), (oo = e);
      },
    };
  function Sd(e, t, n, r, i, u, d, m, v) {
    (cr = !1), (oo = null), wd.apply(xd, arguments);
  }
  function kd(e, t, n, r, i, u, d, m, v) {
    if ((Sd.apply(this, arguments), cr)) {
      if (cr) {
        var j = oo;
        (cr = !1), (oo = null);
      } else throw Error(s(198));
      lo || ((lo = !0), (Wl = j));
    }
  }
  function dn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function yu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function vu(e) {
    if (dn(e) !== e) throw Error(s(188));
  }
  function Ed(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = dn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return vu(i), e;
          if (u === r) return vu(i), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = i), (r = u);
      else {
        for (var d = !1, m = i.child; m; ) {
          if (m === n) {
            (d = !0), (n = i), (r = u);
            break;
          }
          if (m === r) {
            (d = !0), (r = i), (n = u);
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = u.child; m; ) {
            if (m === n) {
              (d = !0), (n = u), (r = i);
              break;
            }
            if (m === r) {
              (d = !0), (r = u), (n = i);
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function wu(e) {
    return (e = Ed(e)), e !== null ? xu(e) : null;
  }
  function xu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = xu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Su = l.unstable_scheduleCallback,
    ku = l.unstable_cancelCallback,
    Cd = l.unstable_shouldYield,
    Rd = l.unstable_requestPaint,
    _e = l.unstable_now,
    Nd = l.unstable_getCurrentPriorityLevel,
    Vl = l.unstable_ImmediatePriority,
    Eu = l.unstable_UserBlockingPriority,
    io = l.unstable_NormalPriority,
    _d = l.unstable_LowPriority,
    Cu = l.unstable_IdlePriority,
    so = null,
    Rt = null;
  function Pd(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : Ld,
    Td = Math.log,
    jd = Math.LN2;
  function Ld(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Td(e) / jd) | 0)) | 0;
  }
  var uo = 64,
    ao = 4194304;
  function fr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function co(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      u = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var m = d & ~i;
      m !== 0 ? (r = fr(m)) : ((u &= d), u !== 0 && (r = fr(u)));
    } else (d = n & ~i), d !== 0 ? (r = fr(d)) : u !== 0 && (r = fr(u));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (u = t & -t), i >= u || (i === 16 && (u & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ht(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function Od(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Id(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var d = 31 - ht(u),
        m = 1 << d,
        v = i[d];
      v === -1
        ? (!(m & n) || m & r) && (i[d] = Od(m, t))
        : v <= t && (e.expiredLanes |= m),
        (u &= ~m);
    }
  }
  function Ql(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ru() {
    var e = uo;
    return (uo <<= 1), !(uo & 4194240) && (uo = 64), e;
  }
  function bl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function dr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ht(t)),
      (e[t] = n);
  }
  function Ad(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - ht(n),
        u = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~u);
    }
  }
  function Kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var de = 0;
  function Nu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var _u,
    ql,
    Pu,
    Tu,
    ju,
    Jl = !1,
    fo = [],
    Qt = null,
    bt = null,
    Kt = null,
    pr = new Map(),
    hr = new Map(),
    qt = [],
    zd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Lu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        bt = null;
        break;
      case "mouseover":
      case "mouseout":
        Kt = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hr.delete(t.pointerId);
    }
  }
  function mr(e, t, n, r, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Tr(t)), t !== null && ql(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Dd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Qt = mr(Qt, e, t, n, r, i)), !0;
      case "dragenter":
        return (bt = mr(bt, e, t, n, r, i)), !0;
      case "mouseover":
        return (Kt = mr(Kt, e, t, n, r, i)), !0;
      case "pointerover":
        var u = i.pointerId;
        return pr.set(u, mr(pr.get(u) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (u = i.pointerId), hr.set(u, mr(hr.get(u) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Ou(e) {
    var t = pn(e.target);
    if (t !== null) {
      var n = dn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = yu(n)), t !== null)) {
            (e.blockedOn = t),
              ju(e.priority, function () {
                Pu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function po(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ($l = r), n.target.dispatchEvent(r), ($l = null);
      } else return (t = Tr(n)), t !== null && ql(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Iu(e, t, n) {
    po(e) && n.delete(t);
  }
  function Fd() {
    (Jl = !1),
      Qt !== null && po(Qt) && (Qt = null),
      bt !== null && po(bt) && (bt = null),
      Kt !== null && po(Kt) && (Kt = null),
      pr.forEach(Iu),
      hr.forEach(Iu);
  }
  function gr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Fd)));
  }
  function yr(e) {
    function t(i) {
      return gr(i, e);
    }
    if (0 < fo.length) {
      gr(fo[0], e);
      for (var n = 1; n < fo.length; n++) {
        var r = fo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Qt !== null && gr(Qt, e),
        bt !== null && gr(bt, e),
        Kt !== null && gr(Kt, e),
        pr.forEach(t),
        hr.forEach(t),
        n = 0;
      n < qt.length;
      n++
    )
      (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
      Ou(n), n.blockedOn === null && qt.shift();
  }
  var In = G.ReactCurrentBatchConfig,
    ho = !0;
  function $d(e, t, n, r) {
    var i = de,
      u = In.transition;
    In.transition = null;
    try {
      (de = 1), Yl(e, t, n, r);
    } finally {
      (de = i), (In.transition = u);
    }
  }
  function Md(e, t, n, r) {
    var i = de,
      u = In.transition;
    In.transition = null;
    try {
      (de = 4), Yl(e, t, n, r);
    } finally {
      (de = i), (In.transition = u);
    }
  }
  function Yl(e, t, n, r) {
    if (ho) {
      var i = Xl(e, t, n, r);
      if (i === null) hi(e, t, r, mo, n), Lu(e, r);
      else if (Dd(i, e, t, n, r)) r.stopPropagation();
      else if ((Lu(e, r), t & 4 && -1 < zd.indexOf(e))) {
        for (; i !== null; ) {
          var u = Tr(i);
          if (
            (u !== null && _u(u),
            (u = Xl(e, t, n, r)),
            u === null && hi(e, t, r, mo, n),
            u === i)
          )
            break;
          i = u;
        }
        i !== null && r.stopPropagation();
      } else hi(e, t, r, null, n);
    }
  }
  var mo = null;
  function Xl(e, t, n, r) {
    if (((mo = null), (e = Ml(r)), (e = pn(e)), e !== null))
      if (((t = dn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = yu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (mo = e), null;
  }
  function Au(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Nd()) {
          case Vl:
            return 1;
          case Eu:
            return 4;
          case io:
          case _d:
            return 16;
          case Cu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    Gl = null,
    go = null;
  function zu() {
    if (go) return go;
    var e,
      t = Gl,
      n = t.length,
      r,
      i = "value" in Jt ? Jt.value : Jt.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === i[u - r]; r++);
    return (go = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function yo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function vo() {
    return !0;
  }
  function Du() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, u, d) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = d),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(u) : u[m]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? vo
          : Du),
        (this.isPropagationStopped = Du),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = vo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = vo));
        },
        persist: function () {},
        isPersistent: vo,
      }),
      t
    );
  }
  var An = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zl = tt(An),
    vr = V({}, An, { view: 0, detail: 0 }),
    Ud = tt(vr),
    ei,
    ti,
    wr,
    wo = V({}, vr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ri,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wr &&
              (wr && e.type === "mousemove"
                ? ((ei = e.screenX - wr.screenX), (ti = e.screenY - wr.screenY))
                : (ti = ei = 0),
              (wr = e)),
            ei);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ti;
      },
    }),
    Fu = tt(wo),
    Bd = V({}, wo, { dataTransfer: 0 }),
    Hd = tt(Bd),
    Wd = V({}, vr, { relatedTarget: 0 }),
    ni = tt(Wd),
    Vd = V({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qd = tt(Vd),
    bd = V({}, An, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kd = tt(bd),
    qd = V({}, An, { data: 0 }),
    $u = tt(qd),
    Jd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Yd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xd[e])
      ? !!t[e]
      : !1;
  }
  function ri() {
    return Gd;
  }
  var Zd = V({}, vr, {
      key: function (e) {
        if (e.key) {
          var t = Jd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = yo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Yd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ri,
      charCode: function (e) {
        return e.type === "keypress" ? yo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? yo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ep = tt(Zd),
    tp = V({}, wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mu = tt(tp),
    np = V({}, vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ri,
    }),
    rp = tt(np),
    op = V({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lp = tt(op),
    ip = V({}, wo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sp = tt(ip),
    up = [9, 13, 27, 32],
    oi = h && "CompositionEvent" in window,
    xr = null;
  h && "documentMode" in document && (xr = document.documentMode);
  var ap = h && "TextEvent" in window && !xr,
    Uu = h && (!oi || (xr && 8 < xr && 11 >= xr)),
    Bu = " ",
    Hu = !1;
  function Wu(e, t) {
    switch (e) {
      case "keyup":
        return up.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function cp(e, t) {
    switch (e) {
      case "compositionend":
        return Vu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Hu = !0), Bu);
      case "textInput":
        return (e = t.data), e === Bu && Hu ? null : e;
      default:
        return null;
    }
  }
  function fp(e, t) {
    if (zn)
      return e === "compositionend" || (!oi && Wu(e, t))
        ? ((e = zu()), (go = Gl = Jt = null), (zn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Uu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dp[e.type] : t === "textarea";
  }
  function bu(e, t, n, r) {
    du(r),
      (t = Co(t, "onChange")),
      0 < t.length &&
        ((n = new Zl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Sr = null,
    kr = null;
  function pp(e) {
    ca(e, 0);
  }
  function xo(e) {
    var t = Un(e);
    if (eu(t)) return e;
  }
  function hp(e, t) {
    if (e === "change") return t;
  }
  var Ku = !1;
  if (h) {
    var li;
    if (h) {
      var ii = "oninput" in document;
      if (!ii) {
        var qu = document.createElement("div");
        qu.setAttribute("oninput", "return;"),
          (ii = typeof qu.oninput == "function");
      }
      li = ii;
    } else li = !1;
    Ku = li && (!document.documentMode || 9 < document.documentMode);
  }
  function Ju() {
    Sr && (Sr.detachEvent("onpropertychange", Yu), (kr = Sr = null));
  }
  function Yu(e) {
    if (e.propertyName === "value" && xo(kr)) {
      var t = [];
      bu(t, kr, e, Ml(e)), gu(pp, t);
    }
  }
  function mp(e, t, n) {
    e === "focusin"
      ? (Ju(), (Sr = t), (kr = n), Sr.attachEvent("onpropertychange", Yu))
      : e === "focusout" && Ju();
  }
  function gp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return xo(kr);
  }
  function yp(e, t) {
    if (e === "click") return xo(t);
  }
  function vp(e, t) {
    if (e === "input" || e === "change") return xo(t);
  }
  function wp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == "function" ? Object.is : wp;
  function Er(e, t) {
    if (mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!y.call(t, i) || !mt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Xu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gu(e, t) {
    var n = Xu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Xu(n);
    }
  }
  function Zu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Zu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ea() {
    for (var e = window, t = no(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = no(e.document);
    }
    return t;
  }
  function si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function xp(e) {
    var t = ea(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Zu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && si(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            u = Math.min(r.start, i);
          (r = r.end === void 0 ? u : Math.min(r.end, i)),
            !e.extend && u > r && ((i = r), (r = u), (u = i)),
            (i = Gu(n, u));
          var d = Gu(n, r);
          i &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Sp = h && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    ui = null,
    Cr = null,
    ai = !1;
  function ta(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai ||
      Dn == null ||
      Dn !== no(r) ||
      ((r = Dn),
      "selectionStart" in r && si(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Cr && Er(Cr, r)) ||
        ((Cr = r),
        (r = Co(ui, "onSelect")),
        0 < r.length &&
          ((t = new Zl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Dn))));
  }
  function So(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Fn = {
      animationend: So("Animation", "AnimationEnd"),
      animationiteration: So("Animation", "AnimationIteration"),
      animationstart: So("Animation", "AnimationStart"),
      transitionend: So("Transition", "TransitionEnd"),
    },
    ci = {},
    na = {};
  h &&
    ((na = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fn.animationend.animation,
      delete Fn.animationiteration.animation,
      delete Fn.animationstart.animation),
    "TransitionEvent" in window || delete Fn.transitionend.transition);
  function ko(e) {
    if (ci[e]) return ci[e];
    if (!Fn[e]) return e;
    var t = Fn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in na) return (ci[e] = t[n]);
    return e;
  }
  var ra = ko("animationend"),
    oa = ko("animationiteration"),
    la = ko("animationstart"),
    ia = ko("transitionend"),
    sa = new Map(),
    ua =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Yt(e, t) {
    sa.set(e, t), f(t, [e]);
  }
  for (var fi = 0; fi < ua.length; fi++) {
    var di = ua[fi],
      kp = di.toLowerCase(),
      Ep = di[0].toUpperCase() + di.slice(1);
    Yt(kp, "on" + Ep);
  }
  Yt(ra, "onAnimationEnd"),
    Yt(oa, "onAnimationIteration"),
    Yt(la, "onAnimationStart"),
    Yt("dblclick", "onDoubleClick"),
    Yt("focusin", "onFocus"),
    Yt("focusout", "onBlur"),
    Yt(ia, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Rr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Cp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Rr)
    );
  function aa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), kd(r, t, void 0, e), (e.currentTarget = null);
  }
  function ca(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var d = r.length - 1; 0 <= d; d--) {
            var m = r[d],
              v = m.instance,
              j = m.currentTarget;
            if (((m = m.listener), v !== u && i.isPropagationStopped()))
              break e;
            aa(i, m, j), (u = v);
          }
        else
          for (d = 0; d < r.length; d++) {
            if (
              ((m = r[d]),
              (v = m.instance),
              (j = m.currentTarget),
              (m = m.listener),
              v !== u && i.isPropagationStopped())
            )
              break e;
            aa(i, m, j), (u = v);
          }
      }
    }
    if (lo) throw ((e = Wl), (lo = !1), (Wl = null), e);
  }
  function ve(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (fa(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    t && (r |= 4), fa(n, e, r, t);
  }
  var Eo = "_reactListening" + Math.random().toString(36).slice(2);
  function Nr(e) {
    if (!e[Eo]) {
      (e[Eo] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Cp.has(n) || pi(n, !1, e), pi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Eo] || ((t[Eo] = !0), pi("selectionchange", !1, t));
    }
  }
  function fa(e, t, n, r) {
    switch (Au(t)) {
      case 1:
        var i = $d;
        break;
      case 4:
        i = Md;
        break;
      default:
        i = Yl;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Hl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function hi(e, t, n, r, i) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var d = r.tag;
        if (d === 3 || d === 4) {
          var m = r.stateNode.containerInfo;
          if (m === i || (m.nodeType === 8 && m.parentNode === i)) break;
          if (d === 4)
            for (d = r.return; d !== null; ) {
              var v = d.tag;
              if (
                (v === 3 || v === 4) &&
                ((v = d.stateNode.containerInfo),
                v === i || (v.nodeType === 8 && v.parentNode === i))
              )
                return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = pn(m)), d === null)) return;
            if (((v = d.tag), v === 5 || v === 6)) {
              r = u = d;
              continue e;
            }
            m = m.parentNode;
          }
        }
        r = r.return;
      }
    gu(function () {
      var j = u,
        F = Ml(n),
        $ = [];
      e: {
        var z = sa.get(e);
        if (z !== void 0) {
          var H = Zl,
            Q = e;
          switch (e) {
            case "keypress":
              if (yo(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = ep;
              break;
            case "focusin":
              (Q = "focus"), (H = ni);
              break;
            case "focusout":
              (Q = "blur"), (H = ni);
              break;
            case "beforeblur":
            case "afterblur":
              H = ni;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Fu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Hd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = rp;
              break;
            case ra:
            case oa:
            case la:
              H = Qd;
              break;
            case ia:
              H = lp;
              break;
            case "scroll":
              H = Ud;
              break;
            case "wheel":
              H = sp;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Kd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Mu;
          }
          var K = (t & 4) !== 0,
            Pe = !K && e === "scroll",
            C = K ? (z !== null ? z + "Capture" : null) : z;
          K = [];
          for (var x = j, N; x !== null; ) {
            N = x;
            var U = N.stateNode;
            if (
              (N.tag === 5 &&
                U !== null &&
                ((N = U),
                C !== null &&
                  ((U = ur(x, C)), U != null && K.push(_r(x, U, N)))),
              Pe)
            )
              break;
            x = x.return;
          }
          0 < K.length &&
            ((z = new H(z, Q, null, n, F)), $.push({ event: z, listeners: K }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            z &&
              n !== $l &&
              (Q = n.relatedTarget || n.fromElement) &&
              (pn(Q) || Q[At]))
          )
            break e;
          if (
            (H || z) &&
            ((z =
              F.window === F
                ? F
                : (z = F.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            H
              ? ((Q = n.relatedTarget || n.toElement),
                (H = j),
                (Q = Q ? pn(Q) : null),
                Q !== null &&
                  ((Pe = dn(Q)), Q !== Pe || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((H = null), (Q = j)),
            H !== Q)
          ) {
            if (
              ((K = Fu),
              (U = "onMouseLeave"),
              (C = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = Mu),
                (U = "onPointerLeave"),
                (C = "onPointerEnter"),
                (x = "pointer")),
              (Pe = H == null ? z : Un(H)),
              (N = Q == null ? z : Un(Q)),
              (z = new K(U, x + "leave", H, n, F)),
              (z.target = Pe),
              (z.relatedTarget = N),
              (U = null),
              pn(F) === j &&
                ((K = new K(C, x + "enter", Q, n, F)),
                (K.target = N),
                (K.relatedTarget = Pe),
                (U = K)),
              (Pe = U),
              H && Q)
            )
              t: {
                for (K = H, C = Q, x = 0, N = K; N; N = $n(N)) x++;
                for (N = 0, U = C; U; U = $n(U)) N++;
                for (; 0 < x - N; ) (K = $n(K)), x--;
                for (; 0 < N - x; ) (C = $n(C)), N--;
                for (; x--; ) {
                  if (K === C || (C !== null && K === C.alternate)) break t;
                  (K = $n(K)), (C = $n(C));
                }
                K = null;
              }
            else K = null;
            H !== null && da($, z, H, K, !1),
              Q !== null && Pe !== null && da($, Pe, Q, K, !0);
          }
        }
        e: {
          if (
            ((z = j ? Un(j) : window),
            (H = z.nodeName && z.nodeName.toLowerCase()),
            H === "select" || (H === "input" && z.type === "file"))
          )
            var q = hp;
          else if (Qu(z))
            if (Ku) q = vp;
            else {
              q = gp;
              var Y = mp;
            }
          else
            (H = z.nodeName) &&
              H.toLowerCase() === "input" &&
              (z.type === "checkbox" || z.type === "radio") &&
              (q = yp);
          if (q && (q = q(e, j))) {
            bu($, q, n, F);
            break e;
          }
          Y && Y(e, z, j),
            e === "focusout" &&
              (Y = z._wrapperState) &&
              Y.controlled &&
              z.type === "number" &&
              Il(z, "number", z.value);
        }
        switch (((Y = j ? Un(j) : window), e)) {
          case "focusin":
            (Qu(Y) || Y.contentEditable === "true") &&
              ((Dn = Y), (ui = j), (Cr = null));
            break;
          case "focusout":
            Cr = ui = Dn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ai = !1), ta($, n, F);
            break;
          case "selectionchange":
            if (Sp) break;
          case "keydown":
          case "keyup":
            ta($, n, F);
        }
        var X;
        if (oi)
          e: {
            switch (e) {
              case "compositionstart":
                var ee = "onCompositionStart";
                break e;
              case "compositionend":
                ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ee = "onCompositionUpdate";
                break e;
            }
            ee = void 0;
          }
        else
          zn
            ? Wu(e, n) && (ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ee = "onCompositionStart");
        ee &&
          (Uu &&
            n.locale !== "ko" &&
            (zn || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && zn && (X = zu())
              : ((Jt = F),
                (Gl = "value" in Jt ? Jt.value : Jt.textContent),
                (zn = !0))),
          (Y = Co(j, ee)),
          0 < Y.length &&
            ((ee = new $u(ee, e, null, n, F)),
            $.push({ event: ee, listeners: Y }),
            X ? (ee.data = X) : ((X = Vu(n)), X !== null && (ee.data = X)))),
          (X = ap ? cp(e, n) : fp(e, n)) &&
            ((j = Co(j, "onBeforeInput")),
            0 < j.length &&
              ((F = new $u("onBeforeInput", "beforeinput", null, n, F)),
              $.push({ event: F, listeners: j }),
              (F.data = X)));
      }
      ca($, t);
    });
  }
  function _r(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Co(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      i.tag === 5 &&
        u !== null &&
        ((i = u),
        (u = ur(e, n)),
        u != null && r.unshift(_r(e, u, i)),
        (u = ur(e, t)),
        u != null && r.push(_r(e, u, i))),
        (e = e.return);
    }
    return r;
  }
  function $n(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function da(e, t, n, r, i) {
    for (var u = t._reactName, d = []; n !== null && n !== r; ) {
      var m = n,
        v = m.alternate,
        j = m.stateNode;
      if (v !== null && v === r) break;
      m.tag === 5 &&
        j !== null &&
        ((m = j),
        i
          ? ((v = ur(n, u)), v != null && d.unshift(_r(n, v, m)))
          : i || ((v = ur(n, u)), v != null && d.push(_r(n, v, m)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Rp = /\r\n?/g,
    Np = /\u0000|\uFFFD/g;
  function pa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Rp,
        `
`
      )
      .replace(Np, "");
  }
  function Ro(e, t, n) {
    if (((t = pa(t)), pa(e) !== t && n)) throw Error(s(425));
  }
  function No() {}
  var mi = null,
    gi = null;
  function yi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vi = typeof setTimeout == "function" ? setTimeout : void 0,
    _p = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ha = typeof Promise == "function" ? Promise : void 0,
    Pp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ha < "u"
        ? function (e) {
            return ha.resolve(null).then(e).catch(Tp);
          }
        : vi;
  function Tp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), yr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    yr(t);
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ma(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Mn,
    Pr = "__reactProps$" + Mn,
    At = "__reactContainer$" + Mn,
    xi = "__reactEvents$" + Mn,
    jp = "__reactListeners$" + Mn,
    Lp = "__reactHandles$" + Mn;
  function pn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[At] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ma(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = ma(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Tr(e) {
    return (
      (e = e[Nt] || e[At]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function _o(e) {
    return e[Pr] || null;
  }
  var Si = [],
    Bn = -1;
  function Gt(e) {
    return { current: e };
  }
  function we(e) {
    0 > Bn || ((e.current = Si[Bn]), (Si[Bn] = null), Bn--);
  }
  function he(e, t) {
    Bn++, (Si[Bn] = e.current), (e.current = t);
  }
  var Zt = {},
    $e = Gt(Zt),
    be = Gt(!1),
    hn = Zt;
  function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      u;
    for (u in n) i[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ke(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Po() {
    we(be), we($e);
  }
  function ga(e, t, n) {
    if ($e.current !== Zt) throw Error(s(168));
    he($e, t), he(be, n);
  }
  function ya(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(s(108, pe(e) || "Unknown", i));
    return V({}, n, r);
  }
  function To(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Zt),
      (hn = $e.current),
      he($e, e),
      he(be, be.current),
      !0
    );
  }
  function va(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = ya(e, t, hn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(be),
        we($e),
        he($e, e))
      : we(be),
      he(be, n);
  }
  var zt = null,
    jo = !1,
    ki = !1;
  function wa(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  function Op(e) {
    (jo = !0), wa(e);
  }
  function en() {
    if (!ki && zt !== null) {
      ki = !0;
      var e = 0,
        t = de;
      try {
        var n = zt;
        for (de = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (zt = null), (jo = !1);
      } catch (i) {
        throw (zt !== null && (zt = zt.slice(e + 1)), Su(Vl, en), i);
      } finally {
        (de = t), (ki = !1);
      }
    }
    return null;
  }
  var Wn = [],
    Vn = 0,
    Lo = null,
    Oo = 0,
    st = [],
    ut = 0,
    mn = null,
    Dt = 1,
    Ft = "";
  function gn(e, t) {
    (Wn[Vn++] = Oo), (Wn[Vn++] = Lo), (Lo = e), (Oo = t);
  }
  function xa(e, t, n) {
    (st[ut++] = Dt), (st[ut++] = Ft), (st[ut++] = mn), (mn = e);
    var r = Dt;
    e = Ft;
    var i = 32 - ht(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var u = 32 - ht(t) + i;
    if (30 < u) {
      var d = i - (i % 5);
      (u = (r & ((1 << d) - 1)).toString(32)),
        (r >>= d),
        (i -= d),
        (Dt = (1 << (32 - ht(t) + i)) | (n << i) | r),
        (Ft = u + e);
    } else (Dt = (1 << u) | (n << i) | r), (Ft = e);
  }
  function Ei(e) {
    e.return !== null && (gn(e, 1), xa(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Lo; )
      (Lo = Wn[--Vn]), (Wn[Vn] = null), (Oo = Wn[--Vn]), (Wn[Vn] = null);
    for (; e === mn; )
      (mn = st[--ut]),
        (st[ut] = null),
        (Ft = st[--ut]),
        (st[ut] = null),
        (Dt = st[--ut]),
        (st[ut] = null);
  }
  var nt = null,
    rt = null,
    Se = !1,
    gt = null;
  function Sa(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ka(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = Xt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = mn !== null ? { id: Dt, overflow: Ft } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ri(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ni(e) {
    if (Se) {
      var t = rt;
      if (t) {
        var n = t;
        if (!ka(e, t)) {
          if (Ri(e)) throw Error(s(418));
          t = Xt(n.nextSibling);
          var r = nt;
          t && ka(e, t)
            ? Sa(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e));
        }
      } else {
        if (Ri(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (nt = e);
      }
    }
  }
  function Ea(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function Io(e) {
    if (e !== nt) return !1;
    if (!Se) return Ea(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (Ri(e)) throw (Ca(), Error(s(418)));
      for (; t; ) Sa(e, t), (t = Xt(t.nextSibling));
    }
    if ((Ea(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ca() {
    for (var e = rt; e; ) e = Xt(e.nextSibling);
  }
  function Qn() {
    (rt = nt = null), (Se = !1);
  }
  function _i(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  var Ip = G.ReactCurrentBatchConfig;
  function jr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var i = r,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (d) {
              var m = i.refs;
              d === null ? delete m[u] : (m[u] = d);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ao(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ra(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Na(e) {
    function t(C, x) {
      if (e) {
        var N = C.deletions;
        N === null ? ((C.deletions = [x]), (C.flags |= 16)) : N.push(x);
      }
    }
    function n(C, x) {
      if (!e) return null;
      for (; x !== null; ) t(C, x), (x = x.sibling);
      return null;
    }
    function r(C, x) {
      for (C = new Map(); x !== null; )
        x.key !== null ? C.set(x.key, x) : C.set(x.index, x), (x = x.sibling);
      return C;
    }
    function i(C, x) {
      return (C = an(C, x)), (C.index = 0), (C.sibling = null), C;
    }
    function u(C, x, N) {
      return (
        (C.index = N),
        e
          ? ((N = C.alternate),
            N !== null
              ? ((N = N.index), N < x ? ((C.flags |= 2), x) : N)
              : ((C.flags |= 2), x))
          : ((C.flags |= 1048576), x)
      );
    }
    function d(C) {
      return e && C.alternate === null && (C.flags |= 2), C;
    }
    function m(C, x, N, U) {
      return x === null || x.tag !== 6
        ? ((x = vs(N, C.mode, U)), (x.return = C), x)
        : ((x = i(x, N)), (x.return = C), x);
    }
    function v(C, x, N, U) {
      var q = N.type;
      return q === ce
        ? F(C, x, N.props.children, U, N.key)
        : x !== null &&
          (x.elementType === q ||
            (typeof q == "object" &&
              q !== null &&
              q.$$typeof === Qe &&
              Ra(q) === x.type))
        ? ((U = i(x, N.props)), (U.ref = jr(C, x, N)), (U.return = C), U)
        : ((U = ol(N.type, N.key, N.props, null, C.mode, U)),
          (U.ref = jr(C, x, N)),
          (U.return = C),
          U);
    }
    function j(C, x, N, U) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== N.containerInfo ||
        x.stateNode.implementation !== N.implementation
        ? ((x = ws(N, C.mode, U)), (x.return = C), x)
        : ((x = i(x, N.children || [])), (x.return = C), x);
    }
    function F(C, x, N, U, q) {
      return x === null || x.tag !== 7
        ? ((x = Cn(N, C.mode, U, q)), (x.return = C), x)
        : ((x = i(x, N)), (x.return = C), x);
    }
    function $(C, x, N) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (x = vs("" + x, C.mode, N)), (x.return = C), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case J:
            return (
              (N = ol(x.type, x.key, x.props, null, C.mode, N)),
              (N.ref = jr(C, null, x)),
              (N.return = C),
              N
            );
          case le:
            return (x = ws(x, C.mode, N)), (x.return = C), x;
          case Qe:
            var U = x._init;
            return $(C, U(x._payload), N);
        }
        if (lr(x) || Z(x))
          return (x = Cn(x, C.mode, N, null)), (x.return = C), x;
        Ao(C, x);
      }
      return null;
    }
    function z(C, x, N, U) {
      var q = x !== null ? x.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return q !== null ? null : m(C, x, "" + N, U);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case J:
            return N.key === q ? v(C, x, N, U) : null;
          case le:
            return N.key === q ? j(C, x, N, U) : null;
          case Qe:
            return (q = N._init), z(C, x, q(N._payload), U);
        }
        if (lr(N) || Z(N)) return q !== null ? null : F(C, x, N, U, null);
        Ao(C, N);
      }
      return null;
    }
    function H(C, x, N, U, q) {
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return (C = C.get(N) || null), m(x, C, "" + U, q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case J:
            return (
              (C = C.get(U.key === null ? N : U.key) || null), v(x, C, U, q)
            );
          case le:
            return (
              (C = C.get(U.key === null ? N : U.key) || null), j(x, C, U, q)
            );
          case Qe:
            var Y = U._init;
            return H(C, x, N, Y(U._payload), q);
        }
        if (lr(U) || Z(U)) return (C = C.get(N) || null), F(x, C, U, q, null);
        Ao(x, U);
      }
      return null;
    }
    function Q(C, x, N, U) {
      for (
        var q = null, Y = null, X = x, ee = (x = 0), ze = null;
        X !== null && ee < N.length;
        ee++
      ) {
        X.index > ee ? ((ze = X), (X = null)) : (ze = X.sibling);
        var ae = z(C, X, N[ee], U);
        if (ae === null) {
          X === null && (X = ze);
          break;
        }
        e && X && ae.alternate === null && t(C, X),
          (x = u(ae, x, ee)),
          Y === null ? (q = ae) : (Y.sibling = ae),
          (Y = ae),
          (X = ze);
      }
      if (ee === N.length) return n(C, X), Se && gn(C, ee), q;
      if (X === null) {
        for (; ee < N.length; ee++)
          (X = $(C, N[ee], U)),
            X !== null &&
              ((x = u(X, x, ee)),
              Y === null ? (q = X) : (Y.sibling = X),
              (Y = X));
        return Se && gn(C, ee), q;
      }
      for (X = r(C, X); ee < N.length; ee++)
        (ze = H(X, C, ee, N[ee], U)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              X.delete(ze.key === null ? ee : ze.key),
            (x = u(ze, x, ee)),
            Y === null ? (q = ze) : (Y.sibling = ze),
            (Y = ze));
      return (
        e &&
          X.forEach(function (cn) {
            return t(C, cn);
          }),
        Se && gn(C, ee),
        q
      );
    }
    function K(C, x, N, U) {
      var q = Z(N);
      if (typeof q != "function") throw Error(s(150));
      if (((N = q.call(N)), N == null)) throw Error(s(151));
      for (
        var Y = (q = null), X = x, ee = (x = 0), ze = null, ae = N.next();
        X !== null && !ae.done;
        ee++, ae = N.next()
      ) {
        X.index > ee ? ((ze = X), (X = null)) : (ze = X.sibling);
        var cn = z(C, X, ae.value, U);
        if (cn === null) {
          X === null && (X = ze);
          break;
        }
        e && X && cn.alternate === null && t(C, X),
          (x = u(cn, x, ee)),
          Y === null ? (q = cn) : (Y.sibling = cn),
          (Y = cn),
          (X = ze);
      }
      if (ae.done) return n(C, X), Se && gn(C, ee), q;
      if (X === null) {
        for (; !ae.done; ee++, ae = N.next())
          (ae = $(C, ae.value, U)),
            ae !== null &&
              ((x = u(ae, x, ee)),
              Y === null ? (q = ae) : (Y.sibling = ae),
              (Y = ae));
        return Se && gn(C, ee), q;
      }
      for (X = r(C, X); !ae.done; ee++, ae = N.next())
        (ae = H(X, C, ee, ae.value, U)),
          ae !== null &&
            (e &&
              ae.alternate !== null &&
              X.delete(ae.key === null ? ee : ae.key),
            (x = u(ae, x, ee)),
            Y === null ? (q = ae) : (Y.sibling = ae),
            (Y = ae));
      return (
        e &&
          X.forEach(function (dh) {
            return t(C, dh);
          }),
        Se && gn(C, ee),
        q
      );
    }
    function Pe(C, x, N, U) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === ce &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case J:
            e: {
              for (var q = N.key, Y = x; Y !== null; ) {
                if (Y.key === q) {
                  if (((q = N.type), q === ce)) {
                    if (Y.tag === 7) {
                      n(C, Y.sibling),
                        (x = i(Y, N.props.children)),
                        (x.return = C),
                        (C = x);
                      break e;
                    }
                  } else if (
                    Y.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === Qe &&
                      Ra(q) === Y.type)
                  ) {
                    n(C, Y.sibling),
                      (x = i(Y, N.props)),
                      (x.ref = jr(C, Y, N)),
                      (x.return = C),
                      (C = x);
                    break e;
                  }
                  n(C, Y);
                  break;
                } else t(C, Y);
                Y = Y.sibling;
              }
              N.type === ce
                ? ((x = Cn(N.props.children, C.mode, U, N.key)),
                  (x.return = C),
                  (C = x))
                : ((U = ol(N.type, N.key, N.props, null, C.mode, U)),
                  (U.ref = jr(C, x, N)),
                  (U.return = C),
                  (C = U));
            }
            return d(C);
          case le:
            e: {
              for (Y = N.key; x !== null; ) {
                if (x.key === Y)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === N.containerInfo &&
                    x.stateNode.implementation === N.implementation
                  ) {
                    n(C, x.sibling),
                      (x = i(x, N.children || [])),
                      (x.return = C),
                      (C = x);
                    break e;
                  } else {
                    n(C, x);
                    break;
                  }
                else t(C, x);
                x = x.sibling;
              }
              (x = ws(N, C.mode, U)), (x.return = C), (C = x);
            }
            return d(C);
          case Qe:
            return (Y = N._init), Pe(C, x, Y(N._payload), U);
        }
        if (lr(N)) return Q(C, x, N, U);
        if (Z(N)) return K(C, x, N, U);
        Ao(C, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number"
        ? ((N = "" + N),
          x !== null && x.tag === 6
            ? (n(C, x.sibling), (x = i(x, N)), (x.return = C), (C = x))
            : (n(C, x), (x = vs(N, C.mode, U)), (x.return = C), (C = x)),
          d(C))
        : n(C, x);
    }
    return Pe;
  }
  var bn = Na(!0),
    _a = Na(!1),
    zo = Gt(null),
    Do = null,
    Kn = null,
    Pi = null;
  function Ti() {
    Pi = Kn = Do = null;
  }
  function ji(e) {
    var t = zo.current;
    we(zo), (e._currentValue = t);
  }
  function Li(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function qn(e, t) {
    (Do = e),
      (Pi = Kn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (qe = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
        if (Do === null) throw Error(s(308));
        (Kn = e), (Do.dependencies = { lanes: 0, firstContext: e });
      } else Kn = Kn.next = e;
    return t;
  }
  var yn = null;
  function Oi(e) {
    yn === null ? (yn = [e]) : yn.push(e);
  }
  function Pa(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Oi(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      $t(e, r)
    );
  }
  function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var tn = !1;
  function Ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ta(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Mt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function nn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ie & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        $t(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Oi(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      $t(e, n)
    );
  }
  function Fo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  function ja(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          u === null ? (i = u = d) : (u = u.next = d), (n = n.next);
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function $o(e, t, n, r) {
    var i = e.updateQueue;
    tn = !1;
    var u = i.firstBaseUpdate,
      d = i.lastBaseUpdate,
      m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var v = m,
        j = v.next;
      (v.next = null), d === null ? (u = j) : (d.next = j), (d = v);
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (m = F.lastBaseUpdate),
        m !== d &&
          (m === null ? (F.firstBaseUpdate = j) : (m.next = j),
          (F.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var $ = i.baseState;
      (d = 0), (F = j = v = null), (m = u);
      do {
        var z = m.lane,
          H = m.eventTime;
        if ((r & z) === z) {
          F !== null &&
            (F = F.next =
              {
                eventTime: H,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var Q = e,
              K = m;
            switch (((z = t), (H = n), K.tag)) {
              case 1:
                if (((Q = K.payload), typeof Q == "function")) {
                  $ = Q.call(H, $, z);
                  break e;
                }
                $ = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = K.payload),
                  (z = typeof Q == "function" ? Q.call(H, $, z) : Q),
                  z == null)
                )
                  break e;
                $ = V({}, $, z);
                break e;
              case 2:
                tn = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (z = i.effects),
            z === null ? (i.effects = [m]) : z.push(m));
        } else
          (H = {
            eventTime: H,
            lane: z,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            F === null ? ((j = F = H), (v = $)) : (F = F.next = H),
            (d |= z);
        if (((m = m.next), m === null)) {
          if (((m = i.shared.pending), m === null)) break;
          (z = m),
            (m = z.next),
            (z.next = null),
            (i.lastBaseUpdate = z),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (F === null && (v = $),
        (i.baseState = v),
        (i.firstBaseUpdate = j),
        (i.lastBaseUpdate = F),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (d |= i.lane), (i = i.next);
        while (i !== t);
      } else u === null && (i.shared.lanes = 0);
      (xn |= d), (e.lanes = d), (e.memoizedState = $);
    }
  }
  function La(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(s(191, i));
          i.call(r);
        }
      }
  }
  var Lr = {},
    _t = Gt(Lr),
    Or = Gt(Lr),
    Ir = Gt(Lr);
  function vn(e) {
    if (e === Lr) throw Error(s(174));
    return e;
  }
  function Ai(e, t) {
    switch ((he(Ir, t), he(Or, e), he(_t, Lr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : zl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = zl(t, e));
    }
    we(_t), he(_t, t);
  }
  function Jn() {
    we(_t), we(Or), we(Ir);
  }
  function Oa(e) {
    vn(Ir.current);
    var t = vn(_t.current),
      n = zl(t, e.type);
    t !== n && (he(Or, e), he(_t, n));
  }
  function zi(e) {
    Or.current === e && (we(_t), we(Or));
  }
  var ke = Gt(0);
  function Mo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Di = [];
  function Fi() {
    for (var e = 0; e < Di.length; e++)
      Di[e]._workInProgressVersionPrimary = null;
    Di.length = 0;
  }
  var Uo = G.ReactCurrentDispatcher,
    $i = G.ReactCurrentBatchConfig,
    wn = 0,
    Ee = null,
    je = null,
    Ie = null,
    Bo = !1,
    Ar = !1,
    zr = 0,
    Ap = 0;
  function Me() {
    throw Error(s(321));
  }
  function Mi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function Ui(e, t, n, r, i, u) {
    if (
      ((wn = u),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Uo.current = e === null || e.memoizedState === null ? $p : Mp),
      (e = n(r, i)),
      Ar)
    ) {
      u = 0;
      do {
        if (((Ar = !1), (zr = 0), 25 <= u)) throw Error(s(301));
        (u += 1),
          (Ie = je = null),
          (t.updateQueue = null),
          (Uo.current = Up),
          (e = n(r, i));
      } while (Ar);
    }
    if (
      ((Uo.current = Vo),
      (t = je !== null && je.next !== null),
      (wn = 0),
      (Ie = je = Ee = null),
      (Bo = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function Bi() {
    var e = zr !== 0;
    return (zr = 0), e;
  }
  function Pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ie === null ? (Ee.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
  }
  function ct() {
    if (je === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Ie === null ? Ee.memoizedState : Ie.next;
    if (t !== null) (Ie = t), (je = e);
    else {
      if (e === null) throw Error(s(310));
      (je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Ie === null ? (Ee.memoizedState = Ie = e) : (Ie = Ie.next = e);
    }
    return Ie;
  }
  function Dr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = je,
      i = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (i !== null) {
        var d = i.next;
        (i.next = u.next), (u.next = d);
      }
      (r.baseQueue = i = u), (n.pending = null);
    }
    if (i !== null) {
      (u = i.next), (r = r.baseState);
      var m = (d = null),
        v = null,
        j = u;
      do {
        var F = j.lane;
        if ((wn & F) === F)
          v !== null &&
            (v = v.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (r = j.hasEagerState ? j.eagerState : e(r, j.action));
        else {
          var $ = {
            lane: F,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          v === null ? ((m = v = $), (d = r)) : (v = v.next = $),
            (Ee.lanes |= F),
            (xn |= F);
        }
        j = j.next;
      } while (j !== null && j !== u);
      v === null ? (d = r) : (v.next = m),
        mt(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = v),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (u = i.lane), (Ee.lanes |= u), (xn |= u), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Wi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = (i = i.next);
      do (u = e(u, d.action)), (d = d.next);
      while (d !== i);
      mt(u, t.memoizedState) || (qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, r];
  }
  function Ia() {}
  function Aa(e, t) {
    var n = Ee,
      r = ct(),
      i = t(),
      u = !mt(r.memoizedState, i);
    if (
      (u && ((r.memoizedState = i), (qe = !0)),
      (r = r.queue),
      Vi(Fa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Fr(9, Da.bind(null, n, r, i, t), void 0, null),
        Ae === null)
      )
        throw Error(s(349));
      wn & 30 || za(n, t, i);
    }
    return i;
  }
  function za(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Da(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), $a(t) && Ma(e);
  }
  function Fa(e, t, n) {
    return n(function () {
      $a(t) && Ma(e);
    });
  }
  function $a(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Ma(e) {
    var t = $t(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Ua(e) {
    var t = Pt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Fp.bind(null, Ee, e)),
      [t.memoizedState, e]
    );
  }
  function Fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ee.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ba() {
    return ct().memoizedState;
  }
  function Ho(e, t, n, r) {
    var i = Pt();
    (Ee.flags |= e),
      (i.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Wo(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (((u = d.destroy), r !== null && Mi(r, d.deps))) {
        i.memoizedState = Fr(t, n, u, r);
        return;
      }
    }
    (Ee.flags |= e), (i.memoizedState = Fr(1 | t, n, u, r));
  }
  function Ha(e, t) {
    return Ho(8390656, 8, e, t);
  }
  function Vi(e, t) {
    return Wo(2048, 8, e, t);
  }
  function Wa(e, t) {
    return Wo(4, 2, e, t);
  }
  function Va(e, t) {
    return Wo(4, 4, e, t);
  }
  function Qa(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ba(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Wo(4, 4, Qa.bind(null, t, e), n)
    );
  }
  function Qi() {}
  function Ka(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function qa(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ja(e, t, n) {
    return wn & 21
      ? (mt(n, t) ||
          ((n = Ru()), (Ee.lanes |= n), (xn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
  }
  function zp(e, t) {
    var n = de;
    (de = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = $i.transition;
    $i.transition = {};
    try {
      e(!1), t();
    } finally {
      (de = n), ($i.transition = r);
    }
  }
  function Ya() {
    return ct().memoizedState;
  }
  function Dp(e, t, n) {
    var r = sn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Xa(e))
    )
      Ga(t, n);
    else if (((n = Pa(e, t, n, r)), n !== null)) {
      var i = Ve();
      xt(n, e, r, i), Za(n, t, r);
    }
  }
  function Fp(e, t, n) {
    var r = sn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Xa(e)) Ga(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var d = t.lastRenderedState,
            m = u(d, n);
          if (((i.hasEagerState = !0), (i.eagerState = m), mt(m, d))) {
            var v = t.interleaved;
            v === null
              ? ((i.next = i), Oi(t))
              : ((i.next = v.next), (v.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Pa(e, t, i, r)),
        n !== null && ((i = Ve()), xt(n, e, r, i), Za(n, t, r));
    }
  }
  function Xa(e) {
    var t = e.alternate;
    return e === Ee || (t !== null && t === Ee);
  }
  function Ga(e, t) {
    Ar = Bo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Za(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n);
    }
  }
  var Vo = {
      readContext: at,
      useCallback: Me,
      useContext: Me,
      useEffect: Me,
      useImperativeHandle: Me,
      useInsertionEffect: Me,
      useLayoutEffect: Me,
      useMemo: Me,
      useReducer: Me,
      useRef: Me,
      useState: Me,
      useDebugValue: Me,
      useDeferredValue: Me,
      useTransition: Me,
      useMutableSource: Me,
      useSyncExternalStore: Me,
      useId: Me,
      unstable_isNewReconciler: !1,
    },
    $p = {
      readContext: at,
      useCallback: function (e, t) {
        return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: Ha,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ho(4194308, 4, Qa.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ho(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ho(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Pt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Pt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Dp.bind(null, Ee, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ua,
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        return (Pt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ua(!1),
          t = e[0];
        return (e = zp.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ee,
          i = Pt();
        if (Se) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(s(349));
          wn & 30 || za(r, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          Ha(Fa.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          Fr(9, Da.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Pt(),
          t = Ae.identifierPrefix;
        if (Se) {
          var n = Ft,
            r = Dt;
          (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = zr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Ap++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Mp = {
      readContext: at,
      useCallback: Ka,
      useContext: at,
      useEffect: Vi,
      useImperativeHandle: ba,
      useInsertionEffect: Wa,
      useLayoutEffect: Va,
      useMemo: qa,
      useReducer: Hi,
      useRef: Ba,
      useState: function () {
        return Hi(Dr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = ct();
        return Ja(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(Dr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Aa,
      useId: Ya,
      unstable_isNewReconciler: !1,
    },
    Up = {
      readContext: at,
      useCallback: Ka,
      useContext: at,
      useEffect: Vi,
      useImperativeHandle: ba,
      useInsertionEffect: Wa,
      useLayoutEffect: Va,
      useMemo: qa,
      useReducer: Wi,
      useRef: Ba,
      useState: function () {
        return Wi(Dr);
      },
      useDebugValue: Qi,
      useDeferredValue: function (e) {
        var t = ct();
        return je === null ? (t.memoizedState = e) : Ja(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(Dr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Aa,
      useId: Ya,
      unstable_isNewReconciler: !1,
    };
  function yt(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function bi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? dn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        i = sn(e),
        u = Mt(r, i);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = nn(e, u, i)),
        t !== null && (xt(t, e, i, r), Fo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        i = sn(e),
        u = Mt(r, i);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = nn(e, u, i)),
        t !== null && (xt(t, e, i, r), Fo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ve(),
        r = sn(e),
        i = Mt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = nn(e, i, r)),
        t !== null && (xt(t, e, r, n), Fo(t, e, r));
    },
  };
  function ec(e, t, n, r, i, u, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Er(n, r) || !Er(i, u)
        : !0
    );
  }
  function tc(e, t, n) {
    var r = !1,
      i = Zt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = at(u))
        : ((i = Ke(t) ? hn : $e.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? Hn(e, i) : Zt)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Qo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function nc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Qo.enqueueReplaceState(t, t.state, null);
  }
  function Ki(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ii(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (i.context = at(u))
      : ((u = Ke(t) ? hn : $e.current), (i.context = Hn(e, u))),
      (i.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (bi(e, t, u, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Qo.enqueueReplaceState(i, i.state, null),
        $o(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += se(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (u) {
      i =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function qi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Bp = typeof WeakMap == "function" ? WeakMap : Map;
  function rc(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Go || ((Go = !0), (cs = r)), Ji(e, t);
      }),
      n
    );
  }
  function oc(e, t, n) {
    (n = Mt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Ji(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          Ji(e, t),
            typeof r != "function" &&
              (on === null ? (on = new Set([this])) : on.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      n
    );
  }
  function lc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bp();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = th.bind(null, e, t, n)), t.then(e, e));
  }
  function ic(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function sc(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Mt(-1, 1)), (t.tag = 2), nn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Hp = G.ReactCurrentOwner,
    qe = !1;
  function We(e, t, n, r) {
    t.child = e === null ? _a(t, null, n, r) : bn(t, e.child, n, r);
  }
  function uc(e, t, n, r, i) {
    n = n.render;
    var u = t.ref;
    return (
      qn(t, i),
      (r = Ui(e, t, n, r, u, i)),
      (n = Bi()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ut(e, t, i))
        : (Se && n && Ei(t), (t.flags |= 1), We(e, t, r, i), t.child)
    );
  }
  function ac(e, t, n, r, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !ys(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), cc(e, t, u, r, i))
        : ((e = ol(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !(e.lanes & i))) {
      var d = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Er), n(d, r) && e.ref === t.ref)
      )
        return Ut(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = an(u, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function cc(e, t, n, r, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Er(u, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = u), (e.lanes & i) !== 0))
          e.flags & 131072 && (qe = !0);
        else return (t.lanes = e.lanes), Ut(e, t, i);
    }
    return Yi(e, t, n, r, i);
  }
  function fc(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          he(Gn, ot),
          (ot |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            he(Gn, ot),
            (ot |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : n),
          he(Gn, ot),
          (ot |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        he(Gn, ot),
        (ot |= r);
    return We(e, t, i, n), t.child;
  }
  function dc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Yi(e, t, n, r, i) {
    var u = Ke(n) ? hn : $e.current;
    return (
      (u = Hn(t, u)),
      qn(t, i),
      (n = Ui(e, t, n, r, u, i)),
      (r = Bi()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ut(e, t, i))
        : (Se && r && Ei(t), (t.flags |= 1), We(e, t, n, i), t.child)
    );
  }
  function pc(e, t, n, r, i) {
    if (Ke(n)) {
      var u = !0;
      To(t);
    } else u = !1;
    if ((qn(t, i), t.stateNode === null))
      Ko(e, t), tc(t, n, r), Ki(t, n, r, i), (r = !0);
    else if (e === null) {
      var d = t.stateNode,
        m = t.memoizedProps;
      d.props = m;
      var v = d.context,
        j = n.contextType;
      typeof j == "object" && j !== null
        ? (j = at(j))
        : ((j = Ke(n) ? hn : $e.current), (j = Hn(t, j)));
      var F = n.getDerivedStateFromProps,
        $ =
          typeof F == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      $ ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((m !== r || v !== j) && nc(t, d, r, j)),
        (tn = !1);
      var z = t.memoizedState;
      (d.state = z),
        $o(t, r, d, i),
        (v = t.memoizedState),
        m !== r || z !== v || be.current || tn
          ? (typeof F == "function" && (bi(t, n, F, r), (v = t.memoizedState)),
            (m = tn || ec(t, n, m, r, z, v, j))
              ? ($ ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = v)),
            (d.props = r),
            (d.state = v),
            (d.context = j),
            (r = m))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (d = t.stateNode),
        Ta(e, t),
        (m = t.memoizedProps),
        (j = t.type === t.elementType ? m : yt(t.type, m)),
        (d.props = j),
        ($ = t.pendingProps),
        (z = d.context),
        (v = n.contextType),
        typeof v == "object" && v !== null
          ? (v = at(v))
          : ((v = Ke(n) ? hn : $e.current), (v = Hn(t, v)));
      var H = n.getDerivedStateFromProps;
      (F =
        typeof H == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((m !== $ || z !== v) && nc(t, d, r, v)),
        (tn = !1),
        (z = t.memoizedState),
        (d.state = z),
        $o(t, r, d, i);
      var Q = t.memoizedState;
      m !== $ || z !== Q || be.current || tn
        ? (typeof H == "function" && (bi(t, n, H, r), (Q = t.memoizedState)),
          (j = tn || ec(t, n, j, r, z, Q, v) || !1)
            ? (F ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(r, Q, v),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(r, Q, v)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (m === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (d.props = r),
          (d.state = Q),
          (d.context = v),
          (r = j))
        : (typeof d.componentDidUpdate != "function" ||
            (m === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Xi(e, t, n, r, u, i);
  }
  function Xi(e, t, n, r, i, u) {
    dc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return i && va(t, n, !1), Ut(e, t, u);
    (r = t.stateNode), (Hp.current = t);
    var m =
      d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = bn(t, e.child, null, u)), (t.child = bn(t, null, m, u)))
        : We(e, t, m, u),
      (t.memoizedState = r.state),
      i && va(t, n, !0),
      t.child
    );
  }
  function hc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ga(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ga(e, t.context, !1),
      Ai(e, t.containerInfo);
  }
  function mc(e, t, n, r, i) {
    return Qn(), _i(i), (t.flags |= 256), We(e, t, n, r), t.child;
  }
  var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function gc(e, t, n) {
    var r = t.pendingProps,
      i = ke.current,
      u = !1,
      d = (t.flags & 128) !== 0,
      m;
    if (
      ((m = d) ||
        (m = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      m
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      he(ke, i & 1),
      e === null)
    )
      return (
        Ni(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((d = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (d = { mode: "hidden", children: d }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = d))
                  : (u = ll(d, r, 0, null)),
                (e = Cn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Zi(n)),
                (t.memoizedState = Gi),
                e)
              : es(t, d))
      );
    if (((i = e.memoizedState), i !== null && ((m = i.dehydrated), m !== null)))
      return Wp(e, t, d, r, m, i, n);
    if (u) {
      (u = r.fallback), (d = t.mode), (i = e.child), (m = i.sibling);
      var v = { mode: "hidden", children: r.children };
      return (
        !(d & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = v),
            (t.deletions = null))
          : ((r = an(i, v)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        m !== null ? (u = an(m, u)) : ((u = Cn(u, d, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? Zi(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (u.memoizedState = d),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Gi),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = an(u, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function es(e, t) {
    return (
      (t = ll({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bo(e, t, n, r) {
    return (
      r !== null && _i(r),
      bn(t, e.child, null, n),
      (e = es(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wp(e, t, n, r, i, u, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qi(Error(s(422)))), bo(e, t, d, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = r.fallback),
          (i = t.mode),
          (r = ll({ mode: "visible", children: r.children }, i, 0, null)),
          (u = Cn(u, i, d, null)),
          (u.flags |= 2),
          (r.return = t),
          (u.return = t),
          (r.sibling = u),
          (t.child = r),
          t.mode & 1 && bn(t, e.child, null, d),
          (t.child.memoizedState = Zi(d)),
          (t.memoizedState = Gi),
          u);
    if (!(t.mode & 1)) return bo(e, t, d, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var m = r.dgst;
      return (
        (r = m), (u = Error(s(419))), (r = qi(u, r, void 0)), bo(e, t, d, r)
      );
    }
    if (((m = (d & e.childLanes) !== 0), qe || m)) {
      if (((r = Ae), r !== null)) {
        switch (d & -d) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | d) ? 0 : i),
          i !== 0 &&
            i !== u.retryLane &&
            ((u.retryLane = i), $t(e, i), xt(r, e, i, -1));
      }
      return gs(), (r = qi(Error(s(421)))), bo(e, t, d, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = nh.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (rt = Xt(i.nextSibling)),
        (nt = t),
        (Se = !0),
        (gt = null),
        e !== null &&
          ((st[ut++] = Dt),
          (st[ut++] = Ft),
          (st[ut++] = mn),
          (Dt = e.id),
          (Ft = e.overflow),
          (mn = t)),
        (t = es(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Li(e.return, t, n);
  }
  function ts(e, t, n, r, i) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = i));
  }
  function vc(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      u = r.tail;
    if ((We(e, t, r.children, n), (r = ke.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
          else if (e.tag === 19) yc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((he(ke, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Mo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            ts(t, !1, i, n, u);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Mo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          ts(t, !0, n, null, u);
          break;
        case "together":
          ts(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ko(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ut(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (xn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = an(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Vp(e, t, n) {
    switch (t.tag) {
      case 3:
        hc(t), Qn();
        break;
      case 5:
        Oa(t);
        break;
      case 1:
        Ke(t.type) && To(t);
        break;
      case 4:
        Ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        he(zo, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (he(ke, ke.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? gc(e, t, n)
            : (he(ke, ke.current & 1),
              (e = Ut(e, t, n)),
              e !== null ? e.sibling : null);
        he(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return vc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          he(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), fc(e, t, n);
    }
    return Ut(e, t, n);
  }
  var wc, ns, xc, Sc;
  (wc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ns = function () {}),
    (xc = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), vn(_t.current);
        var u = null;
        switch (n) {
          case "input":
            (i = Ll(e, i)), (r = Ll(e, r)), (u = []);
            break;
          case "select":
            (i = V({}, i, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (i = Al(e, i)), (r = Al(e, r)), (u = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = No);
        }
        Dl(n, r);
        var d;
        n = null;
        for (j in i)
          if (!r.hasOwnProperty(j) && i.hasOwnProperty(j) && i[j] != null)
            if (j === "style") {
              var m = i[j];
              for (d in m) m.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (c.hasOwnProperty(j)
                  ? u || (u = [])
                  : (u = u || []).push(j, null));
        for (j in r) {
          var v = r[j];
          if (
            ((m = i != null ? i[j] : void 0),
            r.hasOwnProperty(j) && v !== m && (v != null || m != null))
          )
            if (j === "style")
              if (m) {
                for (d in m)
                  !m.hasOwnProperty(d) ||
                    (v && v.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""));
                for (d in v)
                  v.hasOwnProperty(d) &&
                    m[d] !== v[d] &&
                    (n || (n = {}), (n[d] = v[d]));
              } else n || (u || (u = []), u.push(j, n)), (n = v);
            else
              j === "dangerouslySetInnerHTML"
                ? ((v = v ? v.__html : void 0),
                  (m = m ? m.__html : void 0),
                  v != null && m !== v && (u = u || []).push(j, v))
                : j === "children"
                ? (typeof v != "string" && typeof v != "number") ||
                  (u = u || []).push(j, "" + v)
                : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(j)
                    ? (v != null && j === "onScroll" && ve("scroll", e),
                      u || m === v || (u = []))
                    : (u = u || []).push(j, v));
        }
        n && (u = u || []).push("style", n);
        var j = u;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (Sc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function $r(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Qp(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ke(t.type) && Po(), Ue(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Jn(),
          we(be),
          we($e),
          Fi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Io(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), gt !== null && (ps(gt), (gt = null)))),
          ns(e, t),
          Ue(t),
          null
        );
      case 5:
        zi(t);
        var i = vn(Ir.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          xc(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ue(t), null;
          }
          if (((e = vn(_t.current)), Io(t))) {
            (r = t.stateNode), (n = t.type);
            var u = t.memoizedProps;
            switch (((r[Nt] = t), (r[Pr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ve("cancel", r), ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rr.length; i++) ve(Rr[i], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", r), ve("load", r);
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                tu(r, u), ve("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  ve("invalid", r);
                break;
              case "textarea":
                ou(r, u), ve("invalid", r);
            }
            Dl(n, u), (i = null);
            for (var d in u)
              if (u.hasOwnProperty(d)) {
                var m = u[d];
                d === "children"
                  ? typeof m == "string"
                    ? r.textContent !== m &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ro(r.textContent, m, e),
                      (i = ["children", m]))
                    : typeof m == "number" &&
                      r.textContent !== "" + m &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ro(r.textContent, m, e),
                      (i = ["children", "" + m]))
                  : c.hasOwnProperty(d) &&
                    m != null &&
                    d === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                to(r), ru(r, u, !0);
                break;
              case "textarea":
                to(r), iu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = No);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (d = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = su(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = d.createElement(n, { is: r.is }))
                  : ((e = d.createElement(n)),
                    n === "select" &&
                      ((d = e),
                      r.multiple
                        ? (d.multiple = !0)
                        : r.size && (d.size = r.size)))
                : (e = d.createElementNS(e, n)),
              (e[Nt] = t),
              (e[Pr] = r),
              wc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = Fl(n, r)), n)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Rr.length; i++) ve(Rr[i], e);
                  i = r;
                  break;
                case "source":
                  ve("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (i = r);
                  break;
                case "details":
                  ve("toggle", e), (i = r);
                  break;
                case "input":
                  tu(e, r), (i = Ll(e, r)), ve("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = V({}, r, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  ou(e, r), (i = Al(e, r)), ve("invalid", e);
                  break;
                default:
                  i = r;
              }
              Dl(n, i), (m = i);
              for (u in m)
                if (m.hasOwnProperty(u)) {
                  var v = m[u];
                  u === "style"
                    ? cu(e, v)
                    : u === "dangerouslySetInnerHTML"
                    ? ((v = v ? v.__html : void 0), v != null && uu(e, v))
                    : u === "children"
                    ? typeof v == "string"
                      ? (n !== "textarea" || v !== "") && ir(e, v)
                      : typeof v == "number" && ir(e, "" + v)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? v != null && u === "onScroll" && ve("scroll", e)
                        : v != null && b(e, u, v, d));
                }
              switch (n) {
                case "input":
                  to(e), ru(e, r, !1);
                  break;
                case "textarea":
                  to(e), iu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + fe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? jn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        jn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = No);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) Sc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = vn(Ir.current)), vn(_t.current), Io(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (u = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ro(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ro(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Nt] = t),
              (t.stateNode = r);
        }
        return Ue(t), null;
      case 13:
        if (
          (we(ke),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && rt !== null && t.mode & 1 && !(t.flags & 128))
            Ca(), Qn(), (t.flags |= 98560), (u = !1);
          else if (((u = Io(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[Nt] = t;
            } else
              Qn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (u = !1);
          } else gt !== null && (ps(gt), (gt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ke.current & 1 ? Le === 0 && (Le = 3) : gs())),
            t.updateQueue !== null && (t.flags |= 4),
            Ue(t),
            null);
      case 4:
        return (
          Jn(),
          ns(e, t),
          e === null && Nr(t.stateNode.containerInfo),
          Ue(t),
          null
        );
      case 10:
        return ji(t.type._context), Ue(t), null;
      case 17:
        return Ke(t.type) && Po(), Ue(t), null;
      case 19:
        if ((we(ke), (u = t.memoizedState), u === null)) return Ue(t), null;
        if (((r = (t.flags & 128) !== 0), (d = u.rendering), d === null))
          if (r) $r(u, !1);
          else {
            if (Le !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((d = Mo(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      $r(u, !1),
                      r = d.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (d = u.alternate),
                      d === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = d.childLanes),
                          (u.lanes = d.lanes),
                          (u.child = d.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = d.memoizedProps),
                          (u.memoizedState = d.memoizedState),
                          (u.updateQueue = d.updateQueue),
                          (u.type = d.type),
                          (e = d.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return he(ke, (ke.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              _e() > Zn &&
              ((t.flags |= 128), (r = !0), $r(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Mo(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                $r(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !Se)
              )
                return Ue(t), null;
            } else
              2 * _e() - u.renderingStartTime > Zn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), $r(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = u.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (u.last = d));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = _e()),
            (t.sibling = null),
            (n = ke.current),
            he(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          ms(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? ot & 1073741824 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function bp(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Ke(t.type) && Po(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Jn(),
          we(be),
          we($e),
          Fi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return zi(t), null;
      case 13:
        if (
          (we(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Qn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(ke), null;
      case 4:
        return Jn(), null;
      case 10:
        return ji(t.type._context), null;
      case 22:
      case 23:
        return ms(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var qo = !1,
    Be = !1,
    Kp = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ne(e, t, r);
        }
      else n.current = null;
  }
  function rs(e, t, n) {
    try {
      n();
    } catch (r) {
      Ne(e, t, r);
    }
  }
  var kc = !1;
  function qp(e, t) {
    if (((mi = ho), (e = ea()), si(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              m = -1,
              v = -1,
              j = 0,
              F = 0,
              $ = e,
              z = null;
            t: for (;;) {
              for (
                var H;
                $ !== n || (i !== 0 && $.nodeType !== 3) || (m = d + i),
                  $ !== u || (r !== 0 && $.nodeType !== 3) || (v = d + r),
                  $.nodeType === 3 && (d += $.nodeValue.length),
                  (H = $.firstChild) !== null;

              )
                (z = $), ($ = H);
              for (;;) {
                if ($ === e) break t;
                if (
                  (z === n && ++j === i && (m = d),
                  z === u && ++F === r && (v = d),
                  (H = $.nextSibling) !== null)
                )
                  break;
                ($ = z), (z = $.parentNode);
              }
              $ = H;
            }
            n = m === -1 || v === -1 ? null : { start: m, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      gi = { focusedElem: e, selectionRange: n }, ho = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var K = Q.memoizedProps,
                      Pe = Q.memoizedState,
                      C = t.stateNode,
                      x = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : yt(t.type, K),
                        Pe
                      );
                    C.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = "")
                    : N.nodeType === 9 &&
                      N.documentElement &&
                      N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (U) {
            Ne(t, t.return, U);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return (Q = kc), (kc = !1), Q;
  }
  function Mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var u = i.destroy;
          (i.destroy = void 0), u !== void 0 && rs(t, n, u);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Jo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function os(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ec(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ec(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[Pr],
          delete t[xi],
          delete t[jp],
          delete t[Lp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Cc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Rc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ls(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = No));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ls(e, t, n), e = e.sibling; e !== null; )
        ls(e, t, n), (e = e.sibling);
  }
  function is(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (is(e, t, n), e = e.sibling; e !== null; )
        is(e, t, n), (e = e.sibling);
  }
  var De = null,
    vt = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
  }
  function Nc(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(so, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Be || Xn(n, t);
      case 6:
        var r = De,
          i = vt;
        (De = null),
          rn(e, t, n),
          (De = r),
          (vt = i),
          De !== null &&
            (vt
              ? ((e = De),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : De.removeChild(n.stateNode));
        break;
      case 18:
        De !== null &&
          (vt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              yr(e))
            : wi(De, n.stateNode));
        break;
      case 4:
        (r = De),
          (i = vt),
          (De = n.stateNode.containerInfo),
          (vt = !0),
          rn(e, t, n),
          (De = r),
          (vt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var u = i,
              d = u.destroy;
            (u = u.tag),
              d !== void 0 && (u & 2 || u & 4) && rs(n, t, d),
              (i = i.next);
          } while (i !== r);
        }
        rn(e, t, n);
        break;
      case 1:
        if (
          !Be &&
          (Xn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (m) {
            Ne(n, t, m);
          }
        rn(e, t, n);
        break;
      case 21:
        rn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Be = (r = Be) || n.memoizedState !== null), rn(e, t, n), (Be = r))
          : rn(e, t, n);
        break;
      default:
        rn(e, t, n);
    }
  }
  function _c(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Kp()),
        t.forEach(function (r) {
          var i = rh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var u = e,
            d = t,
            m = d;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                (De = m.stateNode), (vt = !1);
                break e;
              case 3:
                (De = m.stateNode.containerInfo), (vt = !0);
                break e;
              case 4:
                (De = m.stateNode.containerInfo), (vt = !0);
                break e;
            }
            m = m.return;
          }
          if (De === null) throw Error(s(160));
          Nc(u, d, i), (De = null), (vt = !1);
          var v = i.alternate;
          v !== null && (v.return = null), (i.return = null);
        } catch (j) {
          Ne(i, t, j);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Pc(t, e), (t = t.sibling);
  }
  function Pc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), Tt(e), r & 4)) {
          try {
            Mr(3, e, e.return), Jo(3, e);
          } catch (K) {
            Ne(e, e.return, K);
          }
          try {
            Mr(5, e, e.return);
          } catch (K) {
            Ne(e, e.return, K);
          }
        }
        break;
      case 1:
        wt(t, e), Tt(e), r & 512 && n !== null && Xn(n, n.return);
        break;
      case 5:
        if (
          (wt(t, e),
          Tt(e),
          r & 512 && n !== null && Xn(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            ir(i, "");
          } catch (K) {
            Ne(e, e.return, K);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var u = e.memoizedProps,
            d = n !== null ? n.memoizedProps : u,
            m = e.type,
            v = e.updateQueue;
          if (((e.updateQueue = null), v !== null))
            try {
              m === "input" && u.type === "radio" && u.name != null && nu(i, u),
                Fl(m, d);
              var j = Fl(m, u);
              for (d = 0; d < v.length; d += 2) {
                var F = v[d],
                  $ = v[d + 1];
                F === "style"
                  ? cu(i, $)
                  : F === "dangerouslySetInnerHTML"
                  ? uu(i, $)
                  : F === "children"
                  ? ir(i, $)
                  : b(i, F, $, j);
              }
              switch (m) {
                case "input":
                  Ol(i, u);
                  break;
                case "textarea":
                  lu(i, u);
                  break;
                case "select":
                  var z = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!u.multiple;
                  var H = u.value;
                  H != null
                    ? jn(i, !!u.multiple, H, !1)
                    : z !== !!u.multiple &&
                      (u.defaultValue != null
                        ? jn(i, !!u.multiple, u.defaultValue, !0)
                        : jn(i, !!u.multiple, u.multiple ? [] : "", !1));
              }
              i[Pr] = u;
            } catch (K) {
              Ne(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Tt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (i = e.stateNode), (u = e.memoizedProps);
          try {
            i.nodeValue = u;
          } catch (K) {
            Ne(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (wt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            yr(t.containerInfo);
          } catch (K) {
            Ne(e, e.return, K);
          }
        break;
      case 4:
        wt(t, e), Tt(e);
        break;
      case 13:
        wt(t, e),
          Tt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((u = i.memoizedState !== null),
            (i.stateNode.isHidden = u),
            !u ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (as = _e())),
          r & 4 && _c(e);
        break;
      case 22:
        if (
          ((F = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Be = (j = Be) || F), wt(t, e), (Be = j)) : wt(t, e),
          Tt(e),
          r & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null),
            (e.stateNode.isHidden = j) && !F && e.mode & 1)
          )
            for (W = e, F = e.child; F !== null; ) {
              for ($ = W = F; W !== null; ) {
                switch (((z = W), (H = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mr(4, z, z.return);
                    break;
                  case 1:
                    Xn(z, z.return);
                    var Q = z.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      (r = z), (n = z.return);
                      try {
                        (t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount();
                      } catch (K) {
                        Ne(r, n, K);
                      }
                    }
                    break;
                  case 5:
                    Xn(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      Lc($);
                      continue;
                    }
                }
                H !== null ? ((H.return = z), (W = H)) : Lc($);
              }
              F = F.sibling;
            }
          e: for (F = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (F === null) {
                F = $;
                try {
                  (i = $.stateNode),
                    j
                      ? ((u = i.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((m = $.stateNode),
                        (v = $.memoizedProps.style),
                        (d =
                          v != null && v.hasOwnProperty("display")
                            ? v.display
                            : null),
                        (m.style.display = au("display", d)));
                } catch (K) {
                  Ne(e, e.return, K);
                }
              }
            } else if ($.tag === 6) {
              if (F === null)
                try {
                  $.stateNode.nodeValue = j ? "" : $.memoizedProps;
                } catch (K) {
                  Ne(e, e.return, K);
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              ($.child.return = $), ($ = $.child);
              continue;
            }
            if ($ === e) break e;
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e;
              F === $ && (F = null), ($ = $.return);
            }
            F === $ && (F = null),
              ($.sibling.return = $.return),
              ($ = $.sibling);
          }
        }
        break;
      case 19:
        wt(t, e), Tt(e), r & 4 && _c(e);
        break;
      case 21:
        break;
      default:
        wt(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Cc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (ir(i, ""), (r.flags &= -33));
            var u = Rc(e);
            is(e, u, i);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo,
              m = Rc(e);
            ls(e, m, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (v) {
        Ne(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jp(e, t, n) {
    (W = e), Tc(e);
  }
  function Tc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var i = W,
        u = i.child;
      if (i.tag === 22 && r) {
        var d = i.memoizedState !== null || qo;
        if (!d) {
          var m = i.alternate,
            v = (m !== null && m.memoizedState !== null) || Be;
          m = qo;
          var j = Be;
          if (((qo = d), (Be = v) && !j))
            for (W = i; W !== null; )
              (d = W),
                (v = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? Oc(i)
                  : v !== null
                  ? ((v.return = d), (W = v))
                  : Oc(i);
          for (; u !== null; ) (W = u), Tc(u), (u = u.sibling);
          (W = i), (qo = m), (Be = j);
        }
        jc(e);
      } else
        i.subtreeFlags & 8772 && u !== null ? ((u.return = i), (W = u)) : jc(e);
    }
  }
  function jc(e) {
    for (; W !== null; ) {
      var t = W;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Be || Jo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Be)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && La(t, u, r);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  La(t, d, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var v = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      v.autoFocus && n.focus();
                      break;
                    case "img":
                      v.src && (n.src = v.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var F = j.memoizedState;
                    if (F !== null) {
                      var $ = F.dehydrated;
                      $ !== null && yr($);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Be || (t.flags & 512 && os(t));
        } catch (z) {
          Ne(t, t.return, z);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Lc(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Oc(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Jo(4, t);
            } catch (v) {
              Ne(t, n, v);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (v) {
                Ne(t, i, v);
              }
            }
            var u = t.return;
            try {
              os(t);
            } catch (v) {
              Ne(t, u, v);
            }
            break;
          case 5:
            var d = t.return;
            try {
              os(t);
            } catch (v) {
              Ne(t, d, v);
            }
        }
      } catch (v) {
        Ne(t, t.return, v);
      }
      if (t === e) {
        W = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        (m.return = t.return), (W = m);
        break;
      }
      W = t.return;
    }
  }
  var Yp = Math.ceil,
    Yo = G.ReactCurrentDispatcher,
    ss = G.ReactCurrentOwner,
    ft = G.ReactCurrentBatchConfig,
    ie = 0,
    Ae = null,
    Te = null,
    Fe = 0,
    ot = 0,
    Gn = Gt(0),
    Le = 0,
    Ur = null,
    xn = 0,
    Xo = 0,
    us = 0,
    Br = null,
    Je = null,
    as = 0,
    Zn = 1 / 0,
    Bt = null,
    Go = !1,
    cs = null,
    on = null,
    Zo = !1,
    ln = null,
    el = 0,
    Hr = 0,
    fs = null,
    tl = -1,
    nl = 0;
  function Ve() {
    return ie & 6 ? _e() : tl !== -1 ? tl : (tl = _e());
  }
  function sn(e) {
    return e.mode & 1
      ? ie & 2 && Fe !== 0
        ? Fe & -Fe
        : Ip.transition !== null
        ? (nl === 0 && (nl = Ru()), nl)
        : ((e = de),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Au(e.type))),
          e)
      : 1;
  }
  function xt(e, t, n, r) {
    if (50 < Hr) throw ((Hr = 0), (fs = null), Error(s(185)));
    dr(e, n, r),
      (!(ie & 2) || e !== Ae) &&
        (e === Ae && (!(ie & 2) && (Xo |= n), Le === 4 && un(e, Fe)),
        Ye(e, r),
        n === 1 &&
          ie === 0 &&
          !(t.mode & 1) &&
          ((Zn = _e() + 500), jo && en()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    Id(e, t);
    var r = co(e, e === Ae ? Fe : 0);
    if (r === 0)
      n !== null && ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ku(n), t === 1))
        e.tag === 0 ? Op(Ac.bind(null, e)) : wa(Ac.bind(null, e)),
          Pp(function () {
            !(ie & 6) && en();
          }),
          (n = null);
      else {
        switch (Nu(r)) {
          case 1:
            n = Vl;
            break;
          case 4:
            n = Eu;
            break;
          case 16:
            n = io;
            break;
          case 536870912:
            n = Cu;
            break;
          default:
            n = io;
        }
        n = Hc(n, Ic.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ic(e, t) {
    if (((tl = -1), (nl = 0), ie & 6)) throw Error(s(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = co(e, e === Ae ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
      t = r;
      var i = ie;
      ie |= 2;
      var u = Dc();
      (Ae !== e || Fe !== t) && ((Bt = null), (Zn = _e() + 500), kn(e, t));
      do
        try {
          Zp();
          break;
        } catch (m) {
          zc(e, m);
        }
      while (!0);
      Ti(),
        (Yo.current = u),
        (ie = i),
        Te !== null ? (t = 0) : ((Ae = null), (Fe = 0), (t = Le));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = ds(e, i)))),
        t === 1)
      )
        throw ((n = Ur), kn(e, 0), un(e, r), Ye(e, _e()), n);
      if (t === 6) un(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !Xp(i) &&
            ((t = rl(e, r)),
            t === 2 && ((u = Ql(e)), u !== 0 && ((r = u), (t = ds(e, u)))),
            t === 1))
        )
          throw ((n = Ur), kn(e, 0), un(e, r), Ye(e, _e()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            En(e, Je, Bt);
            break;
          case 3:
            if (
              (un(e, r),
              (r & 130023424) === r && ((t = as + 500 - _e()), 10 < t))
            ) {
              if (co(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Ve(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = vi(En.bind(null, e, Je, Bt), t);
              break;
            }
            En(e, Je, Bt);
            break;
          case 4:
            if ((un(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var d = 31 - ht(r);
              (u = 1 << d), (d = t[d]), d > i && (i = d), (r &= ~u);
            }
            if (
              ((r = i),
              (r = _e() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Yp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = vi(En.bind(null, e, Je, Bt), r);
              break;
            }
            En(e, Je, Bt);
            break;
          case 5:
            En(e, Je, Bt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ye(e, _e()), e.callbackNode === n ? Ic.bind(null, e) : null;
  }
  function ds(e, t) {
    var n = Br;
    return (
      e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
      (e = rl(e, t)),
      e !== 2 && ((t = Je), (Je = n), t !== null && ps(t)),
      e
    );
  }
  function ps(e) {
    Je === null ? (Je = e) : Je.push.apply(Je, e);
  }
  function Xp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              u = i.getSnapshot;
            i = i.value;
            try {
              if (!mt(u(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function un(e, t) {
    for (
      t &= ~us,
        t &= ~Xo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ht(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ac(e) {
    if (ie & 6) throw Error(s(327));
    er();
    var t = co(e, 0);
    if (!(t & 1)) return Ye(e, _e()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = ds(e, r)));
    }
    if (n === 1) throw ((n = Ur), kn(e, 0), un(e, t), Ye(e, _e()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      En(e, Je, Bt),
      Ye(e, _e()),
      null
    );
  }
  function hs(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((Zn = _e() + 500), jo && en());
    }
  }
  function Sn(e) {
    ln !== null && ln.tag === 0 && !(ie & 6) && er();
    var t = ie;
    ie |= 1;
    var n = ft.transition,
      r = de;
    try {
      if (((ft.transition = null), (de = 1), e)) return e();
    } finally {
      (de = r), (ft.transition = n), (ie = t), !(ie & 6) && en();
    }
  }
  function ms() {
    (ot = Gn.current), we(Gn);
  }
  function kn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), _p(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Po();
            break;
          case 3:
            Jn(), we(be), we($e), Fi();
            break;
          case 5:
            zi(r);
            break;
          case 4:
            Jn();
            break;
          case 13:
            we(ke);
            break;
          case 19:
            we(ke);
            break;
          case 10:
            ji(r.type._context);
            break;
          case 22:
          case 23:
            ms();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (Te = e = an(e.current, null)),
      (Fe = ot = t),
      (Le = 0),
      (Ur = null),
      (us = Xo = xn = 0),
      (Je = Br = null),
      yn !== null)
    ) {
      for (t = 0; t < yn.length; t++)
        if (((n = yn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            u = n.pending;
          if (u !== null) {
            var d = u.next;
            (u.next = i), (r.next = d);
          }
          n.pending = r;
        }
      yn = null;
    }
    return e;
  }
  function zc(e, t) {
    do {
      var n = Te;
      try {
        if ((Ti(), (Uo.current = Vo), Bo)) {
          for (var r = Ee.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Bo = !1;
        }
        if (
          ((wn = 0),
          (Ie = je = Ee = null),
          (Ar = !1),
          (zr = 0),
          (ss.current = null),
          n === null || n.return === null)
        ) {
          (Le = 1), (Ur = t), (Te = null);
          break;
        }
        e: {
          var u = e,
            d = n.return,
            m = n,
            v = t;
          if (
            ((t = Fe),
            (m.flags |= 32768),
            v !== null && typeof v == "object" && typeof v.then == "function")
          ) {
            var j = v,
              F = m,
              $ = F.tag;
            if (!(F.mode & 1) && ($ === 0 || $ === 11 || $ === 15)) {
              var z = F.alternate;
              z
                ? ((F.updateQueue = z.updateQueue),
                  (F.memoizedState = z.memoizedState),
                  (F.lanes = z.lanes))
                : ((F.updateQueue = null), (F.memoizedState = null));
            }
            var H = ic(d);
            if (H !== null) {
              (H.flags &= -257),
                sc(H, d, m, u, t),
                H.mode & 1 && lc(u, j, t),
                (t = H),
                (v = j);
              var Q = t.updateQueue;
              if (Q === null) {
                var K = new Set();
                K.add(v), (t.updateQueue = K);
              } else Q.add(v);
              break e;
            } else {
              if (!(t & 1)) {
                lc(u, j, t), gs();
                break e;
              }
              v = Error(s(426));
            }
          } else if (Se && m.mode & 1) {
            var Pe = ic(d);
            if (Pe !== null) {
              !(Pe.flags & 65536) && (Pe.flags |= 256),
                sc(Pe, d, m, u, t),
                _i(Yn(v, m));
              break e;
            }
          }
          (u = v = Yn(v, m)),
            Le !== 4 && (Le = 2),
            Br === null ? (Br = [u]) : Br.push(u),
            (u = d);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var C = rc(u, v, t);
                ja(u, C);
                break e;
              case 1:
                m = v;
                var x = u.type,
                  N = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof x.getDerivedStateFromError == "function" ||
                    (N !== null &&
                      typeof N.componentDidCatch == "function" &&
                      (on === null || !on.has(N))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var U = oc(u, m, t);
                  ja(u, U);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        $c(n);
      } catch (q) {
        (t = q), Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dc() {
    var e = Yo.current;
    return (Yo.current = Vo), e === null ? Vo : e;
  }
  function gs() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      Ae === null || (!(xn & 268435455) && !(Xo & 268435455)) || un(Ae, Fe);
  }
  function rl(e, t) {
    var n = ie;
    ie |= 2;
    var r = Dc();
    (Ae !== e || Fe !== t) && ((Bt = null), kn(e, t));
    do
      try {
        Gp();
        break;
      } catch (i) {
        zc(e, i);
      }
    while (!0);
    if ((Ti(), (ie = n), (Yo.current = r), Te !== null)) throw Error(s(261));
    return (Ae = null), (Fe = 0), Le;
  }
  function Gp() {
    for (; Te !== null; ) Fc(Te);
  }
  function Zp() {
    for (; Te !== null && !Cd(); ) Fc(Te);
  }
  function Fc(e) {
    var t = Bc(e.alternate, e, ot);
    (e.memoizedProps = e.pendingProps),
      t === null ? $c(e) : (Te = t),
      (ss.current = null);
  }
  function $c(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = bp(n, t)), n !== null)) {
          (n.flags &= 32767), (Te = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Le = 6), (Te = null);
          return;
        }
      } else if (((n = Qp(n, t, ot)), n !== null)) {
        Te = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function En(e, t, n) {
    var r = de,
      i = ft.transition;
    try {
      (ft.transition = null), (de = 1), eh(e, t, n, r);
    } finally {
      (ft.transition = i), (de = r);
    }
    return null;
  }
  function eh(e, t, n, r) {
    do er();
    while (ln !== null);
    if (ie & 6) throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = n.lanes | n.childLanes;
    if (
      (Ad(e, u),
      e === Ae && ((Te = Ae = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Zo ||
        ((Zo = !0),
        Hc(io, function () {
          return er(), null;
        })),
      (u = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || u)
    ) {
      (u = ft.transition), (ft.transition = null);
      var d = de;
      de = 1;
      var m = ie;
      (ie |= 4),
        (ss.current = null),
        qp(e, n),
        Pc(n, e),
        xp(gi),
        (ho = !!mi),
        (gi = mi = null),
        (e.current = n),
        Jp(n),
        Rd(),
        (ie = m),
        (de = d),
        (ft.transition = u);
    } else e.current = n;
    if (
      (Zo && ((Zo = !1), (ln = e), (el = i)),
      (u = e.pendingLanes),
      u === 0 && (on = null),
      Pd(n.stateNode),
      Ye(e, _e()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Go) throw ((Go = !1), (e = cs), (cs = null), e);
    return (
      el & 1 && e.tag !== 0 && er(),
      (u = e.pendingLanes),
      u & 1 ? (e === fs ? Hr++ : ((Hr = 0), (fs = e))) : (Hr = 0),
      en(),
      null
    );
  }
  function er() {
    if (ln !== null) {
      var e = Nu(el),
        t = ft.transition,
        n = de;
      try {
        if (((ft.transition = null), (de = 16 > e ? 16 : e), ln === null))
          var r = !1;
        else {
          if (((e = ln), (ln = null), (el = 0), ie & 6)) throw Error(s(331));
          var i = ie;
          for (ie |= 4, W = e.current; W !== null; ) {
            var u = W,
              d = u.child;
            if (W.flags & 16) {
              var m = u.deletions;
              if (m !== null) {
                for (var v = 0; v < m.length; v++) {
                  var j = m[v];
                  for (W = j; W !== null; ) {
                    var F = W;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mr(8, F, u);
                    }
                    var $ = F.child;
                    if ($ !== null) ($.return = F), (W = $);
                    else
                      for (; W !== null; ) {
                        F = W;
                        var z = F.sibling,
                          H = F.return;
                        if ((Ec(F), F === j)) {
                          W = null;
                          break;
                        }
                        if (z !== null) {
                          (z.return = H), (W = z);
                          break;
                        }
                        W = H;
                      }
                  }
                }
                var Q = u.alternate;
                if (Q !== null) {
                  var K = Q.child;
                  if (K !== null) {
                    Q.child = null;
                    do {
                      var Pe = K.sibling;
                      (K.sibling = null), (K = Pe);
                    } while (K !== null);
                  }
                }
                W = u;
              }
            }
            if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (W = d);
            else
              e: for (; W !== null; ) {
                if (((u = W), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(9, u, u.return);
                  }
                var C = u.sibling;
                if (C !== null) {
                  (C.return = u.return), (W = C);
                  break e;
                }
                W = u.return;
              }
          }
          var x = e.current;
          for (W = x; W !== null; ) {
            d = W;
            var N = d.child;
            if (d.subtreeFlags & 2064 && N !== null) (N.return = d), (W = N);
            else
              e: for (d = x; W !== null; ) {
                if (((m = W), m.flags & 2048))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jo(9, m);
                    }
                  } catch (q) {
                    Ne(m, m.return, q);
                  }
                if (m === d) {
                  W = null;
                  break e;
                }
                var U = m.sibling;
                if (U !== null) {
                  (U.return = m.return), (W = U);
                  break e;
                }
                W = m.return;
              }
          }
          if (
            ((ie = i),
            en(),
            Rt && typeof Rt.onPostCommitFiberRoot == "function")
          )
            try {
              Rt.onPostCommitFiberRoot(so, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (de = n), (ft.transition = t);
      }
    }
    return !1;
  }
  function Mc(e, t, n) {
    (t = Yn(n, t)),
      (t = rc(e, t, 1)),
      (e = nn(e, t, 1)),
      (t = Ve()),
      e !== null && (dr(e, 1, t), Ye(e, t));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) Mc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (on === null || !on.has(r)))
          ) {
            (e = Yn(n, e)),
              (e = oc(t, e, 1)),
              (t = nn(t, e, 1)),
              (e = Ve()),
              t !== null && (dr(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function th(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (Fe & n) === n &&
        (Le === 4 || (Le === 3 && (Fe & 130023424) === Fe && 500 > _e() - as)
          ? kn(e, 0)
          : (us |= n)),
      Ye(e, t);
  }
  function Uc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = ao), (ao <<= 1), !(ao & 130023424) && (ao = 4194304))
        : (t = 1));
    var n = Ve();
    (e = $t(e, t)), e !== null && (dr(e, t, n), Ye(e, n));
  }
  function nh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Uc(e, n);
  }
  function rh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Uc(e, n);
  }
  var Bc;
  Bc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || be.current) qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Vp(e, t, n);
        qe = !!(e.flags & 131072);
      }
    else (qe = !1), Se && t.flags & 1048576 && xa(t, Oo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ko(e, t), (e = t.pendingProps);
        var i = Hn(t, $e.current);
        qn(t, n), (i = Ui(null, t, r, e, i, n));
        var u = Bi();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ke(r) ? ((u = !0), To(t)) : (u = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Ii(t),
              (i.updater = Qo),
              (t.stateNode = i),
              (i._reactInternals = t),
              Ki(t, r, e, n),
              (t = Xi(null, t, r, !0, u, n)))
            : ((t.tag = 0), Se && u && Ei(t), We(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ko(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = lh(r)),
            (e = yt(r, e)),
            i)
          ) {
            case 0:
              t = Yi(null, t, r, e, n);
              break e;
            case 1:
              t = pc(null, t, r, e, n);
              break e;
            case 11:
              t = uc(null, t, r, e, n);
              break e;
            case 14:
              t = ac(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          Yi(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          pc(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((hc(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (u = t.memoizedState),
            (i = u.element),
            Ta(e, t),
            $o(t, r, null, n);
          var d = t.memoizedState;
          if (((r = d.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (i = Yn(Error(s(423)), t)), (t = mc(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Yn(Error(s(424)), t)), (t = mc(e, t, r, n, i));
              break e;
            } else
              for (
                rt = Xt(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  Se = !0,
                  gt = null,
                  n = _a(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Qn(), r === i)) {
              t = Ut(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Oa(t),
          e === null && Ni(t),
          (r = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (d = i.children),
          yi(r, i) ? (d = null) : u !== null && yi(r, u) && (t.flags |= 32),
          dc(e, t),
          We(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && Ni(t), null;
      case 13:
        return gc(e, t, n);
      case 4:
        return (
          Ai(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = bn(t, null, r, n)) : We(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          uc(e, t, r, i, n)
        );
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (u = t.memoizedProps),
            (d = i.value),
            he(zo, r._currentValue),
            (r._currentValue = d),
            u !== null)
          )
            if (mt(u.value, d)) {
              if (u.children === i.children && !be.current) {
                t = Ut(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var m = u.dependencies;
                if (m !== null) {
                  d = u.child;
                  for (var v = m.firstContext; v !== null; ) {
                    if (v.context === r) {
                      if (u.tag === 1) {
                        (v = Mt(-1, n & -n)), (v.tag = 2);
                        var j = u.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var F = j.pending;
                          F === null
                            ? (v.next = v)
                            : ((v.next = F.next), (F.next = v)),
                            (j.pending = v);
                        }
                      }
                      (u.lanes |= n),
                        (v = u.alternate),
                        v !== null && (v.lanes |= n),
                        Li(u.return, n, t),
                        (m.lanes |= n);
                      break;
                    }
                    v = v.next;
                  }
                } else if (u.tag === 10) d = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((d = u.return), d === null)) throw Error(s(341));
                  (d.lanes |= n),
                    (m = d.alternate),
                    m !== null && (m.lanes |= n),
                    Li(d, n, t),
                    (d = u.sibling);
                } else d = u.child;
                if (d !== null) d.return = u;
                else
                  for (d = u; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((u = d.sibling), u !== null)) {
                      (u.return = d.return), (d = u);
                      break;
                    }
                    d = d.return;
                  }
                u = d;
              }
          We(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          qn(t, n),
          (i = at(i)),
          (r = r(i)),
          (t.flags |= 1),
          We(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = yt(r, t.pendingProps)),
          (i = yt(r.type, i)),
          ac(e, t, r, i, n)
        );
      case 15:
        return cc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          Ko(e, t),
          (t.tag = 1),
          Ke(r) ? ((e = !0), To(t)) : (e = !1),
          qn(t, n),
          tc(t, r, i),
          Ki(t, r, i, n),
          Xi(null, t, r, !0, e, n)
        );
      case 19:
        return vc(e, t, n);
      case 22:
        return fc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Hc(e, t) {
    return Su(e, t);
  }
  function oh(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, r) {
    return new oh(e, t, n, r);
  }
  function ys(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function lh(e) {
    if (typeof e == "function") return ys(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Et)) return 11;
      if (e === Ct) return 14;
    }
    return 2;
  }
  function an(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ol(e, t, n, r, i, u) {
    var d = 2;
    if (((r = e), typeof e == "function")) ys(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case ce:
          return Cn(n.children, i, u, t);
        case ge:
          (d = 8), (i |= 8);
          break;
        case ye:
          return (
            (e = dt(12, n, t, i | 2)), (e.elementType = ye), (e.lanes = u), e
          );
        case Ze:
          return (e = dt(13, n, t, i)), (e.elementType = Ze), (e.lanes = u), e;
        case pt:
          return (e = dt(19, n, t, i)), (e.elementType = pt), (e.lanes = u), e;
        case Re:
          return ll(n, i, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Oe:
                d = 10;
                break e;
              case kt:
                d = 9;
                break e;
              case Et:
                d = 11;
                break e;
              case Ct:
                d = 14;
                break e;
              case Qe:
                (d = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(d, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = u), t
    );
  }
  function Cn(e, t, n, r) {
    return (e = dt(7, e, r, t)), (e.lanes = n), e;
  }
  function ll(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = Re),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function vs(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function ws(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ih(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = bl(0)),
      (this.expirationTimes = bl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function xs(e, t, n, r, i, u, d, m, v) {
    return (
      (e = new ih(e, t, n, m, v)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = dt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ii(u),
      e
    );
  }
  function sh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Wc(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
      if (dn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return ya(e, n, t);
    }
    return t;
  }
  function Vc(e, t, n, r, i, u, d, m, v) {
    return (
      (e = xs(n, r, !0, e, i, u, d, m, v)),
      (e.context = Wc(null)),
      (n = e.current),
      (r = Ve()),
      (i = sn(n)),
      (u = Mt(r, i)),
      (u.callback = t ?? null),
      nn(n, u, i),
      (e.current.lanes = i),
      dr(e, i, r),
      Ye(e, r),
      e
    );
  }
  function il(e, t, n, r) {
    var i = t.current,
      u = Ve(),
      d = sn(i);
    return (
      (n = Wc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Mt(u, d)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = nn(i, t, d)),
      e !== null && (xt(e, i, d, u), Fo(e, i, d)),
      d
    );
  }
  function sl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ss(e, t) {
    Qc(e, t), (e = e.alternate) && Qc(e, t);
  }
  function uh() {
    return null;
  }
  var bc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ks(e) {
    this._internalRoot = e;
  }
  (ul.prototype.render = ks.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      il(e, t, null, null);
    }),
    (ul.prototype.unmount = ks.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Sn(function () {
            il(null, e, null, null);
          }),
            (t[At] = null);
        }
      });
  function ul(e) {
    this._internalRoot = e;
  }
  ul.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
      qt.splice(n, 0, e), n === 0 && Ou(e);
    }
  };
  function Es(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function al(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Kc() {}
  function ah(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var j = sl(d);
          u.call(j);
        };
      }
      var d = Vc(t, r, e, 0, null, !1, !1, "", Kc);
      return (
        (e._reactRootContainer = d),
        (e[At] = d.current),
        Nr(e.nodeType === 8 ? e.parentNode : e),
        Sn(),
        d
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var m = r;
      r = function () {
        var j = sl(v);
        m.call(j);
      };
    }
    var v = xs(e, 0, !1, null, null, !1, !1, "", Kc);
    return (
      (e._reactRootContainer = v),
      (e[At] = v.current),
      Nr(e.nodeType === 8 ? e.parentNode : e),
      Sn(function () {
        il(t, v, n, r);
      }),
      v
    );
  }
  function cl(e, t, n, r, i) {
    var u = n._reactRootContainer;
    if (u) {
      var d = u;
      if (typeof i == "function") {
        var m = i;
        i = function () {
          var v = sl(d);
          m.call(v);
        };
      }
      il(t, d, e, i);
    } else d = ah(n, t, e, i, r);
    return sl(d);
  }
  (_u = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fr(t.pendingLanes);
          n !== 0 &&
            (Kl(t, n | 1), Ye(t, _e()), !(ie & 6) && ((Zn = _e() + 500), en()));
        }
        break;
      case 13:
        Sn(function () {
          var r = $t(e, 1);
          if (r !== null) {
            var i = Ve();
            xt(r, e, 1, i);
          }
        }),
          Ss(e, 1);
    }
  }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = $t(e, 134217728);
        if (t !== null) {
          var n = Ve();
          xt(t, e, 134217728, n);
        }
        Ss(e, 134217728);
      }
    }),
    (Pu = function (e) {
      if (e.tag === 13) {
        var t = sn(e),
          n = $t(e, t);
        if (n !== null) {
          var r = Ve();
          xt(n, e, t, r);
        }
        Ss(e, t);
      }
    }),
    (Tu = function () {
      return de;
    }),
    (ju = function (e, t) {
      var n = de;
      try {
        return (de = e), t();
      } finally {
        de = n;
      }
    }),
    (Ul = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = _o(r);
                if (!i) throw Error(s(90));
                eu(r), Ol(r, i);
              }
            }
          }
          break;
        case "textarea":
          lu(e, n);
          break;
        case "select":
          (t = n.value), t != null && jn(e, !!n.multiple, t, !1);
      }
    }),
    (hu = hs),
    (mu = Sn);
  var ch = { usingClientEntryPoint: !1, Events: [Tr, Un, _o, du, pu, hs] },
    Wr = {
      findFiberByHostInstance: pn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    fh = {
      bundleType: Wr.bundleType,
      version: Wr.version,
      rendererPackageName: Wr.rendererPackageName,
      rendererConfig: Wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: G.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = wu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Wr.findFiberByHostInstance || uh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber)
      try {
        (so = fl.inject(fh)), (Rt = fl);
      } catch {}
  }
  return (
    (Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch),
    (Xe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Es(t)) throw Error(s(200));
      return sh(e, t, null, n);
    }),
    (Xe.createRoot = function (e, t) {
      if (!Es(e)) throw Error(s(299));
      var n = !1,
        r = "",
        i = bc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = xs(e, 1, !1, null, null, n, !1, r, i)),
        (e[At] = t.current),
        Nr(e.nodeType === 8 ? e.parentNode : e),
        new ks(t)
      );
    }),
    (Xe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = wu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Xe.flushSync = function (e) {
      return Sn(e);
    }),
    (Xe.hydrate = function (e, t, n) {
      if (!al(t)) throw Error(s(200));
      return cl(null, e, t, !0, n);
    }),
    (Xe.hydrateRoot = function (e, t, n) {
      if (!Es(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        u = "",
        d = bc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = Vc(t, null, e, 1, n ?? null, i, !1, u, d)),
        (e[At] = t.current),
        Nr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new ul(t);
    }),
    (Xe.render = function (e, t, n) {
      if (!al(t)) throw Error(s(200));
      return cl(null, e, t, !1, n);
    }),
    (Xe.unmountComponentAtNode = function (e) {
      if (!al(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Sn(function () {
            cl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[At] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Xe.unstable_batchedUpdates = hs),
    (Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!al(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return cl(e, t, n, !1, r);
    }),
    (Xe.version = "18.3.1-next-f1338f8080-20240426"),
    Xe
  );
}
var tf;
function wh() {
  if (tf) return Ns.exports;
  tf = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (l) {
        console.error(l);
      }
  }
  return o(), (Ns.exports = vh()), Ns.exports;
}
var nf;
function xh() {
  if (nf) return dl;
  nf = 1;
  var o = wh();
  return (dl.createRoot = o.createRoot), (dl.hydrateRoot = o.hydrateRoot), dl;
}
var Sh = xh();
console.log("data.js");
const Ht = "http://localhost:8000/",
  kh = "Al  Quran  learning , developed by RARE academy with Masum",
  Ts = [
    {
      theme: "Calm Learning",
      combinations: [
        {
          backgroundColor: "bg-blue-50",
          textColor: "text-blue-800",
          description: "Soft blue & deep blue",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green & dark green",
        },
        {
          backgroundColor: "bg-yellow-100",
          textColor: "text-gray-900",
          description: "Light yellow & dark gray",
        },
      ],
    },
    {
      theme: "High Contrast",
      combinations: [
        {
          backgroundColor: "bg-white",
          textColor: "text-black",
          description: "Classic black & white",
        },
        {
          backgroundColor: "bg-gray-100",
          textColor: "text-indigo-800",
          description: "Light gray & deep indigo",
        },
        {
          backgroundColor: "bg-yellow-50",
          textColor: "text-purple-900",
          description: "Soft yellow & deep purple",
        },
      ],
    },
    {
      theme: "Pastel Soft",
      combinations: [
        {
          backgroundColor: "bg-pink-50",
          textColor: "text-pink-900",
          description: "Soft pink & deep pink",
        },
        {
          backgroundColor: "bg-blue-100",
          textColor: "text-blue-900",
          description: "Light blue & deep blue",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green & dark green",
        },
      ],
    },
  ],
  lt = {
    "": { title: "বর্ণমালা", diacritics: [] },
    Harakat: {
      title: "হরকত",
      diacritics: [
        {
          name: "Fathah",
          title: "যবর",
          symbol: "َ",
          unicode: "U+064E",
          description: "Short 'a' sound",
          pages: [
            {
              name: "Words",
              title: "যবরযুক্ত শব্দ",
              column: ["শেষে", "মধ্যে", "শুরুতে"],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
        {
          name: "Kasrah",
          title: "যের",
          symbol: "ِ",
          unicode: "U+0650",
          description: "Short 'i' sound",
          pages: [
            {
              name: "Words",
              title: "যেরযুক্ত শব্দ",
              column: ["", "", "উদাহরন"],
              columnEn: ["", "", "start"],
            },
          ],
        },
        {
          name: "Dhammah",
          title: "পেশ",
          symbol: "ُ",
          unicode: "U+064F",
          description: "Short 'u' sound",
          pages: [
            {
              name: "Words",
              title: "পেশযুক্ত শব্দ",
              column: ["", "", "উদাহরন"],
              columnEn: ["", "", "start"],
            },
          ],
        },
      ],
    },
    Tanween: {
      title: "তানভীন",
      diacritics: [
        {
          name: "FathahTanween",
          title: "দুই যবর",
          symbol: "ً",
          unicode: "U+064B",
          description: "Indicates 'an' sound (tanween)",
          pages: [
            {
              name: "Words",
              title: "দুই যবরযুক্ত শব্দ",
              column: ["", "", "দুই যবর"],
              columnEn: ["", "", "start"],
            },
          ],
        },
        {
          name: "KasrahTanween",
          title: "দুই যের",
          symbol: "ٍ",
          unicode: "U+064D",
          description: "Indicates 'in' sound (tanween)",
          pages: [
            {
              name: "Words",
              title: "দুই যেরযুক্ত শব্দ",
              column: ["", "দুই যের", ""],
              columnEn: ["", "middle", ""],
            },
          ],
        },
        {
          name: "DhammahTanween",
          title: "দুই পেশ",
          symbol: "ٌ",
          unicode: "U+064C",
          description: "Indicates 'un' sound (tanween)",
          pages: [
            {
              name: "Words",
              title: "দুই পেশযুক্ত শব্দ",
              column: ["দুই পেশ", "", ""],
              columnEn: ["end", "", ""],
            },
          ],
        },
      ],
    },
    Madd: {
      title: "মদ",
      diacritics: [
        {
          name: "AlifMadd",
          title: "আলিফ মদ / খাড়া যবর",
          symbol: "ٗ",
          unicode: "U+0670",
          description: "Represents a prolonged vowel sound",
          pages: [
            {
              name: "Words",
              title: "আলিফ মাদ্দযুক্ত শব্দ",
              column: ["শেষে", "মধ্যে", "শুরুতে"],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
        {
          name: "YaaMadd",
          title: "ইয়া মদ / খাড়া যের",
          symbol: "ٖ",
          unicode: "U+0656",
          description: "Represents a prolonged vowel sound",
          pages: [
            {
              name: "Words",
              title: "ইয়া মাদ্দযুক্ত শব্দ",
              column: ["শেষে", "মধ্যে", "শুরুতে"],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
        {
          name: "WaaoMadd",
          title: "ওয়াও মদ / উল্টা পেশ",
          symbol: "ٗ",
          unicode: "U+0657",
          description: "Represents a prolonged vowel sound",
          pages: [
            {
              name: "Words",
              title: "ওয়াও মাদ্দযুক্ত শব্দ",
              column: ["শেষে", "মধ্যে", "শুরুতে"],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
      ],
    },
    others: {
      title: "সাকিন & তাশদীদ",
      diacritics: [
        {
          name: "Saakinah",
          title: "সাকিন",
          symbol: "ْ",
          unicode: "U+0652",
          description: "No vowel (silent letter)",
          pages: [
            {
              name: "Words",
              title: "সাকিনযুক্ত শব্দ",
              column: ["শেষে", "মধ্যে", "শুরুতে"],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
        {
          name: "AshShaddah",
          title: "তাশদীদ",
          symbol: "ّ",
          unicode: "U+0651",
          description: "Indicates doubling (gemination)",
          pages: [
            {
              name: "Words_harakat",
              title: "তাশদীদ এবং হারকাত যুক্ত শব্দ",
              column: ["দ্বাম্মাহ এর সাথে", "কাসরাহ এর সাথে", "ফাতহাহ এর সাথে"],
              columnEn: ["end", "middle", "start"],
            },
            {
              name: "Words_tanween",
              title: "তাশদীদ এবং তানভীন যুক্ত শব্দ",
              column: [
                "দ্বাম্মাহ তানভীনের সাথে",
                "কাসরাহ তানভীনের সাথে",
                "ফাতহাহ তানভীনের সাথে",
              ],
              columnEn: ["end", "middle", "start"],
            },
            {
              name: "Words_madd",
              title: "তাশদীদ এবং মাদ্দ যুক্ত শব্দ",
              column: [
                "ওয়াও মাদ্দ এর সাথে",
                "ইয়া মাদ্দ এর সাথে",
                "আলিফ মাদ্দ এর সাথে",
              ],
              columnEn: ["end", "middle", "start"],
            },
          ],
        },
      ],
    },
  };
async function rf(o, l, s = "POST", a = null) {
  try {
    console.log(a);
    const c = {
      method: s,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${a}`,
      },
    };
    s !== "DELETE" && (c.body = JSON.stringify(o));
    const f = await fetch(l, c);
    if (!f.ok) throw new Error("Network response was not ok");
    const p = await f.json();
    console.log("Data sent successfully:", p), location.reload();
  } catch (c) {
    console.error("Error sending data:", c);
  }
}
async function wl(o) {
  try {
    const l = await fetch(o);
    if (!l.ok) throw new Error("Network response was not ok");
    const s = await l.json();
    return s;
  } catch (l) {
    return console.error("Error sending data:", l), null;
  }
}
function Pf({
  selectedColor: o = {
    backgroundColor: "bg-blue-50",
    textColor: "text-blue-800",
    description: "Soft blue & deep blue",
  },
  isSaddah: l = !1,
  isAllDiacritics: s = !1,
  preAlphabetDiacriticsUnicode: a,
  setPreAlphabetDiacriticsUnicode: c,
  preAlphabet: f,
  setPreAlphabet: p,
  postAlphabetDiacriticsUnicode: h,
  setPostAlphabetDiacriticsUnicode: y,
  word: g,
  setWord: w,
  children: _,
  arabicAlphabet: R,
}) {
  console.log("SideBar.jsx"), console.log(g);
  let I = 0;
  return (
    `${o.textColor.slice(4)}`,
    S.jsxs(
      "div",
      {
        className: "flex w-64  ",
        children: [
          S.jsx("div", { className: "flex flex-row h-[250px]" }),
          S.jsx("div", {
            children: R.slice(0, 18).map((k, T) =>
              S.jsx(
                "button",
                {
                  onClick: () => {
                    p(k), w((P) => P + k.alphabet);
                  },
                  className: `rtl p-4 m-1 mb-0 h-[2px] w-16
          ${o.backgroundColor} 
          text-xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                  children: k.alphabet,
                },
                `item-${I}-${T}`
              )
            ),
          }),
          S.jsx("div", {
            children: R.slice(18).map((k, T) =>
              S.jsx(
                "button",
                {
                  onClick: () => {
                    p(k), w((P) => P + k.alphabet);
                  },
                  className: `rtl p-4 m-1 mb-0 h-[2px] w-16
          ${o.backgroundColor} 
          text-xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                  children: k.alphabet,
                },
                `item-${I}-${T}`
              )
            ),
          }),
          S.jsxs("div", {
            children: [
              !s &&
                S.jsx("div", {
                  children: lt.Harakat.diacritics.map((k, T) =>
                    S.jsx(
                      "button",
                      {
                        onClick: () => c(k.unicode.slice(2)),
                        className: `rtl p-4 m-1 mb-0 h-[40px] w-16 bg-gray-300
          ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                        children:
                          "-" +
                          String.fromCodePoint(
                            parseInt(k.unicode.slice(2), 16)
                          ),
                      },
                      `item-${I}-${T}`
                    )
                  ),
                }),
              (l || s) &&
                S.jsxs("div", {
                  children: [
                    lt.Harakat.diacritics.map((k, T) =>
                      S.jsx(
                        "button",
                        {
                          onClick: () => {
                            const P = k.unicode.slice(2);
                            y(P),
                              w(
                                (A) => A + String.fromCodePoint(parseInt(P, 16))
                              );
                          },
                          className: `rtl p-4 m-1 mb-0 h-[40px] w-16 
          ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                          children:
                            "-" +
                            String.fromCodePoint(
                              parseInt(k.unicode.slice(2), 16)
                            ),
                        },
                        `item-${I}-${T}`
                      )
                    ),
                    lt.Tanween.diacritics.map((k, T) =>
                      S.jsx(
                        "button",
                        {
                          onClick: () => {
                            const P = k.unicode.slice(2);
                            y(P),
                              w(
                                (A) => A + String.fromCodePoint(parseInt(P, 16))
                              );
                          },
                          className: `rtl p-4 m-1 mb-0 h-[40px] w-16
          ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                          children:
                            "-" +
                            String.fromCodePoint(
                              parseInt(k.unicode.slice(2), 16)
                            ),
                        },
                        `item-${I}-${T}`
                      )
                    ),
                    lt.Madd.diacritics.map((k, T) =>
                      S.jsx(
                        "button",
                        {
                          onClick: () => {
                            const P = k.unicode.slice(2);
                            y(P),
                              w(
                                (A) => A + String.fromCodePoint(parseInt(P, 16))
                              );
                          },
                          className: `rtl p-4 m-1 mb-0 h-[40px] w-16
          ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                          children:
                            "-" +
                            String.fromCodePoint(
                              parseInt(k.unicode.slice(2), 16)
                            ),
                        },
                        `item-${I}-${T}`
                      )
                    ),
                    s &&
                      lt.others.diacritics.map((k, T) =>
                        S.jsx(
                          "button",
                          {
                            onClick: () => {
                              const P = k.unicode.slice(2);
                              y(P),
                                w(
                                  (A) =>
                                    A + String.fromCodePoint(parseInt(P, 16))
                                );
                            },
                            className: `rtl p-4 m-1 mb-0 h-[40px] w-16
          ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
                            children:
                              "-" +
                              String.fromCodePoint(
                                parseInt(k.unicode.slice(2), 16)
                              ),
                          },
                          `item-${I}-${T}`
                        )
                      ),
                    _,
                  ],
                }),
            ],
          }),
        ],
      },
      I
    )
  );
}
function of({
  arabicAlphabet: o,
  selectedColor: l,
  arabicAlphabetDiacritics: s = "",
  withHoverChildren: a = !1,
  isSaddah: c = !1,
  isSaakinah: f = !1,
  title: p,
}) {
  const [h, y] = L.useState(""),
    [g, w] = L.useState(""),
    [_, R] = L.useState("");
  let I = 0;
  return (
    console.log("LetterCard.jsx"),
    console.log(o),
    S.jsxs(S.Fragment, {
      children: [
        S.jsxs(
          "div",
          {
            className: "flex flex-wrap w-[100%] space-x-1 m-4 ",
            children: [
              S.jsx("div", {
                className: `font-bangla flex  justify-center items-center space-x-4 text-center text-2xl w-[100%] m-2 max-h-[150px] ${l.backgroundColor} ${l.textColor}`,
                children: S.jsxs("span", {
                  className: "text-3xl text-center",
                  children: [
                    "আরবী বর্ণমালা ",
                    " ",
                    S.jsxs("span", {
                      className: "text-3xl",
                      children: [p, " "],
                    }),
                    s && "-" + String.fromCodePoint(parseInt(s, 16)) + "  দিয়ে",
                  ],
                }),
              }),
              S.jsx("div", {
                className:
                  "flex flex-0 flex-wrap flex-row-reverse w-[100%] space-x-1 m-4",
                children: o
                  .filter((k) => k.extra != 1)
                  .map((k, T) =>
                    S.jsx(
                      "div",
                      {
                        className: " group flex-grow",
                        children: S.jsxs(
                          "div",
                          {
                            className: `rtl p-10 m-1 w-auto h-auto
            ${l.backgroundColor} 
            text-8xl text-center 
            ${l.textColor} rounded-lg`,
                            children: [
                              g && g,
                              g && h && String.fromCodePoint(parseInt(h, 16)),
                              k.alphabet,
                              s && String.fromCodePoint(parseInt(s, 16)),
                              _ && String.fromCodePoint(parseInt(_, 16)),
                              a &&
                                S.jsxs(
                                  "div",
                                  {
                                    dir: "rtl",
                                    className:
                                      "text-2xl text-left opacity-0 group-hover:opacity-100 font-bangla",
                                    children: [
                                      S.jsx("br", {}),
                                      S.jsx("span", {
                                        className: "text-right",
                                        children: k.alphabet_name,
                                      }),
                                      S.jsx("span", { children: "     " }),
                                      S.jsx("span", {
                                        className: "text-left",
                                        children: k.alphabet_banglaname,
                                      }),
                                    ],
                                  },
                                  `itemName-${I}-${T}`
                                ),
                            ],
                          },
                          `item-${I}-${T}`
                        ),
                      },
                      `container-${I}-${T}`
                    )
                  ),
              }),
              S.jsx("div", {
                className: `flex font-bangla justify-center items-center space-x-4 text-center text-2xl w-[100%] m-2 max-h-[150px] ${l.backgroundColor} ${l.textColor}`,
                children: kh,
              }),
            ],
          },
          I
        ),
        S.jsx("aside", {
          children:
            f &&
            S.jsx(Pf, {
              selectedColor: l,
              preAlphabetDiacriticsUnicode: h,
              setPreAlphabetDiacriticsUnicode: y,
              preAlphabet: g,
              setPreAlphabet: w,
              postAlphabetDiacriticsUnicode: _,
              setPostAlphabetDiacriticsUnicode: R,
              isSaddah: c,
            }),
        }),
      ],
    })
  );
}
console.log("ThemeSelector.jsx");
function Eh({
  selectedTheme: o,
  setSelectedTheme: l,
  alphabetColorCombinations: s,
  setSelectedColor: a,
}) {
  const c = (f) => {
    const p = s.find((h) => h.theme === f.target.value);
    l(p), a(p.combinations[2]);
  };
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx("label", {
        className: "font-bangla w-full mb-2 font-semibold",
        children: "Select Theme & color combination :    ",
      }),
      S.jsx("select", {
        value: o.theme,
        onChange: c,
        className: "w-full p-2 border rounded font-bangla",
        children: s.map((f) =>
          S.jsx("option", { value: f.theme, children: f.theme }, f.theme)
        ),
      }),
    ],
  });
}
console.log("ColorSelector.jsx");
function Ch({ selectedTheme: o, selectedColor: l, setSelectedColor: s }) {
  const a = (c) => {
    const f = JSON.parse(c.target.value);
    s(f);
  };
  return S.jsx(S.Fragment, {
    children: S.jsx("select", {
      value: JSON.stringify(l),
      onChange: a,
      className:
        "font-bangla w-full p-2 border rounded ${selectedColor.backgroundColor}",
      children: o.combinations.map((c, f) =>
        S.jsx(
          "option",
          {
            className: `${c.textColor} ${c.backgroundColor}`,
            value: JSON.stringify(c),
            children: c.description,
          },
          f
        )
      ),
    }),
  });
}
function Rh({ selectedColor: o }) {
  const l = window.innerWidth,
    s = l < 640,
    a = l >= 640 && l < 1024,
    c = l >= 1024,
    [f, p] = L.useState({}),
    h = (y) => {
      p((g) => ({ ...g, [y]: !g[y] }));
    };
  return S.jsxs("ul", {
    className: `font-bangla w-24 relative h-full text-center break-words whitespace-normal ${o.backgroundColor} ${o.textColor} `,
    children: [
      Object.keys(lt).map((y, g) =>
        S.jsxs(
          "li",
          {
            className: "group",
            children: [
              S.jsx("hr", {}),
              S.jsx("br", {}),
              S.jsx("br", {}),
              S.jsx("a", {
                className:
                  "block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000",
                href: "/" + y.toLowerCase(),
                children: lt[y].title,
              }),
              (s || a) &&
                lt[y].diacritics &&
                S.jsx("button", {
                  onClick: () => h(y),
                  className: "px-4 py-2",
                  children: f[y] ? ">" : "<",
                }),
              (f[y] || c) &&
                lt[y].diacritics &&
                S.jsx("div", {
                  className: `absolute left-full transform -translate-y-1/2 mt-2 w-full ${o.backgroundColor} ${o.textColor} rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-30`,
                  children: lt[y].diacritics.map((w, _) =>
                    S.jsxs(
                      "div",
                      {
                        className: "group/sub relative",
                        children: [
                          S.jsx("a", {
                            href:
                              "/" +
                              y.toLowerCase() +
                              "/" +
                              w.name.toLowerCase(),
                            className:
                              "block py-2 px-4 rounded hover:bg-blue-700 transition-colors",
                            children: w.title,
                          }),
                          w.pages &&
                            S.jsx("div", {
                              className: `absolute left-full top-0 mt-2 w-full ${o.backgroundColor} ${o.textColor} rounded shadow-lg opacity-0 group-hover/sub:opacity-100 transition duration-300 hover:z-50`,
                              children: w.pages.map((R, I) =>
                                S.jsx(
                                  "a",
                                  {
                                    href:
                                      "/" +
                                      y.toLowerCase() +
                                      "/" +
                                      w.name.toLowerCase() +
                                      R.name.toLowerCase(),
                                    className:
                                      "block py-2 px-4 rounded hover:bg-blue-700 transition-colors",
                                    children: R.title,
                                  },
                                  I
                                )
                              ),
                            }),
                        ],
                      },
                      _
                    )
                  ),
                }),
              S.jsx("br", {}),
              S.jsx("br", {}),
              S.jsx("hr", {}),
            ],
          },
          g
        )
      ),
      S.jsxs(
        "li",
        {
          className: "group",
          children: [
            S.jsx("hr", {}),
            S.jsx("br", {}),
            S.jsx("br", {}),
            S.jsx("a", {
              className:
                "block px-3 py-2 rounded hover:bg-blue-700 focus:bg-red-200 transition duration-1000",
              href: "/words",
              children: "শব্দ তৈরী",
            }),
            S.jsx("br", {}),
            S.jsx("br", {}),
            S.jsx("hr", {}),
          ],
        },
        "123"
      ),
    ],
  });
}
function Nh() {
  const o = localStorage.getItem("user"),
    [l, s] = L.useState(!1);
  return (
    L.useEffect(() => {
      localStorage.getItem("access_token") !== null && (s(!0), console.log(l));
    }, [l]),
    S.jsx("div", {
      children: S.jsxs("ul", {
        children: [
          S.jsx("li", {
            className: "bg-gray-100",
            children: l ? S.jsx("a", { href: "/home", children: o }) : null,
          }),
          S.jsx("li", {
            children: l
              ? S.jsx("a", { href: "/logout", children: "Logout" })
              : S.jsx("a", { href: "/login", children: "Login" }),
          }),
        ],
      }),
    })
  );
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _h = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ph = (o) =>
    o.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, s, a) =>
      a ? a.toUpperCase() : s.toLowerCase()
    ),
  lf = (o) => {
    const l = Ph(o);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  Tf = (...o) =>
    o
      .filter((l, s, a) => !!l && l.trim() !== "" && a.indexOf(l) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Th = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jh = L.forwardRef(
  (
    {
      color: o = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: c = "",
      children: f,
      iconNode: p,
      ...h
    },
    y
  ) =>
    L.createElement(
      "svg",
      {
        ref: y,
        ...Th,
        width: l,
        height: l,
        stroke: o,
        strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
        className: Tf("lucide", c),
        ...h,
      },
      [
        ...p.map(([g, w]) => L.createElement(g, w)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pn = (o, l) => {
  const s = L.forwardRef(({ className: a, ...c }, f) =>
    L.createElement(jh, {
      ref: f,
      iconNode: l,
      className: Tf(`lucide-${_h(lf(o))}`, `lucide-${o}`, a),
      ...c,
    })
  );
  return (s.displayName = lf(o)), s;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Oh = Pn("book-open", Lh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ih = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
  ],
  Ah = Pn("circle-play", Ih);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = [
    [
      "path",
      {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
        key: "182aya",
      },
    ],
    ["path", { d: "M22 21H7", key: "t4ddhn" }],
    ["path", { d: "m5 11 9 9", key: "1mo9qw" }],
  ],
  Dh = Pn("eraser", zh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fh = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  $h = Pn("menu", Fh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = [
    [
      "path",
      {
        d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
        key: "re6nr2",
      },
    ],
    ["path", { d: "M2 6h4", key: "aawbzj" }],
    ["path", { d: "M2 10h4", key: "l0bgd4" }],
    ["path", { d: "M2 14h4", key: "1gsvsf" }],
    ["path", { d: "M2 18h4", key: "1bu2t1" }],
    [
      "path",
      {
        d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
        key: "pqwjuv",
      },
    ],
  ],
  Uh = Pn("notebook-pen", Mh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  Hh = Pn("pencil", Bh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = [
    [
      "path",
      {
        d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
        key: "1c8476",
      },
    ],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
  ],
  Vh = Pn("save", Wh);
function Qh({
  selectedColor: o,
  selectedTheme: l,
  setSelectedTheme: s,
  setSelectedColor: a,
  alphabetColorCombinations: c,
  Children: f,
}) {
  return (
    console.log("Nav.jsx"),
    S.jsxs(S.Fragment, {
      children: [
        S.jsx("button", {
          className: `md:hidden ${o.backgroundColor} ${o.textColor} p-2 h-[50px] z-10 rounded-full fixed`,
          onClick: () => {
            document.getElementById("vertical-menu").classList.toggle("hidden");
          },
          children: S.jsx($h, {}),
        }),
        S.jsx("div", {
          className: `${o.backgroundColor} ${o.textColor} w-32  p-4 h-screen md:block hidden mt-16`,
        }),
        S.jsxs("nav", {
          id: "vertical-menu",
          className: `${o.backgroundColor} ${o.textColor} w-32  p-2 hidden fixed h-screen overflow-hidden overflow-y-scroll hover:w-96 md:block mt-16 md:mt-0`,
          children: [
            S.jsx(Nh, {}),
            S.jsx("div", {
              className: "text-lg font-bold mb-6",
              children: "আরবী শেখা",
            }),
            S.jsxs("div", {
              className: "mb-4",
              children: [
                S.jsx(Eh, {
                  selectedTheme: l,
                  setSelectedTheme: (p) => {
                    s(p), a(p.combinations[2]);
                  },
                  alphabetColorCombinations: c,
                }),
                S.jsx(Ch, {
                  selectedTheme: l,
                  selectedColor: o,
                  setSelectedColor: a,
                }),
              ],
            }),
            S.jsx(Rh, { selectedTheme: l, selectedColor: o }),
          ],
        }),
      ],
    })
  );
}
function jf({
  selectedColor: o,
  width: l = "100px",
  sendingWord: s,
  setSendingWord: a,
  arabicAlphabet: c,
}) {
  const [f, p] = L.useState("");
  console.log("Words.jsx"), console.log(f);
  const [h, y] = L.useState(""),
    [g, w] = L.useState("");
  return S.jsxs("div", {
    className: "flex font-bangla",
    children: [
      S.jsxs(Pf, {
        isAllDiacritics: !0,
        word: f,
        setWord: p,
        postAlphabetDiacriticsUnicode: h,
        setPostAlphabetDiacriticsUnicode: y,
        preAlphabet: g,
        setPreAlphabet: w,
        selectedColor: o,
        arabicAlphabet: c,
        children: [
          S.jsx(
            "button",
            {
              onClick: () => {
                p((_) => _.slice(0, -1));
              },
              className: `rtl p-4 m-1 mb-0 h-[40px] w-16
           ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
              children: "-",
            },
            "minus"
          ),
          S.jsx(
            "button",
            {
              onClick: () => {
                p((_) => _ + " ");
              },
              className: `rtl p-4 m-1 mb-0 h-[40px] w-16
           ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
              children: " ",
            },
            "space"
          ),
          S.jsx(
            "button",
            {
              onClick: () => {
                p("");
              },
              className: `rtl p-4 m-1 mb-0 h-[40px] w-16
           ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
              children: "del",
            },
            "del"
          ),
          S.jsx(
            "button",
            {
              onClick: () => {
                a((_) => f);
              },
              className: `rtl p-4 m-1 mb-0 h-[40px] w-16
           ${o.backgroundColor} 
          text-4xl text-center 
          ${o.textColor} 
        rounded-lg
          flex justify-center items-center
          hover:shadow-2xl focus:outline-none focus:ring-4 `,
              children: "sub",
            },
            "sub"
          ),
        ],
      }),
      S.jsxs("div", {
        className: `font-akber ${o.backgroundColor} 
          text-8xl text-center w-[{width}]
          ${o.textColor}  p-8`,
        children: [f, S.jsx("br", {}), s],
      }),
    ],
  });
}
var Qr = {},
  sf;
function bh() {
  if (sf) return Qr;
  (sf = 1),
    Object.defineProperty(Qr, "__esModule", { value: !0 }),
    (Qr.parse = p),
    (Qr.serialize = g);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    l = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    a = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    f = (() => {
      const R = function () {};
      return (R.prototype = Object.create(null)), R;
    })();
  function p(R, I) {
    const k = new f(),
      T = R.length;
    if (T < 2) return k;
    const P = (I == null ? void 0 : I.decode) || w;
    let A = 0;
    do {
      const M = R.indexOf("=", A);
      if (M === -1) break;
      const b = R.indexOf(";", A),
        G = b === -1 ? T : b;
      if (M > G) {
        A = R.lastIndexOf(";", M - 1) + 1;
        continue;
      }
      const J = h(R, A, M),
        le = y(R, M, J),
        ce = R.slice(J, le);
      if (k[ce] === void 0) {
        let ge = h(R, M + 1, G),
          ye = y(R, G, ge);
        const Oe = P(R.slice(ge, ye));
        k[ce] = Oe;
      }
      A = G + 1;
    } while (A < T);
    return k;
  }
  function h(R, I, k) {
    do {
      const T = R.charCodeAt(I);
      if (T !== 32 && T !== 9) return I;
    } while (++I < k);
    return k;
  }
  function y(R, I, k) {
    for (; I > k; ) {
      const T = R.charCodeAt(--I);
      if (T !== 32 && T !== 9) return I + 1;
    }
    return k;
  }
  function g(R, I, k) {
    const T = (k == null ? void 0 : k.encode) || encodeURIComponent;
    if (!o.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
    const P = T(I);
    if (!l.test(P)) throw new TypeError(`argument val is invalid: ${I}`);
    let A = R + "=" + P;
    if (!k) return A;
    if (k.maxAge !== void 0) {
      if (!Number.isInteger(k.maxAge))
        throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);
      A += "; Max-Age=" + k.maxAge;
    }
    if (k.domain) {
      if (!s.test(k.domain))
        throw new TypeError(`option domain is invalid: ${k.domain}`);
      A += "; Domain=" + k.domain;
    }
    if (k.path) {
      if (!a.test(k.path))
        throw new TypeError(`option path is invalid: ${k.path}`);
      A += "; Path=" + k.path;
    }
    if (k.expires) {
      if (!_(k.expires) || !Number.isFinite(k.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${k.expires}`);
      A += "; Expires=" + k.expires.toUTCString();
    }
    if (
      (k.httpOnly && (A += "; HttpOnly"),
      k.secure && (A += "; Secure"),
      k.partitioned && (A += "; Partitioned"),
      k.priority)
    )
      switch (
        typeof k.priority == "string" ? k.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${k.priority}`);
      }
    if (k.sameSite)
      switch (
        typeof k.sameSite == "string" ? k.sameSite.toLowerCase() : k.sameSite
      ) {
        case !0:
        case "strict":
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${k.sameSite}`);
      }
    return A;
  }
  function w(R) {
    if (R.indexOf("%") === -1) return R;
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  function _(R) {
    return c.call(R) === "[object Date]";
  }
  return Qr;
}
bh();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var uf = "popstate";
function Kh(o = {}) {
  function l(a, c) {
    let { pathname: f, search: p, hash: h } = a.location;
    return Ds(
      "",
      { pathname: f, search: p, hash: h },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function s(a, c) {
    return typeof c == "string" ? c : qr(c);
  }
  return Jh(l, s, null, o);
}
function Ce(o, l) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(l);
}
function Ot(o, l) {
  if (!o) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function qh() {
  return Math.random().toString(36).substring(2, 10);
}
function af(o, l) {
  return { usr: o.state, key: o.key, idx: l };
}
function Ds(o, l, s = null, a) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof l == "string" ? tr(l) : l),
    state: s,
    key: (l && l.key) || a || qh(),
  };
}
function qr({ pathname: o = "/", search: l = "", hash: s = "" }) {
  return (
    l && l !== "?" && (o += l.charAt(0) === "?" ? l : "?" + l),
    s && s !== "#" && (o += s.charAt(0) === "#" ? s : "#" + s),
    o
  );
}
function tr(o) {
  let l = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && ((l.hash = o.substring(s)), (o = o.substring(0, s)));
    let a = o.indexOf("?");
    a >= 0 && ((l.search = o.substring(a)), (o = o.substring(0, a))),
      o && (l.pathname = o);
  }
  return l;
}
function Jh(o, l, s, a = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = a,
    p = c.history,
    h = "POP",
    y = null,
    g = w();
  g == null && ((g = 0), p.replaceState({ ...p.state, idx: g }, ""));
  function w() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let P = w(),
      A = P == null ? null : P - g;
    (g = P), y && y({ action: h, location: T.location, delta: A });
  }
  function R(P, A) {
    h = "PUSH";
    let M = Ds(T.location, P, A);
    g = w() + 1;
    let b = af(M, g),
      G = T.createHref(M);
    try {
      p.pushState(b, "", G);
    } catch (J) {
      if (J instanceof DOMException && J.name === "DataCloneError") throw J;
      c.location.assign(G);
    }
    f && y && y({ action: h, location: T.location, delta: 1 });
  }
  function I(P, A) {
    h = "REPLACE";
    let M = Ds(T.location, P, A);
    g = w();
    let b = af(M, g),
      G = T.createHref(M);
    p.replaceState(b, "", G),
      f && y && y({ action: h, location: T.location, delta: 0 });
  }
  function k(P) {
    let A = c.location.origin !== "null" ? c.location.origin : c.location.href,
      M = typeof P == "string" ? P : qr(P);
    return (
      (M = M.replace(/ $/, "%20")),
      Ce(
        A,
        `No window.location.(origin|href) available to create URL for href: ${M}`
      ),
      new URL(M, A)
    );
  }
  let T = {
    get action() {
      return h;
    },
    get location() {
      return o(c, p);
    },
    listen(P) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(uf, _),
        (y = P),
        () => {
          c.removeEventListener(uf, _), (y = null);
        }
      );
    },
    createHref(P) {
      return l(c, P);
    },
    createURL: k,
    encodeLocation(P) {
      let A = k(P);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: R,
    replace: I,
    go(P) {
      return p.go(P);
    },
  };
  return T;
}
function Lf(o, l, s = "/") {
  return Yh(o, l, s, !1);
}
function Yh(o, l, s, a) {
  let c = typeof l == "string" ? tr(l) : l,
    f = fn(c.pathname || "/", s);
  if (f == null) return null;
  let p = Of(o);
  Xh(p);
  let h = null;
  for (let y = 0; h == null && y < p.length; ++y) {
    let g = um(f);
    h = im(p[y], g, a);
  }
  return h;
}
function Of(o, l = [], s = [], a = "") {
  let c = (f, p, h) => {
    let y = {
      relativePath: h === void 0 ? f.path || "" : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: p,
      route: f,
    };
    y.relativePath.startsWith("/") &&
      (Ce(
        y.relativePath.startsWith(a),
        `Absolute route path "${y.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(a.length)));
    let g = Wt([a, y.relativePath]),
      w = s.concat(y);
    f.children &&
      f.children.length > 0 &&
      (Ce(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Of(f.children, l, w, g)),
      !(f.path == null && !f.index) &&
        l.push({ path: g, score: om(g, f.index), routesMeta: w });
  };
  return (
    o.forEach((f, p) => {
      var h;
      if (f.path === "" || !((h = f.path) != null && h.includes("?"))) c(f, p);
      else for (let y of If(f.path)) c(f, p, y);
    }),
    l
  );
}
function If(o) {
  let l = o.split("/");
  if (l.length === 0) return [];
  let [s, ...a] = l,
    c = s.endsWith("?"),
    f = s.replace(/\?$/, "");
  if (a.length === 0) return c ? [f, ""] : [f];
  let p = If(a.join("/")),
    h = [];
  return (
    h.push(...p.map((y) => (y === "" ? f : [f, y].join("/")))),
    c && h.push(...p),
    h.map((y) => (o.startsWith("/") && y === "" ? "/" : y))
  );
}
function Xh(o) {
  o.sort((l, s) =>
    l.score !== s.score
      ? s.score - l.score
      : lm(
          l.routesMeta.map((a) => a.childrenIndex),
          s.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
var Gh = /^:[\w-]+$/,
  Zh = 3,
  em = 2,
  tm = 1,
  nm = 10,
  rm = -2,
  cf = (o) => o === "*";
function om(o, l) {
  let s = o.split("/"),
    a = s.length;
  return (
    s.some(cf) && (a += rm),
    l && (a += em),
    s
      .filter((c) => !cf(c))
      .reduce((c, f) => c + (Gh.test(f) ? Zh : f === "" ? tm : nm), a)
  );
}
function lm(o, l) {
  return o.length === l.length && o.slice(0, -1).every((a, c) => a === l[c])
    ? o[o.length - 1] - l[l.length - 1]
    : 0;
}
function im(o, l, s = !1) {
  let { routesMeta: a } = o,
    c = {},
    f = "/",
    p = [];
  for (let h = 0; h < a.length; ++h) {
    let y = a[h],
      g = h === a.length - 1,
      w = f === "/" ? l : l.slice(f.length) || "/",
      _ = xl(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
        w
      ),
      R = y.route;
    if (
      (!_ &&
        g &&
        s &&
        !a[a.length - 1].route.index &&
        (_ = xl(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          w
        )),
      !_)
    )
      return null;
    Object.assign(c, _.params),
      p.push({
        params: c,
        pathname: Wt([f, _.pathname]),
        pathnameBase: dm(Wt([f, _.pathnameBase])),
        route: R,
      }),
      _.pathnameBase !== "/" && (f = Wt([f, _.pathnameBase]));
  }
  return p;
}
function xl(o, l) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [s, a] = sm(o.path, o.caseSensitive, o.end),
    c = l.match(s);
  if (!c) return null;
  let f = c[0],
    p = f.replace(/(.)\/+$/, "$1"),
    h = c.slice(1);
  return {
    params: a.reduce((g, { paramName: w, isOptional: _ }, R) => {
      if (w === "*") {
        let k = h[R] || "";
        p = f.slice(0, f.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const I = h[R];
      return (
        _ && !I ? (g[w] = void 0) : (g[w] = (I || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: f,
    pathnameBase: p,
    pattern: o,
  };
}
function sm(o, l = !1, s = !0) {
  Ot(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let a = [],
    c =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, h, y) => (
            a.push({ paramName: h, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (c += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (c += "\\/*$")
      : o !== "" && o !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, l ? void 0 : "i"), a]
  );
}
function um(o) {
  try {
    return o
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      Ot(
        !1,
        `The URL path "${o}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
      ),
      o
    );
  }
}
function fn(o, l) {
  if (l === "/") return o;
  if (!o.toLowerCase().startsWith(l.toLowerCase())) return null;
  let s = l.endsWith("/") ? l.length - 1 : l.length,
    a = o.charAt(s);
  return a && a !== "/" ? null : o.slice(s) || "/";
}
function am(o, l = "/") {
  let {
    pathname: s,
    search: a = "",
    hash: c = "",
  } = typeof o == "string" ? tr(o) : o;
  return {
    pathname: s ? (s.startsWith("/") ? s : cm(s, l)) : l,
    search: pm(a),
    hash: hm(c),
  };
}
function cm(o, l) {
  let s = l.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((c) => {
      c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function js(o, l, s, a) {
  return `Cannot include a '${o}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fm(o) {
  return o.filter(
    (l, s) => s === 0 || (l.route.path && l.route.path.length > 0)
  );
}
function Af(o) {
  let l = fm(o);
  return l.map((s, a) => (a === l.length - 1 ? s.pathname : s.pathnameBase));
}
function zf(o, l, s, a = !1) {
  let c;
  typeof o == "string"
    ? (c = tr(o))
    : ((c = { ...o }),
      Ce(
        !c.pathname || !c.pathname.includes("?"),
        js("?", "pathname", "search", c)
      ),
      Ce(
        !c.pathname || !c.pathname.includes("#"),
        js("#", "pathname", "hash", c)
      ),
      Ce(!c.search || !c.search.includes("#"), js("#", "search", "hash", c)));
  let f = o === "" || c.pathname === "",
    p = f ? "/" : c.pathname,
    h;
  if (p == null) h = s;
  else {
    let _ = l.length - 1;
    if (!a && p.startsWith("..")) {
      let R = p.split("/");
      for (; R[0] === ".."; ) R.shift(), (_ -= 1);
      c.pathname = R.join("/");
    }
    h = _ >= 0 ? l[_] : "/";
  }
  let y = am(c, h),
    g = p && p !== "/" && p.endsWith("/"),
    w = (f || p === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (g || w) && (y.pathname += "/"), y;
}
var Wt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  dm = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pm = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  hm = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function mm(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var Df = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Df);
var gm = ["GET", ...Df];
new Set(gm);
var nr = L.createContext(null);
nr.displayName = "DataRouter";
var El = L.createContext(null);
El.displayName = "DataRouterState";
var Ff = L.createContext({ isTransitioning: !1 });
Ff.displayName = "ViewTransition";
var ym = L.createContext(new Map());
ym.displayName = "Fetchers";
var vm = L.createContext(null);
vm.displayName = "Await";
var It = L.createContext(null);
It.displayName = "Navigation";
var Yr = L.createContext(null);
Yr.displayName = "Location";
var Vt = L.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Vt.displayName = "Route";
var Qs = L.createContext(null);
Qs.displayName = "RouteError";
function wm(o, { relative: l } = {}) {
  Ce(
    Xr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: a } = L.useContext(It),
    { hash: c, pathname: f, search: p } = Gr(o, { relative: l }),
    h = f;
  return (
    s !== "/" && (h = f === "/" ? s : Wt([s, f])),
    a.createHref({ pathname: h, search: p, hash: c })
  );
}
function Xr() {
  return L.useContext(Yr) != null;
}
function Tn() {
  return (
    Ce(
      Xr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    L.useContext(Yr).location
  );
}
var $f =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mf(o) {
  L.useContext(It).static || L.useLayoutEffect(o);
}
function xm() {
  let { isDataRoute: o } = L.useContext(Vt);
  return o ? Im() : Sm();
}
function Sm() {
  Ce(
    Xr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = L.useContext(nr),
    { basename: l, navigator: s } = L.useContext(It),
    { matches: a } = L.useContext(Vt),
    { pathname: c } = Tn(),
    f = JSON.stringify(Af(a)),
    p = L.useRef(!1);
  return (
    Mf(() => {
      p.current = !0;
    }),
    L.useCallback(
      (y, g = {}) => {
        if ((Ot(p.current, $f), !p.current)) return;
        if (typeof y == "number") {
          s.go(y);
          return;
        }
        let w = zf(y, JSON.parse(f), c, g.relative === "path");
        o == null &&
          l !== "/" &&
          (w.pathname = w.pathname === "/" ? l : Wt([l, w.pathname])),
          (g.replace ? s.replace : s.push)(w, g.state, g);
      },
      [l, s, f, c, o]
    )
  );
}
L.createContext(null);
function Gr(o, { relative: l } = {}) {
  let { matches: s } = L.useContext(Vt),
    { pathname: a } = Tn(),
    c = JSON.stringify(Af(s));
  return L.useMemo(() => zf(o, JSON.parse(c), a, l === "path"), [o, c, a, l]);
}
function km(o, l) {
  return Uf(o, l);
}
function Uf(o, l, s, a) {
  var A;
  Ce(
    Xr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = L.useContext(It),
    { matches: f } = L.useContext(Vt),
    p = f[f.length - 1],
    h = p ? p.params : {},
    y = p ? p.pathname : "/",
    g = p ? p.pathnameBase : "/",
    w = p && p.route;
  {
    let M = (w && w.path) || "";
    Bf(
      y,
      !w || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${
        M === "/" ? "*" : `${M}/*`
      }">.`
    );
  }
  let _ = Tn(),
    R;
  if (l) {
    let M = typeof l == "string" ? tr(l) : l;
    Ce(
      g === "/" || ((A = M.pathname) == null ? void 0 : A.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ),
      (R = M);
  } else R = _;
  let I = R.pathname || "/",
    k = I;
  if (g !== "/") {
    let M = g.replace(/^\//, "").split("/");
    k = "/" + I.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let T = Lf(o, { pathname: k });
  Ot(
    w || T != null,
    `No routes matched location "${R.pathname}${R.search}${R.hash}" `
  ),
    Ot(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let P = _m(
    T &&
      T.map((M) =>
        Object.assign({}, M, {
          params: Object.assign({}, h, M.params),
          pathname: Wt([
            g,
            c.encodeLocation
              ? c.encodeLocation(M.pathname).pathname
              : M.pathname,
          ]),
          pathnameBase:
            M.pathnameBase === "/"
              ? g
              : Wt([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(M.pathnameBase).pathname
                    : M.pathnameBase,
                ]),
        })
      ),
    f,
    s,
    a
  );
  return l && P
    ? L.createElement(
        Yr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...R,
            },
            navigationType: "POP",
          },
        },
        P
      )
    : P;
}
function Em() {
  let o = Om(),
    l = mm(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    s = o instanceof Error ? o.stack : null,
    a = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: a },
    f = { padding: "2px 4px", backgroundColor: a },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (p = L.createElement(
      L.Fragment,
      null,
      L.createElement("p", null, "💿 Hey developer 👋"),
      L.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        L.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        L.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    L.createElement(
      L.Fragment,
      null,
      L.createElement("h2", null, "Unexpected Application Error!"),
      L.createElement("h3", { style: { fontStyle: "italic" } }, l),
      s ? L.createElement("pre", { style: c }, s) : null,
      p
    )
  );
}
var Cm = L.createElement(Em, null),
  Rm = class extends L.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, l) {
      return l.location !== o.location ||
        (l.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : l.error,
            location: l.location,
            revalidation: o.revalidation || l.revalidation,
          };
    }
    componentDidCatch(o, l) {
      console.error(
        "React Router caught the following error during render",
        o,
        l
      );
    }
    render() {
      return this.state.error !== void 0
        ? L.createElement(
            Vt.Provider,
            { value: this.props.routeContext },
            L.createElement(Qs.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Nm({ routeContext: o, match: l, children: s }) {
  let a = L.useContext(nr);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = l.route.id),
    L.createElement(Vt.Provider, { value: o }, s)
  );
}
function _m(o, l = [], s = null, a = null) {
  if (o == null) {
    if (!s) return null;
    if (s.errors) o = s.matches;
    else if (l.length === 0 && !s.initialized && s.matches.length > 0)
      o = s.matches;
    else return null;
  }
  let c = o,
    f = s == null ? void 0 : s.errors;
  if (f != null) {
    let y = c.findIndex(
      (g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0
    );
    Ce(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, y + 1)));
  }
  let p = !1,
    h = -1;
  if (s)
    for (let y = 0; y < c.length; y++) {
      let g = c[y];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = y),
        g.route.id)
      ) {
        let { loaderData: w, errors: _ } = s,
          R =
            g.route.loader &&
            !w.hasOwnProperty(g.route.id) &&
            (!_ || _[g.route.id] === void 0);
        if (g.route.lazy || R) {
          (p = !0), h >= 0 ? (c = c.slice(0, h + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((y, g, w) => {
    let _,
      R = !1,
      I = null,
      k = null;
    s &&
      ((_ = f && g.route.id ? f[g.route.id] : void 0),
      (I = g.route.errorElement || Cm),
      p &&
        (h < 0 && w === 0
          ? (Bf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (R = !0),
            (k = null))
          : h === w &&
            ((R = !0), (k = g.route.hydrateFallbackElement || null))));
    let T = l.concat(c.slice(0, w + 1)),
      P = () => {
        let A;
        return (
          _
            ? (A = I)
            : R
            ? (A = k)
            : g.route.Component
            ? (A = L.createElement(g.route.Component, null))
            : g.route.element
            ? (A = g.route.element)
            : (A = y),
          L.createElement(Nm, {
            match: g,
            routeContext: { outlet: y, matches: T, isDataRoute: s != null },
            children: A,
          })
        );
      };
    return s && (g.route.ErrorBoundary || g.route.errorElement || w === 0)
      ? L.createElement(Rm, {
          location: s.location,
          revalidation: s.revalidation,
          component: I,
          error: _,
          children: P(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : P();
  }, null);
}
function bs(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pm(o) {
  let l = L.useContext(nr);
  return Ce(l, bs(o)), l;
}
function Tm(o) {
  let l = L.useContext(El);
  return Ce(l, bs(o)), l;
}
function jm(o) {
  let l = L.useContext(Vt);
  return Ce(l, bs(o)), l;
}
function Ks(o) {
  let l = jm(o),
    s = l.matches[l.matches.length - 1];
  return (
    Ce(
      s.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function Lm() {
  return Ks("useRouteId");
}
function Om() {
  var a;
  let o = L.useContext(Qs),
    l = Tm("useRouteError"),
    s = Ks("useRouteError");
  return o !== void 0 ? o : (a = l.errors) == null ? void 0 : a[s];
}
function Im() {
  let { router: o } = Pm("useNavigate"),
    l = Ks("useNavigate"),
    s = L.useRef(!1);
  return (
    Mf(() => {
      s.current = !0;
    }),
    L.useCallback(
      async (c, f = {}) => {
        Ot(s.current, $f),
          s.current &&
            (typeof c == "number"
              ? o.navigate(c)
              : await o.navigate(c, { fromRouteId: l, ...f }));
      },
      [o, l]
    )
  );
}
var ff = {};
function Bf(o, l, s) {
  !l && !ff[o] && ((ff[o] = !0), Ot(!1, s));
}
L.memo(Am);
function Am({ routes: o, future: l, state: s }) {
  return Uf(o, void 0, s, l);
}
function Lt(o) {
  Ce(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function zm({
  basename: o = "/",
  children: l = null,
  location: s,
  navigationType: a = "POP",
  navigator: c,
  static: f = !1,
}) {
  Ce(
    !Xr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = o.replace(/^\/*/, "/"),
    h = L.useMemo(
      () => ({ basename: p, navigator: c, static: f, future: {} }),
      [p, c, f]
    );
  typeof s == "string" && (s = tr(s));
  let {
      pathname: y = "/",
      search: g = "",
      hash: w = "",
      state: _ = null,
      key: R = "default",
    } = s,
    I = L.useMemo(() => {
      let k = fn(y, p);
      return k == null
        ? null
        : {
            location: { pathname: k, search: g, hash: w, state: _, key: R },
            navigationType: a,
          };
    }, [p, y, g, w, _, R, a]);
  return (
    Ot(
      I != null,
      `<Router basename="${p}"> is not able to match the URL "${y}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    I == null
      ? null
      : L.createElement(
          It.Provider,
          { value: h },
          L.createElement(Yr.Provider, { children: l, value: I })
        )
  );
}
function Dm({ children: o, location: l }) {
  return km(Fs(o), l);
}
function Fs(o, l = []) {
  let s = [];
  return (
    L.Children.forEach(o, (a, c) => {
      if (!L.isValidElement(a)) return;
      let f = [...l, c];
      if (a.type === L.Fragment) {
        s.push.apply(s, Fs(a.props.children, f));
        return;
      }
      Ce(
        a.type === Lt,
        `[${
          typeof a.type == "string" ? a.type : a.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ce(
          !a.props.index || !a.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: a.props.id || f.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        hydrateFallbackElement: a.props.hydrateFallbackElement,
        HydrateFallback: a.props.HydrateFallback,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.hasErrorBoundary === !0 ||
          a.props.ErrorBoundary != null ||
          a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (p.children = Fs(a.props.children, f)), s.push(p);
    }),
    s
  );
}
var hl = "get",
  ml = "application/x-www-form-urlencoded";
function Cl(o) {
  return o != null && typeof o.tagName == "string";
}
function Fm(o) {
  return Cl(o) && o.tagName.toLowerCase() === "button";
}
function $m(o) {
  return Cl(o) && o.tagName.toLowerCase() === "form";
}
function Mm(o) {
  return Cl(o) && o.tagName.toLowerCase() === "input";
}
function Um(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Bm(o, l) {
  return o.button === 0 && (!l || l === "_self") && !Um(o);
}
var pl = null;
function Hm() {
  if (pl === null)
    try {
      new FormData(document.createElement("form"), 0), (pl = !1);
    } catch {
      pl = !0;
    }
  return pl;
}
var Wm = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ls(o) {
  return o != null && !Wm.has(o)
    ? (Ot(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ml}"`
      ),
      null)
    : o;
}
function Vm(o, l) {
  let s, a, c, f, p;
  if ($m(o)) {
    let h = o.getAttribute("action");
    (a = h ? fn(h, l) : null),
      (s = o.getAttribute("method") || hl),
      (c = Ls(o.getAttribute("enctype")) || ml),
      (f = new FormData(o));
  } else if (Fm(o) || (Mm(o) && (o.type === "submit" || o.type === "image"))) {
    let h = o.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = o.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((a = y ? fn(y, l) : null),
      (s = o.getAttribute("formmethod") || h.getAttribute("method") || hl),
      (c =
        Ls(o.getAttribute("formenctype")) ||
        Ls(h.getAttribute("enctype")) ||
        ml),
      (f = new FormData(h, o)),
      !Hm())
    ) {
      let { name: g, type: w, value: _ } = o;
      if (w === "image") {
        let R = g ? `${g}.` : "";
        f.append(`${R}x`, "0"), f.append(`${R}y`, "0");
      } else g && f.append(g, _);
    }
  } else {
    if (Cl(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = hl), (a = null), (c = ml), (p = o);
  }
  return (
    f && c === "text/plain" && ((p = f), (f = void 0)),
    { action: a, method: s.toLowerCase(), encType: c, formData: f, body: p }
  );
}
function qs(o, l) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(l);
}
async function Qm(o, l) {
  if (o.id in l) return l[o.id];
  try {
    let s = await import(o.module);
    return (l[o.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function bm(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function Km(o, l, s) {
  let a = await Promise.all(
    o.map(async (c) => {
      let f = l.routes[c.route.id];
      if (f) {
        let p = await Qm(f, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Xm(
    a
      .flat(1)
      .filter(bm)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function df(o, l, s, a, c, f) {
  let p = (y, g) => (s[g] ? y.route.id !== s[g].route.id : !0),
    h = (y, g) => {
      var w;
      return (
        s[g].pathname !== y.pathname ||
        (((w = s[g].route.path) == null ? void 0 : w.endsWith("*")) &&
          s[g].params["*"] !== y.params["*"])
      );
    };
  return f === "assets"
    ? l.filter((y, g) => p(y, g) || h(y, g))
    : f === "data"
    ? l.filter((y, g) => {
        var _;
        let w = a.routes[y.route.id];
        if (!w || !w.hasLoader) return !1;
        if (p(y, g) || h(y, g)) return !0;
        if (y.route.shouldRevalidate) {
          let R = y.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: ((_ = s[0]) == null ? void 0 : _.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function qm(o, l) {
  return Jm(
    o
      .map((s) => {
        let a = l.routes[s.route.id];
        if (!a) return [];
        let c = [a.module];
        return a.imports && (c = c.concat(a.imports)), c;
      })
      .flat(1)
  );
}
function Jm(o) {
  return [...new Set(o)];
}
function Ym(o) {
  let l = {},
    s = Object.keys(o).sort();
  for (let a of s) l[a] = o[a];
  return l;
}
function Xm(o, l) {
  let s = new Set();
  return (
    new Set(l),
    o.reduce((a, c) => {
      let f = JSON.stringify(Ym(c));
      return s.has(f) || (s.add(f), a.push({ key: f, link: c })), a;
    }, [])
  );
}
function Gm(o) {
  let l =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    l.pathname === "/"
      ? (l.pathname = "_root.data")
      : (l.pathname = `${l.pathname.replace(/\/$/, "")}.data`),
    l
  );
}
function Zm() {
  let o = L.useContext(nr);
  return (
    qs(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function eg() {
  let o = L.useContext(El);
  return (
    qs(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var Js = L.createContext(void 0);
Js.displayName = "FrameworkContext";
function Hf() {
  let o = L.useContext(Js);
  return (
    qs(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function tg(o, l) {
  let s = L.useContext(Js),
    [a, c] = L.useState(!1),
    [f, p] = L.useState(!1),
    {
      onFocus: h,
      onBlur: y,
      onMouseEnter: g,
      onMouseLeave: w,
      onTouchStart: _,
    } = l,
    R = L.useRef(null);
  L.useEffect(() => {
    if ((o === "render" && p(!0), o === "viewport")) {
      let T = (A) => {
          A.forEach((M) => {
            p(M.isIntersecting);
          });
        },
        P = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        R.current && P.observe(R.current),
        () => {
          P.disconnect();
        }
      );
    }
  }, [o]),
    L.useEffect(() => {
      if (a) {
        let T = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [a]);
  let I = () => {
      c(!0);
    },
    k = () => {
      c(!1), p(!1);
    };
  return s
    ? o !== "intent"
      ? [f, R, {}]
      : [
          f,
          R,
          {
            onFocus: br(h, I),
            onBlur: br(y, k),
            onMouseEnter: br(g, I),
            onMouseLeave: br(w, k),
            onTouchStart: br(_, I),
          },
        ]
    : [!1, R, {}];
}
function br(o, l) {
  return (s) => {
    o && o(s), s.defaultPrevented || l(s);
  };
}
function ng({ page: o, ...l }) {
  let { router: s } = Zm(),
    a = L.useMemo(() => Lf(s.routes, o, s.basename), [s.routes, o, s.basename]);
  return a
    ? L.createElement(og, { page: o, matches: a, ...l })
    : (console.warn(`Tried to prefetch ${o} but no routes matched.`), null);
}
function rg(o) {
  let { manifest: l, routeModules: s } = Hf(),
    [a, c] = L.useState([]);
  return (
    L.useEffect(() => {
      let f = !1;
      return (
        Km(o, l, s).then((p) => {
          f || c(p);
        }),
        () => {
          f = !0;
        }
      );
    }, [o, l, s]),
    a
  );
}
function og({ page: o, matches: l, ...s }) {
  let a = Tn(),
    { manifest: c, routeModules: f } = Hf(),
    { loaderData: p, matches: h } = eg(),
    y = L.useMemo(() => df(o, l, h, c, a, "data"), [o, l, h, c, a]),
    g = L.useMemo(() => df(o, l, h, c, a, "assets"), [o, l, h, c, a]),
    w = L.useMemo(() => {
      if (o === a.pathname + a.search + a.hash) return [];
      let I = new Set(),
        k = !1;
      if (
        (l.forEach((P) => {
          var M;
          let A = c.routes[P.route.id];
          !A ||
            !A.hasLoader ||
            ((!y.some((b) => b.route.id === P.route.id) &&
              P.route.id in p &&
              (M = f[P.route.id]) != null &&
              M.shouldRevalidate) ||
            A.hasClientLoader
              ? (k = !0)
              : I.add(P.route.id));
        }),
        I.size === 0)
      )
        return [];
      let T = Gm(o);
      return (
        k &&
          I.size > 0 &&
          T.searchParams.set(
            "_routes",
            l
              .filter((P) => I.has(P.route.id))
              .map((P) => P.route.id)
              .join(",")
          ),
        [T.pathname + T.search]
      );
    }, [p, a, c, y, l, o, f]),
    _ = L.useMemo(() => qm(g, c), [g, c]),
    R = rg(g);
  return L.createElement(
    L.Fragment,
    null,
    w.map((I) =>
      L.createElement("link", {
        key: I,
        rel: "prefetch",
        as: "fetch",
        href: I,
        ...s,
      })
    ),
    _.map((I) =>
      L.createElement("link", { key: I, rel: "modulepreload", href: I, ...s })
    ),
    R.map(({ key: I, link: k }) => L.createElement("link", { key: I, ...k }))
  );
}
function lg(...o) {
  return (l) => {
    o.forEach((s) => {
      typeof s == "function" ? s(l) : s != null && (s.current = l);
    });
  };
}
var Wf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Wf && (window.__reactRouterVersion = "7.0.2");
} catch {}
function ig({ basename: o, children: l, window: s }) {
  let a = L.useRef();
  a.current == null && (a.current = Kh({ window: s, v5Compat: !0 }));
  let c = a.current,
    [f, p] = L.useState({ action: c.action, location: c.location }),
    h = L.useCallback(
      (y) => {
        L.startTransition(() => p(y));
      },
      [p]
    );
  return (
    L.useLayoutEffect(() => c.listen(h), [c, h]),
    L.createElement(zm, {
      basename: o,
      children: l,
      location: f.location,
      navigationType: f.action,
      navigator: c,
    })
  );
}
var Vf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qf = L.forwardRef(function (
    {
      onClick: l,
      discover: s = "render",
      prefetch: a = "none",
      relative: c,
      reloadDocument: f,
      replace: p,
      state: h,
      target: y,
      to: g,
      preventScrollReset: w,
      viewTransition: _,
      ...R
    },
    I
  ) {
    let { basename: k } = L.useContext(It),
      T = typeof g == "string" && Vf.test(g),
      P,
      A = !1;
    if (typeof g == "string" && T && ((P = g), Wf))
      try {
        let ye = new URL(window.location.href),
          Oe = g.startsWith("//") ? new URL(ye.protocol + g) : new URL(g),
          kt = fn(Oe.pathname, k);
        Oe.origin === ye.origin && kt != null
          ? (g = kt + Oe.search + Oe.hash)
          : (A = !0);
      } catch {
        Ot(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let M = wm(g, { relative: c }),
      [b, G, J] = tg(a, R),
      le = cg(g, {
        replace: p,
        state: h,
        target: y,
        preventScrollReset: w,
        relative: c,
        viewTransition: _,
      });
    function ce(ye) {
      l && l(ye), ye.defaultPrevented || le(ye);
    }
    let ge = L.createElement("a", {
      ...R,
      ...J,
      href: P || M,
      onClick: A || f ? l : ce,
      ref: lg(I, G),
      target: y,
      "data-discover": !T && s === "render" ? "true" : void 0,
    });
    return b && !T
      ? L.createElement(L.Fragment, null, ge, L.createElement(ng, { page: M }))
      : ge;
  });
Qf.displayName = "Link";
var sg = L.forwardRef(function (
  {
    "aria-current": l = "page",
    caseSensitive: s = !1,
    className: a = "",
    end: c = !1,
    style: f,
    to: p,
    viewTransition: h,
    children: y,
    ...g
  },
  w
) {
  let _ = Gr(p, { relative: g.relative }),
    R = Tn(),
    I = L.useContext(El),
    { navigator: k, basename: T } = L.useContext(It),
    P = I != null && mg(_) && h === !0,
    A = k.encodeLocation ? k.encodeLocation(_).pathname : _.pathname,
    M = R.pathname,
    b =
      I && I.navigation && I.navigation.location
        ? I.navigation.location.pathname
        : null;
  s ||
    ((M = M.toLowerCase()),
    (b = b ? b.toLowerCase() : null),
    (A = A.toLowerCase())),
    b && T && (b = fn(b, T) || b);
  const G = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let J = M === A || (!c && M.startsWith(A) && M.charAt(G) === "/"),
    le =
      b != null &&
      (b === A || (!c && b.startsWith(A) && b.charAt(A.length) === "/")),
    ce = { isActive: J, isPending: le, isTransitioning: P },
    ge = J ? l : void 0,
    ye;
  typeof a == "function"
    ? (ye = a(ce))
    : (ye = [
        a,
        J ? "active" : null,
        le ? "pending" : null,
        P ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Oe = typeof f == "function" ? f(ce) : f;
  return L.createElement(
    Qf,
    {
      ...g,
      "aria-current": ge,
      className: ye,
      ref: w,
      style: Oe,
      to: p,
      viewTransition: h,
    },
    typeof y == "function" ? y(ce) : y
  );
});
sg.displayName = "NavLink";
var ug = L.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: l,
      navigate: s,
      reloadDocument: a,
      replace: c,
      state: f,
      method: p = hl,
      action: h,
      onSubmit: y,
      relative: g,
      preventScrollReset: w,
      viewTransition: _,
      ...R
    },
    I
  ) => {
    let k = pg(),
      T = hg(h, { relative: g }),
      P = p.toLowerCase() === "get" ? "get" : "post",
      A = typeof h == "string" && Vf.test(h),
      M = (b) => {
        if ((y && y(b), b.defaultPrevented)) return;
        b.preventDefault();
        let G = b.nativeEvent.submitter,
          J = (G == null ? void 0 : G.getAttribute("formmethod")) || p;
        k(G || b.currentTarget, {
          fetcherKey: l,
          method: J,
          navigate: s,
          replace: c,
          state: f,
          relative: g,
          preventScrollReset: w,
          viewTransition: _,
        });
      };
    return L.createElement("form", {
      ref: I,
      method: P,
      action: T,
      onSubmit: a ? y : M,
      ...R,
      "data-discover": !A && o === "render" ? "true" : void 0,
    });
  }
);
ug.displayName = "Form";
function ag(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bf(o) {
  let l = L.useContext(nr);
  return Ce(l, ag(o)), l;
}
function cg(
  o,
  {
    target: l,
    replace: s,
    state: a,
    preventScrollReset: c,
    relative: f,
    viewTransition: p,
  } = {}
) {
  let h = xm(),
    y = Tn(),
    g = Gr(o, { relative: f });
  return L.useCallback(
    (w) => {
      if (Bm(w, l)) {
        w.preventDefault();
        let _ = s !== void 0 ? s : qr(y) === qr(g);
        h(o, {
          replace: _,
          state: a,
          preventScrollReset: c,
          relative: f,
          viewTransition: p,
        });
      }
    },
    [y, h, g, s, a, l, o, c, f, p]
  );
}
var fg = 0,
  dg = () => `__${String(++fg)}__`;
function pg() {
  let { router: o } = bf("useSubmit"),
    { basename: l } = L.useContext(It),
    s = Lm();
  return L.useCallback(
    async (a, c = {}) => {
      let { action: f, method: p, encType: h, formData: y, body: g } = Vm(a, l);
      if (c.navigate === !1) {
        let w = c.fetcherKey || dg();
        await o.fetch(w, s, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: g,
          formMethod: c.method || p,
          formEncType: c.encType || h,
          flushSync: c.flushSync,
        });
      } else
        await o.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: g,
          formMethod: c.method || p,
          formEncType: c.encType || h,
          replace: c.replace,
          state: c.state,
          fromRouteId: s,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [o, l, s]
  );
}
function hg(o, { relative: l } = {}) {
  let { basename: s } = L.useContext(It),
    a = L.useContext(Vt);
  Ce(a, "useFormAction must be used inside a RouteContext");
  let [c] = a.matches.slice(-1),
    f = { ...Gr(o || ".", { relative: l }) },
    p = Tn();
  if (o == null) {
    f.search = p.search;
    let h = new URLSearchParams(f.search),
      y = h.getAll("index");
    if (y.some((w) => w === "")) {
      h.delete("index"),
        y.filter((_) => _).forEach((_) => h.append("index", _));
      let w = h.toString();
      f.search = w ? `?${w}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : Wt([s, f.pathname])),
    qr(f)
  );
}
function mg(o, l = {}) {
  let s = L.useContext(Ff);
  Ce(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = bf("useViewTransitionState"),
    c = Gr(o, { relative: l.relative });
  if (!s.isTransitioning) return !1;
  let f = fn(s.currentLocation.pathname, a) || s.currentLocation.pathname,
    p = fn(s.nextLocation.pathname, a) || s.nextLocation.pathname;
  return xl(c.pathname, p) != null || xl(c.pathname, f) != null;
}
new TextEncoder();
function gg({
  diacritics: o,
  position: l,
  id: s,
  pName: a,
  selectedColor: c,
  sendingWord: f,
  setSendingWord: p,
  arabicAlphabet: h,
  arabicWords: y,
  word: g,
  cellId: w,
}) {
  const _ = Ht + "arabic-words/",
    [R, I] = L.useState(_),
    [k, T] = L.useState("POST"),
    A = localStorage.getItem("user") != null,
    [M, b] = L.useState([]);
  L.useState([]), console.log(w);
  const G = localStorage.getItem("access_token");
  return S.jsx(S.Fragment, {
    children: S.jsxs("div", {
      className: "flex flex-row w-full p-1 mt-6 bg-gray-200 rounded-lg",
      children: [
        A &&
          S.jsxs(S.Fragment, {
            children: [
              S.jsx("button", {
                className:
                  "w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200",
                onClick: () => {
                  T("DELETE"), console.log(R, k), rf(null, _ + w + "/", k, G);
                },
                children: S.jsx(Dh, { className: "w-3 h-3 text-red-500" }),
              }),
              S.jsx("button", {
                className:
                  "w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-blue-200",
                onClick: () => {
                  document.getElementById(l + s).classList.toggle("hidden"),
                    I(_ + w + "/"),
                    T("PATCH"),
                    console.log(_ + w + "/", k, G);
                },
                children: S.jsx(Hh, { className: "w-3 h-3 text-blue-500" }),
              }),
              S.jsx("button", {
                className:
                  "w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-yellow-200",
                onClick: () => {
                  document.getElementById(l + s).classList.toggle("hidden"),
                    T("POST"),
                    console.log(k);
                },
                children: S.jsx(Uh, { className: "w-3 h-3 text-yellow-500" }),
              }),
            ],
          }),
        S.jsx("button", {
          className:
            "w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-green-200",
          onClick: async () => {
            document.getElementById(l + s + "ID").classList.toggle("hidden"),
              console.log(g);
            try {
              const J = await wl(Ht + "quran-words/filter_by_word/?word=" + g);
              J
                ? (J.forEach((le) => console.log(le)), b(J))
                : console.log("Not found in Quran DB");
            } catch (J) {
              console.error("Error fetching data:", J);
            }
          },
          children: S.jsx(Oh, { className: "w-3 h-3 text-green-500" }),
        }),
        S.jsx("div", {
          id: `${l}${s}ID`,
          className: "hidden",
          children: S.jsxs("table", {
            className: "text-2xl",
            children: [
              S.jsx("thead", {
                children: S.jsxs("tr", {
                  children: [
                    S.jsx("th", { className: "border", children: " সুরা " }),
                    S.jsx("th", { className: "border", children: " আয়াত " }),
                  ],
                }),
              }),
              S.jsx(
                "tbody",
                {
                  children: M.map((J, le) =>
                    S.jsxs(
                      "tr",
                      {
                        children: [
                          S.jsx("td", {
                            className: "border",
                            children: J.sura,
                          }),
                          S.jsx("td", { className: "border", children: J.aya }),
                        ],
                      },
                      `${l}${s}${le}trow`
                    )
                  ),
                },
                `${l}${s}tbody`
              ),
            ],
          }),
        }),
        S.jsx("button", {
          className:
            "w-4 h-4 flex-1 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-200",
          onClick: async () => {
            try {
              const J = await wl(Ht + "quran-words/filter_by_word/?word=" + g);
              console.log(J),
                (document.getElementById(l + s + "Audio").src =
                  "/wbw" + J[0].audio),
                document.getElementById(l + s + "Audio").play(),
                (document.getElementById(l + s + "Audio").classList = "hidden"),
                console.log("/wbw" + J[0].audio);
            } catch (J) {
              console.error("❌ Error fetching data:", J);
            }
          },
          children: S.jsx(Ah, { className: "w-3 h-3 text-red-500" }),
        }),
        S.jsxs("audio", {
          controls: !0,
          id: `${l}${s}Audio`,
          className: "hidden",
          children: [
            S.jsx("source", { src: "", type: "audio/mpeg" }),
            "The Word can't be found in Quran words database.",
          ],
        }),
        S.jsxs("div", {
          id: `${l}${s}`,
          className: "hidden",
          children: [
            S.jsx(jf, {
              selectedColor: c,
              sendingWord: f,
              setSendingWord: p,
              arabicAlphabet: h,
            }),
            S.jsx("button", {
              className: "bg-gray-300",
              onClick: () =>
                rf(
                  {
                    diacritics: o,
                    position: l,
                    word: f,
                    bangla: "",
                    english: "",
                    parts_of_speech: "",
                    letter: s,
                    join_diacritics: a,
                  },
                  R,
                  k,
                  G
                ),
              children: S.jsx(Vh, { className: "w-8 h-8 text-blue-500" }),
            }),
          ],
        }),
      ],
    }),
  });
}
function yg({
  arabicWords: o,
  selectedColor: l,
  diacritics: s,
  position: a,
  id: c,
  pName: f,
  in_quran: p = "false",
  sendingWord: h,
  setSendingWord: y,
  arabicAlphabet: g,
}) {
  var I, k;
  const [w, _] = L.useState(
      ((I = o.find(
        (T) =>
          T.diacritics === s &&
          T.position === a &&
          T.letter == c &&
          T.join_diacritics == f
      )) == null
        ? void 0
        : I.word) || ""
    ),
    R =
      ((k = o.find(
        (T) =>
          T.diacritics === s &&
          T.position === a &&
          T.letter == c &&
          T.join_diacritics == f
      )) == null
        ? void 0
        : k.id) || "";
  return (
    console.log(R),
    S.jsxs("td", {
      className: `py-2 px-4 border border-gray-300 text-8xl text-center 
                  ${l.textColor}
                  `,
      children: [
        w,
        S.jsx(gg, {
          diacritics: s,
          position: a,
          id: c,
          pName: f,
          selectedColor: l,
          sendingWord: h,
          setSendingWord: y,
          arabicAlphabet: g,
          arabicWords: o,
          word: w,
          cellId: R,
        }),
      ],
    })
  );
}
const pf = ({
    selectedColor: o,
    arabicAlphabet: l,
    diacritics: s,
    arabicAlphabetDiacritics: a,
    page: c,
  }) => {
    const [f, p] = L.useState("");
    console.log("wordTable.jsx");
    let h = "POST",
      g = `${Ht + "arabic-words/"}filter_by_diacritics/?diacritic=${s}`;
    console.log(g);
    const [w, _] = L.useState([]);
    return (
      L.useEffect(() => {
        async function R() {
          const I = await wl(g);
          _(I);
        }
        R();
      }, []),
      console.log(w),
      console.log(o),
      console.log(h),
      console.log(c.column),
      c.column.map((R, I) => console.log(I)),
      S.jsxs("div", {
        className: `container mx-auto p-4 ${o.backgroundColor} ${o.textColor}`,
        children: [
          S.jsx("h1", {
            className: "text-2xl font-bold mb-4 text-center font-bangla",
            children: c.title,
          }),
          S.jsxs("table", {
            className: `min-w-full border border-gray-300 ${o.backgroundColor} ${o.textColor}`,
            children: [
              S.jsx("thead", {
                children: S.jsxs("tr", {
                  children: [
                    c.column
                      .filter((R) => R != "")
                      .map((R) =>
                        S.jsx("th", {
                          className:
                            "py-2 px-4 border border-gray-300 font-bangla",
                          children: R,
                        })
                      ),
                    S.jsx("th", {
                      className: "py-2 px-4 border border-gray-300",
                      children: "হরফ",
                    }),
                  ],
                }),
              }),
              S.jsx("tbody", {
                children: l
                  .filter((R) => R.extra != 1)
                  .map((R, I) =>
                    S.jsx(S.Fragment, {
                      children: S.jsxs(
                        "tr",
                        {
                          className: "bg-red",
                          children: [
                            c.column.map(
                              (k, T) =>
                                k != "" &&
                                S.jsx(yg, {
                                  arabicWords: w,
                                  arabicAlphabet: l,
                                  selectedColor: o,
                                  diacritics: s,
                                  position: c.columnEn[T],
                                  id: I + 1,
                                  pName: c.name,
                                  sendingWord: f,
                                  setSendingWord: p,
                                })
                            ),
                            S.jsxs("td", {
                              className:
                                "py-2 px-4 border-t border-gray-300 text-8xl text-center ",
                              children: [
                                R.alphabet,
                                String.fromCodePoint(parseInt(a, 16)),
                              ],
                            }),
                          ],
                        },
                        I
                      ),
                    })
                  ),
              }),
            ],
          }),
        ],
      })
    );
  },
  vg = ({ selectedColor: o }) =>
    S.jsx("div", {
      children: S.jsx("p", {
        className: `${o.backgroundColor}
            ${o.textColor} text-8xl`,
        children: "Coming Soon!",
      }),
    });
function Kf(o, l) {
  return function () {
    return o.apply(l, arguments);
  };
}
const { toString: wg } = Object.prototype,
  { getPrototypeOf: Ys } = Object,
  Rl = ((o) => (l) => {
    const s = wg.call(l);
    return o[s] || (o[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  St = (o) => ((o = o.toLowerCase()), (l) => Rl(l) === o),
  Nl = (o) => (l) => typeof l === o,
  { isArray: rr } = Array,
  Jr = Nl("undefined");
function xg(o) {
  return (
    o !== null &&
    !Jr(o) &&
    o.constructor !== null &&
    !Jr(o.constructor) &&
    it(o.constructor.isBuffer) &&
    o.constructor.isBuffer(o)
  );
}
const qf = St("ArrayBuffer");
function Sg(o) {
  let l;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (l = ArrayBuffer.isView(o))
      : (l = o && o.buffer && qf(o.buffer)),
    l
  );
}
const kg = Nl("string"),
  it = Nl("function"),
  Jf = Nl("number"),
  _l = (o) => o !== null && typeof o == "object",
  Eg = (o) => o === !0 || o === !1,
  gl = (o) => {
    if (Rl(o) !== "object") return !1;
    const l = Ys(o);
    return (
      (l === null ||
        l === Object.prototype ||
        Object.getPrototypeOf(l) === null) &&
      !(Symbol.toStringTag in o) &&
      !(Symbol.iterator in o)
    );
  },
  Cg = St("Date"),
  Rg = St("File"),
  Ng = St("Blob"),
  _g = St("FileList"),
  Pg = (o) => _l(o) && it(o.pipe),
  Tg = (o) => {
    let l;
    return (
      o &&
      ((typeof FormData == "function" && o instanceof FormData) ||
        (it(o.append) &&
          ((l = Rl(o)) === "formdata" ||
            (l === "object" &&
              it(o.toString) &&
              o.toString() === "[object FormData]"))))
    );
  },
  jg = St("URLSearchParams"),
  [Lg, Og, Ig, Ag] = ["ReadableStream", "Request", "Response", "Headers"].map(
    St
  ),
  zg = (o) =>
    o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(o, l, { allOwnKeys: s = !1 } = {}) {
  if (o === null || typeof o > "u") return;
  let a, c;
  if ((typeof o != "object" && (o = [o]), rr(o)))
    for (a = 0, c = o.length; a < c; a++) l.call(null, o[a], a, o);
  else {
    const f = s ? Object.getOwnPropertyNames(o) : Object.keys(o),
      p = f.length;
    let h;
    for (a = 0; a < p; a++) (h = f[a]), l.call(null, o[h], h, o);
  }
}
function Yf(o, l) {
  l = l.toLowerCase();
  const s = Object.keys(o);
  let a = s.length,
    c;
  for (; a-- > 0; ) if (((c = s[a]), l === c.toLowerCase())) return c;
  return null;
}
const Rn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Xf = (o) => !Jr(o) && o !== Rn;
function $s() {
  const { caseless: o } = (Xf(this) && this) || {},
    l = {},
    s = (a, c) => {
      const f = (o && Yf(l, c)) || c;
      gl(l[f]) && gl(a)
        ? (l[f] = $s(l[f], a))
        : gl(a)
        ? (l[f] = $s({}, a))
        : rr(a)
        ? (l[f] = a.slice())
        : (l[f] = a);
    };
  for (let a = 0, c = arguments.length; a < c; a++)
    arguments[a] && Zr(arguments[a], s);
  return l;
}
const Dg = (o, l, s, { allOwnKeys: a } = {}) => (
    Zr(
      l,
      (c, f) => {
        s && it(c) ? (o[f] = Kf(c, s)) : (o[f] = c);
      },
      { allOwnKeys: a }
    ),
    o
  ),
  Fg = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o),
  $g = (o, l, s, a) => {
    (o.prototype = Object.create(l.prototype, a)),
      (o.prototype.constructor = o),
      Object.defineProperty(o, "super", { value: l.prototype }),
      s && Object.assign(o.prototype, s);
  },
  Mg = (o, l, s, a) => {
    let c, f, p;
    const h = {};
    if (((l = l || {}), o == null)) return l;
    do {
      for (c = Object.getOwnPropertyNames(o), f = c.length; f-- > 0; )
        (p = c[f]), (!a || a(p, o, l)) && !h[p] && ((l[p] = o[p]), (h[p] = !0));
      o = s !== !1 && Ys(o);
    } while (o && (!s || s(o, l)) && o !== Object.prototype);
    return l;
  },
  Ug = (o, l, s) => {
    (o = String(o)),
      (s === void 0 || s > o.length) && (s = o.length),
      (s -= l.length);
    const a = o.indexOf(l, s);
    return a !== -1 && a === s;
  },
  Bg = (o) => {
    if (!o) return null;
    if (rr(o)) return o;
    let l = o.length;
    if (!Jf(l)) return null;
    const s = new Array(l);
    for (; l-- > 0; ) s[l] = o[l];
    return s;
  },
  Hg = (
    (o) => (l) =>
      o && l instanceof o
  )(typeof Uint8Array < "u" && Ys(Uint8Array)),
  Wg = (o, l) => {
    const a = (o && o[Symbol.iterator]).call(o);
    let c;
    for (; (c = a.next()) && !c.done; ) {
      const f = c.value;
      l.call(o, f[0], f[1]);
    }
  },
  Vg = (o, l) => {
    let s;
    const a = [];
    for (; (s = o.exec(l)) !== null; ) a.push(s);
    return a;
  },
  Qg = St("HTMLFormElement"),
  bg = (o) =>
    o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, a, c) {
      return a.toUpperCase() + c;
    }),
  hf = (
    ({ hasOwnProperty: o }) =>
    (l, s) =>
      o.call(l, s)
  )(Object.prototype),
  Kg = St("RegExp"),
  Gf = (o, l) => {
    const s = Object.getOwnPropertyDescriptors(o),
      a = {};
    Zr(s, (c, f) => {
      let p;
      (p = l(c, f, o)) !== !1 && (a[f] = p || c);
    }),
      Object.defineProperties(o, a);
  },
  qg = (o) => {
    Gf(o, (l, s) => {
      if (it(o) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const a = o[s];
      if (it(a)) {
        if (((l.enumerable = !1), "writable" in l)) {
          l.writable = !1;
          return;
        }
        l.set ||
          (l.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  Jg = (o, l) => {
    const s = {},
      a = (c) => {
        c.forEach((f) => {
          s[f] = !0;
        });
      };
    return rr(o) ? a(o) : a(String(o).split(l)), s;
  },
  Yg = () => {},
  Xg = (o, l) => (o != null && Number.isFinite((o = +o)) ? o : l),
  Os = "abcdefghijklmnopqrstuvwxyz",
  mf = "0123456789",
  Zf = { DIGIT: mf, ALPHA: Os, ALPHA_DIGIT: Os + Os.toUpperCase() + mf },
  Gg = (o = 16, l = Zf.ALPHA_DIGIT) => {
    let s = "";
    const { length: a } = l;
    for (; o--; ) s += l[(Math.random() * a) | 0];
    return s;
  };
function Zg(o) {
  return !!(
    o &&
    it(o.append) &&
    o[Symbol.toStringTag] === "FormData" &&
    o[Symbol.iterator]
  );
}
const e0 = (o) => {
    const l = new Array(10),
      s = (a, c) => {
        if (_l(a)) {
          if (l.indexOf(a) >= 0) return;
          if (!("toJSON" in a)) {
            l[c] = a;
            const f = rr(a) ? [] : {};
            return (
              Zr(a, (p, h) => {
                const y = s(p, c + 1);
                !Jr(y) && (f[h] = y);
              }),
              (l[c] = void 0),
              f
            );
          }
        }
        return a;
      };
    return s(o, 0);
  },
  t0 = St("AsyncFunction"),
  n0 = (o) => o && (_l(o) || it(o)) && it(o.then) && it(o.catch),
  ed = ((o, l) =>
    o
      ? setImmediate
      : l
      ? ((s, a) => (
          Rn.addEventListener(
            "message",
            ({ source: c, data: f }) => {
              c === Rn && f === s && a.length && a.shift()();
            },
            !1
          ),
          (c) => {
            a.push(c), Rn.postMessage(s, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    it(Rn.postMessage)
  ),
  r0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Rn)
      : (typeof process < "u" && process.nextTick) || ed,
  O = {
    isArray: rr,
    isArrayBuffer: qf,
    isBuffer: xg,
    isFormData: Tg,
    isArrayBufferView: Sg,
    isString: kg,
    isNumber: Jf,
    isBoolean: Eg,
    isObject: _l,
    isPlainObject: gl,
    isReadableStream: Lg,
    isRequest: Og,
    isResponse: Ig,
    isHeaders: Ag,
    isUndefined: Jr,
    isDate: Cg,
    isFile: Rg,
    isBlob: Ng,
    isRegExp: Kg,
    isFunction: it,
    isStream: Pg,
    isURLSearchParams: jg,
    isTypedArray: Hg,
    isFileList: _g,
    forEach: Zr,
    merge: $s,
    extend: Dg,
    trim: zg,
    stripBOM: Fg,
    inherits: $g,
    toFlatObject: Mg,
    kindOf: Rl,
    kindOfTest: St,
    endsWith: Ug,
    toArray: Bg,
    forEachEntry: Wg,
    matchAll: Vg,
    isHTMLForm: Qg,
    hasOwnProperty: hf,
    hasOwnProp: hf,
    reduceDescriptors: Gf,
    freezeMethods: qg,
    toObjectSet: Jg,
    toCamelCase: bg,
    noop: Yg,
    toFiniteNumber: Xg,
    findKey: Yf,
    global: Rn,
    isContextDefined: Xf,
    ALPHABET: Zf,
    generateString: Gg,
    isSpecCompliantForm: Zg,
    toJSONObject: e0,
    isAsyncFn: t0,
    isThenable: n0,
    setImmediate: ed,
    asap: r0,
  };
function te(o, l, s, a, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = o),
    (this.name = "AxiosError"),
    l && (this.code = l),
    s && (this.config = s),
    a && (this.request = a),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
O.inherits(te, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const td = te.prototype,
  nd = {};
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
].forEach((o) => {
  nd[o] = { value: o };
});
Object.defineProperties(te, nd);
Object.defineProperty(td, "isAxiosError", { value: !0 });
te.from = (o, l, s, a, c, f) => {
  const p = Object.create(td);
  return (
    O.toFlatObject(
      o,
      p,
      function (y) {
        return y !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    te.call(p, o.message, l, s, a, c),
    (p.cause = o),
    (p.name = o.name),
    f && Object.assign(p, f),
    p
  );
};
const o0 = null;
function Ms(o) {
  return O.isPlainObject(o) || O.isArray(o);
}
function rd(o) {
  return O.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function gf(o, l, s) {
  return o
    ? o
        .concat(l)
        .map(function (c, f) {
          return (c = rd(c)), !s && f ? "[" + c + "]" : c;
        })
        .join(s ? "." : "")
    : l;
}
function l0(o) {
  return O.isArray(o) && !o.some(Ms);
}
const i0 = O.toFlatObject(O, {}, null, function (l) {
  return /^is[A-Z]/.test(l);
});
function Pl(o, l, s) {
  if (!O.isObject(o)) throw new TypeError("target must be an object");
  (l = l || new FormData()),
    (s = O.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, P) {
        return !O.isUndefined(P[T]);
      }
    ));
  const a = s.metaTokens,
    c = s.visitor || w,
    f = s.dots,
    p = s.indexes,
    y = (s.Blob || (typeof Blob < "u" && Blob)) && O.isSpecCompliantForm(l);
  if (!O.isFunction(c)) throw new TypeError("visitor must be a function");
  function g(k) {
    if (k === null) return "";
    if (O.isDate(k)) return k.toISOString();
    if (!y && O.isBlob(k))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(k) || O.isTypedArray(k)
      ? y && typeof Blob == "function"
        ? new Blob([k])
        : Buffer.from(k)
      : k;
  }
  function w(k, T, P) {
    let A = k;
    if (k && !P && typeof k == "object") {
      if (O.endsWith(T, "{}"))
        (T = a ? T : T.slice(0, -2)), (k = JSON.stringify(k));
      else if (
        (O.isArray(k) && l0(k)) ||
        ((O.isFileList(k) || O.endsWith(T, "[]")) && (A = O.toArray(k)))
      )
        return (
          (T = rd(T)),
          A.forEach(function (b, G) {
            !(O.isUndefined(b) || b === null) &&
              l.append(
                p === !0 ? gf([T], G, f) : p === null ? T : T + "[]",
                g(b)
              );
          }),
          !1
        );
    }
    return Ms(k) ? !0 : (l.append(gf(P, T, f), g(k)), !1);
  }
  const _ = [],
    R = Object.assign(i0, {
      defaultVisitor: w,
      convertValue: g,
      isVisitable: Ms,
    });
  function I(k, T) {
    if (!O.isUndefined(k)) {
      if (_.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      _.push(k),
        O.forEach(k, function (A, M) {
          (!(O.isUndefined(A) || A === null) &&
            c.call(l, A, O.isString(M) ? M.trim() : M, T, R)) === !0 &&
            I(A, T ? T.concat(M) : [M]);
        }),
        _.pop();
    }
  }
  if (!O.isObject(o)) throw new TypeError("data must be an object");
  return I(o), l;
}
function yf(o) {
  const l = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function (a) {
    return l[a];
  });
}
function Xs(o, l) {
  (this._pairs = []), o && Pl(o, this, l);
}
const od = Xs.prototype;
od.append = function (l, s) {
  this._pairs.push([l, s]);
};
od.toString = function (l) {
  const s = l
    ? function (a) {
        return l.call(this, a, yf);
      }
    : yf;
  return this._pairs
    .map(function (c) {
      return s(c[0]) + "=" + s(c[1]);
    }, "")
    .join("&");
};
function s0(o) {
  return encodeURIComponent(o)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ld(o, l, s) {
  if (!l) return o;
  const a = (s && s.encode) || s0;
  O.isFunction(s) && (s = { serialize: s });
  const c = s && s.serialize;
  let f;
  if (
    (c
      ? (f = c(l, s))
      : (f = O.isURLSearchParams(l) ? l.toString() : new Xs(l, s).toString(a)),
    f)
  ) {
    const p = o.indexOf("#");
    p !== -1 && (o = o.slice(0, p)),
      (o += (o.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return o;
}
class vf {
  constructor() {
    this.handlers = [];
  }
  use(l, s, a) {
    return (
      this.handlers.push({
        fulfilled: l,
        rejected: s,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(l) {
    this.handlers[l] && (this.handlers[l] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(l) {
    O.forEach(this.handlers, function (a) {
      a !== null && l(a);
    });
  }
}
const id = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  u0 = typeof URLSearchParams < "u" ? URLSearchParams : Xs,
  a0 = typeof FormData < "u" ? FormData : null,
  c0 = typeof Blob < "u" ? Blob : null,
  f0 = {
    isBrowser: !0,
    classes: { URLSearchParams: u0, FormData: a0, Blob: c0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Gs = typeof window < "u" && typeof document < "u",
  Us = (typeof navigator == "object" && navigator) || void 0,
  d0 =
    Gs &&
    (!Us || ["ReactNative", "NativeScript", "NS"].indexOf(Us.product) < 0),
  p0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  h0 = (Gs && window.location.href) || "http://localhost",
  m0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Gs,
        hasStandardBrowserEnv: d0,
        hasStandardBrowserWebWorkerEnv: p0,
        navigator: Us,
        origin: h0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  He = { ...m0, ...f0 };
function g0(o, l) {
  return Pl(
    o,
    new He.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, a, c, f) {
          return He.isNode && O.isBuffer(s)
            ? (this.append(a, s.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      l
    )
  );
}
function y0(o) {
  return O.matchAll(/\w+|\[(\w*)]/g, o).map((l) =>
    l[0] === "[]" ? "" : l[1] || l[0]
  );
}
function v0(o) {
  const l = {},
    s = Object.keys(o);
  let a;
  const c = s.length;
  let f;
  for (a = 0; a < c; a++) (f = s[a]), (l[f] = o[f]);
  return l;
}
function sd(o) {
  function l(s, a, c, f) {
    let p = s[f++];
    if (p === "__proto__") return !0;
    const h = Number.isFinite(+p),
      y = f >= s.length;
    return (
      (p = !p && O.isArray(c) ? c.length : p),
      y
        ? (O.hasOwnProp(c, p) ? (c[p] = [c[p], a]) : (c[p] = a), !h)
        : ((!c[p] || !O.isObject(c[p])) && (c[p] = []),
          l(s, a, c[p], f) && O.isArray(c[p]) && (c[p] = v0(c[p])),
          !h)
    );
  }
  if (O.isFormData(o) && O.isFunction(o.entries)) {
    const s = {};
    return (
      O.forEachEntry(o, (a, c) => {
        l(y0(a), c, s, 0);
      }),
      s
    );
  }
  return null;
}
function w0(o, l, s) {
  if (O.isString(o))
    try {
      return (l || JSON.parse)(o), O.trim(o);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (0, JSON.stringify)(o);
}
const eo = {
  transitional: id,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (l, s) {
      const a = s.getContentType() || "",
        c = a.indexOf("application/json") > -1,
        f = O.isObject(l);
      if ((f && O.isHTMLForm(l) && (l = new FormData(l)), O.isFormData(l)))
        return c ? JSON.stringify(sd(l)) : l;
      if (
        O.isArrayBuffer(l) ||
        O.isBuffer(l) ||
        O.isStream(l) ||
        O.isFile(l) ||
        O.isBlob(l) ||
        O.isReadableStream(l)
      )
        return l;
      if (O.isArrayBufferView(l)) return l.buffer;
      if (O.isURLSearchParams(l))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          l.toString()
        );
      let h;
      if (f) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return g0(l, this.formSerializer).toString();
        if ((h = O.isFileList(l)) || a.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return Pl(
            h ? { "files[]": l } : l,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return f || c ? (s.setContentType("application/json", !1), w0(l)) : l;
    },
  ],
  transformResponse: [
    function (l) {
      const s = this.transitional || eo.transitional,
        a = s && s.forcedJSONParsing,
        c = this.responseType === "json";
      if (O.isResponse(l) || O.isReadableStream(l)) return l;
      if (l && O.isString(l) && ((a && !this.responseType) || c)) {
        const p = !(s && s.silentJSONParsing) && c;
        try {
          return JSON.parse(l);
        } catch (h) {
          if (p)
            throw h.name === "SyntaxError"
              ? te.from(h, te.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return l;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: He.classes.FormData, Blob: He.classes.Blob },
  validateStatus: function (l) {
    return l >= 200 && l < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
  eo.headers[o] = {};
});
const x0 = O.toObjectSet([
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
  S0 = (o) => {
    const l = {};
    let s, a, c;
    return (
      o &&
        o
          .split(
            `
`
          )
          .forEach(function (p) {
            (c = p.indexOf(":")),
              (s = p.substring(0, c).trim().toLowerCase()),
              (a = p.substring(c + 1).trim()),
              !(!s || (l[s] && x0[s])) &&
                (s === "set-cookie"
                  ? l[s]
                    ? l[s].push(a)
                    : (l[s] = [a])
                  : (l[s] = l[s] ? l[s] + ", " + a : a));
          }),
      l
    );
  },
  wf = Symbol("internals");
function Kr(o) {
  return o && String(o).trim().toLowerCase();
}
function yl(o) {
  return o === !1 || o == null ? o : O.isArray(o) ? o.map(yl) : String(o);
}
function k0(o) {
  const l = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = s.exec(o)); ) l[a[1]] = a[2];
  return l;
}
const E0 = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function Is(o, l, s, a, c) {
  if (O.isFunction(a)) return a.call(this, l, s);
  if ((c && (l = s), !!O.isString(l))) {
    if (O.isString(a)) return l.indexOf(a) !== -1;
    if (O.isRegExp(a)) return a.test(l);
  }
}
function C0(o) {
  return o
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (l, s, a) => s.toUpperCase() + a);
}
function R0(o, l) {
  const s = O.toCamelCase(" " + l);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(o, a + s, {
      value: function (c, f, p) {
        return this[a].call(this, l, c, f, p);
      },
      configurable: !0,
    });
  });
}
class Ge {
  constructor(l) {
    l && this.set(l);
  }
  set(l, s, a) {
    const c = this;
    function f(h, y, g) {
      const w = Kr(y);
      if (!w) throw new Error("header name must be a non-empty string");
      const _ = O.findKey(c, w);
      (!_ || c[_] === void 0 || g === !0 || (g === void 0 && c[_] !== !1)) &&
        (c[_ || y] = yl(h));
    }
    const p = (h, y) => O.forEach(h, (g, w) => f(g, w, y));
    if (O.isPlainObject(l) || l instanceof this.constructor) p(l, s);
    else if (O.isString(l) && (l = l.trim()) && !E0(l)) p(S0(l), s);
    else if (O.isHeaders(l)) for (const [h, y] of l.entries()) f(y, h, a);
    else l != null && f(s, l, a);
    return this;
  }
  get(l, s) {
    if (((l = Kr(l)), l)) {
      const a = O.findKey(this, l);
      if (a) {
        const c = this[a];
        if (!s) return c;
        if (s === !0) return k0(c);
        if (O.isFunction(s)) return s.call(this, c, a);
        if (O.isRegExp(s)) return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(l, s) {
    if (((l = Kr(l)), l)) {
      const a = O.findKey(this, l);
      return !!(a && this[a] !== void 0 && (!s || Is(this, this[a], a, s)));
    }
    return !1;
  }
  delete(l, s) {
    const a = this;
    let c = !1;
    function f(p) {
      if (((p = Kr(p)), p)) {
        const h = O.findKey(a, p);
        h && (!s || Is(a, a[h], h, s)) && (delete a[h], (c = !0));
      }
    }
    return O.isArray(l) ? l.forEach(f) : f(l), c;
  }
  clear(l) {
    const s = Object.keys(this);
    let a = s.length,
      c = !1;
    for (; a--; ) {
      const f = s[a];
      (!l || Is(this, this[f], f, l, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(l) {
    const s = this,
      a = {};
    return (
      O.forEach(this, (c, f) => {
        const p = O.findKey(a, f);
        if (p) {
          (s[p] = yl(c)), delete s[f];
          return;
        }
        const h = l ? C0(f) : String(f).trim();
        h !== f && delete s[f], (s[h] = yl(c)), (a[h] = !0);
      }),
      this
    );
  }
  concat(...l) {
    return this.constructor.concat(this, ...l);
  }
  toJSON(l) {
    const s = Object.create(null);
    return (
      O.forEach(this, (a, c) => {
        a != null && a !== !1 && (s[c] = l && O.isArray(a) ? a.join(", ") : a);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([l, s]) => l + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(l) {
    return l instanceof this ? l : new this(l);
  }
  static concat(l, ...s) {
    const a = new this(l);
    return s.forEach((c) => a.set(c)), a;
  }
  static accessor(l) {
    const a = (this[wf] = this[wf] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(p) {
      const h = Kr(p);
      a[h] || (R0(c, p), (a[h] = !0));
    }
    return O.isArray(l) ? l.forEach(f) : f(l), this;
  }
}
Ge.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
O.reduceDescriptors(Ge.prototype, ({ value: o }, l) => {
  let s = l[0].toUpperCase() + l.slice(1);
  return {
    get: () => o,
    set(a) {
      this[s] = a;
    },
  };
});
O.freezeMethods(Ge);
function As(o, l) {
  const s = this || eo,
    a = l || s,
    c = Ge.from(a.headers);
  let f = a.data;
  return (
    O.forEach(o, function (h) {
      f = h.call(s, f, c.normalize(), l ? l.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function ud(o) {
  return !!(o && o.__CANCEL__);
}
function or(o, l, s) {
  te.call(this, o ?? "canceled", te.ERR_CANCELED, l, s),
    (this.name = "CanceledError");
}
O.inherits(or, te, { __CANCEL__: !0 });
function ad(o, l, s) {
  const a = s.config.validateStatus;
  !s.status || !a || a(s.status)
    ? o(s)
    : l(
        new te(
          "Request failed with status code " + s.status,
          [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
function N0(o) {
  const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return (l && l[1]) || "";
}
function _0(o, l) {
  o = o || 10;
  const s = new Array(o),
    a = new Array(o);
  let c = 0,
    f = 0,
    p;
  return (
    (l = l !== void 0 ? l : 1e3),
    function (y) {
      const g = Date.now(),
        w = a[f];
      p || (p = g), (s[c] = y), (a[c] = g);
      let _ = f,
        R = 0;
      for (; _ !== c; ) (R += s[_++]), (_ = _ % o);
      if (((c = (c + 1) % o), c === f && (f = (f + 1) % o), g - p < l)) return;
      const I = w && g - w;
      return I ? Math.round((R * 1e3) / I) : void 0;
    }
  );
}
function P0(o, l) {
  let s = 0,
    a = 1e3 / l,
    c,
    f;
  const p = (g, w = Date.now()) => {
    (s = w), (c = null), f && (clearTimeout(f), (f = null)), o.apply(null, g);
  };
  return [
    (...g) => {
      const w = Date.now(),
        _ = w - s;
      _ >= a
        ? p(g, w)
        : ((c = g),
          f ||
            (f = setTimeout(() => {
              (f = null), p(c);
            }, a - _)));
    },
    () => c && p(c),
  ];
}
const Sl = (o, l, s = 3) => {
    let a = 0;
    const c = _0(50, 250);
    return P0((f) => {
      const p = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        y = p - a,
        g = c(y),
        w = p <= h;
      a = p;
      const _ = {
        loaded: p,
        total: h,
        progress: h ? p / h : void 0,
        bytes: y,
        rate: g || void 0,
        estimated: g && h && w ? (h - p) / g : void 0,
        event: f,
        lengthComputable: h != null,
        [l ? "download" : "upload"]: !0,
      };
      o(_);
    }, s);
  },
  xf = (o, l) => {
    const s = o != null;
    return [(a) => l[0]({ lengthComputable: s, total: o, loaded: a }), l[1]];
  },
  Sf =
    (o) =>
    (...l) =>
      O.asap(() => o(...l)),
  T0 = He.hasStandardBrowserEnv
    ? ((o, l) => (s) => (
        (s = new URL(s, He.origin)),
        o.protocol === s.protocol &&
          o.host === s.host &&
          (l || o.port === s.port)
      ))(
        new URL(He.origin),
        He.navigator && /(msie|trident)/i.test(He.navigator.userAgent)
      )
    : () => !0,
  j0 = He.hasStandardBrowserEnv
    ? {
        write(o, l, s, a, c, f) {
          const p = [o + "=" + encodeURIComponent(l)];
          O.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()),
            O.isString(a) && p.push("path=" + a),
            O.isString(c) && p.push("domain=" + c),
            f === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(o) {
          const l = document.cookie.match(
            new RegExp("(^|;\\s*)(" + o + ")=([^;]*)")
          );
          return l ? decodeURIComponent(l[3]) : null;
        },
        remove(o) {
          this.write(o, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function L0(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function O0(o, l) {
  return l ? o.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : o;
}
function cd(o, l) {
  return o && !L0(l) ? O0(o, l) : l;
}
const kf = (o) => (o instanceof Ge ? { ...o } : o);
function _n(o, l) {
  l = l || {};
  const s = {};
  function a(g, w, _, R) {
    return O.isPlainObject(g) && O.isPlainObject(w)
      ? O.merge.call({ caseless: R }, g, w)
      : O.isPlainObject(w)
      ? O.merge({}, w)
      : O.isArray(w)
      ? w.slice()
      : w;
  }
  function c(g, w, _, R) {
    if (O.isUndefined(w)) {
      if (!O.isUndefined(g)) return a(void 0, g, _, R);
    } else return a(g, w, _, R);
  }
  function f(g, w) {
    if (!O.isUndefined(w)) return a(void 0, w);
  }
  function p(g, w) {
    if (O.isUndefined(w)) {
      if (!O.isUndefined(g)) return a(void 0, g);
    } else return a(void 0, w);
  }
  function h(g, w, _) {
    if (_ in l) return a(g, w);
    if (_ in o) return a(void 0, g);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: h,
    headers: (g, w, _) => c(kf(g), kf(w), _, !0),
  };
  return (
    O.forEach(Object.keys(Object.assign({}, o, l)), function (w) {
      const _ = y[w] || c,
        R = _(o[w], l[w], w);
      (O.isUndefined(R) && _ !== h) || (s[w] = R);
    }),
    s
  );
}
const fd = (o) => {
    const l = _n({}, o);
    let {
      data: s,
      withXSRFToken: a,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: p,
      auth: h,
    } = l;
    (l.headers = p = Ge.from(p)),
      (l.url = ld(cd(l.baseURL, l.url), o.params, o.paramsSerializer)),
      h &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let y;
    if (O.isFormData(s)) {
      if (He.hasStandardBrowserEnv || He.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((y = p.getContentType()) !== !1) {
        const [g, ...w] = y
          ? y
              .split(";")
              .map((_) => _.trim())
              .filter(Boolean)
          : [];
        p.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      He.hasStandardBrowserEnv &&
      (a && O.isFunction(a) && (a = a(l)), a || (a !== !1 && T0(l.url)))
    ) {
      const g = c && f && j0.read(f);
      g && p.set(c, g);
    }
    return l;
  },
  I0 = typeof XMLHttpRequest < "u",
  A0 =
    I0 &&
    function (o) {
      return new Promise(function (s, a) {
        const c = fd(o);
        let f = c.data;
        const p = Ge.from(c.headers).normalize();
        let { responseType: h, onUploadProgress: y, onDownloadProgress: g } = c,
          w,
          _,
          R,
          I,
          k;
        function T() {
          I && I(),
            k && k(),
            c.cancelToken && c.cancelToken.unsubscribe(w),
            c.signal && c.signal.removeEventListener("abort", w);
        }
        let P = new XMLHttpRequest();
        P.open(c.method.toUpperCase(), c.url, !0), (P.timeout = c.timeout);
        function A() {
          if (!P) return;
          const b = Ge.from(
              "getAllResponseHeaders" in P && P.getAllResponseHeaders()
            ),
            J = {
              data:
                !h || h === "text" || h === "json"
                  ? P.responseText
                  : P.response,
              status: P.status,
              statusText: P.statusText,
              headers: b,
              config: o,
              request: P,
            };
          ad(
            function (ce) {
              s(ce), T();
            },
            function (ce) {
              a(ce), T();
            },
            J
          ),
            (P = null);
        }
        "onloadend" in P
          ? (P.onloadend = A)
          : (P.onreadystatechange = function () {
              !P ||
                P.readyState !== 4 ||
                (P.status === 0 &&
                  !(P.responseURL && P.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (P.onabort = function () {
            P &&
              (a(new te("Request aborted", te.ECONNABORTED, o, P)), (P = null));
          }),
          (P.onerror = function () {
            a(new te("Network Error", te.ERR_NETWORK, o, P)), (P = null);
          }),
          (P.ontimeout = function () {
            let G = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const J = c.transitional || id;
            c.timeoutErrorMessage && (G = c.timeoutErrorMessage),
              a(
                new te(
                  G,
                  J.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
                  o,
                  P
                )
              ),
              (P = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in P &&
            O.forEach(p.toJSON(), function (G, J) {
              P.setRequestHeader(J, G);
            }),
          O.isUndefined(c.withCredentials) ||
            (P.withCredentials = !!c.withCredentials),
          h && h !== "json" && (P.responseType = c.responseType),
          g && (([R, k] = Sl(g, !0)), P.addEventListener("progress", R)),
          y &&
            P.upload &&
            (([_, I] = Sl(y)),
            P.upload.addEventListener("progress", _),
            P.upload.addEventListener("loadend", I)),
          (c.cancelToken || c.signal) &&
            ((w = (b) => {
              P &&
                (a(!b || b.type ? new or(null, o, P) : b),
                P.abort(),
                (P = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(w),
            c.signal &&
              (c.signal.aborted ? w() : c.signal.addEventListener("abort", w)));
        const M = N0(c.url);
        if (M && He.protocols.indexOf(M) === -1) {
          a(new te("Unsupported protocol " + M + ":", te.ERR_BAD_REQUEST, o));
          return;
        }
        P.send(f || null);
      });
    },
  z0 = (o, l) => {
    const { length: s } = (o = o ? o.filter(Boolean) : []);
    if (l || s) {
      let a = new AbortController(),
        c;
      const f = function (g) {
        if (!c) {
          (c = !0), h();
          const w = g instanceof Error ? g : this.reason;
          a.abort(
            w instanceof te ? w : new or(w instanceof Error ? w.message : w)
          );
        }
      };
      let p =
        l &&
        setTimeout(() => {
          (p = null), f(new te(`timeout ${l} of ms exceeded`, te.ETIMEDOUT));
        }, l);
      const h = () => {
        o &&
          (p && clearTimeout(p),
          (p = null),
          o.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(f)
              : g.removeEventListener("abort", f);
          }),
          (o = null));
      };
      o.forEach((g) => g.addEventListener("abort", f));
      const { signal: y } = a;
      return (y.unsubscribe = () => O.asap(h)), y;
    }
  },
  D0 = function* (o, l) {
    let s = o.byteLength;
    if (s < l) {
      yield o;
      return;
    }
    let a = 0,
      c;
    for (; a < s; ) (c = a + l), yield o.slice(a, c), (a = c);
  },
  F0 = async function* (o, l) {
    for await (const s of $0(o)) yield* D0(s, l);
  },
  $0 = async function* (o) {
    if (o[Symbol.asyncIterator]) {
      yield* o;
      return;
    }
    const l = o.getReader();
    try {
      for (;;) {
        const { done: s, value: a } = await l.read();
        if (s) break;
        yield a;
      }
    } finally {
      await l.cancel();
    }
  },
  Ef = (o, l, s, a) => {
    const c = F0(o, l);
    let f = 0,
      p,
      h = (y) => {
        p || ((p = !0), a && a(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: g, value: w } = await c.next();
            if (g) {
              h(), y.close();
              return;
            }
            let _ = w.byteLength;
            if (s) {
              let R = (f += _);
              s(R);
            }
            y.enqueue(new Uint8Array(w));
          } catch (g) {
            throw (h(g), g);
          }
        },
        cancel(y) {
          return h(y), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Tl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  dd = Tl && typeof ReadableStream == "function",
  M0 =
    Tl &&
    (typeof TextEncoder == "function"
      ? (
          (o) => (l) =>
            o.encode(l)
        )(new TextEncoder())
      : async (o) => new Uint8Array(await new Response(o).arrayBuffer())),
  pd = (o, ...l) => {
    try {
      return !!o(...l);
    } catch {
      return !1;
    }
  },
  U0 =
    dd &&
    pd(() => {
      let o = !1;
      const l = new Request(He.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (o = !0), "half";
        },
      }).headers.has("Content-Type");
      return o && !l;
    }),
  Cf = 64 * 1024,
  Bs = dd && pd(() => O.isReadableStream(new Response("").body)),
  kl = { stream: Bs && ((o) => o.body) };
Tl &&
  ((o) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
      !kl[l] &&
        (kl[l] = O.isFunction(o[l])
          ? (s) => s[l]()
          : (s, a) => {
              throw new te(
                `Response type '${l}' is not supported`,
                te.ERR_NOT_SUPPORT,
                a
              );
            });
    });
  })(new Response());
const B0 = async (o) => {
    if (o == null) return 0;
    if (O.isBlob(o)) return o.size;
    if (O.isSpecCompliantForm(o))
      return (
        await new Request(He.origin, { method: "POST", body: o }).arrayBuffer()
      ).byteLength;
    if (O.isArrayBufferView(o) || O.isArrayBuffer(o)) return o.byteLength;
    if ((O.isURLSearchParams(o) && (o = o + ""), O.isString(o)))
      return (await M0(o)).byteLength;
  },
  H0 = async (o, l) => {
    const s = O.toFiniteNumber(o.getContentLength());
    return s ?? B0(l);
  },
  W0 =
    Tl &&
    (async (o) => {
      let {
        url: l,
        method: s,
        data: a,
        signal: c,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: h,
        onUploadProgress: y,
        responseType: g,
        headers: w,
        withCredentials: _ = "same-origin",
        fetchOptions: R,
      } = fd(o);
      g = g ? (g + "").toLowerCase() : "text";
      let I = z0([c, f && f.toAbortSignal()], p),
        k;
      const T =
        I &&
        I.unsubscribe &&
        (() => {
          I.unsubscribe();
        });
      let P;
      try {
        if (
          y &&
          U0 &&
          s !== "get" &&
          s !== "head" &&
          (P = await H0(w, a)) !== 0
        ) {
          let J = new Request(l, { method: "POST", body: a, duplex: "half" }),
            le;
          if (
            (O.isFormData(a) &&
              (le = J.headers.get("content-type")) &&
              w.setContentType(le),
            J.body)
          ) {
            const [ce, ge] = xf(P, Sl(Sf(y)));
            a = Ef(J.body, Cf, ce, ge);
          }
        }
        O.isString(_) || (_ = _ ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        k = new Request(l, {
          ...R,
          signal: I,
          method: s.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: a,
          duplex: "half",
          credentials: A ? _ : void 0,
        });
        let M = await fetch(k);
        const b = Bs && (g === "stream" || g === "response");
        if (Bs && (h || (b && T))) {
          const J = {};
          ["status", "statusText", "headers"].forEach((ye) => {
            J[ye] = M[ye];
          });
          const le = O.toFiniteNumber(M.headers.get("content-length")),
            [ce, ge] = (h && xf(le, Sl(Sf(h), !0))) || [];
          M = new Response(
            Ef(M.body, Cf, ce, () => {
              ge && ge(), T && T();
            }),
            J
          );
        }
        g = g || "text";
        let G = await kl[O.findKey(kl, g) || "text"](M, o);
        return (
          !b && T && T(),
          await new Promise((J, le) => {
            ad(J, le, {
              data: G,
              headers: Ge.from(M.headers),
              status: M.status,
              statusText: M.statusText,
              config: o,
              request: k,
            });
          })
        );
      } catch (A) {
        throw (
          (T && T(),
          A && A.name === "TypeError" && /fetch/i.test(A.message)
            ? Object.assign(new te("Network Error", te.ERR_NETWORK, o, k), {
                cause: A.cause || A,
              })
            : te.from(A, A && A.code, o, k))
        );
      }
    }),
  Hs = { http: o0, xhr: A0, fetch: W0 };
O.forEach(Hs, (o, l) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: l });
    } catch {}
    Object.defineProperty(o, "adapterName", { value: l });
  }
});
const Rf = (o) => `- ${o}`,
  V0 = (o) => O.isFunction(o) || o === null || o === !1,
  hd = {
    getAdapter: (o) => {
      o = O.isArray(o) ? o : [o];
      const { length: l } = o;
      let s, a;
      const c = {};
      for (let f = 0; f < l; f++) {
        s = o[f];
        let p;
        if (
          ((a = s),
          !V0(s) && ((a = Hs[(p = String(s)).toLowerCase()]), a === void 0))
        )
          throw new te(`Unknown adapter '${p}'`);
        if (a) break;
        c[p || "#" + f] = a;
      }
      if (!a) {
        const f = Object.entries(c).map(
          ([h, y]) =>
            `adapter ${h} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = l
          ? f.length > 1
            ? `since :
` +
              f.map(Rf).join(`
`)
            : " " + Rf(f[0])
          : "as no adapter specified";
        throw new te(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return a;
    },
    adapters: Hs,
  };
function zs(o) {
  if (
    (o.cancelToken && o.cancelToken.throwIfRequested(),
    o.signal && o.signal.aborted)
  )
    throw new or(null, o);
}
function Nf(o) {
  return (
    zs(o),
    (o.headers = Ge.from(o.headers)),
    (o.data = As.call(o, o.transformRequest)),
    ["post", "put", "patch"].indexOf(o.method) !== -1 &&
      o.headers.setContentType("application/x-www-form-urlencoded", !1),
    hd
      .getAdapter(o.adapter || eo.adapter)(o)
      .then(
        function (a) {
          return (
            zs(o),
            (a.data = As.call(o, o.transformResponse, a)),
            (a.headers = Ge.from(a.headers)),
            a
          );
        },
        function (a) {
          return (
            ud(a) ||
              (zs(o),
              a &&
                a.response &&
                ((a.response.data = As.call(
                  o,
                  o.transformResponse,
                  a.response
                )),
                (a.response.headers = Ge.from(a.response.headers)))),
            Promise.reject(a)
          );
        }
      )
  );
}
const md = "1.7.9",
  jl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (o, l) => {
    jl[o] = function (a) {
      return typeof a === o || "a" + (l < 1 ? "n " : " ") + o;
    };
  }
);
const _f = {};
jl.transitional = function (l, s, a) {
  function c(f, p) {
    return (
      "[Axios v" +
      md +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (a ? ". " + a : "")
    );
  }
  return (f, p, h) => {
    if (l === !1)
      throw new te(
        c(p, " has been removed" + (s ? " in " + s : "")),
        te.ERR_DEPRECATED
      );
    return (
      s &&
        !_f[p] &&
        ((_f[p] = !0),
        console.warn(
          c(
            p,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      l ? l(f, p, h) : !0
    );
  };
};
jl.spelling = function (l) {
  return (s, a) => (console.warn(`${a} is likely a misspelling of ${l}`), !0);
};
function Q0(o, l, s) {
  if (typeof o != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(o);
  let c = a.length;
  for (; c-- > 0; ) {
    const f = a[c],
      p = l[f];
    if (p) {
      const h = o[f],
        y = h === void 0 || p(h, f, o);
      if (y !== !0)
        throw new te("option " + f + " must be " + y, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new te("Unknown option " + f, te.ERR_BAD_OPTION);
  }
}
const vl = { assertOptions: Q0, validators: jl },
  jt = vl.validators;
class Nn {
  constructor(l) {
    (this.defaults = l),
      (this.interceptors = { request: new vf(), response: new vf() });
  }
  async request(l, s) {
    try {
      return await this._request(l, s);
    } catch (a) {
      if (a instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack
            ? f &&
              !String(a.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (a.stack +=
                `
` + f)
            : (a.stack = f);
        } catch {}
      }
      throw a;
    }
  }
  _request(l, s) {
    typeof l == "string" ? ((s = s || {}), (s.url = l)) : (s = l || {}),
      (s = _n(this.defaults, s));
    const { transitional: a, paramsSerializer: c, headers: f } = s;
    a !== void 0 &&
      vl.assertOptions(
        a,
        {
          silentJSONParsing: jt.transitional(jt.boolean),
          forcedJSONParsing: jt.transitional(jt.boolean),
          clarifyTimeoutError: jt.transitional(jt.boolean),
        },
        !1
      ),
      c != null &&
        (O.isFunction(c)
          ? (s.paramsSerializer = { serialize: c })
          : vl.assertOptions(
              c,
              { encode: jt.function, serialize: jt.function },
              !0
            )),
      vl.assertOptions(
        s,
        {
          baseUrl: jt.spelling("baseURL"),
          withXsrfToken: jt.spelling("withXSRFToken"),
        },
        !0
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let p = f && O.merge(f.common, f[s.method]);
    f &&
      O.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (k) => {
          delete f[k];
        }
      ),
      (s.headers = Ge.concat(p, f));
    const h = [];
    let y = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(s) === !1) ||
        ((y = y && T.synchronous), h.unshift(T.fulfilled, T.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (T) {
      g.push(T.fulfilled, T.rejected);
    });
    let w,
      _ = 0,
      R;
    if (!y) {
      const k = [Nf.bind(this), void 0];
      for (
        k.unshift.apply(k, h),
          k.push.apply(k, g),
          R = k.length,
          w = Promise.resolve(s);
        _ < R;

      )
        w = w.then(k[_++], k[_++]);
      return w;
    }
    R = h.length;
    let I = s;
    for (_ = 0; _ < R; ) {
      const k = h[_++],
        T = h[_++];
      try {
        I = k(I);
      } catch (P) {
        T.call(this, P);
        break;
      }
    }
    try {
      w = Nf.call(this, I);
    } catch (k) {
      return Promise.reject(k);
    }
    for (_ = 0, R = g.length; _ < R; ) w = w.then(g[_++], g[_++]);
    return w;
  }
  getUri(l) {
    l = _n(this.defaults, l);
    const s = cd(l.baseURL, l.url);
    return ld(s, l.params, l.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function (l) {
  Nn.prototype[l] = function (s, a) {
    return this.request(
      _n(a || {}, { method: l, url: s, data: (a || {}).data })
    );
  };
});
O.forEach(["post", "put", "patch"], function (l) {
  function s(a) {
    return function (f, p, h) {
      return this.request(
        _n(h || {}, {
          method: l,
          headers: a ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: p,
        })
      );
    };
  }
  (Nn.prototype[l] = s()), (Nn.prototype[l + "Form"] = s(!0));
});
class Zs {
  constructor(l) {
    if (typeof l != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (f) {
      s = f;
    });
    const a = this;
    this.promise.then((c) => {
      if (!a._listeners) return;
      let f = a._listeners.length;
      for (; f-- > 0; ) a._listeners[f](c);
      a._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const p = new Promise((h) => {
          a.subscribe(h), (f = h);
        }).then(c);
        return (
          (p.cancel = function () {
            a.unsubscribe(f);
          }),
          p
        );
      }),
      l(function (f, p, h) {
        a.reason || ((a.reason = new or(f, p, h)), s(a.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : (this._listeners = [l]);
  }
  unsubscribe(l) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(l);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const l = new AbortController(),
      s = (a) => {
        l.abort(a);
      };
    return (
      this.subscribe(s),
      (l.signal.unsubscribe = () => this.unsubscribe(s)),
      l.signal
    );
  }
  static source() {
    let l;
    return {
      token: new Zs(function (c) {
        l = c;
      }),
      cancel: l,
    };
  }
}
function b0(o) {
  return function (s) {
    return o.apply(null, s);
  };
}
function K0(o) {
  return O.isObject(o) && o.isAxiosError === !0;
}
const Ws = {
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
Object.entries(Ws).forEach(([o, l]) => {
  Ws[l] = o;
});
function gd(o) {
  const l = new Nn(o),
    s = Kf(Nn.prototype.request, l);
  return (
    O.extend(s, Nn.prototype, l, { allOwnKeys: !0 }),
    O.extend(s, l, null, { allOwnKeys: !0 }),
    (s.create = function (c) {
      return gd(_n(o, c));
    }),
    s
  );
}
const me = gd(eo);
me.Axios = Nn;
me.CanceledError = or;
me.CancelToken = Zs;
me.isCancel = ud;
me.VERSION = md;
me.toFormData = Pl;
me.AxiosError = te;
me.Cancel = me.CanceledError;
me.all = function (l) {
  return Promise.all(l);
};
me.spread = b0;
me.isAxiosError = K0;
me.mergeConfig = _n;
me.AxiosHeaders = Ge;
me.formToJSON = (o) => sd(O.isHTMLForm(o) ? new FormData(o) : o);
me.getAdapter = hd.getAdapter;
me.HttpStatusCode = Ws;
me.default = me;
function q0() {
  const [o, l] = L.useState("0"),
    s = localStorage.getItem("user");
  return (
    console.log(s),
    L.useEffect(() => {
      const a = localStorage.getItem("refresh_token"),
        c = localStorage.getItem("access_token");
      console.log(c),
        console.log(a),
        c === null
          ? ((window.location.href = "/login"),
            console.log("Access token not found, redirecting to login"))
          : (async () => {
              try {
                const { data: f } = await me.get(Ht + "home/", {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${c}`,
                  },
                });
                console.log("Message from server:", f.message), l(f.message);
              } catch (f) {
                f.response && f.response.status === 401
                  ? (console.log("Not authorized, redirecting to login"),
                    (window.location.href = "/login"))
                  : console.log("Error:", f);
              }
            })();
    }, []),
    S.jsx("div", {
      className: "form-signin mt-5 text-center font-bangla",
      children: S.jsxs("h3", { children: ["Hi ", s, ", ", o] }),
    })
  );
}
const J0 = () => {
    const [o, l] = L.useState(""),
      [s, a] = L.useState(""),
      c = async (f) => {
        f.preventDefault();
        const p = { username: o, password: s },
          { data: h } = await me.post(Ht + "token/", p, {
            headers: { "Content-Type": "application/json" },
            withCredentials: !0,
          });
        localStorage.removeItem("user"),
          localStorage.removeItem("access_token"),
          localStorage.removeItem("refresh_token"),
          localStorage.setItem("access_token", h.access),
          localStorage.setItem("refresh_token", h.refresh),
          localStorage.setItem("user", p.username),
          (me.defaults.headers.common.Authorization = `Bearer ${h.access}`),
          (window.location.href = "/home");
      };
    return S.jsx("div", {
      className: "Auth-form-container",
      children: S.jsx("form", {
        className: "Auth-form",
        onSubmit: c,
        children: S.jsxs("div", {
          className: "Auth-form-content",
          children: [
            S.jsx("h3", { className: "Auth-form-title", children: "Sign In" }),
            S.jsxs("div", {
              className: "form-group mt-3",
              children: [
                S.jsx("label", { children: "Username" }),
                S.jsx("input", {
                  className: "form-control mt-1",
                  placeholder: "Enter Username",
                  name: "username",
                  type: "text",
                  value: o,
                  required: !0,
                  onChange: (f) => l(f.target.value),
                }),
              ],
            }),
            S.jsxs("div", {
              className: "form-group mt-3",
              children: [
                S.jsx("label", { children: "Password" }),
                S.jsx("input", {
                  name: "password",
                  type: "password",
                  className: "form-control mt-1",
                  placeholder: "Enter password",
                  value: s,
                  required: !0,
                  onChange: (f) => a(f.target.value),
                }),
              ],
            }),
            S.jsxs("div", {
              className: "d-grid gap-2 mt-3",
              children: [
                S.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  children: "Submit",
                }),
                S.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  children: "Skip",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Y0 = () => (
    L.useEffect(() => {
      (async () => {
        try {
          const o = localStorage.getItem("refresh_token"),
            l = localStorage.getItem("access_token");
          if (!o || !l) {
            console.log("No tokens found, logging out immediately."),
              localStorage.removeItem("access_token"),
              localStorage.removeItem("refresh_token"),
              localStorage.removeItem("user"),
              (window.location.href = "/login");
            return;
          }
          const s = await me.post(
            Ht + "token/refresh/",
            { refresh: o },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: !0,
            }
          );
          if (s.status === 200) {
            const a = s.data.access,
              c = s.data.refresh;
            localStorage.setItem("access_token", a),
              localStorage.setItem("refresh_token", c),
              await me.post(
                Ht + "logout/",
                { refresh_token: c },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${a}`,
                  },
                  withCredentials: !0,
                }
              ),
              console.log("Logout successful."),
              localStorage.removeItem("access_token"),
              localStorage.removeItem("refresh_token"),
              localStorage.removeItem("user"),
              (me.defaults.headers.common.Authorization = ""),
              (window.location.href = "/login");
          }
        } catch (o) {
          console.error(
            "Error during logout:",
            o.response ? o.response.data : o
          ),
            localStorage.removeItem("access_token"),
            localStorage.removeItem("refresh_token"),
            localStorage.removeItem("user"),
            (me.defaults.headers.common.Authorization = ""),
            (window.location.href = "/login");
        }
      })();
    }, []),
    S.jsx("div", { children: "Logging out..." })
  );
function X0() {
  console.log("App.jsx"), console.log(lt.Harakat.diacritics[0].pages[0].column);
  const [o, l] = L.useState([]);
  L.useEffect(() => {
    async function p() {
      const h = await wl(Ht + "arabic-alphabets/");
      l(h);
    }
    p();
  }, []);
  const [s, a] = L.useState(() => {
      const p = localStorage.getItem("arabic-app-theme");
      if (p)
        try {
          return JSON.parse(p);
        } catch {
          return Ts[2];
        }
      return Ts[2];
    }),
    [c, f] = L.useState(() => {
      const p = localStorage.getItem("arabic-app-color");
      if (p)
        try {
          return JSON.parse(p);
        } catch {
          return s.combinations[2];
        }
      return s.combinations[2];
    });
  return (
    L.useEffect(() => {
      localStorage.setItem("arabic-app-theme", JSON.stringify(s));
    }, [s]),
    L.useEffect(() => {
      localStorage.setItem("arabic-app-color", JSON.stringify(c));
    }, [c]),
    S.jsx(S.Fragment, {
      children: S.jsxs("div", {
        className: "flex w-[98%]",
        children: [
          S.jsx(Qh, {
            selectedColor: c,
            selectedTheme: s,
            setSelectedTheme: a,
            setSelectedColor: f,
            alphabetColorCombinations: Ts,
          }),
          S.jsx(ig, {
            children: S.jsx("main", {
              className: "flex-1 flex max-w-",
              children: S.jsxs(Dm, {
                children: [
                  S.jsx(Lt, { path: "/home", element: S.jsx(q0, {}) }),
                  S.jsx(Lt, { path: "/login", element: S.jsx(J0, {}) }),
                  S.jsx(Lt, { path: "/logout", element: S.jsx(Y0, {}) }),
                  S.jsx(
                    Lt,
                    {
                      path: "/",
                      element: S.jsx(of, {
                        selectedColor: c,
                        withHoverChildren: !0,
                        arabicAlphabet: o,
                      }),
                    },
                    0
                  ),
                  S.jsx(
                    Lt,
                    {
                      path: "/tables",
                      element: S.jsx(pf, {
                        selectedColor: c,
                        arabicAlphabet: o,
                      }),
                    },
                    1
                  ),
                  S.jsx(
                    Lt,
                    {
                      path: "/words",
                      element: S.jsx(jf, {
                        selectedColor: c,
                        arabicAlphabet: o,
                      }),
                    },
                    2
                  ),
                  Object.keys(lt).map((p) =>
                    lt[p].diacritics.map((h, y) =>
                      S.jsxs(S.Fragment, {
                        children: [
                          S.jsx(
                            Lt,
                            {
                              path: `/${p.toLowerCase()}`,
                              element: S.jsx(vg, { selectedColor: c }),
                            },
                            `${y}0`
                          ),
                          S.jsx(
                            Lt,
                            {
                              path: `/${p.toLowerCase()}/${h.name.toLowerCase()}`,
                              element: S.jsx(of, {
                                arabicAlphabet: o,
                                selectedColor: c,
                                arabicAlphabetDiacritics: h.unicode.slice(2),
                                withNames: h.withNames,
                                title: h.title,
                                isSaakinah:
                                  h.name.toLowerCase() === "ashshaddah" ||
                                  h.name.toLowerCase() === "saakinah",
                                isSaddah: h.name.toLowerCase() === "ashshaddah",
                              }),
                            },
                            `${y}1`
                          ),
                          (h.pages || []).map((g, w) =>
                            S.jsx(
                              Lt,
                              {
                                path: `/${p.toLowerCase()}/${h.name.toLowerCase()}${g.name.toLowerCase()}`,
                                element: S.jsx(pf, {
                                  arabicAlphabet: o,
                                  selectedColor: c,
                                  title: g.title,
                                  diacritics: h.name.toLowerCase(),
                                  arabicAlphabetDiacritics: h.unicode.slice(2),
                                  tableColumn: g.column,
                                  page: g,
                                }),
                              },
                              `${p}-${y}-${w}-page`
                            )
                          ),
                        ],
                      })
                    )
                  ),
                ],
              }),
            }),
          }),
        ],
      }),
    })
  );
}
Sh.createRoot(document.getElementById("root")).render(
  S.jsx(L.StrictMode, { children: S.jsx(X0, {}) })
);
