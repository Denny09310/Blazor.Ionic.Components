var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n["throw"](t))}catch(t){o(t)}}function h(t){t.done?i(t.value):r(t.value).then(s,a)}h((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return h([t,e])}}function h(a){if(n)throw new TypeError("Generator is already executing.");while(s&&(s=0,a[0]&&(i=0)),i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-487a3ae7.system.js","./p-e673a0a2.system.js","./p-669c0566.system.js","./p-20d469d0.system.js","./p-586fa05c.system.js","./p-3ad285e3.system.js","./p-be11fb42.system.js","./p-4609d030.system.js","./p-ebe1326c.system.js","./p-1e955a45.system.js","./p-792919fd.system.js","./p-8635f5e6.system.js","./p-ff4b7e40.system.js","./p-9146695e.system.js"],(function(t,e){"use strict";var i,n,r,o,s,a,h,d,u,c,l,f,m,p,b,v,g,w,x,y,k,_;return{setters:[function(t){i=t.r;n=t.d;r=t.h;o=t.f;s=t.i},function(t){a=t.g},function(t){h=t.o;d=t.n;u=t.q},function(t){c=t.G},function(t){l=t.shouldUseCloseWatcher},function(t){f=t.n;m=t.i;p=t.m;b=t.j},function(t){v=t.m},function(t){g=t.h;w=t.c},function(t){x=t.c;y=t.b},function(t){k=t.u;_=t.v},function(){},function(){},function(){},function(){}],execute:function(){var z=this;var j=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";var C=j;var S=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";var O=S;var E="cubic-bezier(0.32,0.72,0,1)";var M="cubic-bezier(0.0,0.0,0.2,1)";var P="cubic-bezier(1, 0, 0.68, 0.28)";var X="cubic-bezier(0.4, 0, 0.6, 1)";var A=t("ion_menu",function(){function t(t){var e=this;i(this,t);this.ionWillOpen=n(this,"ionWillOpen",7);this.ionWillClose=n(this,"ionWillClose",7);this.ionDidOpen=n(this,"ionDidOpen",7);this.ionDidClose=n(this,"ionDidClose",7);this.ionMenuChange=n(this,"ionMenuChange",7);this.lastOnEnd=0;this.blocker=c.createBlocker({disableScroll:true});this.didLoad=false;this.operationCancelled=false;this.isAnimating=false;this._isOpen=false;this.inheritedAttributes={};this.handleFocus=function(t){var i=h(document);if(i&&!i.contains(e.el)){return}e.trapKeyboardFocus(t,document)};this.isPaneVisible=false;this.isEndSide=false;this.contentId=undefined;this.menuId=undefined;this.type=undefined;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50}t.prototype.typeChanged=function(t,e){var i=this.contentEl;if(i){if(e!==undefined){i.classList.remove("menu-content-".concat(e))}i.classList.add("menu-content-".concat(t));i.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=f(this.side);this.animation=undefined};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(r){switch(r.label){case 0:if(!(typeof customElements!=="undefined"&&customElements!=null))return[3,2];return[4,customElements.whenDefined("ion-menu")];case 1:r.sent();r.label=2;case 2:if(this.type===undefined){this.type=x.get("menuType","overlay")}t=this.contentId!==undefined?document.getElementById(this.contentId):null;if(t===null){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}if(this.el.contains(t)){console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.')}this.contentEl=t;t.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();v._register(this);this.menuChanged();i=this;return[4,e.import("./p-3e1e14d9.system.js")];case 3:i.gesture=r.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:true,canStart:function(t){return n.canStart(t)},onWillStart:function(){return n.onWillStart()},onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.updateState();return[2]}}))}))};t.prototype.componentWillLoad=function(){this.inheritedAttributes=m(this.el)};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:this.didLoad=true;t=this.el.closest("ion-split-pane");if(!(t!==null))return[3,2];e=this;return[4,t.isVisible()];case 1:e.isPaneVisible=i.sent();i.label=2;case 2:this.menuChanged();this.updateState();return[2]}}))}))};t.prototype.menuChanged=function(){if(this.didLoad){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}};t.prototype.disconnectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.close(false)];case 1:t.sent();this.blocker.destroy();v._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=undefined;return[2]}}))}))};t.prototype.onSplitPaneChanged=function(t){var e=this.el.closest("ion-split-pane");if(e!==null&&e===t.target){this.isPaneVisible=t.detail.visible;this.updateState()}};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.onKeydown=function(t){if(t.key==="Escape"){this.close()}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return v._setOpen(this,t,e)};t.prototype.trapKeyboardFocus=function(t,e){var i=t.target;if(!i){return}if(this.el.contains(i)){this.lastFocus=i}else{var n=this.el;d(n);if(this.lastFocus===e.activeElement){u(n)}}};t.prototype._setOpen=function(t){return __awaiter(this,arguments,void 0,(function(t,e){if(e===void 0){e=true}return __generator(this,(function(i){switch(i.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:i.sent();return[4,this.startAnimation(t,e)];case 2:i.sent();if(this.operationCancelled){this.operationCancelled=false;return[2,false]}this.afterAnimation(t);return[2,true]}}))}))};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,n;return __generator(this,(function(r){switch(r.label){case 0:t=this.menuInnerEl.offsetWidth;e=f(this.side);if(t===this.width&&this.animation!==undefined&&e===this.isEndSide){return[2]}this.width=t;this.isEndSide=e;if(this.animation){this.animation.destroy();this.animation=undefined}n=this;return[4,v._createAnimation(this.type,this)];case 1:i=n.animation=r.sent();if(!x.getBoolean("animated",true)){i.duration(0)}i.fill("both");return[2]}}))}))};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i,n,r,o,s;return __generator(this,(function(a){switch(a.label){case 0:i=!t;n=y(this);r=n==="ios"?E:M;o=n==="ios"?P:X;s=this.animation.direction(i?"reverse":"normal").easing(i?o:r);if(!e)return[3,2];return[4,s.play()];case 1:a.sent();return[3,3];case 2:s.play({sync:true});a.label=3;case 3:if(s.getDirection()==="reverse"){s.direction("normal")}return[2]}}))}))};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){var e=!!document.querySelector("ion-modal.show-modal");if(e||!this.canSwipe()){return false}if(this._isOpen){return true}else if(v._getOpenSync()){return false}return G(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){p(false,"isAnimating has to be true");return}this.animation.progressStart(true,this._isOpen?1:0)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){p(false,"isAnimating has to be true");return}var e=D(t.deltaX,this._isOpen,this.isEndSide);var i=e/this.width;this.animation.progressStep(this._isOpen?1-i:i)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){p(false,"isAnimating has to be true");return}var i=this._isOpen;var n=this.isEndSide;var r=D(t.deltaX,i,n);var o=this.width;var s=r/o;var h=t.velocityX;var d=o/2;var u=h>=0&&(h>.2||t.deltaX>d);var c=h<=0&&(h<-.2||t.deltaX<-d);var l=i?n?u:c:n?c:u;var f=!i&&l;if(i&&!l){f=true}this.lastOnEnd=t.currentTime;var m=l?.001:-.001;var v=s<0?.01:s;m+=a([0,0],[.4,0],[.6,1],[1,1],b(0,v,.9999))[0]||0;var g=this._isOpen?!l:l;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(f)}),{oneTimeCallback:true}).progressEnd(g?1:0,this._isOpen?1-m:m,300)};t.prototype.beforeAnimation=function(t){p(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(T);this.el.setAttribute("tabindex","0");if(this.backdropEl){this.backdropEl.classList.add(W)}if(this.contentEl){this.contentEl.classList.add(I);this.contentEl.setAttribute("aria-hidden","true")}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){var e;this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){this.ionDidOpen.emit();var i=(e=document.activeElement)===null||e===void 0?void 0:e.closest("ion-menu");if(i!==this.el){this.el.focus()}document.addEventListener("focus",this.handleFocus,true)}else{this.el.classList.remove(T);this.el.removeAttribute("tabindex");if(this.contentEl){this.contentEl.classList.remove(I);this.contentEl.removeAttribute("aria-hidden")}if(this.backdropEl){this.backdropEl.classList.remove(W)}if(this.animation){this.animation.stop()}this.ionDidClose.emit();document.removeEventListener("focus",this.handleFocus,true)}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.enable(t&&this.swipeGesture)}if(!t){if(this.isAnimating){this.operationCancelled=true}this.afterAnimation(false)}};t.prototype.render=function(){var t;var e=this;var i=this,n=i.type,s=i.disabled,a=i.el,h=i.isPaneVisible,d=i.inheritedAttributes,u=i.side;var c=y(this);return r(o,{key:"30c0c9bfb8973e4a6feb658f8c4ee8e362f464ed",onKeyDown:l()?null:this.onKeydown,role:"navigation","aria-label":d["aria-label"]||"menu",class:(t={},t[c]=true,t["menu-type-".concat(n)]=true,t["menu-enabled"]=!s,t["menu-side-".concat(u)]=true,t["menu-pane-visible"]=h,t["split-pane-side"]=g("ion-split-pane",a),t)},r("div",{key:"34b0e5840906862cf1bc27207e089004b0402c56",class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},r("slot",{key:"2cd7e61a8c0987ca4b3f1f8b33cba7152f1275fe"})),r("ion-backdrop",{key:"d190b1f9b66c76e276f27bfe074d3aab796180fb",ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false,part:"backdrop"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:false,configurable:true});return t}());var D=function(t,e,i){return Math.max(0,e!==i?-t:t)};var G=function(t,e,i,n){if(i){return e>=t.innerWidth-n}else{return e<=n}};var T="show-menu";var W="show-backdrop";var I="menu-content-open";A.style={ios:C,md:O};var K=function(t){return __awaiter(z,void 0,void 0,(function(){var e,i;return __generator(this,(function(n){switch(n.label){case 0:return[4,v.get(t)];case 1:e=n.sent();i=e;if(!i)return[3,3];return[4,e.isActive()];case 2:i=n.sent();n.label=3;case 3:return[2,!!i]}}))}))};var N=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';var q=N;var B=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';var F=B;var H=t("ion_menu_button",function(){function t(t){var e=this;i(this,t);this.inheritedAttributes={};this.onClick=function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(t){return[2,v.toggle(this.menu)]}))}))};this.visible=false;this.color=undefined;this.disabled=false;this.menu=undefined;this.autoHide=true;this.type="button"}t.prototype.componentWillLoad=function(){this.inheritedAttributes=m(this.el)};t.prototype.componentDidLoad=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,K(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=this,i=e.color,n=e.disabled,s=e.inheritedAttributes;var a=y(this);var h=x.get("menuIcon",a==="ios"?k:_);var d=this.autoHide&&!this.visible;var u={type:this.type};var c=s["aria-label"]||"menu";return r(o,{key:"95a8b9f09c7fae9713a8dc003ed277f6f31403da",onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":d?"true":null,class:w(i,(t={},t[a]=true,t.button=true,t["menu-button-hidden"]=d,t["menu-button-disabled"]=n,t["in-toolbar"]=g("ion-toolbar",this.el),t["in-toolbar-color"]=g("ion-toolbar[color]",this.el),t["ion-activatable"]=true,t["ion-focusable"]=true,t))},r("button",Object.assign({key:"39f3ce20c400d2fac4890a042e8e44426709fca5"},u,{disabled:n,class:"button-native",part:"native","aria-label":c}),r("span",{key:"310978dc1cdef668de6720cde2a2304253679176",class:"button-inner"},r("slot",{key:"2a2b9de524c1fc3c526fe9559cb077b976852725"},r("ion-icon",{key:"9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d",part:"icon",icon:h,mode:a,lazy:false,"aria-hidden":"true"}))),a==="md"&&r("ion-ripple-effect",{key:"c58c9e29c763070383472f65a9d322a684bcb564",type:"unbounded"})))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());H.style={ios:q,md:F};var J=":host(.menu-toggle-hidden){display:none}";var L=J;var Q=t("ion_menu_toggle",function(){function t(t){var e=this;i(this,t);this.onClick=function(){return v.toggle(e.menu)};this.visible=false;this.menu=undefined;this.autoHide=true}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,K(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=y(this);var i=this.autoHide&&!this.visible;return r(o,{key:"90e621f09792383f1badcc1b402b1ac7d08c5f98",onClick:this.onClick,"aria-hidden":i?"true":null,class:(t={},t[e]=true,t["menu-toggle-hidden"]=i,t)},r("slot",{key:"c0abdd1d91e9d80ee3704e3e374ebe1f29078460"}))};return t}());Q.style=L}}}));