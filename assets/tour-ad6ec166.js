import{dP as p,X as f,aQ as m,o as b,c as x,p as o,B as n,C as h,q as c,L as y,af as _}from"./index-5d9aac78.js";import{S as k}from"./shepherd.esm-7d7e64e6.js";import{d as B,V as w}from"./VCard-af772e5f.js";import"./VAvatar-f5d48048.js";import"./VImg-ad61e20a.js";import"./transition-b17afeea.js";const g="$shepherd",i=(...e)=>new k.Tour(...e),l=function(a){l.installed||(l.installed=!0,a.config.globalProperties[g]=i)},C={install:l};if({}.ES_BUILD==="false"){let e=null;typeof window<"u"?e=window.Vue:typeof global<"u"&&(e=global.Vue),e&&e.use(C)}const O={__name:"tour",setup(e){const a=_(),{ctrl_k:u,meta_k:d}=p();let t=null;return f([u,d,()=>a.path],()=>{t.isActive()&&t.cancel()}),m(()=>{const s=document.querySelector(".layout-navbar");t=i({useModalOverlay:!0,stepsContainer:document.querySelector(".layout-wrapper"),modelContainer:document.querySelector(".layout-wrapper"),defaultStepOptions:{cancelIcon:{enabled:!0},modalOverlayOpeningPadding:2,modalOverlayOpeningRadius:5}}),t.addSteps([{id:"welcome",title:"Welcome",arrow:!0,attachTo:{element:s,on:"bottom"},text:"Welcome to our tour page, Guide users to the key features of the product.",buttons:[{action:t.cancel,classes:"backBtnClass",text:"Back"},{action:t.next,text:"Next",classes:"nextBtnClass"}]},{id:"notification",title:"Notifications",arrow:!0,attachTo:{element:document.querySelector("#notification-btn"),on:"bottom"},text:"Manage your notifications and stay up-to-date with latest updates.",buttons:[{label:"Back",text:"Back",action:t.back,classes:"backBtnClass"},{label:"Next",text:"Next",action:t.next,classes:"nextBtnClass"}]},{id:"footer",title:"Footer",arrow:!0,attachTo:{element:document.querySelector(".layout-footer"),on:"bottom"},text:"Footer section of the page.",buttons:[{label:"Back",text:"Back",action:t.back,classes:"backBtnClass"},{label:"Finish",text:"Finish",action:t.complete,classes:"nextBtnClass"}]}])}),(s,r)=>(b(),x("div",null,[o(w,{title:"Tour"},{default:n(()=>[o(B,null,{default:n(()=>[o(h,{variant:"elevated",onClick:r[0]||(r[0]=()=>{c(t)&&c(t).start()})},{default:n(()=>[y(" Start Tour ")]),_:1})]),_:1})]),_:1})]))}};export{O as default};