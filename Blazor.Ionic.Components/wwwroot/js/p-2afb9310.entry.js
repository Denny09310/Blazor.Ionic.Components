/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as o,e,h as i,f as n,i as a}from"./p-4b528ed3.js";import{c as r}from"./p-b0d099be.js";import{r as c}from"./p-b51e4004.js";import{c as s}from"./p-ccd02320.js";import{d,e as l,B as h,i as b,f as p,g as u,h as g,s as v,j as f,k as m}from"./p-2056f176.js";import{g as k}from"./p-47794def.js";import{b as x}from"./p-98a7aade.js";import{c as y}from"./p-c7e16491.js";import"./p-89b61afc.js";import"./p-c61cc894.js";import"./p-7b30edcc.js";import"./p-8ededb41.js";import"./p-9b97df10.js";import"./p-c655f9cc.js";import"./p-3cc276f4.js";import"./p-06fee233.js";const w=t=>{const o=y(),e=y(),i=y();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,i])},j=t=>{const o=y(),e=y(),i=y();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e,i])},z=t=>{const o=y(),e=y(),i=y();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,i])},C=t=>{const o=y(),e=y(),i=y();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([e,i])},D=class{constructor(e){t(this,e),this.didPresent=o(this,"ionActionSheetDidPresent",7),this.willPresent=o(this,"ionActionSheetWillPresent",7),this.willDismiss=o(this,"ionActionSheetWillDismiss",7),this.didDismiss=o(this,"ionActionSheetDidDismiss",7),this.didPresentShorthand=o(this,"didPresent",7),this.willPresentShorthand=o(this,"willPresent",7),this.willDismissShorthand=o(this,"willDismiss",7),this.didDismissShorthand=o(this,"didDismiss",7),this.delegateController=d(this),this.lockController=s(),this.triggerController=l(),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,h)},this.dispatchCancelHandler=t=>{if(b(t.detail.role)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.cssClass=void 0,this.backdropDismiss=!0,this.header=void 0,this.subHeader=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}triggerChanged(){const{trigger:t,el:o,triggerController:e}=this;t&&e.addClickListener(o,t)}async present(){const t=await this.lockController.lock();await this.delegateController.attachViewToDom(),await p(this,"actionSheetEnter",w,z),t()}async dismiss(t,o){const e=await this.lockController.lock(),i=await u(this,t,o,"actionSheetLeave",j,C);return i&&this.delegateController.removeViewFromDom(),e(),i}onDidDismiss(){return g(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return g(this.el,"ionActionSheetWillDismiss")}async buttonClick(t){const o=t.role;return b(o)?this.dismiss(t.data,o):await this.callButtonHandler(t)?this.dismiss(t.data,t.role):Promise.resolve()}async callButtonHandler(t){return!t||!1!==await v(t.handler)}getButtons(){return this.buttons.map((t=>"string"==typeof t?{text:t}:t))}connectedCallback(){f(this.el),this.triggerChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.triggerController.removeClickListener()}componentWillLoad(){var t;(null===(t=this.htmlAttributes)||void 0===t?void 0:t.id)||m(this.el)}componentDidLoad(){const{groupEl:t,wrapperEl:o}=this;!this.gesture&&"ios"===x(this)&&o&&t&&e((()=>{t.scrollHeight>t.clientHeight||(this.gesture=r(o,(t=>t.classList.contains("action-sheet-button"))),this.gesture.enable(!0))})),!0===this.isOpen&&c((()=>this.present())),this.triggerChanged()}render(){const{header:t,htmlAttributes:o,overlayIndex:e}=this,a=x(this),r=this.getButtons(),c=r.find((t=>"cancel"===t.role)),s=r.filter((t=>"cancel"!==t.role)),d=`action-sheet-${e}-header`;return i(n,Object.assign({key:"7bbd202ca9e19727e7514abbe073687d982f80c3",role:"dialog","aria-modal":"true","aria-labelledby":void 0!==t?d:null,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({[a]:!0},k(this.cssClass)),{"overlay-hidden":!0,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),i("ion-backdrop",{key:"23344a9221a2e6720d7b9de5249dc37256cafa7b",tappable:this.backdropDismiss}),i("div",{key:"d46361bb5cdc32a7922dcf76b566f358a6174bfa",tabindex:"0"}),i("div",{key:"136c3f2e77c8a2eac8e9ae4bb13d735e1d62598d",class:"action-sheet-wrapper ion-overlay-wrapper",ref:t=>this.wrapperEl=t},i("div",{key:"6168ea8b2be42020b2edeb8ff3a0f3d1254be37a",class:"action-sheet-container"},i("div",{key:"29b9e6619dc54574733a704d6bf885839151bd84",class:"action-sheet-group",ref:t=>this.groupEl=t},void 0!==t&&i("div",{key:"536ce764bfddb3816ea3512d90f4acef2ccb8589",id:d,class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},t,this.subHeader&&i("div",{key:"6d888219145824fd36cdfe0d3c8388bbf2769777",class:"action-sheet-sub-title"},this.subHeader)),s.map((t=>i("button",Object.assign({},t.htmlAttributes,{type:"button",id:t.id,class:O(t),onClick:()=>this.buttonClick(t),disabled:t.disabled}),i("span",{class:"action-sheet-button-inner"},t.icon&&i("ion-icon",{icon:t.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),t.text),"md"===a&&i("ion-ripple-effect",null))))),c&&i("div",{key:"46f98f0ed5a9bdb3e35feb9ae71c4489c17b7d77",class:"action-sheet-group action-sheet-group-cancel"},i("button",Object.assign({key:"e3c457bced8ad5f692e48de26e65f731fd631b4f"},c.htmlAttributes,{type:"button",class:O(c),onClick:()=>this.buttonClick(c)}),i("span",{key:"4cba6dc559f734ecc852e024959210cd0dd25354",class:"action-sheet-button-inner"},c.icon&&i("ion-icon",{key:"9df64989aad1b4d1e75edf4d37ab208965cfe37f",icon:c.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),c.text),"md"===a&&i("ion-ripple-effect",{key:"558089275a29177cefdb2e38eefc9b5c8b62872b"}))))),i("div",{key:"fa4df6e043b00a6e4126dbc71cb344cfc2b2e7bc",tabindex:"0"}))}get el(){return a(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},O=t=>Object.assign({"action-sheet-button":!0,"ion-activatable":!t.disabled,"ion-focusable":!t.disabled,[`action-sheet-${t.role}`]:void 0!==t.role},k(t.cssClass));D.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color-step-150, var(--ion-background-color, #fff)));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #0054e9);--button-color-disabled:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999));text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #c5000f)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #c5000f)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--button-color-disabled:var(--button-color);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'};export{D as ion_action_sheet}