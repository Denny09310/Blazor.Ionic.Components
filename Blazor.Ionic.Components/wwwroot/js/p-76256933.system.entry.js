var __awaiter=this&&this.__awaiter||function(e,t,r,i){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function o(e){try{l(i.next(e))}catch(e){n(e)}}function s(e){try{l(i["throw"](e))}catch(e){n(e)}}function l(e){e.done?r(e.value):a(e.value).then(o,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(o&&(o=0,s[0]&&(r=0)),r)try{if(i=1,a&&(n=s[0]&2?a["return"]:s[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;if(a=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(s[0]===6&&r.label<n[1]){r.label=n[1];n=s;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(s);break}if(n[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-487a3ae7.system.js","./p-3ad285e3.system.js","./p-979d4f5c.system.js","./p-4609d030.system.js","./p-ebe1326c.system.js"],(function(e){"use strict";var t,r,i,a,n,o,s,l,d,c,p,h;return{setters:[function(e){t=e.r;r=e.d;i=e.h;a=e.f;n=e.i},function(e){o=e.a;s=e.b;l=e.d},function(e){d=e.i},function(e){c=e.h;p=e.c},function(e){h=e.b}],execute:function(){var f=':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}';var b=f;var m=':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}';var u=m;var g=e("ion_radio",function(){function e(e){var i=this;t(this,e);this.ionFocus=r(this,"ionFocus",7);this.ionBlur=r(this,"ionBlur",7);this.inputId="ion-rb-".concat(w++);this.radioGroup=null;this.updateState=function(){if(i.radioGroup){var e=i.radioGroup,t=e.compareWith,r=e.value;i.checked=d(r,i.value,t)}};this.onClick=function(){var e=i,t=e.radioGroup,r=e.checked,a=e.disabled;if(a){return}if(r&&(t===null||t===void 0?void 0:t.allowEmptySelection)){i.checked=false}else{i.checked=true}};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()};this.checked=false;this.buttonTabindex=-1;this.color=undefined;this.name=this.inputId;this.disabled=false;this.value=undefined;this.labelPlacement="start";this.justify=undefined;this.alignment=undefined}e.prototype.valueChanged=function(){this.updateState()};e.prototype.componentDidLoad=function(){this.updateState()};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){e.stopPropagation();e.preventDefault();this.el.focus();return[2]}))}))};e.prototype.setButtonTabindex=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.buttonTabindex=e;return[2]}))}))};e.prototype.connectedCallback=function(){if(this.value===undefined){this.value=this.inputId}var e=this.radioGroup=this.el.closest("ion-radio-group");if(e){this.updateState();o(e,"ionValueChange",this.updateState)}};e.prototype.disconnectedCallback=function(){var e=this.radioGroup;if(e){s(e,"ionValueChange",this.updateState);this.radioGroup=null}};Object.defineProperty(e.prototype,"hasLabel",{get:function(){return this.el.textContent!==""},enumerable:false,configurable:true});e.prototype.renderRadioControl=function(){return i("div",{class:"radio-icon",part:"container"},i("div",{class:"radio-inner",part:"mark"}),i("div",{class:"radio-ripple"}))};e.prototype.render=function(){var e;var t=this,r=t.checked,n=t.disabled,o=t.color,s=t.el,l=t.justify,d=t.labelPlacement,f=t.hasLabel,b=t.buttonTabindex,m=t.alignment;var u=h(this);var g=c("ion-item",s);return i(a,{key:"d6d9525eea9dadc3ea7060eb9b8cbb919e1d7091",onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:p(o,(e={},e[u]=true,e["in-item"]=g,e["radio-checked"]=r,e["radio-disabled"]=n,e["radio-justify-".concat(l)]=l!==undefined,e["radio-alignment-".concat(m)]=m!==undefined,e["radio-label-placement-".concat(d)]=true,e["ion-activatable"]=!g,e["ion-focusable"]=!g,e)),role:"radio","aria-checked":r?"true":"false","aria-disabled":n?"true":null,tabindex:b},i("label",{key:"3ec73512bac8feb651c66e544899c6a4330d504c",class:"radio-wrapper"},i("div",{key:"9ae7ecb19c7bafe0ce3d0f717af0338251964ebf",class:{"label-text-wrapper":true,"label-text-wrapper-hidden":!f},part:"label"},i("slot",{key:"2950f1579a22d4a06f9c903fd462c2b46f43bfd7"})),i("div",{key:"8b19ce30b39066744108a6de2da42a7ce8ffdbec",class:"native-wrapper"},this.renderRadioControl())))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var w=0;g.style={ios:b,md:u};var x=e("ion_radio_group",function(){function e(e){var i=this;t(this,e);this.ionChange=r(this,"ionChange",7);this.ionValueChange=r(this,"ionValueChange",7);this.inputId="ion-rg-".concat(v++);this.labelId="".concat(this.inputId,"-lbl");this.setRadioTabindex=function(e){var t=i.getRadios();var r=t.find((function(e){return!e.disabled}));var a=t.find((function(t){return t.value===e&&!t.disabled}));if(!r&&!a){return}var n=a||r;for(var o=0,s=t;o<s.length;o++){var l=s[o];var d=l===n?0:-1;l.setButtonTabindex(d)}};this.onClick=function(e){e.preventDefault();var t=e.target&&e.target.closest("ion-radio");if(t&&!t.disabled){var r=i.value;var a=t.value;if(a!==r){i.value=a;i.emitValueChange(e)}else if(i.allowEmptySelection){i.value=undefined;i.emitValueChange(e)}}};this.allowEmptySelection=false;this.compareWith=undefined;this.name=this.inputId;this.value=undefined}e.prototype.valueChanged=function(e){this.setRadioTabindex(e);this.ionValueChange.emit({value:e})};e.prototype.componentDidLoad=function(){this.valueChanged(this.value)};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){e=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(e){t=this.label=e.querySelector("ion-label");if(t){this.labelId=t.id=this.name+"-lbl"}}return[2]}))}))};e.prototype.getRadios=function(){return Array.from(this.el.querySelectorAll("ion-radio"))};e.prototype.emitValueChange=function(e){var t=this.value;this.ionChange.emit({value:t,event:e})};e.prototype.onKeydown=function(e){var t=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target)){return}var r=this.getRadios().filter((function(e){return!e.disabled}));if(e.target&&r.includes(e.target)){var i=r.findIndex((function(t){return t===e.target}));var a=r[i];var n=void 0;if(["ArrowDown","ArrowRight"].includes(e.key)){n=i===r.length-1?r[0]:r[i+1]}if(["ArrowUp","ArrowLeft"].includes(e.key)){n=i===0?r[r.length-1]:r[i-1]}if(n&&r.includes(n)){n.setFocus(e);if(!t){this.value=n.value;this.emitValueChange(e)}}if([" "].includes(e.key)){var o=this.value;this.value=this.allowEmptySelection&&this.value!==undefined?undefined:a.value;if(o!==this.value||this.allowEmptySelection){this.emitValueChange(e)}e.preventDefault()}}};e.prototype.render=function(){var e=this,t=e.label,r=e.labelId,n=e.el,o=e.name,s=e.value;var d=h(this);l(true,n,o,s,false);return i(a,{key:"7a8ad7eb6a05c6f96a348dcf30fd0c610a95688c",role:"radiogroup","aria-labelledby":t?r:null,onClick:this.onClick,class:d})};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var v=0}}}));