!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("f7677",(function(e,t){var r=o("dCfNN"),n="feedback-form-state",i={form:document.querySelector(".feedback-form"),email:document.querySelector("[name='email']"),message:document.querySelector("[name='message']")},a={};if(i.form.addEventListener("submit",(function(e){var t=JSON.parse(localStorage.getItem(n)),r=t.email,o=t.message;if(""===r||""===o)return;e.preventDefault(),console.log(JSON.parse(localStorage.getItem(n))),e.currentTarget.reset(),localStorage.removeItem(n)})),i.form.addEventListener("input",r((function(e){a.message=i.message.value,a.email=i.email.value,a[e.target.name]=e.target.value;var t=JSON.stringify(a);localStorage.setItem(n,t)}),500)),localStorage.getItem(n)){var u=JSON.parse(localStorage.getItem(n)),f=u.email,l=u.message;""!==f||""!==l?(i.email.value=f,i.message.value=l):(i.email.value=" ",i.email.message=" ")}})),o.register("dCfNN",(function(r,n){var i=o("l5bVx"),a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return v.Date.now()};function x(e,t,r){var n,o,i,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function g(e){return c=e,f=setTimeout(N,t),s?v(e):u}function x(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function N(){var e=y();if(x(e))return j(e);f=setTimeout(N,function(e){var r=t-(e-l);return d?b(r,i-(e-c)):r}(e))}function j(e){return f=void 0,m&&n?v(e):(n=o=void 0,u)}function w(){var e=y(),r=x(e);if(n=arguments,o=this,l=e,r){if(void 0===f)return g(l);if(d)return f=setTimeout(N,t),v(l)}return void 0===f&&(f=setTimeout(N,t)),u}return t=O(t)||0,S(r)&&(s=!!r.leading,i=(d="maxWait"in r)?p(O(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=l=o=f=void 0},w.flush=function(){return void 0===f?u:j(y())},w}function S(e){var r=void 0===e?"undefined":t(i)(e);return!!e&&("object"==r||"function"==r)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(S(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=S(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):f.test(e)?NaN:+e}r.exports=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return S(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),x(e,t,{leading:n,maxWait:t,trailing:o})}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o("f7677")}();
//# sourceMappingURL=03-feedback.9cdfb232.js.map