import{V as z}from"./VSlideGroupItem-fbd928e9.js";import{k as b,z as h,a3 as x,o as t,b as c,B as S,c as o,F as y,a as w,m as i,s as g,q as a,p as A,V as d,w as p,v as u,D as C}from"./index-5d9aac78.js";import{V as q}from"./VSlideGroup-b9c31040.js";const B=["onClick"],N={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center gap-2"},E={class:"stepper-icon"},D={class:"stepper-title font-weight-medium mb-0"},F={key:0,class:"stepper-subtitle"},G={class:"text-sm"},I={key:1,class:"d-flex align-center gap-x-2"},L={class:"d-flex align-center gap-2"},j={class:"d-flex align-center justify-center",style:{"block-size":"24px","inline-size":"24px"}},H={key:0,class:"stepper-step-indicator"},O={class:"text-h4 step-number"},R={style:{"line-height":"0"}},U={class:"text-sm font-weight-medium step-title"},$={key:0,class:"text-xs step-subtitle"},J={key:0,class:"stepper-step-line"},T={__name:"AppStepper",props:{items:{type:Array,required:!0},currentStep:{type:Number,required:!1,default:0},direction:{type:String,required:!1,default:"horizontal"},iconSize:{type:[String,Number],required:!1,default:52},isActiveStepValid:{type:Boolean,required:!1,default:void 0}},emits:["update:currentStep"],setup(k,{emit:f}){const e=k,r=b(e.currentStep||0),V=h(()=>n=>n<r.value?"stepper-steps-completed":n===r.value?"stepper-steps-active":""),m=h(()=>n=>e.direction==="horizontal"&&e.items.length-1!==n),_=h(()=>e.isActiveStepValid!==void 0);return x(()=>{e.currentStep!==void 0&&e.currentStep<e.items.length&&e.currentStep>=0&&(r.value=e.currentStep),f("update:currentStep",r.value)}),(n,v)=>(t(),c(q,{modelValue:a(r),"onUpdate:modelValue":v[0]||(v[0]=s=>C(r)?r.value=s:null),class:"app-stepper","show-arrows":"",direction:e.direction},{default:S(()=>[(t(!0),o(y,null,w(e.items,(s,l)=>(t(),c(z,{key:s.title,value:l},{default:S(()=>[i("div",{class:g(["cursor-pointer mx-1",[!e.isActiveStepValid&&a(_)&&"stepper-steps-invalid",a(V)(l)]]),onClick:K=>!a(_)&&f("update:currentStep",l)},[s.icon?(t(),o("div",N,[i("div",{class:g(["d-flex align-center gap-4 step-wrapper",[e.direction==="horizontal"&&"flex-column"]])},[i("div",E,[A(d,{icon:s.icon,size:s.size||e.iconSize},null,8,["icon","size"])]),i("div",null,[i("p",D,p(s.title),1),s.subtitle?(t(),o("span",F,[i("span",G,p(s.subtitle),1)])):u("",!0)])],2),a(m)(l)?(t(),c(d,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"24",icon:"tabler-chevron-right"})):u("",!0)])):(t(),o("div",I,[i("div",L,[i("div",j,[l>=a(r)?(t(),o(y,{key:0},[!a(_)||e.isActiveStepValid||l!==a(r)?(t(),o("div",H)):(t(),c(d,{key:1,icon:"tabler-alert-circle",size:"24",color:"error"}))],64)):(t(),c(d,{key:1,icon:"custom-check-circle",class:"stepper-step-icon",size:"24"}))]),i("h4",O,p((l+1).toString().padStart(2,"0")),1)]),i("div",R,[i("h6",U,p(s.title),1),s.subtitle?(t(),o("span",$,p(s.subtitle),1)):u("",!0)]),a(m)(l)?(t(),o("div",J)):u("",!0)]))],10,B)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction"]))}};export{T as _};
