(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{419:function(e,i,t){"use strict";t.r(i);var o=t(78),n=t(86),r=t(189),a=t(120),s=t(19),l="version1",f="version2",u="version3",g={};g[l]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},g[f]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},g[u]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},g.none={none:{supports:[],formats:[],qualities:[]}};var p=new RegExp("^https?://library.stanford.edu/iiif/image-api/(1.1/)?compliance.html#level[0-2]$"),m=new RegExp("^https?://iiif.io/api/image/2/level[0-2](.json)?$"),c=new RegExp("(^https?://iiif.io/api/image/3/level[0-2](.json)?$)|(^level[0-2]$)");var d={};d[l]=function(e){var i=e.getComplianceLevelSupportedFeatures();return void 0===i&&(i=g[l].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),supports:i.supports,formats:i.formats.concat([void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:i.qualities.concat([void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},d[f]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,o=t&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],n=t&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],r=t&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(info.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return void 0===e.height?e.width:e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:i.supports.concat(o),formats:i.formats.concat(n),qualities:i.qualities.concat(r)}},d[u]=function(e){var i=e.getComplianceLevelSupportedFeatures(),t=void 0===e.imageInfo.extraFormats?i.formats:i.formats.concat(e.imageInfo.extraFormats),o=void 0!==e.imageInfo.preferredFormats&&Array.isArray(e.imageInfo.preferredFormats)&&e.imageInfo.preferredFormats.length>0?e.imageInfo.preferredFormats.filter((function(e){return["jpg","png","gif"].includes(e)})).reduce((function(e,i){return void 0===e&&t.includes(i)?i:e}),void 0):void 0;return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:void 0===e.imageInfo.extraFeatures?i.supports:i.supports.concat(e.imageInfo.extraFeatures),formats:t,qualities:void 0===e.imageInfo.extraQualities?i.qualities:i.qualities.concat(e.imageInfo.extraQualities),preferredFormat:o}};var h=function(e){this.setImageInfo(e)};h.prototype.setImageInfo=function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e},h.prototype.getImageApiVersion=function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++)switch(e[i]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return l;case"http://iiif.io/api/image/2/context.json":return f;case"http://iiif.io/api/image/3/context.json":return u;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(l)&&this.imageInfo.identifier)return l}Object(s.a)(!1,61)}},h.prototype.getComplianceLevelEntryFromProfile=function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case l:if(p.test(this.imageInfo.profile))return this.imageInfo.profile;break;case u:if(c.test(this.imageInfo.profile))return this.imageInfo.profile;break;case f:if("string"==typeof this.imageInfo.profile&&m.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&m.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}},h.prototype.getComplianceLevelFromProfile=function(e){var i=this.getComplianceLevelEntryFromProfile(e);if(void 0!==i){var t=i.match(/level[0-2](\.json)?$/g);return Array.isArray(t)?t[0].replace(".json",""):void 0}},h.prototype.getComplianceLevelSupportedFeatures=function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),i=this.getComplianceLevelFromProfile(e);return void 0===i?g.none.none:g[e][i]}},h.prototype.getTileSourceOptions=function(e){var i=e||{},t=this.getImageApiVersion();if(void 0!==t){var o=void 0===t?void 0:d[t](this);if(void 0!==o)return{url:o.url,version:t,size:[this.imageInfo.width,this.imageInfo.height],sizes:o.sizes,format:void 0!==i.format&&o.formats.includes(i.format)?i.format:void 0!==o.preferredFormat?o.preferredFormat:"jpg",supports:o.supports,quality:i.quality&&o.qualities.includes(i.quality)?i.quality:o.qualities.includes("native")?"native":"default",resolutions:Array.isArray(o.resolutions)?o.resolutions.sort((function(e,i){return i-e})):void 0,tileSize:o.tileSize}}};var v=h,y=t(1),I=t(52);function z(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var B=function(e){function i(i){var t=i||{},n=t.url||"";n+=n.lastIndexOf("/")===n.length-1||""===n?"":"/";var g=t.version||f,p=t.sizes||[],m=t.size;Object(s.a)(null!=m&&Array.isArray(m)&&2==m.length&&!isNaN(m[0])&&m[0]>0&&!isNaN(m[1])&&m[1]>0,60);var c,d,h,v=m[0],B=m[1],x=t.tileSize,j=t.tilePixelRatio||1,b=t.format||"jpg",q=t.quality||(t.version==l?"native":"default"),w=t.resolutions||[],P=t.supports||[],F=t.extent||[0,-B,v,0],A=null!=p&&Array.isArray(p)&&p.length>0,C=void 0!==x&&("number"==typeof x&&Number.isInteger(x)&&x>0||Array.isArray(x)&&x.length>0),S=null!=P&&Array.isArray(P)&&(P.includes("regionByPx")||P.includes("regionByPct"))&&(P.includes("sizeByWh")||P.includes("sizeByH")||P.includes("sizeByW")||P.includes("sizeByPct"));if(w.sort((function(e,i){return i-e})),C||S)if(null!=x&&("number"==typeof x&&Number.isInteger(x)&&x>0?(c=x,d=x):Array.isArray(x)&&x.length>0&&((1==x.length||null==x[1]&&Number.isInteger(x[0]))&&(c=x[0],d=x[0]),2==x.length&&(Number.isInteger(x[0])&&Number.isInteger(x[1])?(c=x[0],d=x[1]):null==x[0]&&Number.isInteger(x[1])&&(c=x[1],d=x[1])))),void 0!==c&&void 0!==d||(c=a.b,d=a.b),0==w.length)for(var W=h=Math.max(Math.ceil(Math.log(v/c)/Math.LN2),Math.ceil(Math.log(B/d)/Math.LN2));W>=0;W--)w.push(Math.pow(2,W));else{var M=Math.max.apply(Math,w);h=Math.round(Math.log(M)/Math.LN2)}else if(c=v,d=B,w=[],A){p.sort((function(e,i){return e[0]-i[0]})),h=-1;for(var L=[],E=0;E<p.length;E++){var N=v/p[E][0];w.length>0&&w[w.length-1]==N?L.push(E):(w.push(N),h++)}if(L.length>0)for(var _=0;_<L.length;_++)p.splice(L[_]-_,1)}else w.push(1),p.push([v,B]),h=0;var O=new o.a({tileSize:[c,d],extent:F,origin:Object(y.D)(F),resolutions:w}),H=r.a.bind(null,Object(I.d)(x||256).map((function(e){return e*j})));e.call(this,{attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,imageSmoothing:t.imageSmoothing,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:H,tileGrid:O,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,i,t){var o,r,a=e[0];if(!(a>h)){var s=e[1],l=e[2],f=w[a];if(!(void 0===s||void 0===l||void 0===f||s<0||Math.ceil(v/f/c)<=s||l<0||Math.ceil(B/f/d)<=l)){if(S||C){var m=s*c*f,y=l*d*f,I=c*f,x=d*f,j=c,F=d;if(m+I>v&&(I=v-m),y+x>B&&(x=B-y),m+c*f>v&&(j=Math.floor((v-m+f-1)/f)),y+d*f>B&&(F=Math.floor((B-y+f-1)/f)),0==m&&I==v&&0==y&&x==B)o="full";else if(!S||P.includes("regionByPx"))o=m+","+y+","+I+","+x;else if(P.includes("regionByPct")){o="pct:"+z(m/v*100)+","+z(y/B*100)+","+z(I/v*100)+","+z(x/B*100)}g!=u||S&&!P.includes("sizeByWh")?!S||P.includes("sizeByW")?r=j+",":P.includes("sizeByH")?r=","+F:P.includes("sizeByWh")?r=j+","+F:P.includes("sizeByPct")&&(r="pct:"+z(100/f)):r=j+","+F}else if(o="full",A){var W=p[a][0],M=p[a][1];r=g==u?W==v&&M==B?"max":W+","+M:W==v?"full":W+","}else r=g==u?"max":"full";return n+o+"/"+r+"/0/"+q+"."+b}}},transition:t.transition}),this.zDirection=t.zDirection}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i}(n.a),x=t(3),j=t(5),b=t(2),q=new j.a,w=new x.a({layers:[q],target:"map"}),P=document.getElementById("iiif-notification"),F=document.getElementById("imageInfoUrl");function A(e){fetch(e).then((function(e){e.json().then((function(e){var i=new v(e).getTileSourceOptions();if(void 0!==i&&void 0!==i.version){i.zDirection=-1;var t=new B(i);q.setSource(t),w.setView(new b.a({resolutions:t.getTileGrid().getResolutions(),extent:t.getTileGrid().getExtent(),constrainOnlyCenter:!0})),w.getView().fit(t.getTileGrid().getExtent()),P.textContent=""}else P.textContent="Data seems to be no valid IIIF image information."})).catch((function(e){P.textContent="Could not read image info json. "+e}))})).catch((function(){P.textContent="Could not read data from URL."}))}document.getElementById("display").addEventListener("click",(function(){A(F.value)})),A(F.value)}},[[419,0]]]);
//# sourceMappingURL=iiif.js.map