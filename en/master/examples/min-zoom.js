(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{330:function(e,n,t){"use strict";t.r(n);var o=t(3),a=t(9),i=t(5),r=t(2),w=document.getElementById("map");function c(){var e=w.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}var s=c(),m=new r.a({center:[0,0],minZoom:s,zoom:s});new o.a({layers:[new i.a({source:new a.b})],target:"map",view:m});window.addEventListener("resize",(function(){var e=c();e!==m.getMinZoom()&&m.setMinZoom(e)}))}},[[330,0]]]);
//# sourceMappingURL=min-zoom.js.map