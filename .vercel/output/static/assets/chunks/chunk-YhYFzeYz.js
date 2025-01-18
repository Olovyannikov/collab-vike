import{H as E,K as b,M as R,al as N,aJ as J,x as f,am as O,aq as $e,N as Q,ak as qe,aI as we,aK as ze}from"./chunk-krdQHAUy.js";const _e={isData:e=>!0,getErrorMessages:()=>[]};function H({field:e}){let t;if(e===void 0)t=R(r=>null,{serialize:"ignore",name:"ff.$target/undefined",sid:"ff.$target/undefined"});else if(Q.store(e))t=N(e,r=>n=>r??null);else if(e!=null&&e.source&&e!=null&&e.fn){const r=e;t=N(r.source,n=>s=>r.fn(s,n)??null)}else if(typeof e=="function"){const r=e;t=R(n=>r(n)??null,{serialize:"ignore",name:"ff.$target/callbackField",sid:"ff.$target/$callbackField"})}else{const r=e;t=R(n=>r??null,{serialize:"ignore",name:"ff.$target/valueField",sid:"ff.$target/$valueField"})}return t}function Me(e){let t;if(e===void 0)t=E(async r=>null);else if(Q.store(e))t=O({source:e,async effect(r,n){return r}});else if(e.source&&e.fn){const r=e;t=O({source:r.source,async effect(n,s){return r.fn(s,n)}})}else if(typeof e=="function"){const r=e;t=E(async n=>r(n))}else{const r=e;t=E(async n=>r)}return t}function ne(e){return e?Q.store(e)?e:R(e,{serialize:"ignore",name:"ff.$target/valueField",sid:"ff.$target/$valueField"}):R(null,{serialize:"ignore",name:"ff.$target/undefined",sid:"ff.$target/$undefined"})}function He({clock:e,timeout:t,target:r=b()}){const n=E(({payload:s,milliseconds:i})=>new Promise(o=>{setTimeout(o,i,s)}));return f({source:ne(t),clock:e,fn:(s,i)=>({payload:i,milliseconds:s}),target:n}),f({clock:n.doneData,target:r}),r}function Qe(e,t){let r=[],n=()=>!1;Array.isArray(e)?(r=e,n=t):Array.isArray(e.stores)&&(r=e.stores,n=e.predicate);let s;Ue(n)?s=n:Q.store(n)?s=n.map(o=>c=>o===c):s=o=>o===n;const i=N(r);return N(s,i,(o,c)=>c.every(o))}function Ue(e){return typeof e=="function"}function Y(e){return e.map(t=>!t)}function Ve(...e){return Qe({predicate:!0,stores:e})}function Be({clock:e,until:t}){const r=b(),n=R(!1,{serialize:"ignore",name:"ff.$fired",sid:"ff.$fired"}).on(r,()=>!0).on(e,()=>!1);return f({clock:[e,t],source:e,filter:Ve(t,Y(n)),target:r}),r}function X(e){if(e==="ignore")return"ignore"}const le=E(()=>Date.now());function Je({clock:e}){const t=R(Date.now(),{name:"ff.$time",sid:"ff.$time"});return f({clock:e,fn:()=>{},target:le}),f({clock:le.doneData,target:t}),t}function w(e){return e.map(t=>t,{skipVoid:!1})}function Ke(){const e={resolve:()=>{},reject:()=>{},promise:null};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e.promise.catch(()=>{}),e}function ee(e,t){try{if(e===t||Number.isNaN(e)&&Number.isNaN(t))return!0;const r=ue(e),n=ue(t);if(r!==n)return!1;if(r==="pure-object"){if(e===t)return!0;const s=Object.keys(e),i=Object.keys(t).length;if(s.length!==i)return!1;for(let o=0,c=s.length;o<c;o++){const h=s[o];if(!Object.prototype.hasOwnProperty.call(t,s[o]))return!1;const $=e[h],a=t[h];if($===e||a===t||$===t||a===e)return $===a;if(!ee($,a))return!1}return!0}else if(r==="array"){if(e.length===t.length)for(let s=0;s<e.length;s++){const i=e[s],o=t[s];if(i===e||o===t||i===t||o===e)return i===o;if(!ee(i,o))return!1}else return!1;return!0}else if(r==="object"&&e.valueOf&&t.valueOf)return e.valueOf()===t.valueOf()}catch{}return!1}function We(e){if(Array.isArray(e))return!0;const t=e.length;return typeof t=="number"&&t>-1?t?0 in e&&t-1 in e:!0:!1}function ue(e){const t=typeof e;return t==="object"?e===null?"null":We(e)?"array":e.constructor===Object||Object.getPrototypeOf(e)===null?"pure-object":"object":t}function fe(e){return t=>t[e]}function be(){var e,t;return((t=(e=we({regional:!0}).family.owners[0])==null?void 0:e.meta)==null?void 0:t.name)??void 0}const Ge="INVALID_DATA",ke="ABORT",Xe="HTTP",Ze="NETWORK";function te(e){return{...e,errorType:Ge,explanation:"Response was considered as invalid against a given contract"}}function Ye(){return{errorType:ke,explanation:"Request was cancelled due to concurrency policy"}}function et(e){return{...e,errorType:Xe,explanation:"Request was finished with unsuccessful HTTP code"}}function tt(e){return{...e,errorType:Ze,explanation:"Request was failed due to network problems"}}function rt(e){return E({handler:({result:t})=>{if(!e.isData(t))throw te({validationErrors:e.getErrorMessages(t),response:t});return t},sid:"ff.applyContractFx"})}function nt(e){return!!(e===!0||Array.isArray(e)&&e.length===0||typeof e=="string"&&e.length===0)}function pe(e){return e===!0?[]:e===!1?["Invalid data"]:Array.isArray(e)?e.length===0?[]:e:[e]}const at=()=>!0;function st(e){var t;return((t=e.error)==null?void 0:t.errorType)===ke}let de=null;function ot(){const e=de;return de=null,e}function it(e){const t=b(e.shortName+".internalCall"),r=ze.compute({fn:n=>{const s=n.handler,i=ct(s,t);return n.handler=i,n}});return lt(e).seq.splice(1,0,r),t}function ct(e,t){function r(...n){const{result:s,abortCallback:i}=pt(e,...n);if(s instanceof Promise){const o=Ke(),c=me(o,i);return t(c),s.then(o.resolve,o.reject),o.promise}else{const o=me(void 0,i);return t(o),s}}return r}function me(e,t){let r=e?"pending":"finished";function n(){r="finished",s.status=r}e&&e.promise.then(n,n);const s={id:ft(),status:r,abort:(i=Ye())=>{t==null||t(),r!=="finished"&&e&&e.reject(i)},promise:e==null?void 0:e.promise};return s}function lt(e){return e.graphite.scope.runner}let ut=0;function ft(){return`${ut++}`}function pt(e,...t){dt();const r=e(...t),n=ot();return{result:r,abortCallback:n}}const dt=b();function mt(e,{clock:t}){f({clock:t,source:ht(e),target:Ee})}function ht(e){if(!e.__.meta.$callObjects){const t=R([],{serialize:"ignore"});f({clock:e.__.lowLevelAPI.callObjectCreated,source:t,fn:(r,n)=>r.filter(s=>s.status==="pending").concat(n),target:t}),f({clock:Ee.done,source:t,fn:(r,{params:n})=>r.filter(s=>!n.includes(s)),target:t}),e.__.meta.$callObjects=t}return e.__.meta.$callObjects}const Ee=E(e=>e.forEach(t=>t.abort()));function Ae({name:e,meta:t,kind:r,serialize:n,enabled:s,contract:i,validate:o,mapData:c,sourced:h,paramsAreMeaningless:$}){const a=b(),u=b(),k=b(),d=b(),p=rt(i),m=e??"unnamed",g=E({handler:()=>{throw new Error("Not implemented")},sid:`ff.${m}.executeFx`,name:`${m}.executeFx`}),_=it(g),v=[{name:"remote_source",get:E(async({params:l})=>({result:await g(l),stale:!1}))}],{retrieveDataFx:A,notifyAboutNewValidDataFx:L,notifyAboutDataInvalidationFx:D}=yt(v),j=b(),z=b(),T=b();f({clock:j,fn:l=>({params:l,meta:{stopErrorPropagation:!1,stale:!0}}),target:d});const P={success:b(),failure:b(),skip:b(),finally:b()},F=b(),q=b(),M=b();J({source:F,match:{aborted:({error:l})=>st({error:l})},cases:{aborted:M,__:P.failure}});const S=R("initial",{sid:`ff.${m}.$status`,name:`ff.${m}.$status`,serialize:n});f({clock:z,target:S.reinit});const G=R([],{serialize:"ignore",name:`ff.${m}.$statusHistory`,sid:`ff.${m}.$statusHistory`});f({clock:S.updates,source:G,fn:(l,y)=>[...l,y],target:G});const x=ne(s??!0).map(Boolean),se=R(void 0,{serialize:"ignore",name:`ff.${m}.$latestParams`,sid:`ff.${m}.$latestParams`,skipVoid:!1}),xe=S.map(l=>l==="initial"),Ce=S.map(l=>l==="pending"),Oe=S.map(l=>l==="fail"),Le=S.map(l=>l==="done"),Ne=S.map(l=>["fail","done"].includes(l));f({clock:[A.map(()=>"pending"),P.success.map(()=>"done"),P.failure.map(()=>"fail"),f({clock:M,source:{history:G,retrieveDataPengind:A.pending},fn:({history:l,retrieveDataPengind:y})=>y?"pending":l[l.length-2]??"initial"})],target:S}),f({clock:d,filter:x,fn:({params:l})=>l,target:se}),f({clock:j,filter:Y(x),fn(l){return{params:l,meta:{stopErrorPropagation:!1,stale:!1}}},target:P.skip}),f({clock:a,fn:({params:l})=>({params:l,meta:{stopErrorPropagation:!1,stale:!0}}),target:D}),f({clock:D.finally,source:a,filter:({refresh:l})=>l,fn:({params:l})=>({params:l,meta:{stopErrorPropagation:!1,stale:!0}}),target:d}),f({clock:d,filter:x,target:A}),f({clock:A,target:T}),f({clock:A.done,fn:({params:l,result:y})=>({params:l.params,result:y.result,meta:{stopErrorPropagation:y.stopErrorPropagation??!1,stale:y.stale}}),filter:x,target:p}),f({clock:A.fail,source:x,filter:(l,{error:y})=>l&&!y.stopErrorPropagation,fn:(l,{error:y,params:I})=>({error:y.error,params:I.params,meta:{stopErrorPropagation:y.stopErrorPropagation,stale:!1}}),target:F});const{validDataRecieved:oe,__:ie}=J(f({clock:p.done,source:{partialValidator:H({field:o??at})},fn:({partialValidator:l},{params:{params:y,meta:I},result:C})=>({result:C,params:y,validation:l({result:C,params:y}),meta:I})}),{validDataRecieved:({validation:l})=>nt(l)});f({clock:oe,source:{partialMapper:H({field:c})},fn:({partialMapper:l},{params:y,result:I,meta:C})=>({result:l({params:y,result:I}),params:y,meta:C}),target:P.success}),f({clock:P.success,filter:({meta:l})=>l.stale,fn:({params:l,meta:y})=>({params:l,meta:y,skipStale:!0}),target:A}),f({clock:oe,filter:({meta:l})=>!l.stale,target:L}),f({clock:p.fail,filter:({params:l})=>!l.meta.stopErrorPropagation,fn:({error:l,params:y})=>({error:l,params:y.params,meta:y.meta}),target:F}),f({clock:p.fail,fn:({error:l,params:y})=>({error:l,params:y.params,meta:y.meta}),target:q}),f({clock:ie,filter:({meta:l})=>!l.stopErrorPropagation,fn:({params:l,validation:y,meta:I,result:C})=>({params:l,error:te({validationErrors:pe(y),response:C}),meta:I}),target:F}),f({clock:ie,fn:({params:l,validation:y,meta:I,result:C})=>({params:l,error:te({validationErrors:pe(y),response:C}),meta:I}),target:q}),f({clock:x.updates,source:j,filter:Y(x),fn:l=>({params:l,meta:{stopErrorPropagation:!1,stale:!0}}),target:P.skip}),f({clock:P.success,fn:({params:l,result:y,meta:I})=>({status:"done",params:l,result:y,meta:I}),target:P.finally}),f({clock:P.failure,fn:({params:l,error:y,meta:I})=>({status:"fail",params:l,error:y,meta:I}),target:P.finally}),f({clock:P.skip,fn:({params:l,meta:y})=>({status:"skip",params:l,meta:y}),target:P.finally});const ce={start:j,finished:P,started:T,aborted:M,reset:z,$status:S,$idle:xe,$pending:Ce,$failed:Oe,$succeeded:Le,$finished:Ne,$enabled:x,__:{executeFx:g,meta:{...t,name:m,flags:{}},kind:r,$latestParams:w(se),lowLevelAPI:{dataSources:v,dataSourceRetrieverFx:A,sourced:h??[],paramsAreMeaningless:$??!1,revalidate:a,pushError:k,pushData:u,startWithMeta:d,callObjectCreated:_,failedIgnoreSuppression:q}}};return mt(ce,{clock:z}),ce}function yt(e){const t=E({handler:async({params:s,skipStale:i})=>{for(const o of e)try{const c=await o.get({params:s});if(i&&c!=null&&c.stale)continue;if(c)return c}catch(c){throw{stopErrorPropagation:!1,error:c}}throw{stopErrorPropagation:!1,error:new Error("No data source returned data")}}}),r=E({handler:async({params:s,result:i})=>{await Promise.all(e.map(fe("set")).filter(Boolean).map(o=>o({params:s,result:i})))}}),n=E({handler:async({params:s})=>{await Promise.all(e.map(fe("unset")).filter(Boolean).map(i=>i({params:s})))}});return{retrieveDataFx:t,notifyAboutNewValidDataFx:r,notifyAboutDataInvalidationFx:n}}const gt=Symbol("Query"),$t=Symbol("Farfetched node meta"),wt=Symbol("Farfetched links meta");function _t(e,t){return we({meta:{[$t]:e,[wt]:t},regional:!0})}function Pe(e){const{initialData:t,contract:r,mapData:n,enabled:s,validate:i,name:o,serialize:c,sourced:h,paramsAreMeaningless:$}=e,a=t??null,u=Ae({name:o??be(),kind:gt,serialize:X(c),enabled:s,meta:{serialize:c,initialData:a,sid:bt(R(null,{sid:"dummy"}))},contract:r,validate:i,mapData:n,sourced:h,paramsAreMeaningless:$}),k=b(),d=R(a,{sid:`ff.${u.__.meta.name}.$data`,name:`${u.__.meta.name}.$data`,serialize:c,skipVoid:!1}),p=R(null,{sid:`ff.${u.__.meta.name}.$error`,name:`${u.__.meta.name}.$error`,serialize:X(c),skipVoid:!1}),m=R(!0,{sid:`ff.${u.__.meta.name}.$stale`,name:`${u.__.meta.name}.$stale`,serialize:X(c),skipVoid:!1});f({clock:u.finished.success,fn:()=>null,target:p}),f({clock:u.finished.success,fn:({result:T})=>T,target:d}),d.reset(u.finished.failure),f({clock:u.finished.failure,fn:({error:T})=>T,target:p}),f({clock:u.finished.finally,fn:({meta:T})=>T.stale,target:m}),f({clock:u.__.lowLevelAPI.pushData,target:[d,p.reinit]}),f({clock:u.__.lowLevelAPI.pushError,target:[p,d.reinit]});const g=Be({clock:k,until:u.$enabled}),_=b(),{haveToStart:v,__:A}=J(f({clock:g,source:{stale:m,latestParams:u.__.$latestParams},fn:({stale:T,latestParams:P},F)=>({haveToStart:T||!ee(F,P),params:F})}),{haveToStart:({haveToStart:T})=>T});f({clock:A,fn:()=>null,target:_}),f({clock:v,fn:({params:T})=>T,target:u.start}),f({clock:u.reset,target:[d.reinit,p.reinit,m.reinit]});const L={data:d,error:p,stale:m,pending:u.$pending,start:u.start},D=()=>L,j=({source:T,mapParams:P})=>{const F=Pe(e);return F.__.lowLevelAPI.dataSourceRetrieverFx.use(O({source:T,mapParams:({params:q,...M},S)=>({params:P?P(q,S):q,...M}),effect:u.__.lowLevelAPI.dataSourceRetrieverFx})),F},z=_t({type:"query",name:e.name},{$status:u.$status,$data:d,$error:p});return qe(z,()=>({refresh:k,start:u.start,reset:u.reset,started:w(u.started),$data:w(d),$error:w(p),$status:w(u.$status),$idle:w(u.$idle),$pending:w(u.$pending),$succeeded:w(u.$succeeded),$failed:w(u.$failed),$finished:w(u.$finished),$enabled:w(u.$enabled),$stale:m,aborted:w(u.aborted),finished:{success:w(u.finished.success),failure:w(u.finished.failure),finally:w(u.finished.finally),skip:w(u.finished.skip)},__:{...u.__,lowLevelAPI:{...u.__.lowLevelAPI,refreshSkipDueToFreshness:_},experimentalAPI:{attach:j}},"@@unitShape":D}))}function bt(e){const t=e.sid;return t!=null&&t.includes("|")?t:null}function ve(e){const t=e;if(Q.effect(t.effect))return t.effect;if(typeof t.handler=="function")return E(t.handler);throw new kt("handler or effect must be passed to the config")}class kt extends Error{constructor(t){super(t)}}function Nr(e){const t=Pe({initialData:e.initialData??null,contract:e.contract??_e,mapData:e.mapData??(({result:r})=>r),enabled:e.enabled,validate:e.validate,name:e.name,serialize:e.serialize});return t.__.executeFx.use(ve(e)),t}const Et=E({sid:"ff.fetchFx",handler:globalThis.fetch});E({handler:async e=>{const t=await Et(e).catch(r=>{throw tt({reason:(r==null?void 0:r.message)??null,cause:r})});if(!t.ok)throw et({status:t.status,statusText:t.statusText,response:await t.text().catch(()=>null)??null});return t},sid:"ff.requestFx"});const At=Symbol("Mutation");function Re(e){const{name:t,enabled:r,contract:n,validate:s,mapData:i}=e,o=Ae({name:t??be(),serialize:"ignore",enabled:r,kind:At,meta:null,contract:n,validate:s,mapData:i}),c={pending:o.$pending,start:o.start,reset:o.reset},h=()=>c,$=({source:a,mapParams:u})=>{const k=Re(e);return k.__.lowLevelAPI.dataSourceRetrieverFx.use(O({source:a,mapParams:({params:d,...p},m)=>({params:u?u(d,m):d,...p}),effect:o.__.lowLevelAPI.dataSourceRetrieverFx})),k};return{start:o.start,reset:o.reset,started:w(o.started),aborted:w(o.aborted),$status:w(o.$status),$idle:w(o.$idle),$pending:w(o.$pending),$succeeded:w(o.$succeeded),$failed:w(o.$failed),$finished:w(o.$finished),$enabled:w(o.$enabled),finished:{success:w(o.finished.success),failure:w(o.finished.failure),finally:w(o.finished.finally),skip:w(o.finished.skip)},__:{...o.__,experimentalAPI:{attach:$}},"@@unitShape":h}}function qr(e){const t=Re({name:e.name,enabled:e.enabled,contract:e.contract??_e,mapData:({result:r})=>r});return t.__.executeFx.use(ve(e)),t}const Pt=["ms","milli","millisecond","milliseconds"],vt=["s","sec","secs","second","seconds"],Rt=["m","min","mins","minute","minutes"],Tt=["h","hr","hrs","hour","hours"];function K(e){if(typeof e=="number")return e;let t=0;for(const r of e.split(" "))switch(!0){case U(r,Pt):t+=V(r);break;case U(r,vt):t+=V(r)*1e3;break;case U(r,Rt):t+=V(r)*6e4;break;case U(r,Tt):t+=V(r)*36e5;break}return t}function U(e,t){return t.includes(It(e))}function It(e){return e.replace(/[0-9.]/g,"")}function V(e){return e.includes(".")?parseFloat(e):parseInt(e)}function zr(e,{times:t,delay:r,filter:n,mapParams:s,...i}){const o=i.supressIntermediateErrors??!0,c=ne(t),h=R(1,{serialize:"ignore",name:"ff.$attempt",sid:"ff.$attempt"}),$=N({attempt:h}),a=N(h,c,(g,_)=>o&&g<=_),u=b(),k=b(),d=H({field:n??!0}),{planNextAttempt:p,__:m}=J(f({clock:u,source:{maxAttempts:c,attempt:h,partialFilter:d},filter:({partialFilter:g},_)=>g(_),fn:({attempt:g,maxAttempts:_},{params:v,error:A,meta:L})=>({params:v,error:A,meta:{...L,attempt:g,maxAttempts:_}})}),{planNextAttempt:({meta:g})=>g.attempt<=g.maxAttempts});if(f({clock:He({clock:f({clock:p,source:{partialMapper:H({field:s??(({params:g})=>g)})},fn:({partialMapper:g},_)=>g(_)}),timeout:N({partialTimeout:H({field:r}),meta:$},({partialTimeout:g,meta:_})=>K(g(_)))}),fn:g=>({params:g,meta:{stopErrorPropagation:!1,stale:!0}}),target:[k,e.__.lowLevelAPI.startWithMeta]}),h.on(k,g=>g+1).reset([e.finished.success,e.start]),i.otherwise&&f({clock:m,target:i.otherwise}),o){const g=e.__.lowLevelAPI.dataSourceRetrieverFx.use.getCurrent();f({clock:e.__.lowLevelAPI.failedIgnoreSuppression,target:u}),e.__.lowLevelAPI.dataSourceRetrieverFx.use(O({source:{supressError:a,partialFilter:d},mapParams:(_,{supressError:v,partialFilter:A})=>({..._,supressError:v,partialFilter:A}),effect:E(async({supressError:_,partialFilter:v,...A})=>{const L=$e(u,{safe:!0});try{return{...await g(A),stopErrorPropagation:_}}catch(D){const j={params:A.params,error:D.error,meta:A.meta};throw v(j)&&_?(L(j),{error:D.error,stopErrorPropagation:!0}):D}})}))}f({clock:e.finished.failure,target:u})}function St(e){const t=R(e,{serialize:"ignore",name:"ff.$cacheInstance",sid:"ff.$cacheInstance"});return{...e,__:{$instance:t}}}function Ft({adapter:e,options:t,events:r}){t!=null&&t.hit&&f({clock:e.get.done,filter:({result:n})=>n!==null,fn:({params:n})=>({key:n.key}),target:t.hit}),t!=null&&t.miss&&f({clock:e.get.done,filter:({result:n})=>n===null,fn:({params:n})=>({key:n.key}),target:t.miss}),t!=null&&t.expired&&r!=null&&r.itemExpired&&f({clock:r.itemExpired,fn:({key:n})=>({key:n}),target:t.expired}),t!=null&&t.evicted&&r!=null&&r.itemEvicted&&f({clock:r.itemEvicted,target:t.evicted})}function jt(e){const{maxEntries:t,maxAge:r,observability:n}={};let s={};const i=b(),o=b(),c=b(),h=b(),$=b();$.watch(()=>{s={}});const a=Je({clock:i}),u=f({clock:i,source:{now:a},fn:({now:d},{key:p,value:m})=>Dt(s,{key:p,entry:{value:m,cachedAt:d}},t)});if(u.watch(({next:d})=>{s=d}),f({clock:u,filter:({evicted:d})=>!!d,fn:({evicted:d})=>({key:d}),target:h}),o.watch(({key:d})=>{const{[d]:p,...m}=s;s=m}),r){const d=K(r);i.watch(p=>{const m=$e(c,{safe:!0});setTimeout(()=>m(p),d)}),f({clock:c,fn:({key:p})=>({key:p}),target:o})}const k={get:E(({key:d})=>{const p=s[d]??null;if(!p)return null;if(r){const m=(p==null?void 0:p.cachedAt)+K(r);if(Date.now()>=m)return o({key:d}),null}return p}),set:E(i),unset:E(o),purge:$};return Ft({adapter:k,options:n,events:{itemExpired:c,itemEvicted:h}}),St(k)}function Dt(e,{key:t,entry:r},n){if(n===void 0)return{next:{...e,[t]:r},evicted:null};const s=Object.keys(e);if(s.length<n)return{next:{...e,[t]:r},evicted:null};const[i]=s,{[i]:o,...c}=e;return{next:{...c,[t]:r},evicted:i}}function xt(e){let t=0,r=0;for(;r<e.length;)t=(t<<5)-t+e.charCodeAt(r++)|0;return t.toString(36)}function Te(e){const t=new Set;function r(n){if(n===void 0)return;if(n===null)return"null";if(typeof n=="number")return isFinite(n)?`${n}`:"null";if(typeof n=="function")throw new TypeError("Can't serialize function");if(typeof n!="object")return JSON.stringify(n);if(t.has(n))throw new TypeError("Can't serialize cyclic structure");if(t.add(n),Array.isArray(n)){const i=n.map(o=>r(o)||"null").join(",");return t.delete(n),`[${i}]`}const s=Object.keys(n).sort().map(i=>{const o=r(n[i]);return o?`${r(i)}:${o}`:""}).filter(Boolean).join(",");return t.delete(n),`{${s}}`}return r(e)}function Ct({sid:e,params:t=null,sources:r}){try{return Te({params:t,sources:r,sid:e})??null}catch{return null}}function Ot({sid:e,params:t=null,sources:r}){try{const n=Te({params:t,sources:r,sid:e});return xt(n)}catch{return null}}function Lt(e){const t=Nt(e);if(t)return t;const r=qt(e);if(r)return r;throw new Error("Query does not have sid or uniq name, which is required for caching, read more https://effector.dev/en/explanation/sids/")}function Nt(e){return e.__.meta.sid??null}const he=new Set;function qt(e){const t=e.__.meta.name;return he.has(t)?null:(he.add(t),t)}function Mr(e,t){const{adapter:r,staleAfter:n,purge:s,humanReadableKeys:i}={adapter:jt(),humanReadableKeys:!1,...t},o=i?Ct:Ot,c=Lt(e),h=e.__.lowLevelAPI.sourced.map(Me),$=E(async p=>Promise.all(h.map(m=>m(p)))),a=E(async({instance:p,params:m})=>{const g=await $(m),_=o({sid:c,params:e.__.lowLevelAPI.paramsAreMeaningless?null:m,sources:g});_&&await p.unset({key:_})}),u=E(async({instance:p,params:m,result:g})=>{const _=await $(m),v=o({sid:c,params:e.__.lowLevelAPI.paramsAreMeaningless?null:m,sources:_});v&&await p.set({key:v,value:g})}),k=E(async({params:p,instance:m})=>{const g=await $(p),_=o({sid:c,params:e.__.lowLevelAPI.paramsAreMeaningless?null:p,sources:g});if(!_)return null;const v=await m.get({key:_});if(!v)return null;const A=n?v.cachedAt+K(n)<=Date.now():!0;return{result:v.value,stale:A}}),d={name:"cache",get:O({source:{instance:r.__.$instance},mapParams:({params:p},{instance:m})=>({params:p,instance:m}),effect:k}),set:O({source:{instance:r.__.$instance},mapParams:({params:p,result:m},{instance:g})=>({params:p,result:m,instance:g}),effect:u}),unset:O({source:{instance:r.__.$instance},mapParams:({params:p},{instance:m})=>({instance:m,params:p}),effect:a})};e.__.lowLevelAPI.dataSources.unshift(d),s&&f({clock:s,source:{instance:r.__.$instance},target:E(({instance:p})=>p.purge())})}const zt=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Mt=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ht=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Qt(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Ut(e);return}return t}function Ut(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Vt(e,t={}){if(typeof e!="string")return e;const r=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const n=r.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="undefined")return;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n==="-infinity")return Number.NEGATIVE_INFINITY}if(!Ht.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(zt.test(e)||Mt.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Qt)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}const Bt=/#/g,Jt=/&/g,Kt=/\//g,Wt=/=/g,ae=/\+/g,Gt=/%5e/gi,Xt=/%60/gi,Zt=/%7c/gi,Yt=/%20/gi;function er(e){return encodeURI(""+e).replace(Zt,"|")}function re(e){return er(typeof e=="string"?e:JSON.stringify(e)).replace(ae,"%2B").replace(Yt,"+").replace(Bt,"%23").replace(Jt,"%26").replace(Xt,"`").replace(Gt,"^").replace(Kt,"%2F")}function Z(e){return re(e).replace(Wt,"%3D")}function Ie(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function tr(e){return Ie(e.replace(ae," "))}function rr(e){return Ie(e.replace(ae," "))}function nr(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const r of e.split("&")){const n=r.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const s=tr(n[1]);if(s==="__proto__"||s==="constructor")continue;const i=rr(n[2]||"");t[s]===void 0?t[s]=i:Array.isArray(t[s])?t[s].push(i):t[s]=[t[s],i]}return t}function ar(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(r=>`${Z(e)}=${re(r)}`).join("&"):`${Z(e)}=${re(t)}`:Z(e)}function sr(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>ar(t,e[t])).filter(Boolean).join("&")}const or=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,ir=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,cr=/^([/\\]\s*){2,}[^/\\]/,lr=/^\.?\//;function Se(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?or.test(e):ir.test(e)||(t.acceptRelative?cr.test(e):!1)}function ur(e="",t){return e.endsWith("/")}function fr(e="",t){return(ur(e)?e.slice(0,-1):e)||"/"}function pr(e="",t){return e.endsWith("/")?e:e+"/"}function dr(e,t){if(hr(t)||Se(e))return e;const r=fr(t);return e.startsWith(r)?e:gr(r,e)}function mr(e,t){const r=$r(e),n={...nr(r.search),...t};return r.search=sr(n),wr(r)}function hr(e){return!e||e==="/"}function yr(e){return e&&e!=="/"}function gr(e,...t){let r=e||"";for(const n of t.filter(s=>yr(s)))if(r){const s=n.replace(lr,"");r=pr(r)+s}else r=n;return r}const Fe=Symbol.for("ufo:protocolRelative");function $r(e="",t){const r=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(r){const[,u,k=""]=r;return{protocol:u.toLowerCase(),pathname:k,href:u+k,auth:"",host:"",search:"",hash:""}}if(!Se(e,{acceptRelative:!0}))return ye(e);const[,n="",s,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",c=""]=i.match(/([^#/?]*)(.*)?/)||[];n==="file:"&&(c=c.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:h,search:$,hash:a}=ye(c);return{protocol:n.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:h,search:$,hash:a,[Fe]:!n}}function ye(e=""){const[t="",r="",n=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:n}}function wr(e){const t=e.pathname||"",r=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",n=e.hash||"",s=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Fe]?(e.protocol||"")+"//":"")+s+i+t+r+n}class _r extends Error{constructor(t,r){super(t,r),this.name="FetchError",r!=null&&r.cause&&!this.cause&&(this.cause=r.cause)}}function br(e){var h,$,a,u,k;const t=((h=e.error)==null?void 0:h.message)||(($=e.error)==null?void 0:$.toString())||"",r=((a=e.request)==null?void 0:a.method)||((u=e.options)==null?void 0:u.method)||"GET",n=((k=e.request)==null?void 0:k.url)||String(e.request)||"/",s=`[${r}] ${JSON.stringify(n)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${i}${t?` ${t}`:""}`,c=new _r(o,e.error?{cause:e.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(c,d,{get(){return e[d]}});for(const[d,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(c,d,{get(){return e.response&&e.response[p]}});return c}const kr=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ge(e="GET"){return kr.has(e.toUpperCase())}function Er(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Ar=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Pr=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function vr(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Pr.test(t)?"json":Ar.has(t)||t.startsWith("text/")?"text":"blob"}function Rr(e,t,r,n){const s=Tr((t==null?void 0:t.headers)??(e==null?void 0:e.headers),r==null?void 0:r.headers,n);let i;return(r!=null&&r.query||r!=null&&r.params||t!=null&&t.params||t!=null&&t.query)&&(i={...r==null?void 0:r.params,...r==null?void 0:r.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...r,...t,query:i,params:i,headers:s}}function Tr(e,t,r){if(!t)return new r(e);const n=new r(t);if(e)for(const[s,i]of Symbol.iterator in e||Array.isArray(e)?e:new r(e))n.set(s,i);return n}async function B(e,t){if(t)if(Array.isArray(t))for(const r of t)await r(e);else await t(e)}const Ir=new Set([408,409,425,429,500,502,503,504]),Sr=new Set([101,204,205,304]);function je(e={}){const{fetch:t=globalThis.fetch,Headers:r=globalThis.Headers,AbortController:n=globalThis.AbortController}=e;async function s(c){const h=c.error&&c.error.name==="AbortError"&&!c.options.timeout||!1;if(c.options.retry!==!1&&!h){let a;typeof c.options.retry=="number"?a=c.options.retry:a=ge(c.options.method)?0:1;const u=c.response&&c.response.status||500;if(a>0&&(Array.isArray(c.options.retryStatusCodes)?c.options.retryStatusCodes.includes(u):Ir.has(u))){const k=typeof c.options.retryDelay=="function"?c.options.retryDelay(c):c.options.retryDelay||0;return k>0&&await new Promise(d=>setTimeout(d,k)),i(c.request,{...c.options,retry:a-1})}}const $=br(c);throw Error.captureStackTrace&&Error.captureStackTrace($,i),$}const i=async function(h,$={}){const a={request:h,options:Rr(h,$,e.defaults,r),response:void 0,error:void 0};a.options.method&&(a.options.method=a.options.method.toUpperCase()),a.options.onRequest&&await B(a,a.options.onRequest),typeof a.request=="string"&&(a.options.baseURL&&(a.request=dr(a.request,a.options.baseURL)),a.options.query&&(a.request=mr(a.request,a.options.query),delete a.options.query),"query"in a.options&&delete a.options.query,"params"in a.options&&delete a.options.params),a.options.body&&ge(a.options.method)&&(Er(a.options.body)?(a.options.body=typeof a.options.body=="string"?a.options.body:JSON.stringify(a.options.body),a.options.headers=new r(a.options.headers||{}),a.options.headers.has("content-type")||a.options.headers.set("content-type","application/json"),a.options.headers.has("accept")||a.options.headers.set("accept","application/json")):("pipeTo"in a.options.body&&typeof a.options.body.pipeTo=="function"||typeof a.options.body.pipe=="function")&&("duplex"in a.options||(a.options.duplex="half")));let u;if(!a.options.signal&&a.options.timeout){const d=new n;u=setTimeout(()=>{const p=new Error("[TimeoutError]: The operation was aborted due to timeout");p.name="TimeoutError",p.code=23,d.abort(p)},a.options.timeout),a.options.signal=d.signal}try{a.response=await t(a.request,a.options)}catch(d){return a.error=d,a.options.onRequestError&&await B(a,a.options.onRequestError),await s(a)}finally{u&&clearTimeout(u)}if((a.response.body||a.response._bodyInit)&&!Sr.has(a.response.status)&&a.options.method!=="HEAD"){const d=(a.options.parseResponse?"json":a.options.responseType)||vr(a.response.headers.get("content-type")||"");switch(d){case"json":{const p=await a.response.text(),m=a.options.parseResponse||Vt;a.response._data=m(p);break}case"stream":{a.response._data=a.response.body||a.response._bodyInit;break}default:a.response._data=await a.response[d]()}}return a.options.onResponse&&await B(a,a.options.onResponse),!a.options.ignoreResponseError&&a.response.status>=400&&a.response.status<600?(a.options.onResponseError&&await B(a,a.options.onResponseError),await s(a)):a.response},o=async function(h,$){return(await i(h,$))._data};return o.raw=i,o.native=(...c)=>t(...c),o.create=(c={},h={})=>je({...e,...h,defaults:{...e.defaults,...h.defaults,...c}}),o}const W=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Fr=W.fetch?(...e)=>W.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),jr=W.Headers,Dr=W.AbortController,xr=je({fetch:Fr,Headers:jr,AbortController:Dr});function Cr(e,t){return typeof e=="function"?e(t):e}const Or=({baseURL:e,headers:t,payload:r,withTokenInHeaders:n})=>E(s=>{var h;const{url:i,...o}=Cr(r,s),c=new Headers(t);return n&&c.append("Authorization",`Token ${(h=localStorage.getItem("$uuid"))==null?void 0:h.replaceAll('"',"")}`),xr(i,{...o,headers:c,baseURL:e})},{name:"createRequestInstance",sid:"-2cl3s"}),De=e=>t=>Or({...e,payload:t}),Hr=De({baseURL:"https://api.dev.cognitivelab.ru",withTokenInHeaders:!0}),Qr=De({baseURL:"https://api.dev.cognitivelab.ru"});export{Nr as I,Mr as M,zr as R,Hr as a,Qr as c,qr as j};
