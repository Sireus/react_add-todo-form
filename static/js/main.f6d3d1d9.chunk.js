(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(10),o=a(7),c=a(2),s=a(5),l=a(1),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function u(e){return d.find((function(t){return t.id===e}))||null}var m=a(0),j=function(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],o=Object(l.useState)(!1),s=Object(c.a)(o,2),j=s[0],b=s[1],h=Object(l.useState)(0),O=Object(c.a)(h,2),f=O[0],p=O[1],x=Object(l.useState)(!1),v=Object(c.a)(x,2),S=v[0],y=v[1],N=function(){r(""),b(!1),p(0),y(!1)};return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),i||b(!0),f||y(!0),i&&f&&(t({id:0,title:i,completed:!1,userId:0,user:u(f)}),N())},onReset:N,children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todo-title",children:"Title:"}),Object(m.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",value:i,onChange:function(e){r(e.target.value),b(!1)},placeholder:"Enter a title"}),j&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todo-user",children:"User:"}),Object(m.jsxs)("select",{id:"todo-user","data-cy":"userSelect",value:f,onChange:function(e){p(+e.target.value),y(!1)},children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),d.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},b=a(9),h=a.n(b),O=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},f=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:h()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(m.jsx)(O,{user:t.user})]})},p=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(f,{todo:e},e.id)}))})},x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],v=(a(16),["id"]),S=function(){var e=x.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:u(e.userId)})})),t=Object(l.useState)(e),a=Object(c.a)(t,2),n=a[0],i=a[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(j,{onSubmit:function(e){e.id;var t,a=Object(r.a)(e,v),c=Object(s.a)({id:(t=n,Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1)},a);i((function(e){return[].concat(Object(o.a)(e),[c])}))}}),Object(m.jsx)(p,{todos:n})]})};i.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f6d3d1d9.chunk.js.map