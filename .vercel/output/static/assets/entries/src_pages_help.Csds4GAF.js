import{r as p,l as z,_ as I,m as B,n as M,p as q,j as s,g as V,q as N,x as $,s as O,h as G,i as Y,o as X,a as Z,b as J,c as K,d as Q,R as ee}from"../chunks/chunk-ghiSciBk.js";import{i as te}from"../chunks/chunk-xwaEhPPG.js";import{M as re}from"../chunks/chunk-BJM_8Jhx.js";import"../chunks/chunk-ASQl6zNv.js";import{u as ae,F as oe,a as b}from"../chunks/chunk-s3S_eQqa.js";import{I as U}from"../chunks/chunk-Bfedm1qN.js";import{I as ie}from"../chunks/chunk-503L6oX_.js";import{T as R}from"../chunks/chunk-BfTxiJep.js";/* empty css                      */import"../chunks/chunk-B7IjmMtm.js";/* empty css                      */import"../chunks/chunk-DDXIYpn5.js";import"../chunks/chunk-BzvDQ7H5.js";import"../chunks/chunk-FDnwkDT-.js";import"../chunks/chunk-Dw2RImt7.js";import"../chunks/chunk-Dk4_YwO7.js";import"../chunks/chunk-DZBXMaph.js";import"../chunks/chunk-BbMBgJ5h.js";import"../chunks/chunk-DQ9UAh4q.js";import"../chunks/chunk-iZ2L0nw_.js";import"../chunks/chunk-CcAsZAUm.js";var ne={};function se(){return typeof process<"u"&&ne?"production":"development"}var le=p.useLayoutEffect,de=function(e){var t=z.useRef(e);return le(function(){t.current=e}),t},L=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},ue=function(e,t){var r=z.useRef();return z.useCallback(function(o){e.current=o,r.current&&L(r.current,null),r.current=t,t&&L(t,o)},[t])},j={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},pe=function(e){Object.keys(j).forEach(function(t){e.style.setProperty(t,j[t],"important")})},A=pe,i=null,H=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function fe(a,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),i||(i=document.createElement("textarea"),i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true"),A(i)),i.parentNode===null&&document.body.appendChild(i);var o=a.paddingSize,u=a.borderSize,n=a.sizingStyle,l=n.boxSizing;Object.keys(n).forEach(function(g){var v=g;i.style[v]=n[v]}),A(i),i.value=e;var d=H(i,a);i.value=e,d=H(i,a),i.value="x";var f=i.scrollHeight-o,c=f*t;l==="border-box"&&(c=c+o+u),d=Math.max(c,d);var m=f*r;return l==="border-box"&&(m=m+o+u),d=Math.min(m,d),[d,f]}var C=function(){},ce=function(e,t){return e.reduce(function(r,o){return r[o]=t[o],r},{})},he=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],me=!!document.documentElement.currentStyle,ge=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=ce(he,t),o=r.boxSizing;if(o==="")return null;me&&o==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var u=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),n=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:u,borderSize:n}},ve=ge;function _(a,e,t){var r=de(t);p.useLayoutEffect(function(){var o=function(n){return r.current(n)};if(a)return a.addEventListener(e,o),function(){return a.removeEventListener(e,o)}},[])}var Se=function(e){_(window,"resize",e)},xe=function(e){_(document.fonts,"loadingdone",e)},ye=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Te=function(e,t){var r=e.cacheMeasurements,o=e.maxRows,u=e.minRows,n=e.onChange,l=n===void 0?C:n,d=e.onHeightChange,f=d===void 0?C:d,c=I(e,ye),m=c.value!==void 0,g=p.useRef(null),v=ue(g,t),P=p.useRef(0),y=p.useRef(),S=function(){var h=g.current,T=r&&y.current?y.current:ve(h);if(T){y.current=T;var E=fe(T,h.value||h.placeholder||"x",u,o),x=E[0],D=E[1];P.current!==x&&(P.current=x,h.style.setProperty("height",x+"px","important"),f(x,{rowHeight:D}))}},k=function(h){m||S(),l(h)};return p.useLayoutEffect(S),Se(S),xe(S),p.createElement("textarea",B({},c,{onChange:k,ref:v}))},be=p.forwardRef(Te);const ze={},w=M((a,e)=>{const{autosize:t,maxRows:r,minRows:o,__staticSelector:u,resize:n,...l}=q("Textarea",ze,a),d=t&&se()!=="test",f=d?{maxRows:r,minRows:o}:{};return s.jsx(U,{component:d?be:"textarea",ref:e,...l,__staticSelector:u||"Textarea",multiline:!0,"data-no-overflow":t&&r===void 0||void 0,__vars:{"--input-resize":n},...f})});w.classes=U.classes;w.displayName="@mantine/core/Textarea";const we=V(()=>{O.show({title:"Успешно!",message:"Ваш вопрос отправлен"})},{name:"sendHelpForm",sid:"-egjyi2"}),F=N({name:"submitHelpForm",sid:"l2rjq0"});$({and:[{clock:F,fn:a=>{console.log({data:a})},target:we}],or:{sid:"q8do6s"}});const Pe=()=>{const{submitFormHandler:a}=G({submitFormHandler:F}),e=ae({mode:"controlled",initialValues:{name:"",email:"",theme:"",question:""},validate:{email:l=>/^\S+@\S+$/.test(l)?null:"Неправильный email",question:l=>l.length>0?null:"Введите ваш вопрос"}}),t={label:"Имя",placeholder:"Как к Вам обращаться?",key:e.key("name"),...e.getInputProps("name")},r={label:"Электронная почта",placeholder:"name@mail.ru",withAsterisk:!0,key:e.key("email"),...e.getInputProps("email")},o={label:"Тема вопроса",placeholder:"С чем связан вопрос?",key:e.key("theme"),...e.getInputProps("theme")},u={label:"Ваш вопрос",placeholder:"Принимаем вопросы, замечания, предложения",withAsterisk:!0,key:e.key("question"),...e.getInputProps("question")},n=e.onSubmit(l=>{a(l)});return{nameProps:t,emailProps:r,themeProps:o,questionProps:u,onSubmit:n}},Ee=()=>{const{nameProps:a,themeProps:e,emailProps:t,questionProps:r,onSubmit:o}=Pe();return s.jsxs(oe,{onSubmit:o,children:[s.jsx(b,{...a}),s.jsx(b,{...e}),s.jsx(b,{...t}),s.jsx(w,{...r}),s.jsx(re,{type:"submit",fullWidth:!0,children:"Отправить"})]})};function Re(){return s.jsx(ie,{title:"Служба поддержки",text:s.jsxs(s.Fragment,{children:["Чтобы связаться с нами, заполните форму. Мы стараемся отвечать в течение часа, однако в некоторых случаях это может занять больше времени. Самый быстрый способ получить ответ — через"," ",s.jsx(R,{component:"a",c:"blue.7",td:"underline",target:"_blank",href:"https://t.me/cognitivelab_ru",children:"Telegram"})," ","или"," ",s.jsx(R,{td:"underline",component:"a",c:"blue.7",target:"_blank",href:"https://api.whatsapp.com/send/?phone=79043330809",children:"WhatsApp"}),"."]}),image:"/images/men-temp_large.webp",children:s.jsx(Ee,{})})}const Le=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),Ze={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:Y}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:X}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:Z}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Cognitive Lab"}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","lang"]},valueSerialized:{type:"js-serialized",value:"ru"}},reactStrictMode:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","reactStrictMode"]},valueSerialized:{type:"js-serialized",value:!1}},onBeforeRenderClient:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+onBeforeRenderClient.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:J}]},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Q}},pageStarted:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+pageStarted.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:te}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/widgets/RootLayout/index.tsx",fileExportPathToShowToUser:["RootLayout"]}],valueSerialized:[{type:"pointer-import",value:ee}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/help/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Le}}};export{Ze as configValuesSerialized};
