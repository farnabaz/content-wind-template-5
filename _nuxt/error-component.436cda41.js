import{_ as o}from"./entry.e89f4cbc.js";import{E as n,N as f,T as E,a5 as g,a6 as k,A as s}from"./runtime-core.esm-bundler.e28a5d4a.js";import"./query.76255cf6.js";import"./_plugin-vue_export-helper.c27b6911.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:e}=c;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),a=r===404,i=e.statusMessage??(a?"Page Not Found":"Internal Server Error"),u=e.message||e.toString(),p=void 0,m=n(()=>o(()=>import("./error-404.8de603f4.js"),["./error-404.8de603f4.js","./query.76255cf6.js","./runtime-core.esm-bundler.e28a5d4a.js","./entry.e89f4cbc.js","./_plugin-vue_export-helper.c27b6911.js","./entry.34d7805f.css","./error-404.6cf32329.css"],import.meta.url).then(t=>t.default||t)),_=n(()=>o(()=>import("./error-500.9e85992c.js"),["./error-500.9e85992c.js","./entry.e89f4cbc.js","./runtime-core.esm-bundler.e28a5d4a.js","./query.76255cf6.js","./_plugin-vue_export-helper.c27b6911.js","./entry.34d7805f.css","./error-500.899135dc.css"],import.meta.url).then(t=>t.default||t)),l=a?m:_;return(t,d)=>(f(),E(s(l),g(k({statusCode:s(r),statusMessage:s(i),description:s(u),stack:s(p)})),null,16))}},C=P;export{C as default};
