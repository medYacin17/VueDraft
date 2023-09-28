import{_ as oe}from"./AppTextField-26dfdddf.js";import{_ as T}from"./DialogCloseBtn-6a864be4.js";import{k as b,o as y,b as x,B as a,p as e,C as p,aa as L,ab as P,L as r,q as d,D as f,aG as K,at as F,aY as Q,as as U,az as q,a_ as ie,a$ as se,b1 as ne,au as re,b4 as ce,ax as z,b3 as de,b5 as ue,b7 as pe,av as me,z as W,bc as Z,bl as S,ay as A,ap as ge,br as be,m as h,V as fe,Y as Ve,c as G,F as J,X as ve,ao as he,a as ke}from"./index-5d9aac78.js";import{V as D,d as v,a as ye,b as De}from"./VCard-af772e5f.js";import{V as ee,a as V}from"./VRow-09f9705f.js";import{V as C}from"./VDialog-62bfdccd.js";import{V as Ce}from"./VImg-ad61e20a.js";import{V as ae}from"./VSpacer-3fb513fa.js";import{V as Y,d as X,a as j}from"./VList-6a1575ca.js";import{V as $}from"./VDivider-d747098e.js";import{V as I}from"./VListItemAction-e21a8cfb.js";import{V as N}from"./VCheckbox-7ee4d23a.js";import{V as we,a as Be}from"./VRadioGroup-a00ea594.js";import{_ as xe}from"./AppCardCode-e3295a22.js";import"./VInput-e9a4f1c5.js";import"./transition-b17afeea.js";import"./VTextField-ecd483ce.js";/* empty css                   */import"./VField-49e7b0d8.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-886715a1.js";import"./VAvatar-f5d48048.js";import"./VOverlay-f95f502b.js";import"./lazy-e9765c03.js";import"./dialog-transition-2d3839ec.js";import"./ssrBoot-a2414214.js";import"./VCheckboxBtn-9f05cacf.js";import"./VSelectionControl-4f509e7e.js";import"./vue.runtime.esm-bundler-e5645f1b.js";const _e={__name:"DemoDialogForm",setup(s){const l=b(!1),t=b(""),o=b(""),i=b(""),n=b(""),g=b(""),m=b(),w=b([]);return(_,c)=>{const B=T,k=oe;return y(),x(C,{modelValue:d(l),"onUpdate:modelValue":c[10]||(c[10]=u=>f(l)?l.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(p,L(P(u)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(B,{onClick:c[0]||(c[0]=u=>l.value=!d(l))}),e(D,{title:"User Profile"},{default:a(()=>[e(v,null,{default:a(()=>[e(ee,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(t),"onUpdate:modelValue":c[1]||(c[1]=u=>f(t)?t.value=u:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(o),"onUpdate:modelValue":c[2]||(c[2]=u=>f(o)?o.value=u:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(i),"onUpdate:modelValue":c[3]||(c[3]=u=>f(i)?i.value=u:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(k,{modelValue:d(n),"onUpdate:modelValue":c[4]||(c[4]=u=>f(n)?n.value=u:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(k,{modelValue:d(g),"onUpdate:modelValue":c[5]||(c[5]=u=>f(g)?g.value=u:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:d(m),"onUpdate:modelValue":c[6]||(c[6]=u=>f(m)?m.value=u:null),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:d(w),"onUpdate:modelValue":c[7]||(c[7]=u=>f(w)?w.value=u:null),label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=u=>l.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:c[9]||(c[9]=u=>l.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};const Te=K({text:String,...F(),...Q()},"v-toolbar-title"),le=U()({name:"VToolbarTitle",props:Te(),setup(s,l){let{slots:t}=l;return q(()=>{const o=!!(t.default||t.text||s.text);return e(s.tag,{class:["v-toolbar-title",s.class],style:s.style},{default:()=>{var i;return[o&&e("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():s.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),je=[null,"prominent","default","comfortable","compact"],Le=K({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:s=>je.includes(s)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ie(),...F(),...se(),...ne(),...Q({tag:"header"}),...re()},"v-toolbar"),Pe=U()({name:"VToolbar",props:Le(),setup(s,l){var k;let{slots:t}=l;const{backgroundColorClasses:o,backgroundColorStyles:i}=ce(z(s,"color")),{borderClasses:n}=de(s),{elevationClasses:g}=ue(s),{roundedClasses:m}=pe(s),{themeClasses:w}=me(s),_=b(!!(s.extended||(k=t.extension)!=null&&k.call(t))),c=W(()=>parseInt(Number(s.height)+(s.density==="prominent"?Number(s.height):0)-(s.density==="comfortable"?8:0)-(s.density==="compact"?16:0),10)),B=W(()=>_.value?parseInt(Number(s.extensionHeight)+(s.density==="prominent"?Number(s.extensionHeight):0)-(s.density==="comfortable"?4:0)-(s.density==="compact"?8:0),10):0);return Z({VBtn:{variant:"text"}}),q(()=>{var M;const u=!!(s.title||t.title),te=!!(t.image||s.image),O=(M=t.extension)==null?void 0:M.call(t);return _.value=!!(s.extended||O),e(s.tag,{class:["v-toolbar",{"v-toolbar--absolute":s.absolute,"v-toolbar--collapse":s.collapse,"v-toolbar--flat":s.flat,"v-toolbar--floating":s.floating,[`v-toolbar--density-${s.density}`]:!0},o.value,n.value,g.value,m.value,w.value,s.class],style:[i.value,s.style]},{default:()=>[te&&e("div",{key:"image",class:"v-toolbar__image"},[t.image?e(S,{key:"image-defaults",disabled:!s.image,defaults:{VImg:{cover:!0,src:s.image}}},t.image):e(Ce,{key:"image-img",cover:!0,src:s.image},null)]),e(S,{defaults:{VTabs:{height:A(c.value)}}},{default:()=>{var R,H,E;return[e("div",{class:"v-toolbar__content",style:{height:A(c.value)}},[t.prepend&&e("div",{class:"v-toolbar__prepend"},[(R=t.prepend)==null?void 0:R.call(t)]),u&&e(le,{key:"title",text:s.title},{text:t.title}),(H=t.default)==null?void 0:H.call(t),t.append&&e("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),e(S,{defaults:{VTabs:{height:A(B.value)}}},{default:()=>[e(ge,null,{default:()=>[_.value&&e("div",{class:"v-toolbar__extension",style:{height:A(B.value)}},[O])]})]})]})}),{contentHeight:c,extensionHeight:B}}}),Ae=U()({name:"VToolbarItems",props:{...F(),...be({variant:"text"})},setup(s,l){let{slots:t}=l;return Z({VBtn:{color:z(s,"color"),height:"inherit",variant:z(s,"variant")}}),q(()=>{var o;return e("div",{class:["v-toolbar-items",s.class],style:s.style},[(o=t.default)==null?void 0:o.call(t)])}),{}}}),Se={__name:"DemoDialogFullscreen",setup(s){const l=b(!1);return(t,o)=>(y(),x(C,{modelValue:d(l),"onUpdate:modelValue":o[2]||(o[2]=i=>f(l)?l.value=i:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:i})=>[e(p,L(P(i)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(D,null,{default:a(()=>[h("div",null,[e(Pe,{color:"primary"},{default:a(()=>[e(p,{icon:"",variant:"plain",onClick:o[0]||(o[0]=i=>l.value=!1)},{default:a(()=>[e(fe,{color:"white",icon:"tabler-x"})]),_:1}),e(le,null,{default:a(()=>[r("Settings")]),_:1}),e(ae),e(Ae,null,{default:a(()=>[e(p,{variant:"text",onClick:o[1]||(o[1]=i=>l.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),e(Y,{lines:"two"},{default:a(()=>[e(X,null,{default:a(()=>[r("User Controls")]),_:1}),e(j,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(j,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e($),e(Y,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(X,null,{default:a(()=>[r("General")]),_:1}),e(j,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:i})=>[e(I,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:i})=>[e(I,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:i})=>[e(I,{start:""},{default:a(()=>[e(N,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ie={__name:"DemoDialogOverflowed",setup(s){const l=b(!1);return(t,o)=>{const i=T;return y(),x(C,{modelValue:d(l),"onUpdate:modelValue":o[3]||(o[3]=n=>f(l)?l.value=n:null),class:"v-dialog-sm"},{activator:a(({props:n})=>[e(p,Ve({color:"primary"},n),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=n=>l.value=!d(l))}),e(D,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=n=>l.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(p,{onClick:o[2]||(o[2]=n=>l.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ne={__name:"DemoDialogNesting",setup(s){const l=b(!1),t=b(!1);return(o,i)=>{const n=T;return y(),G(J,null,[e(p,{onClick:i[0]||(i[0]=g=>l.value=!0)},{default:a(()=>[r(" Open Dialog ")]),_:1}),e(C,{modelValue:d(l),"onUpdate:modelValue":i[4]||(i[4]=g=>f(l)?l.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(n,{onClick:i[1]||(i[1]=g=>l.value=!1)}),e(D,{title:"Dialog"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:i[2]||(i[2]=g=>l.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:i[3]||(i[3]=g=>t.value=!d(t))},{default:a(()=>[r(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:d(t),"onUpdate:modelValue":i[7]||(i[7]=g=>f(t)?t.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(n,{onClick:i[5]||(i[5]=g=>t.value=!1)}),e(D,{title:"Dialog 2"},{default:a(()=>[e(v,null,{default:a(()=>[r("I'm a nested dialog.")]),_:1}),e(v,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(ae),e(p,{onClick:i[6]||(i[6]=g=>t.value=!1)},{default:a(()=>[r(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},ze={__name:"DemoDialogLoader",setup(s){const l=b(!1);return ve(l,t=>{t&&setTimeout(()=>{l.value=!1},4e3)}),(t,o)=>(y(),G(J,null,[e(p,{disabled:d(l),onClick:o[0]||(o[0]=i=>l.value=!0)},{default:a(()=>[r(" Start loading ")]),_:1},8,["disabled"]),e(C,{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=i=>f(l)?l.value=i:null),width:"300"},{default:a(()=>[e(D,{color:"primary",width:"300"},{default:a(()=>[e(v,{class:"pt-3"},{default:a(()=>[r(" Please stand by "),e(he,{indeterminate:"",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},$e={__name:"DemoDialogScrollable",setup(s){const l=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],t=b(""),o=b(!1);return(i,n)=>{const g=T;return y(),x(C,{modelValue:d(o),"onUpdate:modelValue":n[4]||(n[4]=m=>f(o)?o.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(p,L(P(m)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(g,{onClick:n[0]||(n[0]=m=>o.value=!d(o))}),e(D,null,{default:a(()=>[e(ye,{class:"pb-5"},{default:a(()=>[e(De,null,{default:a(()=>[r("Select Country")]),_:1})]),_:1}),e($),e(v,{style:{"block-size":"300px"}},{default:a(()=>[e(we,{modelValue:d(t),"onUpdate:modelValue":n[1]||(n[1]=m=>f(t)?t.value=m:null),inline:!1},{default:a(()=>[(y(),G(J,null,ke(l,m=>e(Be,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e($),e(v,{class:"d-flex justify-end flex-wrap gap-3 pt-5"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:n[2]||(n[2]=m=>o.value=!1)},{default:a(()=>[r(" Close ")]),_:1}),e(p,{onClick:n[3]||(n[3]=m=>o.value=!1)},{default:a(()=>[r(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Fe={__name:"DemoDialogPersistent",setup(s){const l=b(!1);return(t,o)=>{const i=T;return y(),x(C,{modelValue:d(l),"onUpdate:modelValue":o[3]||(o[3]=n=>f(l)?l.value=n:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:n})=>[e(p,L(P(n)),{default:a(()=>[r(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=n=>l.value=!d(l))}),e(D,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=n=>l.value=!1)},{default:a(()=>[r(" Disagree ")]),_:1}),e(p,{onClick:o[2]||(o[2]=n=>l.value=!1)},{default:a(()=>[r(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ue={__name:"DemoDialogBasic",setup(s){const l=b(!1);return(t,o)=>{const i=T;return y(),x(C,{modelValue:d(l),"onUpdate:modelValue":o[2]||(o[2]=n=>f(l)?l.value=n:null),width:"500"},{activator:a(({props:n})=>[e(p,L(P(n)),{default:a(()=>[r(" Click Me ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=n=>l.value=!d(l))}),e(D,{title:"Privacy Policy"},{default:a(()=>[e(v,null,{default:a(()=>[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(v,{class:"d-flex justify-end"},{default:a(()=>[e(p,{onClick:o[1]||(o[1]=n=>l.value=!1)},{default:a(()=>[r(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ge={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Je={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Oe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},We=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Ye=h("p",null,[r("Use "),h("code",null,"persistent"),r(" prop to create persistent dialog.")],-1),Xe=h("p",null,[r("Use "),h("code",null,"scrollable"),r(" prop to create scrollable dialog.")],-1),Ke=h("p",null,[r("The "),h("code",null,"v-dialog"),r(" component makes it easy to create a customized loading experience for your application.")],-1),Qe=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),Ze=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),ea=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),aa=h("p",null,"Just a simple example of a form in a dialog.",-1),Aa={__name:"dialog",setup(s){return(l,t)=>{const o=Ue,i=xe,n=Fe,g=$e,m=ze,w=Ne,_=Ie,c=Se,B=_e;return y(),x(ee,null,{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:qe},{default:a(()=>[We,e(o)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Persistent",code:He},{default:a(()=>[Ye,e(n)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Scrollable",code:Ee},{default:a(()=>[Xe,e(g)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loader",code:Oe},{default:a(()=>[Ke,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(i,{title:"Nesting",code:Me},{default:a(()=>[Qe,e(w)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Overflowed",code:Re},{default:a(()=>[Ze,e(_)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Fullscreen",code:Je},{default:a(()=>[ea,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Form",code:Ge},{default:a(()=>[aa,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Aa as default};
