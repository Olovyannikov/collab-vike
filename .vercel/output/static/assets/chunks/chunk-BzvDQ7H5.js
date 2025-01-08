import{q as $,A,z as L,aC as X,ae as Y,ag as j,g as K,ak as Z,x as s,ah as _,af as ee,k as te,aB as O}from"./chunk-ghiSciBk.js";var q=new Map,C=e=>([t],m)=>e(m,t),B=$();function re(e){var{adapter:t,store:m,source:n=m,target:c=m,clock:x=n,done:v,fail:f=B,finally:y,pickup:d,context:k,key:E,keyPrefix:h="",contract:b}=e;if(!t)throw Error("Adapter is not defined");if(!n)throw Error("Store or source is not defined");if(!c)throw Error("Target is not defined");if(!E&&n.shortName===n.id)throw Error("Key or name is not defined");if(n===c&&!A.store(n))throw Error("Source must be different from target");e.def===void 0&&A.store(n)&&(e.def=n.defaultState);var u="factory"in t?t(e):t,w=E||n.shortName,P=function(l,p){var o=q.get(l);o===void 0&&(o=new Map,q.set(l,o));var g=o.get(p);return g!==void 0||(g=L(null,{serialize:"ignore"}),o.set(p,g)),g}(u.keyArea||u,h+w),N=X(),R=()=>_(N),T=l=>({status:p="fail",params:o,result:g,error:S})=>p==="done"?{status:p,key:w,keyPrefix:h,operation:l,value:l==="get"?g:o}:{status:p,key:w,keyPrefix:h,operation:l,value:typeof o=="function"?void 0:o,error:S};return Y(N,()=>{var l=L([],{serialize:"ignore"}),p=u(h+w,r=>{F(r)}),o=j({source:l,effect:C(p.get)}),g=j({source:l,effect:C(p.set)}),S=K((r=>a=>!r||a===void 0||("isData"in r?r.isData(a):r(a))?a:(()=>{throw"getErrorMessages"in r?r.getErrorMessages(a):void 0})())(b)),D=$(),V=$(),F=o;l.updates.watch(()=>{F=Z(o,{safe:!0})}),s({clock:x,source:n,target:V}),s({clock:V,source:P,filter:(r,a)=>a!==r,fn:(r,a)=>a,target:g}),s({clock:[o.doneData,s(g,g.done)],filter:r=>r!==void 0,target:P}),s({clock:[o.doneData,P],target:S}),s({clock:S.doneData,filter:r=>r!==void 0,target:c}),s({clock:[o.finally.map(T("get")),g.finally.map(T("set")),S.fail.map(T("validate"))],target:D}),y&&s({clock:D,target:y}),v&&s({clock:D,filter:({status:r})=>r==="done",fn:({key:r,keyPrefix:a,operation:U,value:z})=>({key:r,keyPrefix:a,operation:U,value:z}),target:v}),s({clock:D,filter:({status:r})=>r==="fail",fn:({key:r,keyPrefix:a,operation:U,error:z,value:W})=>({key:r,keyPrefix:a,operation:U,error:z,value:W}),target:f}),k&&l.on(k,([r],a)=>[a===void 0?r:a]),d?(s({clock:d,fn:()=>{},target:o}),l.on(d,([r],a)=>[a===void 0?r:a])):o()}),R.unsubscribe=R}B.watch(e=>console.error(e.error));function H({keyArea:e=""}={}){var t=()=>({get(){},set(){}});return t.keyArea=e,t.noop=!0,t}H.factory=!0;function G({storage:e,sync:t=!1,serialize:m=JSON.stringify,deserialize:n=JSON.parse,timeout:c,def:x}){var v=(f,y)=>{var d,k,E,h=()=>E.setItem(f,m(k)),b=u=>{d=clearTimeout(d),u&&h(),typeof removeEventListener<"u"&&removeEventListener("beforeunload",b)};return t&&typeof addEventListener<"u"&&addEventListener("storage",u=>{u.storageArea===e()&&(u.key===f&&y(t==="force"?void 0:u.newValue),u.key===null&&y(null))}),{get(u){b();var w=u!==void 0?u:e().getItem(f);return w===null?x!==void 0?x:u:n(w)},set(u){k=u,E=e(),c===void 0?h():d||(d=setTimeout(b,c,1),typeof addEventListener<"u"&&addEventListener("beforeunload",b))}}};try{v.keyArea=e()}catch{}return v}G.factory=!0;function Q(e){return function(){try{return typeof localStorage<"u"}catch{return!0}}()?G({storage:()=>localStorage,sync:!0,...e}):H({keyArea:"local"})}function ne(e){return t=>re({adapter:Q,...e,...t})}Q.factory=!0;var ae=ne();function oe(){var e=arguments.length===2?{source:arguments.length<=0?void 0:arguments[0],timeout:arguments.length<=1?void 0:arguments[1]}:arguments.length<=0?void 0:arguments[0],{source:t,timeout:m,target:n=$({name:"target",sid:"jucb8d"})}=e,c=Array.isArray(n)?n:[n];if(!A.unit(t))throw new TypeError("source must be a unit from effector");if(!c.every(f=>A.unit(f)))throw new TypeError("target must be a unit from effector");var x=ie(m),v=K(f=>{var{payload:y,milliseconds:d}=f;return new Promise(k=>{setTimeout(k,d,y)})},{name:"timerFx",sid:"-wp3hwr"});return s({and:[{source:ee({and:[{milliseconds:x}],or:{name:"source",sid:"-gaikyz"}}),clock:t,fn:(f,y)=>{var{milliseconds:d}=f;return{payload:y,milliseconds:typeof d=="function"?d(y):d}},target:v}],or:{sid:"-uuqxfw"}}),s({and:[{clock:v.doneData,target:c}],or:{sid:"-uc1x9m"}}),n}function ie(e){if(A.store(e,{sid:"-tvk3f2"})||typeof e=="function"||typeof e=="number")return e;throw new TypeError(`'timeout' argument must be a function, Store, or a number. Passed "`.concat(typeof e,'"'))}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function ue(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}let I;const de=new Uint8Array(16);function se(){if(!I){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");I=crypto.getRandomValues.bind(crypto)}return I(de)}const ce=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),J={randomUUID:ce};function fe(e,t,m){var c;if(J.randomUUID&&!e)return J.randomUUID();e=e||{};const n=e.random??((c=e.rng)==null?void 0:c.call(e))??se();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,ue(n)}const M=L("",{name:"$uuid",sid:"1mpkgt"}),le=te({sid:"-9ea67c",fn:()=>oe(O.appStarted,300),name:"delayedAppStarted",method:"delay"});ae({store:M,pickup:O.appStarted});s({and:[{clock:le,source:M,fn:e=>e.length>0?e:fe(),target:M}],or:{sid:"-xx6i4t"}});export{M as $,ae as a,oe as d};
