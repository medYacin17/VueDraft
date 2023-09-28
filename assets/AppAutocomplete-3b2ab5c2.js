import{b as re,V as ie}from"./VInput-e9a4f1c5.js";import{m as ce}from"./VSelect-9e13c019.js";import{f as ve}from"./forwardRefs-a29b5f65.js";import{m as de,u as fe}from"./filter-c4065068.js";import{m as me}from"./transition-b17afeea.js";import{u as pe,V as he,a as N}from"./VList-6a1575ca.js";import{as as ge,aA as ye,aF as ke,k as _,aD as E,z as y,aw as Ve,aK as Ce,X as U,ba as O,az as _e,p as s,F as Y,Y as I,bl as be,L as we,d as xe,ar as K,o as j,c as Ae,q as D,b as Ie,v as Se,a9 as Pe,a as Fe,B as De,n as Re,aa as q,ab as H,s as Te}from"./index-5d9aac78.js";import{m as Le,V as X}from"./VTextField-ecd483ce.js";import{V as Me}from"./VMenu-b6e1d5f8.js";import{V as $e}from"./VCheckboxBtn-9f05cacf.js";import{V as Be}from"./VChip-b9ee51ce.js";function Ee(e,i,a){if(i==null)return e;if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?s(Y,null,[s("span",{class:"v-autocomplete__unmask"},[e.substr(0,i)]),s("span",{class:"v-autocomplete__mask"},[e.substr(i,a)]),s("span",{class:"v-autocomplete__unmask"},[e.substr(i+a)])]):e}const ze=ge()({name:"VAutocomplete",props:{search:String,...de({filterKeys:["title"]}),...ce(),...ye(Le({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...me({transition:!1})},emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:a}=i;const{t:h}=ke(),v=_(),k=_(!1),d=_(!0),S=_(),R=E(e,"menu"),f=y({get:()=>R.value,set:l=>{var t;R.value&&!l&&((t=S.value)!=null&&t.ΨopenChildren)||(R.value=l)}}),o=_(-1),G=y(()=>{var l;return(l=v.value)==null?void 0:l.color}),{items:T,transformIn:J,transformOut:Q}=pe(e),{textColorClasses:W,textColorStyles:Z}=Ve(G),r=E(e,"search",""),g=E(e,"modelValue",[],l=>J(Ce(l)),l=>{const t=Q(l);return e.multiple?t:t[0]??null}),b=re(),{filteredItems:L,getMatches:ee}=fe(e,T,y(()=>d.value?void 0:r.value)),V=y(()=>g.value.map(l=>T.value.find(t=>e.valueComparator(t.value,l.value))||l)),M=y(()=>e.hideSelected?L.value.filter(l=>!V.value.some(t=>t.value===l.value)):L.value),$=y(()=>V.value.map(l=>l.props.value)),z=y(()=>V.value[o.value]),B=_();function le(l){e.openOnClear&&(f.value=!0),r.value=""}function ae(){e.hideNoData&&!T.value.length||e.readonly||b!=null&&b.isReadonly.value||(f.value=!0)}function te(l){var P,n,m,C;if(e.readonly||b!=null&&b.isReadonly.value)return;const t=v.value.selectionStart,c=$.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(f.value=!0),["Escape"].includes(l.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(d.value=!0),l.key==="ArrowDown"?(P=B.value)==null||P.focus("next"):l.key==="ArrowUp"&&((n=B.value)==null||n.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(o.value<0){l.key==="Backspace"&&!r.value&&(o.value=c-1);return}const u=o.value;z.value&&x(z.value),o.value=u>=c-1?c-2:u}if(l.key==="ArrowLeft"){if(o.value<0&&t>0)return;const u=o.value>-1?o.value-1:c-1;V.value[u]?o.value=u:(o.value=-1,v.value.setSelectionRange((m=r.value)==null?void 0:m.length,(C=r.value)==null?void 0:C.length))}if(l.key==="ArrowRight"){if(o.value<0)return;const u=o.value+1;V.value[u]?o.value=u:(o.value=-1,v.value.setSelectionRange(0,0))}}}function ne(l){r.value=l.target.value}function ue(){k.value&&(d.value=!0)}function oe(l){k.value=!0}function se(l){var t;l.relatedTarget==null&&((t=v.value)==null||t.focus())}const w=_(!1);function x(l){if(e.multiple){const t=$.value.findIndex(c=>e.valueComparator(c,l.value));if(t===-1)g.value=[...g.value,l];else{const c=[...g.value];c.splice(t,1),g.value=c}}else g.value=[l],w.value=!0,a.selection||(r.value=l.title),f.value=!1,d.value=!0,O(()=>w.value=!1)}return U(k,l=>{var t;l?(w.value=!0,r.value=e.multiple||a.selection?"":String(((t=V.value.at(-1))==null?void 0:t.props.title)??""),d.value=!0,O(()=>w.value=!1)):(f.value=!1,r.value="")}),U(r,l=>{!k.value||w.value||(l&&(f.value=!0),d.value=!l)}),_e(()=>{const l=!!(e.chips||a.chip),t=!!(!e.hideNoData||M.value.length||a.prepend||a.append||a["no-data"]),c=g.value.length>0,[P]=X.filterProps(e);return s(X,I({ref:v},P,{modelValue:r.value,"onUpdate:modelValue":n=>{n==null&&(g.value=[])},focused:k.value,"onUpdate:focused":n=>k.value=n,validationValue:g.externalValue,dirty:c,onInput:ne,class:["v-autocomplete",{"v-autocomplete--active-menu":f.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selecting-index":o.value>-1,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!a.selection},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:e.readonly,placeholder:c?void 0:e.placeholder,"onClick:clear":le,"onMousedown:control":ae,onKeydown:te}),{...a,default:()=>s(Y,null,[s(Me,I({ref:S,modelValue:f.value,"onUpdate:modelValue":n=>f.value=n,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ue},e.menuProps),{default:()=>[t&&s(he,{ref:B,selected:$.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onFocusin:oe,onFocusout:se},{default:()=>{var n,m,C;return[!M.value.length&&!e.hideNoData&&(((n=a["no-data"])==null?void 0:n.call(a))??s(N,{title:h(e.noDataText)},null)),(m=a["prepend-item"])==null?void 0:m.call(a),M.value.map(u=>{var A;return((A=a.item)==null?void 0:A.call(a,{item:u,props:I(u.props,{onClick:()=>x(u)})}))??s(N,I({key:u.value},u.props,{onClick:()=>x(u)}),{prepend:p=>{let{isSelected:F}=p;return e.multiple&&!e.hideSelected?s($e,{modelValue:F,ripple:!1,tabindex:"-1"},null):void 0},title:()=>{var p,F;return d.value?u.title:Ee(u.title,(p=ee(u))==null?void 0:p.title,((F=r.value)==null?void 0:F.length)??0)}})}),(C=a["append-item"])==null?void 0:C.call(a)]}})]}),V.value.map((n,m)=>{var A;function C(p){p.stopPropagation(),p.preventDefault(),x(n)}const u={"onClick:close":C,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:n.value,class:["v-autocomplete__selection",m===o.value&&["v-autocomplete__selection--selected",W.value]],style:m===o.value?Z.value:{}},[l?a.chip?s(be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>{var p;return[(p=a.chip)==null?void 0:p.call(a,{item:n,index:m,props:u})]}}):s(Be,I({key:"chip",closable:e.closableChips,size:"small",text:n.title},u),null):((A=a.selection)==null?void 0:A.call(a,{item:n,index:m}))??s("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&m<V.value.length-1&&s("span",{class:"v-autocomplete__selection-comma"},[we(",")])])])})])})}),ve({isFocused:k,isPristine:d,menu:f,search:r,filteredItems:L,select:x},v)}}),Ne=xe({name:"AppAutocomplete",inheritAttrs:!1}),We=Object.assign(Ne,{setup(e){const i=y(()=>{const h=K(),v=h.id||h.label;return v?`app-autocomplete-${v}-${Math.random().toString(36).slice(2,7)}`:void 0}),a=y(()=>K().label);return(h,v)=>(j(),Ae("div",{class:Te(["app-autocomplete flex-grow-1",h.$attrs.class])},[D(a)?(j(),Ie(ie,{key:0,for:D(i),class:"mb-1 text-body-2 text-high-emphasis",text:D(a)},null,8,["for","text"])):Se("",!0),s(ze,q(H({...h.$attrs,class:null,label:void 0,id:D(i),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),Pe({_:2},[Fe(h.$slots,(k,d)=>({name:d,fn:De(S=>[Re(h.$slots,d,q(H(S||{})))])}))]),1040)],2))}});export{ze as V,We as _};