var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function u(t){try{o(i.next(t))}catch(t){s(t)}}function a(t){try{o(i["throw"](t))}catch(t){s(t)}}function o(t){t.done?n(t.value):r(t.value).then(u,a)}o((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return o([t,e])}}function o(a){if(i)throw new TypeError("Generator is already executing.");while(u&&(u=0,a[0]&&(n=0)),n)try{if(i=1,r&&(s=a[0]&2?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;if(r=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(a[0]===6&&n.label<s[1]){n.label=s[1];s=a;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(a);break}if(s[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];r=0}finally{i=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-487a3ae7.system.js","./p-8635f5e6.system.js","./p-3ad285e3.system.js"],(function(t){"use strict";var e,n,i,r,s,u;return{setters:[function(t){e=t.r;n=t.h;i=t.f;r=t.i;s=t.d},function(t){u=t.a},function(){}],execute:function(){var a=":host(.tab-hidden){display:none !important}";var o=a;var f=t("ion_tab",function(){function t(t){e(this,t);this.loaded=false;this.active=false;this.delegate=undefined;this.tab=undefined;this.component=undefined}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this.active)return[3,2];return[4,this.setActive()];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};t.prototype.setActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:t.sent();this.active=true;return[2]}}))}))};t.prototype.changeActive=function(t){if(t){this.prepareLazyLoaded()}};t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&this.component!=null){this.loaded=true;try{return u(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(undefined)};t.prototype.render=function(){var t=this,e=t.tab,r=t.active,s=t.component;return n(i,{key:"46d5498418f5379861c3d7465e8021dec45f1200",role:"tabpanel","aria-hidden":!r?"true":null,"aria-labelledby":"tab-button-".concat(e),class:{"ion-page":s===undefined,"tab-hidden":!r}},n("slot",{key:"b45045dccb87dfe75e3f5a5a474bb48b6c98e922"}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:false,configurable:true});return t}());f.style=o;var c=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";var h=c;var d=t("ion_tabs",function(){function t(t){var n=this;e(this,t);this.ionNavWillLoad=s(this,"ionNavWillLoad",7);this.ionTabsWillChange=s(this,"ionTabsWillChange",3);this.ionTabsDidChange=s(this,"ionTabsDidChange",3);this.transitioning=false;this.onTabClicked=function(t){var e=t.detail,i=e.href,r=e.tab;if(n.useRouter&&i!==undefined){var s=document.querySelector("ion-router");if(s){s.push(i)}}else{n.select(r)}};this.selectedTab=undefined;this.useRouter=false}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:if(!this.useRouter){this.useRouter=(!!this.el.querySelector("ion-router-outlet")||!!document.querySelector("ion-router"))&&!this.el.closest("[no-router]")}if(!!this.useRouter)return[3,2];t=this.tabs;if(!(t.length>0))return[3,2];return[4,this.select(t[0])];case 1:e.sent();e.label=2;case 2:this.ionNavWillLoad.emit();return[2]}}))}))};t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:undefined;t.selectedTab=e}};t.prototype.select=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:e=l(this.tabs,t);if(!this.shouldSwitch(e)){return[2,false]}return[4,this.setActive(e)];case 1:n.sent();return[4,this.notifyRouter()];case 2:n.sent();this.tabSwitch();return[2,true]}}))}))};t.prototype.getTab=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,l(this.tabs,t)]}))}))};t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:undefined)};t.prototype.setRouteId=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(i){switch(i.label){case 0:e=l(this.tabs,t);if(!this.shouldSwitch(e)){return[2,{changed:false,element:this.selectedTab}]}return[4,this.setActive(e)];case 1:i.sent();return[2,{changed:true,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}}))}))};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){e=(t=this.selectedTab)===null||t===void 0?void 0:t.tab;return[2,e!==undefined?{id:e,element:this.selectedTab}:undefined]}))}))};t.prototype.setActive=function(t){if(this.transitioning){return Promise.reject("transitioning already happening")}this.transitioning=true;this.leavingTab=this.selectedTab;this.selectedTab=t;this.ionTabsWillChange.emit({tab:t.tab});t.active=true;return Promise.resolve()};t.prototype.tabSwitch=function(){var t=this.selectedTab;var e=this.leavingTab;this.leavingTab=undefined;this.transitioning=false;if(!t){return}if(e!==t){if(e){e.active=false}this.ionTabsDidChange.emit({tab:t.tab})}};t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t){return t.navChanged("forward")}}return Promise.resolve(false)};t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return t!==undefined&&t!==e&&!this.transitioning};Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:false,configurable:true});t.prototype.render=function(){return n(i,{key:"eb094c9bd15b7777c53bd0bd6d225784fa472849",onIonTabButtonClick:this.onTabClicked},n("slot",{key:"a516ca6915bf26e77eeeb0ff684c4fcc7d4420a7",name:"top"}),n("div",{key:"dd2a32a072d77afe216abc4958c1d686405fb780",class:"tabs-inner"},n("slot",{key:"222c20ba862068f5c78e7bbef4fa213499fb2fa5"})),n("slot",{key:"3e76dcb1b21873aa137d095c56131514054ead3a",name:"bottom"}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());var l=function(t,e){var n=typeof e==="string"?t.find((function(t){return t.tab===e})):e;if(!n){console.error('tab with id: "'.concat(n,'" does not exist'))}return n};d.style=h}}}));