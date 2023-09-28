import{_ as q}from"./MoreBtn-3532dc2b.js";import{_ as F}from"./AppTextField-26dfdddf.js";import{_ as Q}from"./AppSelect-f3f56475.js";import{k as c,z as Y,a3 as G,q as a,o as g,b as I,B as o,p as l,m as r,C as D,L as u,D as S,V as b,w as s,Y as B,c as T,ag as H,v as J,r as N}from"./index-5d9aac78.js";import{u as K}from"./useInvoiceStore-d2eff1f3.js";import{a as O}from"./formatters-9ef7de78.js";import{V as W}from"./VSpacer-3fb513fa.js";import{d as X,V as Z}from"./VCard-af772e5f.js";import{V as A}from"./VDivider-d747098e.js";import{V as ee}from"./VTooltip-15c5253d.js";import{V as L}from"./VAvatar-f5d48048.js";import{V as te}from"./VImg-ad61e20a.js";import{V as ae}from"./VChip-b9ee51ce.js";import{V as oe}from"./VPagination-5630dbeb.js";import{V as le}from"./VDataTableServer-91e9fc2e.js";import"./VMenu-b6e1d5f8.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-f95f502b.js";import"./lazy-e9765c03.js";import"./easing-9f15041e.js";import"./transition-b17afeea.js";import"./dialog-transition-2d3839ec.js";import"./VList-6a1575ca.js";import"./ssrBoot-a2414214.js";import"./VInput-e9a4f1c5.js";import"./VTextField-ecd483ce.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./VCounter-886715a1.js";import"./VSelect-9e13c019.js";import"./VCheckboxBtn-9f05cacf.js";import"./VSelectionControl-4f509e7e.js";import"./index-61e4df1a.js";import"./VDataTable-078271ba.js";import"./filter-c4065068.js";import"./VTable-2da04785.js";const ne={class:"me-3 d-flex gap-3"},ie={class:"d-flex align-center flex-wrap gap-4"},re={class:"invoice-list-filter"},se={class:"invoice-list-filter"},ce={class:"mb-0"},de={class:"mb-0"},pe={class:"mb-0"},ue={class:"d-flex align-center"},me={key:1},ve={class:"d-flex flex-column"},fe={class:"text-body-1 font-weight-medium mb-0"},_e={class:"text-sm text-disabled"},ge={key:1,class:"text-base"},we={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},be={class:"text-sm text-disabled mb-0"},ot={__name:"index",setup(Ve){const C=K(),v=c(""),w=c(""),f=c(),_=c(0),V=c([]),h=c([]),i=c({page:1,itemsPerPage:10,sortBy:[],groupBy:[],search:void 0}),y=c(!1),M=c(1);M.value=i.value.page;const z=[{title:"#ID",key:"id"},{title:"Trending",key:"trending",sortable:!1},{title:"Client",key:"client"},{title:"Total",key:"total"},{title:"Issued Date",key:"date"},{title:"Balance",key:"balance"},{title:"Actions",key:"actions",sortable:!1}],$=(n,t,p,P,k)=>{y.value=!0,C.fetchInvoices({q:n,status:t,startDate:p,endDate:P,options:k}).then(d=>{V.value=d.data.invoices,_.value=d.data.totalInvoices,i.value.page=d.data.page}).catch(d=>{console.log(d)}),y.value=!1},m=(n,t)=>n===t?{status:"Unpaid",chip:{color:"error"}}:n===0?{status:"Paid",chip:{color:"success"}}:{status:n,chip:{variant:"text"}},x=n=>n==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:n==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:n==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:n==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:n==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:n==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"},R=Y(()=>n=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:n}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),E=n=>{C.deleteInvoice(n).then(()=>{var t,p;$(v.value,f.value,(t=w.value)==null?void 0:t.split("to")[0],(p=w.value)==null?void 0:p.split("to")[1],i.value)}).catch(t=>{console.log(t)})};return G(()=>{const[n,t]=w.value?w.value.split("to"):"";$(v.value,f.value,n,t,i.value)}),(n,t)=>{const p=Q,P=F,k=N("RouterLink"),d=N("IconBtn"),j=q;return a(V)?(g(),I(Z,{key:0,id:"invoice-list"},{default:o(()=>[l(X,{class:"d-flex align-center flex-wrap gap-4"},{default:o(()=>[r("div",ne,[l(p,{"model-value":a(i).itemsPerPage,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{width:"6.25rem"},"onUpdate:modelValue":t[0]||(t[0]=e=>a(i).itemsPerPage=parseInt(e,10))},null,8,["model-value"]),l(D,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:o(()=>[u(" Create invoice ")]),_:1})]),l(W),r("div",ie,[r("div",re,[l(P,{modelValue:a(v),"onUpdate:modelValue":t[1]||(t[1]=e=>S(v)?v.value=e:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),r("div",se,[l(p,{modelValue:a(f),"onUpdate:modelValue":t[2]||(t[2]=e=>S(f)?f.value=e:null),placeholder:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),l(A),l(a(le),{modelValue:a(h),"onUpdate:modelValue":t[4]||(t[4]=e=>S(h)?h.value=e:null),"items-per-page":a(i).itemsPerPage,"onUpdate:itemsPerPage":t[5]||(t[5]=e=>a(i).itemsPerPage=e),page:a(i).page,"onUpdate:page":t[6]||(t[6]=e=>a(i).page=e),loading:a(y),"items-length":a(_),headers:z,items:a(V),class:"text-no-wrap","onUpdate:options":t[7]||(t[7]=e=>i.value=e)},{"column.trending":o(()=>[l(b,{size:"22",icon:"tabler-trending-up"})]),"item.id":o(({item:e})=>[l(k,{to:{name:"apps-invoice-preview-id",params:{id:e.value}}},{default:o(()=>[u(" #"+s(e.raw.id),1)]),_:2},1032,["to"])]),"item.trending":o(({item:e})=>[l(ee,null,{activator:o(({props:U})=>[l(L,B({size:30},U,{color:x(e.raw.invoiceStatus).variant,variant:"tonal"}),{default:o(()=>[l(b,{size:20,icon:x(e.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:o(()=>[r("p",ce,s(e.raw.invoiceStatus),1),r("p",de," Balance: "+s(e.raw.balance),1),r("p",pe," Due date: "+s(e.raw.dueDate),1)]),_:2},1024)]),"item.client":o(({item:e})=>[r("div",ue,[l(L,{size:"38",color:e.raw.avatar.length?void 0:x(e.raw.invoiceStatus).variant,variant:e.raw.avatar.length?void 0:"tonal",class:"me-3"},{default:o(()=>[e.raw.avatar.length?(g(),I(te,{key:0,src:e.raw.avatar},null,8,["src"])):(g(),T("span",me,s(a(O)(e.raw.client.name)),1))]),_:2},1032,["color","variant"]),r("div",ve,[r("h6",fe,s(e.raw.client.name),1),r("span",_e,s(e.raw.client.companyEmail),1)])])]),"item.total":o(({item:e})=>[u(" $"+s(e.raw.total),1)]),"item.date":o(({item:e})=>[u(s(e.raw.issuedDate),1)]),"item.balance":o(({item:e})=>[typeof m(e.raw.balance,e.raw.total).status=="string"?(g(),I(ae,{key:0,color:m(e.raw.balance,e.raw.total).chip.color,label:""},{default:o(()=>[u(s(m(e.raw.balance,e.raw.total).status),1)]),_:2},1032,["color"])):(g(),T("span",ge,s(Number(m(e.raw.balance,e.raw.total).status)>0?`$${m(e.raw.balance,e.raw.total).status}`:`-$${Math.abs(Number(m(e.raw.balance,e.raw.total).status))}`),1))]),"item.actions":o(({item:e})=>[l(d,{onClick:U=>E(e.raw.id)},{default:o(()=>[l(b,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),l(d,{to:{name:"apps-invoice-preview-id",params:{id:e.raw.id}}},{default:o(()=>[l(b,{icon:"tabler-eye"})]),_:2},1032,["to"]),l(j,{"menu-list":a(R)(e.raw.id),"item-props":"",color:"undefined"},null,8,["menu-list"])]),bottom:o(()=>[l(A),r("div",we,[r("p",be,s(a(H)(a(i),a(_))),1),l(oe,{modelValue:a(i).page,"onUpdate:modelValue":t[3]||(t[3]=e=>a(i).page=e),length:Math.ceil(a(_)/a(i).itemsPerPage),"total-visible":n.$vuetify.display.xs?1:Math.ceil(a(_)/a(i).itemsPerPage)},{prev:o(e=>[l(D,B({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[u(" Previous ")]),_:2},1040)]),next:o(e=>[l(D,B({variant:"tonal",color:"default"},e,{icon:!1}),{default:o(()=>[u(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["modelValue","items-per-page","page","loading","items-length","items"])]),_:1})):J("",!0)}}};export{ot as default};
