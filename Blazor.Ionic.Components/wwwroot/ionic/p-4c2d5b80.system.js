/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-3ad285e3.system.js","./p-08e01816.system.js","./p-3e1e14d9.system.js","./p-20d469d0.system.js"],(function(r){"use strict";var t,n,e;return{setters:[function(r){t=r.j},function(r){n=r.i},function(r){e=r.createGesture},function(){}],execute:function(){var a=r("createSwipeBackGesture",(function(r,a,u,v,s){var i=r.ownerDocument.defaultView;var o=n(r);var c=function(r){var t=50;var n=r.startX;if(o){return n>=i.innerWidth-t}return n<=t};var f=function(r){return o?-r.deltaX:r.deltaX};var d=function(r){return o?-r.velocityX:r.velocityX};var m=function(t){o=n(r);return c(t)&&a()};var p=function(r){var t=f(r);var n=t/i.innerWidth;v(n)};var y=function(r){var n=f(r);var e=i.innerWidth;var a=n/e;var u=d(r);var v=e/2;var o=u>=0&&(u>.2||n>v);var c=o?1-a:a;var m=c*e;var p=0;if(m>5){var y=m/Math.abs(u);p=Math.min(y,540)}s(o,a<=0?.01:t(0,a,.9999),p)};return e({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m,onStart:u,onMove:p,onEnd:y})}))}}}));