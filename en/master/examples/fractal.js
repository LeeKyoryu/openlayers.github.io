(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{268:function(n,t,e){"use strict";e.r(t);var o=e(22),i=e(2),a=e(3),r=e(31),d=e(21),v=e(13),c=Math.cos(Math.PI/6),u=1e7*Math.sin(Math.PI/6),s=1e7*c,w=new r.a([[0,1e7],[s,-u],[-s,-u],[0,1e7]]),p=new o.a(w),h=new d.a({source:new v.a({features:[p]})});new i.a({layers:[h],target:"map",view:new a.a({center:[0,0],zoom:1})});var x,f=document.getElementById("depth");function m(){!function(n){for(var t=w.clone(),e=function(n){for(var t={point:n[0]},e=n.length,o=0,i=t;o<e-1;++o)i.next={point:n[o+1]},i=i.next;return t}(t.getCoordinates()),o=0;o<n;++o)for(var i=e;i.next;){var a=i.next;d=void 0,v=void 0,u=void 0,s=void 0,h=void 0,x=void 0,f=void 0,m=void 0,M=void 0,l=void 0,d=(r=i).next,v=r.point,u=r.next.point,s=u[0]-v[0],h=u[1]-v[1],x={point:[v[0]+s/3,v[1]+h/3]},f=Math.sqrt(s*s+h*h)/(2*c),m=Math.atan2(h,s)+Math.PI/6,M={point:[v[0]+f*Math.cos(m),v[1]+f*Math.sin(m)]},l={point:[u[0]-s/3,u[1]-h/3]},r.next=x,x.next=M,M.next=l,l.next=d,i=a}var r,d,v,u,s,h,x,f,m,M,l;var g=function(n){for(var t=[n.point],e=n,o=1;e.next;e=e.next,++o)t[o]=e.next.point;return t}(e);document.getElementById("count").innerHTML=g.length,t.setCoordinates(g),p.setGeometry(t)}(Number(f.value))}f.onchange=function(){window.clearTimeout(x),x=window.setTimeout(m,200)},m()}},[[268,0]]]);
//# sourceMappingURL=fractal.js.map