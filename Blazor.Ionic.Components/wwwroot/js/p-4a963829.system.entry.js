/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-487a3ae7.system.js","./p-ebe1326c.system.js"],(function(t){"use strict";var o,r,n,a,i;return{setters:[function(t){o=t.r;r=t.d;n=t.h;a=t.f},function(t){i=t.b}],execute:function(){var s=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var c=s;var e=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var u=e;var h=t("ion_backdrop",function(){function t(t){o(this,t);this.ionBackdropTap=r(this,"ionBackdropTap",7);this.visible=true;this.tappable=true;this.stopPropagation=true}t.prototype.onMouseDown=function(t){this.emitTap(t)};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}};t.prototype.render=function(){var t;var o=i(this);return n(a,{key:"c803b4302c8e722064feb03dafe3cb6e190b4f2b",tabindex:"-1","aria-hidden":"true",class:(t={},t[o]=true,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})};return t}());h.style={ios:c,md:u}}}}));