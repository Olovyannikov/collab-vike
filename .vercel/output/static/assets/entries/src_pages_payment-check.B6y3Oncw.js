import{u as T,m as s,j as o,q as h,x as l,i as S,o as m,a as g,b as y,c as v,d as x,R as P}from"../chunks/chunk-Bk084C9z.js";import{n as w,M as z}from"../chunks/chunk-CgaiKyeh.js";import"../chunks/chunk-ASQl6zNv.js";import{g as i,$ as n,a as U,b as d}from"../chunks/chunk-B8qbB2Nc.js";import{H as j}from"../chunks/chunk-B_eS1n6k.js";import{P as A}from"../chunks/chunk-Cpg2mx1a.js";import{I as E}from"../chunks/chunk-DO3-1hAU.js";/* empty css                      */import"../chunks/chunk-B7IjmMtm.js";/* empty css                      */import"../chunks/chunk-DsIpRudE.js";import"../chunks/chunk-C35chJPD.js";import"../chunks/chunk-DcwgW6-3.js";import"../chunks/chunk-CFcYA5ax.js";import"../chunks/chunk-33JJQHaU.js";import"../chunks/chunk-BtKjlYc6.js";import"../chunks/chunk-CRxMKHzU.js";import"../chunks/chunk-B74xlq9F.js";import"../chunks/chunk-Cxg4_e5S.js";import"../chunks/chunk-CGWifZIs.js";import"../chunks/chunk-C04oBjrl.js";import"../chunks/chunk-CTEXfQiH.js";import"../chunks/chunk-BZNI2sZZ.js";const b=e=>{let t={title:"Не получилось провести оплату.",text:"К сожалению, ваша оплата не прошла успешно. Пожалуйста, попробуйте снова или обратитесь в нашу службу поддержки для решения этого вопроса. Мы всегда готовы помочь вам завершить процесс и предоставить доступ к вашим результатам.",buttonText:"Повторить попытку оплаты"};return e==="paid"&&(t={title:"Оплата прошла успешно!",text:"Вы можете перейти к своему отчету, просто нажав на кнопку ниже, либо воспользоваться ссылкой,которая была отправлена на ваш электронный адрес. Если у вас появятся вопросы или понадобится помощь, наша команда всегда на связи.",buttonText:"Посмотреть полный отчет"}),t};function D(){const{urlParsed:{search:{order_id:e}}}=T(),{pending:t}=s(i),{status:a,order:r}=s({order:n,status:U}),{title:u,buttonText:f,text:c}=b(a);return e||w("/"),t||!r?o.jsx(A,{}):o.jsxs(E,{title:u,text:c,image:"/images/men-temp_large.webp",navigateTo:"/",backButtonText:"На главную",children:[o.jsx(z,{component:"a",href:a==="paid"?`/report/${r==null?void 0:r.user_report}`:"/",children:f}),o.jsx(j,{})]})}const _=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),p=h();l({and:[{clock:p,source:d,fn:e=>({id:e}),target:i.start}],or:{sid:"-atfxqt"}});l({and:[{clock:i.finished.success,source:d,fn:(e,t)=>t.result.user_orders.find(a=>a.id===e)??null,target:n}],or:{sid:"gnrwj9"}});const R=Object.freeze(Object.defineProperty({__proto__:null,pageStarted:p},Symbol.toStringTag,{value:"Module"})),ae={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:S}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:m}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:g}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Cognitive Lab"}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","lang"]},valueSerialized:{type:"js-serialized",value:"ru"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},onBeforeRenderClient:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+onBeforeRenderClient.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:y}]},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/widgets/RootLayout/index.tsx",fileExportPathToShowToUser:["RootLayout"]}],valueSerialized:[{type:"pointer-import",value:P}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/payment-check/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},pageStarted:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/payment-check/+pageStarted.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:R}}};export{ae as configValuesSerialized};
