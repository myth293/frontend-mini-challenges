import"./header-fRl19Khu.js";import"./navbar-Fsj5A7cu.js";const u=document.getElementById("amount"),d=document.querySelectorAll(".btn"),l=document.getElementById("customTip"),i=document.getElementById("person"),a=document.getElementById("generate-bill"),v=document.querySelector(".tipValue"),m=document.querySelector(".totalValue"),L=document.querySelector(".bill"),n=document.getElementById("reset");let s=0,o=0,r=0;function c(){return s>0&&o>0&&r>0?(a.classList.add("active"),a.disabled=!1,!0):(a.classList.remove("active"),a.disabled=!0,!1)}function f(){s=parseFloat(u.value),d.forEach(e=>{s>0?(e.classList.add("true"),e.disabled=!1,l.disabled=!1,i.disabled=!1):(e.classList.remove("true"),e.disabled=!0,l.disabled=!0,i.disabled=!0)}),c()}function p(e){d.forEach(t=>{t.classList.remove("active"),e&&e.target.innerHTML==t.innerHTML&&(t.classList.add("active"),o=parseFloat(t.innerHTML)/100)}),l.value="",c()}function B(){l.value!==0&&(o=parseFloat(l.value/100),d.forEach(e=>{e.classList.remove("active")})),c()}function E(){r=parseFloat(i.value),c()}function b(){if(r>=1){let e=s*o,t=s+e,T=t/r;v.innerHTML="&#8377;"+e.toFixed(2),m.innerHTML="&#8377;"+t.toFixed(2),L.innerHTML="&#8377;"+T.toFixed(2),n.classList.add("active"),n.disabled=!1}}function y(){u.value="",f(),d.forEach(e=>{e.classList.remove("true"),e.disabled=!0}),o="",l.value="",p(),i.value="",E(),c(),a.disabled=!0,v.innerHTML="",m.innerHTML="",L.innerHTML="",n.classList.remove("active"),n.disabled=!0}u.addEventListener("input",f);a.addEventListener("click",b);l.addEventListener("input",B);i.addEventListener("input",E);n.addEventListener("click",y);d.forEach(e=>{e.addEventListener("click",p)});