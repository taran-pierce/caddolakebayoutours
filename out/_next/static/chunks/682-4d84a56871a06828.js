(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{5417:function(e,t,i){"use strict";var s=i(5893),r=i(5988),n=i(5697),o=i(2736),a=i(3562),u=i.n(a);function l(e){var t=e.imagePath,i=e.alt,n=e.bottom,a=e.minHeight;return(0,s.jsx)("section",{className:u().hero,children:(0,s.jsxs)(o.YW,{cloudName:"tpierce36",children:[n?(0,s.jsx)(r.default,{id:"13c0b378cf35a5e",dynamic:[a&&a.mobile?a.mobile:"auto",a&&a.tablet?a.tablet:"auto",a&&a.desktop?a.desktop:"auto",n],children:".hero.__jsx-style-dynamic-selector {height:".concat(a&&a.mobile?a.mobile:"auto","}\n.hero.__jsx-style-dynamic-selector .img-wrapper.__jsx-style-dynamic-selector {min-height:203px}\n@media (min-width:768px) {.hero.__jsx-style-dynamic-selector {height:").concat(a&&a.tablet?a.tablet:"auto","}}\n@media (min-width:992px) {.hero.__jsx-style-dynamic-selector {height:").concat(a&&a.desktop?a.desktop:"auto","}\n.hero.__jsx-style-dynamic-selector .img-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector {position:relative;\nbottom:").concat(n,"px}}")}):null,(0,s.jsx)("div",{className:u().imgWrapper,children:(0,s.jsx)(o.Ee,{publicId:t,responsive:!0,width:"auto",crop:"scale",alt:i,children:(0,s.jsx)(o.zA,{quality:"90",fetchFormat:"auto",gravity:"auto"})})})]})})}l.defaultProps={bottom:0},l.propTypes={imagePath:n.string.isRequired,alt:n.string.isRequired,bottom:n.number},t.Z=l},7569:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var s=i(5893),r=i(7294),n=i(5697),o=i.n(n),a=i(7828),u=i.n(a);function l(e){var t=e.data,i=t.titles,r=t.paragraphs,n=t.lists,o=t.cta;return(0,s.jsxs)("div",{className:u().textWrapper,children:[i&&i.map((function(e,t){return(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e}},t)})),r&&r.map((function(e,t){return(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t)})),n&&t.lists.map((function(e,t){return"ul"===e.type?(0,s.jsx)("ul",{children:e.items.map((function(e,t){return(0,s.jsxs)("li",{children:[e.title&&(0,s.jsx)("h4",{children:e.title}),e.paragraphs.map((function(e,t){return(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t)}))]},t)}))},t):(0,s.jsx)("ol",{children:e.items.map((function(e,t){return(0,s.jsxs)("li",{children:[e.title&&(0,s.jsx)("h4",{children:e.title}),e.paragraphs.map((function(e,t){return(0,s.jsx)("p",{children:e},t)}))]},t)}))},t)})),o&&(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})]})}l.propTypes={data:o().object};var c=l,d=i(2736),h=i(1052),p=i.n(h);function m(e){var t=e.data,i=t.imageFirst,n=t.textData,o=t.image,a=t.googleMap,u=(0,r.useRef)(null),l=(0,r.useState)(585),h=l[0],m=l[1],_=(0,r.useState)(661),f=(_[0],_[1]);(0,r.useEffect)((function(){var e,t=null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.getBoundingClientRect(),i=t.width,s=t.height;m(i),f(s)}),[u]);var v=function(){return(0,s.jsx)(d.YW,{cloudName:"tpierce36",children:(0,s.jsx)("div",{className:p().imgWrapper,children:(0,s.jsx)(d.Ee,{publicId:o.path,responsive:!0,width:h,crop:"scale",alt:o.alt,loading:"lazy",children:(0,s.jsx)(d.zA,{quality:"auto",fetchFormat:"auto"})})})})};return(0,s.jsx)("section",{className:p().sideHug,children:(0,s.jsxs)("div",{className:p().mainContainer,children:[(0,s.jsx)("div",{className:p().col,ref:u,children:i?o&&(0,s.jsx)(v,{}):n.map((function(e,t){return(0,s.jsx)("div",{className:p().container,children:(0,s.jsx)(c,{data:e},t)},t)}))}),(0,s.jsxs)("div",{className:p().col,children:[i?n.map((function(e,t){return(0,s.jsx)("div",{className:p().container,children:(0,s.jsx)(c,{data:e},t)},t)})):o&&(0,s.jsx)(v,{}),a&&(0,s.jsx)("iframe",{title:"Google Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632",width:"100%",height:"460",frameBorder:"0",allowFullScreen:!0,importance:"low",loading:"lazy",className:p().iframe})]})]})})}m.propTypes={data:n.object};var _=m},3562:function(e){e.exports={hero:"hero_hero__Qnp2Y",imgWrapper:"hero_imgWrapper__4ZeNN"}},1052:function(e){e.exports={sideHug:"sideHug_sideHug__Qgbqp",imgWrapper:"sideHug_imgWrapper__WuZka",container:"sideHug_container__e7EhW",ul:"sideHug_ul__IMEF1",li:"sideHug_li__2O4vt",iframe:"sideHug_iframe__d1QFW",mainContainer:"sideHug_mainContainer__Ux3_j",col:"sideHug_col__hmXB_"}},7828:function(e){e.exports={textWrapper:"textBlock_textWrapper__Cva_O"}},4287:function(e,t,i){"use strict";var s=i(4155);function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof s&&s.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,i=t.name,s=void 0===i?"stylesheet":i,r=t.optimizeForSpeed,a=void 0===r?n:r,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;u(o(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",u("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(u(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(r){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];u(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,i){t&&u(o(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(s,i):r.appendChild(s),s},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),s&&r(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a},7884:function(e,t,i){"use strict";t.default=o;var s,r=i(7294);var n=new(((s=i(8122))&&s.__esModule?s:{default:s}).default);function o(e){return"undefined"===typeof window?(n.add(e),null):((0,r.useLayoutEffect)((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return n.computeId(t,i)})).join(" ")}},8122:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var s=n(i(9887)),r=n(i(4287));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,s=void 0===i?null:i,n=t.optimizeForSpeed,o=void 0!==n&&n,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=s||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),s=i.styleId,r=i.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var n=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[s]=n,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var s=this._fromServer&&this._fromServer[i];s?(s.parentNode.removeChild(s),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var r=String(i),n=t+r;return e[n]||(e[n]="jsx-"+(0,s.default)(t+"-"+r)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var r=i+s;return t[r]||(t[r]=s.replace(e,i)),t[r]}},t.getIdAndRules=function(e){var t=this,i=e.children,s=e.dynamic,r=e.id;if(s){var n=this.computeId(r,s);return{styleId:n,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,i)]}}return{styleId:this.computeId(r),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},5988:function(e,t,i){e.exports=i(7884)}}]);