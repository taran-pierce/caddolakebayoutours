(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354],{1551:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photo-gallery",function(){return s(384)}])},384:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return h},default:function(){return f}});var i=s(5893),r=s(5988),n=s(7294),o=s(5697),a=s(2736),l=s(7888),c=s.n(l);function u(e){var t=e.galleryName,s=e.lastSlide,r=(0,n.useState)(1),o=r[0],l=r[1],u=(0,n.useState)(!1),d=u[0],h=u[1],f=function(e){e.preventDefault(),o<s&&l(o+1)},m=function(e){e.preventDefault(),1!=o&&l(o-1)};return(0,i.jsxs)("section",{className:c().imageGallery,children:[(0,i.jsx)("h2",{children:"Pictures of Caddo Lake"}),(0,i.jsxs)("div",{className:c().galleryContainer,children:[(0,i.jsx)("nav",{className:c().nav,children:(0,i.jsxs)("ul",{className:c().ul,children:[(0,i.jsx)("li",{className:c().li,children:(0,i.jsx)("a",{className:c().btn,onClick:m,children:"Previous"})}),(0,i.jsx)("li",{className:c().li,children:(0,i.jsx)("a",{className:c().btn,onClick:f,children:"Next"})})]})}),(0,i.jsx)("ul",{className:c().ul,children:(0,i.jsx)("li",{className:c().li,children:(0,i.jsx)(a.YW,{cloudName:"tpierce36",children:(0,i.jsx)("a",{href:"https://res.cloudinary.com/tpierce36/image/upload/v1578238226/".concat(t).concat(o,".jpg"),onClick:function(e){e.preventDefault(),console.log("toggleLightBox"),h(!d)},children:(0,i.jsx)(a.Ee,{publicId:"".concat(t).concat(o,".jpg"),responsive:!0,width:"auto",crop:"scale",alt:"Caddo Lake #".concat(o),className:c().img,children:(0,i.jsx)(a.zA,{quality:"auto",fetchFormat:"auto"})})})})})}),(0,i.jsx)("nav",{className:c().nav,children:(0,i.jsxs)("ul",{className:c().ul,children:[(0,i.jsx)("li",{className:c().li,children:(0,i.jsx)("a",{className:c().btn,onClick:m,children:"Previous"})}),(0,i.jsx)("li",{className:c().li,children:(0,i.jsx)("a",{className:c().btn,onClick:f,children:"Next"})})]})})]})]})}u.propTypes={galleryName:o.string.isRequired,lastSlide:o.number.isRequired};var d=u;var h=!0,f=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{id:"c5810fd91ac845a5",children:"section.jsx-c5810fd91ac845a5 {background:#fafafa;\npadding:1rem}\n.container.jsx-c5810fd91ac845a5 {width:unset}\nul.jsx-c5810fd91ac845a5 {list-style-type:none;\npadding:0;\nmargin:0 0 1rem 0}\n@media (min-width:768px) {.flex.jsx-c5810fd91ac845a5 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}\n.item.jsx-c5810fd91ac845a5 {width:50%}\nimg.jsx-c5810fd91ac845a5 {display:block;\nmargin:0 auto}}\n@media (min-width:992px) {section.jsx-c5810fd91ac845a5 {border-left:1px solid #c9c9c9;\nborder-right:1px solid #c9c9c9}}"}),(0,i.jsx)("section",{className:"jsx-c5810fd91ac845a5",children:(0,i.jsxs)("div",{className:"jsx-c5810fd91ac845a5 container",children:[(0,i.jsx)("h1",{className:"jsx-c5810fd91ac845a5",children:"Photo Gallery"}),(0,i.jsx)("p",{className:"jsx-c5810fd91ac845a5",children:"Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular."}),(0,i.jsx)("p",{className:"jsx-c5810fd91ac845a5",children:"These photos are courtesy of some of the great photographers that have gone out and taken tours with us."}),(0,i.jsxs)("p",{className:"jsx-c5810fd91ac845a5",children:["Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. ",(0,i.jsx)("a",{href:"/contact/",className:"jsx-c5810fd91ac845a5",children:"Contact us today!"})]})]})}),(0,i.jsx)(d,{galleryName:"gallery/caddo-lake-",lastSlide:32})]})}},7888:function(e){e.exports={imageGallery:"imageGallery_imageGallery__MYGPp",galleryContainer:"imageGallery_galleryContainer__7wNFo",img:"imageGallery_img__s7RQt",ul:"imageGallery_ul__uEoeQ",btn:"imageGallery_btn__fI7OU",disabled:"imageGallery_disabled__LinX0",nav:"imageGallery_nav__HKYPg",li:"imageGallery_li__nuhw5",a:"imageGallery_a__1_fFb",lightBox:"imageGallery_lightBox__h0Ef5"}},4287:function(e,t,s){"use strict";var i=s(4155);function r(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof i&&i.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,r=t.optimizeForSpeed,a=void 0===r?n:r,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;l(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",l("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,i,a=e.prototype;return a.setOptimizeForSpeed=function(e){l("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(l(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(r){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];l(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,s){t&&l(o(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return s?r.insertBefore(i,s):r.appendChild(i),i},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),i&&r(t,i),e}();function l(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a},7884:function(e,t,s){"use strict";t.default=o;var i,r=s(7294);var n=new(((i=s(8122))&&i.__esModule?i:{default:i}).default);function o(e){return"undefined"===typeof window?(n.add(e),null):((0,r.useLayoutEffect)((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return n.computeId(t,s)})).join(" ")}},8122:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var i=n(s(9887)),r=n(s(4287));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,n=t.optimizeForSpeed,o=void 0!==n&&n,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var n=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=n,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var r=String(s),n=t+r;return e[n]||(e[n]="jsx-"+(0,i.default)(t+"-"+r)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=s+i;return t[r]||(t[r]=i.replace(e,s)),t[r]}},t.getIdAndRules=function(e){var t=this,s=e.children,i=e.dynamic,r=e.id;if(i){var n=this.computeId(r,i);return{styleId:n,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,s)]}}return{styleId:this.computeId(r),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},5988:function(e,t,s){e.exports=s(7884)}},function(e){e.O(0,[749,253,774,888,179],(function(){return t=1551,e(e.s=t);var t}));var t=e.O();_N_E=t}]);