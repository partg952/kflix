(this["webpackJsonpkdrama-streamer"]=this["webpackJsonpkdrama-streamer"]||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},61:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(17),s=n.n(i),o=(n(40),n(13)),j=(n.p,n(41),n(11)),d=n.n(j),h=(n(60),n(31)),l=n(14),u=(n(61),n(20)),p=n(3),b=n(33),O=n.n(b),x=n(2);var f=function(t){var e=t.data,n=t.setData,r=Object(p.e)();Object(c.useEffect)((function(){n([]),d()("https://kdrama-api.herokuapp.com/api/home").then((function(t){console.log(t.data);for(var e=function(e){n((function(n){return[].concat(Object(l.a)(n),[t.data[e]])}))},a=0;a<80;a++)e(a)}))}),[]);var i=Object(u.css)(a||(a=Object(h.a)(["\n    margin-top:200px;\n    "])));return Object(x.jsx)("div",{id:"main",children:0!=e.length?e.map((function(t){return Object(x.jsxs)("div",{id:"dramas",onClick:function(){d.a.post("https://kdrama-api.herokuapp.com/api/show-data",{url:t.url}).then((function(t){var e=t.data.url;sessionStorage.setItem("url",e),r.push("/watch")}))},children:[Object(x.jsx)("img",{src:t.image_url,alt:""}),Object(x.jsx)("p",{children:t.title})]})})):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(O.a,{height:4,css:i,color:"white",loading:!0,width:150})})})};n(76);var m=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];console.log(n);var r=Object(c.useState)(""),i=Object(o.a)(r,2),s=i[0],j=i[1];return Object(c.useEffect)((function(){d.a.post("https://kdrama-api.herokuapp.com/api/show-data",{url:sessionStorage.getItem("url")}).then((function(t){console.log(t.data),a(t.data[0])}))}),[]),Object(x.jsx)("div",{children:null!=n?Object(x.jsxs)("div",{id:"main",children:[0!=s.length&&Object(x.jsx)("iframe",{src:s,width:"100%",height:"400px",style:{marginTop:"20px"},allowFullScreen:!0,frameborder:"0"}),Object(x.jsx)("img",{id:"poster",src:n.poster_url,alt:""}),Object(x.jsxs)("span",{children:[Object(x.jsxs)("h1",{children:[" ",n.title," "]}),Object(x.jsx)("p",{children:n.other_info})]}),Object(x.jsx)("div",{id:"episodes",children:0!=n.length&&n.episode.map((function(t){return Object(x.jsx)("div",{children:Object(x.jsxs)("button",{onClick:function(){j(t.ep_url)},children:[" ",t.ep_number," "]})})}))})]}):Object(x.jsx)("h1",{children:"Loading..."})})},g=(n(77),n(34)),v=n.n(g);var k=function(t){t.data;var e=t.setData;return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{children:Object(x.jsxs)("div",{id:"search",children:[Object(x.jsx)(v.a,{}),Object(x.jsx)("input",{type:"text",placeholder:"Search...",onKeyPress:function(t){"Enter"===t.key&&d()("https://kdrama-api.herokuapp.com/api/search?q="+t.target.value).then((function(t){e([]),console.log(t.data),e(t.data)}))}})]})})})},w=n(21);var S=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(k,{data:n,setData:a}),Object(x.jsx)(p.a,{path:"/",exact:!0,children:Object(x.jsx)(f,{data:n,setData:a})}),Object(x.jsx)(p.a,{path:"/watch",children:Object(x.jsx)(m,{})})]})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),F()}},[[83,1,2]]]);
//# sourceMappingURL=main.c0b6a85c.chunk.js.map