import{H as ot,r as Z,z as st,t as M,v as C,j as i,U as et,h as $,au as it,J as ct,L as rt,N as lt,ah as dt,ai as gt,am as ut,an as Pt,ao as ht,av as w,X as mt}from"./chunk-aRuK0v6P.js";function x(n,t){const a=t-n+1;return Array.from({length:a},(o,c)=>c+n)}const z="dots";function pt({total:n,siblings:t=1,boundaries:a=1,page:o,initialPage:c=1,onChange:e}){const s=Math.max(Math.trunc(n),0),[r,g]=ot({value:o,onChange:e,defaultValue:c,finalValue:c}),d=v=>{v<=0?g(1):v>s?g(s):g(v)},u=()=>d(r+1),l=()=>d(r-1),h=()=>d(1),m=()=>d(s);return{range:Z.useMemo(()=>{if(t*2+3+a*2>=s)return x(1,s);const _=Math.max(r-t,a),b=Math.min(r+t,s-a),I=_>a+2,N=b<s-(a+1);if(!I&&N){const f=t*2+a+2;return[...x(1,f),z,...x(s-(a-1),s)]}if(I&&!N){const f=a+1+2*t;return[...x(1,a),z,...x(s-f,s)]}return[...x(1,a),z,...x(_,b),z,...x(s-a+1,s)]},[s,t,r]),active:r,setPage:d,next:u,previous:l,first:h,last:m}}const[xt,R]=st("Pagination.Root component was not found in tree");var y={root:"m_4addd315",control:"m_326d024a",dots:"m_4ad7767d"};const vt={withPadding:!0},L=M((n,t)=>{const a=C("PaginationControl",vt,n),{classNames:o,className:c,style:e,styles:s,vars:r,active:g,disabled:d,withPadding:u,mod:l,...h}=a,m=R(),p=d||m.disabled;return i.jsx(et,{ref:t,disabled:p,mod:[{active:g,disabled:p,"with-padding":u},l],...m.getStyles("control",{className:c,style:e,classNames:o,styles:s,active:!p}),...h})});L.classes=y;L.displayName="@mantine/core/PaginationControl";function j({style:n,children:t,path:a,...o}){return i.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...n},...o,children:i.jsx("path",{d:a,fill:"currentColor"})})}const ft=n=>i.jsx(j,{...n,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),Ct=n=>i.jsx(j,{...n,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),yt=n=>i.jsx(j,{...n,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),Lt=n=>i.jsx(j,{...n,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),jt=n=>i.jsx(j,{...n,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"}),It={icon:jt},S=M((n,t)=>{const a=C("PaginationDots",It,n),{classNames:o,className:c,style:e,styles:s,vars:r,icon:g,...d}=a,u=R(),l=g;return i.jsx($,{ref:t,...u.getStyles("dots",{className:c,style:e,styles:s,classNames:o}),...d,children:i.jsx(l,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});S.classes=y;S.displayName="@mantine/core/PaginationDots";function F({icon:n,name:t,action:a,type:o}){const c={icon:n},e=Z.forwardRef((s,r)=>{const{icon:g,...d}=C(t,c,s),u=g,l=R(),h=o==="next"?l.active===l.total:l.active===1;return i.jsx(L,{disabled:l.disabled||h,ref:r,onClick:l[a],withPadding:!1,...d,children:i.jsx(u,{className:"mantine-rotate-rtl",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});return e.displayName=`@mantine/core/${t}`,it(e)}const A=F({icon:ft,name:"PaginationNext",action:"onNext",type:"next"}),B=F({icon:Ct,name:"PaginationPrevious",action:"onPrevious",type:"previous"}),U=F({icon:yt,name:"PaginationFirst",action:"onFirst",type:"previous"}),k=F({icon:Lt,name:"PaginationLast",action:"onLast",type:"next"});function E({dotsIcon:n}){const t=R(),a=t.range.map((o,c)=>{var e,s,r;return o==="dots"?i.jsx(S,{icon:n},c):i.jsx(L,{active:o===t.active,"aria-current":o===t.active?"page":void 0,onClick:()=>t.onChange(o),disabled:t.disabled,...(e=t.getItemProps)==null?void 0:e.call(t,o),children:((r=(s=t.getItemProps)==null?void 0:s.call(t,o))==null?void 0:r.children)??o},c)});return i.jsx(i.Fragment,{children:a})}E.displayName="@mantine/core/PaginationItems";const Nt={siblings:1,boundaries:1},wt=rt((n,{size:t,radius:a,color:o,autoContrast:c})=>({root:{"--pagination-control-radius":a===void 0?void 0:lt(a),"--pagination-control-size":dt(t,"pagination-control-size"),"--pagination-control-fz":gt(t),"--pagination-active-bg":o?ut(o,n):void 0,"--pagination-active-color":Pt(c,n)?ht({color:o,theme:n,autoContrast:c}):void 0}})),D=M((n,t)=>{const a=C("PaginationRoot",Nt,n),{classNames:o,className:c,style:e,styles:s,unstyled:r,vars:g,total:d,value:u,defaultValue:l,onChange:h,disabled:m,siblings:p,boundaries:v,color:_,radius:b,onNextPage:I,onPreviousPage:N,onFirstPage:f,onLastPage:H,getItemProps:O,autoContrast:Mt,...T}=a,V=ct({name:"Pagination",classes:y,props:a,className:c,style:e,classNames:o,styles:s,unstyled:r,vars:g,varsResolver:wt}),{range:G,setPage:J,next:W,previous:X,active:q,first:K,last:Q}=pt({page:u,initialPage:l,onChange:h,total:d,siblings:p,boundaries:v}),Y=w(I,W),tt=w(N,X),nt=w(f,K),at=w(H,Q);return i.jsx(xt,{value:{total:d,range:G,active:q,disabled:m,getItemProps:O,onChange:J,onNext:Y,onPrevious:tt,onFirst:nt,onLast:at,getStyles:V},children:i.jsx($,{ref:t,...V("root"),...T})})});D.classes=y;D.displayName="@mantine/core/PaginationRoot";const zt={withControls:!0,siblings:1,boundaries:1,gap:8},P=M((n,t)=>{const a=C("Pagination",zt,n),{withEdges:o,withControls:c,getControlProps:e,nextIcon:s,previousIcon:r,lastIcon:g,firstIcon:d,dotsIcon:u,total:l,gap:h,hideWithOnePage:m,...p}=a;return l<=0||m&&l===1?null:i.jsx(D,{ref:t,total:l,...p,children:i.jsxs(mt,{gap:h,children:[o&&i.jsx(U,{icon:d,...e==null?void 0:e("first")}),c&&i.jsx(B,{icon:r,...e==null?void 0:e("previous")}),i.jsx(E,{dotsIcon:u}),c&&i.jsx(A,{icon:s,...e==null?void 0:e("next")}),o&&i.jsx(k,{icon:g,...e==null?void 0:e("last")})]})})});P.classes=y;P.displayName="@mantine/core/Pagination";P.Root=D;P.Control=L;P.Dots=S;P.First=U;P.Last=k;P.Next=A;P.Previous=B;P.Items=E;export{P};
