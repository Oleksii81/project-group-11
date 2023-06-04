const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true,
},
// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},

breakpoints: {
1200: { slidesPerView: 3 },
768: { slidesPerView: 2 },
320: { slidesPerView: 1 },
},
loop: false,



});