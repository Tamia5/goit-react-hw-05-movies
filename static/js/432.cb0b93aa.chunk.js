"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{687:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=t(861),a=t(757),o=t.n(a),c=t(294),u="https://api.themoviedb.org",i="eea7cdf462a032b629a484e3762c3b1c",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/movie/").concat(e,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},225:function(n,e,t){t.d(e,{Fg:function(){return x},HC:function(){return m},NZ:function(){return d},PP:function(){return f},aV:function(){return l}});var r,a,o,c,u,i=t(168),s=t(924),p=t(87),f=s.ZP.section(r||(r=(0,i.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),d=s.ZP.h2(a||(a=(0,i.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),l=s.ZP.ul(o||(o=(0,i.Z)(["\n  list-style: none;\n"]))),m=s.ZP.li(c||(c=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),x=(0,s.ZP)(p.rU)(u||(u=(0,i.Z)(["\n  font-size: 20px;\n  color: #020203;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #4b77d1;\n  }\n"])))},432:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,c=t(861),u=t(439),i=t(757),s=t.n(i),p=t(791),f=t(87),d=t(689),l=t(218),m=t(687),x=t(168),g=t(924),v=g.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),h=g.ZP.input(a||(a=(0,x.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),Z=g.ZP.button(o||(o=(0,x.Z)(["\n  background-color: #cadde0;\n  border: none;\n  border-radius: 10px;\n  padding: 8px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),b=t(184),k=function(n){var e=n.onSubmit;return(0,b.jsxs)(v,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;t?(e(t),n.target.reset()):l.Am.error("Please enter something")},children:[(0,b.jsx)(h,{name:"query",type:"text",placeholder:"Search movies"}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})},y=t(225),w=function(){var n=(0,p.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,f.lr)(),o=(0,u.Z)(a,2),i=o[0],x=o[1],g=(0,d.TH)();(0,p.useEffect)((function(){var n,e=null!==(n=i.get("query"))&&void 0!==n?n:"";if(e){var t=function(){var n=(0,c.Z)(s().mark((function n(){var t,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.E3)(e);case 3:t=n.sent,0===(a=t.results).length?(l.Am.dismiss(),l.Am.error("No movies found"),r([])):r(a),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),l.Am.error(n.t0.message),r([]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();t()}}),[i]);return(0,b.jsx)("main",{children:(0,b.jsxs)(y.PP,{children:[(0,b.jsx)(y.NZ,{children:"Movies Page"}),(0,b.jsx)(k,{onSubmit:function(n){x({query:n})}})," ",(0,b.jsx)(y.aV,{children:t.map((function(n){return(0,b.jsx)(y.HC,{children:(0,b.jsx)(y.Fg,{to:"/movies/".concat(n.id),state:{from:g},children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=432.cb0b93aa.chunk.js.map