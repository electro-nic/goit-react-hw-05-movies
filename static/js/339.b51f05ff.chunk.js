"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[339],{6840:function(e,n,t){t.d(n,{Bt:function(){return d},E3:function(){return v},m4:function(){return f},t5:function(){return p},yw:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),s="https://api.themoviedb.org/3/",o="d53b112a09092033b6a356e57b991833",p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(s,"trending/all/day?api_key=").concat(o,"&page=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(s,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9339:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(5861),a=t(885),c=t(7757),u=t.n(c),i=t(7689),s=t(2791),o=t(6840),p=t(184);function f(e){var n=e.reviewsList.map((function(e){var n=e.id,t=e.content;return(0,p.jsx)("li",{children:t},n)}));return(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:n})})}var v=t(5243);function l(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),h=d[0],w=d[1],g=(0,s.useState)(""),x=(0,a.Z)(g,2),m=x[0],y=x[1],k=(0,i.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,o.Bt)(k);case 4:n=e.sent,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),y(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var b=Boolean(t.length);return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Reviews list"}),h?(0,p.jsx)(v.g4,{height:"90",width:"90",radius:"10",color:"#674aaa",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,p.jsx)("p",{}),b?(0,p.jsx)(f,{reviewsList:t}):(0,p.jsx)("p",{children:"Any reviews. Your review can be first."}),m&&(0,p.jsx)("p",{children:"Something went wrong. Try later, please."})]})}}}]);
//# sourceMappingURL=339.b51f05ff.chunk.js.map