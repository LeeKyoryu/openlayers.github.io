(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{422:function(e,t,r){"use strict";r.r(t);var o=r(24),a=r(3),n=r(26),i=r(22),u=r(34),c=r(166),w=r(19);function g(e,t,r,o,a,n){var i,u;void 0!==a?(i=a,u=void 0!==n?n:0):(i=[],u=0);for(var c=t;c<r;){var w=e[c++];i[u++]=e[c++],i[u++]=w;for(var g=2;g<o;++g)i[u++]=e[c++]}return i.length=u,i}var s=r(4),y=r(76),m=r(88),A=r(40);function B(e){for(var t,r="";e>=32;)t=63+(32|31&e),r+=String.fromCharCode(t),e>>=5;return t=e+63,r+=String.fromCharCode(t)}var k,_,p=function(e){function t(t){e.call(this);var r=t||{};this.dataProjection=Object(s.i)("EPSG:4326"),this.factor_=r.factor?r.factor:1e5,this.geometryLayout_=r.geometryLayout?r.geometryLayout:i.a.XY}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readFeatureFromText=function(e,t){var r=this.readGeometryFromText(e,t);return new o.a(r)},t.prototype.readFeaturesFromText=function(e,t){return[this.readFeatureFromText(e,t)]},t.prototype.readGeometryFromText=function(e,t){var r=Object(y.b)(this.geometryLayout_),o=function(e,t,r){var o,a=r||1e5,n=new Array(t);for(o=0;o<t;++o)n[o]=0;for(var i=function(e,t){for(var r=t||1e5,o=function(e){for(var t=function(e){for(var t=[],r=0,o=0,a=0,n=e.length;a<n;++a){var i=e.charCodeAt(a)-63;r|=(31&i)<<o,i<32?(t.push(r),r=0,o=0):o+=5}return t}(e),r=0,o=t.length;r<o;++r){var a=t[r];t[r]=1&a?~(a>>1):a>>1}return t}(e),a=0,n=o.length;a<n;++a)o[a]/=r;return o}(e,a),u=0,c=i.length;u<c;)for(o=0;o<t;++o,++u)n[o]+=i[u],i[u]=n[o];return i}(e,r,this.factor_);g(o,0,o.length,r,o);var a=Object(m.a)(o,0,o.length,r),n=new u.a(a,this.geometryLayout_);return Object(A.c)(n,!1,this.adaptOptions(t))},t.prototype.writeFeatureText=function(e,t){var r=e.getGeometry();return r?this.writeGeometryText(r,t):(Object(w.a)(!1,40),"")},t.prototype.writeFeaturesText=function(e,t){return this.writeFeatureText(e[0],t)},t.prototype.writeGeometryText=function(e,t){var r=(e=Object(A.c)(e,!0,this.adaptOptions(t))).getFlatCoordinates(),o=e.getStride();return g(r,0,r.length,o,r),function(e,t,r){var o,a=r||1e5,n=new Array(t);for(o=0;o<t;++o)n[o]=0;for(var i=0,u=e.length;i<u;)for(o=0;o<t;++o,++i){var c=e[i],w=c-n[o];n[o]=c,e[i]=w}return function(e,t){for(var r=t||1e5,o=0,a=e.length;o<a;++o)e[o]=Math.round(e[o]*r);return function(e){for(var t=0,r=e.length;t<r;++t){var o=e[t];e[t]=o<0?~(o<<1):o<<1}return function(e){for(var t="",r=0,o=e.length;r<o;++r)t+=B(e[r]);return t}(e)}(e)}(e,a)}(r,o,this.factor_)},t}(c.a),h=r(11),d=r(2),f=r(27),C=r(10),l=r(16),q=r(95),v=r(50),b=r(20),D=r(21),F=r(5),E=r(45),G=["hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N","fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^","aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E","kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_","Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@","sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k","DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC","um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka","i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB","k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__","DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw","Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX","itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@","xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma","CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_","fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o","~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm","b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_","lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF","oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA","w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw","zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}","@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy","A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi","@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC","|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb","h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA","dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_","s@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo","SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@","oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e","[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY","gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k","Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB","_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI","ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@","mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ","uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m","~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL"].join(""),j=new p({factor:1e6}).readGeometry(G,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),x=j.getCoordinates(),O=x.length,T=new o.a({type:"route",geometry:j}),S=new o.a({type:"geoMarker",geometry:new n.a(x[0])}),I=new o.a({type:"icon",geometry:new n.a(x[0])}),J=new o.a({type:"icon",geometry:new n.a(x[O-1])}),z={route:new C.c({stroke:new l.a({width:6,color:[237,212,0,.8]})}),icon:new C.c({image:new q.a({anchor:[.5,1],src:"data/icon.png"})}),geoMarker:new C.c({image:new v.a({radius:7,fill:new b.a({color:"black"}),stroke:new l.a({color:"white",width:2})})})},H=!1,P=document.getElementById("speed"),N=document.getElementById("start-animation"),L=new D.a({source:new h.a({features:[T,S,I,J]}),style:function(e){return H&&"geoMarker"===e.get("type")?null:z[e.get("type")]}}),M=[-5639523.95,-3501274.52],K=new a.a({target:document.getElementById("map"),view:new d.a({center:M,zoom:10,minZoom:2,maxZoom:19}),layers:[new F.a({source:new f.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512})}),L]}),Y=function(e){var t=Object(E.b)(e),r=e.frameState;if(H){var a=r.time-_,i=Math.round(k*a/1e3);if(i>=O)return void Q(!0);var u=new n.a(x[i]),c=new o.a(u);t.drawFeature(c,z.geoMarker)}K.render()};function Q(e){H=!1,N.textContent="Start Animation";var t=e?x[O-1]:x[0];S.getGeometry().setCoordinates(t),L.un("postrender",Y)}N.addEventListener("click",(function(){H?Q(!1):(H=!0,_=(new Date).getTime(),k=P.value,N.textContent="Cancel Animation",S.setStyle(null),K.getView().setCenter(M),L.on("postrender",Y),K.render())}),!1)}},[[422,0]]]);
//# sourceMappingURL=feature-move-animation.js.map