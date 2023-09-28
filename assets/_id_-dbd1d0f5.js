import{u as be}from"./useUserListStore-c419e639.js";import{_ as he,m as ve,v as ye,g as xe,s as we,a as Ae,b as Ve,c as De,f as Pe,t as Ce,d as ke,e as $e}from"./twitter-b9859a15.js";import{_ as Ue}from"./CustomRadios-2f29c118.js";import{_ as Te}from"./DialogCloseBtn-6a864be4.js";import{V as P,a as ne,b as ie,e as Ie,d as y}from"./VCard-af772e5f.js";import{k as _,o as b,b as k,B as t,p as e,L as o,q as l,C as A,m as a,D as I,a2 as Se,c as U,w as i,V as $,v as X,F as j,a as M,ao as ae,a7 as Be,a8 as je,z as Ee,a3 as ze,r as ee,Y as R,ag as re,ai as Oe,dT as Ne,dU as Le,dV as We,dW as Me,Z as Fe,af as Re}from"./index-5d9aac78.js";import{V as N}from"./VDivider-d747098e.js";import{V as He}from"./VDialog-62bfdccd.js";import{a as qe,_ as Qe}from"./AddEditAddressDialog-0377f312.js";import{a as Je,k as se}from"./formatters-9ef7de78.js";import{a as v,V as B}from"./VRow-09f9705f.js";import{V as O}from"./VAvatar-f5d48048.js";import{V as de}from"./VImg-ad61e20a.js";import{V as H}from"./VChip-b9ee51ce.js";import{V as J,a as T,b as z,c as oe}from"./VList-6a1575ca.js";import{V as G}from"./VSpacer-3fb513fa.js";import{_ as ce}from"./AppTextField-26dfdddf.js";import{_ as ue}from"./AppSelect-f3f56475.js";import{_ as Ge}from"./MoreBtn-3532dc2b.js";import{u as Xe}from"./useInvoiceStore-d2eff1f3.js";import{V as Ye}from"./VDataTableServer-91e9fc2e.js";import{V as Ze}from"./VTooltip-15c5253d.js";import{V as me}from"./VPagination-5630dbeb.js";import{x as Ke,p as et,s as tt}from"./xamarin-9db23106.js";import{w as pe}from"./VDataTable-078271ba.js";import{V as at,a as Q}from"./VTimelineItem-8388e39b.js";import{_ as lt,a as st}from"./CardAddEditDialog-3e6f8967.js";import{V as _e,a as fe}from"./VAlert-8fbd1b82.js";import{V as te}from"./VTable-2da04785.js";import{V as ot}from"./VSwitch-4bd38ea4.js";import{V as K}from"./VCheckbox-7ee4d23a.js";import{V as nt}from"./VForm-83fdcbd2.js";import{V as it,a as rt}from"./VTabs-4edcfe5e.js";import{V as dt,a as F}from"./VWindowItem-eb615651.js";import"./VInput-e9a4f1c5.js";import"./transition-b17afeea.js";import"./VRadioGroup-a00ea594.js";import"./VSelectionControl-4f509e7e.js";import"./VOverlay-f95f502b.js";import"./lazy-e9765c03.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-2d3839ec.js";import"./AppTextarea-6c7e3a5f.js";import"./VTextarea-d919e812.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./VCounter-886715a1.js";import"./CustomRadiosWithIcon-8804f292.js";import"./index-61e4df1a.js";import"./ssrBoot-a2414214.js";import"./VTextField-ecd483ce.js";import"./VSelect-9e13c019.js";import"./VMenu-b6e1d5f8.js";import"./VCheckboxBtn-9f05cacf.js";import"./filter-c4065068.js";import"./VSlideGroup-b9c31040.js";const ct=a("p",{class:"font-weight-medium mb-2"}," User current plan is standard plan ",-1),ut={class:"d-flex justify-space-between flex-wrap"},mt=a("div",{class:"d-flex align-center me-3"},[a("sup",{class:"text-primary"},"$"),a("h3",{class:"text-h3 text-primary"}," 99 "),a("sub",{class:"text-body-1 mt-3"},"/ month")],-1),ge={__name:"UserUpgradePlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(C,{emit:n}){const h=C,m=_("standard"),r=[{desc:"Standard - $99/month",title:"Standard",value:"standard"},{desc:"Basic - $0/month",title:"Basic",value:"basic"},{desc:"Enterprise - $499/month",title:"Enterprise",value:"enterprice"},{desc:"Company - $999/month",title:"Company",value:"company"}],f=_(!1),d=u=>{n("update:isDialogVisible",u)};return(u,s)=>{const V=Te,c=Ue,g=he;return b(),k(He,{width:u.$vuetify.display.smAndDown?"auto":560,"model-value":h.isDialogVisible,"onUpdate:modelValue":d},{default:t(()=>[e(V,{onClick:s[0]||(s[0]=S=>d(!1))}),e(P,{class:"py-8"},{default:t(()=>[e(V,{variant:"text",size:"small",onClick:s[1]||(s[1]=S=>u.$emit("update:isDialogVisible",!1))}),e(ne,{class:"text-center"},{default:t(()=>[e(ie,{class:"text-h5 mb-5"},{default:t(()=>[o(" Upgrade Plan ")]),_:1}),e(Ie,null,{default:t(()=>[o(" Choose the best plan for user. ")]),_:1})]),_:1}),e(y,{class:"d-flex align-center flex-column flex-sm-nowrap px-15"},{default:t(()=>[e(c,{"radio-content":r,"selected-radio":l(m),"grid-column":{cols:"12",sm:"6"}},null,8,["selected-radio"]),e(A,{class:"mt-5"},{default:t(()=>[o(" Upgrade ")]),_:1})]),_:1}),e(N,{class:"my-3"}),e(y,{class:"px-15"},{default:t(()=>[ct,a("div",ut,[mt,e(A,{color:"error",variant:"tonal",class:"mt-3",onClick:s[2]||(s[2]=S=>f.value=!0)},{default:t(()=>[o(" Cancel Subscription ")]),_:1})])]),_:1}),e(g,{isDialogVisible:l(f),"onUpdate:isDialogVisible":s[3]||(s[3]=S=>I(f)?f.value=S:null),"cancel-title":"Cancelled","confirm-title":"Unsubscribed!","confirm-msg":"Your subscription cancelled successfully.","confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!"},null,8,["isDialogVisible"])]),_:1})]),_:1},8,["width","model-value"])}}};const L=C=>(Be("data-v-737cad80"),C=C(),je(),C),pt={key:1,class:"text-5xl font-weight-medium"},_t={class:"text-h4 mt-4"},ft={class:"d-flex align-center me-8"},gt={class:"text-h6"},bt=L(()=>a("span",{class:"text-sm"},"Task Done",-1)),ht={class:"d-flex align-center me-4"},vt={class:"text-h6"},yt=L(()=>a("span",{class:"text-sm"},"Project Done",-1)),xt=L(()=>a("p",{class:"text-sm text-uppercase text-disabled"}," Details ",-1)),wt={class:"text-h6"},At={class:"text-body-1"},Vt={class:"text-h6"},Dt={class:"text-body-1"},Pt={class:"text-h6"},Ct={class:"text-h6"},kt={class:"text-capitalize text-body-1"},$t={class:"text-h6"},Ut={class:"text-body-1"},Tt={class:"text-h6"},It={class:"text-body-1"},St={class:"text-h6"},Bt={class:"text-body-1"},jt={class:"text-h6"},Et={class:"text-body-1"},zt=L(()=>a("div",{class:"d-flex align-center"},[a("sup",{class:"text-primary text-sm font-weight-regular"},"$"),a("h3",{class:"text-h3 text-primary"}," 99 "),a("sub",{class:"mt-3"},[a("h6",{class:"text-sm font-weight-regular text-disabled"},"/ month")])],-1)),Ot={class:"my-6"},Nt={class:"d-flex mt-3 mb-2"},Lt=L(()=>a("h6",{class:"text-base font-weight-medium"}," Days ",-1)),Wt=L(()=>a("h6",{class:"text-base font-weight-medium"}," 26 of 30 Days ",-1)),Mt=L(()=>a("p",{class:"mt-2"}," 4 days remaining ",-1)),Ft={class:"d-flex gap-4"},Rt={__name:"UserBioPanel",props:{userData:{type:Object,required:!0}},setup(C){const n=C,h={plan:"Standard",price:99,benefits:["10 Users","Up to 10GB storage","Basic Support"]},m=_(!1),r=_(!1),f=u=>u==="pending"?"warning":u==="active"?"success":u==="inactive"?"secondary":"primary",d=u=>u==="subscriber"?{color:"warning",icon:"tabler-user"}:u==="author"?{color:"success",icon:"tabler-circle-check"}:u==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:u==="editor"?{color:"info",icon:"tabler-pencil"}:u==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(u,s)=>{const V=qe,c=ge;return b(),U(j,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[n.userData?(b(),k(P,{key:0},{default:t(()=>[e(y,{class:"text-center pt-15"},{default:t(()=>[e(O,{rounded:"",size:100,color:n.userData.avatar?void 0:"primary",variant:n.userData.avatar?void 0:"tonal"},{default:t(()=>[n.userData.avatar?(b(),k(de,{key:0,src:n.userData.avatar},null,8,["src"])):(b(),U("span",pt,i(l(Je)(n.userData.fullName)),1))]),_:1},8,["color","variant"]),a("h6",_t,i(n.userData.fullName),1),e(H,{label:"",color:d(n.userData.role).color,size:"small",class:"text-capitalize mt-3"},{default:t(()=>[o(i(n.userData.role),1)]),_:1},8,["color"])]),_:1}),e(y,{class:"d-flex justify-center flex-wrap mt-3"},{default:t(()=>[a("div",ft,[e(O,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e($,{icon:"tabler-checkbox"})]),_:1}),a("div",null,[a("h6",gt,i(l(se)(n.userData.taskDone)),1),bt])]),a("div",ht,[e(O,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e($,{icon:"tabler-briefcase"})]),_:1}),a("div",null,[a("h6",vt,i(l(se)(n.userData.projectDone)),1),yt])])]),_:1}),e(N),e(y,null,{default:t(()=>[xt,e(J,{class:"card-list mt-2"},{default:t(()=>[e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",wt,[o(" Username: "),a("span",At,i(n.userData.fullName),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",Vt,[o(" Email: "),a("span",Dt,i(n.userData.email),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",Pt,[o(" Status: "),e(H,{label:"",size:"small",color:f(n.userData.status),class:"text-capitalize"},{default:t(()=>[o(i(n.userData.status),1)]),_:1},8,["color"])])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",Ct,[o(" Role: "),a("span",kt,i(n.userData.role),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",$t,[o(" Tax ID: "),a("span",Ut,i(n.userData.taxId),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",Tt,[o(" Contact: "),a("span",It,i(n.userData.contact),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",St,[o(" Language: "),a("span",Bt,i(n.userData.language),1)])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(z,null,{default:t(()=>[a("h6",jt,[o(" Country: "),a("span",Et,i(n.userData.country),1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{class:"d-flex justify-center"},{default:t(()=>[e(A,{variant:"elevated",class:"me-4",onClick:s[0]||(s[0]=g=>m.value=!0)},{default:t(()=>[o(" Edit ")]),_:1}),e(A,{variant:"tonal",color:"error"},{default:t(()=>[o(" Suspend ")]),_:1})]),_:1})]),_:1})):X("",!0)]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,null,{default:t(()=>[e(y,{class:"d-flex"},{default:t(()=>[e(H,{label:"",color:"primary",size:"small",class:"font-weight-medium"},{default:t(()=>[o(" Popular ")]),_:1}),e(G),zt]),_:1}),e(y,null,{default:t(()=>[e(J,{class:"card-list"},{default:t(()=>[(b(!0),U(j,null,M(h.benefits,g=>(b(),k(T,{key:g},{default:t(()=>[e($,{size:"12",color:"#A8AAAE",class:"me-2",icon:"tabler-circle"}),a("span",null,i(g),1)]),_:2},1024))),128))]),_:1}),a("div",Ot,[a("div",Nt,[Lt,e(G),Wt]),e(ae,{rounded:"","rounded-bar":"","model-value":65,height:"10",color:"primary"}),Mt]),a("div",Ft,[e(A,{onClick:s[1]||(s[1]=g=>r.value=!0)},{default:t(()=>[o(" Upgrade Plan ")]),_:1}),e(A,{variant:"tonal",color:"default"},{default:t(()=>[o(" cancel ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{isDialogVisible:l(m),"onUpdate:isDialogVisible":s[2]||(s[2]=g=>I(m)?m.value=g:null),"user-data":n.userData},null,8,["isDialogVisible","user-data"]),e(c,{isDialogVisible:l(r),"onUpdate:isDialogVisible":s[3]||(s[3]=g=>I(r)?r.value=g:null)},null,8,["isDialogVisible"])],64)}}},Ht=Se(Rt,[["__scopeId","data-v-737cad80"]]);const qt={key:0},Qt={class:"me-3 d-flex gap-3"},Jt={class:"d-flex align-center flex-wrap gap-4"},Gt={class:"mb-0"},Xt={class:"mb-0"},Yt={class:"mb-0"},Zt={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},Kt={class:"text-sm text-disabled mb-0"},ea={__name:"UserInvoiceTable",setup(C){const n=Xe(),h=_(""),m=_(""),r=_(),f=_(1),d=_(0),u=_([]),s=_({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),V=_(!1),c=[{title:"#ID",key:"id"},{title:"Trending",key:"trending",sortable:!1},{title:"Total",key:"total"},{title:"Date",key:"date"},{title:"Actions",key:"actions",sortable:!1,width:"3rem"}],g=(D,w,W,Z,q)=>{V.value=!0,n.fetchInvoices({q:D,status:w,startDate:W,endDate:Z,options:q}).then(E=>{u.value=E.data.invoices,f.value=E.data.totalPage,d.value=E.data.totalInvoices,s.value.page=E.data.page}).catch(E=>{console.log(E)}),V.value=!1},S=D=>D==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:D==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:D==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:D==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:D==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:D==="Past Due"?{variant:"error",icon:"tabler-info-circle"}:{variant:"secondary",icon:"tabler-x"},Y=Ee(()=>D=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:D}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),x=D=>{n.deleteInvoice(D).then(()=>{var w,W;g(h.value,r.value,(w=m.value)==null?void 0:w.split("to")[0],(W=m.value)==null?void 0:W.split("to")[1],s.value)}).catch(w=>{console.log(w)})};return ze(()=>{const[D,w]=m.value?m.value.split("to"):"";g(h.value,r.value,D,w,s.value)}),(D,w)=>{const W=ue,Z=ee("RouterLink"),q=ee("IconBtn"),E=Ge;return l(u)?(b(),U("section",qt,[e(P,{id:"invoice-list"},{default:t(()=>[e(y,{class:"d-flex align-center flex-wrap gap-4"},{default:t(()=>[a("div",Qt,[e(W,{"model-value":l(s).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":w[0]||(w[0]=p=>l(s).itemsPerPage=parseInt(p,10))},null,8,["model-value"])]),e(G),a("div",Jt,[e(A,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:t(()=>[o(" Export ")]),_:1})])]),_:1}),e(N),e(l(Ye),{"items-per-page":l(s).itemsPerPage,"onUpdate:itemsPerPage":w[2]||(w[2]=p=>l(s).itemsPerPage=p),page:l(s).page,"onUpdate:page":w[3]||(w[3]=p=>l(s).page=p),loading:l(V),"items-length":l(d),headers:c,items:l(u),class:"text-no-wrap","onUpdate:options":w[4]||(w[4]=p=>s.value=p)},{"column.trending":t(()=>[e($,{size:"22",icon:"tabler-trending-up"})]),"item.id":t(({item:p})=>[e(Z,{to:{name:"apps-invoice-preview-id",params:{id:p.value}}},{default:t(()=>[o(" #"+i(p.raw.id),1)]),_:2},1032,["to"])]),"item.trending":t(({item:p})=>[e(Ze,null,{activator:t(({props:le})=>[e(O,R({size:30},le,{color:S(p.raw.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e($,{size:20,icon:S(p.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[a("p",Gt,i(p.raw.invoiceStatus),1),a("p",Xt," Balance: "+i(p.raw.balance),1),a("p",Yt," Due date: "+i(p.raw.dueDate),1)]),_:2},1024)]),"item.total":t(({item:p})=>[o(" $"+i(p.raw.total),1)]),"item.date":t(({item:p})=>[o(i(p.raw.issuedDate),1)]),"item.actions":t(({item:p})=>[e(q,{onClick:le=>x(p.raw.id)},{default:t(()=>[e($,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(q,{to:{name:"apps-invoice-preview-id",params:{id:p.raw.id}}},{default:t(()=>[e($,{icon:"tabler-eye"})]),_:2},1032,["to"]),e(E,{"menu-list":l(Y)(p.raw.id),color:"undefined","item-props":""},null,8,["menu-list"])]),bottom:t(()=>[e(N),a("div",Zt,[a("p",Kt,i(l(re)(l(s),l(d))),1),e(me,{modelValue:l(s).page,"onUpdate:modelValue":w[1]||(w[1]=p=>l(s).page=p),length:Math.ceil(l(d)/l(s).itemsPerPage),"total-visible":D.$vuetify.display.xs?1:Math.ceil(l(d)/l(s).itemsPerPage)},{prev:t(p=>[e(A,R({variant:"tonal",color:"default"},p,{icon:!1}),{default:t(()=>[o(" Previous ")]),_:2},1040)]),next:t(p=>[e(A,R({variant:"tonal",color:"default"},p,{icon:!1}),{default:t(()=>[o(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1})])):X("",!0)}}},ta={class:"d-flex"},aa=a("div",{class:"flex-grow-1"},null,-1),la={class:"d-flex"},sa={class:"font-weight-medium mb-0"},oa={class:"text-xs text-medium-emphasis mb-0"},na={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ia={class:"text-sm text-disabled mb-0"},ra=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," 12 Invoices have been paid "),a("span",{class:"app-timeline-meta"},"12 min ago")],-1),da=a("p",{class:"app-timeline-text mb-2"}," Invoices have been paid to the company ",-1),ca={class:"d-flex align-center mt-2"},ua=a("h6",{class:"font-weight-medium text-sm"}," Invoices.pdf ",-1),ma=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," Meeting with john "),a("span",{class:"app-timeline-meta"},"45 min ago")],-1),pa=a("p",{class:"app-timeline-text mb-1"}," React Project meeting with john @10:15am ",-1),_a={class:"d-flex align-center mt-3"},fa=a("div",null,[a("h6",{class:"text-sm font-weight-medium mb-n1"}," John Doe (Client) "),a("span",{class:"text-xs"},"CEO of Kelly Group")],-1),ga=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," Create a new react project for client "),a("span",{class:"app-timeline-meta"},"2 day ago")],-1),ba=a("p",{class:"app-timeline-text mb-0"}," Add files to new design folder ",-1),ha=a("div",{class:"d-flex justify-space-between align-center flex-wrap gap-2 mb-3"},[a("span",{class:"app-timeline-title"}," 12 Create invoices for client "),a("span",{class:"app-timeline-meta"},"5 day ago")],-1),va=a("p",{class:"app-timeline-text mb-0"}," Weekly review of freshly prepared design for our new app. ",-1),ya={__name:"UserTabAccount",setup(C){const n=[{title:"PROJECT",key:"name"},{title:"TOTAL TASK",key:"totalTask"},{title:"PROGRESS",key:"progress"},{title:"HOURS",key:"hours"}],h=_(""),m=_({itemsPerPage:5,page:1}),r=[{logo:Ne,name:"BGC eCommerce App",project:"React Project",totalTask:"122/240",progress:78,hours:"18:42"},{logo:Le,name:"Falcon Logo Design",project:"Figma Project",totalTask:"09/56",progress:18,hours:"20:42"},{logo:We,name:"Dashboard Design",project:"Vuejs Project",totalTask:"290/320",progress:62,hours:"120:87"},{logo:Ke,name:"Foodista mobile app",project:"Xamarin Project",totalTask:"290/320",progress:8,hours:"120:87"},{logo:et,name:"Dojo Email App",project:"Python Project",totalTask:"120/186",progress:49,hours:"230:10"},{logo:tt,name:"Blockchain Website",project:"Sketch Project",totalTask:"99/109",progress:92,hours:"342:41"},{logo:Me,name:"Hoffman Website",project:"HTML Project",totalTask:"98/110",progress:88,hours:"12:45"}],f=d=>d<=25?"error":d>25&&d<=50?"warning":d>50&&d<=75?"primary":d>75&&d<=100?"success":"secondary";return(d,u)=>{const s=ue,V=ce;return b(),k(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"User's Projects List"},{default:t(()=>[e(y,null,{default:t(()=>[a("div",ta,[e(s,{"model-value":l(m).itemsPerPage,items:[{value:5,title:"5"},{value:10,title:"10"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":u[0]||(u[0]=c=>l(m).itemsPerPage=parseInt(c,10))},null,8,["model-value"]),aa,e(V,{modelValue:l(h),"onUpdate:modelValue":u[1]||(u[1]=c=>I(h)?h.value=c:null)},null,8,["modelValue"])])]),_:1}),e(N),e(l(pe),{page:l(m).page,"onUpdate:page":u[3]||(u[3]=c=>l(m).page=c),headers:n,items:r,search:l(h),"items-per-page":l(m).itemsPerPage,"onUpdate:options":u[4]||(u[4]=c=>m.value=c)},{"item.name":t(({item:c})=>[a("div",la,[e(O,{size:34,class:"me-3",image:c.raw.logo},null,8,["image"]),a("div",null,[a("p",sa,i(c.raw.name),1),a("p",oa,i(c.raw.project),1)])])]),"item.progress":t(({item:c})=>[a("span",null,i(c.raw.progress)+"%",1),e(ae,{height:6,"model-value":c.raw.progress,rounded:"",color:f(c.raw.progress)},null,8,["model-value","color"])]),bottom:t(()=>[e(N),a("div",na,[a("p",ia,i(l(re)(l(m),r.length)),1),e(me,{modelValue:l(m).page,"onUpdate:modelValue":u[2]||(u[2]=c=>l(m).page=c),length:Math.ceil(r.length/l(m).itemsPerPage),"total-visible":Math.ceil(r.length/l(m).itemsPerPage)},{prev:t(c=>[e(A,R({variant:"tonal",color:"default"},c,{icon:!1}),{default:t(()=>[o(" Previous ")]),_:2},1040)]),next:t(c=>[e(A,R({variant:"tonal",color:"default"},c,{icon:!1}),{default:t(()=>[o(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["page","search","items-per-page"])]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"User Activity Timeline"},{default:t(()=>[e(y,null,{default:t(()=>[e(at,{density:"compact",align:"start","truncate-line":"both",class:"v-timeline-density-compact"},{default:t(()=>[e(Q,{"dot-color":"error",size:"x-small"},{default:t(()=>[ra,da,a("div",ca,[e($,{color:"error",icon:"tabler-file",size:"18",class:"me-2"}),ua])]),_:1}),e(Q,{"dot-color":"primary",size:"x-small"},{default:t(()=>[ma,pa,a("div",_a,[e(O,{size:"34",class:"me-2",image:l(Oe)},null,8,["image"]),fa])]),_:1}),e(Q,{"dot-color":"info",size:"x-small"},{default:t(()=>[ga,ba]),_:1}),e(Q,{"dot-color":"success",size:"x-small"},{default:t(()=>[ha,va]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(ea)]),_:1})]),_:1})}}},xa="/assets/american-express-2c04e485.png";const wa=a("h6",{class:"text-base font-weight-medium text-high-emphasis mb-1"}," Your Current Plan is Basic ",-1),Aa=a("p",{class:"text-sm mb-3"}," A simple start for everyone ",-1),Va=a("h6",{class:"text-base font-weight-medium text-high-emphasis mb-1"}," Active until Dec 09, 2021 ",-1),Da=a("p",{class:"text-sm mb-3"}," We will send you a notification upon Subscription expiration ",-1),Pa={class:"text-base font-weight-medium text-high-emphasis mb-1"},Ca=a("span",{class:"me-2"},"$199 Per Month",-1),ka=a("p",{class:"text-sm mb-0"}," Standard plan for small to medium businesses ",-1),$a=a("span",null,"Your plan requires update",-1),Ua=a("div",{class:"d-flex justify-space-between font-weight-bold mt-4 mb-2"},[a("h6",{class:"text-sm"}," Days "),a("h6",{class:"text-sm"}," 26 of 30 Days ")],-1),Ta=a("p",{class:"text-sm mt-2"}," 6 days remaining until your plan requires update ",-1),Ia={class:"d-flex flex-wrap gap-4"},Sa={class:"text-no-wrap"},Ba={class:"text-base my-3"},ja={class:"text-body-1"},Ea={class:"d-flex flex-column text-sm-end gap-2"},za={class:"order-sm-0 order-1"},Oa={class:"mt-auto order-sm-1 order-0"},Na=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Company Name: ")],-1),La={class:"text-body-1 mb-0"},Wa=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Billing Email: ")],-1),Ma={class:"text-body-1 mb-0"},Fa=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Tax ID: ")],-1),Ra={class:"text-body-1 mb-0"},Ha=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," VAT Number: ")],-1),qa={class:"text-body-1 mb-0"},Qa=a("td",{class:"d-flex align-baseline"},[a("h6",{class:"text-h6 text-no-wrap"}," Billing Address: ")],-1),Ja={class:"text-body-1 mb-0"},Ga=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Contact: ")],-1),Xa={class:"text-body-1 mb-0"},Ya=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," Country: ")],-1),Za={class:"text-body-1 mb-0"},Ka=a("td",null,[a("h6",{class:"text-h6 text-no-wrap mb-2"}," State: ")],-1),el={class:"text-body-1 mb-0"},tl=a("td",null,[a("h6",{class:"text-h6 text-no-wrap"}," Zip Code: ")],-1),al={class:"text-body-1 mb-0"},ll={__name:"UserTabBillingsPlans",setup(C){const n=_(!1),h=_(),m=_(!1),r=_(!1),f=_(!1),d=V=>{h.value=V,m.value=!0},u=[{name:"Tom McBride",number:"4851234567899865",expiry:"12/24",isPrimary:!0,type:"mastercard",cvv:"123",image:ve},{name:"Mildred Wagner",number:"5531234567895678",expiry:"02/24",isPrimary:!1,type:"visa",cvv:"456",image:ye},{name:"Lester Jennings",number:"5531234567890002",expiry:"08/20",isPrimary:!1,type:"visa",cvv:"456",image:xa}],s={companyName:"Pixinvent",billingEmail:"gertrude@gmail.com",taxID:"TAX-875623",vatNumber:"SDF754K77",address:"100 Water Plant Avenue, Building 1303 Wake Island",contact:"+1(609) 933-44-22",country:"USA",state:"Queensland",zipCode:403114};return(V,c)=>{const g=lt,S=Qe,Y=ge;return b(),U(j,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Current Plan"},{default:t(()=>[e(y,null,{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",md:"6","order-md":"1",order:"2"},{default:t(()=>[wa,Aa,Va,Da,a("h6",Pa,[Ca,e(H,{color:"primary",size:"small",label:""},{default:t(()=>[o(" popular ")]),_:1})]),ka]),_:1}),e(v,{cols:"12",md:"6","order-md":"2",order:"1"},{default:t(()=>[e(_e,{color:"warning",variant:"tonal"},{default:t(()=>[e(fe,{class:"mb-2"},{default:t(()=>[o(" We need your attention! ")]),_:1}),$a]),_:1}),Ua,e(ae,{rounded:"",color:"primary",height:10,"model-value":75}),Ta]),_:1}),e(v,{cols:"12",order:"3"},{default:t(()=>[a("div",Ia,[e(A,{onClick:c[0]||(c[0]=x=>n.value=!0)},{default:t(()=>[o(" upgrade plan ")]),_:1}),e(A,{color:"error",variant:"tonal"},{default:t(()=>[o(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Payment Methods"},{append:t(()=>[e(A,{"prepend-icon":"tabler-plus",size:"small",onClick:c[1]||(c[1]=x=>r.value=!l(r))},{default:t(()=>[o(" Add Card ")]),_:1})]),default:t(()=>[e(y,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[(b(),U(j,null,M(u,x=>e(P,{key:x.name,border:"",flat:""},{default:t(()=>[e(y,{class:"d-flex flex-sm-row flex-column pa-4"},{default:t(()=>[a("div",Sa,[e(de,{src:x.image,width:60,height:25},null,8,["src"]),a("p",Ba,[o(i(x.name)+" ",1),x.isPrimary?(b(),k(H,{key:0,label:"",color:"primary",size:"small"},{default:t(()=>[o(" Primary ")]),_:1})):X("",!0)]),a("span",ja,"**** **** **** "+i(x.number.substring(x.number.length-4)),1)]),e(G),a("div",Ea,[a("div",za,[e(A,{variant:"tonal",class:"me-2",onClick:D=>d(x)},{default:t(()=>[o(" Edit ")]),_:2},1032,["onClick"]),e(A,{color:"secondary",variant:"tonal"},{default:t(()=>[o(" Delete ")]),_:1})]),a("span",Oa,"Card expires at "+i(x.expiry),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Billing Address"},{default:t(()=>[e(y,null,{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",lg:"6"},{default:t(()=>[e(te,{class:"billing-address-table"},{default:t(()=>[a("tr",null,[Na,a("td",null,[a("p",La,i(s.companyName),1)])]),a("tr",null,[Wa,a("td",null,[a("p",Ma,i(s.billingEmail),1)])]),a("tr",null,[Fa,a("td",null,[a("p",Ra,i(s.taxID),1)])]),a("tr",null,[Ha,a("td",null,[a("p",qa,i(s.vatNumber),1)])]),a("tr",null,[Qa,a("td",null,[a("p",Ja,i(s.address),1)])])]),_:1})]),_:1}),e(v,{cols:"12",lg:"6"},{default:t(()=>[e(te,{class:"billing-address-table"},{default:t(()=>[a("tr",null,[Ga,a("td",null,[a("p",Xa,i(s.contact),1)])]),a("tr",null,[Ya,a("td",null,[a("p",Za,i(s.country),1)])]),a("tr",null,[Ka,a("td",null,[a("p",el,i(s.state),1)])]),a("tr",null,[tl,a("td",null,[a("p",al,i(s.zipCode),1)])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{isDialogVisible:l(m),"onUpdate:isDialogVisible":c[2]||(c[2]=x=>I(m)?m.value=x:null),"card-details":l(h)},null,8,["isDialogVisible","card-details"]),e(g,{isDialogVisible:l(r),"onUpdate:isDialogVisible":c[3]||(c[3]=x=>I(r)?r.value=x:null)},null,8,["isDialogVisible"]),e(S,{isDialogVisible:l(f),"onUpdate:isDialogVisible":c[4]||(c[4]=x=>I(f)?f.value=x:null),"billing-address":s},null,8,["isDialogVisible"]),e(Y,{isDialogVisible:l(n),"onUpdate:isDialogVisible":c[5]||(c[5]=x=>I(n)?n.value=x:null)},null,8,["isDialogVisible"])],64)}}},sl="data:image/png;base64,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",ol=a("p",{class:"text-base mt-n6 mb-6"}," Display content from your connected accounts on your site ",-1),nl={class:"text-h6"},il=a("p",{class:"text-base mb-6 mt-n6"}," Display content from social accounts on your site ",-1),rl={class:"text-h6"},dl=["href"],cl={__name:"UserTabConnections",setup(C){const n=_([{img:xe,title:"Google",text:"Calendar and contacts",connected:!0},{img:we,title:"Slack",text:"Communication",connected:!1},{img:Ae,title:"Github",text:"Manage your Git repositories",connected:!0},{img:Ve,title:"Mailchimp",text:"Email marketing service",connected:!1},{img:De,title:"Asana",text:"Communication",connected:!1}]),h=_([{img:Pe,title:"Facebook",connected:!1},{img:Ce,title:"Twitter",link:"https://twitter.com/theme_selection",username:"@Theme_Selection",connected:!0},{img:sl,title:"Linkedin",link:"https://www.linkedin.com/company/pixinvent",username:"@Pixinvent",connected:!0},{img:ke,title:"Dribbble",connected:!1},{img:$e,title:"Behance",connected:!1}]);return(m,r)=>{const f=ee("IconBtn");return b(),k(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Connected Accounts"},{default:t(()=>[e(y,null,{default:t(()=>[ol,e(J,{class:"card-list"},{default:t(()=>[(b(!0),U(j,null,M(l(n),d=>(b(),k(T,{key:d.title,subtitle:d.text},{title:t(()=>[a("h6",nl,i(d.title),1)]),prepend:t(()=>[e(O,{start:"",size:35,image:d.img},null,8,["image"])]),append:t(()=>[e(ot,{modelValue:d.connected,"onUpdate:modelValue":u=>d.connected=u,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["subtitle"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Social Accounts"},{default:t(()=>[e(y,null,{default:t(()=>[il,e(J,{class:"card-list"},{default:t(()=>[(b(!0),U(j,null,M(l(h),d=>(b(),k(T,{key:d.title},{prepend:t(()=>[e(O,{start:"",size:"35",rounded:"0",image:d.img},null,8,["image"])]),append:t(()=>[e(f,{variant:"tonal",color:d.connected?"error":"secondary",class:"rounded"},{default:t(()=>[e($,{icon:d.connected?"tabler-trash":"tabler-link"},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[a("h6",rl,i(d.title),1),d.connected?(b(),k(oe,{key:0},{default:t(()=>[a("a",{href:d.link,target:"_blank",rel:"noopener noreferrer"},i(d.username),9,dl)]),_:2},1024)):(b(),k(oe,{key:1},{default:t(()=>[o(" Not connected ")]),_:1}))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},ul=a("p",{class:"text-base mt-2 mb-0"}," You will receive notification for the below selected items. ",-1),ml=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," TYPE "),a("th",{scope:"col"}," EMAIL "),a("th",{scope:"col"}," BROWSER "),a("th",{scope:"col"}," APP ")])],-1),pl={__name:"UserTabNotifications",setup(C){const n=_([{type:"New for you",email:!0,browser:!1,app:!1},{type:"Account activity",email:!1,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!0},{type:"A new device is linked",email:!1,browser:!0,app:!1}]);return(h,m)=>(b(),k(P,{class:"user-tab-notification"},{default:t(()=>[e(ne,null,{default:t(()=>[e(ie,null,{default:t(()=>[o("Notifications")]),_:1}),ul]),_:1}),e(y,null,{default:t(()=>[e(te,{class:"border rounded text-no-wrap"},{default:t(()=>[ml,a("tbody",null,[(b(!0),U(j,null,M(l(n),r=>(b(),U("tr",{key:r.type},[a("td",null,i(r.type),1),a("td",null,[e(K,{modelValue:r.email,"onUpdate:modelValue":f=>r.email=f},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[e(K,{modelValue:r.browser,"onUpdate:modelValue":f=>r.browser=f},null,8,["modelValue","onUpdate:modelValue"])]),a("td",null,[e(K,{modelValue:r.app,"onUpdate:modelValue":f=>r.app=f},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1}),e(y,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(A,null,{default:t(()=>[o("Save changes")]),_:1}),e(A,{color:"secondary",variant:"tonal"},{default:t(()=>[o(" Discard ")]),_:1})]),_:1})]),_:1}))}},_l=a("span",null,"Minimum 8 characters long, uppercase & symbol",-1),fl=a("span",{class:"text-base"}," Keep your account secure with authentication step. ",-1),gl=a("h4",{class:"font-weight-medium"}," SMS ",-1),bl={class:"d-flex align-center gap-2"},hl=a("p",{class:"mb-0 mt-4"},[o(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),a("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more"),o(". ")],-1),vl={class:"d-flex"},yl={__name:"UserTabSecurity",setup(C){const n=_(!1),h=_(!1),m=_("+1(968) 819-2547"),r=_(!1),f=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"activity"}],d=[{browser:" Chrome on Windows",icon:"tabler-brand-windows",color:"info",device:"HP Spectre 360",location:"Switzerland",activity:"10, July 2021 20:07"},{browser:"Chrome on iPhone",icon:"tabler-device-mobile",color:"error",device:"iPhone 12x",location:"Australia",activity:"13, July 2021 10:10"},{browser:"Chrome on Android",icon:"tabler-brand-android",color:"success",device:"Oneplus 9 Pro",location:"Dubai",activity:"14, July 2021 15:15"},{browser:"Chrome on MacOS",icon:"tabler-brand-apple",color:"secondary",device:"Apple iMac",location:"India",activity:"16, July 2021 16:17"},{browser:"Chrome on Windows",icon:"tabler-brand-windows",color:"info",device:"HP Spectre 360",location:"Switzerland",activity:"20, July 2021 21:01"},{browser:"Chrome on Android",icon:"tabler-brand-android",color:"success",device:"Oneplus 9 Pro",location:"Dubai",activity:"20, July 2021 21:01"}];return(u,s)=>{const V=ce,c=st;return b(),U(j,null,[e(B,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Change Password"},{default:t(()=>[e(y,null,{default:t(()=>[e(_e,{variant:"tonal",color:"warning",class:"mb-4"},{default:t(()=>[e(fe,{class:"mb-2"},{default:t(()=>[o(" Ensure that these requirements are met ")]),_:1}),_l]),_:1}),e(nt,{onSubmit:s[2]||(s[2]=Fe(()=>{},["prevent"]))},{default:t(()=>[e(B,null,{default:t(()=>[e(v,{cols:"12",md:"6"},{default:t(()=>[e(V,{label:"New Password",type:l(n)?"text":"password","append-inner-icon":l(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[0]||(s[0]=g=>n.value=!l(n))},null,8,["type","append-inner-icon"])]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(V,{label:"Confirm Password",type:l(h)?"text":"password","append-inner-icon":l(h)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[1]||(s[1]=g=>h.value=!l(h))},null,8,["type","append-inner-icon"])]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(A,{type:"submit"},{default:t(()=>[o(" Change Password ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Two-step verification"},{subtitle:t(()=>[fl]),default:t(()=>[e(y,null,{default:t(()=>[a("div",null,[gl,e(V,{"model-value":l(m),readonly:""},{"append-inner":t(()=>[a("div",bl,[e($,{icon:"tabler-edit",size:"22",onClick:s[3]||(s[3]=g=>r.value=!0)}),e($,{size:"22",icon:"tabler-trash"})])]),_:1},8,["model-value"])]),hl]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(P,{title:"Recent devices"},{default:t(()=>[e(N),e(l(pe),{items:d,headers:f,"hide-default-footer":""},{"item.browser":t(({item:g})=>[a("div",vl,[e($,{icon:g.raw.icon,color:g.raw.color,size:22,class:"me-3"},null,8,["icon","color"]),o(" "+i(g.raw.browser),1)])]),bottom:t(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{isDialogVisible:l(r),"onUpdate:isDialogVisible":s[4]||(s[4]=g=>I(r)?r.value=g:null),"sms-code":l(m)},null,8,["isDialogVisible","sms-code"])],64)}}},Vs={__name:"[id]",setup(C){const n=be(),h=Re(),m=_(),r=_(null),f=[{icon:"tabler-user-check",title:"Account"},{icon:"tabler-lock",title:"Security"},{icon:"tabler-currency-dollar",title:"Billing & Plan"},{icon:"tabler-bell",title:"Notifications"},{icon:"tabler-link",title:"Connections"}];return n.fetchUser(Number(h.params.id)).then(d=>{m.value=d.data}),(d,u)=>l(m)?(b(),k(B,{key:0},{default:t(()=>[e(v,{cols:"12",md:"5",lg:"4"},{default:t(()=>[e(Ht,{"user-data":l(m)},null,8,["user-data"])]),_:1}),e(v,{cols:"12",md:"7",lg:"8"},{default:t(()=>[e(it,{modelValue:l(r),"onUpdate:modelValue":u[0]||(u[0]=s=>I(r)?r.value=s:null),class:"v-tabs-pill"},{default:t(()=>[(b(),U(j,null,M(f,s=>e(rt,{key:s.icon},{default:t(()=>[e($,{size:18,icon:s.icon,class:"me-1"},null,8,["icon"]),a("span",null,i(s.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(dt,{modelValue:l(r),"onUpdate:modelValue":u[1]||(u[1]=s=>I(r)?r.value=s:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(F,null,{default:t(()=>[e(ya)]),_:1}),e(F,null,{default:t(()=>[e(yl)]),_:1}),e(F,null,{default:t(()=>[e(ll)]),_:1}),e(F,null,{default:t(()=>[e(pl)]),_:1}),e(F,null,{default:t(()=>[e(cl)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):X("",!0)}};export{Vs as default};
