import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-uUV6BZEi.js";import"./js-challenges-EKxRxy_u.js";import"./navbar-vQDGmXhW.js";const i=document.querySelector(".grid"),l=window.innerHeight/60-3,m=window.innerWidth/60-3,r=[],u=document.createDocumentFragment();for(let t=0;t<l;t++){const e=document.createElement("div");e.classList.add("row"),r.push([]);for(let o=0;o<m;o++){const n=document.createElement("div");n.classList.add("box"),n.dataset.x=t,n.dataset.y=o,r[t].push(n),e.appendChild(n)}u.appendChild(e)}i.appendChild(u);let a,s;i.addEventListener("mousedown",t=>{t.target.classList.contains("box")&&(a=t.target.dataset.x,s=t.target.dataset.y,p(a,s))});i.addEventListener("mousemove",t=>{if(a&&s&&t.target.classList.contains("box")){const e=t.target.dataset.x,o=t.target.dataset.y;g(),p(e,o)}});i.addEventListener("mouseup",f);i.addEventListener("mouseleave",f);function f(){a=null,s=null,g()}function p(t,e){if(a&&t&&s&&e){const o=Math.min(a,t),n=Math.max(a,t),h=Math.min(s,e),w=Math.max(s,e);for(let d=o;d<=n;d++)for(let c=h;c<=w;c++)r[d][c].style.backgroundColor="skyblue"}}function g(){for(let t=0;t<l;t++)for(let e=0;e<m;e++)r[t][e].style.backgroundColor="white"}
