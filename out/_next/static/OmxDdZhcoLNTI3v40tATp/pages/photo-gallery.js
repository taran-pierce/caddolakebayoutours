(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var i,r=s("q1tI");var n=new(((i=s("SevZ"))&&i.__esModule?i:{default:i}).default),o=function(e){var t,s;function i(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=i).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,i.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return n.computeId(t,s)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){n.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=o},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},MX0m:function(e,t,s){e.exports=s("3niX")},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var i=n(s("9kyW")),r=n(s("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,n=t.optimizeForSpeed,o=void 0!==n&&n,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var n=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=n,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var r=String(s),n=t+r;return e[n]||(e[n]="jsx-"+(0,i.default)(t+"-"+r)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=s+i;return t[r]||(t[r]=i.replace(e,s)),t[r]}},t.getIdAndRules=function(e){var t=this,s=e.children,i=e.dynamic,r=e.id;if(i){var n=this.computeId(r,i);return{styleId:n,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,s)]}}return{styleId:this.computeId(r),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},WNkt:function(e,t,s){"use strict";s.r(t);var i=s("ln6h"),r=s.n(i),n=s("0iUn"),o=s("sLSF"),a=s("MI3g"),u=s("a7VT"),l=s("Tit0"),c=s("MX0m"),h=s.n(c),d=s("q1tI"),p=s.n(d),f=s("AT/M"),m=s("+xep"),_=(s("KC+a"),p.a.createElement),v=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(a.a)(this,Object(u.a)(t).call(this,e))).state={currentSlide:1,lastSlide:11,lightBoxOpen:!1},s.previousImage=s.previousImage.bind(Object(f.a)(s)),s.nextImage=s.nextImage.bind(Object(f.a)(s)),s.toggleLightBox=s.toggleLightBox.bind(Object(f.a)(s)),s}return Object(l.a)(t,e),Object(o.a)(t,[{key:"nextImage",value:function(e){e.preventDefault();var t=this.state.currentSlide+1;this.state.currentSlide!=this.state.lastSlide&&this.setState({currentSlide:t})}},{key:"previousImage",value:function(e){e.preventDefault();var t=this.state.currentSlide-1;1!=this.state.currentSlide&&this.setState({currentSlide:t})}},{key:"toggleLightBox",value:function(e){e.preventDefault(),this.setState({lightBoxOpen:!this.state.lightBoxOpen})}},{key:"render",value:function(){var e=this.state,t=e.currentSlide;e.lightBoxOpen;return _("section",{className:"image-gallery"},_("h2",null,"Pictures of Caddo Lake"),_("div",{className:"gallery-container"},_("nav",null,_("ul",null,_("li",null,_("a",{className:"btn ".concat(1==t&&"disabled"),onClick:this.previousImage},"Previous")),_("li",null,_("a",{className:"btn ".concat(11==t&&"disabled"),onClick:this.nextImage},"Next")))),_("ul",null,_("li",null,_(m.CloudinaryContext,{cloudName:"tpierce36"},_("a",{href:"https://res.cloudinary.com/tpierce36/image/upload/v1578238226/".concat("gallery/caddo-lake-").concat(t,".jpg")},_(m.Image,{publicId:"".concat("gallery/caddo-lake-").concat(t,".jpg"),responsive:!0,width:"auto",crop:"scale",alt:"Caddo Lake #".concat(t)},_(m.Transformation,{quality:"auto",fetchFormat:"auto"})))))),_("nav",null,_("ul",null,_("li",null,_("a",{className:"btn ".concat(1==t&&"disabled"),onClick:this.previousImage},"Previous")),_("li",null,_("a",{className:"btn ".concat(11==t&&"disabled"),onClick:this.nextImage},"Next"))))))}}]),t}(p.a.Component),g=p.a.createElement,y=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(a.a)(this,Object(u.a)(t).call(this,e))).state={activeTab:"photo-gallery"},s}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return g("div",{className:"jsx-4197566438"},g(h.a,{id:"4197566438"},["section.jsx-4197566438{background:#fafafa;padding:1rem;}",".container.jsx-4197566438{width:unset;}","ul.jsx-4197566438{list-style-type:none;padding:0;margin:0 0 1rem 0;}","@media(min-width:768px){.flex.jsx-4197566438{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.jsx-4197566438{width:50%;}img.jsx-4197566438{display:block;margin:0 auto;}}","@media (min-width:992px){section.jsx-4197566438{border-left:1px solid #c9c9c9;border-right:1px solid #c9c9c9;}}"]),g("section",{className:"jsx-4197566438"},g("div",{className:"jsx-4197566438 container"},g("h1",{className:"jsx-4197566438"},"Photo Gallery"),g("p",{className:"jsx-4197566438"},"Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular."),g("p",{className:"jsx-4197566438"},"These photos are courtesy of some of the great photographers that have gone out and taken tours with us."),g("p",{className:"jsx-4197566438"},"Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. ",g("a",{href:"/contact/",className:"jsx-4197566438"},"Contact us today!")))),g(v,null))}}]),t}(p.a.Component);y.getInitialProps=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,"/photo-gallery/","Photo Gallery - Caddo Lake Bayou Tours","photo-gallery",t.abrupt("return",{canonical:"/photo-gallery/",pageTitle:"Photo Gallery - Caddo Lake Bayou Tours",activeTab:"photo-gallery"});case 5:case"end":return t.stop()}}))};t.default=y},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,s=t.name,n=void 0===s?"stylesheet":s,a=t.optimizeForSpeed,u=void 0===a?i:a,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;o(r(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,n,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(n){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,s){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return s?n.insertBefore(i,s):n.appendChild(i),i},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,n),a&&s(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,s("8oxB"))},hXjV:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photo-gallery",function(){return s("WNkt")}])}},[["hXjV",1,0,2]]]);