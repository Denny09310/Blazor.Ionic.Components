/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as o,h as i,f as a,i as e}from"./p-4b528ed3.js";import{E as s,a as n}from"./p-41d5544e.js";import{g as r,r as d}from"./p-b51e4004.js";import{c as l}from"./p-ccd02320.js";import{p}from"./p-06fee233.js";import{O as c,d as h,e as b,i as m,j as u,k as g,f,g as x,h as v,s as w,G as y}from"./p-2056f176.js";import{c as k,g as $}from"./p-47794def.js";import{c as j,b as T}from"./p-98a7aade.js";import{c as Y}from"./p-c7e16491.js";import{w as z}from"./p-7b30edcc.js";import{createGesture as D}from"./p-8ededb41.js";import"./p-c655f9cc.js";import"./p-3cc276f4.js";import"./p-9b97df10.js";const C=(t,o)=>Math.floor(t/2-o/2),M=(t,o)=>{const i=Y(),a=Y(),{position:e,top:s,bottom:n}=o,d=r(t).querySelector(".toast-wrapper");switch(a.addElement(d),e){case"top":a.fromTo("transform","translateY(-100%)",`translateY(${s})`);break;case"middle":const o=C(t.clientHeight,d.clientHeight);d.style.top=`${o}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translateY(100%)",`translateY(${n})`)}return i.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(a)},O=(t,o)=>{const i=Y(),a=Y(),{position:e,top:s,bottom:n}=o,d=r(t).querySelector(".toast-wrapper");switch(a.addElement(d),e){case"top":a.fromTo("transform",`translateY(${s})`,"translateY(-100%)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform",`translateY(${n})`,"translateY(100%)")}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)},P=(t,o)=>{const i=Y(),a=Y(),{position:e,top:s,bottom:n}=o,d=r(t).querySelector(".toast-wrapper");switch(a.addElement(d),e){case"top":d.style.setProperty("transform",`translateY(${s})`),a.fromTo("opacity",.01,1);break;case"middle":const o=C(t.clientHeight,d.clientHeight);d.style.top=`${o}px`,a.fromTo("opacity",.01,1);break;default:d.style.setProperty("transform",`translateY(${n})`),a.fromTo("opacity",.01,1)}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(a)},E=t=>{const o=Y(),i=Y(),a=r(t).querySelector(".toast-wrapper");return i.addElement(a).fromTo("opacity",.99,0),o.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},H=class{constructor(i){t(this,i),this.didPresent=o(this,"ionToastDidPresent",7),this.willPresent=o(this,"ionToastWillPresent",7),this.willDismiss=o(this,"ionToastWillDismiss",7),this.didDismiss=o(this,"ionToastDidDismiss",7),this.didPresentShorthand=o(this,"didPresent",7),this.willPresentShorthand=o(this,"willPresent",7),this.willDismissShorthand=o(this,"willDismiss",7),this.didDismissShorthand=o(this,"didDismiss",7),this.delegateController=h(this),this.lockController=l(),this.triggerController=b(),this.customHTMLEnabled=j.get("innerHTMLTemplatesEnabled",s),this.presented=!1,this.dispatchCancelHandler=t=>{if(m(t.detail.role)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}},this.createSwipeGesture=t=>{const o=this.gesture=((t,o,i)=>{const a=r(t).querySelector(".toast-wrapper"),e=t.clientHeight,s=a.getBoundingClientRect();let n=0;const d="middle"===t.position?.5:0,l="top"===t.position?-1:1,p=C(e,s.height),h=[{offset:0,transform:`translateY(-${p+s.height}px)`},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:`translateY(${p+s.height}px)`}],b=Y("toast-swipe-to-dismiss-animation").addElement(a).duration(100);switch(t.position){case"middle":n=e+s.height,b.keyframes(h),b.progressStart(!0,.5);break;case"top":n=s.bottom,b.keyframes([{offset:0,transform:`translateY(${o.top})`},{offset:1,transform:"translateY(-100%)"}]),b.progressStart(!0,0);break;default:n=e-s.top,b.keyframes([{offset:0,transform:`translateY(${o.bottom})`},{offset:1,transform:"translateY(100%)"}]),b.progressStart(!0,0)}const m=t=>t*l/n,u=D({el:a,gestureName:"toast-swipe-to-dismiss",gesturePriority:c,direction:"y",onMove:t=>{const o=d+m(t.deltaY);b.progressStep(o)},onEnd:o=>{const e=o.velocityY,s=(o.deltaY+1e3*e)/n*l;u.enable(!1);let r=!0,d=1,c=0,g=0;if("middle"===t.position){r=s>=.25||s<=-.25,d=1,c=0;const t=a.getBoundingClientRect(),i=t.top-p,e=(p+t.height)*(o.deltaY<=0?-1:1);b.keyframes([{offset:0,transform:`translateY(${i}px)`},{offset:1,transform:`translateY(${r?`${e}px`:"0px"})`}]),g=e-i}else r=s>=.5,d=r?1:0,c=m(o.deltaY),g=(r?1-c:c)*n;const f=Math.min(Math.abs(g)/Math.abs(e),200);b.onFinish((()=>{r?(i(),b.destroy()):("middle"===t.position?b.keyframes(h).progressStart(!0,.5):b.progressStart(!0,0),u.enable(!0))}),{oneTimeCallback:!0}).progressEnd(d,c,f)}});return u})(this.el,t,(()=>{this.dismiss(void 0,y)}));o.enable(!0)},this.destroySwipeGesture=()=>{const{gesture:t}=this;void 0!==t&&(t.destroy(),this.gesture=void 0)},this.prefersSwipeGesture=()=>{const{swipeGesture:t}=this;return"vertical"===t},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=j.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.swipeGesture=void 0,this.isOpen=!1,this.trigger=void 0}swipeGestureChanged(){this.destroySwipeGesture(),this.presented&&this.prefersSwipeGesture()&&this.createSwipeGesture(this.lastPresentedPosition)}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}triggerChanged(){const{trigger:t,el:o,triggerController:i}=this;t&&i.addClickListener(o,t)}connectedCallback(){u(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var t;(null===(t=this.htmlAttributes)||void 0===t?void 0:t.id)||g(this.el)}componentDidLoad(){!0===this.isOpen&&d((()=>this.present())),this.triggerChanged()}async present(){const t=await this.lockController.lock();await this.delegateController.attachViewToDom();const{el:o,position:i}=this,a=function(t,o,i,a){let e;if(e="md"===i?"top"===t?8:-8:"top"===t?10:-10,o&&z){!function(t,o){null===t.offsetParent&&p("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",o)}(o,a);const i=o.getBoundingClientRect();return"top"===t?e+=i.bottom:"bottom"===t&&(e-=z.innerHeight-i.top),{top:`${e}px`,bottom:`${e}px`}}return{top:`calc(${e}px + var(--ion-safe-area-top, 0px))`,bottom:`calc(${e}px - var(--ion-safe-area-bottom, 0px))`}}(i,this.getAnchorElement(),T(this),o);this.lastPresentedPosition=a,await f(this,"toastEnter",M,P,{position:i,top:a.top,bottom:a.bottom}),this.revealContentToScreenReader=!0,this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),this.prefersSwipeGesture()&&this.createSwipeGesture(a),t()}async dismiss(t,o){var i,a;const e=await this.lockController.lock(),{durationTimeout:s,position:n,lastPresentedPosition:r}=this;s&&clearTimeout(s);const d=await x(this,t,o,"toastLeave",O,E,{position:n,top:null!==(i=null==r?void 0:r.top)&&void 0!==i?i:"",bottom:null!==(a=null==r?void 0:r.bottom)&&void 0!==a?a:""});return d&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),this.lastPresentedPosition=void 0,this.destroySwipeGesture(),e(),d}onDidDismiss(){return v(this.el,"ionToastDidDismiss")}onWillDismiss(){return v(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((t=>"string"==typeof t?{text:t}:t)):[]}getAnchorElement(){const{position:t,positionAnchor:o,el:i}=this;if(void 0!==o)if("middle"!==t||void 0===o){if("string"==typeof o){const t=document.getElementById(o);return null===t?void p(`An anchor element with an ID of "${o}" was not found in the DOM.`,i):t}if(o instanceof HTMLElement)return o;p("Invalid positionAnchor value:",o,i)}else p('The positionAnchor property is ignored when using position="middle".',this.el)}async buttonClick(t){const o=t.role;return m(o)||await this.callButtonHandler(t)?this.dismiss(void 0,o):Promise.resolve()}async callButtonHandler(t){if(null==t?void 0:t.handler)try{if(!1===await w(t.handler))return!1}catch(t){console.error(t)}return!0}renderButtons(t,o){if(0===t.length)return;const a=T(this);return i("div",{class:{"toast-button-group":!0,[`toast-button-group-${o}`]:!0}},t.map((t=>i("button",Object.assign({},t.htmlAttributes,{type:"button",class:I(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:L(t)}),i("div",{class:"toast-button-inner"},t.icon&&i("ion-icon",{"aria-hidden":"true",icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-button-icon"}),t.text),"md"===a&&i("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"})))))}renderToastMessage(t,o=null){const{customHTMLEnabled:a,message:e}=this;return a?i("div",{key:t,"aria-hidden":o,class:"toast-message",part:"message",innerHTML:n(e)}):i("div",{key:t,"aria-hidden":o,class:"toast-message",part:"message"},e)}renderHeader(t,o=null){return i("div",{key:t,class:"toast-header","aria-hidden":o,part:"header"},this.header)}render(){const{layout:t,el:o,revealContentToScreenReader:e,header:s,message:n}=this,r=this.getButtons(),d=r.filter((t=>"start"===t.side)),l=r.filter((t=>"start"!==t.side)),c=T(this),h={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return"stacked"===t&&d.length>0&&l.length>0&&p("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",o),i(a,Object.assign({key:"68c336f80af04ba484ca9899bae8f40c0d9b7691",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:k(this.color,Object.assign(Object.assign({[c]:!0},$(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),i("div",{key:"3483b188f14b700964a123997a60a43a2023a1b6",class:h},i("div",{key:"1b88544a9b87253b364cbec6285625388979b560",class:"toast-container",part:"container"},this.renderButtons(d,"start"),void 0!==this.icon&&i("ion-icon",{key:"bd1c42e3b14af66b880dfe283e3ae910075c0f70",class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),i("div",{key:"a5ef6cdabc1f7c70d11a5f2a0abf8737fe7550e8",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!e&&void 0!==s&&this.renderHeader("oldHeader","true"),!e&&void 0!==n&&this.renderToastMessage("oldMessage","true"),e&&void 0!==s&&this.renderHeader("header"),e&&void 0!==n&&this.renderToastMessage("header")),this.renderButtons(l,"end"))))}get el(){return e(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},I=t=>({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0}),L=t=>m(t.role)?"button cancel":"button";H.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"};export{H as ion_toast}