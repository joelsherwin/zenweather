(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(t,e,n){},106:function(t,e,n){},135:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(27),i=n.n(c),o=(n(105),n(15)),s=n(13),l=(n(106),n(82)),u=n(23),d=n(34),j=n(61),h=n.n(j),x=n(108);n(77).config();var f=Object(u.a)((function t(){Object(d.a)(this,t),this.getWeatherData=function(){var t=Object(l.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&units=metric&appid=").concat("aae34667ca1de378a4de3039b74d210f"),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/zenweather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"aae34667ca1de378a4de3039b74d210f"})),t.next=4,x(n);case 4:return t.abrupt("return",t.sent.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),p=f,b=n(186),O=n(191),g=n(192),m=n(189),v=n(185),y=n(2);var w=function(t){var e=t.onUpdate;return Object(y.jsx)(v.a,{autoFocus:!0,label:"Enter location",onBlur:function(t){return e(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&e(t.target.value)}})},S=n(194),D=n(190);n(77).config({path:"./../../../.env"});var C=Object(b.a)((function(){return{root:{display:"flex",flexDirection:"column",backgroundColor:"white",borderRadius:"30px",boxShadow:"-6px -6px 20px rgba(255,255,255,1), 6px 6px 20px rgba(0,0,0,0.1)",width:"250px",margin:"20px",padding:"10px"},content:{flex:1}}}));function E(t){return Object(y.jsx)(m.a,{align:"left",variant:"h6",color:"text.secondary",children:t.location})}function _(t){var e=t.weatherData;if(void 0!==e.main){var n="https://openweathermap.org/img/wn/"+JSON.stringify(e.weather[0].icon).replace(/['"]+/g,"")+"@2x.png";return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsxs)("div",{style:{width:"80%"},children:[Object(y.jsxs)(m.a,{sx:{maxWidth:200},align:"left",variant:"h3",color:"text.secondary",children:[Math.trunc(JSON.stringify(e.main.temp)),"\xb0C"]}),Object(y.jsx)(m.a,{sx:{maxWidth:200},align:"left",variant:"h5",color:"text.secondary",gutterBottom:!0,children:JSON.stringify(e.weather[0].main).replace(/['"]+/g,"")}),Object(y.jsxs)(m.a,{sx:{maxWidth:200},align:"left",variant:"body2",color:"text.secondary",children:["Humidity ",Math.trunc(JSON.stringify(e.main.humidity))," %"]})]}),Object(y.jsx)("div",{style:{float:"right",marginTop:"-15px"},children:Object(y.jsx)("img",{src:n})})]})})}return Object(y.jsx)(m.a,{sx:{maxWidth:100},align:"left",variant:"h3",color:"text.secondary",gutterBottom:!0,children:"29F"})}var F=function(t){var e=t.location,n=t.canDelete,a=t.onDelete,c=t.onUpdate,i=C(),o=r.a.useState({}),l=Object(s.a)(o,2),u=l[0],d=l[1];return r.a.useEffect((function(){(new p).getWeatherData(e).then((function(t){return t})).then((function(t){return d(t)}))}),[e]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(O.a,{className:i.root,children:[Object(y.jsxs)(g.a,{className:i.content,children:[!e&&Object(y.jsx)(w,{onUpdate:c}),Object(y.jsx)(E,{location:e}),e&&Object(y.jsx)(_,{weatherData:u})]}),Object(y.jsx)(S.a,{children:Object(y.jsx)(D.a,{disabled:!n,onClick:a,size:"small",color:"primary",children:"Remove"})})]})})},N=n(6),T=n(84),W=n(86),k=n(196),J=function(t){Object(T.a)(n,t);var e=Object(W.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={city:"Chennai"},t.onChange=function(e){t.setState(Object(N.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(k.a,{style:{height:"32px"},children:Object(y.jsx)(m.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"ZenWeather"})})})}}]),n}(a.Component),P=J,R=n(193),A=n(85),B=n.n(A),I="cityLocations";var L=function(){var t=r.a.useState(function(t){var e=localStorage.getItem(I);return e?JSON.parse(e):[]}()),e=Object(s.a)(t,2),n=e[0],a=e[1],c=function(t){a(t),function(t){localStorage.setItem(I,JSON.stringify(t))}(t)},i=function(t){return function(){return c(n.filter((function(e,n){return n!==t})))}},l=function(t){return function(e){return c(n.map((function(n,a){return a===t?e:n})))}},u=r.a.useMemo((function(){return n.every((function(t){return""!==t}))}),[n]);return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(P,{}),Object(y.jsx)("span",{style:{height:"30px",display:"block"}}),Object(y.jsx)("div",{id:"container",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginLeft:"8%",marginRight:"0%"},children:n.map((function(t,e){return Object(y.jsx)("div",{item:!0,children:Object(y.jsx)(F,{location:t,canDelete:!t||u,onDelete:i(e),onUpdate:l(e)})},t)}))}),Object(y.jsx)(R.a,{onClick:function(){a([].concat(Object(o.a)(n),[""]))},"aria-label":"add weather location",color:"primary",children:Object(y.jsx)(B.a,{})})]})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root")),U()}},[[135,1,2]]]);
//# sourceMappingURL=main.99cb3e6a.chunk.js.map