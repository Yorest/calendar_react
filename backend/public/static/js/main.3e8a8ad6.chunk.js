(this.webpackJsonpcalendapp=this.webpackJsonpcalendapp||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(8),o=n.n(r),s=n(9),i=n(22),l=n(64),u=n(5),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set Active",m="[event] Logout event",O="[event] Add new",p="[event] Clear active event",f="[event] Event updated",v="[event] Event deleted",h="[event] Events loaded",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Logout",N={modalOpen:!1},w=n(56),k={events:[],activeEvent:null},E={checking:!0},S=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case p:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case v:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(u.a)(Object(u.a)({},e),{},{events:Object(w.a)(t.payload)});case m:return Object(u.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,D=Object(i.e)(S,C(Object(i.a)(l.a))),T=n(36),P=n(10),I=n(14),A=n(25),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(I.a)(t,2),a=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},a),{},Object(A.a)({},t.name,t.value)))};return[a,s,o]},L=n(12),R=n.n(L),G=n(21),F="https://calend-app.herokuapp.com/api",V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},J=n(18),M=n.n(J),U=n(16),B=n.n(U),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:B()(e.end).toDate(),start:B()(e.start).toDate()})}))},q=function(e){return{type:O,payload:e}},z=function(){return{type:p}},K=function(e){return{type:f,payload:e}},Q=function(){return{type:v}},W=function(e){return{type:h,payload:e}},Y=function(){return{type:x}},Z=function(e){return{type:g,payload:e}},$=function(){return function(e){localStorage.clear(),e({type:m}),e(ee())}},ee=function(){return{type:y}},te=(n(77),function(){var e=Object(s.b)(),t=_({lEmail:"fernando@gmail.com",lPassword:"123456"}),n=Object(I.a)(t,2),c=n[0],r=n[1],o=_({rName:"Nando",rEmail:"nando@gmail.com",rPassword1:"123456",rPassword2:"123456"}),i=Object(I.a)(o,2),l=i[0],u=i[1],j=c.lEmail,d=c.lPassword,b=l.rName,m=l.rEmail,O=l.rPassword1,p=l.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=j,a=d,function(){var e=Object(G.a)(R.a.mark((function e(t){var c,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Z({uid:r.uid,name:r.name}))):M.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:j,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),O!==p)return M.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,c;console.log("?"),e((n=m,a=O,c=b,function(){var e=Object(G.a)(R.a.mark((function e(t){var r,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Z({uid:o.uid,name:o.name}))):M.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:b,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:m,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:O,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:p,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),ne=n(55),ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:t}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e($())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},re=function(e){var t=e.event,n=t.title,c=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("strong",{children:[" ",n," "]}),Object(a.jsxs)("span",{children:["- ",c.name," "]})]})},oe=n(50),se=n.n(oe),ie=n(51),le=n.n(ie),ue=function(){return{type:j}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=B()().minutes(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},Oe=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvent,n=Object(s.b)(),r=Object(c.useState)(de.toDate()),o=Object(I.a)(r,2),i=o[0],l=o[1],j=Object(c.useState)(be.toDate()),b=Object(I.a)(j,2),m=b[0],O=b[1],p=Object(c.useState)(!0),f=Object(I.a)(p,2),v=f[0],h=f[1],x=Object(c.useState)(me),g=Object(I.a)(x,2),y=g[0],N=g[1],w=y.notes,k=y.title,E=y.start,S=y.end;Object(c.useEffect)((function(){N(t||me)}),[t,N]);var C=function(e){var t=e.target;N(Object(u.a)(Object(u.a)({},y),{},Object(A.a)({},t.name,t.value)))},D=function(){n({type:d}),n(z()),N(me)};return Object(a.jsxs)(se.a,{isOpen:e,onRequestClose:D,style:je,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,c=B()(E),r=B()(S);return c.isSameOrAfter(r)?M.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):k.trim().length<2?h(!1):(n(t?(a=y,function(){var e=Object(G.a)(R.a.mark((function e(t){var n,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),c.ok?t(K(a)):M.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(G.a)(R.a.mark((function t(n,a){var c,r,o,s,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,H("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(q(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),h(!0),void D())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(le.a,{onChange:function(e){l(e),N(Object(u.a)(Object(u.a)({},y),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(le.a,{onChange:function(e){O(e),N(Object(u.a)(Object(u.a)({},y),{},{end:e}))},value:m,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},pe=(n(112),n(113),function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})}),fe=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t,n){var a,c,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,H("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(Q()):M.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento "})]})};B.a.locale("es");var ve=Object(ne.b)(B.a),he=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(c.useState)(localStorage.getItem("lastView")||"month"),l=Object(I.a)(i,2),u=l[0],j=l[1];Object(c.useEffect)((function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=X(a.eventos),t(W(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(ae,{}),Object(a.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:b,payload:t})},onView:function(e){j(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(z())},selectable:!0,view:u,components:{event:re}}),Object(a.jsx)(pe,{}),r&&Object(a.jsx)(fe,{}),Object(a.jsx)(Oe,{})]})},xe=n(40),ge=function(e){var t=e.isAuthenticated,n=e.component,c=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(P.a,{to:"/"}):Object(a.jsx)(n,Object(u.a)({},e))}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,c=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(P.b,Object(u.a)(Object(u.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(u.a)({},e)):Object(a.jsx)(P.a,{to:"/login"})}}))},Ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Z({uid:a.uid,name:a.name}))):t(Y());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(P.d,{children:[Object(a.jsx)(ge,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(a.jsx)(ye,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(a.jsx)(P.a,{to:"/"})]})})})},we=function(){return Object(a.jsx)(s.a,{store:D,children:Object(a.jsx)(Ne,{})})};n(115);o.a.render(Object(a.jsx)(we,{}),document.getElementById("root"))},77:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.3e8a8ad6.chunk.js.map