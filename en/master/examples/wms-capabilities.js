(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{433:function(t,e,n){"use strict";n.r(e);var c=n(168),r=n(0),i=n(6),b=n(141),u=[null,"http://www.opengis.net/wms"],o=Object(r.r)(u,{Service:Object(r.n)((function(t,e){return Object(r.u)({},a,t,e)})),Capability:Object(r.n)((function(t,e){return Object(r.u)({},O,t,e)}))}),O=Object(r.r)(u,{Request:Object(r.n)((function(t,e){return Object(r.u)({},v,t,e)})),Exception:Object(r.n)((function(t,e){return Object(r.u)([],f,t,e)})),Layer:Object(r.n)((function(t,e){return Object(r.u)({},g,t,e)}))}),j=function(t){function e(){t.call(this),this.version=void 0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFromNode=function(t){this.version=t.getAttribute("version").trim();var e=Object(r.u)({version:this.version},o,t,[]);return e||null},e}(c.a),a=Object(r.r)(u,{Name:Object(r.n)(i.h),Title:Object(r.n)(i.h),Abstract:Object(r.n)(i.h),KeywordList:Object(r.n)(R),OnlineResource:Object(r.n)(b.a),ContactInformation:Object(r.n)((function(t,e){return Object(r.u)({},d,t,e)})),Fees:Object(r.n)(i.h),AccessConstraints:Object(r.n)(i.h),LayerLimit:Object(r.n)(i.f),MaxWidth:Object(r.n)(i.f),MaxHeight:Object(r.n)(i.f)}),d=Object(r.r)(u,{ContactPersonPrimary:Object(r.n)((function(t,e){return Object(r.u)({},s,t,e)})),ContactPosition:Object(r.n)(i.h),ContactAddress:Object(r.n)((function(t,e){return Object(r.u)({},h,t,e)})),ContactVoiceTelephone:Object(r.n)(i.h),ContactFacsimileTelephone:Object(r.n)(i.h),ContactElectronicMailAddress:Object(r.n)(i.h)}),s=Object(r.r)(u,{ContactPerson:Object(r.n)(i.h),ContactOrganization:Object(r.n)(i.h)}),h=Object(r.r)(u,{AddressType:Object(r.n)(i.h),Address:Object(r.n)(i.h),City:Object(r.n)(i.h),StateOrProvince:Object(r.n)(i.h),PostCode:Object(r.n)(i.h),Country:Object(r.n)(i.h)}),f=Object(r.r)(u,{Format:Object(r.j)(i.h)}),g=Object(r.r)(u,{Name:Object(r.n)(i.h),Title:Object(r.n)(i.h),Abstract:Object(r.n)(i.h),KeywordList:Object(r.n)(R),CRS:Object(r.m)(i.h),EX_GeographicBoundingBox:Object(r.n)((function(t,e){var n=Object(r.u)({},m,t,e);if(!n)return;var c=n.westBoundLongitude,i=n.southBoundLatitude,b=n.eastBoundLongitude,u=n.northBoundLatitude;if(void 0===c||void 0===i||void 0===b||void 0===u)return;return[c,i,b,u]})),BoundingBox:Object(r.m)((function(t,e){var n=[Object(i.e)(t.getAttribute("minx")),Object(i.e)(t.getAttribute("miny")),Object(i.e)(t.getAttribute("maxx")),Object(i.e)(t.getAttribute("maxy"))],c=[Object(i.e)(t.getAttribute("resx")),Object(i.e)(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS"),extent:n,res:c}})),Dimension:Object(r.m)((function(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Object(i.b)(t.getAttribute("multipleValues")),nearestValue:Object(i.b)(t.getAttribute("nearestValue")),current:Object(i.b)(t.getAttribute("current")),values:Object(i.h)(t)}})),Attribution:Object(r.n)((function(t,e){return Object(r.u)({},l,t,e)})),AuthorityURL:Object(r.m)((function(t,e){var n=C(t,e);if(n)return n.name=t.getAttribute("name"),n;return})),Identifier:Object(r.m)(i.h),MetadataURL:Object(r.m)((function(t,e){var n=C(t,e);if(n)return n.type=t.getAttribute("type"),n;return})),DataURL:Object(r.m)(C),FeatureListURL:Object(r.m)(C),Style:Object(r.m)((function(t,e){return Object(r.u)({},L,t,e)})),MinScaleDenominator:Object(r.n)(i.d),MaxScaleDenominator:Object(r.n)(i.d),Layer:Object(r.m)((function(t,e){var n=e[e.length-1],c=Object(r.u)({},g,t,e);if(!c)return;var b=Object(i.b)(t.getAttribute("queryable"));void 0===b&&(b=n.queryable);c.queryable=void 0!==b&&b;var u=Object(i.g)(t.getAttribute("cascaded"));void 0===u&&(u=n.cascaded);c.cascaded=u;var o=Object(i.b)(t.getAttribute("opaque"));void 0===o&&(o=n.opaque);c.opaque=void 0!==o&&o;var O=Object(i.b)(t.getAttribute("noSubsets"));void 0===O&&(O=n.noSubsets);c.noSubsets=void 0!==O&&O;var j=Object(i.e)(t.getAttribute("fixedWidth"));j||(j=n.fixedWidth);c.fixedWidth=j;var a=Object(i.e)(t.getAttribute("fixedHeight"));a||(a=n.fixedHeight);c.fixedHeight=a,["Style","CRS","AuthorityURL"].forEach((function(t){if(t in n){var e=c[t]||[];c[t]=e.concat(n[t])}}));return["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"].forEach((function(t){if(!(t in c)){var e=n[t];c[t]=e}})),c}))}),l=Object(r.r)(u,{Title:Object(r.n)(i.h),OnlineResource:Object(r.n)(b.a),LogoURL:Object(r.n)(B)}),m=Object(r.r)(u,{westBoundLongitude:Object(r.n)(i.d),eastBoundLongitude:Object(r.n)(i.d),southBoundLatitude:Object(r.n)(i.d),northBoundLatitude:Object(r.n)(i.d)}),v=Object(r.r)(u,{GetCapabilities:Object(r.n)(w),GetMap:Object(r.n)(w),GetFeatureInfo:Object(r.n)(w)}),A=Object(r.r)(u,{Format:Object(r.m)(i.h),DCPType:Object(r.m)((function(t,e){return Object(r.u)({},p,t,e)}))}),p=Object(r.r)(u,{HTTP:Object(r.n)((function(t,e){return Object(r.u)({},y,t,e)}))}),y=Object(r.r)(u,{Get:Object(r.n)(C),Post:Object(r.n)(C)}),L=Object(r.r)(u,{Name:Object(r.n)(i.h),Title:Object(r.n)(i.h),Abstract:Object(r.n)(i.h),LegendURL:Object(r.m)(B),StyleSheetURL:Object(r.n)(C),StyleURL:Object(r.n)(C)}),x=Object(r.r)(u,{Format:Object(r.n)(i.h),OnlineResource:Object(r.n)(b.a)}),S=Object(r.r)(u,{Keyword:Object(r.j)(i.h)});function C(t,e){return Object(r.u)({},x,t,e)}function w(t,e){return Object(r.u)({},A,t,e)}function B(t,e){var n=C(t,e);if(n){var c=[Object(i.g)(t.getAttribute("width")),Object(i.g)(t.getAttribute("height"))];return n.size=c,n}}function R(t,e){return Object(r.u)([],S,t,e)}var T=new j;fetch("data/ogcsample.xml").then((function(t){return t.text()})).then((function(t){var e=T.read(t);document.getElementById("log").innerText=JSON.stringify(e,null,2)}))}},[[433,0]]]);
//# sourceMappingURL=wms-capabilities.js.map