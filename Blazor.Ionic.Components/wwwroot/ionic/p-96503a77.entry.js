/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,h as t,f as o,i as n}from"./p-4b528ed3.js";import{h as e}from"./p-b51e4004.js";import{c as a}from"./p-47794def.js";import{b as r}from"./p-98a7aade.js";const l=class{constructor(t){i(this,t),this.pickerColumn=null,this.ariaLabel=null,this.disabled=!1,this.value=void 0,this.color="primary"}onAriaLabelChange(i){this.ariaLabel=i}componentWillLoad(){const i=e(this.el,["aria-label"]);this.ariaLabel=i["aria-label"]||null}connectedCallback(){this.pickerColumn=this.el.closest("ion-picker-column")}disconnectedCallback(){this.pickerColumn=null}componentDidLoad(){const{pickerColumn:i}=this;null!==i&&i.scrollActiveItemIntoView()}onClick(){const{pickerColumn:i}=this;null!==i&&i.setValue(this.value)}render(){const{color:i,disabled:n,ariaLabel:e}=this,l=r(this);return t(o,{key:"cc4435a0ce0e55be1321bcabaf342ed68cf5ba1e",class:a(i,{[l]:!0,"option-disabled":n})},t("button",{key:"0187fb967771e0787807a8538dce4e59f6a98565",tabindex:"-1","aria-label":e,disabled:n,onClick:()=>this.onClick()},t("slot",{key:"dbe52552f3f27332816748c12d929cc81060841d"})))}get el(){return n(this)}static get watchers(){return{"aria-label":["onAriaLabelChange"]}}};l.style={ios:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}",md:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}"};export{l as ion_picker_column_option}