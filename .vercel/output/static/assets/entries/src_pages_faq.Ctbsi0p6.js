import{r as E,s as re,t as ae,v as ie,w as z,f as A,y as se,z as le,j as n,B as T,e as V,A as I,U as ce,D as de,g as ue,E as pe,h as fe,F as he,H as me,n as W,m as ye,i as ve,o as ge,a as Se,b as xe,c as we,d as Te,R as Pe}from"../chunks/chunk-DGa-HmGp.js";import{i as Ae}from"../chunks/chunk-D6-FKnFY.js";import{I as be,c as Ce,M as je}from"../chunks/chunk-axh8FFPw.js";import{A as ze}from"../chunks/chunk-DcwgW6-3.js";import{c as Re,E as Ue,l as De}from"../chunks/chunk-BoHiZZ93.js";import{M as Ee}from"../chunks/chunk-Cn2JCNVi.js";import{s as Ie}from"../chunks/chunk-B8NPj69r.js";import{u as _e}from"../chunks/chunk-Bhj8GUfr.js";import{T as Ne,a as B}from"../chunks/chunk-CHMkUAyH.js";import{P as $e}from"../chunks/chunk-DHi_rp7_.js";/* empty css                      */import"../chunks/chunk-B7IjmMtm.js";/* empty css                      */import"../chunks/chunk-DGeuZ91u.js";import"../chunks/chunk-DwaozxT7.js";function k(e,t){return o=>{if(typeof o!="string"||o.trim().length===0)throw new Error(t);return`${e}-${o}`}}function q(e,t){return Array.isArray(e)?[...e].reduce((o,i)=>({...o,...q(i,t)}),{}):typeof e=="function"?e(t):e??{}}function Le(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function D(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const P=typeof window<"u"&&window.requestAnimationFrame;function Me({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:o=()=>{},opened:i}){const u=E.useRef(null),l=0,m={display:"none",height:0,overflow:"hidden"},[p,f]=E.useState(i?{}:m),c=s=>{ie.flushSync(()=>f(s))},a=s=>{c(d=>({...d,...s}))};function v(s){const d=e||Le(s);return{transition:`height ${d}ms ${t}, opacity ${d}ms ${t}`}}re(()=>{typeof P=="function"&&P(i?()=>{a({willChange:"height",display:"block",overflow:"hidden"}),P(()=>{const s=D(u);a({...v(s),height:s})})}:()=>{const s=D(u);a({...v(s),willChange:"height",height:s}),P(()=>a({height:l,overflow:"hidden"}))})},[i]);const x=s=>{if(!(s.target!==u.current||s.propertyName!=="height"))if(i){const d=D(u);d===p.height?c({}):a({height:d}),o()}else p.height===l&&(c(m),o())};function y({style:s={},refKey:d="ref",...r}={}){const w=r[d];return{"aria-hidden":!i,...r,[d]:ae(u,w),onTransitionEnd:x,style:{boxSizing:"border-box",...s,...p}}}return y}const Oe={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},K=z((e,t)=>{const{children:o,in:i,transitionDuration:u,transitionTimingFunction:l,style:m,onTransitionEnd:p,animateOpacity:f,...c}=A("Collapse",Oe,e),a=se(),v=le(),y=(a.respectReducedMotion?v:!1)?0:u,s=Me({opened:i,transitionDuration:y,transitionTimingFunction:l,onTransitionEnd:p});return y===0?i?n.jsx(T,{...c,children:o}):null:n.jsx(T,{...s({style:{opacity:i||!f?1:0,transition:f?`opacity ${y}ms ${l}`:"none",...q(m,a)},ref:t,...c}),children:o})});K.displayName="@mantine/core/Collapse";const[Fe,_]=V("Accordion component was not found in the tree");function N({style:e,size:t=16,...o}){return n.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:I(t),height:I(t),display:"block"},...o,children:n.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}N.displayName="@mantine/core/AccordionChevron";const[Be,Z]=V("Accordion.Item component was not found in the tree");var b={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const ke={},$=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,chevron:p,icon:f,onClick:c,onKeyDown:a,children:v,disabled:x,mod:y,...s}=A("AccordionControl",ke,e),{value:d}=Z(),r=_(),w=r.isItemActive(d),O=typeof r.order=="number",R=`h${r.order}`,C=n.jsxs(ce,{...s,...r.getStyles("control",{className:i,classNames:o,style:u,styles:l,variant:r.variant}),unstyled:r.unstyled,mod:["accordion-control",{active:w,"chevron-position":r.chevronPosition,disabled:x},y],ref:t,onClick:j=>{c==null||c(j),r.onChange(d)},type:"button",disabled:x,"aria-expanded":w,"aria-controls":r.getRegionId(d),id:r.getControlId(d),onKeyDown:Re({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:r.loop,orientation:"vertical",onKeyDown:a}),children:[n.jsx(T,{component:"span",mod:{rotate:!r.disableChevronRotation&&w,position:r.chevronPosition},...r.getStyles("chevron",{classNames:o,styles:l}),children:p||r.chevron}),n.jsx("span",{...r.getStyles("label",{classNames:o,styles:l}),children:v}),f&&n.jsx(T,{component:"span",mod:{"chevron-position":r.chevronPosition},...r.getStyles("icon",{classNames:o,styles:l}),children:f})]});return O?n.jsx(R,{...r.getStyles("itemTitle",{classNames:o,styles:l}),children:C}):C});$.displayName="@mantine/core/AccordionControl";$.classes=b;const He={},L=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,value:p,mod:f,...c}=A("AccordionItem",He,e),a=_();return n.jsx(Be,{value:{value:p},children:n.jsx(T,{ref:t,mod:[{active:a.isItemActive(p)},f],...a.getStyles("item",{className:i,classNames:o,styles:l,style:u,variant:a.variant}),...c})})});L.displayName="@mantine/core/AccordionItem";L.classes=b;const Qe={},M=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,children:p,...f}=A("AccordionPanel",Qe,e),{value:c}=Z(),a=_();return n.jsx(K,{ref:t,...a.getStyles("panel",{className:i,classNames:o,style:u,styles:l}),...f,in:a.isItemActive(c),transitionDuration:a.transitionDuration??200,role:"region",id:a.getRegionId(c),"aria-labelledby":a.getControlId(c),children:n.jsx("div",{...a.getStyles("content",{classNames:o,styles:l}),children:p})})});M.displayName="@mantine/core/AccordionPanel";M.classes=b;const Ve={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:n.jsx(N,{})},We=fe((e,{transitionDuration:t,chevronSize:o,radius:i})=>({root:{"--accordion-transition-duration":t===void 0?void 0:`${t}ms`,"--accordion-chevron-size":o===void 0?void 0:I(o),"--accordion-radius":i===void 0?void 0:he(i)}}));function h(e){const t=A("Accordion",Ve,e),{classNames:o,className:i,style:u,styles:l,unstyled:m,vars:p,children:f,multiple:c,value:a,defaultValue:v,onChange:x,id:y,loop:s,transitionDuration:d,disableChevronRotation:r,chevronPosition:w,chevronSize:O,order:R,chevron:C,variant:j,radius:at,...X}=t,U=de(y),[g,Y]=_e({value:a,defaultValue:v,finalValue:c?[]:null,onChange:x}),ee=S=>Array.isArray(g)?g.includes(S):S===g,te=S=>{const oe=Array.isArray(g)?g.includes(S)?g.filter(ne=>ne!==S):[...g,S]:S===g?null:S;Y(oe)},F=ue({name:"Accordion",classes:b,props:t,className:i,style:u,classNames:o,styles:l,unstyled:m,vars:p,varsResolver:We});return n.jsx(Fe,{value:{isItemActive:ee,onChange:te,getControlId:k(`${U}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:k(`${U}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:d,disableChevronRotation:r,chevronPosition:w,order:R,chevron:C,loop:s,getStyles:F,variant:j,unstyled:m},children:n.jsx(T,{...F("root"),id:U,...X,variant:j,"data-accordion":!0,children:f})})}const qe=e=>e;h.extend=qe;h.withProps=pe(h);h.classes=b;h.displayName="@mantine/core/Accordion";h.Item=L;h.Panel=M;h.Control=$;h.Chevron=N;var Ke=Object.defineProperty,Ze=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Q=(e,t,o)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ye=(e,t)=>{for(var o in t||(t={}))Je.call(t,o)&&Q(e,o,t[o]);if(H)for(var o of H(t))Xe.call(t,o)&&Q(e,o,t[o]);return e},et=(e,t)=>Ze(e,Ge(t));const G=E.forwardRef((e,t)=>me.createElement(Ue,et(Ye({ref:t},e),{weights:De})));G.displayName="CaretDown";const J=W({sid:"o7xvz0",fn:()=>be({effect:Ce(()=>({url:ze.FAQ_LIST}))}),name:"getFAQQuery",method:"createQuery"});W({sid:"-hk692c",fn:()=>je(J),name:"none",method:"cache"});const tt=({items:e})=>n.jsx(h,{radius:0,variant:"filled",classNames:Ie,chevron:n.jsx(G,{weight:"bold",size:24}),children:e==null?void 0:e.map(t=>n.jsxs(h.Item,{value:t.title,children:[n.jsx(h.Control,{children:n.jsx(Ne,{fz:24,children:t.title})}),n.jsx(h.Panel,{children:n.jsx(Ee,{children:t.body.data})})]},t.id))}),ot=()=>{const{data:e}=ye(J);return e?n.jsx(T,{mb:32,children:n.jsx(tt,{items:e==null?void 0:e.payload})}):null};function nt(){return n.jsxs($e,{title:"Ответы на вопросы",children:[n.jsx(ot,{}),n.jsxs(B,{ta:"center",fz:20,children:["Остались вопросы? Напишите нам в"," ",n.jsx(B,{fz:20,component:"a",href:"/help",span:!0,c:"blue.7",children:"Службу поддержки"})]})]})}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),wt={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:ve}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:ge}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:Se}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Cognitive Lab"}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","lang"]},valueSerialized:{type:"js-serialized",value:"ru"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},onBeforeRenderClient:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+onBeforeRenderClient.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:xe}]},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:we}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Te}},pageStarted:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+pageStarted.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ae}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/widgets/RootLayout/index.tsx",fileExportPathToShowToUser:["RootLayout"]}],valueSerialized:[{type:"pointer-import",value:Pe}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/faq/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:rt}}};export{wt as configValuesSerialized};
