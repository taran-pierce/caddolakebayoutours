(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9Jkg":function(e,a,t){e.exports=t("oh+g")},ALdH:function(e,a,t){"use strict";t.r(a);var n=t("ln6h"),s=t.n(n),o=t("9Jkg"),i=t.n(o),r=t("0iUn"),l=t("sLSF"),u=t("MI3g"),h=t("a7VT"),d=t("AT/M"),c=t("Tit0"),m=t("q1tI"),g=t.n(m),p=t("+lMf"),f=t("bKFx"),y=t("+xep"),b=(t("B3HF"),g.a.createElement),k=function(e){var a=e.onSubmit,t=e.onFirstNameChange,n=e.onLastNameChange,s=e.onEmailChange,o=e.onMessageChange,i=e.data,r=e.state,l=r.sent,u=r.firstName,h=r.lastName,d=r.email,c=r.message,m=r.buttonText,g=r.loading,p=i.textData[0];return b("section",{className:"form"},b("div",{className:"flex"},b("div",{className:"col text"},p&&p.titles&&p.titles.map((function(e,a){return b("div",{key:a,dangerouslySetInnerHTML:{__html:e}})})),p&&p.paragraphs&&p.paragraphs.map((function(e,a){return b("p",{key:a,dangerouslySetInnerHTML:{__html:e}})})),p&&p.lists&&p.lists.map((function(e,a){return b("ul",{key:a},e.items.map((function(e,a){return b("li",{key:a},e.title&&b("h4",null,e.title),e.paragraphs.map((function(e,a){return b("p",{key:a,dangerouslySetInnerHTML:{__html:e}})})))})))})),l?b("div",{className:"loading-screen"},b("h4",null,"Message Received!"),b("p",null,"Thanks for you interest! I will contact you as soon as possible.")):g?b("div",{className:"loading-screen"},b("h5",null,"Sending..."),b("img",{className:"rotating",src:"/images/loading.svg",alt:"Contacting email server"})):b("form",{className:"contact-form",onSubmit:a},b("fieldset",null,b("label",{htmlFor:"first_name"},"First Name"),b("input",{onChange:t,type:"text",name:"first_name",id:"first_name",placeholder:"First Name",value:u,inputMode:"text",required:!0})),b("fieldset",null,b("label",{htmlFor:"last_name"},"Last Name"),b("input",{type:"text",name:"last_name",id:"last_name",onChange:n,value:h,placeholder:"Last Name",inputMode:"text",required:!0})),b("fieldset",null,b("label",{htmlFor:"email"},"Email"),b("input",{type:"email",name:"email",id:"email",onChange:s,placeholder:"your@email.com",value:d,inputMode:"email",required:!0})),b("fieldset",null,b("label",{htmlFor:"message"},"Message"),b("textarea",{name:"message",id:"message",onChange:o,value:c,inputMode:"text",required:!0})),b("div",{className:"button-wrapper"},b("button",{type:"submit",className:"btn"},m)))),b("div",{className:"col"},b(y.CloudinaryContext,{cloudName:"tpierce36"},b("div",{className:"img-wrapper"},b(y.Image,{publicId:i.image.path,responsive:!0,width:"auto",crop:"scale"},b(y.Transformation,{quality:"auto",fetchFormat:"auto"})))))))},C=(t("LpSC"),g.a.createElement),w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={firstName:"",lastName:"",message:"",email:"",sent:!1,error:!1,buttonText:"Send Message",activeTab:"contact",loading:!1},t.onFirstNameChange=t.onFirstNameChange.bind(Object(d.a)(t)),t.onLastNameChange=t.onLastNameChange.bind(Object(d.a)(t)),t.onEmailChange=t.onEmailChange.bind(Object(d.a)(t)),t.onMessageChange=t.onMessageChange.bind(Object(d.a)(t)),t.onSubmit=t.onSubmit.bind(Object(d.a)(t)),t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(){var e=this,a={name:"".concat(this.state.firstName," ").concat(this.state.lastName),email:this.state.email,message:this.state.message};event.preventDefault(),this.setState({loading:!0}),fetch("//caddo-email-server.herokuapp.com/send/mail",{mode:"no-cors",method:"post",headers:{Accept:"*/*","Content-Type":"application/x-www-form-urlencoded"},body:i()(a)}).then((function(a){e.setState({sent:!0}),e.setState({loading:!1}),e.resetForm()}))}},{key:"resetForm",value:function(){this.setState({firstName:"",lastName:"",email:"",message:"",buttonText:"Send"})}},{key:"render",value:function(){return C("div",null,C(p.a,{imagePath:"mike-moir-2.jpg",alt:"Caddo Lake bench"}),C(k,{data:{image:{path:"lake-cypress-trees.jpg",alt:"Caddo Lake with Cypress trees"},textData:[{titles:["<h1>Contact Caddo Lake Bayou Tours</h1>",'<h4>Rich McFarland <strong>Tour Guide</strong> <a href="tel:1-903-570-2169">903-570-2169</a></h4>'],paragraphs:["Tours available 7 days a week, any time from sunrise to sunset. Boat tours last approximately one hour.","Book a bout tour today or ask about boat tour reservations, photography tour, fishing trips, availability of dates or times, or any other general questions."]}]},onFirstNameChange:this.onFirstNameChange,onLastNameChange:this.onLastNameChange,onMessageChange:this.onMessageChange,onEmailChange:this.onEmailChange,onSubmit:this.onSubmit,state:this.state}),C(f.a,{data:{image:{path:"lake-with-pier.jpg",alt:"A pier on Caddo Lake"},imageFirst:!0,textData:[{titles:["<h2>Questions about tours?</h2>"],paragraphs:["If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.",'Come and enjoy the wonderful experience that is Caddo Lake. We can\'t wait to share it with you and don\'t forgot to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank">FaceBook page</a>!'],lists:[{type:"ul",items:[{title:"Where does the tour start?",paragraphs:["All tours start and end at the Shady Glade Marina"]},{paragraphs:["<strong>Address</strong>","449 Cypress Drive","Uncertain TX 75661",'<strong>Phone:</strong> <a href="tel:1-903-570-2169">903-570-2169</a>']}]}]}]}}),C(f.a,{data:{image:{path:"lake-trees-in-fall.jpg",alt:"Caddo Lake with Cypress trees in the Fall"},textData:[{titles:["<h2>Types of Tours for Caddo Lake</h2>"],lists:[{type:"ul",items:[{title:"Guided photography tour",paragraphs:["Whether you are looking to take some photography of the abundant wildlife here at Caddo Lake or some of the breath taking nature, we can show you all the best places on the lake amidst the maze of bayous and Bald Cypress trees."]},{title:"Sunrise or sunset tours",paragraphs:["Who can resist seeing a gorgeous sunset or sunrise over a lake? Caddo Lake is picturesque in every way, shape and form. Book a tour today and find out for yourself!"]},{title:"Fishing trips",paragraphs:["With vast amounts of experience and knowledge of Caddo Lake, we can take you to all the best fishing spots to ensure you will have a great time and a great catch."]},{title:"Sightseeing trips",paragraphs:["If taking pictures isn't quite your thing then just taking a relaxing ride on Caddo Lake and getting to see the bayous and how they all intertwine first hand is worth the experience alone. Come and check out the wonders of Caddo Lake today!"]},{title:"and more!",paragraphs:["There are so many things available to do and see on the lake that we couldn't list them all. If you think of something that you would like to do or see and you wonder if we can accommodate those plans, just send us a message and let us know! We will get back to you as soon as possible to let you know if we can help out."]}]}]}]}}))}}]),a}(g.a.Component);w.getInitialProps=function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.req,"/contact/","Contact - Caddo Lake Bayou Tours","contact",a.abrupt("return",{canonical:"/contact/",pageTitle:"Contact - Caddo Lake Bayou Tours",activeTab:"contact"});case 5:case"end":return a.stop()}}))};a.default=w},K64n:function(e,a,t){"use strict";a.Headers=self.Headers,a.Request=self.Request,a.Response=self.Response,a.fetch=self.fetch},LpSC:function(e,a,t){t("K64n"),e.exports=self.fetch.bind(self)},lqnA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])},"oh+g":function(e,a,t){var n=t("WEpk"),s=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}}},[["lqnA",1,0,2]]]);