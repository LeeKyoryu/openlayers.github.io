(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{360:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(3),o=r(36),s=r(21),u=r(6),w=r(5),c=r(13),d=r(11),i=new c.a;fetch("data/geojson/roads-seoul.geojson").then(function(e){return e.json()}).then(function(e){for(var t=new o.a,r=t.readFeatures(e)[0],a=t.writeFeatureObject(r),n=turf.lineDistance(a,"kilometers"),s=1;s<=n/.2;s++){var u=turf.along(a,.2*s,"kilometers"),w=t.readFeature(u);w.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(w)}r.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(r)});var f=new s.a({source:i}),m=new u.a({source:new d.b});new a.a({layers:[m,f],target:document.getElementById("map"),view:new n.a({center:Object(w.f)([126.980366,37.52654]),zoom:15})})}},[[360,0]]]);
//# sourceMappingURL=turf.js.map