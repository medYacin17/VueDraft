import{k as c,o as b,c as x,m as o,p as e,q as t,h as f,Q as m,B as a,M as _,L as u,w as g,Z as w,C as k,r as C}from"./index-5d9aac78.js";import{_ as T}from"./AppTextField-26dfdddf.js";import{_ as B}from"./AuthProvider-c0b6170c.js";import{a as L,b as S}from"./auth-v1-top-shape-c5f58476.js";import{b as V}from"./route-block-83d24a4e.js";import{a as M,b as P,d as y,V as U}from"./VCard-af772e5f.js";import{V as N}from"./VForm-83fdcbd2.js";import{V as R,a as n}from"./VRow-09f9705f.js";import{V as j}from"./VCheckbox-7ee4d23a.js";import{V as A}from"./VInput-e9a4f1c5.js";import{V as v}from"./VDivider-d747098e.js";import"./VTextField-ecd483ce.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./easing-9f15041e.js";import"./VImg-ad61e20a.js";import"./transition-b17afeea.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-886715a1.js";import"./VAvatar-f5d48048.js";import"./VCheckboxBtn-9f05cacf.js";import"./VSelectionControl-4f509e7e.js";const I={class:"auth-wrapper d-flex align-center justify-center pa-4"},$={class:"position-relative my-sm-16"},D={class:"d-flex"},E=o("h5",{class:"text-h5 mb-1"}," Adventure starts here 🚀 ",-1),F=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),H={class:"d-flex align-center mt-2 mb-4"},q=o("span",{class:"me-1"},"I agree to",-1),z=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),Q=o("span",null,"Already have an account?",-1),Z=o("span",{class:"mx-4"},"or",-1),G={__name:"register-v1",setup(J){const l=c({username:"",email:"",password:"",privacyPolicies:!1}),r=c(!1);return(p,s)=>{const d=T,h=C("RouterLink");return b(),x("div",I,[o("div",$,[e(t(m),{nodes:("h"in p?p.h:t(f))("div",{innerHTML:t(L)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(m),{nodes:("h"in p?p.h:t(f))("div",{innerHTML:t(S)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(U,{class:"auth-card pa-4","max-width":"448"},{default:a(()=>[e(M,{class:"justify-center"},{prepend:a(()=>[o("div",D,[e(t(m),{nodes:t(_).app.logo},null,8,["nodes"])])]),default:a(()=>[e(P,{class:"font-weight-bold text-h5 text-capitalize py-1"},{default:a(()=>[u(g(t(_).app.title),1)]),_:1})]),_:1}),e(y,{class:"pt-2"},{default:a(()=>[E,F]),_:1}),e(y,null,{default:a(()=>[e(N,{onSubmit:s[5]||(s[5]=w(()=>{},["prevent"]))},{default:a(()=>[e(R,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).username,"onUpdate:modelValue":s[0]||(s[0]=i=>t(l).username=i),autofocus:"",label:"Username"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).email,"onUpdate:modelValue":s[1]||(s[1]=i=>t(l).email=i),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).password,"onUpdate:modelValue":s[2]||(s[2]=i=>t(l).password=i),label:"Password",type:t(r)?"text":"password","append-inner-icon":t(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=i=>r.value=!t(r))},null,8,["modelValue","type","append-inner-icon"]),o("div",H,[e(j,{id:"privacy-policy",modelValue:t(l).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=i=>t(l).privacyPolicies=i),inline:""},null,8,["modelValue"]),e(A,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[q,z]),_:1})]),e(k,{block:"",type:"submit"},{default:a(()=>[u(" Sign up ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:a(()=>[Q,e(h,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v1"}},{default:a(()=>[u(" Sign in instead ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(v),Z,e(v)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:a(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof V=="function"&&V(G);export{G as default};