(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{309:function(e,n,o){"use strict";o.r(n);var t=o(31),a=o(3),r=o(2),c=o(10),s=o(20),w=o(64),u=o(9),i=o(11),l=o(5),p=o(21),b=o(4),d=o(45),f=new l.a({className:"stamen",source:new w.a({layer:"toner"})}),g=new l.a({source:new u.b}),m=new p.a({style:null,source:new i.a({url:"./data/geojson/switzerland.geojson",format:new t.a})});m.getSource().on("addfeature",(function(){g.setExtent(m.getSource().getExtent())}));var v=new c.c({fill:new s.a({color:"black"})});g.on("postrender",(function(e){var n=Object(d.b)(e);e.context.globalCompositeOperation="destination-in",m.getSource().forEachFeature((function(e){n.drawFeature(e,v)})),e.context.globalCompositeOperation="source-over"}));new a.a({layers:[f,g,m],target:"map",view:new r.a({center:Object(b.f)([8.23,46.86]),zoom:7})})}},[[309,0]]]);
//# sourceMappingURL=layer-clipping-vector.js.map