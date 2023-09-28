import{as as G,bw as J,at as L,bY as Q,aY as E,au as R,br as T,av as $,bZ as U,bc as W,ax as r,az as ee,p as l,bp as ae,aB as h,aH as x,a_ as le,aS as te,a$ as ne,b_ as se,b1 as ie,bq as ce,bz as de,aF as oe,b3 as ue,bt as re,aT as ve,b5 as fe,b7 as be,bA as me,aD as ke,b$ as pe,bs as ye,z as C,H as V,bk as _,bu as he,c0 as Ce,V as v,bl as f,I as Ve,F as D,Y as Ie}from"./index-5d9aac78.js";import{V as z}from"./VAvatar-f5d48048.js";const w=Symbol.for("vuetify:v-chip-group");G()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:J},...L(),...Q({selectedClass:"v-chip--selected"}),...E(),...R(),...T({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,b){let{slots:c}=b;const{themeClasses:o}=$(e),{isSelected:t,select:m,next:k,prev:p,selected:y}=U(e,w);return W({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ee(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:p,selected:y.value})]}})),{}}});const Se=G()({name:"VChip",directives:{Ripple:ae},props:{activeClass:String,appendAvatar:String,appendIcon:h,closable:Boolean,closeIcon:{type:h,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:h,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:x(),onClickOnce:x(),...le(),...L(),...te(),...ne(),...se(),...ie(),...ce(),...de(),...E({tag:"span"}),...R(),...T({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,b){let{attrs:c,emit:o,slots:t}=b;const{t:m}=oe(),{borderClasses:k}=ue(e),{colorClasses:p,colorStyles:y,variantClasses:u}=re(e),{densityClasses:F}=ve(e),{elevationClasses:M}=fe(e),{roundedClasses:Y}=be(e),{sizeClasses:q}=me(e),{themeClasses:H}=$(e),I=ke(e,"modelValue"),a=pe(e,w,!1),s=ye(e,c),K=C(()=>e.link!==!1&&s.isLink.value),i=C(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),O=C(()=>({"aria-label":m(e.closeLabel),onClick(n){I.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function N(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),X=!!(d||t.append),Z=!!(t.close||e.closable),P=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),j=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&V(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":P,"v-chip--pill":e.pill},H.value,k.value,A?p.value:void 0,F.value,M.value,Y.value,q.value,u.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!K.value&&N},{default:()=>{var B;return[he(i.value,"v-chip"),P&&l(Ce,{key:"filter"},{default:()=>[V(l("div",{class:"v-chip__filter"},[t.filter?V(l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[_("slot"),t.filter,"default"]]):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ve,a.isSelected.value]])]}),j&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(D,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(z,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text,X&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(D,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(z,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Z&&l("div",Ie({key:"close",class:"v-chip__close"},O.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[_("ripple"),i.value&&e.ripple,null]])}}});export{Se as V};