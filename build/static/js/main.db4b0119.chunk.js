(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){e.exports=n(423)},179:function(e,t,n){},202:function(e,t,n){},423:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(70),i=n.n(o),s=(n(179),n(3)),c=n.n(s),l=n(16),u=n(19),p=n(20),d=n(22),m=n(21),h=n(23),v=n(42),b=n.n(v),f="https://birdnation.herokuapp.com/api/observations";b.a.interceptors.request.use(function(e){return"post"===e.method&&window.dispatchEvent(new CustomEvent("axios",{detail:e})),e},function(e){return Promise.reject(e)});var g=function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(f,{headers:{"Content-Type":"Application/json"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f,"/").concat(t),{headers:{"Content-Type":"Application/json"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),w={getAll:g,create:function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(f,t,{headers:{"Content-Type":"Application/json"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(f,"/").concat(t),{headers:{"Content-Type":"Application/json"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getOne:E},y=(n(202),n(71)),k=n(426),O=n(427),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).getCurrentPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){navigator.geolocation.getCurrentPosition(t,n,e)})},n.loadPosition=Object(l.a)(c.a.mark(function e(){var t,a,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getCurrentPosition();case 3:return t=e.sent,a=t.coords,r=a.latitude,o=a.longitude,e.abrupt("return",{latitude:r,longitude:o});case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])})),n.addObservation=function(){var e=Object(l.a)(c.a.mark(function e(t){var a,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.loadPosition();case 3:return a=e.sent,r={species:n.state.species,rarity:n.state.rarity,notes:n.state.notes,latitude:a.latitude,longitude:a.longitude,time:new Date},e.next=7,w.create(r);case 7:return o=e.sent,n.props.updateObservations(o),e.next=11,n.setState({returnToIndex:!0});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.state={species:"",rarity:"Common",notes:"",returnToIndex:!1},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.returnToIndex?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(O.a,{to:"/"},"Cancel"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.addObservation},r.a.createElement("label",null,"Species"),r.a.createElement("br",null),r.a.createElement("input",{name:"species",value:this.state.value,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Rarity"),r.a.createElement("br",null),r.a.createElement("select",{name:"rarity",value:this.state.rarity,onChange:this.handleChange},r.a.createElement("option",{key:"Common",value:"Common"},"Common"),r.a.createElement("option",{key:"Rare",value:"Rare"},"Rare"),r.a.createElement("option",{key:"Extremely rare",value:"Extremely rare"},"Extremenly rare")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Notes"),r.a.createElement("br",null),r.a.createElement("input",{type:"textarea",name:"notes",value:this.state.notes,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component),j=n(425),C=n(424),S=n(102),N=n(73),D=n(74),U=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={lat:parseFloat(n.props.lat),lng:parseFloat(n.props.lng)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object(D.withGoogleMap)(function(t){return r.a.createElement(D.GoogleMap,{defaultCenter:e.state,defaultZoom:10,mark:!0},r.a.createElement(D.Marker,{position:e.state}))});return r.a.createElement("div",null,r.a.createElement(t,{containerElement:r.a.createElement("div",{style:{height:"250px",width:"250px",marginLeft:"auto",marginRight:"auto"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(r.a.Component),A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).resize=function(){n.setState(n.state)},n.state=Object(S.a)({},e.observation,{extended:!1}),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"toggleExtended",value:function(){this.setState(Object(S.a)({},this.state,{extended:!this.state.extended}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.extended?r.a.createElement(N.Card,{className:"cardReact"},r.a.createElement("div",{onClick:function(){return e.toggleExtended()}},r.a.createElement("h4",null,this.state.species),r.a.createElement(N.CardBody,null,r.a.createElement("div",{onClick:function(){return e.toggleExtended()},style:{cursor:"pointer"}},"Rarity: ",this.state.rarity,r.a.createElement("br",null),"Location: ",this.state.latitude,", ",this.state.longitude,r.a.createElement("br",null),"Notes: ",this.state.notes,r.a.createElement("br",null),"Observed: ",new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date(this.state.time)),r.a.createElement("br",null)))),r.a.createElement(U,{lat:this.state.latitude,lng:this.state.longitude})):r.a.createElement("div",{onClick:function(){return e.toggleExtended()}},r.a.createElement(N.Card,{className:"cardReact"},r.a.createElement("h4",null,this.state.species)," ",r.a.createElement("br",null),this.state.notes.substring(0,15),"...")))}}]),t}(r.a.Component),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={observations:n.props.observations,sortedBy:["time (newest)","time (oldest)","species","rarity"],sortNo:0},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.sortObservations()}},{key:"sortObservations",value:function(){var e=this.state.sortedBy[this.state.sortNo],t=this.state.observations;switch(e){case"time (newest)":t.sort(function(e,t){return new Date(e.time)>new Date(t.time)?-1:new Date(e.time)<new Date(t.time)?1:0});break;case"time (oldest)":t.sort(function(e,t){return new Date(e.time)<new Date(t.time)?-1:new Date(e.time)>new Date(t.time)?1:0});break;case"species":t.sort(function(e,t){return e.species.toString().toUpperCase()<t.species.toString().toUpperCase()?-1:e.species.toString().toUpperCase()>t.species.toString().toUpperCase()?1:0});break;case"rarity":t.sort(function(e,t){return e.rarity.toString().toUpperCase()<t.rarity.toString().toUpperCase()?-1:e.rarity.toString().toUpperCase()>t.rarity.toString().toUpperCase()?1:0})}this.setState({observations:t,sorted:!0})}},{key:"changeSorting",value:function(){var e=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.sortNo<3)){e.next=5;break}return e.next=3,this.setState({sortNo:this.state.sortNo+1});case 3:e.next=7;break;case 5:return e.next=7,this.setState({sortNo:0});case 7:this.sortObservations();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{to:"/newobservation"},"New observation"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.changeSorting()}},"Sort by: ",this.state.sortedBy[this.state.sortNo]),r.a.createElement("br",null),r.a.createElement("br",null),this.state.observations.map(function(e){return r.a.createElement(A,{observation:e,key:e.id})}))}}]),t}(r.a.Component),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={observations:null},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,w.getAll().catch(function(e){return JSON.parse(window.localStorage.getItem("observations"))});case 3:if(t=e.sent,n=JSON.parse(window.localStorage.getItem("observations")),!(t!==n&&t.length>0)){e.next=11;break}return window.localStorage.setItem("observations",JSON.stringify(t)),e.next=9,this.setState({observations:t});case 9:e.next=18;break;case 11:if(!n){e.next=16;break}return e.next=14,this.setState({observations:n});case 14:e.next=18;break;case 16:return e.next=18,this.setState({observations:[]});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateObservations",value:function(e){var t=this.state.observations;t.push(e),window.localStorage.setItem("observations",JSON.stringify(t)),this.setState({observations:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Birdnation"),this.state.observations&&this.state.observations.length>0?r.a.createElement(C.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,{observations:e.state.observations,key:"listingpage"})}}):r.a.createElement(C.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{to:"/newobservation"},"New observation"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"No observations"))}}),r.a.createElement(C.a,{exact:!0,path:"/newobservation",render:function(){return r.a.createElement(x,{updateObservations:e.updateObservations.bind(e),key:"newobservation"})}}))))}}]),t}(r.a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");I?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):P(t,e)})}}(),i.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[174,2,1]]]);
//# sourceMappingURL=main.db4b0119.chunk.js.map