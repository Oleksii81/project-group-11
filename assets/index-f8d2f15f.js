(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();new Swiper(".swiper-rew",{slidesPerView:1,spaceBetween:28,loop:!0,breakpoints:{375:{slidesPerView:1,spaceBetween:28},768:{slidesPerView:2,spaceBetween:28},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination-review",clickable:!0}});(()=>{const n={openModalBtn:document.querySelector("[data-modal-open-2]"),closeModalBtn:document.querySelector("[data-modal-close-2]"),modal:document.querySelector("[data-modal-2]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden-rev")}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();(()=>{const n=document.querySelector("body"),o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),e=()=>{const t=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!t),o.classList.toggle("is-open"),t?n.style.overflow="visible":n.style.overflow="hidden"};r.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),r.setAttribute("aria-expanded",!1))})})();
