/*! For license information please see main.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(3),n(8);var o=r(n(9));var u=function(){function e(){this.element=document.querySelector(".test__image"),this.number=0,this.element.textContent=""+this.number,console.log("Home")}return e.prototype.loadJSON=function(){o.default("/public/json/test.json").then((function(e){document.querySelector(".test__title").textContent=e.testTitle}))},e.prototype.click=function(){var e=this;this.element.addEventListener("click",(function(){e.number++,e.element.textContent=""+e.number}))},e}();document.addEventListener("DOMContentLoaded",(function(){var e=new u;e.loadJSON(),e.click()}))},function(e,t,n){"use strict";var r=n(4);r.keys().forEach((function(e){r(e)}))},function(e,t,n){var r={"./another/index.pug":5,"./another/test/index.pug":6,"./index.pug":7};function o(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=4},function(e,t,n){e.exports=n.p+"another\\index.html"},function(e,t,n){e.exports=n.p+"another\\test\\index.html"},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e),r.onload=function(){4===r.readyState&&200===r.status?t(JSON.parse(r.responseText)):n(new Error(""+r.status))},r.onerror=function(){n(new Error(""+r.status))},r.send(null)}))}}]);