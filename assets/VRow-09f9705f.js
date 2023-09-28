import{aW as c,aX as u,as as b,at as m,aY as C,z as N,h as j}from"./index-5d9aac78.js";const k=(()=>c.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}))(),v=(()=>c.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),L=(()=>c.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),y={col:Object.keys(k),offset:Object.keys(v),order:Object.keys(L)};function G(t,a,e){let l=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");l+=`-${n}`}return t==="col"&&(l="v-"+l),t==="col"&&(e===""||e===!0)||(l+=`-${e}`),l.toLowerCase()}}const O=["auto","start","end","center","baseline","stretch"],K=b()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...k,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>O.includes(t)},...m(),...C()},setup(t,a){let{slots:e}=a;const l=N(()=>{const n=[];let s;for(s in y)y[s].forEach(o=>{const i=t[o],g=G(s,o,i);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return j(t.tag,{class:[l.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],V=["space-between","space-around","space-evenly"];function d(t,a){return c.reduce((e,l)=>{const n=t+u(l);return e[n]=a(),e},{})}const _=[...f,"baseline","stretch"],$=t=>_.includes(t),h=d("align",()=>({type:String,default:null,validator:$})),I=[...f,...V],w=t=>I.includes(t),E=d("justify",()=>({type:String,default:null,validator:w})),T=[...f,...V,"stretch"],P=t=>T.includes(t),A=d("alignContent",()=>({type:String,default:null,validator:P})),S={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(A)},U={align:"align",justify:"justify",alignContent:"align-content"};function B(t,a,e){let l=U[t];if(e!=null){if(a){const n=a.replace(t,"");l+=`-${n}`}return l+=`-${e}`,l.toLowerCase()}}const R=b()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:P},...A,...m(),...C()},setup(t,a){let{slots:e}=a;const l=N(()=>{const n=[];let s;for(s in S)S[s].forEach(r=>{const o=t[r],i=B(s,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return j(t.tag,{class:["v-row",l.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{R as V,K as a};