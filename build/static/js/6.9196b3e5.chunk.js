(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{211:function(t,e,c){},221:function(t,e,c){"use strict";c.r(e);var n=c(99),a=c(43),i=c(35),r=c(1),s=c(8),o=c(44),l=c(13),b=c(37),j=(c(211),c(0)),u=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),c=e[0],n=e[1],u=Object(r.useState)(!1),m=Object(i.a)(u,2),O=m[0],d=m[1],f=Object(r.useState)(0),h=Object(i.a)(f,2),v=h[0],_=h[1],x=Object(r.useState)(!1),p=Object(i.a)(x,2),y=p[0],g=p[1],N=Object(o.a)(),S=N.loading,k=N.error,w=N.getAllComics;Object(r.useEffect)((function(){A(v,!0)}),[]);var A=function(t,e){d(!e),w(t).then(C)},C=function(t){var e=!1;t.length<8&&(e=!0),n([].concat(Object(a.a)(c),Object(a.a)(t))),d(!1),_(v+8),g(e)};var E=function(t){var e=t.map((function(t,e){return Object(j.jsx)("li",{className:"comics__item",children:Object(j.jsxs)(s.b,{to:"/comics/".concat(t.id),children:[Object(j.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(j.jsx)("div",{className:"comics__item-name",children:t.title}),Object(j.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(j.jsx)("ul",{className:"comics__grid",children:e})}(c),I=k?Object(j.jsx)(b.a,{}):null,J=S&&!O?Object(j.jsx)(l.a,{}):null;return Object(j.jsxs)("div",{className:"comics__list",children:[I,J,E,Object(j.jsx)("button",{className:"button button__main button__long",disabled:O,style:{display:y?"none":"block"},onClick:function(){return A(v)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.a,{}),Object(j.jsx)(u,{})]})}},43:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var n=c(47);var a=c(45);function i(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=6.9196b3e5.chunk.js.map