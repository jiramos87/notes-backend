(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{67:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(19),r=n.n(o),a=n(8),i=n(4),s=n(2),l=function(t){var e=t.note,n=t.toggleImportance,o=t.deleteNote,r=e.important?"make not important":"make important";return Object(c.jsx)("li",{className:"w-100 float-start",children:Object(c.jsxs)("div",{className:"input-group d-flex flex-row justify-content-between align-items-center",children:[Object(c.jsx)("div",{className:"w-50",children:e.content}),Object(c.jsxs)("div",{className:"w-50 d-flex flex-row justify-content-between",children:[Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:n,children:r}),Object(c.jsx)("button",{className:"btn btn-outline-secondary bg-danger",type:"button",onClick:o,children:"x"})]})]})})},u=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},d=function(){return Object(c.jsxs)("div",{className:"mx-5",style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsxs)("em",{children:["Notes app, by Javier Ramos (",Object(c.jsx)("a",{href:"mailto:jiramos87@gmail.com",children:"jiramos87@gmail.com"}),"), as an assignment for the Fullstack open course by the Department of Computer Science, University of Helsinki 2021"]})]})},b=n(3),j=n.n(b),f="/api/notes",m=function(){return j.a.get(f).then((function(t){return t.data}))},h=function(t){return j.a.post(f,t).then((function(t){return t.data}))},p=function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},x=function(t){return j.a.delete("".concat(f,"/").concat(t)).then((function(t){return t.data}))},O=(n(44),n(45),function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(s.useState)(""),b=Object(i.a)(r,2),j=b[0],f=b[1],O=Object(s.useState)(!0),g=Object(i.a)(O,2),v=g[0],y=g[1],N=Object(s.useState)(null),w=Object(i.a)(N,2),S=w[0],k=w[1];Object(s.useEffect)((function(){m().then((function(t){o(t)}))}),[]);var C=v?n:n.filter((function(t){return t.important}));return Object(c.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:Object(c.jsxs)("div",{className:"col-4 d-flex flex-column justify-content-center align-items-center mt-3 border rounded bg-light mx-5",children:[Object(c.jsx)("h1",{className:"my-2",children:"Notes"}),Object(c.jsx)(u,{message:S}),Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:n.length+1};h(e).then((function(t){o(n.concat(t)),f("")}))},children:Object(c.jsxs)("div",{class:"input-group mb-3",children:[Object(c.jsx)("input",{type:"text",class:"form-control",placeholder:"note content...","aria-label":"Recipient's username","aria-describedby":"button-addon2",value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(c.jsx)("button",{class:"btn btn-outline-secondary",type:"submit",id:"button-addon2",children:"Save"})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{className:"btn border rounded bg-warning my-4",onClick:function(){return y(!v)},children:["show ",v?"important":"all"]})}),Object(c.jsx)("ul",{children:C.map((function(t){return Object(c.jsx)(l,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},e),{},{important:!e.important});p(t,c).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){k("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)},deleteNote:function(){return e=t.id,void x(e).then((function(t){console.log(typeof t),console.log(t),o(t)})).catch((function(t){k(t),setTimeout((function(){k(null)}),5e3)}));var e}},t.id)}))}),Object(c.jsx)(d,{})]})})});r.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.529af0ae.chunk.js.map