(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{249:function(e,t,r){"use strict";r.r(t);var o=r(22),n=r(2),a=r(3),i=r(26),s=r(31),c=r(35),u=r(57),h=r(52),l=r(6),p=r(21),w=r(54),d=r(13),_=r(14),v=r(95),f=r(19),y=r(23),m=function(e){function t(){e.call(this,{handleDownEvent:g,handleDragEvent:b,handleMoveEvent:x,handleUpEvent:E}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(u.b);function g(e){var t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e});return t&&(this.coordinate_=e.coordinate,this.feature_=t),!!t}function b(e){var t=e.coordinate[0]-this.coordinate_[0],r=e.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(t,r),this.coordinate_[0]=e.coordinate[0],this.coordinate_[1]=e.coordinate[1]}function x(e){if(this.cursor_){var t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e}),r=e.map.getTargetElement();t?r.style.cursor!=this.cursor_&&(this.previousCursor_=r.style.cursor,r.style.cursor=this.cursor_):void 0!==this.previousCursor_&&(r.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function E(){return this.coordinate_=null,this.feature_=null,!1}var C=new o.a(new i.a([0,0])),j=new o.a(new s.a([[-1e7,1e6],[-1e6,3e6]])),k=new o.a(new c.b([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new n.a({interactions:Object(h.a)().extend([new m]),layers:[new l.a({source:new w.a({url:"https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure"})}),new p.a({source:new d.a({features:[C,j,k]}),style:new _.c({image:new v.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.95,src:"data/icon.png"}),stroke:new f.a({width:3,color:[255,0,0,1]}),fill:new y.a({color:[0,0,255,.6]})})})],target:"map",view:new a.a({center:[0,0],zoom:2})})}},[[249,0]]]);
//# sourceMappingURL=custom-interactions.js.map