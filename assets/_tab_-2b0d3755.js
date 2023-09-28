import{k as p,o as g,c as U,p as e,B as t,q as a,m as l,C as w,V as E,L as c,Z as F,D as x,F as N,z as ve,a3 as _e,r as le,b as G,w as y,Y as X,ag as ye,v as me,ao as ge,H as ee,I as te,a as z,a2 as Ae,E as Ve,a7 as we,a8 as he,af as xe}from"./index-5d9aac78.js";import{_ as pe,v as Ce,m as Se,g as De,s as ke,a as Ie,b as Pe,c as Te,f as Ue,t as Me,d as Be,e as Ge}from"./twitter-b9859a15.js";import{_ as j}from"./AppSelect-f3f56475.js";import{_ as Z}from"./AppTextField-26dfdddf.js";import{a as s,V as P}from"./VRow-09f9705f.js";import{V as I,d as D,a as Ee,b as Le}from"./VCard-af772e5f.js";import{V as W}from"./VAvatar-f5d48048.js";import{V as q}from"./VDivider-d747098e.js";import{V as Y}from"./VForm-83fdcbd2.js";import{V as Q}from"./VCheckbox-7ee4d23a.js";import{_ as Re,a as Ke}from"./CardAddEditDialog-3e6f8967.js";import{_ as Ne}from"./PricingPlanDialog-87d91b04.js";import{_ as fe}from"./MoreBtn-3532dc2b.js";import{u as ze}from"./useInvoiceStore-d2eff1f3.js";import{a as Ye}from"./formatters-9ef7de78.js";import{V as oe}from"./VSpacer-3fb513fa.js";import{V as Oe}from"./VDataTableServer-91e9fc2e.js";import{V as He}from"./VTooltip-15c5253d.js";import{V as J}from"./VImg-ad61e20a.js";import{V as $}from"./VChip-b9ee51ce.js";import{V as qe}from"./VPagination-5630dbeb.js";import{V as Fe,a as We}from"./VAlert-8fbd1b82.js";import{V as Je,a as de}from"./VRadioGroup-a00ea594.js";import{V as be}from"./VSwitch-4bd38ea4.js";import{V as ne,a as se,c as ae}from"./VList-6a1575ca.js";import{V as ue}from"./VListItemAction-e21a8cfb.js";import{V as je}from"./VTable-2da04785.js";import{w as Qe}from"./VDataTable-078271ba.js";import{b as ce}from"./route-block-83d24a4e.js";import{V as $e,a as Ze}from"./VTabs-4edcfe5e.js";import{a as H,V as Xe}from"./VWindowItem-eb615651.js";import"./VDialog-62bfdccd.js";import"./VOverlay-f95f502b.js";import"./lazy-e9765c03.js";import"./easing-9f15041e.js";import"./transition-b17afeea.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-2d3839ec.js";import"./VInput-e9a4f1c5.js";import"./VSelect-9e13c019.js";import"./VTextField-ecd483ce.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./VCounter-886715a1.js";import"./VMenu-b6e1d5f8.js";import"./VCheckboxBtn-9f05cacf.js";import"./VSelectionControl-4f509e7e.js";import"./DialogCloseBtn-6a864be4.js";import"./AppPricing-0e7670f7.js";import"./index-61e4df1a.js";import"./ssrBoot-a2414214.js";import"./filter-c4065068.js";import"./VSlideGroup-b9c31040.js";const et="/assets/avatar-14-f13f3dfe.png",tt={class:"d-flex flex-column justify-center gap-4"},at={class:"d-flex flex-wrap gap-2"},lt=l("span",{class:"d-none d-sm-block"},"Upload new photo",-1),ot=l("span",{class:"d-none d-sm-block"},"Reset",-1),nt=l("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),st={__name:"AccountSettingsAccount",setup(L){const _={avatarImg:et,firstName:"john",lastName:"Doe",email:"johnDoe@example.com",org:"Pixinvent",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},f=p(),A=p(!1),d=p(structuredClone(_)),v=p(!1),u=[S=>!!S||"Please confirm account deactivation"],C=()=>{d.value=structuredClone(_)},V=S=>{const o=new FileReader,{files:h}=S.target;h&&h.length&&(o.readAsDataURL(h[0]),o.onload=()=>{typeof o.result=="string"&&(d.value.avatarImg=o.result)})},M=()=>{d.value.avatarImg=_.avatarImg},R=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],T=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(S,o)=>{const h=Z,B=j,r=pe;return g(),U(N,null,[e(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Profile Details"},{default:t(()=>[e(D,{class:"d-flex"},{default:t(()=>[e(W,{rounded:"",size:"100",class:"me-6",image:a(d).avatarImg},null,8,["image"]),l("form",tt,[l("div",at,[e(w,{color:"primary",onClick:o[0]||(o[0]=n=>{var m;return(m=a(f))==null?void 0:m.click()})},{default:t(()=>[e(E,{icon:"tabler-cloud-upload",class:"d-sm-none"}),lt]),_:1}),l("input",{ref_key:"refInputEl",ref:f,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:V},null,544),e(w,{type:"reset",color:"secondary",variant:"tonal",onClick:M},{default:t(()=>[ot,e(E,{icon:"tabler-refresh",class:"d-sm-none"})]),_:1})]),nt])]),_:1}),e(q),e(D,{class:"pt-2"},{default:t(()=>[e(Y,{class:"mt-6"},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{md:"6",cols:"12"},{default:t(()=>[e(h,{modelValue:a(d).firstName,"onUpdate:modelValue":o[1]||(o[1]=n=>a(d).firstName=n),label:"First Name"},null,8,["modelValue"])]),_:1}),e(s,{md:"6",cols:"12"},{default:t(()=>[e(h,{modelValue:a(d).lastName,"onUpdate:modelValue":o[2]||(o[2]=n=>a(d).lastName=n),label:"Last Name"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).email,"onUpdate:modelValue":o[3]||(o[3]=n=>a(d).email=n),label:"E-mail",type:"email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).org,"onUpdate:modelValue":o[4]||(o[4]=n=>a(d).org=n),label:"Organization"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).phone,"onUpdate:modelValue":o[5]||(o[5]=n=>a(d).phone=n),label:"Phone Number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).address,"onUpdate:modelValue":o[6]||(o[6]=n=>a(d).address=n),label:"Address"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).state,"onUpdate:modelValue":o[7]||(o[7]=n=>a(d).state=n),label:"State"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d).zip,"onUpdate:modelValue":o[8]||(o[8]=n=>a(d).zip=n),label:"Zip Code"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(d).country,"onUpdate:modelValue":o[9]||(o[9]=n=>a(d).country=n),label:"Country",items:["USA","Canada","UK","India","Australia"]},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(d).language,"onUpdate:modelValue":o[10]||(o[10]=n=>a(d).language=n),label:"Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(d).timezone,"onUpdate:modelValue":o[11]||(o[11]=n=>a(d).timezone=n),label:"Timezone",items:R,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(d).currency,"onUpdate:modelValue":o[12]||(o[12]=n=>a(d).currency=n),label:"Currency",items:T,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(w,null,{default:t(()=>[c("Save changes")]),_:1}),e(w,{color:"secondary",variant:"tonal",type:"reset",onClick:F(C,["prevent"])},{default:t(()=>[c(" Reset ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Delete Account"},{default:t(()=>[e(D,null,{default:t(()=>[l("div",null,[e(Q,{modelValue:a(v),"onUpdate:modelValue":o[13]||(o[13]=n=>x(v)?v.value=n:null),rules:u,label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(w,{disabled:!a(v),color:"error",class:"mt-3",onClick:o[14]||(o[14]=n=>A.value=!0)},{default:t(()=>[c(" Deactivate Account ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{isDialogVisible:a(A),"onUpdate:isDialogVisible":o[15]||(o[15]=n=>x(A)?A.value=n:null),"confirmation-question":"Are you sure you want to deactivate your account?","confirm-title":"Deactivated!","confirm-msg":"Your account has been deactivated successfully.","cancel-title":"Cancelled","cancel-msg":"Account Deactivation Cancelled!"},null,8,["isDialogVisible"])],64)}}};const it={class:"d-flex align-end flex-wrap gap-3"},rt={class:"invoice-list-search"},dt={class:"invoice-list-status"},ut={class:"mb-0"},ct={class:"mb-0"},mt={class:"mb-0"},pt={class:"d-flex align-center"},ft={key:1},bt={class:"d-flex flex-column"},vt={class:"text-body-1 font-weight-medium mb-0"},_t={class:"text-sm"},yt={key:1,class:"text-base"},gt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},At={class:"text-sm text-disabled mb-0"},Vt={__name:"BillingHistoryTable",setup(L){const _=ze(),f=p(""),A=p(""),d=p(),v=p(0),u=p([]),C=p([]),V=p({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),M=p(!1),R=[{title:"#ID",key:"id"},{title:"Trending",key:"trending",sortable:!1},{title:"Client",key:"client"},{title:"Total",key:"total"},{title:"Date",key:"date"},{title:"Balance",key:"balance"},{title:"Actions",key:"actions",sortable:!1}],T=(r,n,m,k,O)=>{M.value=!0,_.fetchInvoices({q:r,status:n,startDate:m,endDate:k,options:O}).then(K=>{u.value=K.data.invoices,v.value=K.data.totalInvoices,V.value.page=K.data.page}).catch(K=>{console.log(K)}),M.value=!1},S=(r,n)=>r===n?{status:"Unpaid",chip:{color:"error"}}:r===0?{status:"Paid",chip:{color:"success"}}:{status:r,chip:{variant:"text"}},o=r=>r==="Partial Payment"?{variant:"warning",icon:"tabler-circle-half-2"}:r==="Paid"?{variant:"success",icon:"tabler-circle-check"}:r==="Downloaded"?{variant:"info",icon:"tabler-download"}:r==="Draft"?{variant:"secondary",icon:"tabler-device-floppy"}:r==="Sent"?{variant:"primary",icon:"tabler-mail"}:r==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"},h=ve(()=>r=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:r}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),B=r=>{_.deleteInvoice(r).then(()=>{var n,m;T(f.value,d.value,(n=A.value)==null?void 0:n.split("to")[0],(m=A.value)==null?void 0:m.split("to")[1],V.value)}).catch(n=>{console.log(n)})};return _e(()=>{const[r,n]=A.value?A.value.split("to"):"";T(f.value,d.value,r,n,V.value)}),(r,n)=>{const m=Z,k=j,O=le("RouterLink"),K=le("IconBtn"),b=fe;return a(u)?(g(),G(I,{key:0,id:"invoice-list"},{default:t(()=>[e(D,{class:"d-flex align-center flex-wrap gap-3"},{default:t(()=>[e(w,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"},class:"me-3"},{default:t(()=>[c(" Create invoice ")]),_:1}),e(oe),l("div",it,[l("div",rt,[e(m,{modelValue:a(f),"onUpdate:modelValue":n[0]||(n[0]=i=>x(f)?f.value=i:null),placeholder:"Search Invoice",density:"compact",class:"me-3"},null,8,["modelValue"])]),l("div",dt,[e(k,{modelValue:a(d),"onUpdate:modelValue":n[1]||(n[1]=i=>x(d)?d.value=i:null),density:"compact",label:"Select Status",clearable:"","clear-icon":"tabler-x",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"],style:{"inline-size":"12rem"}},null,8,["modelValue"])])])]),_:1}),e(q),e(a(Oe),{modelValue:a(C),"onUpdate:modelValue":n[3]||(n[3]=i=>x(C)?C.value=i:null),"items-per-page":a(V).itemsPerPage,"onUpdate:itemsPerPage":n[4]||(n[4]=i=>a(V).itemsPerPage=i),page:a(V).page,"onUpdate:page":n[5]||(n[5]=i=>a(V).page=i),loading:a(M),"show-select":"","items-length":a(v),headers:R,items:a(u),class:"text-no-wrap","onUpdate:options":n[6]||(n[6]=i=>V.value=i)},{"column.trending":t(()=>[e(E,{size:"22",icon:"tabler-trending-up"})]),"item.id":t(({item:i})=>[e(O,{to:{name:"apps-invoice-preview-id",params:{id:i.value}}},{default:t(()=>[c(" #"+y(i.raw.id),1)]),_:2},1032,["to"])]),"item.trending":t(({item:i})=>[e(He,null,{activator:t(({props:re})=>[e(W,X({size:30},re,{color:o(i.raw.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(E,{size:20,icon:o(i.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[l("p",ut,y(i.raw.invoiceStatus),1),l("p",ct," Balance: "+y(i.raw.balance),1),l("p",mt," Due date: "+y(i.raw.dueDate),1)]),_:2},1024)]),"item.client":t(({item:i})=>[l("div",pt,[e(W,{size:"38",color:i.raw.avatar.length?void 0:o(i.raw.invoiceStatus).variant,variant:i.raw.avatar.length?void 0:"tonal",class:"me-3"},{default:t(()=>[i.raw.avatar.length?(g(),G(J,{key:0,src:i.raw.avatar},null,8,["src"])):(g(),U("span",ft,y(a(Ye)(i.raw.client.name)),1))]),_:2},1032,["color","variant"]),l("div",bt,[l("h6",vt,y(i.raw.client.name),1),l("span",_t,y(i.raw.client.companyEmail),1)])])]),"item.total":t(({item:i})=>[c(" $"+y(i.raw.total),1)]),"item.date":t(({item:i})=>[c(y(i.raw.issuedDate),1)]),"item.balance":t(({item:i})=>[typeof S(i.raw.balance,i.raw.total).status=="string"?(g(),G($,{key:0,color:S(i.raw.balance,i.raw.total).chip.color,label:""},{default:t(()=>[c(y(S(i.raw.balance,i.raw.total).status),1)]),_:2},1032,["color"])):(g(),U("span",yt,y(Number(S(i.raw.balance,i.raw.total).status)>0?`$${S(i.raw.balance,i.raw.total).status}`:`-$${Math.abs(Number(S(i.raw.balance,i.raw.total).status))}`),1))]),"item.actions":t(({item:i})=>[e(K,{onClick:re=>B(i.raw.id)},{default:t(()=>[e(E,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(K,{to:{name:"apps-invoice-preview-id",params:{id:i.raw.id}}},{default:t(()=>[e(E,{icon:"tabler-eye"})]),_:2},1032,["to"]),e(b,{"menu-list":a(h)(i.raw.id),"item-props":"",color:"undefined"},null,8,["menu-list"])]),bottom:t(()=>[e(q),l("div",gt,[l("p",At,y(a(ye)(a(V),a(v))),1),e(qe,{modelValue:a(V).page,"onUpdate:modelValue":n[2]||(n[2]=i=>a(V).page=i),length:Math.ceil(a(v)/a(V).itemsPerPage),"total-visible":r.$vuetify.display.xs?1:Math.ceil(a(v)/a(V).itemsPerPage)},{prev:t(i=>[e(w,X({variant:"tonal",color:"default"},i,{icon:!1}),{default:t(()=>[c(" Previous ")]),_:2},1040)]),next:t(i=>[e(w,X({variant:"tonal",color:"default"},i,{icon:!1}),{default:t(()=>[c(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","loading","items-length","items"]),e(q)]),_:1})):me("",!0)}}};const wt=l("div",{class:"mb-6"},[l("h3",{class:"text-base font-weight-medium mb-1"}," Your Current Plan is Basic "),l("p",{class:"text-base"}," A simple start for everyone ")],-1),ht=l("div",{class:"mb-6"},[l("h3",{class:"text-base font-weight-medium mb-1"}," Active until Dec 09, 2021 "),l("p",{class:"text-base"}," We will send you a notification upon Subscription expiration ")],-1),xt={class:"text-base font-weight-medium mb-1"},Ct=l("span",{class:"me-3"},"$199 Per Month",-1),St=l("p",{class:"text-base mb-0"}," Standard plan for small to medium businesses ",-1),Dt=l("span",null,"Your plan requires update",-1),kt={class:"d-flex font-weight-medium text-base mt-4 mb-2"},It=l("span",null,"Days",-1),Pt=l("span",null,"24 of 30 Days",-1),Tt=l("p",{class:"text-base mt-2 mb-0"}," 6 days remaining until your plan requires update ",-1),Ut={class:"d-flex flex-wrap gap-y-4"},Mt={class:"text-base"},Bt={class:"text-base"},Gt=l("h6",{class:"text-base font-weight-medium mb-3"}," My Cards ",-1),Et={class:"d-flex flex-column gap-y-4"},Lt={class:"text-no-wrap"},Rt={class:"my-3 text-body-1"},Kt={class:"me-2"},Nt={class:"text-base"},zt={class:"d-flex flex-column text-sm-end"},Yt={class:"d-flex flex-wrap gap-4 order-sm-0 order-1"},Ot={class:"text-sm mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0"},Ht={__name:"AccountSettingsBillingAndPlans",setup(L){const _=p("credit-debit-atm-card"),f=p(!1),A=p(!1),d=p(!1),v=p(!1),u=[{name:"Tom McBride",number:"5531234567899856",expiry:"12/23",isPrimary:!0,type:"visa",cvv:"456",image:Ce},{name:"Mildred Wagner",number:"4851234567895896",expiry:"10/27",isPrimary:!1,type:"mastercard",cvv:"123",image:Se}],C=["United States","Canada","United Kingdom","Australia","New Zealand","India","Russia","China","Japan"],V=p(),M=B=>{V.value=B,d.value=!0},R=p(0x7b5b5282deb5),T=p("john Doe"),S=p("05/24"),o=p(420),h=()=>{R.value=0x7b5b5282deb5,T.value="john Doe",S.value="05/24",o.value=420,_.value="credit-debit-atm-card"};return(B,r)=>{const n=pe,m=Ne,k=Z,O=Re,K=j;return g(),G(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Current Plan"},{default:t(()=>[e(D,null,{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[l("div",null,[wt,ht,l("div",null,[l("h3",xt,[Ct,e($,{color:"primary",size:"small",label:""},{default:t(()=>[c(" Popular ")]),_:1})]),St])])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(Fe,{color:"warning",variant:"tonal"},{default:t(()=>[e(We,{class:"mb-1"},{default:t(()=>[c(" We need your attention! ")]),_:1}),Dt]),_:1}),l("h6",kt,[It,e(oe),Pt]),e(ge,{color:"primary",rounded:"",height:"12","model-value":"75"}),Tt]),_:1}),e(s,{cols:"12"},{default:t(()=>[l("div",Ut,[e(w,{class:"me-3",onClick:r[0]||(r[0]=b=>f.value=!0)},{default:t(()=>[c(" upgrade plan ")]),_:1}),e(w,{color:"secondary",variant:"tonal",onClick:r[1]||(r[1]=b=>A.value=!0)},{default:t(()=>[c(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1}),e(n,{isDialogVisible:a(A),"onUpdate:isDialogVisible":r[2]||(r[2]=b=>x(A)?A.value=b:null),"confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!","cancel-title":"Cancelled","confirm-msg":"Your subscription cancelled successfully.","confirm-title":"Unsubscribed!"},null,8,["isDialogVisible"]),e(m,{"is-dialog-visible":a(f),"onUpdate:isDialogVisible":r[3]||(r[3]=b=>x(f)?f.value=b:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Payment Methods"},{default:t(()=>[e(D,null,{default:t(()=>[e(Y,{onSubmit:r[11]||(r[11]=F(()=>{},["prevent"]))},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(Je,{modelValue:a(_),"onUpdate:modelValue":r[4]||(r[4]=b=>x(_)?_.value=b:null),inline:""},{default:t(()=>[e(de,{value:"credit-debit-atm-card",label:"Credit/Debit/ATM Card",color:"primary"}),e(de,{value:"cod-cheque",label:"COD/Cheque",color:"primary"})]),_:1},8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[ee(e(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(k,{modelValue:a(R),"onUpdate:modelValue":r[5]||(r[5]=b=>x(R)?R.value=b:null),label:"Card Number",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{modelValue:a(T),"onUpdate:modelValue":r[6]||(r[6]=b=>x(T)?T.value=b:null),label:"Name"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6",md:"3"},{default:t(()=>[e(k,{modelValue:a(S),"onUpdate:modelValue":r[7]||(r[7]=b=>x(S)?S.value=b:null),label:"Expiry Date"},null,8,["modelValue"])]),_:1}),e(s,{cols:"6",md:"3"},{default:t(()=>[e(k,{modelValue:a(o),"onUpdate:modelValue":r[8]||(r[8]=b=>x(o)?o.value=b:null),type:"number",label:"CVV Code"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(be,{modelValue:a(v),"onUpdate:modelValue":r[9]||(r[9]=b=>x(v)?v.value=b:null),density:"compact",label:"Save card for future billing?"},null,8,["modelValue"])]),_:1})]),_:1},512),[[te,a(_)==="credit-debit-atm-card"]]),ee(l("p",Mt," Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ",512),[[te,a(_)==="cod-cheque"]]),ee(l("p",Bt," You can pay cash or make the payment via debit/credit card directly to the delivery person. ",512),[[te,a(_)==="cod-cheque"]])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[Gt,l("div",Et,[(g(),U(N,null,z(u,b=>e(I,{key:b.name,flat:"",variant:"tonal"},{default:t(()=>[e(D,{class:"d-flex flex-sm-row flex-column pa-4"},{default:t(()=>[l("div",Lt,[e(J,{src:b.image,width:"46"},null,8,["src"]),l("h4",Rt,[l("span",Kt,y(b.name),1),b.isPrimary?(g(),G($,{key:0,label:"",color:"primary",size:"small"},{default:t(()=>[c(" Primary ")]),_:1})):me("",!0)]),l("span",Nt,"**** **** **** "+y(b.number.substring(b.number.length-4)),1)]),e(oe),l("div",zt,[l("div",Yt,[e(w,{variant:"tonal",onClick:i=>M(b)},{default:t(()=>[c(" Edit ")]),_:2},1032,["onClick"]),e(w,{color:"secondary",variant:"tonal"},{default:t(()=>[c(" Delete ")]),_:1})]),l("span",Ot,"Card expires at "+y(b.expiry),1)])]),_:2},1024)]),_:2},1024)),64))]),e(O,{isDialogVisible:a(d),"onUpdate:isDialogVisible":r[10]||(r[10]=b=>x(d)?d.value=b:null),"card-details":a(V)},null,8,["isDialogVisible","card-details"])]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(w,{type:"submit"},{default:t(()=>[c(" Save changes ")]),_:1}),e(w,{color:"secondary",variant:"tonal",onClick:h},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Billing Address"},{default:t(()=>[e(D,null,{default:t(()=>[e(Y,{onSubmit:r[12]||(r[12]=F(()=>{},["prevent"]))},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"Company Name"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"Billing Email"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"Tax ID"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"VAT Number"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{dirty:"",label:"Phone Number",type:"number",prefix:"US (+1)"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(K,{label:"Country",items:C})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(k,{label:"Billing Address"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"State"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(k,{label:"Zip Code",type:"number"})]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(w,{type:"submit"},{default:t(()=>[c(" Save changes ")]),_:1}),e(w,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(Vt)]),_:1})]),_:1})}}},qt="data:image/png;base64,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",Ft=l("p",{class:"mt-n4 mb-6 text-sm"}," Display content from your connected accounts on your site ",-1),Wt=l("p",{class:"mt-n4 mb-6 text-sm"}," Display content from social accounts on your site ",-1),Jt={__name:"AccountSettingsConnections",setup(L){const _=p([{logo:De,name:"Google",subtitle:"Calendar and contacts",connected:!0},{logo:ke,name:"Slack",subtitle:"Communication",connected:!1},{logo:Ie,name:"GitHub",subtitle:"Manage your Git repositories",connected:!0},{logo:Pe,name:"MailChimp",subtitle:"Email marketing service",connected:!0},{logo:Te,name:"Asana",subtitle:"Task management",connected:!1}]),f=p([{logo:Ue,name:"Facebook",connected:!1},{logo:Me,name:"Twitter",links:{username:"@Pixinvent",link:"https://twitter.com/Pixinvents"},connected:!0},{logo:qt,name:"Instagram",links:{username:"@Pixinvent",link:"https://www.instagram.com/pixinvents/"},connected:!0},{logo:Be,name:"Dribbble",connected:!1},{logo:Ge,name:"Behance",connected:!1}]);return(A,d)=>{const v=le("IconBtn");return g(),G(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(I,{title:"Connected Accounts"},{default:t(()=>[e(D,null,{default:t(()=>[Ft,e(ne,{class:"card-list"},{default:t(()=>[(g(!0),U(N,null,z(a(_),u=>(g(),G(se,{key:u.logo,title:u.name},{prepend:t(()=>[e(W,{start:""},{default:t(()=>[e(J,{src:u.logo,height:"30"},null,8,["src"])]),_:2},1024)]),append:t(()=>[e(ue,null,{default:t(()=>[e(be,{modelValue:u.connected,"onUpdate:modelValue":C=>u.connected=C,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),default:t(()=>[e(ae,{class:"text-xs"},{default:t(()=>[c(y(u.subtitle),1)]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(I,{title:"Social Accounts"},{default:t(()=>[e(D,null,{default:t(()=>[Wt,e(ne,{class:"card-list"},{default:t(()=>[(g(!0),U(N,null,z(a(f),u=>(g(),G(se,{key:u.logo,title:u.name},{prepend:t(()=>[e(W,{start:""},{default:t(()=>[e(J,{src:u.logo,height:"30"},null,8,["src"])]),_:2},1024)]),append:t(()=>[e(ue,null,{default:t(()=>[e(v,{variant:"tonal",color:u.connected?"error":"secondary",class:"rounded"},{default:t(()=>[e(E,{size:"20",icon:u.connected?"tabler-trash":"tabler-link"},null,8,["icon"])]),_:2},1032,["color"])]),_:2},1024)]),default:t(()=>{var C,V;return[(C=u.links)!=null&&C.link?(g(),G(ae,{key:0,tag:"a",href:(V=u.links)==null?void 0:V.link,style:{opacity:"1"}},{default:t(()=>{var M;return[c(y((M=u.links)==null?void 0:M.username),1)]}),_:2},1032,["href"])):(g(),G(ae,{key:1,class:"text-xs"},{default:t(()=>[c(" Not Connected ")]),_:1}))]}),_:2},1032,["title"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},jt=l("p",{class:"text-sm mt-2 mb-0"},[c(" We need permission from your browser to show notifications. "),l("span",{class:"font-weight-bold"},"Request Permission")],-1),Qt=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," Type "),l("th",{scope:"col"}," EMAIL "),l("th",{scope:"col"}," BROWSER "),l("th",{scope:"col"}," App ")])],-1),$t=l("h6",{class:"text-base font-weight-medium mb-3"}," When should we send you notifications? ",-1),Zt={class:"d-flex flex-wrap gap-4 mt-4"},Xt={__name:"AccountSettingsNotification",setup(L){const _=p([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),f=p("Only when I'm online");return(A,d)=>{const v=j;return g(),G(I,null,{default:t(()=>[e(Ee,null,{default:t(()=>[e(Le,null,{default:t(()=>[c("Recent Devices")]),_:1}),jt]),_:1}),e(D,null,{default:t(()=>[e(je,{class:"text-no-wrap rounded border"},{default:t(()=>[Qt,l("tbody",null,[(g(!0),U(N,null,z(a(_),u=>(g(),U("tr",{key:u.type},[l("td",null,y(u.type),1),l("td",null,[e(Q,{modelValue:u.email,"onUpdate:modelValue":C=>u.email=C},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(Q,{modelValue:u.browser,"onUpdate:modelValue":C=>u.browser=C},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(Q,{modelValue:u.app,"onUpdate:modelValue":C=>u.app=C},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1}),e(q),e(D,null,{default:t(()=>[e(Y,{onSubmit:d[1]||(d[1]=F(()=>{},["prevent"]))},{default:t(()=>[$t,e(P,null,{default:t(()=>[e(s,{cols:"12",sm:"6"},{default:t(()=>[e(v,{modelValue:a(f),"onUpdate:modelValue":d[0]||(d[0]=u=>x(f)?f.value=u:null),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),l("div",Zt,[e(w,{type:"submit"},{default:t(()=>[c(" Save Changes ")]),_:1}),e(w,{color:"secondary",variant:"tonal",type:"reset"},{default:t(()=>[c(" Reset ")]),_:1})])]),_:1})]),_:1})]),_:1})}}};const ie=L=>(we("data-v-058e1ec1"),L=L(),he(),L),ea=ie(()=>l("h6",{class:"text-base font-weight-medium mb-3"}," Password Requirements: ",-1)),ta=ie(()=>l("h6",{class:"text-base font-weight-medium mb-3"}," Two factor authentication is not enabled yet. ",-1)),aa=ie(()=>l("p",null,[c(" Two-factor authentication adds an additional layer of security to your account by "),l("br"),c(" requiring more than just a password to log in. "),l("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1)),la={class:"d-flex align-center flex-wrap mb-3"},oa={class:"text-h6 me-3"},na={class:"d-flex align-center text-base font-weight-medium mb-2"},sa={class:"text-base me-3"},ia={class:"cursor-pointer"},ra={class:"d-flex"},da={__name:"AccountSettingsSecurity",setup(L){const _=p(!1),f=p(!1),A=p(!1),d=p(""),v=p(""),u=p(""),C=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],V=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],M=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"recentActivity"}],R=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"tabler-brand-windows",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"tabler-device-mobile",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"tabler-brand-android",color:"success"}},{browser:"Chrome on MacOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"tabler-brand-apple",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"tabler-brand-windows",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"tabler-brand-android",color:"success"}}],T=p(!1);return(S,o)=>{const h=Z,B=j,r=fe,n=Ke;return g(),U(N,null,[e(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Change Password"},{default:t(()=>[e(Y,null,{default:t(()=>[e(D,{class:"pt-0"},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(d),"onUpdate:modelValue":o[0]||(o[0]=m=>x(d)?d.value=m:null),type:a(_)?"text":"password","append-inner-icon":a(_)?"tabler-eye-off":"tabler-eye",label:"Current Password","onClick:appendInner":o[1]||(o[1]=m=>_.value=!a(_))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(v),"onUpdate:modelValue":o[2]||(o[2]=m=>x(v)?v.value=m:null),type:a(f)?"text":"password","append-inner-icon":a(f)?"tabler-eye-off":"tabler-eye",label:"New Password","onClick:appendInner":o[3]||(o[3]=m=>f.value=!a(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(h,{modelValue:a(u),"onUpdate:modelValue":o[4]||(o[4]=m=>x(u)?u.value=m:null),type:a(A)?"text":"password","append-inner-icon":a(A)?"tabler-eye-off":"tabler-eye",label:"Confirm New Password","onClick:appendInner":o[5]||(o[5]=m=>A.value=!a(A))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(D,null,{default:t(()=>[ea,e(ne,{class:"card-list"},{default:t(()=>[(g(),U(N,null,z(C,m=>e(se,{key:m,title:m,class:"text-medium-emphasis"},{prepend:t(()=>[e(E,{size:"8",icon:"tabler-circle",class:"me-3"})]),_:2},1032,["title"])),64))]),_:1})]),_:1}),e(D,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(w,null,{default:t(()=>[c("Save changes")]),_:1}),e(w,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Two-steps verification"},{default:t(()=>[e(D,null,{default:t(()=>[ta,aa,e(w,{onClick:o[6]||(o[6]=m=>T.value=!0)},{default:t(()=>[c(" Enable 2FA ")]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Create an API key"},{default:t(()=>[e(P,{"no-gutters":""},{default:t(()=>[e(s,{cols:"12",md:"5","order-md":"0",order:"1"},{default:t(()=>[e(D,null,{default:t(()=>[e(Y,{onSubmit:o[7]||(o[7]=F(()=>{},["prevent"]))},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(B,{label:"Choose the API key type you want to create",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(h,{label:"Name the API key"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(w,{type:"submit",block:""},{default:t(()=>[c(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",md:"7",order:"0","order-md":"1",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(J,{src:S.laptopGirl,width:200,style:Ve(S.$vuetify.display.smAndDown?"":"position: absolute; bottom: 0;")},null,8,["src","style"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"API Key List & Access"},{default:t(()=>[e(D,null,{default:t(()=>[c(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(D,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[(g(),U(N,null,z(V,m=>e(I,{key:m.key,flat:"",variant:"tonal",class:"pa-4"},{default:t(()=>[e(r,{"menu-list":[{prependIcon:"tabler-pencil",title:"Edit",value:"Edit"},{prependIcon:"tabler-trash",title:"Delete",value:"Delete"}],"item-props":"",class:"position-absolute server-close-btn"}),l("div",la,[l("h6",oa,y(m.name),1),e($,{label:"",color:"primary",size:"small"},{default:t(()=>[c(y(m.permission),1)]),_:2},1024)]),l("div",na,[l("h6",sa,y(m.key),1),l("div",ia,[e(E,{icon:"tabler-copy",class:"text-disabled"})])]),l("span",null,"Created on "+y(m.createdOn),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(I,{title:"Recent Devices"},{default:t(()=>[e(a(Qe),{headers:M,items:R,"hide-default-footer":""},{"item.browser":t(({item:m})=>[l("div",ra,[e(E,{start:"",icon:m.raw.deviceIcon.icon,color:m.raw.deviceIcon.color},null,8,["icon","color"]),l("span",null,y(m.raw.browser),1)])]),bottom:t(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{isDialogVisible:a(T),"onUpdate:isDialogVisible":o[8]||(o[8]=m=>x(T)?T.value=m:null)},null,8,["isDialogVisible"])],64)}}},ua=Ae(da,[["__scopeId","data-v-058e1ec1"]]),ca={__name:"[tab]",setup(L){const _=xe(),f=p(_.params.tab),A=[{title:"Account",icon:"tabler-users",tab:"account"},{title:"Security",icon:"tabler-lock",tab:"security"},{title:"Billing & Plans",icon:"tabler-file-text",tab:"billing-plans"},{title:"Notifications",icon:"tabler-bell",tab:"notification"},{title:"Connections",icon:"tabler-link",tab:"connection"}];return(d,v)=>(g(),U("div",null,[e($e,{modelValue:a(f),"onUpdate:modelValue":v[0]||(v[0]=u=>x(f)?f.value=u:null),class:"v-tabs-pill"},{default:t(()=>[(g(),U(N,null,z(A,u=>e(Ze,{key:u.icon,value:u.tab,to:{name:"pages-account-settings-tab",params:{tab:u.tab}}},{default:t(()=>[e(E,{size:"20",start:"",icon:u.icon},null,8,["icon"]),c(" "+y(u.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),e(Xe,{modelValue:a(f),"onUpdate:modelValue":v[1]||(v[1]=u=>x(f)?f.value=u:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(H,{value:"account"},{default:t(()=>[e(st)]),_:1}),e(H,{value:"security"},{default:t(()=>[e(ua)]),_:1}),e(H,{value:"billing-plans"},{default:t(()=>[e(Ht)]),_:1}),e(H,{value:"notification"},{default:t(()=>[e(Xt)]),_:1}),e(H,{value:"connection"},{default:t(()=>[e(Jt)]),_:1})]),_:1},8,["modelValue"])]))}};typeof ce=="function"&&ce(ca);export{ca as default};
