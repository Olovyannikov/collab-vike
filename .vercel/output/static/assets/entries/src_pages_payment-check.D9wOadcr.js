import{z as i,j as r,D as T,F as s,i as c,o as h,a as S,b as m,c as g,d as y,R as v}from"../chunks/chunk-CTUfgmOZ.js";import{g as o,$ as l,a as x,b as n}from"../chunks/chunk-DdozDyvt.js";import{H as P}from"../chunks/chunk-cVAAGMtw.js";import{M as w}from"../chunks/chunk-CJF8S2K6.js";import"../chunks/chunk-ASQl6zNv.js";import{P as z}from"../chunks/chunk-YCOHuzKV.js";import{I as U}from"../chunks/chunk-BCp1_-AV.js";/* empty css                      */import"../chunks/chunk-B7IjmMtm.js";/* empty css                      */import"../chunks/chunk-DDXIYpn5.js";import"../chunks/chunk-Bus-W5S1.js";import"../chunks/chunk-DggmYCCI.js";import"../chunks/chunk-CFcYA5ax.js";import"../chunks/chunk-Kxx70QbB.js";import"../chunks/chunk-Bgp8MywM.js";import"../chunks/chunk-Dg5DYF3k.js";import"../chunks/chunk-BbMBgJ5h.js";import"../chunks/chunk-Fq4xbbXr.js";import"../chunks/chunk-iZ2L0nw_.js";import"../chunks/chunk-CcAsZAUm.js";import"../chunks/chunk-1r0-WiQF.js";const j=e=>{let t={title:"Не получилось провести оплату.",text:"К сожалению, ваша оплата не прошла успешно. Пожалуйста, попробуйте снова или обратитесь в нашу службу поддержки для решения этого вопроса. Мы всегда готовы помочь вам завершить процесс и предоставить доступ к вашим результатам.",buttonText:"Повторить попытку оплаты"};return e==="paid"&&(t={title:"Оплата прошла успешно!",text:"Вы можете перейти к своему отчету, просто нажав на кнопку ниже, либо воспользоваться ссылкой,которая была отправлена на ваш электронный адрес. Если у вас появятся вопросы или понадобится помощь, наша команда всегда на связи.",buttonText:"Посмотреть полный отчет"}),t};function A(){const{pending:e}=i(o),{status:t,order:a}=i({order:l,status:x}),{title:p,buttonText:u,text:f}=j(t);return e||!a?r.jsx(z,{}):r.jsxs(U,{title:p,text:f,image:"/images/men-temp_large.webp",navigateTo:"/",backButtonText:"На главную",children:[r.jsx(w,{component:"a",href:t==="paid"?`/report/${a.user_report}`:"/",children:u}),r.jsx(P,{})]})}const E=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),d=T();s({and:[{clock:d,source:n,fn:e=>({id:e}),target:o.start}],or:{sid:"-atfxqt"}});s({and:[{clock:o.finished.success,source:n,fn:(e,t)=>t.result.user_orders.find(a=>a.id===e)??null,target:l}],or:{sid:"gnrwj9"}});const D=Object.freeze(Object.defineProperty({__proto__:null,pageStarted:d},Symbol.toStringTag,{value:"Module"})),Y={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:c}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:h}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:S}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Cognitive Lab"}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","lang"]},valueSerialized:{type:"js-serialized",value:"ru"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},onBeforeRenderClient:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+onBeforeRenderClient.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:m}]},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/widgets/RootLayout/index.tsx",fileExportPathToShowToUser:["RootLayout"]}],valueSerialized:[{type:"pointer-import",value:v}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/payment-check/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}},pageStarted:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/payment-check/+pageStarted.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:D}}};export{Y as configValuesSerialized};
