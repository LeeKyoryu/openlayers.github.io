(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{324:function(e,n,t){"use strict";t.r(n);var o,a,i,r,c,l=t(65),s=t(3),d=t(90),u=t(2),w=t(10),f=t(20),g=t(17),m=t(50),p=t(32),v=t(34),h=t(9),b=t(11),y=t(5),k=t(21),C=t(147),L=t(111),M=new y.a({source:new h.b}),O=new b.a,N=new k.a({source:O,style:new w.c({fill:new f.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new m.a({radius:7,fill:new f.a({color:"#ffcc33"})})})}),E=new s.a({layers:[M,N],target:"map",view:new u.a({center:[-11e6,46e5],zoom:15})});E.on("pointermove",(function(e){if(!e.dragging){var n="Click to start drawing";if(o){var t=o.getGeometry();t instanceof p.b?n="Click to continue drawing the polygon":t instanceof v.a&&(n="Click to continue drawing the line")}a.innerHTML=n,i.setPosition(e.coordinate),a.classList.remove("hidden")}})),E.getViewport().addEventListener("mouseout",(function(){a.classList.add("hidden")}));var I,P=document.getElementById("type");function j(){var e,n="area"==P.value?"Polygon":"LineString";I=new l.c({source:O,type:n,style:new w.c({fill:new f.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new m.a({radius:5,stroke:new g.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new f.a({color:"rgba(255, 255, 255, 0.2)"})})})}),E.addInteraction(I),G(),function(){a&&a.parentNode.removeChild(a);(a=document.createElement("div")).className="ol-tooltip hidden",i=new d.a({element:a,offset:[15,0],positioning:"center-left"}),E.addOverlay(i)}(),I.on("drawstart",(function(n){o=n.feature;var t=n.coordinate;e=o.getGeometry().on("change",(function(e){var n,o,a,i,l,s=e.target;s instanceof p.b?(i=s,n=(l=Object(C.a)(i))>1e4?Math.round(l/1e6*100)/100+" km<sup>2</sup>":Math.round(100*l)/100+" m<sup>2</sup>",t=s.getInteriorPoint().getCoordinates()):s instanceof v.a&&(o=s,n=(a=Object(C.c)(o))>100?Math.round(a/1e3*100)/100+" km":Math.round(100*a)/100+" m",t=s.getLastCoordinate()),r.innerHTML=n,c.setPosition(t)}))})),I.on("drawend",(function(){r.className="ol-tooltip ol-tooltip-static",c.setOffset([0,-7]),o=null,r=null,G(),Object(L.b)(e)}))}function G(){r&&r.parentNode.removeChild(r),(r=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",c=new d.a({element:r,offset:[0,-15],positioning:"bottom-center"}),E.addOverlay(c)}P.onchange=function(){E.removeInteraction(I),j()},j()}},[[324,0]]]);
//# sourceMappingURL=measure.js.map