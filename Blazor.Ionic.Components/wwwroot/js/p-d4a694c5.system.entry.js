/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-487a3ae7.system.js","./p-3ad285e3.system.js","./p-4609d030.system.js","./p-ebe1326c.system.js"],(function(t){"use strict";var i,n,e,o,r,a,s;return{setters:[function(t){i=t.r;n=t.h;e=t.f;o=t.i},function(t){r=t.h},function(t){a=t.c},function(t){s=t.b}],execute:function(){var l="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";var u=l;var c="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";var f=c;var h=t("ion_picker_column_option",function(){function t(t){i(this,t);this.pickerColumn=null;this.ariaLabel=null;this.disabled=false;this.value=undefined;this.color="primary"}t.prototype.onAriaLabelChange=function(t){this.ariaLabel=t};t.prototype.componentWillLoad=function(){var t=r(this.el,["aria-label"]);this.ariaLabel=t["aria-label"]||null};t.prototype.connectedCallback=function(){this.pickerColumn=this.el.closest("ion-picker-column")};t.prototype.disconnectedCallback=function(){this.pickerColumn=null};t.prototype.componentDidLoad=function(){var t=this.pickerColumn;if(t!==null){t.scrollActiveItemIntoView()}};t.prototype.onClick=function(){var t=this.pickerColumn;if(t!==null){t.setValue(this.value)}};t.prototype.render=function(){var t;var i=this;var o=this,r=o.color,l=o.disabled,u=o.ariaLabel;var c=s(this);return n(e,{key:"cc4435a0ce0e55be1321bcabaf342ed68cf5ba1e",class:a(r,(t={},t[c]=true,t["option-disabled"]=l,t))},n("button",{key:"0187fb967771e0787807a8538dce4e59f6a98565",tabindex:"-1","aria-label":u,disabled:l,onClick:function(){return i.onClick()}},n("slot",{key:"dbe52552f3f27332816748c12d929cc81060841d"})))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{"aria-label":["onAriaLabelChange"]}},enumerable:false,configurable:true});return t}());h.style={ios:u,md:f}}}}));