const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GqZ87q0X.js","./BFq0cWvI.js","./entry.CEWQy0Qd.css"])))=>i.map(i=>d[i]);
import{_ as m}from"./BFq0cWvI.js";import{c as d,a as w,t as u}from"./BbWuc_NZ.js";async function p(o,r){return await $fetch(`/api/content/${r}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(r)],t:void 0}})}async function g(o,r="gzip"){var i;const e=Uint8Array.from(atob(o),a=>a.charCodeAt(0)),n=(i=new Response(new Blob([e])).body)==null?void 0:i.pipeThrough(new DecompressionStream(r));return(await new Response(n).text()).split(`
`)}function f(o,r){const e=h(o),t={...r};for(const n in t)e[n]==="json"&&t[n]&&t[n]!=="undefined"&&(t[n]=JSON.parse(t[n])),e[n]==="boolean"&&t[n]!=="undefined"&&(t[n]=!!t[n]);for(const n in t)t[n]==="NULL"&&(t[n]=void 0);return t}function h(o){const r=o.match(/FROM\s+(\w+)/);if(!r)return{};const e=w[b(r[1])];return(e==null?void 0:e.fields)||{}}function b(o){return o.replace(/^_content_/,"")}let s,l;function x(o){async function r(e){return s||(l=l||S(e),s=await l),s}return{all:async(e,t)=>(await r(o),s.exec({sql:e,bind:t,rowMode:"object",returnValue:"resultRows"}).map(n=>f(e,n))),first:async(e,t)=>(await r(o),f(e,s.exec({sql:e,bind:t,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,t)=>{await r(o),await s.exec({sql:e,bind:t})}}}async function S(o){if(!s){const c=await m(()=>import("./GqZ87q0X.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>a.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...a)=>console.debug(...a),warn:(...a)=>{String(a[0]).includes("OPFS sqlite3_vfs")||console.warn(...a)},error:(...a)=>console.error(...a),log:(...a)=>console.log(...a)};const i=await c();s=new i.oo1.DB}if(window.sessionStorage.getItem("previewToken"))return s;let r=null;const e=`checksum_${o}`,t=`collection_${o}`;let n="matched";try{const c=s.exec({sql:`SELECT * FROM ${u.info} where id = '${e}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(o)]&&(n="mismatch")}catch{n="missing"}if(n!=="matched"){if(window.localStorage.getItem(`content_${e}`)===d[String(o)]&&(r=window.localStorage.getItem(`content_${t}`)),!r){r=await p(void 0,String(o));try{window.localStorage.setItem(`content_${e}`,d[String(o)]),window.localStorage.setItem(`content_${t}`,r)}catch(i){console.error("Database integrity check failed, rebuilding database",i)}}const c=await g(r);await s.exec({sql:`DROP TABLE IF EXISTS ${u[String(o)]}`}),n==="mismatch"&&await s.exec({sql:`DELETE FROM ${u.info} WHERE id = '${e}'`});for(const i of c)try{await s.exec(i)}catch(a){console.error("Error executing command",a)}}return s}export{x as loadDatabaseAdapter};
