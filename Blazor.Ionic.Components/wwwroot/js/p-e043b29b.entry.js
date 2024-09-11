/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as e,d as t,h as a,f as r,i as n}from"./p-4b528ed3.js";import{f as i,d as o,r as s}from"./p-06e58c4e.js";import{j as l,e as d,i as b,d as h}from"./p-b51e4004.js";import{p as g}from"./p-06fee233.js";import{i as c}from"./p-fb813dab.js";import{h as p,c as m}from"./p-47794def.js";import{b as k}from"./p-98a7aade.js";const x=class{constructor(a){e(this,a),this.ionChange=t(this,"ionChange",7),this.ionInput=t(this,"ionInput",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7),this.ionKnobMoveStart=t(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=t(this,"ionKnobMoveEnd",7),this.rangeId="ion-r-"+w++,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.clampBounds=e=>l(this.min,e,this.max),this.ensureValueInBounds=e=>this.dualKnobs?{lower:this.clampBounds(e.lower),upper:this.clampBounds(e.upper)}:this.clampBounds(e),this.setupGesture=async()=>{const e=this.rangeSlider;e&&(this.gesture=(await import("./p-8ededb41.js")).createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:10,onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:e=>this.onEnd(e)}),this.gesture.enable(!this.disabled))},this.handleKeyboard=(e,t)=>{const{ensureValueInBounds:a}=this;let r=this.step;r=r>0?r:1,r/=this.max-this.min,t||(r*=-1),"A"===e?this.ratioA=l(0,this.ratioA+r,1):this.ratioB=l(0,this.ratioB+r,1),this.ionKnobMoveStart.emit({value:a(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:a(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=e=>Math.round(e),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start"}debounceChanged(){const{ionInput:e,debounce:t,originalIonInput:a}=this;this.ionInput=void 0===t?null!=a?a:e:d(e,t)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:e}=this;void 0!==e&&(e>this.max?(g(`Range: The value of activeBarStart (${e}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):e<this.min&&(g(`Range: The value of activeBarStart (${e}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=b(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=i(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var e;const t=null!==(e=this.value)&&void 0!==e?e:0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(e){const{contentEl:t,pressedKnob:a}=this,r=e.currentX;t&&void 0===this.initialContentScrollY&&(this.initialContentScrollY=o(t)),void 0===a&&this.setPressedKnob(r),this.update(r)}onEnd(e){var t;const{contentEl:a,initialContentScrollY:r}=this,n=null!==(t=e.currentX)&&void 0!==t?t:e.clientX;void 0===this.pressedKnob&&this.setPressedKnob(n),a&&void 0!==r&&s(a,r),this.update(n),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(e){const t=this.rect;let a=l(0,(e-t.left)/t.width,1);c(this.el)&&(a=1-a),this.snaps&&(a=v(f(a,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=a:this.ratioB=a,this.updateValue()}setPressedKnob(e){const t=this.rect=this.rangeSlider.getBoundingClientRect();let a=l(0,(e-t.left)/t.width,1);c(this.el)&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob)}get valA(){return f(this.ratioA,this.min,this.max,this.step)}get valB(){return f(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:e}=this;return null==e?0:v(e,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const e=this.getValue(),{min:t,max:a}=this;this.dualKnobs?(this.ratioA=v(e.lower,t,a),this.ratioB=v(e.upper,t,a)):this.ratioA=v(e,t,a)}updateValue(){this.noUpdate=!0;const{valA:e,valB:t}=this;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(e){if(this.el.shadowRoot){const t=this.el.shadowRoot.querySelector("A"===e?".range-knob-a":".range-knob-b");t&&t.focus()}}get hasStartSlotContent(){return null!==this.el.querySelector('[slot="start"]')}get hasEndSlotContent(){return null!==this.el.querySelector('[slot="end"]')}get hasLabel(){return void 0!==this.label||null!==this.el.querySelector('[slot="label"]')}renderRangeSlider(){var e;const{min:t,max:r,step:n,handleKeyboard:i,pressedKnob:o,disabled:s,pin:l,ratioLower:d,ratioUpper:b,pinFormatter:h,inheritedAttributes:g}=this;let p=100*d+"%",m=100-100*b+"%";const k=c(this.el),x=k?"right":"left",f=k?"left":"right",w=e=>({[x]:e[x]});!1===this.dualKnobs&&(this.valA<(null!==(e=this.activeBarStart)&&void 0!==e?e:this.min)?(p=100*b+"%",m=100-100*d+"%"):(p=100*d+"%",m=100-100*b+"%"));const y={[x]:p,[f]:m},z=[];if(this.snaps&&this.ticks)for(let e=t;e<=r;e+=n){const a=v(e,t,r),n=Math.min(d,b),i=Math.max(d,b),o={ratio:a,active:a>=n&&a<=i};o[x]=100*a+"%",z.push(o)}return a("div",{class:"range-slider",ref:e=>this.rangeSlider=e,onPointerUp:e=>{void 0===this.pressedKnob&&(this.onStart(),this.onEnd(e))}},z.map((e=>a("div",{style:w(e),role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active},part:e.active?"tick-active":"tick"}))),a("div",{class:"range-bar-container"},a("div",{class:"range-bar",role:"presentation",part:"bar"}),a("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":z.length>0},role:"presentation",style:y,part:"bar-active"})),u(k,{knob:"A",pressed:"A"===o,value:this.valA,ratio:this.ratioA,pin:l,pinFormatter:h,disabled:s,handleKeyboard:i,min:t,max:r,inheritedAttributes:g}),this.dualKnobs&&u(k,{knob:"B",pressed:"B"===o,value:this.valB,ratio:this.ratioB,pin:l,pinFormatter:h,disabled:s,handleKeyboard:i,min:t,max:r,inheritedAttributes:g}))}render(){const{disabled:e,el:t,hasLabel:n,rangeId:i,pin:o,pressedKnob:s,labelPlacement:l,label:d}=this,b=p("ion-item",t),g=b&&!(n&&("start"===l||"fixed"===l)||this.hasStartSlotContent),c=b&&!(n&&"end"===l||this.hasEndSlotContent),x=k(this);return h(!0,t,this.name,JSON.stringify(this.getValue()),e),a(r,{key:"7ad5ca892fd46c64ce5583e91e6812410a869921",onFocusin:this.onFocus,onFocusout:this.onBlur,id:i,class:m(this.color,{[x]:!0,"in-item":b,"range-disabled":e,"range-pressed":void 0!==s,"range-has-pin":o,[`range-label-placement-${l}`]:!0,"range-item-start-adjustment":g,"range-item-end-adjustment":c})},a("label",{key:"eb8d46a9572341b4cc3c91d8a5de0667bd166ca4",class:"range-wrapper",id:"range-label"},a("div",{key:"21acd6ff6eba17bf6923bf723fea055b95fd29ca",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!n},part:"label"},void 0!==d?a("div",{class:"label-text"},d):a("slot",{name:"label"})),a("div",{key:"7644c86a6ad3edf2c27f02dd2a14795b3720ea0d",class:"native-wrapper"},a("slot",{key:"1bbeccee57addc126b36de395e28ba655248695b",name:"start"}),this.renderRangeSlider(),a("slot",{key:"2963dd84e4116fc3956c304eb53deefd0d1291df",name:"end"}))))}get el(){return n(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},u=(e,{knob:t,value:r,ratio:n,min:i,max:o,disabled:s,pressed:l,pin:d,handleKeyboard:b,pinFormatter:h,inheritedAttributes:g})=>{const c=e?"right":"left",p=g["aria-label"];return a("div",{onKeyDown:e=>{const a=e.key;"ArrowLeft"===a||"ArrowDown"===a?(b(t,!1),e.preventDefault(),e.stopPropagation()):"ArrowRight"!==a&&"ArrowUp"!==a||(b(t,!0),e.preventDefault(),e.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===t,"range-knob-b":"B"===t,"range-knob-pressed":l,"range-knob-min":r===i,"range-knob-max":r===o,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const e={};return e[c]=100*n+"%",e})(),role:"slider",tabindex:s?-1:0,"aria-label":void 0!==p?p:null,"aria-labelledby":void 0===p?"range-label":null,"aria-valuemin":i,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":r},d&&a("div",{class:"range-pin",role:"presentation",part:"pin"},h(r)),a("div",{class:"range-knob",role:"presentation",part:"knob"}))},f=(e,t,a,r)=>{let n=(a-t)*e;return r>0&&(n=Math.round(n/r)*r+t),function(e,...t){const a=Math.max(...t.map((e=>function(e){return e%1==0?0:e.toString().split(".")[1].length}(e))));return Number(e.toFixed(a))}(l(t,n,a),t,a,r)},v=(e,t,a)=>l(0,(e-t)/(a-t),1);let w=0;x.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}'};export{x as ion_range}