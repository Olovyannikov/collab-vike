import{af as _,h as v,s as x,j as y,B as z,v as S,ad as j,ae as P,aL as B,a7 as F,p as L,g as V}from"./chunk-CTUfgmOZ.js";var T={root:"m_b6d8b162"};function C(t){if(t==="start")return"start";if(t==="end"||t)return"end"}const E={inherit:!1},G=S((t,{variant:n,lineClamp:e,gradient:a,size:i,color:s})=>({root:{"--text-fz":j(i),"--text-lh":P(i),"--text-gradient":n==="gradient"?B(a,t):void 0,"--text-line-clamp":typeof e=="number"?e.toString():void 0,"--text-color":s?F(s,t):void 0}})),$=_((t,n)=>{const e=v("Text",E,t),{lineClamp:a,truncate:i,inline:s,inherit:o,gradient:g,span:r,__staticSelector:l,vars:c,className:m,style:f,classNames:p,styles:h,unstyled:d,variant:u,mod:w,size:H,...R}=e,W=x({name:["Text",l],props:e,classes:T,className:m,style:f,classNames:p,styles:h,unstyled:d,vars:c,varsResolver:G});return y.jsx(z,{...W("root",{focusable:!0}),ref:n,component:r?"span":"p",variant:u,mod:[{"data-truncate":C(i),"data-line-clamp":typeof a=="number","data-inline":s,"data-inherit":o},w],size:H,...R})});$.classes=T;$.displayName="@mantine/core/Text";const k=["h1","h2","h3","h4","h5","h6"],q=["xs","sm","md","lg","xl"];function A(t,n){const e=n!==void 0?n:`h${t}`;return k.includes(e)?{fontSize:`var(--mantine-${e}-font-size)`,fontWeight:`var(--mantine-${e}-font-weight)`,lineHeight:`var(--mantine-${e}-line-height)`}:q.includes(e)?{fontSize:`var(--mantine-font-size-${e})`,fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}:{fontSize:L(e),fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}}var b={root:"m_8a5d1357"};const D={order:1},I=S((t,{order:n,size:e,lineClamp:a,textWrap:i})=>{const s=A(n,e);return{root:{"--title-fw":s.fontWeight,"--title-lh":s.lineHeight,"--title-fz":s.fontSize,"--title-line-clamp":typeof a=="number"?a.toString():void 0,"--title-text-wrap":i}}}),N=V((t,n)=>{const e=v("Title",D,t),{classNames:a,className:i,style:s,styles:o,unstyled:g,order:r,vars:l,size:c,variant:m,lineClamp:f,textWrap:p,mod:h,...d}=e,u=x({name:"Title",props:e,classes:b,className:i,style:s,classNames:a,styles:o,unstyled:g,vars:l,varsResolver:I});return[1,2,3,4,5,6].includes(r)?y.jsx(z,{...u("root"),component:`h${r}`,variant:m,ref:n,mod:[{order:r,"data-line-clamp":typeof f=="number"},h],size:c,...d}):null});N.classes=b;N.displayName="@mantine/core/Title";export{N as T,$ as a};
