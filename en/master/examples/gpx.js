(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{287:function(e,t,n){"use strict";n.r(t);var o=n(223),r=n(3),a=n(11),i=n(2),c=n(26),l=n(10),w=n(50),p=n(20),g=n(17),s=n(5),u=n(21),f=new s.a({source:new c.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),m={Point:new l.c({image:new w.a({fill:new p.a({color:"rgba(255,255,0,0.4)"}),radius:5,stroke:new g.a({color:"#ff0",width:1})})}),LineString:new l.c({stroke:new g.a({color:"#f00",width:3})}),MultiLineString:new l.c({stroke:new g.a({color:"#0f0",width:3})})},d=new u.a({source:new a.a({url:"data/gpx/fells_loop.gpx",format:new o.a}),style:function(e){return m[e.getGeometry().getType()]}}),h=new r.a({layers:[f,d],target:document.getElementById("map"),view:new i.a({center:[-7916041.528716288,5228379.045749711],zoom:12})}),y=function(e){var t=[];if(h.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){var n,o,r=[];for(n=0,o=t.length;n<o;++n)r.push(t[n].get("desc"));document.getElementById("info").innerHTML=r.join(", ")||"(unknown)",h.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",h.getTarget().style.cursor=""};h.on("pointermove",(function(e){if(!e.dragging){var t=h.getEventPixel(e.originalEvent);y(t)}})),h.on("click",(function(e){y(e.pixel)}))}},[[287,0]]]);
//# sourceMappingURL=gpx.js.map