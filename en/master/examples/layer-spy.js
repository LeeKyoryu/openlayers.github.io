(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{313:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(5),o=n(2),i=n(27),p=n(4),s=n(45),c="get_your_own_D6rA4zTHduk6KOKTXzGB",u='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',w=new a.a({source:new i.a({attributions:u,url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:22})}),l=new a.a({source:new i.a({attributions:u,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+c,maxZoom:20})}),m=document.getElementById("map"),h=new r.a({layers:[w,l],target:m,view:new o.a({center:Object(p.f)([-109,46.5]),zoom:6})}),d=75;document.addEventListener("keydown",(function(e){38===e.which?(d=Math.min(d+5,150),h.render(),e.preventDefault()):40===e.which&&(d=Math.max(d-5,25),h.render(),e.preventDefault())}));var g=null;m.addEventListener("mousemove",(function(e){g=h.getEventPixel(e),h.render()})),m.addEventListener("mouseout",(function(){g=null,h.render()})),l.on("prerender",(function(e){var t=e.context;if(t.save(),t.beginPath(),g){var n=Object(s.a)(e,g),r=Object(s.a)(e,[g[0]+d,g[1]]),a=Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2));t.arc(n[0],n[1],a,0,2*Math.PI),t.lineWidth=5*a/d,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()}t.clip()})),l.on("postrender",(function(e){e.context.restore()}))}},[[313,0]]]);
//# sourceMappingURL=layer-spy.js.map