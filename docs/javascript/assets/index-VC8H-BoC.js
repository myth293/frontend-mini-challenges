import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-uUV6BZEi.js";import"./js-challenges-EKxRxy_u.js";import"./navbar-vQDGmXhW.js";const n=document.querySelector(".meme-generator .generate-meme-btn");document.querySelector("body");const c=document.querySelector(".meme-generator img"),u=document.querySelector(".meme-generator .meme-title"),i=document.querySelector(".meme-generator .meme-author"),t=document.querySelector(".meme"),s=(e,o,r)=>{c.setAttribute("src",e),u.innerHTML=o,i.innerHTML=`Meme by: ${r}`},m=()=>{t.style.backgroundColor="#F7EEEE",t.style.boxShadow="10px 10px 16px rgb(0, 0, 0, 0.2)",fetch(" https://meme-api.com/gimme/wholesomememes").then(e=>e.json()).then(e=>{s(e.url,e.title,e.author)})};n.addEventListener("click",m);m();
