import{_ as T}from"./AppTextField-26dfdddf.js";import{k as i,o as N,b as R,B as t,p as e,m as l,q as s,Z as A,D as b,C as F,L as _,af as q,t as M,r as P,a5 as j}from"./index-5d9aac78.js";import{u as J}from"./useAppAbility-4372c6fd.js";import{_ as O}from"./AuthProvider-c0b6170c.js";import{u as x}from"./useGenerateImageVariant-cd5a50ae.js";import{a as $}from"./auth-tree-5ec3bc16.js";import{a as E,b as U,c as G,d as W}from"./auth-v2-login-illustration-light-19d5c0bb.js";import{m as Z,a as z}from"./misc-mask-light-eb104613.js";import{r as w,e as H}from"./validators-50c95554.js";import{b as y}from"./route-block-83d24a4e.js";import{V as g}from"./VImg-ad61e20a.js";import{a as r,V as v}from"./VRow-09f9705f.js";import{V as K,d as k}from"./VCard-af772e5f.js";import{V as Q}from"./VForm-83fdcbd2.js";import{V as I}from"./VDivider-d747098e.js";import"./VInput-e9a4f1c5.js";import"./transition-b17afeea.js";import"./VTextField-ecd483ce.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-886715a1.js";import"./index-61e4df1a.js";import"./VAvatar-f5d48048.js";const X="/assets/weaplanblue-f8146585.png";const Y={class:"position-relative card-gradient rounded-lg w-100 ma-8 me-0"},ee={class:"d-flex align-center justify-center w-100 h-100"},te=l("h5",{class:"text-h5"}," Welcome back ! ",-1),se=l("p",{class:"mb-0"}," Please sign-in to your account ",-1),ae={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},oe=l("div",{class:"text-decoration-underline"}," Forgot Password ? ",-1),re=l("span",{class:"mx-4"},"or",-1),le={__name:"login",setup(ie){x(W,G,U,E,!0);const S=x(z,Z),m=i(!1),V=q(),L=M(),B=J(),f=i({email:void 0,password:void 0}),h=i(),u=i("demo@weplan.com"),c=i("demo");i(!1);const C=()=>{j.post("/auth/login",{email:u.value,password:c.value}).then(o=>{const{accessToken:a,userData:d,userAbilities:n}=o.data;localStorage.setItem("userAbilities",JSON.stringify(n)),B.update(n),localStorage.setItem("userData",JSON.stringify(d)),localStorage.setItem("accessToken",JSON.stringify(a)),L.replace(V.query.to?String(V.query.to):"/")}).catch(o=>{const{errors:a}=o.response.data;f.value=a,console.error(o.response.data)})},D=()=>{var o;(o=h.value)==null||o.validate().then(({valid:a})=>{a&&C()})};return(o,a)=>{const d=T,n=P("RouterLink");return N(),R(v,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:t(()=>[e(r,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[l("div",Y,[l("div",ee,[e(g,{"max-width":"400",src:s($),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(g,{src:s(S),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(r,{cols:"12",lg:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(K,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(k,null,{default:t(()=>[e(g,{"max-width":"150",src:s(X)},null,8,["src"]),te,se]),_:1}),e(k,null,{default:t(()=>[e(s(Q),{ref_key:"refVForm",ref:h,onSubmit:A(D,["prevent"])},{default:t(()=>[e(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(d,{modelValue:s(u),"onUpdate:modelValue":a[0]||(a[0]=p=>b(u)?u.value=p:null),label:"Email",type:"email",autofocus:"",rules:[s(w),s(H)],"error-messages":s(f).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(d,{modelValue:s(c),"onUpdate:modelValue":a[1]||(a[1]=p=>b(c)?c.value=p:null),label:"Password",rules:[s(w)],type:s(m)?"text":"password","error-messages":s(f).password,"append-inner-icon":s(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=p=>m.value=!s(m))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l("div",ae,[e(n,{class:"text-primary ms-2 mb-1",to:""},{default:t(()=>[oe]),_:1})]),e(F,{block:"",type:"submit"},{default:t(()=>[_(" Sign In ")]),_:1})]),_:1}),e(r,{cols:"12",class:"d-flex align-center mb-0"},{default:t(()=>[e(I),re,e(I)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:t(()=>[_(" Sign in with "),e(O)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:t(()=>[e(n,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[_(" Create account ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof y=="function"&&y(le);export{le as default};
