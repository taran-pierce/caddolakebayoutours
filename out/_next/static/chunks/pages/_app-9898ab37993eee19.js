(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7677)}])},9720:function(e,t){"use strict";var n,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return r},ACTION_RESTORE:function(){return s},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return d}});let o="refresh",r="navigate",s="restore",i="server-patch",l="prefetch",u="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(a=n||(n={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function a(e,t,n,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return a}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let a=n(8754)._(n(7294)),o=n(4879),r=n(1572),s=n(8373),i=n(6221),l=n(5933),u=n(4167),c=n(8874),d=n(6342),f=n(245),p=n(6015),h=n(9720),m=new Set;function _(e,t,n,a,o,s){if(s||(0,r.isLocalURL)(t)){if(!a.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(s?e.prefetch(t,o):e.prefetch(t,n,a)).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let n,s;let{href:m,as:x,children:j,prefetch:y=null,passHref:v,replace:b,shallow:k,scroll:w,locale:C,onClick:N,onMouseEnter:T,onTouchStart:O,legacyBehavior:L=!1,...P}=e;n=j,L&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let R=a.default.useContext(u.RouterContext),E=a.default.useContext(c.AppRouterContext),B=null!=R?R:E,M=!R,I=!1!==y,A=null===y?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:S,as:F}=a.default.useMemo(()=>{if(!R){let e=g(m);return{href:e,as:x?g(x):e}}let[e,t]=(0,o.resolveHref)(R,m,!0);return{href:e,as:x?(0,o.resolveHref)(R,x):t||e}},[R,m,x]),U=a.default.useRef(S),H=a.default.useRef(F);L&&(s=a.default.Children.only(n));let q=L?s&&"object"==typeof s&&s.ref:t,[D,K,W]=(0,d.useIntersection)({rootMargin:"200px"}),Y=a.default.useCallback(e=>{(H.current!==F||U.current!==S)&&(W(),H.current=F,U.current=S),D(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[F,q,S,W,D]);a.default.useEffect(()=>{B&&K&&I&&_(B,S,F,{locale:C},{kind:A},M)},[F,S,K,C,I,null==R?void 0:R.locale,B,M,A]);let G={ref:Y,onClick(e){L||"function"!=typeof N||N(e),L&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),B&&!e.defaultPrevented&&function(e,t,n,o,s,i,l,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,r.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==l||l;"beforePopState"in t?t[s?"replace":"push"](n,o,{shallow:i,locale:u,scroll:e}):t[s?"replace":"push"](o||n,{scroll:e})};c?a.default.startTransition(f):f()}(e,B,S,F,b,k,w,C,M)},onMouseEnter(e){L||"function"!=typeof T||T(e),L&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),B&&(I||!M)&&_(B,S,F,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)},onTouchStart(e){L||"function"!=typeof O||O(e),L&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),B&&(I||!M)&&_(B,S,F,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)}};if((0,i.isAbsoluteUrl)(F))G.href=F;else if(!L||v||"a"===s.type&&!("href"in s.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,f.getDomainLocale)(F,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||(0,p.addBasePath)((0,l.addLocale)(F,e,null==R?void 0:R.defaultLocale))}return L?a.default.cloneElement(s,G):a.default.createElement("a",{...P,...G},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let a=n(7294),o=n(6231),r="function"==typeof IntersectionObserver,s=new Map,i=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!r,[c,d]=(0,a.useState)(!1),f=(0,a.useRef)(null),p=(0,a.useCallback)(e=>{f.current=e},[]);return(0,a.useEffect)(()=>{if(r){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:a,observer:o,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=i.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=s.get(a)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),s.set(n,t),t}(n);return r.set(e,t),o.observe(e),function(){if(r.delete(e),o.unobserve(e),0===r.size){o.disconnect(),s.delete(a);let e=i.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,c,f.current]),[p,c,(0,a.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(5893),o=n(5545),r=n.n(o),s=function(e){let{children:t}=e;return(0,a.jsx)("div",{className:r().container,children:t})},i=n(5697),l=n(9008),u=n.n(l),c=n(7294),d=n(6220),f=n.n(d);function p(e){let{menuOpen:t,toggleMenu:n}=e;return(0,a.jsx)("div",{className:t?f().menuButtonOpen:f().menuButtonClosed,onClick:n,children:t?(0,a.jsxs)("div",{className:f().a,children:[(0,a.jsx)("span",{className:f().spanOpen}),(0,a.jsx)("span",{className:f().spanOpen}),(0,a.jsx)("span",{className:f().spanOpenLast})]}):(0,a.jsxs)("div",{className:f().a,children:[(0,a.jsx)("span",{className:f().spanClosed}),(0,a.jsx)("span",{className:f().spanClosed}),(0,a.jsx)("span",{className:f().spanClosedLast})]})})}p.propTypes={toggleMenu:i.func.isRequired,menuOpen:i.bool.isRequired};var h=n(8673),m=n.n(h);function _(e){let{listItemRequired:t}=e,[n,o]=(0,c.useState)(!1);(0,c.useEffect)(()=>{o(!0)},[]);let r=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"fb-like","data-href":"//www.facebook.com/caddotours/","data-width":"170px","data-layout":"button","data-action":"like","data-size":"large","data-show-faces":"true","data-share":"true"})});return(0,a.jsx)(a.Fragment,{children:n&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(()=>(0,a.jsx)(()=>t?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{className:m().socialLink,children:(0,a.jsx)(r,{})})}):(0,a.jsx)(r,{}),{}),{})})})}_.defaultProps={listItemRequired:!1},_.propTypes={listItemRequired:i.bool};var g=n(1664),x=n.n(g),j=n(9454),y=n.n(j);function v(e){let{links:t,activeTab:n}=e,[o,r]=(0,c.useState)(!1),s=e=>{i<992&&r(!1)},[i,l]=(0,c.useState)(0);return(0,c.useEffect)(()=>{l(window.innerWidth)},[]),(0,a.jsxs)("nav",{className:o?y().headerNavOpen:y().headerNav,children:[(0,a.jsxs)("ul",{className:y().mainNav,children:[(0,a.jsx)("li",{className:y().li,children:(0,a.jsx)(x(),{href:"/",className:y().logo,onClick:s,children:"Caddo Lake Bayou Tours"})}),(0,a.jsx)("li",{className:y().dropdown,children:(0,a.jsx)(p,{toggleMenu:e=>{e.preventDefault(),r(!o)},menuOpen:o})})]}),(0,a.jsxs)("ul",{className:y().secondaryNav,children:[t.map((e,t)=>(0,a.jsx)("li",{className:(e.name.toLowerCase(),y().li),children:(0,a.jsx)(x(),{href:e.href,className:y().a,onClick:s,children:e.name})},t)),(0,a.jsx)(_,{listItemRequired:!0})]})]})}v.defaultProps={activeTab:""},v.propTypes={activeTab:i.string,links:i.array.isRequired};var b=n(5945),k=n.n(b);function w(e){let{pageTitle:t,activeTab:n,canonical:o,links:r,heroImage:s}=e;return(0,a.jsxs)("header",{className:k().header,children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{name:"author",content:"Taran Pierce"}),(0,a.jsx)("meta",{name:"description",content:"Caddo Lake Bayou Tours offers a guided tour of the beautiful Caddo Lake at any time from sunrise to sunset. Whether you are looking for a guided fishing tour, observe some of nature's wildlife, catch a jaw-dropping sunrise or sunset, take in some of the historic Caddo Lake culture or just enjoy some relaxing sight-seeing you are in for quite a treat. Book a boat tour with Caddo Lake Bayou Tours and experience the wonder for yourself."}),(0,a.jsx)("meta",{name:"keywords",content:"caddo, caddo lake, caddo lake boat tours, caddo lake tours, Caddo Lake boat tours, caddo lake boat tours jefferson texas, photography tours, site seeing tours, bayou tours, caddo lake tour, tours of Caddo Lake, caddo lake photos, guided fishing trip, cypress lake, caddo lake history, jefferson texas boat tours, alligator bayou tours, lake bayou, fishing trip, fishing tour, fishing guide tours, river tours, Caddo Lake, caddo lake bayou tours, caddo lake tour guide, fishing guide, travel agency, sunrise tours, sunset tours, swamp tours, caddo lake swamp, boat tours, personal tours, backwater, wildlife tours, gator, alligator, lake guide, caddo, lake, texas lake, natural lake, Louisiana lake, boats, bird watching, sightseeing, Caddo businesses, Texas, caddo lake information, uncertain texas, swamp tour, swamp adventure, caddo indians, spanish moss, fishing, caddo lake history"}),(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{rel:"canonical",href:o}),s&&(0,a.jsx)("link",{rel:"preload",href:s,as:"image"}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/images/ms-icon-144x144.png"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"google-site-verification",content:"B2p1pPmxNrh11r3HKQ5EfPlheeORHUacKHqpcLin5g8"})]}),(0,a.jsx)(v,{activeTab:n,links:r})]})}w.defaultProps={pageTitle:"Caddo Lake Bayou Tours",canonical:"",activeTab:""},w.propTypes={pageTitle:i.string,canonical:i.string,links:i.array.isRequired,activeTab:i.string};var C=n(9276),N=n.n(C);let T=new Date().getFullYear(),O=e=>{let{links:t,facebook:n}=e;return(0,a.jsxs)("footer",{className:N().footer,children:[(0,a.jsxs)("div",{className:N().container,children:[(0,a.jsxs)("div",{className:N().item,children:[(0,a.jsx)("h2",{className:N().h4,children:"Sitemap"}),(0,a.jsxs)("ul",{className:N().ul,children:[(0,a.jsx)("li",{className:N().li,children:(0,a.jsx)(x(),{href:"/",children:"Home"})}),t.map((e,t)=>(0,a.jsx)("li",{className:N().li,children:(0,a.jsx)(x(),{href:e.href,children:e.name})},t))]}),(0,a.jsxs)("ul",{className:N().ul,children:[(0,a.jsx)("li",{className:N().li,children:"Like us on FaceBook!"}),(0,a.jsx)(_,{listItemRequired:!0})]})]}),(0,a.jsxs)("div",{className:N().map,children:[(0,a.jsx)("iframe",{title:"Google Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632",width:"100%",height:"450",allowFullScreen:!0,loading:"lazy"}),(0,a.jsxs)("div",{className:N().addressBlock,children:[(0,a.jsx)("p",{children:"Rich McFarland, Tour Guide"}),(0,a.jsx)("p",{children:"U.S. Coast Guard Merchant Marine Captain License"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Address:"})," 449 Cypress Drive, Uncertain TX 75661"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Phone: "}),(0,a.jsx)("a",{href:"tel:1-903-570-2169",children:"903-570-2169"})]})]})]}),(0,a.jsxs)("div",{className:N().item,children:[(0,a.jsx)("h2",{className:N().h4,children:"Quick Links"}),(0,a.jsx)("ul",{className:N().ul,children:[{href:"http://shadygladeresort.com/",name:"Shady Glade Resort"},{href:"https://carriagehousejefferson.com/",name:"Carriage House Bed and Breakfast"},{href:"https://riverbendoutfitters.com/",name:"Riverbend Outfitters"},{href:"https://www.travelawaits.com/2552685/outdoor-activities-near-jefferson-texas/",name:"TravelAwaits"},{href:"https://www.moonglowlodge.com/",name:"Moonglow Lodge"},{href:"https://www.hodgepodgecottages.com/",name:"HodgePodge Cottages"},{href:"https://www.mikemoirphotography.com/",name:"Mike Moir Photography"},{href:"https://westerman.photo/index.php/travels/jefferson-texas/",name:"WesterBlog"}].map(e=>(0,a.jsx)("li",{className:N().li,children:(0,a.jsx)("a",{href:e.href,target:"_blank",rel:"noopener",children:e.name})},e.href))})]})]}),(0,a.jsxs)("p",{className:N().copyright,children:["Copyright ",T," \xa9"]})]})};O.defaultProps={facebook:{}},O.propTypes={links:i.array.isRequired,facebook:i.object};var L=n(4298),P=n.n(L);n(970);let R=[{name:"About",href:"/about/"},{name:"Directions",href:"/directions/"},{name:"Things to do",href:"/things-to-do/"},{name:"Photo Gallery",href:"/photo-gallery/"},{name:"Contact",href:"/contact/"}];var E=function(e){let{Component:t,pageProps:n}=e,{canonical:o,pageTitle:r,activeTab:i,heroImage:l}=n;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P(),{src:"https://www.googletagmanager.com/gtag/js?id=UA-107758647-2",strategy:"afterInteractive",defer:!0}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments)};\n        gtag('js', new Date());\n        gtag('config', 'UA-107758647-2');"}}),(0,a.jsxs)(s,{children:[(0,a.jsx)(w,{pageTitle:r,canonical:o,links:R,activeTab:i,heroImage:l}),(0,a.jsx)(t,{...n}),(0,a.jsx)(O,{links:R})]})]})}},970:function(){},8673:function(e){e.exports={fbLike:"facebookLikeButton_fbLike__BluRM",socialLink:"facebookLikeButton_socialLink__RVkym"}},9276:function(e){e.exports={footer:"footer_footer__GQiIV",container:"footer_container__IzwYP",h4:"footer_h4__Suvox",ul:"footer_ul__fD7Fe",li:"footer_li__HpFYQ",copyright:"footer_copyright__TKUz3",addressBlock:"footer_addressBlock__EWUQX",item:"footer_item__4R4EF",map:"footer_map__A2S2R"}},5945:function(e){e.exports={header:"header_header__Svpdj"}},5545:function(e){e.exports={container:"layout_container__RYcjt"}},6220:function(e){e.exports={menuOpen:"menuButton_menuOpen__2KWNy",menuButton:"menuButton_menuButton__fT12P",menuButtonClosed:"menuButton_menuButtonClosed__EhRAo",a:"menuButton_a__rnCmc",spanClosed:"menuButton_spanClosed__L000M",spanClosedLast:"menuButton_spanClosedLast__aWPSY",menuButtonOpen:"menuButton_menuButtonOpen__3e1gf",spanOpen:"menuButton_spanOpen__b2UO8",spanOpenLast:"menuButton_spanOpenLast__C149S"}},9454:function(e){e.exports={headerNav:"navigation_headerNav__3AoDk",a:"navigation_a__r93FY",mainNav:"navigation_mainNav__sHYXN",li:"navigation_li__jB3MA",secondaryNav:"navigation_secondaryNav__ZUCG0",logo:"navigation_logo__EO_u_",dropdown:"navigation_dropdown__CWjaN",headerNavOpen:"navigation_headerNavOpen__JfHq7",active:"navigation_active__c898x"}},9008:function(e,t,n){e.exports=n(4764)},1664:function(e,t,n){e.exports=n(1032)},4298:function(e,t,n){e.exports=n(3773)},2703:function(e,t,n){"use strict";var a=n(414);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,s){if(s!==a){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(2937)}),_N_E=e.O()}]);