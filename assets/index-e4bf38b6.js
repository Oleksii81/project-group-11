(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".swiper-rew",{slidesPerView:1,spaceBetween:28,loop:!0,breakpoints:{375:{slidesPerView:1,spaceBetween:28},768:{slidesPerView:2,spaceBetween:28},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination-review",clickable:!0}});(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-2]"),closeModalBtn:document.querySelector("[data-modal-close-2]"),modal:document.querySelector("[data-modal-2]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden-rev")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o=document.querySelector("body"),n=document.querySelector(".js-menu-container"),l=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),e=()=>{const t=l.getAttribute("aria-expanded")==="true"||!1;l.setAttribute("aria-expanded",!t),n.classList.toggle("is-open"),t?o.style.overflow="visible":o.style.overflow="hidden"};l.addEventListener("click",e),d.addEventListener("click",e),window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),l.setAttribute("aria-expanded",!1))})})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-3]"),closeModalBtn:document.querySelector("[data-modal-close-3]"),modal:document.querySelector("[data-modal-3]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden")}})();