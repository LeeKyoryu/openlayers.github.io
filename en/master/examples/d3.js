(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{253:function(t,e,o){"use strict";o.r(e);var a=o(3),s=o(45),r=o(63),n=o(2),c=o(70),i=o(5),u=o(4),p=o(1),d=function(t){function e(e){t.call(this,e),this.features=e.features,this.svg=d3.select(document.createElement("div")).append("svg").style("position","absolute"),this.svg.append("path").datum(this.features).attr("class","boundary")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getSourceState=function(){return s.a.READY},e.prototype.render=function(t){var e=t.size[0],o=t.size[1],a=t.viewState.projection,s=d3.geoMercator().scale(1).translate([0,0]),r=d3.geoPath().projection(s),n=r.bounds(this.features),c=n[1][0]-n[0][0],i=n[1][1]-n[0][1],d=d3.geoBounds(this.features),h=Object(u.f)(d[0],a),f=Object(u.f)(d[1],a),l=f[0]-h[0];l<0&&(l+=Object(p.F)(a.getExtent()));var w=l/c,j=(f[1]-h[1])/i,v=Math.max(w,j)/t.viewState.resolution,g=Object(u.o)(Object(p.y)(t.extent),a);return s.scale(v).center(g).translate([e/2,o/2]),(r=r.projection(s))(this.features),this.svg.attr("width",e),this.svg.attr("height",o),this.svg.select("path").attr("d",r),this.svg.node()},e}(c.a),h=new a.a({layers:[new i.a({source:new r.a({layer:"watercolor"})})],target:"map",view:new n.a({center:Object(u.f)([-97,38]),zoom:4})});d3.json("data/topojson/us.json").then((function(t){var e=new d({features:topojson.feature(t,t.objects.counties)});h.addLayer(e)}))}},[[253,0]]]);
//# sourceMappingURL=d3.js.map