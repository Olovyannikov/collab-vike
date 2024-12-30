import{l as ae,m as x,n as S,j as n,aq as oe,ar as re,as as ne,at as le,s as V,au as ce,av as de,y as ie,aw as ue,x as C,C as me,D as fe,P as pe,aj as ge,r as k,ax as ye,a0 as D,$ as he,Q as O,W as v,X as f,ay as T,a4 as X,aa as xe}from"./chunk-Bh0Djd6l.js";import{B as Se,M as ve,n as $e}from"./chunk-DBsLdM3t.js";import"./chunk-C78j02Lg.js";import{T as be}from"./chunk-D3GhrS0l.js";import{I as Me,a as je,j as we,c as Pe,H as ke}from"./chunk-DT8M1kGl.js";import{a as N,$ as Fe,d as Ce}from"./chunk-CcF_AdQP.js";const[Oe,M]=ae("Modal component was not found in tree");var h={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"};const Te={},B=x((e,t)=>{const a=S("ModalBody",Te,e),{classNames:s,className:o,style:r,styles:l,vars:i,...u}=a,c=M();return n.jsx(oe,{ref:t,...c.getStyles("body",{classNames:s,style:r,styles:l,className:o}),...u})});B.classes=h;B.displayName="@mantine/core/ModalBody";const Ne={},I=x((e,t)=>{const a=S("ModalCloseButton",Ne,e),{classNames:s,className:o,style:r,styles:l,vars:i,...u}=a,c=M();return n.jsx(re,{ref:t,...c.getStyles("close",{classNames:s,style:r,styles:l,className:o}),...u})});I.classes=h;I.displayName="@mantine/core/ModalCloseButton";const Be={},_=x((e,t)=>{const a=S("ModalContent",Be,e),{classNames:s,className:o,style:r,styles:l,vars:i,children:u,__hidden:c,...d}=a,p=M(),$=p.scrollAreaComponent||ne;return n.jsx(le,{...p.getStyles("content",{className:o,style:r,styles:l,classNames:s}),innerProps:p.getStyles("inner",{className:o,style:r,styles:l,classNames:s}),"data-full-screen":p.fullScreen||void 0,"data-modal-content":!0,"data-hidden":c||void 0,ref:t,...d,children:n.jsx($,{style:{maxHeight:p.fullScreen?"100dvh":`calc(100dvh - (${V(p.yOffset)} * 2))`},children:u})})});_.classes=h;_.displayName="@mantine/core/ModalContent";const Ie={},Q=x((e,t)=>{const a=S("ModalHeader",Ie,e),{classNames:s,className:o,style:r,styles:l,vars:i,...u}=a,c=M();return n.jsx(ce,{ref:t,...c.getStyles("header",{classNames:s,style:r,styles:l,className:o}),...u})});Q.classes=h;Q.displayName="@mantine/core/ModalHeader";const _e={},z=x((e,t)=>{const a=S("ModalOverlay",_e,e),{classNames:s,className:o,style:r,styles:l,vars:i,...u}=a,c=M();return n.jsx(de,{ref:t,...c.getStyles("overlay",{classNames:s,style:r,styles:l,className:o}),...u})});z.classes=h;z.displayName="@mantine/core/ModalOverlay";const Qe={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:C("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},ze=me((e,{radius:t,size:a,yOffset:s,xOffset:o})=>({root:{"--modal-radius":t===void 0?void 0:fe(t),"--modal-size":pe(a,"modal-size"),"--modal-y-offset":V(s),"--modal-x-offset":V(o)}})),R=x((e,t)=>{const a=S("ModalRoot",Qe,e),{classNames:s,className:o,style:r,styles:l,unstyled:i,vars:u,yOffset:c,scrollAreaComponent:d,radius:p,fullScreen:$,centered:m,xOffset:q,__staticSelector:H,...A}=a,L=ie({name:H,classes:h,props:a,className:o,style:r,classNames:s,styles:l,unstyled:i,vars:u,varsResolver:ze});return n.jsx(Oe,{value:{yOffset:c,scrollAreaComponent:d,getStyles:L,fullScreen:$},children:n.jsx(ue,{ref:t,...L("root"),"data-full-screen":$||void 0,"data-centered":m||void 0,unstyled:i,...A})})});R.classes=h;R.displayName="@mantine/core/ModalRoot";const[Re,Ee]=ge();function J({children:e}){const[t,a]=k.useState([]),[s,o]=k.useState(C("modal"));return n.jsx(Re,{value:{stack:t,addModal:(r,l)=>{a(i=>[...new Set([...i,r])]),o(i=>typeof l=="number"&&typeof i=="number"?Math.max(i,l):i)},removeModal:r=>a(l=>l.filter(i=>i!==r)),getZIndex:r=>`calc(${s} + ${t.indexOf(r)} + 1)`,currentId:t[t.length-1],maxZIndex:s},children:e})}J.displayName="@mantine/core/ModalStack";const He={},E=x((e,t)=>{const a=S("ModalTitle",He,e),{classNames:s,className:o,style:r,styles:l,vars:i,...u}=a,c=M();return n.jsx(ye,{ref:t,...c.getStyles("title",{classNames:s,style:r,styles:l,className:o}),...u})});E.classes=h;E.displayName="@mantine/core/ModalTitle";const Ae={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:C("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},g=x((e,t)=>{const{title:a,withOverlay:s,overlayProps:o,withCloseButton:r,closeButtonProps:l,children:i,radius:u,opened:c,stackId:d,zIndex:p,...$}=S("Modal",Ae,e),m=Ee(),q=!!a||r,H=m&&d?{closeOnEscape:m.currentId===d,trapFocus:m.currentId===d,zIndex:m.getZIndex(d)}:{},A=s===!1?!1:d&&m?m.currentId===d:c;return k.useEffect(()=>{m&&d&&(c?m.addModal(d,p||C("modal")):m.removeModal(d))},[c,d,p]),n.jsxs(R,{ref:t,radius:u,opened:c,zIndex:m&&d?m.getZIndex(d):p,...$,...H,children:[s&&n.jsx(z,{visible:A,transitionProps:m&&d?{duration:0}:void 0,...o}),n.jsxs(_,{radius:u,__hidden:m&&d&&c?d!==m.currentId:!1,children:[q&&n.jsxs(Q,{children:[a&&n.jsx(E,{children:a}),r&&n.jsx(I,{...l})]}),n.jsx(B,{children:i})]})]})});g.classes=h;g.displayName="@mantine/core/Modal";g.Root=R;g.Overlay=z;g.Content=_;g.Body=B;g.Header=Q;g.Title=E;g.CloseButton=I;g.Stack=J;var Ve=typeof global=="object"&&global&&global.Object===Object&&global,Ze=typeof self=="object"&&self&&self.Object===Object&&self,De=Ve||Ze||Function("return this")(),F=De.Symbol,K=Object.prototype,Ge=K.hasOwnProperty,qe=K.toString,w=F?F.toStringTag:void 0;function Le(e){var t=Ge.call(e,w),a=e[w];try{e[w]=void 0;var s=!0}catch{}var o=qe.call(e);return s&&(t?e[w]=a:delete e[w]),o}var Ue=Object.prototype,We=Ue.toString;function Xe(e){return We.call(e)}var Je="[object Null]",Ke="[object Undefined]",U=F?F.toStringTag:void 0;function Ye(e){return e==null?e===void 0?Ke:Je:U&&U in Object(e)?Le(e):Xe(e)}function et(e){return e!=null&&typeof e=="object"}var tt=Array.isArray,st="[object Number]";function at(e){return typeof e=="number"||et(e)&&Ye(e)==st}const Ot=D({sid:"-idf33f",fn:()=>Me({effect:je(()=>({url:"/api/v1/surveys/questions"}))}),name:"getQuestionsQuery",method:"createQuery"}),j=D({sid:"-dwzmxg",fn:()=>we({effect:Pe(e=>({url:"/api/v1/surveys/answers/submit",method:ke.POST,body:e}))}),name:"submitAnswersMutation",method:"createMutation"}),ot=k.memo(({opened:e,onClose:t,onSubmit:a,loading:s})=>n.jsx(g,{opened:e,onClose:t,centered:!0,title:n.jsx(be,{fz:16,fw:"bold",children:"Завершить тестирование?"}),children:n.jsxs(he,{gap:"sm",justify:"end",children:[n.jsx(Se,{size:"sm",radius:"md",variant:"outline",c:"dark.7",bd:"1px solid var(--mantine-color-dark-7)",onClick:t,children:"Отменить"}),n.jsx(ve,{loading:s,size:"sm",radius:"md",onClick:a,children:"Завершить"})]})}));ot.displayName="SubmitTestModal";const rt=O({name:"scaleFormFieldChanged",sid:"xa64nj"}),nt=O({name:"formPageChanged",sid:"jlkrlc"}),lt=O({name:"submitScaleForm",sid:"-xmifwm"}),ct=O({name:"submitModalStateChanged",sid:"-uhnbja"}),Y={scaleFormFieldChanged:rt,formPageChanged:nt,submitModalStateChanged:ct,submitScaleForm:lt},dt=v(null,{name:"$surveyId",sid:"phgjfd"}),it=v(null,{name:"$preparedQuestions",sid:"twhx53"}),ut=v(1,{name:"$currentPage",sid:"v6oeh4"}),mt=v(null,{name:"$currentQuestion",sid:"-cgeoue"}),ft=v({answers:[]},{name:"$scaleForm",sid:"-34awu5"}),pt=v(null,{name:"$currentValue",sid:"vtre3e"}),gt=v(0,{name:"$currentProgress",sid:"-1fd944"}),yt=v(!1,{name:"$isSubmitModalShown",sid:"-o7do0x"}),ht=j.$pending,y={$currentPage:ut,$currentValue:pt,$currentQuestion:mt,$preparedQuestions:it,$isLoadingState:ht,$scaleForm:ft,$isSubmitModalShown:yt,$currentProgress:gt,$surveyId:dt},{$currentPage:b,$preparedQuestions:W,$currentQuestion:xt,$scaleForm:P,$currentValue:ee}=y,{scaleFormFieldChanged:te,formPageChanged:G}=Y;f({and:[{clock:[b,W],source:{page:b,questions:W},fn:({page:e,questions:t})=>t?t[e-1]:null,target:xt}],or:{sid:"-ponxhz"}});f({and:[{clock:te,source:P,fn:(e,t)=>(e.answers[t.index]=t,{...e}),target:P}],or:{sid:"-p5yxbp"}});const se=D({sid:"bboj47",fn:()=>Ce(te,1e3),name:"delayed",method:"delay"});f({and:[{clock:se,source:b,filter:(e,t)=>!(t.isMultiple||t.isSingle),fn:e=>e+1,target:G}],or:{sid:"-obq8ou"}});f({and:[{clock:se,source:{form:P,page:b},filter:(e,t)=>!(t.isMultiple||t.isSingle),fn:({form:e,page:t})=>{const a=t-1;return e.answers&&e.answers.length>0&&"value"in e.answers[a].answer&&e.answers[a].answer.value?e.answers[a].answer.value:null},target:ee}],or:{sid:"-nvs7hd"}});f({and:[{clock:[P,G],source:{form:P,page:b},fn:({form:{answers:e},page:t},a)=>{var o;const s=(at(a)?a:t)-1;return(o=e[s])!=null&&o.answer?e&&e[s].answer&&tt(e[s].answer)||e&&e.length>0&&e[s].isSingle?e[s].answer:e&&e.length>0&&"value"in e[s].answer?e[s].answer.value:null:null},target:ee}],or:{sid:"-mwldi9"}});f({and:[{clock:G,fn:e=>(window.scrollTo(0,0),e),target:b}],or:{sid:"-lunkkc"}});N({store:Fe,pickup:T.appStarted});const{$scaleForm:St,$isSubmitModalShown:Z}=y,{submitScaleForm:vt,submitModalStateChanged:$t}=Y,bt=X(async()=>{await $e("/free-report")},{name:"redirectToFreeReportPageFx",sid:"-r2e0tw"}),Mt=X(async e=>{xe.show({color:"red",title:"Ошибка!",message:e})},{name:"showSubmitErrorFx",sid:"icm0c9"});f({and:[{clock:$t,source:Z,fn:e=>!e,target:Z}],or:{sid:"6kdsv9"}});f({and:[{clock:vt,source:St,target:j.start}],or:{sid:"6zs1hd"}});f({and:[{clock:j.finished.success,fn:()=>!1,target:Z}],or:{sid:"732t1j"}});f({and:[{clock:j.finished.success,filter:()=>!(window!=null&&window.location.origin.includes("free-report")),fn:({result:e})=>e.id,target:y.$surveyId}],or:{sid:"7hx92a"}});f({and:[{clock:j.finished.success,filter:()=>!(window!=null&&window.location.origin.includes("free-report")),target:bt}],or:{sid:"7xbhoe"}});f({and:[{clock:j.finished.failure,fn:e=>e.error.message,target:Mt}],or:{sid:"80m98k"}});f({and:[{clock:y.$scaleForm,source:{questions:y.$preparedQuestions,form:y.$scaleForm},fn:({questions:e,form:{answers:t}})=>Number((t.length/((e==null?void 0:e.length)??0)*100).toFixed(0)),target:y.$currentProgress}],or:{sid:"-hdmfhh"}});N({store:y.$currentPage,pickup:T.appStarted});N({store:y.$scaleForm,pickup:T.appStarted});N({store:y.$currentProgress,pickup:T.appStarted});export{ot as S,y as T,Y as a,Ot as g,tt as i};