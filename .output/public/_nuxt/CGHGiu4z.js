import{f as _,H as x,K as ee,r as E,I as te,M as c,x as e,J as $,g as W,L as f,o as r,w as d,T as O,P as h,ar as z,b as P,an as oe,aK as M,Q as X,O as b,ag as Y,ah as G,al as se,W as ae,ai as ne,a8 as le,X as ie,Y as re,ad as ue,p as H,y as D,af as de,a3 as pe,U,V as ce,d as w,t as k,c as A,a as fe,q as me}from"./oqaamrP9.js";import{a as I}from"./VH0Qlokb.js";import{i as ve,f as ye,e as ge,d as be}from"./C4ent8x3.js";const[C,_e]=x("DialogRoot"),Oe=_({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(p,{emit:i}){const t=p,o=ee(t,"open",i,{defaultValue:t.defaultOpen,passive:t.open===void 0}),v=E(),y=E(),{modal:m}=te(t);return _e({open:o,modal:m,openModal:()=>{o.value=!0},onOpenChange:u=>{o.value=u},onOpenToggle:()=>{o.value=!o.value},contentId:"",titleId:"",descriptionId:"",triggerElement:v,contentElement:y}),(u,l)=>c(u.$slots,"default",{open:e(o)})}}),$e=_({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(p){const i=p,t=C(),{forwardRef:a,currentElement:o}=$();return t.contentId||(t.contentId=I(void 0,"reka-dialog-content")),W(()=>{t.triggerElement.value=o.value}),(v,y)=>(r(),f(e(h),O(i,{ref:e(a),type:v.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(t).open.value||!1,"aria-controls":e(t).open.value?e(t).contentId:void 0,"data-state":e(t).open.value?"open":"closed",onClick:e(t).onOpenToggle}),{default:d(()=>[c(v.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Z=_({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(p,{emit:i}){const t=p,a=i,o=C(),{forwardRef:v,currentElement:y}=$();return o.titleId||(o.titleId=I(void 0,"reka-dialog-title")),o.descriptionId||(o.descriptionId=I(void 0,"reka-dialog-description")),W(()=>{o.contentElement=y,z()!==document.body&&(o.triggerElement.value=z())}),(m,u)=>(r(),f(e(ye),{"as-child":"",loop:"",trapped:t.trapFocus,onMountAutoFocus:u[5]||(u[5]=l=>a("openAutoFocus",l)),onUnmountAutoFocus:u[6]||(u[6]=l=>a("closeAutoFocus",l))},{default:d(()=>[P(e(oe),O({id:e(o).contentId,ref:e(v),as:m.as,"as-child":m.asChild,"disable-outside-pointer-events":m.disableOutsidePointerEvents,role:"dialog","aria-describedby":e(o).descriptionId,"aria-labelledby":e(o).titleId,"data-state":e(ve)(e(o).open.value)},m.$attrs,{onDismiss:u[0]||(u[0]=l=>e(o).onOpenChange(!1)),onEscapeKeyDown:u[1]||(u[1]=l=>a("escapeKeyDown",l)),onFocusOutside:u[2]||(u[2]=l=>a("focusOutside",l)),onInteractOutside:u[3]||(u[3]=l=>a("interactOutside",l)),onPointerDownOutside:u[4]||(u[4]=l=>a("pointerDownOutside",l))}),{default:d(()=>[c(m.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),Ce=_({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(p,{emit:i}){const t=p,a=i,o=C(),v=M(a),{forwardRef:y,currentElement:m}=$();return ge(m),(u,l)=>(r(),f(Z,O({...t,...e(v)},{ref:e(y),"trap-focus":e(o).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:l[0]||(l[0]=n=>{var s;n.defaultPrevented||(n.preventDefault(),(s=e(o).triggerElement.value)==null||s.focus())}),onPointerDownOutside:l[1]||(l[1]=n=>{const s=n.detail.originalEvent,g=s.button===0&&s.ctrlKey===!0;(s.button===2||g)&&n.preventDefault()}),onFocusOutside:l[2]||(l[2]=n=>{n.preventDefault()})}),{default:d(()=>[c(u.$slots,"default")]),_:3},16,["trap-focus"]))}}),De=_({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(p,{emit:i}){const t=p,o=M(i);$();const v=C(),y=E(!1),m=E(!1);return(u,l)=>(r(),f(Z,O({...t,...e(o)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:l[0]||(l[0]=n=>{var s;n.defaultPrevented||(y.value||(s=e(v).triggerElement.value)==null||s.focus(),n.preventDefault()),y.value=!1,m.value=!1}),onInteractOutside:l[1]||(l[1]=n=>{var B;n.defaultPrevented||(y.value=!0,n.detail.originalEvent.type==="pointerdown"&&(m.value=!0));const s=n.target;((B=e(v).triggerElement.value)==null?void 0:B.contains(s))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&m.value&&n.preventDefault()})}),{default:d(()=>[c(u.$slots,"default")]),_:3},16))}}),Be=_({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(p,{emit:i}){const t=p,a=i,o=C(),v=M(a),{forwardRef:y}=$();return(m,u)=>(r(),f(e(X),{present:m.forceMount||e(o).open.value},{default:d(()=>[e(o).modal.value?(r(),f(Ce,O({key:0,ref:e(y)},{...t,...e(v),...m.$attrs}),{default:d(()=>[c(m.$slots,"default")]),_:3},16)):(r(),f(De,O({key:1,ref:e(y)},{...t,...e(v),...m.$attrs}),{default:d(()=>[c(m.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),he=_({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(p){const i=C();return be(!0),$(),(t,a)=>(r(),f(e(h),{as:t.as,"as-child":t.asChild,"data-state":e(i).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:d(()=>[c(t.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),we=_({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(p){const i=C(),{forwardRef:t}=$();return(a,o)=>{var v;return(v=e(i))!=null&&v.modal.value?(r(),f(e(X),{key:0,present:a.forceMount||e(i).open.value},{default:d(()=>[P(he,O(a.$attrs,{ref:e(t),as:a.as,"as-child":a.asChild}),{default:d(()=>[c(a.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):b("",!0)}}}),ke=_({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(p){const i=p;$();const t=C();return(a,o)=>(r(),f(e(h),O(i,{type:a.as==="button"?"button":void 0,onClick:o[0]||(o[0]=v=>e(t).onOpenChange(!1))}),{default:d(()=>[c(a.$slots,"default")]),_:3},16,["type"]))}}),q=_({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(p){const i=p,t=C();return $(),(a,o)=>(r(),f(e(h),O(i,{id:e(t).titleId}),{default:d(()=>[c(a.$slots,"default")]),_:3},16,["id"]))}}),J=_({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(p){const i=p;$();const t=C();return(a,o)=>(r(),f(e(h),O(i,{id:e(t).descriptionId}),{default:d(()=>[c(a.$slots,"default")]),_:3},16,["id"]))}}),Ee=_({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(p){const i=p;return(t,a)=>(r(),f(e(se),Y(G(i)),{default:d(()=>[c(t.$slots,"default")]),_:3},16))}}),Pe={slots:{overlay:"fixed inset-0 bg-(--ui-bg-elevated)/75",content:"fixed bg-(--ui-bg) divide-y divide-(--ui-border) flex flex-col focus:outline-none",header:"flex items-center gap-1.5 p-4 sm:px-6 min-h-16",wrapper:"",body:"flex-1 overflow-y-auto p-4 sm:p-6",footer:"flex items-center gap-1.5 p-4 sm:px-6",title:"text-(--ui-text-highlighted) font-semibold",description:"mt-1 text-(--ui-text-muted) text-sm",close:"absolute top-4 end-4"},variants:{transition:{true:{overlay:"data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",content:"data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"}},fullscreen:{true:{content:"inset-0"},false:{content:"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)"}}}},Fe=ce;var Q;const Ae=U({extend:U(Pe),...((Q=Fe.ui)==null?void 0:Q.modal)||{}}),Ie=_({__name:"Modal",props:{title:{},description:{},content:{},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},fullscreen:{type:Boolean},portal:{type:Boolean,default:!0},close:{type:[Boolean,Object],default:!0},closeIcon:{},dismissible:{type:Boolean,default:!0},class:{},ui:{},open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean,default:!0}},emits:["after:leave","update:open"],setup(p,{emit:i}){const t=p,a=i,o=ae(),{t:v}=ne(),y=le(),m=ie(re(t,"open","defaultOpen","modal"),a),u=ue(()=>t.content),l=H(()=>{const s={closeAutoFocus:g=>g.preventDefault()};return t.dismissible?s:{pointerDownOutside:g=>g.preventDefault(),interactOutside:g=>g.preventDefault(),escapeKeyDown:g=>g.preventDefault(),...s}}),n=H(()=>Ae({transition:t.transition,fullscreen:t.fullscreen}));return(s,g)=>(r(),f(e(Oe),Y(G(e(m))),{default:d(({open:B})=>[o.default?(r(),f(e($e),{key:0,"as-child":"",class:D(t.class)},{default:d(()=>[c(s.$slots,"default",{open:B})]),_:2},1032,["class"])):b("",!0),P(e(Ee),{disabled:!s.portal},{default:d(()=>{var R,K;return[s.overlay?(r(),f(e(we),{key:0,class:D(n.value.overlay({class:(R=t.ui)==null?void 0:R.overlay}))},null,8,["class"])):b("",!0),P(e(Be),O({class:n.value.content({class:[!o.default&&t.class,(K=t.ui)==null?void 0:K.content]})},u.value,{onAfterLeave:g[0]||(g[0]=F=>a("after:leave"))},de(l.value)),{default:d(()=>[o.content&&(s.title||o.title||s.description||o.description)?(r(),f(e(pe),{key:0},{default:d(()=>[s.title||o.title?(r(),f(e(q),{key:0},{default:d(()=>[c(s.$slots,"title",{},()=>[w(k(s.title),1)])]),_:3})):b("",!0),s.description||o.description?(r(),f(e(J),{key:1},{default:d(()=>[c(s.$slots,"description",{},()=>[w(k(s.description),1)])]),_:3})):b("",!0)]),_:3})):b("",!0),c(s.$slots,"content",{},()=>{var F,T,V;return[o.header||s.title||o.title||s.description||o.description||s.close||o.close?(r(),A("div",{key:0,class:D(n.value.header({class:(F=t.ui)==null?void 0:F.header}))},[c(s.$slots,"header",{},()=>{var L,N,S;return[fe("div",{class:D(n.value.wrapper({class:(L=t.ui)==null?void 0:L.wrapper}))},[s.title||o.title?(r(),f(e(q),{key:0,class:D(n.value.title({class:(N=t.ui)==null?void 0:N.title}))},{default:d(()=>[c(s.$slots,"title",{},()=>[w(k(s.title),1)])]),_:3},8,["class"])):b("",!0),s.description||o.description?(r(),f(e(J),{key:1,class:D(n.value.description({class:(S=t.ui)==null?void 0:S.description}))},{default:d(()=>[c(s.$slots,"description",{},()=>[w(k(s.description),1)])]),_:3},8,["class"])):b("",!0)],2),s.close||o.close?(r(),f(e(ke),{key:0,"as-child":""},{default:d(()=>[c(s.$slots,"close",{ui:n.value},()=>{var j;return[s.close?(r(),f(me,O({key:0,icon:s.closeIcon||e(y).ui.icons.close,size:"md",color:"neutral",variant:"ghost","aria-label":e(v)("modal.close")},typeof s.close=="object"?s.close:{},{class:n.value.close({class:(j=t.ui)==null?void 0:j.close})}),null,16,["icon","aria-label","class"])):b("",!0)]})]),_:3})):b("",!0)]})],2)):b("",!0),o.body?(r(),A("div",{key:1,class:D(n.value.body({class:(T=t.ui)==null?void 0:T.body}))},[c(s.$slots,"body")],2)):b("",!0),o.footer?(r(),A("div",{key:2,class:D(n.value.footer({class:(V=t.ui)==null?void 0:V.footer}))},[c(s.$slots,"footer")],2)):b("",!0)]})]),_:3},16,["class"])]}),_:3},8,["disabled"])]),_:3},16))}}),Te=Object.assign(Ie,{__name:"UModal"});export{Te as _};
