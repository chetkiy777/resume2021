const e=document.querySelector("[data-list]"),t=document.querySelector("[data-preview]"),d=document.querySelector(".modal"),r=()=>{d.classList.add("hidden")};e.addEventListener("click",(e=>{if("IMG"===e.target.nodeName){(e=>{t.setAttribute("src",e),d.classList.remove("hidden")})(e.target.getAttribute("src")),t.addEventListener("click",r)}}));
//# sourceMappingURL=index.b5532cc3.js.map
