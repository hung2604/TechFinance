import{i as I,g as y,w as v,f as g}from"./BP0QYP2S.js";import{f as w,p as l,ab as F,g as K,i as h,L as C,o as S,w as u,b as T,x as n,P as x,M as B,n as k}from"./oqaamrP9.js";import{a as M}from"./VH0Qlokb.js";const N=w({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(d){const i=d,a=I(),f=M(),r=l(()=>i.tabStopId||f),c=l(()=>a.currentTabStopId.value===r.value),{getItems:p,CollectionItem:m}=F();K(()=>{i.focusable&&a.onFocusableItemAdd()}),h(()=>{i.focusable&&a.onFocusableItemRemove()});function b(e){if(e.key==="Tab"&&e.shiftKey){a.onItemShiftTab();return}if(e.target!==e.currentTarget)return;const t=y(e,a.orientation.value,a.dir.value);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||!i.allowShiftKey&&e.shiftKey)return;e.preventDefault();let o=[...p().map(s=>s.ref).filter(s=>s.dataset.disabled!=="")];if(t==="last")o.reverse();else if(t==="prev"||t==="next"){t==="prev"&&o.reverse();const s=o.indexOf(e.currentTarget);o=a.loop.value?v(o,s+1):o.slice(s+1)}k(()=>g(o))}}return(e,t)=>(S(),C(n(m),null,{default:u(()=>[T(n(x),{tabindex:c.value?0:-1,"data-orientation":n(a).orientation.value,"data-active":e.active,"data-disabled":e.focusable?void 0:"",as:e.as,"as-child":e.asChild,onMousedown:t[0]||(t[0]=o=>{e.focusable?n(a).onItemFocus(r.value):o.preventDefault()}),onFocus:t[1]||(t[1]=o=>n(a).onItemFocus(r.value)),onKeydown:b},{default:u(()=>[B(e.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});export{N as _};
