import{g as e,i as a,O as t,a as n,r as s,d as r,f as o,o as i,c as d,w as l,b as c,e as u,h as p,j as f}from"./index.3f4a184d.js";const x=(t=>(s,r=e())=>{!n&&a(t,s,r)})(t);let h={generateuUrlink:{url:"/yoursender/api/wechat/generateuUrlink",type:"POST"}};var g=((e,a)=>{const t=e.__vccOpts||e;for(const[n,s]of a)t[n]=s;return t})(r({__name:"index",setup:e=>(x((async e=>{let a=(()=>{var e=location.href;if(o("log","at pages/index/index.vue:21",e,"---"),-1!==e.indexOf("?"))return e.substr(e.indexOf("?"),e.length)})(),t={env_version:"trial",path:"/pages/index/index",query:a},n=await((e,a,t=0)=>{let n=h[e],r=[{"Content-Type":"application/json"},{"Content-Type":"application/x-www-form-urlencoded"}],o="http://192.168.1.130:8081",i=n.otherGet?`${o}${n.url}/${a}`:`${o}${n.url}`,d=n.otherGet?{}:a;return new Promise(((a,n)=>{s({url:i,method:h[e].type,data:d,header:r[t],success:e=>{a(e)},fail:e=>{n(e)}})}))})("generateuUrlink",t);0===n.data.code&&(location.href=`${n.data.data}${a}`),o("log","at pages/index/index.vue:40",n)})),(e,a)=>{const t=p,n=f;return i(),d(n,{class:"content"},{default:l((()=>[c(n,{class:"text-area"},{default:l((()=>[c(t,{class:"title"},{default:l((()=>[u("正在跳转小程序...")])),_:1})])),_:1})])),_:1})})}),[["__scopeId","data-v-0e32049c"]]);export{g as default};