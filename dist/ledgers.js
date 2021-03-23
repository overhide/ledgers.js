!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("web3")):"function"==typeof define&&define.amd?define("__oh$__",["web3"],r):"object"==typeof exports?exports.__oh$__=r(require("web3")):e.__oh$__=r(e.Web3)}(window,function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(r,t){r.exports=e},function(e,r,t){"use strict";t.r(r),function(e){var n=t(0),o=t.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,r,t,n,o,a,s){try{var u=e[a](s),i=u.value}catch(e){return void t(e)}u.done?r(i):Promise.resolve(i).then(n,o)}function u(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function u(e){s(a,n,o,u,i,"next",e)}function i(e){s(a,n,o,u,i,"throw",e)}u(void 0)})}}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var r="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return d(e,arguments,p(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,e)})(e)}function d(e,r,t){return(d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(e,n));return t&&l(o,t.prototype),o}).apply(null,arguments)}function l(e,r){return(l=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var _=function(){var r="object"==("undefined"==typeof self?"undefined":f(self))&&self.self===self&&self||"object"==(void 0===e?"undefined":f(e))&&e.global===e&&e||this||{};r.oh$=new(function(e){function r(){var e,t,n,o;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=this,t=!(o=(e=p(r)).call.apply(e,[this].concat(s)))||"object"!==f(o)&&"function"!=typeof o?i(n):o,E(i(t),"enable",g),E(i(t),"getImparterTags",G),E(i(t),"canSetCredentials",y),E(i(t),"canGenerateCredentials",k),E(i(t),"canChangeNetwork",v),E(i(t),"generateCredentials",M),E(i(t),"setCredentials",x),E(i(t),"setNetwork",O),E(i(t),"getOverhideRemunerationAPIUri",B),E(i(t),"getCredentials",I),E(i(t),"getNetwork",L),E(i(t),"getTally",W),E(i(t),"getTransactions",C),E(i(t),"isOnLedger",$),E(i(t),"sign",z),E(i(t),"createTransaction",K),t}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&l(e,r)}(r,c(EventTarget)),r}());var t=500,n="eth-web3",a="ohledger",s="ohledger-web3",d=null,w=new Promise(function(e){return d=e}),R=null,m=null,h=[a],T={ETH_WEB3_IMPARTER_TAG:{walletAddress:null,network:null,remuneration_uri:{main:"https://ethereum.overhide.io",rinkeby:"https://rinkeby.ethereum.overhide.io"}},OHLEDGER_IMPARTER_TAG:{oh_ledger_transact_fn:{prod:null,test:null},address:null,secret:null,mode:"test",remuneration_uri:{prod:"https://ledger.overhide.io/v1",test:"https://test.ledger.overhide.io/v1"}},OHLEDGER_WEB3_IMPARTER_TAG:{oh_ledger_transact_fn:{prod:null,test:null},walletAddress:null,mode:"test",remuneration_uri:{prod:"https://ledger.overhide.io/v1",test:"https://test.ledger.overhide.io/v1"}}},A=new o.a("http://localhost:8545").eth.accounts;function b(e,r){var t=document.createEvent("Event");for(var n in t.initEvent(e,!0,!0),r)t[n]=r[n];_.dispatchEvent(t)}function g(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fetcher:fetch}).fetcher;R=e,m=r,d(!0)}function G(){return h}function y(e){return e===a}function k(e){return e===a}function v(e){switch(e){case a:case s:return!0;default:return!1}}function x(e,r){return P.apply(this,arguments)}function P(){return(P=u(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next=e.t0===a?3:17;break;case 3:if("secret"in t){e.next=5;break}throw new Error("'secret' must be passed in");case 5:if("address"in t&&t.address?T.OHLEDGER_IMPARTER_TAG.address=t.address.toLowerCase():T.OHLEDGER_IMPARTER_TAG.address=A.privateKeyToAccount(t.secret).address.toLowerCase(),T.OHLEDGER_IMPARTER_TAG.secret=t.secret,e.prev=7,A.recover(A.sign("test message",T.OHLEDGER_IMPARTER_TAG.secret)).toLowerCase()==T.OHLEDGER_IMPARTER_TAG.address){e.next=10;break}throw new Error("'secret' not valid for 'address");case 10:e.next=15;break;case 12:throw e.prev=12,e.t1=e.catch(7),new Error("'secret' not valid for 'address");case 15:return b("onCredentialsUpdate",{imparterTag:a,address:T.OHLEDGER_IMPARTER_TAG.address,secret:T.OHLEDGER_IMPARTER_TAG.secret}),e.abrupt("return",!0);case 17:return e.abrupt("return",!1);case 18:case"end":return e.stop()}},e,null,[[7,12]])}))).apply(this,arguments)}function I(e){switch(e){case a:return{address:T.OHLEDGER_IMPARTER_TAG.address,secret:T.OHLEDGER_IMPARTER_TAG.secret};case s:return{address:T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress};case n:return{address:T.ETH_WEB3_IMPARTER_TAG.walletAddress};default:throw new Error("invalid imparterTag")}}function M(e,r){return H.apply(this,arguments)}function H(){return(H=u(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next=e.t0===a?3:8;break;case 3:return n=A.create(),T.OHLEDGER_IMPARTER_TAG.address=n.address.toLowerCase(),T.OHLEDGER_IMPARTER_TAG.secret=n.privateKey,b("onCredentialsUpdate",{imparterTag:a,address:T.OHLEDGER_IMPARTER_TAG.address,secret:T.OHLEDGER_IMPARTER_TAG.secret}),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,r){return D.apply(this,arguments)}function D(){return(D=u(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n!=r){e.next=2;break}return e.abrupt("return",!1);case 2:if("currency"in t){e.next=4;break}throw new Error("'currency' must be passed in");case 4:if("mode"in t){e.next=6;break}throw new Error("'mode' must be passed in");case 6:if(t.currency=t.currency.toUpperCase(),t.mode=t.mode.toLowerCase(),"USD"===t.currency){e.next=10;break}throw new Error("'currency' must be 'USD'");case 10:if("prod"===t.mode||"test"===t.mode){e.next=12;break}throw new Error("'mode' must be 'prod' or 'test'");case 12:e.t0=r,e.next=e.t0===a?15:e.t0===s?18:21;break;case 15:return T.OHLEDGER_IMPARTER_TAG.mode=t.mode,b("onNetworkChange",{imparterTag:a,currency:"USD",mode:t.mode,uri:T.OHLEDGER_IMPARTER_TAG.remuneration_uri[t.mode]}),e.abrupt("return",!0);case 18:return T.OHLEDGER_WEB3_IMPARTER_TAG.mode=t.mode,b("onNetworkChange",{imparterTag:s,currency:"USD",mode:t.mode,uri:T.OHLEDGER_WEB3_IMPARTER_TAG.remuneration_uri[t.mode]}),e.abrupt("return",!0);case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e){switch(e){case a:return{currency:"USD",mode:T.OHLEDGER_WEB3_IMPARTER_TAG.mode,uri:T.OHLEDGER_WEB3_IMPARTER_TAG.remuneration_uri[T.OHLEDGER_WEB3_IMPARTER_TAG.mode]};case s:return{currency:"USD",mode:T.OHLEDGER_IMPARTER_TAG.mode,uri:T.OHLEDGER_IMPARTER_TAG.remuneration_uri[T.OHLEDGER_IMPARTER_TAG.mode]};case n:return{name:T.ETH_WEB3_IMPARTER_TAG.network,uri:T.ETH_WEB3_IMPARTER_TAG.remuneration_uri[T.ETH_WEB3_IMPARTER_TAG.network]};default:throw new Error("invalid imparterTag")}}function B(e){switch(e){case a:if(!T.OHLEDGER_IMPARTER_TAG.mode)throw new Error("network 'mode' must be set, use setNetwork");return T.OHLEDGER_IMPARTER_TAG.remuneration_uri[T.OHLEDGER_IMPARTER_TAG.mode];case s:if(!T.OHLEDGER_WEB3_IMPARTER_TAG.mode)throw new Error("network 'mode' must be set, use setNetwork");return T.OHLEDGER_WEB3_IMPARTER_TAG.remuneration_uri[T.OHLEDGER_WEB3_IMPARTER_TAG.mode];case n:return T.ETH_WEB3_IMPARTER_TAG.remuneration_uri[T.ETH_WEB3_IMPARTER_TAG.network];default:return null}}function W(e,r,t){return S.apply(this,arguments)}function S(){return(S=u(regeneratorRuntime.mark(function e(r,t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r,t,n,!0);case 2:return e.abrupt("return",e.sent.tally);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e,r,t){return j.apply(this,arguments)}function j(){return(j=u(regeneratorRuntime.mark(function e(r,t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r,t,n,!1);case 2:return e.abrupt("return",e.sent.transactions);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,r,t,n){return U.apply(this,arguments)}function U(){return(U=u(regeneratorRuntime.mark(function e(r,t,o,u){var i,c,d,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||o instanceof Date){e.next=2;break}throw new Error("'date' must be a Date is passed in");case 2:if("address"in t&&t.address){e.next=4;break}throw new Error("'address' required in recipient");case 4:i=t.address,c=B(r),e.t0=r,e.next=e.t0===a?9:e.t0===s?15:e.t0===n?21:27;break;case 9:if(T.OHLEDGER_IMPARTER_TAG.mode){e.next=11;break}throw new Error("network 'mode' must be set, use setNetwork");case 11:if(T.OHLEDGER_IMPARTER_TAG.address){e.next=13;break}throw new Error("from 'address' not set: use setCredentials");case 13:return d=T.OHLEDGER_IMPARTER_TAG.address,e.abrupt("break",28);case 15:if(T.OHLEDGER_WEB3_IMPARTER_TAG.mode){e.next=17;break}throw new Error("network 'mode' must be set, use setNetwork");case 17:if(T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress){e.next=19;break}throw new Error("from 'walletAddress' not set: use wallet");case 19:return d=T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",28);case 21:if(T.ETH_WEB3_IMPARTER_TAG.network){e.next=23;break}throw new Error("no network for imparter tag");case 23:if(T.ETH_WEB3_IMPARTER_TAG.walletAddress){e.next=25;break}throw new Error("from 'walletAddress' not set: use wallet");case 25:return d=T.ETH_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",28);case 27:throw new Error("unsupported imparter tag");case 28:if(c){e.next=30;break}throw new Error("no uri for request, unsupported network selected in wallet?");case 30:return l="",o&&(l="&since=".concat(o.toISOString())),e.next=34,w;case 34:if(e.t1=e.sent,!e.t1){e.next=37;break}e.t1=!m;case 37:if(!e.t1){e.next=39;break}throw new Error("did you forget to `oh$.enable(..)`?");case 39:return e.next=41,m("".concat(c,"/get-transactions/").concat(d,"/").concat(i,"?tally-only=").concat(u?"true":"false").concat(l),{headers:new Headers({Authorization:"Bearer ".concat(R)})}).then(function(e){return e.json()}).catch(function(e){throw String(e)});case 41:return e.abrupt("return",e.sent);case 42:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e){return q.apply(this,arguments)}function q(){return(q=u(regeneratorRuntime.mark(function e(r){var t,o,u,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=B(r),e.t0=r,e.next=e.t0===a?4:e.t0===s?10:e.t0===n?16:22;break;case 4:if(T.OHLEDGER_IMPARTER_TAG.mode){e.next=6;break}throw new Error("network 'mode' must be set, use setNetwork");case 6:if(T.OHLEDGER_IMPARTER_TAG.address){e.next=8;break}throw new Error("from 'address' not set: use setCredentials");case 8:return o=T.OHLEDGER_IMPARTER_TAG.address,e.abrupt("break",23);case 10:if(T.OHLEDGER_WEB3_IMPARTER_TAG.mode){e.next=12;break}throw new Error("network 'mode' must be set, use setNetwork");case 12:if(T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress){e.next=14;break}throw new Error("from 'walletAddress' not set: use wallet");case 14:return o=T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",23);case 16:if(T.ETH_WEB3_IMPARTER_TAG.network){e.next=18;break}throw new Error("no network for imparter tag");case 18:if(T.ETH_WEB3_IMPARTER_TAG.walletAddress){e.next=20;break}throw new Error("from 'walletAddress' not set: use wallet");case 20:return o=T.ETH_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",23);case 22:throw new Error("unsupported imparter tag");case 23:if(t){e.next=25;break}throw new Error("no uri for request, unsupported network selected in wallet?");case 25:return u="verify ownership of address by signing",e.next=28,z(r,u);case 28:return i=e.sent,e.next=31,w;case 31:if(e.t1=e.sent,!e.t1){e.next=34;break}e.t1=!m;case 34:if(!e.t1){e.next=36;break}throw new Error("did you forget to `oh$.enable(..)`?");case 36:return e.next=38,m("".concat(t,"/is-signature-valid"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer ".concat(R)},body:JSON.stringify({signature:btoa(i),message:btoa(u),address:o})}).then(function(e){return 200==e.status}).catch(function(e){throw String(e)});case 38:return e.abrupt("return",e.sent);case 39:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e,r){return F.apply(this,arguments)}function F(){return(F=u(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next=e.t0===a?3:e.t0===s?6:e.t0===n?12:18;break;case 3:if(T.OHLEDGER_IMPARTER_TAG.secret){e.next=5;break}throw new Error("credentials for imparter ".concat(a," not set"));case 5:return e.abrupt("return",A.sign(t,T.OHLEDGER_IMPARTER_TAG.secret).signature);case 6:if(T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress){e.next=8;break}throw new Error("imparter ".concat(s," not active"));case 8:return b("onWalletPopup",{imparterTag:s}),e.next=11,window.web3.eth.personal.sign(t,T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress,"");case 11:return e.abrupt("return",e.sent);case 12:if(T.ETH_WEB3_IMPARTER_TAG.walletAddress){e.next=14;break}throw new Error("imparter ".concat(n," not active"));case 14:return b("onWalletPopup",{imparterTag:n}),e.next=17,window.web3.eth.personal.sign(t,T.ETH_WEB3_IMPARTER_TAG.walletAddress,"");case 17:return e.abrupt("return",e.sent);case 18:return e.abrupt("return",null);case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function K(e,r,t,n){return J.apply(this,arguments)}function J(){return(J=u(regeneratorRuntime.mark(function e(r,t,o,u){var i,c,d,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next=e.t0===a?3:e.t0===s?9:e.t0===n?15:21;break;case 3:if(T.OHLEDGER_IMPARTER_TAG.mode){e.next=5;break}throw new Error("network 'mode' must be set, use setNetwork");case 5:if(T.OHLEDGER_IMPARTER_TAG.address){e.next=7;break}throw new Error("from 'address' not set: use setCredentials");case 7:return i=T.OHLEDGER_IMPARTER_TAG.address,e.abrupt("break",22);case 9:if(T.OHLEDGER_WEB3_IMPARTER_TAG.mode){e.next=11;break}throw new Error("network 'mode' must be set, use setNetwork");case 11:if(T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress){e.next=13;break}throw new Error("from 'walletAddress' not set: use wallet");case 13:return i=T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",22);case 15:if(T.ETH_WEB3_IMPARTER_TAG.network){e.next=17;break}throw new Error("no network for imparter tag");case 17:if(T.ETH_WEB3_IMPARTER_TAG.walletAddress){e.next=19;break}throw new Error("from 'walletAddress' not set: use wallet");case 19:return i=T.ETH_WEB3_IMPARTER_TAG.walletAddress,e.abrupt("break",22);case 21:throw new Error("unsupported imparter tag");case 22:e.t1=r,e.next=e.t1===a?25:e.t1===s?25:e.t1===n?44:48;break;case 25:if(0!=t){e.next=39;break}if(!("message"in u&&u.message&&"signature"in u&&u.signature)){e.next=31;break}c=u.message,d=u.signature,e.next=35;break;case 31:return c="verify ownership of address by signing on ".concat((new Date).toLocaleString()),e.next=34,z(r,c);case 34:d=e.sent;case 35:return e.next=37,ee(r,i,d,c);case 37:e.next=43;break;case 39:return l=V(),T.OHLEDGER_IMPARTER_TAG.oh_ledger_transact_fn[T.OHLEDGER_IMPARTER_TAG.mode](t,i,o),e.next=43,l;case 43:return e.abrupt("break",49);case 44:return b("onWalletPopup",{imparterTag:n}),e.next=47,new Promise(function(e,r){web3.eth.sendTransaction({from:i,to:o,value:t}).on("confirmation",function(r,t){e()}).on("error",function(e){r(e)})});case 47:return e.abrupt("break",49);case 48:throw new Error("unsupported imparter tag");case 49:return e.abrupt("return",!0);case 50:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){var e=document.createElement("div");e.setAttribute("id","oh-popup-container"),e.style.display="none",e.innerHTML='\n      <div>\n        <a href="#" title="Close" id="oh-popup-close" onclick="window.parent.document.dispatchEvent(new CustomEvent(\'oh$-popup-close\',{})); return false;">X</a>\n        <iframe id="oh-ledger-gratis-iframe"></iframe>\n      </div>\n    ';var r=document.createElement("style");r.innerHTML='\n      #oh-popup-container {\n          position: fixed;\n          font-family: arial, "lucida console", sans-serif;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background: rgba(0, 0, 0, 0.8);\n          z-index: 999;\n          opacity:1;\n          pointer-events: auto;\n      }\n      #oh-popup-container > div {\n          width: 80vw;\n          height: 75vh;\n          position: relative;\n          top: 15vh;\n          margin: auto auto;\n          padding: 5px 5px 5px 5px;\n          background: white;\n      }\n      #oh-popup-close {\n          background: grey;\n          color: white;\n          line-height: 25px;\n          position: absolute;\n          right: 2px;\n          text-align: center;\n          top: 2px;\n          width: 24px;\n          text-decoration: none;\n          font-weight: bold;\n      }\n      #oh-popup-close:hover {\n          background: black;\n      }\n\n      #oh-ledger-gratis-iframe {\n        display: none;\n        border: 0;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n    ',function t(){document.body?(document.body.appendChild(e),document.body.appendChild(r),te("".concat(T.OHLEDGER_IMPARTER_TAG.remuneration_uri.prod,"/transact.js"),function(){T.OHLEDGER_IMPARTER_TAG.oh_ledger_transact_fn.prod=oh_ledger_transact,T.OHLEDGER_WEB3_IMPARTER_TAG.oh_ledger_transact_fn.prod=oh_ledger_transact},document.body),te("".concat(T.OHLEDGER_IMPARTER_TAG.remuneration_uri.test,"/transact.js"),function(){T.OHLEDGER_IMPARTER_TAG.oh_ledger_transact_fn.test=oh_ledger_transact,T.OHLEDGER_WEB3_IMPARTER_TAG.oh_ledger_transact_fn.test=oh_ledger_transact},document.body)):setTimeout(t,100)}()}(),function(){if(!window.ethereum)return;u(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,window.ethereum.enable();case 3:window.web3=new o.a(window.ethereum),r.next=8;break;case 6:r.prev=6,r.t0=r.catch(0);case 8:return r.next=10,e();case 10:setInterval(u(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:case"end":return r.stop()}},r)})),t);case 11:case"end":return r.stop()}},r,null,[[0,6]])}))();var e=(r=u(regeneratorRuntime.mark(function e(){var r,t,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.web3.eth.getAccounts();case 3:return r=e.sent,t=r&&r.length>0?r[0]:null,e.next=7,window.web3.eth.net.getNetworkType();case 7:o=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:o!==T.ETH_WEB3_IMPARTER_TAG.network&&(T.ETH_WEB3_IMPARTER_TAG.network=o,b("onNetworkChange",{imparterTag:n,name:o,uri:T.ETH_WEB3_IMPARTER_TAG.remuneration_uri[o]})),t!==T.ETH_WEB3_IMPARTER_TAG.walletAddress&&(t?(-1==h.findIndex(function(e){return e===n})&&h.push(n),-1==h.findIndex(function(e){return e===s})&&h.push(s)):((a=h.findIndex(function(e){return e===n}))>-1&&h.splice(a,1),(a=h.findIndex(function(e){return e===s}))>-1&&h.splice(a,1)),T.ETH_WEB3_IMPARTER_TAG.walletAddress=t,T.OHLEDGER_WEB3_IMPARTER_TAG.walletAddress=t,b("onWalletChange",{imparterTag:n,isPresent:!!t}),b("onWalletChange",{imparterTag:s,isPresent:!!t}),t&&(b("onCredentialsUpdate",{imparterTag:n,address:t}),b("onCredentialsUpdate",{imparterTag:s,address:t})));case 14:case"end":return e.stop()}},e,null,[[0,10]])})),function(){return r.apply(this,arguments)});var r}();var X=null,Q=null;function V(){return console.assert(!X,"oh-popup promise being set but already set when calling setupNewPromise(..)"),new Promise(function(e,r){X=e,Q=r})}function Y(e,r){var t=document.getElementById("oh-popup-container");Z(),t.style.display="none",console.assert(X,"oh-popup promise not set yet calling makePopupHidden(..)"),r?Q(e):X(e),X=null,Q=null}function Z(){document.getElementById("oh-ledger-gratis-iframe").style.display="none"}function ee(e,r,t,n){return re.apply(this,arguments)}function re(){return(re=u(regeneratorRuntime.mark(function e(r,t,n,o){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Z(),a=B(r),(s=document.getElementById("oh-ledger-gratis-iframe")).setAttribute("src","".concat(a,"/gratis.html?address=").concat(t,"&signature=").concat(n,"&message=").concat(o)),s.style.display="block",e.next=7,document.getElementById("oh-popup-container").style.display="block",V();case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function te(e,r,t){var n=document.createElement("script");n.src=e,n.onload=r,n.onreadystatechange=r,t.appendChild(n)}return window.addEventListener("message",function(e){e.data&&"oh-ledger-ok"===e.data.event?Y(e.data.detail):e.data&&"oh-ledger-error"===e.data.event&&Y(e.data.detail,!0)},!1),window.document.addEventListener("oh$-popup-close",function(e){Y("user close",!0)}),r.oh$}();r.default=_}.call(this,t(2))},function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}])});
//# sourceMappingURL=ledgers.js.map