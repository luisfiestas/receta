!function(){var e={77079:function(e){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e){if(M(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(t=!1)})),t}function a(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}var s=JSON.parse('{"f":"pbjs_debug","Q_":{"GOOD":1},"FP":{"AUCTION_DEBUG":"auctionDebug"}}');function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d,l="TRUE"===(d=s.f,H(S().search)[d]||"").toUpperCase(),g={random:!0,fixed:!0},p={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},b="*";var h=function(){var t,n,r,o=[],s=null;function d(){t={};var e={_debug:l,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:null,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){D("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),this._publisherDomain=e},_priceGranularity:p.MEDIUM,set priceGranularity(e){o(e)&&("string"==typeof e?this._priceGranularity=i(e)?e:p.MEDIUM:q(e)&&(this._customPriceBucket=e,this._priceGranularity=p.CUSTOM,P("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(e){var t=this;this._mediaTypePriceGranularity=Object.keys(e).reduce((function(n,r){return o(e[r])?"string"==typeof e?n[r]=i(e[r])?e[r]:t._priceGranularity:q(e)&&(n[r]=e[r],P("Using custom price granularity for ".concat(r))):D("Invalid price granularity for media type: ".concat(r)),n}),{})},_sendAllBids:true,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:false,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:true,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:"random",get bidderSequence(){return this._bidderSequence},set bidderSequence(e){g[e]?this._bidderSequence=e:D("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:false,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e},_maxNestedIframes:10,get maxNestedIframes(){return this._maxNestedIframes},set maxNestedIframes(e){this._maxNestedIframes=e},_auctionOptions:{},get auctionOptions(){return this._auctionOptions},set auctionOptions(e){(function(e){if(!q(e))return D("Auction Options must be an object"),!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return D("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!G(e[r]))return D("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(I))return D("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!N(e[r]))return D("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&(this._auctionOptions=e)}};function i(e){return t=Object.keys(p),n=function(t){return e===p[t]},t&&t.find(n,r);var t,n,r}function o(e){if(!e)return T("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)i(e)||D("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(q(e)&&!u(e))return T("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}n&&k(Object.keys(n).reduce((function(t,r){return n[r]!==e[r]&&(t[r]=e[r]||{}),t}),{})),n=e,r={}}function h(){if(s&&r&&q(r[s])){var e=r[s];return function(){return Array.from.apply(Array,arguments)}(new Set(Object.keys(n).concat(Object.keys(e)))).reduce((function(t,r){return void 0===e[r]?t[r]=n[r]:void 0===n[r]?t[r]=e[r]:q(e[r])?t[r]=L({},n[r],e[r]):t[r]=e[r],t}),{})}return Object.assign({},n)}var y=[h,function(){var e=h();return Object.defineProperty(e,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),e}].map((function(e){return function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var t=arguments.length<=0?void 0:arguments[0];return t?a(e(),t):h()}return E.apply(void 0,arguments)}})),v=i(y,2),m=v[0],O=v[1],w=[O,m].map((function(e){return function(){var t=e.apply(void 0,arguments);return t&&"object"===c(t)&&(t=K(t)),t}})),j=i(w,2),A=j[0],_=j[1];function B(e){if(q(e)){var r=Object.keys(e),i={};r.forEach((function(r){var o=e[r];q(t[r])&&q(o)&&(o=Object.assign({},t[r],o));try{i[r]=n[r]=o}catch(e){D("Cannot set config for property ".concat(r," : "),e)}})),k(i)}else T("setConfig options must be an object")}function E(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n;if("string"!=typeof t&&(i=t,t=b,r=n||{}),"function"==typeof i){var c={topic:t,callback:i};return o.push(c),r.init&&i(t===b?O():e({},t,O(t))),function(){o.splice(o.indexOf(c),1)}}T("listener must be a function")}function k(t){var n=Object.keys(t);o.filter((function(e){return t=n,r=e.topic,t&&t.includes(r,i)||!1;var t,r,i})).forEach((function(n){n.callback(e({},n.topic,t[n.topic]))})),o.filter((function(e){return e.topic===b})).forEach((function(e){return e.callback(t)}))}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{n(e),e.bidders.forEach((function(n){r[n]||(r[n]={}),Object.keys(e.config).forEach((function(i){var o=e.config[i];if(q(o)){var c=t?L:Object.assign;r[n][i]=c({},r[n][i]||{},o)}else r[n][i]=o}))}))}catch(e){T(e)}function n(e){if(!q(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!q(e.config))throw"setBidderConfig bidder options must contain a config object"}}function x(e,t){s=e;try{return t()}finally{R()}}function R(){s=null}return d(),{getCurrentBidder:function(){return s},resetBidder:R,getConfig:O,getAnyConfig:m,readConfig:A,readAnyConfig:_,setConfig:B,mergeConfig:function(t){if(q(t)){var n=L(h(),t);return B(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},n)),n}T("mergeConfig input must be an object")},setDefaults:function(e){q(t)?(Object.assign(t,e),Object.assign(n,e)):T("defaults must be an object")},resetConfig:d,runWithBidder:x,callbackWithBidder:function(e){return function(t){return function(){if("function"==typeof t){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return x(e,C.call.apply(C,[t,this].concat(r)))}D("config.callbackWithBidder callback is not a function")}}},setBidderConfig:S,getBidderConfig:function(){return r},mergeBidderConfig:function(e){return S(e,!0)}}}(),y=n(77079),v=n.n(y);var m,O=Object.prototype.toString,w=Boolean(window.console),j=Boolean(w&&window.console.log),A=(Boolean(w&&window.console.info),Boolean(w&&window.console.warn)),_=Boolean(w&&window.console.error);function B(){null!=m&&m.apply(void 0,arguments)}var E,k={},C=function(e,t){return t}.bind(null,1,k)()===k?Function.prototype.bind:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}};E=0;function S(){return window.location}function P(){R()&&j&&console.log.apply(console,x(arguments,"MESSAGE:"))}function D(){R()&&A&&console.warn.apply(console,x(arguments,"WARNING:")),B(s.FP.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function T(){R()&&_&&console.error.apply(console,x(arguments,"ERROR:")),B(s.FP.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function x(e,t){e=[].slice.call(e);var n=h.getCurrentBidder();return t&&e.unshift(t),n&&e.unshift(r("#aaa")),e.unshift(r("#3b88c3")),e.unshift("%cPrebid"+(n?"%c".concat(n):"")),e;function r(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function R(){return!!h.getConfig("debug")}function U(e,t){return O.call(e)==="[object "+t+"]"}function I(e){return U(e,"String")}function G(e){return U(e,"Array")}function q(e){return U(e,"Object")}function N(e){return U(e,"Boolean")}function M(e){if(!e)return!0;if(G(e)||I(e))return!(e.length>0);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}W("timeToRespond",(function(e,t){return e>t})),W("responseTimestamp",(function(e,t){return e>t})),W("responseTimestamp",(function(e,t){return e<t}));function W(e,t){return function(n,r){return n.cpm===r.cpm?t(n[e],r[e])?r:n:n.cpm<r.cpm?r:n}}function K(e){return v()(e)}function Y(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));var n=0;return function(){++n===t&&e.apply(this,arguments)}}var F,z;function H(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=i(t.split("="),2),r=n[0],o=n[1];return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(o)):e[r]=o||"",e}),{}):{}}function J(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.checkTypes,i=void 0!==r&&r;if(e===t)return!0;if("object"!==c(e)||null===e||"object"!==c(t)||null===t||i&&e.constructor!==t.constructor)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var o in e){if(!t.hasOwnProperty(o))return!1;if(!J(e[o],t[o],{checkTypes:i}))return!1}return!0}function L(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return t;var c=r.shift();if(q(t)&&q(c)){var u=function(n){q(c[n])?(t[n]||Object.assign(t,e({},n,{})),L(t[n],c[n])):G(c[n])?t[n]?G(t[n])&&c[n].forEach((function(e){for(var r=1,i=0;i<t[n].length;i++)if(J(t[n][i],e)){r=0;break}r&&t[n].push(e)})):Object.assign(t,e({},n,o(c[n]))):Object.assign(t,e({},n,c[n]))};for(var a in c)u(a)}return L.apply(void 0,[t].concat(r))}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.setTimeout;this.setTimeout=void 0===t?window.setTimeout.bind(window):t,this.logger=e.logger,this.rules=[]}function $(e,t){var n=t.hook,r=t.logger;F=te.bind({overrides:e,logger:r}),n.get("addBidResponse").before(F,5),z=ne.bind({overrides:e,logger:r}),n.get("addBidderRequests").before(z,5)}function V(e){var t=e.hook;t.get("addBidResponse").getHooks({hook:F}).remove(),t.get("addBidderRequests").getHooks({hook:z}).remove()}function X(e,t,n){return!(!e.bidder||e.bidder===t)||!(!e.adUnitCode||e.adUnitCode===n)}function Z(e,t){return Array.isArray(e)&&-1===e.indexOf(t)}function ee(e,t,n,r){return Object.keys(e).filter((function(e){return-1===["adUnitCode","bidder"].indexOf(e)})).reduce((function(t,i){return r.logMessage("bidder overrides changed '".concat(t.adUnitCode,"/").concat(t.bidderCode,"' ").concat(n,".").concat(i," from '").concat(t[i],".js' to '").concat(e[i],"'")),t[i]=e[i],t.isDebug=!0,t}),t)}function te(e,t,n){var r=this.overrides,i=this.logger;Z(r.bidders,n.bidderCode)?i.logWarn("bidder '".concat(n.bidderCode,"' excluded from auction by bidder overrides")):(Array.isArray(r.bids)&&r.bids.forEach((function(e){X(e,n.bidderCode,t)||ee(e,n,"bidder",i)})),e(t,n))}function ne(e,t){var n=this.overrides,r=this.logger,i=t.filter((function(e){return!Z(n.bidders,e.bidderCode)||(r.logWarn("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)}));Array.isArray(n.bidRequests)&&i.forEach((function(e){n.bidRequests.forEach((function(t){e.bids.forEach((function(n){X(t,e.bidderCode,n.adUnitCode)||ee(t,n,"bidRequest",r)}))}))})),e(i)}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?re(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Object.assign(Q.prototype,{DEFAULT_RULE_OPTIONS:{delay:0},serializeConfig:function(e){var t=this;return e.filter((function(e,n){var r=J(e,JSON.parse(JSON.stringify(e)),{checkTypes:!0});return r||a(e,"options.suppressWarnings")||t.logger.logWarn("Bid interceptor rule definition #".concat(n+1," is not serializable and will be lost after a refresh. Rule definition: "),e),r}))},updateConfig:function(e){var t=this;this.rules=(e.intercept||[]).map((function(e,n){return t.rule(e,n+1)}))},rule:function(e,t){return{no:t,match:this.matcher(e.when,t),replace:this.replacer(e.then||{},t),options:Object.assign({},this.DEFAULT_RULE_OPTIONS,e.options)}},matcher:function(e,t){if("function"==typeof e)return e;if("object"!==c(e))return this.logger.logError("Invalid 'when' definition for debug bid interceptor (in rule #".concat(t,")")),function(){return!1};function n(t,r){var u=r.ref,a=void 0===u?e:u,s=r.args,f=void 0===s?[]:s;return Object.entries(a).map((function(e){var r=i(e,2),u=r[0],a=r[1],s=t[u];return a instanceof RegExp?null!=a.exec(s):"function"==typeof a?!!a.apply(void 0,[s].concat(o(f))):"object"===c(a)?n(s,{ref:a,args:f}):s===a})).every((function(e){return e}))}return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return n(e,{args:r})}},replacer:function(e,t){var n,r=this;return"function"==typeof e?n=function(t){var n=t.args;return e.apply(void 0,o(n))}:"object"!==c(e)?(this.logger.logError("Invalid 'then' definition for debug bid interceptor (in rule #".concat(t,")")),n=function(){return{}}):n=function(t){var r=t.args,u=t.ref,a=void 0===u?e:u,s=Array.isArray(a)?[]:{};return Object.entries(a).forEach((function(e){var t=i(e,2),u=t[0],a=t[1];"function"==typeof a?s[u]=a.apply(void 0,o(r)):"object"===c(a)?s[u]=n({args:r,ref:a}):s[u]=a})),s},function(e){for(var t=r.responseDefaults(e),i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return L(t,n({args:[e].concat(o)})),t.ad||(t.ad=r.defaultAd(e,t)),t.isDebug=!0,t}},responseDefaults:function(e){return{requestId:e.bidId,cpm:3.5764,currency:"EUR",width:300,height:250,ttl:360,creativeId:"mock-creative-id",netRevenue:!1,meta:{}}},defaultAd:function(e,t){return"<html><head><style>#ad {width: ".concat(t.width,"px;height: ").concat(t.height,'px;background-color: #f6f6ae;color: #85144b;padding: 5px;text-align: center;display: flex;flex-direction: column;align-items: center;justify-content: center;}#bidder {font-family: monospace;font-weight: normal;}#title {font-size: x-large;font-weight: bold;margin-bottom: 5px;}#body {font-size: large;margin-top: 5px;}</style></head><body><div id="ad"><div id="title">Mock ad: <span id="bidder">').concat(e.bidder,'</span></div><div id="body">').concat(t.width,"x").concat(t.height,"</div></div></body></html>")},match:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.rules.find((function(t){return t.match.apply(t,[e].concat(n))}))},matchAll:function(e,t){var n=this,r=[],i=[];return e.forEach((function(e){var o=n.match(e,t);null!=o?r.push({rule:o,bid:e}):i.push(e)})),[r,i]},intercept:function(e){var t=this,n=e.bids,r=e.bidRequest,o=e.addBid,c=e.done;null==n&&(n=r.bids);var u=i(this.matchAll(n,r),2),a=u[0],s=u[1];if(a.length>0){var f=Y(c,a.length);a.forEach((function(e){var n=e.rule.replace(e.bid,r),i=e.rule.options.delay;t.logger.logMessage("Intercepted bid request (matching rule #".concat(e.rule.no,"), mocking response in ").concat(i,"ms. Request, response:"),e.bid,n),t.setTimeout((function(){o(n,e.bid),f()}),i)})),n=(r=K(r)).bids=s}else this.setTimeout(c,0);return{bids:n,bidRequest:r}}});var oe,ce=[],ue=!1;function ae(e,t){var n=t.fromSession,r=void 0!==n&&n,i=t.config,o=t.hook,c=t.logger;i.setConfig({debug:!0}),oe.updateConfig(e),de(!0),V({hook:o}),$(e,{hook:o,logger:c}),ue||(ue=!0,c.logMessage("Debug overrides enabled".concat(r?" from session":"")))}function se(e){var t=e.hook,n=e.logger;oe.updateConfig({}),de(!1),V({hook:t}),ue&&(ue=!1,n.logMessage("Debug overrides disabled"))}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.sessionStorage,r=void 0===n?window.sessionStorage:n,i=t.DEBUG_KEY;if(e.enabled){e.intercept&&((e=K(e)).intercept=oe.serializeConfig(e.intercept));try{r.setItem(i,JSON.stringify(e))}catch(e){}}else try{r.removeItem(i)}catch(e){}}function de(e){ce.forEach((function(e){var t=i(e,2),n=t[0],r=t[1];n().getHooks({hook:r}).remove()})),e&&ce.forEach((function(e){var t=i(e,2),n=t[0],r=t[1];n().before(r)}))}function le(e,t){var n=function(){var e;return(e=oe).intercept.apply(e,arguments)};ce.push([e,function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];t.apply(void 0,[e,n].concat(i))}])}function ge(e,t,n,r,i,o,c,u){var a=Y(u.onCompletion,2),s=t({bids:r,bidRequest:i,addBid:u.onBid,done:a});r=s.bids,i=s.bidRequest,0===r.length?a():e(n,r,i,o,c,ie(ie({},u),{},{onCompletion:a}))}function pe(e){var t=e.DEBUG_KEY,n=e.config,r=e.hook,i=e.createBid,c=e.logger;oe=new Q({logger:c});var u=function(e){var t=e.createBid;return function(e,n,r,i,c,u){var a,f=u.onResponse,d=u.onError,l=u.onBid,g=Y((function(){return f.apply(void 0,o(a))}),i.length+1);function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a=t,g()}function b(e,n){l({adUnit:n.adUnitCode,bid:Object.assign(t(s.Q_.GOOD,n),e)})}if((i=i.map((function(e){return n({bidRequest:e,addBid:b,done:g}).bidRequest})).filter((function(e){return e.bids.length>0}))).length>0){var h=new Set;i.forEach((function(e){return e.bids.forEach((function(e){return h.add(e.bidId)}))})),(r=K(r)).ad_units.forEach((function(e){e.bids=e.bids.filter((function(e){return h.has(e.bid_id)}))})),r.ad_units=r.ad_units.filter((function(e){return e.bids.length>0})),e(r,i,c,{onResponse:p,onError:d,onBid:l})}else p(!0,[])}}({createBid:i});le((function(){return r.get("processBidderRequests")}),ge),le((function(){return r.get("processPBSRequest")}),u),function(e){var t,n=e.DEBUG_KEY,r=e.storage,i=e.config,o=e.hook,c=e.logger;try{r=r||window.sessionStorage,t=JSON.parse(r.getItem(n))}catch(e){}t&&ae(t,{fromSession:!0,config:i,hook:o,logger:c})}({DEBUG_KEY:t,config:n,hook:r,logger:c}),n.getConfig("debugging",(function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.sessionStorage,r=void 0===n?window.sessionStorage:n,i=t.DEBUG_KEY,o=t.config,c=t.hook,u=t.logger;null!=e&&(fe(e,{sessionStorage:r,DEBUG_KEY:i}),e.enabled?ae(e,{config:o,hook:c,logger:u}):se({hook:c,logger:u}))}(e.debugging,{DEBUG_KEY:t,config:n,hook:r,logger:c})}),{init:!0})}window._pbjsGlobals.forEach((function(e){window[e]&&!0===window[e]._installDebugging&&(window[e]._installDebugging=pe)}))}()}();