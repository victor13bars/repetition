(this.webpackJsonprepetition=this.webpackJsonprepetition||[]).push([[0],{19:function(e,t,n){e.exports={myModal:"MyModal_myModal__27klM",myModalContent:"MyModal_myModalContent__27ntt",active:"MyModal_active__3V6fL"}},25:function(e,t,n){},37:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__1qRnt"}},41:function(e,t,n){e.exports={myInput:"MyInput_myInput__3dZV1"}},44:function(e,t,n){e.exports={loader:"Loader_loader__1aa0W",rotate:"Loader_rotate__18Xme"}},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(22),a=n.n(r),s=n(3),o=(n(25),n(13)),i=n(6),u=n(45),j=n(37),l=n.n(j),b=n(0),d=["children"],p=function(e){var t=e.children,n=Object(u.a)(e,d);return Object(b.jsx)("button",Object(i.a)(Object(i.a)({},n),{},{className:l.a.myBtn,children:t}))},O=Object(c.createContext)(null),h=function(){var e=Object(c.useContext)(O),t=(e.isAuth,e.setIsAuth);return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(p,{onClick:function(){t(!1),localStorage.removeItem("auth")},children:"\u0412\u044b\u0439\u0442\u0438"}),Object(b.jsxs)("div",{className:"navbar__links",children:[Object(b.jsx)(o.b,{to:"/about",children:"\u041e \u0441\u0430\u0439\u0442\u0435"}),Object(b.jsx)(o.b,{to:"/posts",children:"\u041f\u043e\u0441\u0442\u044b"})]})]})},f=n(2),x=function(){return Object(b.jsx)("h1",{children:"\u042d\u0442\u043e \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e 08.21 kljljkljkljkljklj"})},v=n(5),m=n.n(v),g=n(15),y=n(11),_=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return console.log("getSortedPosts"),t?Object(g.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return console.log("sortedAndSearchedPosts"),r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))}),[n,r])},k=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),u=i[0],j=i[1];return[function(){var t=Object(y.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e(n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0.message);case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(e){return t.apply(this,arguments)}}(),r,u]},C=n(39),w=n(40),S=n(18),I=n.n(S),M=function(){function e(){Object(C.a)(this,e)}return Object(w.a)(e,null,[{key:"getAll",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,n,c,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,I.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByPostId",value:function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),A=function(e,t){return Math.ceil(e/t)},N=n(19),P=n.n(N),B=function(e){var t=e.children,n=e.visible,c=e.setVisible,r=[P.a.myModal];return n&&r.push(P.a.active),Object(b.jsx)("div",{onClick:function(){return c(!1)},className:r.join(" "),children:Object(b.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:P.a.myModalContent,children:t})})},L=n(41),V=n.n(L),q=function(e){return Object(b.jsx)("input",Object(i.a)({className:V.a.myInput},e))},E=(n(75),function(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(b.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},children:[Object(b.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),D=function(e){var t=e.filter,n=e.setFilter;return Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{value:t.query,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{query:e.target.value}))},placeholder:"\u041f\u043e\u0438\u0441\u043a.."}),Object(b.jsx)("hr",{style:{margin:"15px 0"}}),Object(b.jsx)(E,{value:t.sort,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{sort:e}))},defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})},J=function(e){var t=Object(f.g)();return console.log(t),Object(b.jsxs)("div",{className:"post",children:[Object(b.jsxs)("div",{className:"post__content",children:[Object(b.jsxs)("strong",{children:[e.post.id,". ",e.post.title]}),Object(b.jsx)("div",{children:e.post.body})]}),Object(b.jsxs)("div",{className:"post__btns",children:[Object(b.jsx)(p,{onClick:function(){return t.push("/posts/".concat(e.post.id))},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),Object(b.jsx)(p,{onClick:function(){return e.remove(e.post)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},R=n(43),T=n.n(R),F=n(42),W=n.n(F),X=function(e){var t=e.posts,n=e.title,c=e.remove;return t.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{textAlign:"center"},children:n}),Object(b.jsx)(W.a,{children:t.map((function(e,t){return Object(b.jsx)(T.a,{timeout:500,classNames:"post",children:Object(b.jsx)(J,{remove:c,number:t+1,post:e})},e.id)}))})]}):Object(b.jsx)("h1",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})},Z=n(44),$=n.n(Z),z=function(){return Object(b.jsx)("div",{className:$.a.loader})},G=function(e){var t=e.totalPages,n=e.page,c=e.changePage,r=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(b.jsx)("div",{className:"page__wrapper",children:r.map((function(e){return Object(b.jsx)("span",{onClick:function(){return c(e)},className:n===e?"page page__current":"page",children:e},e)}))})},H=function(e){var t=e.create,n=Object(c.useState)({title:"",body:""}),r=Object(s.a)(n,2),a=r[0],o=r[1];return Object(b.jsxs)("form",{action:"",children:[Object(b.jsx)(q,{value:a.title,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{title:e.target.value}))},type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(b.jsx)(q,{value:a.body,onChange:function(e){return o(Object(i.a)(Object(i.a)({},a),{},{body:e.target.value}))},type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(b.jsx)(p,{onClick:function(e){e.preventDefault();var n=Object(i.a)(Object(i.a)({},a),{},{id:Date.now()});t(n),o({title:"",body:""})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})};var K=[{path:"/about",component:x,exact:!0},{path:"/posts",component:function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(s.a)(a,2),i=o[0],u=o[1],j=Object(c.useState)({sort:"",query:""}),l=Object(s.a)(j,2),d=l[0],O=l[1],h=_(n,d.sort,d.query),f=Object(c.useState)(0),x=Object(s.a)(f,2),v=x[0],C=x[1],w=Object(c.useState)(10),S=Object(s.a)(w,2),I=S[0],N=S[1],P=Object(c.useState)(1),L=Object(s.a)(P,2),V=L[0],q=L[1],J=k(Object(y.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll(I,V);case 2:t=e.sent,r([].concat(Object(g.a)(n),Object(g.a)(t.data))),c=t.headers["x-total-count"],C(A(c,I));case 6:case"end":return e.stop()}}),e)})))),R=Object(s.a)(J,3),T=R[0],F=R[1],W=R[2],Z=Object(c.useRef)();return function(e,t,n,r){var a=Object(c.useRef)();Object(c.useEffect)((function(){n||(a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&r()})),a.current.observe(e.current))}),[n])}(Z,V<v,F,(function(){q(V+1)})),Object(c.useEffect)((function(){T()}),[V,I]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{style:{marginTop:"30px"},onClick:function(){return u(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(b.jsx)(B,{visible:i,setVisible:u,children:Object(b.jsx)(H,{create:function(e){r([].concat(Object(g.a)(n),[e])),u(!1)}})}),Object(b.jsx)("hr",{style:{margin:"15px 0"}}),Object(b.jsx)(D,{filter:d,setFilter:O}),Object(b.jsx)("hr",{style:{margin:"15px 0"}}),Object(b.jsx)(E,{value:I,onChange:function(e){return N(e)},defaultValue:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",options:[{value:5,name:"5"},{value:10,name:"10"},{value:15,name:"15"},{value:-1,name:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}]}),W&&Object(b.jsxs)("h1",{children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 $",W]}),Object(b.jsx)(X,{remove:function(e){r(n.filter((function(t){return t.id!==e.id})))},posts:h,title:"\u0421\u043f\u0438\u0441\u043e\u043a Pro JS"}),Object(b.jsx)("div",{ref:Z,style:{height:20,background:"red"}}),F&&Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(b.jsx)(z,{})}),Object(b.jsx)(G,{totalPages:v,page:V,changePage:function(e){q(e)}})]})},exact:!0},{path:"/posts/:id",component:function(){var e=Object(f.h)(),t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],a=n[1],o=k(function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getById(t);case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=Object(s.a)(o,3),u=i[0],j=i[1],l=(i[2],Object(c.useState)([])),d=Object(s.a)(l,2),p=d[0],O=d[1],h=k(function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getCommentsByPostId(t);case 2:n=e.sent,O(n.data),console.log(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(s.a)(h,3),v=x[0];x[1],x[2];return Object(c.useEffect)((function(){u(e.id),v(e.id)}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["\u0412\u044b \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0441\u0442\u0430 \u2116 ",e.id]}),j?Object(b.jsx)(z,{}):Object(b.jsxs)("div",{children:[r.id,". ",r.title]}),Object(b.jsx)("h1",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 :"}),Object(b.jsx)("div",{children:p.map((function(e){return Object(b.jsxs)("div",{style:{marginTop:15},children:[Object(b.jsx)("h5",{children:e.email}),Object(b.jsx)("div",{children:e.body})]},e.id)}))})]})},exact:!0}],Q=[{path:"/login",component:function(){var e=Object(c.useContext)(O),t=(e.isAuth,e.setIsAuth);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(b.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),t(!0),localStorage.setItem("auth","true")},children:[Object(b.jsx)(q,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}),Object(b.jsx)(q,{type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)(p,{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},exact:!0}],U=function(){var e=Object(c.useContext)(O),t=e.isAuth,n=(e.setIsAuth,e.isLoading);return console.log(t),n?Object(b.jsx)(z,{}):t?Object(b.jsxs)(f.d,{children:[K.map((function(e){return Object(b.jsx)(f.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(b.jsx)(f.a,{to:"/posts"})]}):Object(b.jsxs)(f.d,{children:[Q.map((function(e){return Object(b.jsx)(f.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(b.jsx)(f.a,{to:"/login"})]})};var Y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(s.a)(a,2),u=i[0],j=i[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&r(!0),j(!1)}),[]),Object(b.jsx)(O.Provider,{value:{isAuth:n,setIsAuth:r,isLoading:u},children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(U,{})]})})};a.a.render(Object(b.jsx)(Y,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.19a1f907.chunk.js.map