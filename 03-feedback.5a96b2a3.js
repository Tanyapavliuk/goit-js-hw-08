var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var o,r,a,i,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(T,t),l?y(e):i}function O(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=a}function T(){var e=d();if(O(e))return j(e);f=setTimeout(T,function(e){var n=t-(e-u);return g?m(n,a-(e-c)):n}(e))}function j(e){return f=void 0,b&&o?y(e):(o=r=void 0,i)}function h(){var e=d(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),i}return t=p(t)||0,v(n)&&(l=!!n.leading,a=(g="maxWait"in n)?s(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?i:j(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||a.test(e)?i(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector("[name='email']"),message:document.querySelector("[name='message']")},y={};if(b.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",t((function(e){y[e.target.name]=e.target.value;const t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500)),!localStorage.STORAGE_KEY){const{email:e,message:t}=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.getItem("feedback-form-state".email)||(b.email.value=" "),localStorage.getItem("feedback-form-state".message)||(b.message.value=" "),b.email.value=e,b.message.value=t}
//# sourceMappingURL=03-feedback.5a96b2a3.js.map
