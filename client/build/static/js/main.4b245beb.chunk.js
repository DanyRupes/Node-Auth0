(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(65)},39:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(30),c=n.n(r),l=(n(39),n(6)),i=n(7),s=n(9),u=n(8),m=n(10),h=(n(40),n(41),n(42),n(11)),p=n(14),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Home")}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Profile")}}]),t}(a.Component),d=n(16),g=n.n(d),j=n(31),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={blogs:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/listblogs");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),this.setState({blogs:n.details.blogs});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Blogs"),o.a.createElement("ul",null,this.state.blogs.map(function(e,t){return o.a.createElement("li",{key:t},e)})))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.c,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("a",{href:"/login"},o.a.createElement("h1",null,"Do Auth0 Login")),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",minWidth:"30rem"}},o.a.createElement(p.b,{to:"/home"},"Home"),o.a.createElement(p.b,{to:"/blogs"},"Blogs"),o.a.createElement("a",{href:"/login"},"Login"),o.a.createElement("a",{href:"/logout"},"Logout"))),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/home",component:f}),o.a.createElement(h.a,{exact:!0,path:"/profile",component:b}),o.a.createElement(h.a,{exact:!0,path:"/blogs",component:E}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p.a,{hashType:"noslash"},o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4b245beb.chunk.js.map