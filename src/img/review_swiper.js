new Swiper('.swiper', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    slidesPerView: '1',
  
    spaceBetween: 16,
  
    freeMode: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoHeight: true,
    breakpoints: {
      768: {
        spaceBetween: 16,
        slidesPerView: '2',
      },
      1200: {
        spaceBetween: 28,
        slidesPerView: '3',
      },
    },
  }); 