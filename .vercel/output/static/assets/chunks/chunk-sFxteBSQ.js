import{r as _,x as k}from"./chunk-CTUfgmOZ.js";function N(l,n){let t=l;for(;(t=t.parentElement)&&!t.matches(n););return t}function Le(l,n,t){for(let o=l-1;o>=0;o-=1)if(!n[o].disabled)return o;if(t){for(let o=n.length-1;o>-1;o-=1)if(!n[o].disabled)return o}return l}function ze(l,n,t){for(let o=l+1;o<n.length;o+=1)if(!n[o].disabled)return o;if(t){for(let o=0;o<n.length;o+=1)if(!n[o].disabled)return o}return l}function Me(l,n,t){return N(l,t)===N(n,t)}function Zt({parentSelector:l,siblingSelector:n,onKeyDown:t,loop:o=!0,activateOnFocus:f=!1,dir:m="rtl",orientation:p}){return d=>{var r;t==null||t(d);const s=Array.from(((r=N(d.currentTarget,l))==null?void 0:r.querySelectorAll(n))||[]).filter(u=>Me(d.currentTarget,u,l)),x=s.findIndex(u=>d.currentTarget===u),w=ze(x,s,o),A=Le(x,s,o),e=m==="rtl"?A:w,a=m==="rtl"?w:A;switch(d.key){case"ArrowRight":{p==="horizontal"&&(d.stopPropagation(),d.preventDefault(),s[e].focus(),f&&s[e].click());break}case"ArrowLeft":{p==="horizontal"&&(d.stopPropagation(),d.preventDefault(),s[a].focus(),f&&s[a].click());break}case"ArrowUp":{p==="vertical"&&(d.stopPropagation(),d.preventDefault(),s[A].focus(),f&&s[A].click());break}case"ArrowDown":{p==="vertical"&&(d.stopPropagation(),d.preventDefault(),s[w].focus(),f&&s[w].click());break}case"Home":{d.stopPropagation(),d.preventDefault(),!s[0].disabled&&s[0].focus();break}case"End":{d.stopPropagation(),d.preventDefault();const u=s.length-1;!s[u].disabled&&s[u].focus();break}}}}var Ie=Object.defineProperty,B=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,V=(l,n,t)=>n in l?Ie(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,Oe=(l,n)=>{for(var t in n)le.call(n,t)&&V(l,t,n[t]);if(B)for(var t of B(n))ae.call(n,t)&&V(l,t,n[t]);return l},Te=(l,n)=>{var t={};for(var o in l)le.call(l,o)&&n.indexOf(o)<0&&(t[o]=l[o]);if(l!=null&&B)for(var o of B(l))n.indexOf(o)<0&&ae.call(l,o)&&(t[o]=l[o]);return t};const oe=_.forwardRef((l,n)=>{const t=l,{alt:o,color:f="currentColor",size:m="1em",weight:p="regular",mirrored:d=!1,children:s,weights:x}=t,w=Te(t,["alt","color","size","weight","mirrored","children","weights"]);return k.createElement("svg",Oe({ref:n,xmlns:"http://www.w3.org/2000/svg",width:m,height:m,fill:f,viewBox:"0 0 256 256",transform:d?"scale(-1, 1)":void 0},w),!!o&&k.createElement("title",null,o),s,x.get(p))});oe.displayName="SSRBase";const jt=oe,Dt=new Map([["bold",k.createElement(k.Fragment,null,k.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",k.createElement(k.Fragment,null,k.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),k.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",k.createElement(k.Fragment,null,k.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",k.createElement(k.Fragment,null,k.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",k.createElement(k.Fragment,null,k.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",k.createElement(k.Fragment,null,k.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]);function M(){return M=Object.assign?Object.assign.bind():function(l){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(l[o]=t[o])}return l},M.apply(this,arguments)}const Be=["children","options"],c={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var X;(function(l){l[l.MAX=0]="MAX",l[l.HIGH=1]="HIGH",l[l.MED=2]="MED",l[l.LOW=3]="LOW",l[l.MIN=4]="MIN"})(X||(X={}));const J=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((l,n)=>(l[n.toLowerCase()]=n,l),{class:"className",for:"htmlFor"}),Y={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},Re=["style","script"],Pe=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Ze=/mailto:/i,je=/\n{2,}$/,ie=/^(\s*>[\s\S]*?)(?=\n\n|$)/,De=/^ *> ?/gm,He=/^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,Ne=/^ {2,}\n/,Ue=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,ce=/^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,se=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Fe=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,_e=/^(?:\n *)*\n/,We=/\r\n?/g,Ge=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,qe=/^\[\^([^\]]+)]/,Qe=/\f/g,Ve=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,Xe=/^\s*?\[(x|\s)\]/,ue=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,de=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,fe=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,U=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,Je=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,pe=/^<!--[\s\S]*?(?:-->)/,Ye=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,F=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Ke=/^\{.*\}$/,et=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,tt=/^<([^ >]+@[^ >]+)>/,rt=/^<([^ >]+:\/[^ >]+)>/,nt=/-([a-z])?/gi,he=/^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,lt=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,at=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,ot=/^\[([^\]]*)\] ?\[([^\]]*)\]/,it=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,ct=/\t/g,st=/(^ *\||\| *$)/g,ut=/^ *:-+: *$/,dt=/^ *:-+ *$/,ft=/^ *-+: *$/,R="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",pt=new RegExp(`^([*_])\\1${R}\\1\\1(?!\\1)`),ht=new RegExp(`^([*_])${R}\\1(?!\\1|\\w)`),mt=new RegExp(`^==${R}==`),gt=new RegExp(`^~~${R}~~`),yt=/^\\([^0-9A-Za-z\s])/,kt=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,xt=/^\n+/,bt=/^([ \t]*)/,Et=/\\([^\\])/g,K=/ *\n+$/,wt=/(?:^|\n)( *)$/,W="(?:\\d+\\.)",G="(?:[*+-])";function me(l){return"( *)("+(l===1?W:G)+") +"}const ge=me(1),ye=me(2);function ke(l){return new RegExp("^"+(l===1?ge:ye))}const $t=ke(1),St=ke(2);function xe(l){return new RegExp("^"+(l===1?ge:ye)+"[^\\n]*(?:\\n(?!\\1"+(l===1?W:G)+" )[^\\n]*)*(\\n|$)","gm")}const be=xe(1),Ee=xe(2);function we(l){const n=l===1?W:G;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const $e=we(1),Se=we(2);function ee(l,n){const t=n===1,o=t?$e:Se,f=t?be:Ee,m=t?$t:St;return{match(p,d){const s=wt.exec(d.prevCapture);return s&&(d.list||!d.inline&&!d.simple)?o.exec(p=s[1]+p):null},order:1,parse(p,d,s){const x=t?+p[2]:void 0,w=p[0].replace(je,`
`).match(f);let A=!1;return{items:w.map(function(e,a){const r=m.exec(e)[0].length,u=new RegExp("^ {1,"+r+"}","gm"),i=e.replace(u,"").replace(m,""),h=a===w.length-1,g=i.indexOf(`

`)!==-1||h&&A;A=g;const b=s.inline,S=s.list;let $;s.list=!0,g?(s.inline=!1,$=i.replace(K,`

`)):(s.inline=!0,$=i.replace(K,""));const y=d($,s);return s.inline=b,s.list=S,y}),ordered:t,start:x}},render:(p,d,s)=>l(p.ordered?"ol":"ul",{key:s.key,start:p.type===c.orderedList?p.start:void 0},p.items.map(function(x,w){return l("li",{key:w},d(x,s))}))}}const vt=new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),At=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ve=[ie,ce,se,ue,fe,de,pe,he,be,$e,Ee,Se],Ct=[...ve,/^[^\n]+(?:  \n|\n{2,})/,U,F];function I(l){return l.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Lt(l){return ft.test(l)?"right":ut.test(l)?"center":dt.test(l)?"left":null}function te(l,n,t,o){const f=t.inTable;t.inTable=!0;let m=[[]],p="";function d(){if(!p)return;const s=m[m.length-1];s.push.apply(s,n(p,t)),p=""}return l.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((s,x,w)=>{s.trim()==="|"&&(d(),o)?x!==0&&x!==w.length-1&&m.push([]):p+=s}),d(),t.inTable=f,m}function zt(l,n,t){t.inline=!0;const o=l[2]?l[2].replace(st,"").split("|").map(Lt):[],f=l[3]?function(p,d,s){return p.trim().split(`
`).map(function(x){return te(x,d,s,!0)})}(l[3],n,t):[],m=te(l[1],n,t,!!f.length);return t.inline=!1,f.length?{align:o,cells:f,header:m,type:c.table}:{children:m,type:c.paragraph}}function re(l,n){return l.align[n]==null?{}:{textAlign:l.align[n]}}function L(l){return function(n,t){return t.inline?l.exec(n):null}}function z(l){return function(n,t){return t.inline||t.simple?l.exec(n):null}}function C(l){return function(n,t){return t.inline||t.simple?null:l.exec(n)}}function O(l){return function(n){return l.exec(n)}}function Mt(l,n){if(n.inline||n.simple)return null;let t="";l.split(`
`).every(f=>(f+=`
`,!ve.some(m=>m.test(f))&&(t+=f,!!f.trim())));const o=t.trimEnd();return o==""?null:[t,o]}function It(l){try{if(decodeURIComponent(l).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch{return null}return l}function ne(l){return l.replace(Et,"$1")}function T(l,n,t){const o=t.inline||!1,f=t.simple||!1;t.inline=!0,t.simple=!0;const m=l(n,t);return t.inline=o,t.simple=f,m}function Ot(l,n,t){const o=t.inline||!1,f=t.simple||!1;t.inline=!1,t.simple=!0;const m=l(n,t);return t.inline=o,t.simple=f,m}function Tt(l,n,t){const o=t.inline||!1;t.inline=!1;const f=l(n,t);return t.inline=o,f}const Z=(l,n,t)=>({children:T(n,l[1],t)});function j(){return{}}function D(){return null}function Bt(...l){return l.filter(Boolean).join(" ")}function H(l,n,t){let o=l;const f=n.split(".");for(;f.length&&(o=o[f[0]],o!==void 0);)f.shift();return o||t}function Rt(l="",n={}){function t(e,a,...r){const u=H(n.overrides,`${e}.props`,{});return n.createElement(function(i,h){const g=H(h,i);return g?typeof g=="function"||typeof g=="object"&&"render"in g?g:H(h,`${i}.component`,i):i}(e,n.overrides),M({},a,u,{className:Bt(a==null?void 0:a.className,u.className)||void 0}),...r)}function o(e){e=e.replace(Ve,"");let a=!1;n.forceInline?a=!0:n.forceBlock||(a=it.test(e)===!1);const r=x(s(a?e:`${e.trimEnd().replace(xt,"")}

`,{inline:a}));for(;typeof r[r.length-1]=="string"&&!r[r.length-1].trim();)r.pop();if(n.wrapper===null)return r;const u=n.wrapper||(a?"span":"div");let i;if(r.length>1||n.forceWrapper)i=r;else{if(r.length===1)return i=r[0],typeof i=="string"?t("span",{key:"outer"},i):i;i=null}return n.createElement(u,{key:"outer"},i)}function f(e,a){const r=a.match(Pe);return r?r.reduce(function(u,i){const h=i.indexOf("=");if(h!==-1){const g=function(y){return y.indexOf("-")!==-1&&y.match(Ye)===null&&(y=y.replace(nt,function(E,v){return v.toUpperCase()})),y}(i.slice(0,h)).trim(),b=function(y){const E=y[0];return(E==='"'||E==="'")&&y.length>=2&&y[y.length-1]===E?y.slice(1,-1):y}(i.slice(h+1).trim()),S=J[g]||g;if(S==="ref")return u;const $=u[S]=function(y,E,v,Ae){return E==="style"?v.split(/;\s?/).reduce(function(q,P){const Q=P.slice(0,P.indexOf(":"));return q[Q.trim().replace(/(-[a-z])/g,Ce=>Ce[1].toUpperCase())]=P.slice(Q.length+1).trim(),q},{}):E==="href"||E==="src"?Ae(v,y,E):(v.match(Ke)&&(v=v.slice(1,v.length-1)),v==="true"||v!=="false"&&v)}(e,g,b,n.sanitizer);typeof $=="string"&&(U.test($)||F.test($))&&(u[S]=o($.trim()))}else i!=="style"&&(u[J[i]||i]=!0);return u},{}):null}n.overrides=n.overrides||{},n.sanitizer=n.sanitizer||It,n.slugify=n.slugify||I,n.namedCodesToUnicode=n.namedCodesToUnicode?M({},Y,n.namedCodesToUnicode):Y,n.createElement=n.createElement||_.createElement;const m=[],p={},d={[c.blockQuote]:{match:C(ie),order:1,parse(e,a,r){const[,u,i]=e[0].replace(De,"").match(He);return{alert:u,children:a(i,r)}},render(e,a,r){const u={key:r.key};return e.alert&&(u.className="markdown-alert-"+n.slugify(e.alert.toLowerCase(),I),e.children.unshift({attrs:{},children:[{type:c.text,text:e.alert}],noInnerParse:!0,type:c.htmlBlock,tag:"header"})),t("blockquote",u,a(e.children,r))}},[c.breakLine]:{match:O(Ne),order:1,parse:j,render:(e,a,r)=>t("br",{key:r.key})},[c.breakThematic]:{match:C(Ue),order:1,parse:j,render:(e,a,r)=>t("hr",{key:r.key})},[c.codeBlock]:{match:C(se),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,a,r)=>t("pre",{key:r.key},t("code",M({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[c.codeFenced]:{match:C(ce),order:0,parse:e=>({attrs:f("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:c.codeBlock})},[c.codeInline]:{match:z(Fe),order:3,parse:e=>({text:e[2]}),render:(e,a,r)=>t("code",{key:r.key},e.text)},[c.footnote]:{match:C(Ge),order:0,parse:e=>(m.push({footnote:e[2],identifier:e[1]}),{}),render:D},[c.footnoteReference]:{match:L(qe),order:1,parse:e=>({target:`#${n.slugify(e[1],I)}`,text:e[1]}),render:(e,a,r)=>t("a",{key:r.key,href:n.sanitizer(e.target,"a","href")},t("sup",{key:r.key},e.text))},[c.gfmTask]:{match:L(Xe),order:1,parse:e=>({completed:e[1].toLowerCase()==="x"}),render:(e,a,r)=>t("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[c.heading]:{match:C(n.enforceAtxHeadings?de:ue),order:1,parse:(e,a,r)=>({children:T(a,e[2],r),id:n.slugify(e[2],I),level:e[1].length}),render:(e,a,r)=>t(`h${e.level}`,{id:e.id,key:r.key},a(e.children,r))},[c.headingSetext]:{match:C(fe),order:0,parse:(e,a,r)=>({children:T(a,e[1],r),level:e[2]==="="?1:2,type:c.heading})},[c.htmlBlock]:{match:O(U),order:1,parse(e,a,r){const[,u]=e[3].match(bt),i=new RegExp(`^${u}`,"gm"),h=e[3].replace(i,""),g=(b=h,Ct.some(v=>v.test(b))?Tt:T);var b;const S=e[1].toLowerCase(),$=Re.indexOf(S)!==-1,y=($?S:e[1]).trim(),E={attrs:f(y,e[2]),noInnerParse:$,tag:y};return r.inAnchor=r.inAnchor||S==="a",$?E.text=e[3]:E.children=g(a,h,r),r.inAnchor=!1,E},render:(e,a,r)=>t(e.tag,M({key:r.key},e.attrs),e.text||(e.children?a(e.children,r):""))},[c.htmlSelfClosing]:{match:O(F),order:1,parse(e){const a=e[1].trim();return{attrs:f(a,e[2]||""),tag:a}},render:(e,a,r)=>t(e.tag,M({},e.attrs,{key:r.key}))},[c.htmlComment]:{match:O(pe),order:1,parse:()=>({}),render:D},[c.image]:{match:z(At),order:1,parse:e=>({alt:e[1],target:ne(e[2]),title:e[3]}),render:(e,a,r)=>t("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:n.sanitizer(e.target,"img","src")})},[c.link]:{match:L(vt),order:3,parse:(e,a,r)=>({children:Ot(a,e[1],r),target:ne(e[2]),title:e[3]}),render:(e,a,r)=>t("a",{key:r.key,href:n.sanitizer(e.target,"a","href"),title:e.title},a(e.children,r))},[c.linkAngleBraceStyleDetector]:{match:L(rt),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],type:c.link})},[c.linkBareUrlDetector]:{match:(e,a)=>a.inAnchor||n.disableAutoLink?null:L(et)(e,a),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],title:void 0,type:c.link})},[c.linkMailtoDetector]:{match:L(tt),order:0,parse(e){let a=e[1],r=e[1];return Ze.test(r)||(r="mailto:"+r),{children:[{text:a.replace("mailto:",""),type:c.text}],target:r,type:c.link}}},[c.orderedList]:ee(t,1),[c.unorderedList]:ee(t,2),[c.newlineCoalescer]:{match:C(_e),order:3,parse:j,render:()=>`
`},[c.paragraph]:{match:Mt,order:3,parse:Z,render:(e,a,r)=>t("p",{key:r.key},a(e.children,r))},[c.ref]:{match:L(lt),order:0,parse:e=>(p[e[1]]={target:e[2],title:e[4]},{}),render:D},[c.refImage]:{match:z(at),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,a,r)=>p[e.ref]?t("img",{key:r.key,alt:e.alt,src:n.sanitizer(p[e.ref].target,"img","src"),title:p[e.ref].title}):null},[c.refLink]:{match:L(ot),order:0,parse:(e,a,r)=>({children:a(e[1],r),fallbackChildren:e[0],ref:e[2]}),render:(e,a,r)=>p[e.ref]?t("a",{key:r.key,href:n.sanitizer(p[e.ref].target,"a","href"),title:p[e.ref].title},a(e.children,r)):t("span",{key:r.key},e.fallbackChildren)},[c.table]:{match:C(he),order:1,parse:zt,render(e,a,r){const u=e;return t("table",{key:r.key},t("thead",null,t("tr",null,u.header.map(function(i,h){return t("th",{key:h,style:re(u,h)},a(i,r))}))),t("tbody",null,u.cells.map(function(i,h){return t("tr",{key:h},i.map(function(g,b){return t("td",{key:b,style:re(u,b)},a(g,r))}))})))}},[c.text]:{match:O(kt),order:4,parse:e=>({text:e[0].replace(Je,(a,r)=>n.namedCodesToUnicode[r]?n.namedCodesToUnicode[r]:a)}),render:e=>e.text},[c.textBolded]:{match:z(pt),order:2,parse:(e,a,r)=>({children:a(e[2],r)}),render:(e,a,r)=>t("strong",{key:r.key},a(e.children,r))},[c.textEmphasized]:{match:z(ht),order:3,parse:(e,a,r)=>({children:a(e[2],r)}),render:(e,a,r)=>t("em",{key:r.key},a(e.children,r))},[c.textEscaped]:{match:z(yt),order:1,parse:e=>({text:e[1],type:c.text})},[c.textMarked]:{match:z(mt),order:3,parse:Z,render:(e,a,r)=>t("mark",{key:r.key},a(e.children,r))},[c.textStrikethroughed]:{match:z(gt),order:3,parse:Z,render:(e,a,r)=>t("del",{key:r.key},a(e.children,r))}};n.disableParsingRawHTML===!0&&(delete d[c.htmlBlock],delete d[c.htmlSelfClosing]);const s=function(e){let a=Object.keys(e);function r(u,i){let h=[];for(i.prevCapture=i.prevCapture||"";u;){let g=0;for(;g<a.length;){const b=a[g],S=e[b],$=S.match(u,i);if($){const y=$[0];i.prevCapture+=y,u=u.substring(y.length);const E=S.parse($,r,i);E.type==null&&(E.type=b),h.push(E);break}g++}}return i.prevCapture="",h}return a.sort(function(u,i){let h=e[u].order,g=e[i].order;return h!==g?h-g:u<i?-1:1}),function(u,i){return r(function(h){return h.replace(We,`
`).replace(Qe,"").replace(ct,"    ")}(u),i)}}(d),x=(w=function(e,a){return function(r,u,i){const h=e[r.type].render;return a?a(()=>h(r,u,i),r,u,i):h(r,u,i)}}(d,n.renderRule),function e(a,r={}){if(Array.isArray(a)){const u=r.key,i=[];let h=!1;for(let g=0;g<a.length;g++){r.key=g;const b=e(a[g],r),S=typeof b=="string";S&&h?i[i.length-1]+=b:b!==null&&i.push(b),h=S}return r.key=u,i}return w(a,e,r)});var w;const A=o(l);return m.length?t("div",null,A,t("footer",{key:"footer"},m.map(function(e){return t("div",{id:n.slugify(e.identifier,I),key:e.identifier},e.identifier,x(s(e.footnote,{inline:!0})))}))):A}const Ht=l=>{let{children:n="",options:t}=l,o=function(f,m){if(f==null)return{};var p,d,s={},x=Object.keys(f);for(d=0;d<x.length;d++)m.indexOf(p=x[d])>=0||(s[p]=f[p]);return s}(l,Be);return _.cloneElement(Rt(n,t),o)};export{jt as E,Ht as M,Zt as c,N as f,Dt as l};
