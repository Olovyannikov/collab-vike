import{r as F,p as te,q as oe,s as ne,t as z,v as P,w as ae,y as re,j as n,h as A,z as Q,D as _,U as ie,E as se,G as le,H as de,J as ce,K as ue,L as pe,N as he,k as O,l as fe,m as me,A as ye,O as ve,P as ge,T as Se,g as xe,f as B,i as Te,o as Ae,a as we,b as Pe,c as Ce,d as be,R as je}from"../chunks/chunk-CChYhnZI.js";import{i as ze}from"../chunks/chunk-ss7qjIyH.js";import{M as Re}from"../chunks/chunk-DCvaVYRY.js";import{s as Ue}from"../chunks/chunk-B1mO5bqM.js";import{P as De}from"../chunks/chunk-fV2VUowO.js";/* empty css                      */import"../chunks/chunk-DjClQUvI.js";/* empty css                      */import"../chunks/chunk-Cn-X2PZL.js";import"../chunks/chunk-4n9lNPDt.js";import"../chunks/chunk-BxBp0SIE.js";import"../chunks/chunk-noSfd3AH.js";import"../chunks/chunk-BeLGK-yd.js";import"../chunks/chunk-DAgojfjM.js";import"../chunks/chunk-CoHZ3gSO.js";import"../chunks/chunk-sTMZBbxg.js";import"../chunks/chunk-BXgSnkvC.js";import"../chunks/chunk-BfFJLfWq.js";import"../chunks/chunk-B-30aRae.js";function H(e,t){return o=>{if(typeof o!="string"||o.trim().length===0)throw new Error(t);return`${e}-${o}`}}function V(e,t){return Array.isArray(e)?[...e].reduce((o,i)=>({...o,...V(i,t)}),{}):typeof e=="function"?e(t):e??{}}function _e(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function D(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const w=typeof window<"u"&&window.requestAnimationFrame;function Ie({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:o=()=>{},opened:i}){const u=F.useRef(null),l=0,m={display:"none",height:0,overflow:"hidden"},[p,h]=F.useState(i?{}:m),d=s=>{ne.flushSync(()=>h(s))},r=s=>{d(c=>({...c,...s}))};function v(s){const c=e||_e(s);return{transition:`height ${c}ms ${t}, opacity ${c}ms ${t}`}}te(()=>{typeof w=="function"&&w(i?()=>{r({willChange:"height",display:"block",overflow:"hidden"}),w(()=>{const s=D(u);r({...v(s),height:s})})}:()=>{const s=D(u);r({...v(s),willChange:"height",height:s}),w(()=>r({height:l,overflow:"hidden"}))})},[i]);const x=s=>{if(!(s.target!==u.current||s.propertyName!=="height"))if(i){const c=D(u);c===p.height?d({}):r({height:c}),o()}else p.height===l&&(d(m),o())};function y({style:s={},refKey:c="ref",...a}={}){const T=a[c];return{"aria-hidden":!i,...a,[c]:oe(u,T),onTransitionEnd:x,style:{boxSizing:"border-box",...s,...p}}}return y}const Ee={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},W=z((e,t)=>{const{children:o,in:i,transitionDuration:u,transitionTimingFunction:l,style:m,onTransitionEnd:p,animateOpacity:h,...d}=P("Collapse",Ee,e),r=ae(),v=re(),y=(r.respectReducedMotion?v:!1)?0:u,s=Ie({opened:i,transitionDuration:y,transitionTimingFunction:l,onTransitionEnd:p});return y===0?i?n.jsx(A,{...d,children:o}):null:n.jsx(A,{...s({style:{opacity:i||!h?1:0,transition:h?`opacity ${y}ms ${l}`:"none",...V(m,r)},ref:t,...d}),children:o})});W.displayName="@mantine/core/Collapse";const[Ne,I]=Q("Accordion component was not found in the tree");function E({style:e,size:t=16,...o}){return n.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:_(t),height:_(t),display:"block"},...o,children:n.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}E.displayName="@mantine/core/AccordionChevron";const[Le,q]=Q("Accordion.Item component was not found in the tree");var C={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const $e={},N=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,chevron:p,icon:h,onClick:d,onKeyDown:r,children:v,disabled:x,mod:y,...s}=P("AccordionControl",$e,e),{value:c}=q(),a=I(),T=a.isItemActive(c),M=typeof a.order=="number",R=`h${a.order}`,b=n.jsxs(ie,{...s,...a.getStyles("control",{className:i,classNames:o,style:u,styles:l,variant:a.variant}),unstyled:a.unstyled,mod:["accordion-control",{active:T,"chevron-position":a.chevronPosition,disabled:x},y],ref:t,onClick:j=>{d==null||d(j),a.onChange(c)},type:"button",disabled:x,"aria-expanded":T,"aria-controls":a.getRegionId(c),id:a.getControlId(c),onKeyDown:se({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:a.loop,orientation:"vertical",onKeyDown:r}),children:[n.jsx(A,{component:"span",mod:{rotate:!a.disableChevronRotation&&T,position:a.chevronPosition},...a.getStyles("chevron",{classNames:o,styles:l}),children:p||a.chevron}),n.jsx("span",{...a.getStyles("label",{classNames:o,styles:l}),children:v}),h&&n.jsx(A,{component:"span",mod:{"chevron-position":a.chevronPosition},...a.getStyles("icon",{classNames:o,styles:l}),children:h})]});return M?n.jsx(R,{...a.getStyles("itemTitle",{classNames:o,styles:l}),children:b}):b});N.displayName="@mantine/core/AccordionControl";N.classes=C;const Me={},L=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,value:p,mod:h,...d}=P("AccordionItem",Me,e),r=I();return n.jsx(Le,{value:{value:p},children:n.jsx(A,{ref:t,mod:[{active:r.isItemActive(p)},h],...r.getStyles("item",{className:i,classNames:o,styles:l,style:u,variant:r.variant}),...d})})});L.displayName="@mantine/core/AccordionItem";L.classes=C;const ke={},$=z((e,t)=>{const{classNames:o,className:i,style:u,styles:l,vars:m,children:p,...h}=P("AccordionPanel",ke,e),{value:d}=q(),r=I();return n.jsx(W,{ref:t,...r.getStyles("panel",{className:i,classNames:o,style:u,styles:l}),...h,in:r.isItemActive(d),transitionDuration:r.transitionDuration??200,role:"region",id:r.getRegionId(d),"aria-labelledby":r.getControlId(d),children:n.jsx("div",{...r.getStyles("content",{classNames:o,styles:l}),children:p})})});$.displayName="@mantine/core/AccordionPanel";$.classes=C;const Fe={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:n.jsx(E,{})},Be=pe((e,{transitionDuration:t,chevronSize:o,radius:i})=>({root:{"--accordion-transition-duration":t===void 0?void 0:`${t}ms`,"--accordion-chevron-size":o===void 0?void 0:_(o),"--accordion-radius":i===void 0?void 0:he(i)}}));function f(e){const t=P("Accordion",Fe,e),{classNames:o,className:i,style:u,styles:l,unstyled:m,vars:p,children:h,multiple:d,value:r,defaultValue:v,onChange:x,id:y,loop:s,transitionDuration:c,disableChevronRotation:a,chevronPosition:T,chevronSize:M,order:R,chevron:b,variant:j,radius:qe,...G}=t,U=le(y),[g,J]=de({value:r,defaultValue:v,finalValue:d?[]:null,onChange:x}),Z=S=>Array.isArray(g)?g.includes(S):S===g,X=S=>{const Y=Array.isArray(g)?g.includes(S)?g.filter(ee=>ee!==S):[...g,S]:S===g?null:S;J(Y)},k=ce({name:"Accordion",classes:C,props:t,className:i,style:u,classNames:o,styles:l,unstyled:m,vars:p,varsResolver:Be});return n.jsx(Ne,{value:{isItemActive:Z,onChange:X,getControlId:H(`${U}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:H(`${U}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:c,disableChevronRotation:a,chevronPosition:T,order:R,chevron:b,loop:s,getStyles:k,variant:j,unstyled:m},children:n.jsx(A,{...k("root"),id:U,...G,variant:j,"data-accordion":!0,children:h})})}const He=e=>e;f.extend=He;f.withProps=ue(f);f.classes=C;f.displayName="@mantine/core/Accordion";f.Item=L;f.Panel=$;f.Control=N;f.Chevron=E;const K=O({sid:"o7xvz0",fn:()=>fe({effect:me(()=>({url:ye.FAQ_LIST}))}),name:"getFAQQuery",method:"createQuery"});O({sid:"-hk692c",fn:()=>ve(K),name:"none",method:"cache"});const Qe=({items:e})=>n.jsx(f,{radius:0,variant:"filled",classNames:Ue,chevron:n.jsx(ge,{weight:"bold",size:24}),children:e==null?void 0:e.map(t=>n.jsxs(f.Item,{value:t.title,children:[n.jsx(f.Control,{children:n.jsx(Se,{fz:24,children:t.title})}),n.jsx(f.Panel,{children:n.jsx(Re,{children:t.body.data})})]},t.id))}),Oe=()=>{const{data:e}=xe(K);return e?n.jsx(A,{mb:32,children:n.jsx(Qe,{items:e==null?void 0:e.payload})}):null};function Ve(){return n.jsxs(De,{title:"Ответы на вопросы",children:[n.jsx(Oe,{}),n.jsxs(B,{ta:"center",fz:20,children:["Остались вопросы? Напишите нам в"," ",n.jsx(B,{fz:20,component:"a",href:"/help",span:!0,c:"blue.7",children:"Службу поддержки"})]})]})}const We=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"})),ht={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:Te}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:Ae}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:we}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Cognitive Lab"}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","lang"]},valueSerialized:{type:"js-serialized",value:"ru"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},onBeforeRenderClient:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+onBeforeRenderClient.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:Pe}]},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ce}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:be}},pageStarted:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+pageStarted.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:ze}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/widgets/RootLayout/index.tsx",fileExportPathToShowToUser:["RootLayout"]}],valueSerialized:[{type:"pointer-import",value:je}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/faq/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:We}}};export{ht as configValuesSerialized};
