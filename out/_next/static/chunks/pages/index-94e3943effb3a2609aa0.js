_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+lMf":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("+xep"),i=(r("g2JI"),n.a.createElement);t.a=function(e){var t=e.imagePath,r=e.alt,a=e.bottom,n=e.minHeight;return i("section",{className:"hero"},i(o.CloudinaryContext,{cloudName:"tpierce36"},a?i("style",{jsx:"true"},"\n            .hero {\n              height: ".concat(n&&n.mobile?n.mobile:"auto",";\n            }\n\n            .hero .img-wrapper {\n              min-height: 203px;\n            }\n\n            @media (min-width: 768px) {\n              .hero {\n                height: ").concat(n&&n.tablet?n.tablet:"auto",";\n              }\n            }\n\n            @media (min-width: 992px) {\n              .hero {\n                height: ").concat(n&&n.desktop?n.desktop:"auto",";\n              }\n\n              .hero .img-wrapper img {\n                position: relative;\n                bottom: ").concat(a,"px;\n              }\n            }\n          ")):null,i("div",{className:"img-wrapper"},i(o.Image,{publicId:t,responsive:!0,width:"auto",crop:"scale",alt:r},i(o.Transformation,{quality:"90",fetchFormat:"auto",gravity:"auto"})))))}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2qu3":function(e,t,r){"use strict";var a=r("oI91"),n=r("/GRZ"),o=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.__esModule=!0,t.default=void 0;var c,d=(c=r("q1tI"))&&c.__esModule?c:{default:c},f=r("8L3h"),h=r("jwwS");var p=[],m=[],y=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function b(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(a){var n=g(e[a]);n.loading?t.loading=!0:(t.loaded[a]=n.loaded,t.error=n.error),r.push(n.promise),n.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),a=null;function n(){if(!a){var t=new k(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!y&&"function"===typeof r.webpack){var o=r.webpack();m.push((function(e){var t,r=l(o);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(-1!==e.indexOf(a))return n()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){n();var o=d.default.useContext(h.LoadableContext),i=(0,f.useSubscription)(a);return d.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return n()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var k=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return w(g,e)}function O(e,t){for(var r=[];e.length;){var a=e.pop();r.push(a(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(b,e)},_.preloadAll=function(){return new Promise((function(e,t){O(p).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};O(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var j=_;t.default=j},Ixz3:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=(r("47Rm"),n.a.createElement);t.a=function(e){var t=e.data,r=t.titles,a=t.paragraphs,n=t.lists,i=t.cta;return o("div",{className:"text-wrapper"},r&&r.map((function(e,t){return o("div",{key:t,dangerouslySetInnerHTML:{__html:e}})})),a&&a.map((function(e,t){return o("p",{key:t,dangerouslySetInnerHTML:{__html:e}})})),n&&e.data.lists.map((function(e,t){return"ul"===e.type?o("ul",{key:t},e.items.map((function(e,t){return o("li",{key:t},e.title&&o("h4",null,e.title),e.paragraphs.map((function(e,t){return o("p",{key:t,dangerouslySetInnerHTML:{__html:e}})})))}))):o("ol",{key:t},e.items.map((function(e,t){return o("li",{key:t},e.title&&o("h4",null,e.title),e.paragraphs.map((function(e,t){return o("p",{key:t},e)})))})))})),i&&o("div",{dangerouslySetInnerHTML:{__html:i}}))}},RNiq:function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),n=r.n(a),o=r("HaE+"),i=r("1OyB"),u=r("vuIU"),l=r("Ji7U"),s=r("md7G"),c=r("foSv"),d=r("q1tI"),f=r.n(d),h=r("a6RD"),p=r.n(h),m=r("+lMf"),y=r("bKFx"),g=f.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=Object(c.a)(e);if(t){var n=Object(c.a)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(s.a)(this,r)}}var v=p()((function(){return r.e(18).then(r.bind(null,"cx0j"))}),{loadableGenerated:{webpack:function(){return["cx0j"]},modules:["../components/LazySideHug"]}}),w={image:{path:"mike-moir-5.jpg",alt:"Sunset over Caddo Lake"},textData:[{titles:["<h1>Caddo Lake Bayou Tours</h1>","<h2>Book a tour today!</h2>",'<h3><a href="tel:903-570-2169">903-570-2169</a></h3>'],paragraphs:["Come take a boat tour on one of the most scenic and beautiful lakes in the South. Caddo Lake is approximately 26,000 acres of Bald Cypress trees, Spanish moss, abundant wildlife, and scenery that you will never forget. The lake has everything from swamps, bayous and river ways that create a one of a kind experience.","Whether you are looking for a guided fishing trip, a sight seeing tour of the wildlife or just wanting to have a relaxing day or evening on the boat on Caddo Lake then look no further. Book a tour today to see some of the beauty that awaits you.",'Also don\'t forget to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank" rel="noopener">Facebook page</a> to see weekly updates and stay in touch with us!','<a class="btn" href="/contact">Book a Tour</a>']}]},k={image:{path:"lake-sunset.jpg",alt:"Caddo Lake Cypress trees with fog"},textData:[{titles:["<h2>A lake rich with history</h2>"],paragraphs:["Caddo Lake is steeped in history dating back to the early 1800's and one of the best ways to soak it in is with a guided boat tour. Sit back and relax while you take in the history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans to Jefferson, Texas are just some of the lakes rich history.","The names of certain areas of the lake such as Alligator Bayou, Starr Ditch, Ames Spring Basin, Potters Point, Britts Gap and Government Ditch among others give the lake a certain mystic created by the characters from it's past. It creates the perfect atomosphere for fishing, relaxing or watching the sunset."]}],imageFirst:!0},_={image:{path:"mike-moir-6.jpg",alt:"Crane in Cypress tree on Caddo Lake"},textData:[{titles:["<h2>Photography Tours</h2>"],paragraphs:["Looking to get some great pictures of the beautiful Bald Cypress trees covered in Spanish moss? Schedule a guided tour and go on an adventure to get all the images you need to complete your photography collection.","Whether you want to go on a wildlife photography tour with a group or with the peace and quiet of being alone to get those perfect shots, we can accommodate.",'<a class="btn" href="/contact/">Contact us today</a>']}]},O={image:{path:"lake-trees-fog.jpg",alt:"Cypress trees with plenty of fog over the water"},textData:[{titles:["<h2>Featured on TravelAwaits Article</h2>"],paragraphs:["TravelAwaits is a great blog that features destinations all over the world and gives you great tips on things to do there.","We are lucky enough to have been mentioned in an article over things to do near Jefferson Texas.","Caddo Lake Bayou tours is number seven on the list and click the link below if you would like to read the full article!",'<a class="btn" target="_blank" rel="noopener" href="https://www.travelawaits.com/2552685/outdoor-activities-near-jefferson-texas/">View Article</a>']}],imageFirst:!0},j=function(e){Object(l.a)(r,e);var t=b(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={activeTab:"home"},a}return Object(u.a)(r,[{key:"render",value:function(){return g("div",null,g(m.a,{imagePath:"mike-moir-3.jpg",alt:"Caddo Lake sunrise",bottom:30,minHeight:{mobile:"212px",tablet:"434px",desktop:"518px"}}),g(y.a,{data:w}),g(v,{data:k}),g(v,{data:_}),g(v,{data:O}))}}]),r}(f.a.Component);j.getInitialProps=function(){var e=Object(o.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,"/","Caddo Lake Bayou Tours","home",e.abrupt("return",{activeTab:"home",canonical:"/",pageTitle:"Caddo Lake Bayou Tours"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=j},a6RD:function(e,t,r){"use strict";var a=r("oI91");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=i.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=o(o({},a),e));if(a=o(o({},a),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(a.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var n={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?n[e]=t:n[e]=function(){return t.then((function(e){return e.default||e}))}})),a.loader=n}a.loadableGenerated&&delete(a=o(o({},a),a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,l(r,a);delete a.ssr}return r(a)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},bKFx:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),o=r("Ixz3"),i=r("+xep"),u=(r("sPUI"),n.a.createElement);t.a=function(e){var t=e.data,r=t.imageFirst,a=t.textData,n=t.image,l=t.googleMap;return u("section",{className:"side-hug"},u("div",{className:"container flex"},u("div",{className:"col"},r?(l&&u("div",null,l),n&&u(i.CloudinaryContext,{cloudName:"tpierce36"},u("div",{className:"img-wrapper"},u(i.Image,{publicId:n.path,responsive:!0,width:"auto",crop:"scale",alt:n.alt,loading:"lazy"},u(i.Transformation,{quality:"auto",fetchFormat:"auto"}))))):a.map((function(e,t){return u(o.a,{key:t,data:e})}))),u("div",{className:"col"},r?a.map((function(e,t){return u(o.a,{key:t,data:e})})):n&&u(i.CloudinaryContext,{cloudName:"tpierce36"},u("div",{className:"img-wrapper"},u(i.Image,{publicId:n.path,responsive:!0,width:"auto",crop:"scale",alt:n.alt,loading:"lazy"},u(i.Transformation,{quality:"auto",fetchFormat:"auto"})))),l&&u("iframe",{title:"Google Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632",width:"100%",height:"460",frameBorder:"0",allowFullScreen:!0,importance:"low",loading:"lazy"}))))}},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},jwwS:function(e,t,r){"use strict";var a;t.__esModule=!0,t.LoadableContext=void 0;var n=((a=r("q1tI"))&&a.__esModule?a:{default:a}).default.createContext(null);t.LoadableContext=n},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,5,2,4,3]]]);