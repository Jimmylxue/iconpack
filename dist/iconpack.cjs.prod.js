"use strict";var e=require("ora"),t=require("axios"),r=require("fs/promises"),s=require("path"),a=require("svg2png"),i=require("sharp"),o=require("fs");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=n(e),u=n(t),p=n(a),d=n(i);class f extends Error{failMessage=void 0;originErrorMessage;constructor(e,t){super(),this.failMessage=e,this.originErrorMessage=t}}let m=c.default(),l=c.default();const w="ic_launcher.png",g="ic_launcher_round.png",h=[{dirname:"mipmap-hdpi",size:72},{dirname:"mipmap-mdpi",size:48},{dirname:"mipmap-xhdpi",size:96},{dirname:"mipmap-xxhdpi",size:144},{dirname:"mipmap-xxxhdpi",size:192}],y={code:1e4,message:"--input参数未输入，请检查--input输入"},v={code:10001,message:"--input配置的远程地址下载失败，请检查路径是否正确与网络环境"},x={code:10002,message:"--input配置的本地地址获取，请检查路径是否正确"},z={code:10003,message:"生成圆角icon资源失败，请检查图标或联系作者"},B={code:10004,message:"生成icon资源失败，请检查文件是否含有相同文件"};async function S(e){await async function(e){try{const t=await u.default({method:"get",url:e,responseType:"arraybuffer"}),r=Buffer.from(t.data);q.updateSourceBuffer(r)}catch(e){throw new f(v,e.message)}}(e)}const q={sourceBuffer:void 0,"--output":"./android/app/src/main/res",updateSourceBuffer(e){this.sourceBuffer=e}};async function M(){switch(q.pathType){case"remote":return void await S(q["--input"]);case"relative":return void await async function(e){try{const t=await r.readFile(s.resolve(process.cwd(),e));q.updateSourceBuffer(t)}catch(e){throw new f(x,e.message)}}(q["--input"]);case"absolute":return void await async function(e){try{const t=await r.readFile(e);q.updateSourceBuffer(t)}catch(e){throw new f(x,e.message)}}(q["--input"]);default:return void console.log("inputSourceType异常")}}async function $(){const e=process.argv.slice(2),t={};e.forEach((e=>{const[r,s]=e.split("=");t[r]=s})),await async function(e){if(!e["--input"])throw new f(y,"check --input");e["--input"]&&(q["--input"]=e["--input"],q.pathType=function(e){return/^https?:\/\//.test(e)?"remote":e.startsWith("/")?"absolute":"relative"}(e["--input"]),await M()),e["--output"]&&(q["--output"]=e["--output"])}(t)}function b(e,t,r){return new Promise((s=>{const a=e/2,i=Buffer.from(`<svg><circle cx="${a}" cy="${a}" r="${a}" /></svg>`);d.default(t).resize(e,e).composite([{input:i,blend:"dest-in"}]).toFile(r,((e,t)=>{if(s(!0),e)throw new f(z,e.message)}))}))}async function E(){try{m.info("Icon Generating In Progress......"),await $(),await async function(){try{const e=q.sourceBuffer;for(const t of h){const a=await p.default(e,{width:t.size,height:t.size}),i=s.resolve(process.cwd(),q["--output"]||"./",t.dirname);o.existsSync(i)||await r.mkdir(i,{recursive:!0}),console.log("aaaaa",i,s.resolve(process.cwd(),q["--output"]||"./",t.dirname,w)),await r.writeFile(s.resolve(process.cwd(),q["--output"]||"./",t.dirname,w),a),await b(t.size,s.resolve(process.cwd(),q["--output"]||"./",t.dirname,w),s.resolve(process.cwd(),q["--output"]||"./",t.dirname,g)),l.succeed(`✅ Generate Success In ${t.dirname}`)}}catch(e){throw new f(B,e.message)}}(),m.stop(),m.succeed("Icon Generating Success")}catch(e){!function(e){const t=c.default();t.fail(`error: ${e.failMessage?.message}, code: ${e.failMessage?.code}, message: ${e?.originErrorMessage}`),t.clear()}(e)}}module.exports=()=>{E()};
