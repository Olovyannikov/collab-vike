import{j as Y,_ as Ve,r as l,ai as ge}from"./chunk-Bh0Djd6l.js";import{s as ne}from"./chunk-FDnwkDT-.js";import{T as me}from"./chunk-C30RECLF.js";const ve=({onSubmit:t,children:e})=>Y.jsx("form",{onSubmit:t,children:Y.jsx(Ve,{className:ne.stackWrapper,children:e})}),ze=me.withProps({classNames:ne,size:"md"});function Se(t){if(!/^[0-9a-zA-Z-]+$/.test(t))throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`)}const pe=typeof window<"u"?l.useLayoutEffect:l.useEffect;function j(t,e){pe(()=>{if(t)return window.addEventListener(t,e),()=>window.removeEventListener(t,e)},[t])}function Fe(t,e){t&&Se(t),j(`mantine-form:${t}:set-field-value`,r=>e.setFieldValue(r.detail.path,r.detail.value)),j(`mantine-form:${t}:set-values`,r=>e.setValues(r.detail)),j(`mantine-form:${t}:set-initial-values`,r=>e.setInitialValues(r.detail)),j(`mantine-form:${t}:set-errors`,r=>e.setErrors(r.detail)),j(`mantine-form:${t}:set-field-error`,r=>e.setFieldError(r.detail.path,r.detail.error)),j(`mantine-form:${t}:clear-field-error`,r=>e.clearFieldError(r.detail)),j(`mantine-form:${t}:clear-errors`,e.clearErrors),j(`mantine-form:${t}:reset`,e.reset),j(`mantine-form:${t}:validate`,e.validate),j(`mantine-form:${t}:validate-field`,r=>e.validateField(r.detail)),j(`mantine-form:${t}:reorder-list-item`,r=>e.reorderListItem(r.detail.path,r.detail.payload)),j(`mantine-form:${t}:remove-list-item`,r=>e.removeListItem(r.detail.path,r.detail.index)),j(`mantine-form:${t}:insert-list-item`,r=>e.insertListItem(r.detail.path,r.detail.item,r.detail.index)),j(`mantine-form:${t}:set-dirty`,r=>e.setDirty(r.detail)),j(`mantine-form:${t}:set-touched`,r=>e.setTouched(r.detail)),j(`mantine-form:${t}:reset-dirty`,r=>e.resetDirty(r.detail)),j(`mantine-form:${t}:reset-touched`,e.resetTouched)}function je(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}function H(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const n=t[r];return n!=null&&n!==!1&&(e[r]=n),e},{})}function ke(t){const[e,r]=l.useState(H(t)),n=l.useRef(e),s=l.useCallback(u=>{r(a=>{const E=H(typeof u=="function"?u(a):u);return n.current=E,E})},[]),o=l.useCallback(()=>s({}),[]),c=l.useCallback(u=>{n.current[u]!==void 0&&s(a=>{const E={...a};return delete E[u],E})},[e]),f=l.useCallback((u,a)=>{a==null||a===!1?c(u):n.current[u]!==a&&s(E=>({...E,[u]:a}))},[e]);return{errorsState:e,setErrors:s,clearErrors:o,setFieldError:f,clearFieldError:c}}function U(t,e){if(e===null||typeof e!="object")return{};const r={...e};return Object.keys(e).forEach(n=>{n.includes(`${String(t)}.`)&&delete r[n]}),r}function G(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function x(t,e,r,n){if(e===void 0)return r;const s=`${String(t)}`;let o=r;n===-1&&(o=U(`${s}.${e}`,o));const c={...o},f=new Set;return Object.entries(o).filter(([u])=>{if(!u.startsWith(`${s}.`))return!1;const a=G(u,s);return Number.isNaN(a)?!1:a>=e}).forEach(([u,a])=>{const E=G(u,s),S=u.replace(`${s}.${E}`,`${s}.${E+n}`);c[S]=a,f.add(S),f.has(u)||delete c[u]}),c}function Oe(t,{from:e,to:r},n){const s=`${t}.${e}`,o=`${t}.${r}`,c={...n};return Object.keys(n).every(f=>{let u,a;if(f.startsWith(s)&&(u=f,a=f.replace(s,o)),f.startsWith(o)&&(u=f.replace(o,s),a=f),u&&a){const E=c[u],S=c[a];return S===void 0?delete c[u]:c[u]=S,E===void 0?delete c[a]:c[a]=E,!1}return!0}),c}function ee(t,e,r){typeof r.value=="object"&&(r.value=P(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function P(t){if(typeof t!="object")return t;var e=0,r,n,s,o=Object.prototype.toString.call(t);if(o==="[object Object]"?s=Object.create(t.__proto__||null):o==="[object Array]"?s=Array(t.length):o==="[object Set]"?(s=new Set,t.forEach(function(c){s.add(P(c))})):o==="[object Map]"?(s=new Map,t.forEach(function(c,f){s.set(P(f),P(c))})):o==="[object Date]"?s=new Date(+t):o==="[object RegExp]"?s=new RegExp(t.source,t.flags):o==="[object DataView]"?s=new t.constructor(P(t.buffer)):o==="[object ArrayBuffer]"?s=t.slice(0):o.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(n=Object.getOwnPropertySymbols(t);e<n.length;e++)ee(s,n[e],Object.getOwnPropertyDescriptor(t,n[e]));for(e=0,n=Object.getOwnPropertyNames(t);e<n.length;e++)Object.hasOwnProperty.call(s,r=n[e])&&s[r]===t[r]||ee(s,r,Object.getOwnPropertyDescriptor(t,r))}return s||t}function oe(t){return typeof t!="string"?[]:t.split(".")}function k(t,e){const r=oe(t);if(r.length===0||typeof e!="object"||e===null)return;let n=e[r[0]];for(let s=1;s<r.length&&n!=null;s+=1)n=n[r[s]];return n}function z(t,e,r){const n=oe(t);if(n.length===0)return r;const s=P(r);if(n.length===1)return s[n[0]]=e,s;let o=s[n[0]];for(let c=1;c<n.length-1;c+=1){if(o===void 0)return s;o=o[n[c]]}return o[n[n.length-1]]=e,s}function Ce(t,{from:e,to:r},n){const s=k(t,n);if(!Array.isArray(s))return n;const o=[...s],c=s[e];return o.splice(e,1),o.splice(r,0,c),z(t,o,n)}function De(t,e,r,n){const s=k(t,n);if(!Array.isArray(s))return n;const o=[...s];return o.splice(typeof r=="number"?r:o.length,0,e),z(t,o,n)}function we(t,e,r){const n=k(t,r);return Array.isArray(n)?z(t,n.filter((s,o)=>o!==e),r):r}function $e(t,e,r,n){const s=k(t,n);if(!Array.isArray(s)||s.length<=r)return n;const o=[...s];return o[r]=e,z(t,o,n)}function he({$values:t,$errors:e,$status:r}){const n=l.useCallback((f,u)=>{r.clearFieldDirty(f),e.setErrors(a=>Oe(f,u,a)),t.setValues({values:Ce(f,u,t.refValues.current),updateState:!0})},[]),s=l.useCallback((f,u)=>{r.clearFieldDirty(f),e.setErrors(a=>x(f,u,a,-1)),t.setValues({values:we(f,u,t.refValues.current),updateState:!0})},[]),o=l.useCallback((f,u,a)=>{r.clearFieldDirty(f),e.setErrors(E=>x(f,a,E,1)),t.setValues({values:De(f,u,a,t.refValues.current),updateState:!0})},[]),c=l.useCallback((f,u,a)=>{r.clearFieldDirty(f),t.setValues({values:$e(f,a,u,t.refValues.current),updateState:!0})},[]);return{reorderListItem:n,removeListItem:s,insertListItem:o,replaceListItem:c}}var Te=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,s,o;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[s]))return!1;for(s=n;s--!==0;){var c=o[s];if(!t(e[c],r[c]))return!1}return!0}return e!==e&&r!==r};const K=ge(Te);function v(t,e){const r=Object.keys(t);if(typeof e=="string"){const n=r.filter(s=>s.startsWith(`${e}.`));return t[e]||n.some(s=>t[s])||!1}return r.some(n=>t[n])}function Ie({initialDirty:t,initialTouched:e,mode:r,$values:n}){const[s,o]=l.useState(e),[c,f]=l.useState(t),u=l.useRef(e),a=l.useRef(t),E=l.useCallback(b=>{const m=typeof b=="function"?b(u.current):b;u.current=m,r==="controlled"&&o(m)},[]),S=l.useCallback((b,m=!1)=>{const p=typeof b=="function"?b(a.current):b;a.current=p,(r==="controlled"||m)&&f(p)},[]),O=l.useCallback(()=>E({}),[]),R=l.useCallback(b=>{const m=b?{...b,...n.refValues.current}:n.refValues.current;n.setValuesSnapshot(m),S({})},[]),_=l.useCallback((b,m)=>{E(p=>v(p,b)===m?p:{...p,[b]:m})},[]),d=l.useCallback((b,m,p)=>{S(w=>v(w,b)===m?w:{...w,[b]:m},p)},[]),y=l.useCallback((b,m)=>{const p=v(a.current,b),w=!K(k(b,n.getValuesSnapshot()),m),L=U(b,a.current);L[b]=w,S(L,p!==w)},[]),g=l.useCallback(b=>v(u.current,b),[]),$=l.useCallback(b=>S(m=>{if(typeof b!="string")return m;const p=U(b,m);return delete p[b],K(p,m)?m:p}),[]),C=l.useCallback(b=>{if(b){const p=k(b,a.current);if(typeof p=="boolean")return p;const w=k(b,n.refValues.current),L=k(b,n.valuesSnapshot.current);return!K(w,L)}return Object.keys(a.current).length>0?v(a.current):!K(n.refValues.current,n.valuesSnapshot.current)},[]),I=l.useCallback(()=>a.current,[]),D=l.useCallback(()=>u.current,[]);return{touchedState:s,dirtyState:c,touchedRef:u,dirtyRef:a,setTouched:E,setDirty:S,resetDirty:R,resetTouched:O,isTouched:g,setFieldTouched:_,setFieldDirty:d,setTouchedState:o,setDirtyState:f,clearFieldDirty:$,isDirty:C,getDirty:I,getTouched:D,setCalculatedFieldDirty:y}}function Ae({initialValues:t,onValuesChange:e,mode:r}){const n=l.useRef(!1),[s,o]=l.useState(t||{}),c=l.useRef(s),f=l.useRef(s),u=l.useCallback(({values:d,subscribers:y,updateState:g=!0,mergeWithPreviousValues:$=!0})=>{const C=c.current,I=d instanceof Function?d(c.current):d,D=$?{...C,...I}:I;c.current=D,g&&o(D),e==null||e(D,C),y==null||y.filter(Boolean).forEach(b=>b({updatedValues:D,previousValues:C}))},[e]),a=l.useCallback(d=>{var $;const y=k(d.path,c.current),g=d.value instanceof Function?d.value(y):d.value;if(y!==g){const C=c.current,I=z(d.path,g,c.current);u({values:I,updateState:d.updateState}),($=d.subscribers)==null||$.filter(Boolean).forEach(D=>D({path:d.path,updatedValues:I,previousValues:C}))}},[u]),E=l.useCallback(d=>{f.current=d},[]),S=l.useCallback((d,y)=>{n.current||(n.current=!0,u({values:d,updateState:r==="controlled"}),E(d),y())},[u]),O=l.useCallback(()=>{u({values:f.current,updateState:!0,mergeWithPreviousValues:!1})},[u]),R=l.useCallback(()=>c.current,[]),_=l.useCallback(()=>f.current,[]);return{initialized:n,stateValues:s,refValues:c,valuesSnapshot:f,setValues:u,setFieldValue:a,resetValues:O,setValuesSnapshot:E,initialize:S,getValues:R,getValuesSnapshot:_}}function Le({$status:t}){const e=l.useRef({}),r=l.useCallback((s,o)=>{l.useEffect(()=>(e.current[s]=e.current[s]||[],e.current[s].push(o),()=>{e.current[s]=e.current[s].filter(c=>c!==o)}),[o])},[]),n=l.useCallback(s=>e.current[s]?e.current[s].map(o=>c=>o({previousValue:k(s,c.previousValues),value:k(s,c.updatedValues),touched:t.isTouched(s),dirty:t.isDirty(s)})):[],[]);return{subscribers:e,watch:r,getFieldSubscribers:n}}function te(t,e){return t?`${t}-${e.toString()}`:e.toString()}function re(t){const e=H(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function X(t,e,r="",n={}){return typeof t!="object"||t===null?n:Object.keys(t).reduce((s,o)=>{const c=t[o],f=`${r===""?"":`${r}.`}${o}`,u=k(f,e);let a=!1;return typeof c=="function"&&(s[f]=c(u,e,f)),typeof c=="object"&&Array.isArray(u)&&(a=!0,u.forEach((E,S)=>X(c,e,`${f}.${S}`,s))),typeof c=="object"&&typeof u=="object"&&u!==null&&(a||X(c,e,f,s)),s},n)}function Z(t,e){return re(typeof t=="function"?t(e):X(t,e))}function q(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const n=Z(e,r),s=Object.keys(n.errors).find(o=>t.split(".").every((c,f)=>c===o.split(".")[f]));return{hasError:!!s,error:s?n.errors[s]:null}}const Re="__MANTINE_FORM_INDEX__";function se(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]+/g,`.${Re}`)):!1:!1}function Me({name:t,mode:e="controlled",initialValues:r,initialErrors:n={},initialDirty:s={},initialTouched:o={},clearInputErrorOnChange:c=!0,validateInputOnChange:f=!1,validateInputOnBlur:u=!1,onValuesChange:a,transformValues:E=d=>d,enhanceGetInputProps:S,validate:O,onSubmitPreventDefault:R="always",touchTrigger:_="change"}={}){const d=ke(n),y=Ae({initialValues:r,onValuesChange:a,mode:e}),g=Ie({initialDirty:s,initialTouched:o,$values:y,mode:e}),$=he({$values:y,$errors:d,$status:g}),C=Le({$status:g}),[I,D]=l.useState(0),[b,m]=l.useState({}),[p,w]=l.useState(!1),L=l.useCallback(()=>{y.resetValues(),d.clearErrors(),g.resetDirty(),g.resetTouched(),e==="uncontrolled"&&D(i=>i+1)},[]),M=l.useCallback(i=>{c&&d.clearErrors(),e==="uncontrolled"&&D(V=>V+1),Object.keys(C.subscribers.current).forEach(V=>{const F=k(V,y.refValues.current),h=k(V,i);F!==h&&C.getFieldSubscribers(V).forEach(A=>A({previousValues:i,updatedValues:y.refValues.current}))})},[c]),ce=l.useCallback(i=>{const V=y.refValues.current;y.initialize(i,()=>e==="uncontrolled"&&D(F=>F+1)),M(V)},[M]),J=l.useCallback((i,V,F)=>{const h=se(i,f),A=V instanceof Function?V(k(i,y.refValues.current)):V;g.setCalculatedFieldDirty(i,A),_==="change"&&g.setFieldTouched(i,!0),!h&&c&&d.clearFieldError(i),y.setFieldValue({path:i,value:V,updateState:e==="controlled",subscribers:[...C.getFieldSubscribers(i),h?N=>{const T=q(i,O,N.updatedValues);T.hasError?d.setFieldError(i,T.error):d.clearFieldError(i)}:null,(F==null?void 0:F.forceUpdate)!==!1&&e!=="controlled"?()=>m(N=>({...N,[i]:(N[i]||0)+1})):null]})},[a,O]),ue=l.useCallback(i=>{const V=y.refValues.current;y.setValues({values:i,updateState:e==="controlled"}),M(V)},[a,M]),Q=l.useCallback(()=>{const i=Z(O,y.refValues.current);return d.setErrors(i.errors),i},[O]),ie=l.useCallback(i=>{const V=q(i,O,y.refValues.current);return V.hasError?d.setFieldError(i,V.error):d.clearFieldError(i),V},[O]),le=(i,{type:V="input",withError:F=!0,withFocus:h=!0,...A}={})=>{const T={onChange:je(W=>J(i,W,{forceUpdate:!1})),"data-path":te(t,i)};return F&&(T.error=d.errorsState[i]),V==="checkbox"?T[e==="controlled"?"checked":"defaultChecked"]=k(i,y.refValues.current):T[e==="controlled"?"value":"defaultValue"]=k(i,y.refValues.current),h&&(T.onFocus=()=>g.setFieldTouched(i,!0),T.onBlur=()=>{if(se(i,u)){const W=q(i,O,y.refValues.current);W.hasError?d.setFieldError(i,W.error):d.clearFieldError(i)}}),Object.assign(T,S==null?void 0:S({inputProps:T,field:i,options:{type:V,withError:F,withFocus:h,...A},form:B}))},ae=(i,V)=>F=>{R==="always"&&(F==null||F.preventDefault());const h=Q();if(h.hasErrors)R==="validation-failed"&&(F==null||F.preventDefault()),V==null||V(h.errors,y.refValues.current,F);else{const A=i==null?void 0:i(E(y.refValues.current),F);A instanceof Promise&&(w(!0),A.finally(()=>w(!1)))}},fe=i=>E(i||y.refValues.current),de=l.useCallback(i=>{i.preventDefault(),L()},[]),ye=l.useCallback(i=>i?!q(i,O,y.refValues.current).hasError:!Z(O,y.refValues.current).hasErrors,[O]),be=i=>`${I}-${i}-${b[i]||0}`,Ee=l.useCallback(i=>document.querySelector(`[data-path="${te(t,i)}"]`),[]),B={watch:C.watch,initialized:y.initialized.current,values:y.stateValues,getValues:y.getValues,setInitialValues:y.setValuesSnapshot,initialize:ce,setValues:ue,setFieldValue:J,submitting:p,setSubmitting:w,errors:d.errorsState,setErrors:d.setErrors,setFieldError:d.setFieldError,clearFieldError:d.clearFieldError,clearErrors:d.clearErrors,resetDirty:g.resetDirty,setTouched:g.setTouched,setDirty:g.setDirty,isTouched:g.isTouched,resetTouched:g.resetTouched,isDirty:g.isDirty,getTouched:g.getTouched,getDirty:g.getDirty,reorderListItem:$.reorderListItem,insertListItem:$.insertListItem,removeListItem:$.removeListItem,replaceListItem:$.replaceListItem,reset:L,validate:Q,validateField:ie,getInputProps:le,onSubmit:ae,onReset:de,isValid:ye,getTransformedValues:fe,key:be,getInputNode:Ee};return Fe(t,B),B}export{ve as F,ze as a,Me as u};