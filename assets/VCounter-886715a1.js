import{as as i,at as s,aJ as u,z as r,az as l,p as n,H as m,I as c}from"./index-5d9aac78.js";import{m as v,M as d}from"./transition-b17afeea.js";const V=i()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...s(),...v({transition:{component:u}})},setup(e,o){let{slots:a}=o;const t=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return l(()=>n(d,{transition:e.transition},{default:()=>[m(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[c,e.active]])]})),{}}});export{V};
