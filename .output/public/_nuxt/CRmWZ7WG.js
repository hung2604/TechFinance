import{p as w,ay as b,ao as S}from"./oqaamrP9.js";const y=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function d(e,i){i?i={...y,...i}:i=y;const s=g(i);return s.dispatch(e),s.toString()}const x=Object.freeze(["prototype","__proto__","constructor"]);function g(e){let i="",s=new Map;const t=r=>{i+=r};return{toString(){return i},getContext(){return s},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const n=Object.prototype.toString.call(r);let a="";const f=n.length;f<10?a="unknown:["+n+"]":a=n.slice(8,f-1),a=a.toLowerCase();let l=null;if((l=s.get(r))===void 0)s.set(r,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](r):e.ignoreUnknown||this.unkown(r,a);else{let u=Object.keys(r);e.unorderedObjects&&(u=u.sort());let c=[];e.respectType!==!1&&!h(r)&&(c=x),e.excludeKeys&&(u=u.filter(o=>!e.excludeKeys(o)),c=c.filter(o=>!e.excludeKeys(o))),t("object:"+(u.length+c.length)+":");const p=o=>{this.dispatch(o),t(":"),e.excludeValues||this.dispatch(r[o]),t(",")};for(const o of u)p(o);for(const o of c)p(o)}},array(r,n){if(n=n===void 0?e.unorderedArrays!==!1:n,t("array:"+r.length+":"),!n||r.length<=1){for(const l of r)this.dispatch(l);return}const a=new Map,f=r.map(l=>{const u=g(e);u.dispatch(l);for(const[c,p]of u.getContext())a.set(c,p);return u.toString()});return s=a,f.sort(),this.array(f,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,n){if(t(n),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),h(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},set(r){t("set:");const n=[...r];return this.array(n,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const m="[native code] }",A=m.length;function h(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-A)===m}function F(e,i,s={}){return e===i||d(e,s)===d(i,s)}function N(e){return e==null}function O(e){return w(()=>{var i;return b(e)?!!((i=S(e))!=null&&i.closest("form")):!0})}export{F as a,N as i,O as u};
