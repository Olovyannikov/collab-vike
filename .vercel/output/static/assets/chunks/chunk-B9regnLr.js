import{Z as l,r as y,g as r,W as i,X as d,j as n,ag as I,v as z}from"./chunk-DaWK8C2F.js";import{I as p,f as v,c as M}from"./chunk-BxHTwqsj.js";import{s as S}from"./chunk-64G7xTOu.js";const E={URL:"https://api.dev.cognitivelab.ru",PERSONALITY_TYPES:"/api/v1/surveys/personality-types",PERSONALITY_TYPE:e=>`/api/v1/surveys/personality-types/${e}`,SEND_FREE_EMAIL:"/api/v1/surveys/free-report/email",GET_REGULAR_PRICE:"/api/v1/payments/regular-price",GET_PROMO_PRICE:e=>`/api/v1/payments/promo-code-price?promo_code=${e}`,PURCHASE_REPORT:"/api/v1/payments/purchase-report"},X=l({sid:"-6flptg",fn:()=>p({effect:v(()=>({url:E.PERSONALITY_TYPES})),mapData:({result:e})=>e.map(t=>t.types).flat()}),name:"getPersonalityTypesQuery",method:"createQuery"});l({sid:"vyqxv0",fn:()=>p({effect:v(e=>({url:E.PERSONALITY_TYPE(e)}))}),name:"getPersonalityTypeQuery",method:"createQuery"});const T=l({sid:"3ardgj",fn:()=>p({effect:M(()=>({url:"/api/v1/surveys/free-report"}))}),name:"getFreeResultQuery",method:"createQuery"});var $=Object.defineProperty,o=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Z=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&f(e,a,t[a]);if(o)for(var a of o(t))h.call(t,a)&&f(e,a,t[a]);return e},_=(e,t)=>{var a={};for(var c in e)C.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(e!=null&&o)for(var c of o(e))t.indexOf(c)<0&&h.call(e,c)&&(a[c]=e[c]);return a};const j=y.forwardRef((e,t)=>{const a=e,{alt:c,color:b="currentColor",size:m="1em",weight:R="regular",mirrored:P=!1,children:A,weights:O}=a,w=_(a,["alt","color","size","weight","mirrored","children","weights"]);return r.createElement("svg",Z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:m,height:m,fill:b,viewBox:"0 0 256 256",transform:P?"scale(-1, 1)":void 0},w),!!c&&r.createElement("title",null,c),A,O.get(R))});j.displayName="SSRBase";const F=j,L=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",opacity:"0.2"}),r.createElement("path",{d:"M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z"}))]]);var N=Object.defineProperty,Q=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&g(e,a,t[a]);if(u)for(var a of u(t))k.call(t,a)&&g(e,a,t[a]);return e},G=(e,t)=>Q(e,Y(t));const s=y.forwardRef((e,t)=>r.createElement(F,G(D({ref:t},e),{weights:L})));s.displayName="Heart";const x=i(null,{name:"$freeResult",sid:"v8m1c0"}),H=i([],{name:"$freeContent",sid:"-g3cled"}),J=i({Введение:n.jsx(s,{size:20}),"Ваш психологический портрет":n.jsx(s,{size:20}),"Ключевые черты вашего характера":n.jsx(s,{size:20}),"Как вы думаете и принимаете решения":n.jsx(s,{size:20}),"Ваш карьерный путь":n.jsx(s,{size:20}),"Сильные и слабые стороны":n.jsx(s,{size:20}),"Ваш стиль общения и взаимодействия с другими":n.jsx(s,{size:20}),"Ловушки вашего разума - как их распознать и преодолеть":n.jsx(s,{size:20}),"Как стресс влияет на ваши решения":n.jsx(s,{size:20}),"Как сохранить внутренний баланс и энергию":n.jsx(s,{size:20}),"Знаменитости, похожие на вас":n.jsx(s,{size:20}),"Как вы строите отношения с окружающими":n.jsx(s,{size:20}),"Личный план развития":n.jsx(s,{size:20}),Заключение:n.jsx(s,{size:20})},{name:"$navigationIconMap",sid:"-rplmts"});d({and:[{clock:x,fn:e=>e?e.content.map(t=>({content:t.content,title:t.title})).flat().map(t=>({content:t.content.map(a=>a.content).flat(),title:t.title})).flat():[],target:H}],or:{sid:"f67boq"}});d({and:[{clock:T.finished.success,fn:({result:e})=>e,target:x}],or:{sid:"g0g0bl"}});const K=({children:e,className:t,...a})=>n.jsx(I,{className:z(S.container,t),...a,children:e}),V="/assets/static/man-temp_large.C17Lahl-.webp";export{H as $,E as A,F as E,K as I,J as a,X as b,x as c,T as g,V as m};
