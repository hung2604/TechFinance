var U=Object.defineProperty;var F=(n,a,e)=>a in n?U(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var p=(n,a,e)=>F(n,typeof a!="symbol"?a+"":a,e);import{az as q,aA as S,aB as C,r as M,s as H,ad as V,aC as I,aD as L,i as N,j as $,aE as x,aF as K,aG as k,aH as G,x as T,p as J,C as A,aI as Q,aJ as B}from"./oqaamrP9.js";const W=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],X=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",v=[];class Z{constructor(){p(this,"_data",new O);p(this,"_hash",new O([...W]));p(this,"_nDataBytes",0);p(this,"_minBufferSize",0)}finalize(a){a&&this._append(a);const e=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(e/4294967296),this._data.words[(s+64>>>9<<4)+15]=e,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(a,e){const s=this._hash.words;let t=s[0],r=s[1],c=s[2],y=s[3],f=s[4],m=s[5],g=s[6],i=s[7];for(let u=0;u<64;u++){if(u<16)v[u]=a[e+u]|0;else{const o=v[u-15],D=(o<<25|o>>>7)^(o<<14|o>>>18)^o>>>3,h=v[u-2],R=(h<<15|h>>>17)^(h<<13|h>>>19)^h>>>10;v[u]=D+v[u-7]+R+v[u-16]}const w=f&m^~f&g,b=t&r^t&c^r&c,P=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),l=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),_=i+l+w+X[u]+v[u],d=P+b;i=g,g=m,m=f,f=y+_|0,y=c,c=r,r=t,t=_+d|0}s[0]=s[0]+t|0,s[1]=s[1]+r|0,s[2]=s[2]+c|0,s[3]=s[3]+y|0,s[4]=s[4]+f|0,s[5]=s[5]+m|0,s[6]=s[6]+g|0,s[7]=s[7]+i|0}_append(a){typeof a=="string"&&(a=O.fromUtf8(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_process(a){let e,s=this._data.sigBytes/64;a?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*16,r=Math.min(t*4,this._data.sigBytes);if(t){for(let c=0;c<t;c+=16)this._doProcessBlock(this._data.words,c);e=this._data.words.splice(0,t),this._data.sigBytes-=r}return new O(e,r)}}class O{constructor(a,e){p(this,"words");p(this,"sigBytes");a=this.words=a||[],this.sigBytes=e===void 0?a.length*4:e}static fromUtf8(a){const e=unescape(encodeURIComponent(a)),s=e.length,t=[];for(let r=0;r<s;r++)t[r>>>2]|=(e.charCodeAt(r)&255)<<24-r%4*8;return new O(t,s)}toBase64(){const a=[];for(let e=0;e<this.sigBytes;e+=3){const s=this.words[e>>>2]>>>24-e%4*8&255,t=this.words[e+1>>>2]>>>24-(e+1)%4*8&255,r=this.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=s<<16|t<<8|r;for(let y=0;y<4&&e*8+y*6<this.sigBytes*8;y++)a.push(Y.charAt(c>>>6*(3-y)&63))}return a.join("")}concat(a){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let e=0;e<a.sigBytes;e++){const s=a.words[e>>>2]>>>24-e%4*8&255;this.words[this.sigBytes+e>>>2]|=s<<24-(this.sigBytes+e)%4*8}else for(let e=0;e<a.sigBytes;e+=4)this.words[this.sigBytes+e>>>2]=a.words[e>>>2];this.sigBytes+=a.sigBytes}}function ee(n){return new Z().finalize(n).toBase64()}function te(n){return ee(q(n))}function ae(n){return Array.isArray(n)?n:[n]}const se=n=>n==="defer"||n===!1;function re(...n){var P;const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[e,s,t={}]=n;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof s!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const r=S(),c=s,y=()=>C.value,f=()=>r.isHydrating?r.payload.data[e]:r.static.data[e];t.server??(t.server=!0),t.default??(t.default=y),t.getCachedData??(t.getCachedData=f),t.lazy??(t.lazy=!1),t.immediate??(t.immediate=!0),t.deep??(t.deep=C.deep),t.dedupe??(t.dedupe="cancel");const m=t.getCachedData(e,r),g=m!=null;if(!r._asyncData[e]||!t.immediate){(P=r.payload._errors)[e]??(P[e]=C.errorValue);const l=t.deep?M:H;r._asyncData[e]={data:l(g?m:t.default()),pending:M(!g),error:V(r.payload._errors,e),status:M("idle"),_default:t.default}}const i={...r._asyncData[e]};delete i._default,i.refresh=i.execute=(l={})=>{if(r._asyncDataPromises[e]){if(se(l.dedupe??t.dedupe))return r._asyncDataPromises[e];r._asyncDataPromises[e].cancelled=!0}if(l._initial||r.isHydrating&&l._initial!==!1){const d=l._initial?m:t.getCachedData(e,r);if(d!=null)return Promise.resolve(d)}i.pending.value=!0,i.status.value="pending";const _=new Promise((d,o)=>{try{d(c(r))}catch(D){o(D)}}).then(async d=>{if(_.cancelled)return r._asyncDataPromises[e];let o=d;t.transform&&(o=await t.transform(d)),t.pick&&(o=ie(o,t.pick)),r.payload.data[e]=o,i.data.value=o,i.error.value=C.errorValue,i.status.value="success"}).catch(d=>{if(_.cancelled)return r._asyncDataPromises[e];i.error.value=G(d),i.data.value=T(t.default()),i.status.value="error"}).finally(()=>{_.cancelled||(i.pending.value=!1,delete r._asyncDataPromises[e])});return r._asyncDataPromises[e]=_,r._asyncDataPromises[e]},i.clear=()=>ne(r,e);const u=()=>i.refresh({_initial:!0}),w=t.server!==!1&&r.payload.serverRendered;{const l=I();if(l&&w&&t.immediate&&!l.sp&&(l.sp=[]),l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const o=l._nuxtOnBeforeMountCbs;L(()=>{o.forEach(D=>{D()}),o.splice(0,o.length)}),N(()=>o.splice(0,o.length))}w&&r.isHydrating&&(i.error.value||m!=null)?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):l&&(r.payload.serverRendered&&r.isHydrating||t.lazy)&&t.immediate?l._nuxtOnBeforeMountCbs.push(u):t.immediate&&u();const _=K();if(t.watch){const o=$(t.watch,()=>i.refresh());_&&x(o)}const d=r.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await i.refresh()});_&&x(d)}const b=Promise.resolve(r._asyncDataPromises[e]).then(()=>i);return Object.assign(b,i),b}async function fe(n){await new Promise(e=>k(e));const a=n?ae(n):void 0;await S().hooks.callHookParallel("app:data:refresh",a)}function ne(n,a){a in n.payload.data&&(n.payload.data[a]=void 0),a in n.payload._errors&&(n.payload._errors[a]=C.errorValue),n._asyncData[a]&&(n._asyncData[a].data.value=T(n._asyncData[a]._default()),n._asyncData[a].error.value=C.errorValue,n._asyncData[a].pending.value=!1,n._asyncData[a].status.value="idle"),a in n._asyncDataPromises&&(n._asyncDataPromises[a]&&(n._asyncDataPromises[a].cancelled=!0),n._asyncDataPromises[a]=void 0)}function ie(n,a){const e={};for(const s of a)e[s]=n[s];return e}function de(n,a,e){const[s={},t]=typeof a=="string"?[{},a]:[a,e],r=J(()=>B(n)),c=s.key||te([t,typeof r.value=="string"?r.value:"",...oe(s)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const y=c===t?"$f"+c:c;if(!s.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:f,lazy:m,default:g,transform:i,pick:u,watch:w,immediate:b,getCachedData:P,deep:l,dedupe:_,...d}=s,o=A({...Q,...d,cache:typeof s.cache=="boolean"?void 0:s.cache}),D={server:f,lazy:m,default:g,transform:i,pick:u,immediate:b,getCachedData:P,deep:l,dedupe:_,watch:w===!1?[]:[o,r,...w||[]]};let h;return re(y,()=>{var j;(j=h==null?void 0:h.abort)==null||j.call(h,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),h=typeof AbortController<"u"?new AbortController:{};const z=B(s.timeout);let E;return z&&(E=setTimeout(()=>h.abort(new DOMException("Request aborted due to timeout.","AbortError")),z),h.signal.onabort=()=>clearTimeout(E)),(s.$fetch||globalThis.$fetch)(r.value,{signal:h.signal,...o}).finally(()=>{clearTimeout(E)})},D)}function oe(n){var e;const a=[((e=B(n.method))==null?void 0:e.toUpperCase())||"GET",B(n.baseURL)];for(const s of[n.params||n.query]){const t=B(s);if(!t)continue;const r={};for(const[c,y]of Object.entries(t))r[B(c)]=B(y);a.push(r)}return a}export{fe as r,de as u};
