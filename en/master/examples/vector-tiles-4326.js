(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{391:function(e,t,o){"use strict";o.r(t);var r=o(102),n=o(78),a=o(85),c=o(2),s=o(171),i=o(82);i.c.length=14;for(var p=0;p<14;++p)i.c[p]=360/512/Math.pow(2,p+1);Object(s.b)("map","https://api.maptiler.com/maps/basic-4326/style.json?key=get_your_own_D6rA4zTHduk6KOKTXzGB").then((function(e){var t=new n.a({extent:[-180,-90,180,90],tileSize:512,resolutions:i.c}),o=e.get("mapbox-style");e.getLayers().forEach((function(e){var n=e.get("mapbox-source");if(n&&"vector"===o.sources[n].type){var c=e.getSource();e.setSource(new a.a({format:new r.a,projection:"EPSG:4326",urls:c.getUrls(),tileGrid:t}))}})),e.setView(new c.a({projection:"EPSG:4326",zoom:o.zoom,center:o.center}))}))}},[[391,0]]]);
//# sourceMappingURL=vector-tiles-4326.js.map