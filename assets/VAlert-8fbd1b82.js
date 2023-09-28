import{c as z}from"./VAvatar-f5d48048.js";import{as as A,aB as L,at as F,aS as w,bi as R,a$ as j,be as E,bF as O,b1 as Y,aY as G,au as M,br as N,aD as q,z as o,av as H,bt as J,aT as K,bj as Q,b5 as U,bf as W,bG as X,b7 as Z,aw as p,ax as ee,aF as ae,p as t,bu as te,V as le,bl as d,C as ne,Y as se}from"./index-5d9aac78.js";const oe=z("v-alert-title"),ie=["success","info","warning","error"],ue=A()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:L,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ie.includes(e)},...F(),...w(),...R(),...j(),...E(),...O(),...Y(),...G(),...M(),...N({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const i=q(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:b}=H(e),{colorClasses:f,colorStyles:k,variantClasses:C}=J(y),{densityClasses:P}=K(e),{dimensionStyles:V}=Q(e),{elevationClasses:x}=U(e),{locationStyles:g}=W(e),{positionClasses:S}=X(e),{roundedClasses:_}=Z(e),{textColorClasses:T,textColorStyles:B}=p(ee(e,"borderColor")),{t:h}=ae(),r=o(()=>({"aria-label":h(e.closeLabel),onClick(s){i.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),$=!!(a.title||e.title),D=!!(e.text||a.text),I=!!(a.close||e.closable);return i.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},b.value,f.value,P.value,x.value,S.value,_.value,C.value,e.class],style:[k.value,V.value,g.value,e.style],role:"alert"},{default:()=>{var c,u;return[te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",T.value],style:B.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(le,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[$&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),D&&(((c=a.text)==null?void 0:c.call(a))??e.text),(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),I&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:r.value})]}}):t(ne,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},r.value),null)])]}})}}});export{ue as V,oe as a};