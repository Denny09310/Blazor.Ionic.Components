var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){e.done?n(e.value):a(e.value).then(o,s)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(o&&(o=0,s[0]&&(n=0)),n)try{if(r=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];a=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-487a3ae7.system.js","./p-9ea607bd.system.js","./p-3ad285e3.system.js","./p-ff4b7e40.system.js","./p-08e01816.system.js","./p-4609d030.system.js","./p-ebe1326c.system.js"],(function(e,t){"use strict";var n,r,a,i,o,s,l,b,d,c,h,g,p,u,f,m,k;return{setters:[function(e){n=e.r;r=e.d;a=e.h;i=e.f;o=e.i},function(e){s=e.f;l=e.d;b=e.r},function(e){d=e.j;c=e.e;h=e.i;g=e.d},function(e){p=e.p},function(e){u=e.i},function(e){f=e.h;m=e.c},function(e){k=e.b}],execute:function(){function v(e){if(e%1===0)return 0;return e.toString().split(".")[1].length}function x(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}var r=Math.max.apply(Math,t.map((function(e){return v(e)})));return Number(e.toFixed(r))}var w=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}";var y=w;var z=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}';var j=z;var M=e("ion_range",function(){function e(e){var a=this;n(this,e);this.ionChange=r(this,"ionChange",7);this.ionInput=r(this,"ionInput",7);this.ionFocus=r(this,"ionFocus",7);this.ionBlur=r(this,"ionBlur",7);this.ionKnobMoveStart=r(this,"ionKnobMoveStart",7);this.ionKnobMoveEnd=r(this,"ionKnobMoveEnd",7);this.rangeId="ion-r-".concat(O++);this.didLoad=false;this.noUpdate=false;this.hasFocus=false;this.inheritedAttributes={};this.contentEl=null;this.initialContentScrollY=true;this.clampBounds=function(e){return d(a.min,e,a.max)};this.ensureValueInBounds=function(e){if(a.dualKnobs){return{lower:a.clampBounds(e.lower),upper:a.clampBounds(e.upper)}}else{return a.clampBounds(e)}};this.setupGesture=function(){return __awaiter(a,void 0,void 0,(function(){var e,n;var r=this;return __generator(this,(function(a){switch(a.label){case 0:e=this.rangeSlider;if(!e)return[3,2];n=this;return[4,t.import("./p-3e1e14d9.system.js")];case 1:n.gesture=a.sent().createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:10,onStart:function(){return r.onStart()},onMove:function(e){return r.onMove(e)},onEnd:function(e){return r.onEnd(e)}});this.gesture.enable(!this.disabled);a.label=2;case 2:return[2]}}))}))};this.handleKeyboard=function(e,t){var n=a.ensureValueInBounds;var r=a.step;r=r>0?r:1;r=r/(a.max-a.min);if(!t){r*=-1}if(e==="A"){a.ratioA=d(0,a.ratioA+r,1)}else{a.ratioB=d(0,a.ratioB+r,1)}a.ionKnobMoveStart.emit({value:n(a.value)});a.updateValue();a.emitValueChange();a.ionKnobMoveEnd.emit({value:n(a.value)})};this.onBlur=function(){if(a.hasFocus){a.hasFocus=false;a.ionBlur.emit()}};this.onFocus=function(){if(!a.hasFocus){a.hasFocus=true;a.ionFocus.emit()}};this.ratioA=0;this.ratioB=0;this.pressedKnob=undefined;this.color=undefined;this.debounce=undefined;this.name=this.rangeId;this.label=undefined;this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.pinFormatter=function(e){return Math.round(e)};this.snaps=false;this.step=1;this.ticks=true;this.activeBarStart=undefined;this.disabled=false;this.value=0;this.labelPlacement="start"}e.prototype.debounceChanged=function(){var e=this,t=e.ionInput,n=e.debounce,r=e.originalIonInput;this.ionInput=n===undefined?r!==null&&r!==void 0?r:t:c(t,n)};e.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};e.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};e.prototype.activeBarStartChanged=function(){var e=this.activeBarStart;if(e!==undefined){if(e>this.max){p("Range: The value of activeBarStart (".concat(e,") is greater than the max (").concat(this.max,"). Valid values are greater than or equal to the min value and less than or equal to the max value."),this.el);this.activeBarStart=this.max}else if(e<this.min){p("Range: The value of activeBarStart (".concat(e,") is less than the min (").concat(this.min,"). Valid values are greater than or equal to the min value and less than or equal to the max value."),this.el);this.activeBarStart=this.min}}};e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.valueChanged=function(){if(!this.noUpdate){this.updateRatio()}};e.prototype.componentWillLoad=function(){if(this.el.hasAttribute("id")){this.rangeId=this.el.getAttribute("id")}this.inheritedAttributes=h(this.el)};e.prototype.componentDidLoad=function(){this.originalIonInput=this.ionInput;this.setupGesture();this.updateRatio();this.didLoad=true};e.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged();this.activeBarStartChanged();if(this.didLoad){this.setupGesture()}this.contentEl=s(this.el)};e.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.getValue=function(){var e;var t=(e=this.value)!==null&&e!==void 0?e:0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};e.prototype.emitValueChange=function(){this.value=this.ensureValueInBounds(this.value);this.ionChange.emit({value:this.value})};e.prototype.onStart=function(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})};e.prototype.onMove=function(e){var t=this,n=t.contentEl,r=t.pressedKnob;var a=e.currentX;if(n&&this.initialContentScrollY===undefined){this.initialContentScrollY=l(n)}if(r===undefined){this.setPressedKnob(a)}this.update(a)};e.prototype.onEnd=function(e){var t;var n=this,r=n.contentEl,a=n.initialContentScrollY;var i=(t=e.currentX)!==null&&t!==void 0?t:e.clientX;if(this.pressedKnob===undefined){this.setPressedKnob(i)}if(r&&a!==undefined){b(r,a)}this.update(i);this.pressedKnob=undefined;this.emitValueChange();this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})};e.prototype.update=function(e){var t=this.rect;var n=d(0,(e-t.left)/t.width,1);if(u(this.el)){n=1-n}if(this.snaps){n=B(S(n,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=n}else{this.ratioB=n}this.updateValue()};e.prototype.setPressedKnob=function(e){var t=this.rect=this.rangeSlider.getBoundingClientRect();var n=d(0,(e-t.left)/t.width,1);if(u(this.el)){n=1-n}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B";this.setFocus(this.pressedKnob)};Object.defineProperty(e.prototype,"valA",{get:function(){return S(this.ratioA,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"valB",{get:function(){return S(this.ratioB,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}var e=this.activeBarStart;if(e==null){return 0}return B(e,this.min,this.max)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:false,configurable:true});e.prototype.updateRatio=function(){var e=this.getValue();var t=this,n=t.min,r=t.max;if(this.dualKnobs){this.ratioA=B(e.lower,n,r);this.ratioB=B(e.upper,n,r)}else{this.ratioA=B(e,n,r)}};e.prototype.updateValue=function(){this.noUpdate=true;var e=this,t=e.valA,n=e.valB;this.value=!this.dualKnobs?t:{lower:Math.min(t,n),upper:Math.max(t,n)};this.ionInput.emit({value:this.value});this.noUpdate=false};e.prototype.setFocus=function(e){if(this.el.shadowRoot){var t=this.el.shadowRoot.querySelector(e==="A"?".range-knob-a":".range-knob-b");if(t){t.focus()}}};Object.defineProperty(e.prototype,"hasStartSlotContent",{get:function(){return this.el.querySelector('[slot="start"]')!==null},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"hasEndSlotContent",{get:function(){return this.el.querySelector('[slot="end"]')!==null},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"hasLabel",{get:function(){return this.label!==undefined||this.el.querySelector('[slot="label"]')!==null},enumerable:false,configurable:true});e.prototype.renderRangeSlider=function(){var e;var t=this;var n;var r=this,i=r.min,o=r.max,s=r.step,l=r.handleKeyboard,b=r.pressedKnob,d=r.disabled,c=r.pin,h=r.ratioLower,g=r.ratioUpper,p=r.pinFormatter,f=r.inheritedAttributes;var m="".concat(h*100,"%");var k="".concat(100-g*100,"%");var v=u(this.el);var x=v?"right":"left";var w=v?"left":"right";var y=function(e){var t;return t={},t[x]=e[x],t};if(this.dualKnobs===false){if(this.valA<((n=this.activeBarStart)!==null&&n!==void 0?n:this.min)){m="".concat(g*100,"%");k="".concat(100-h*100,"%")}else{m="".concat(h*100,"%");k="".concat(100-g*100,"%")}}var z=(e={},e[x]=m,e[w]=k,e);var j=[];if(this.snaps&&this.ticks){for(var M=i;M<=o;M+=s){var S=B(M,i,o);var O=Math.min(h,g);var C=Math.max(h,g);var _={ratio:S,active:S>=O&&S<=C};_[x]="".concat(S*100,"%");j.push(_)}}return a("div",{class:"range-slider",ref:function(e){return t.rangeSlider=e},onPointerUp:function(e){if(t.pressedKnob===undefined){t.onStart();t.onEnd(e)}}},j.map((function(e){return a("div",{style:y(e),role:"presentation",class:{"range-tick":true,"range-tick-active":e.active},part:e.active?"tick-active":"tick"})})),a("div",{class:"range-bar-container"},a("div",{class:"range-bar",role:"presentation",part:"bar"}),a("div",{class:{"range-bar":true,"range-bar-active":true,"has-ticks":j.length>0},role:"presentation",style:z,part:"bar-active"})),A(v,{knob:"A",pressed:b==="A",value:this.valA,ratio:this.ratioA,pin:c,pinFormatter:p,disabled:d,handleKeyboard:l,min:i,max:o,inheritedAttributes:f}),this.dualKnobs&&A(v,{knob:"B",pressed:b==="B",value:this.valB,ratio:this.ratioB,pin:c,pinFormatter:p,disabled:d,handleKeyboard:l,min:i,max:o,inheritedAttributes:f}))};e.prototype.render=function(){var e;var t=this,n=t.disabled,r=t.el,o=t.hasLabel,s=t.rangeId,l=t.pin,b=t.pressedKnob,d=t.labelPlacement,c=t.label;var h=f("ion-item",r);var p=o&&(d==="start"||d==="fixed")||this.hasStartSlotContent;var u=h&&!p;var v=o&&d==="end"||this.hasEndSlotContent;var x=h&&!v;var w=k(this);g(true,r,this.name,JSON.stringify(this.getValue()),n);return a(i,{key:"7ad5ca892fd46c64ce5583e91e6812410a869921",onFocusin:this.onFocus,onFocusout:this.onBlur,id:s,class:m(this.color,(e={},e[w]=true,e["in-item"]=h,e["range-disabled"]=n,e["range-pressed"]=b!==undefined,e["range-has-pin"]=l,e["range-label-placement-".concat(d)]=true,e["range-item-start-adjustment"]=u,e["range-item-end-adjustment"]=x,e))},a("label",{key:"eb8d46a9572341b4cc3c91d8a5de0667bd166ca4",class:"range-wrapper",id:"range-label"},a("div",{key:"21acd6ff6eba17bf6923bf723fea055b95fd29ca",class:{"label-text-wrapper":true,"label-text-wrapper-hidden":!o},part:"label"},c!==undefined?a("div",{class:"label-text"},c):a("slot",{name:"label"})),a("div",{key:"7644c86a6ad3edf2c27f02dd2a14795b3720ea0d",class:"native-wrapper"},a("slot",{key:"1bbeccee57addc126b36de395e28ba655248695b",name:"start"}),this.renderRangeSlider(),a("slot",{key:"2963dd84e4116fc3956c304eb53deefd0d1291df",name:"end"}))))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var A=function(e,t){var n=t.knob,r=t.value,i=t.ratio,o=t.min,s=t.max,l=t.disabled,b=t.pressed,d=t.pin,c=t.handleKeyboard,h=t.pinFormatter,g=t.inheritedAttributes;var p=e?"right":"left";var u=function(){var e={};e[p]="".concat(i*100,"%");return e};var f=g["aria-label"];return a("div",{onKeyDown:function(e){var t=e.key;if(t==="ArrowLeft"||t==="ArrowDown"){c(n,false);e.preventDefault();e.stopPropagation()}else if(t==="ArrowRight"||t==="ArrowUp"){c(n,true);e.preventDefault();e.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":n==="A","range-knob-b":n==="B","range-knob-pressed":b,"range-knob-min":r===o,"range-knob-max":r===s,"ion-activatable":true,"ion-focusable":true},style:u(),role:"slider",tabindex:l?-1:0,"aria-label":f!==undefined?f:null,"aria-labelledby":f===undefined?"range-label":null,"aria-valuemin":o,"aria-valuemax":s,"aria-disabled":l?"true":null,"aria-valuenow":r},d&&a("div",{class:"range-pin",role:"presentation",part:"pin"},h(r)),a("div",{class:"range-knob",role:"presentation",part:"knob"}))};var S=function(e,t,n,r){var a=(n-t)*e;if(r>0){a=Math.round(a/r)*r+t}var i=d(t,a,n);return x(i,t,n,r)};var B=function(e,t,n){return d(0,(e-t)/(n-t),1)};var O=0;M.style={ios:y,md:j}}}}));