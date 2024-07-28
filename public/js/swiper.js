
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set 'translateZ(-400px)' on previous slides
            translate: [0, 0, -400],
        },
        next: {
            // will set 'translateX(100%)' on next slides
            translate: ['100%', 0, 0],
        },
    },
    loop: true, // Enable looping
    direction: 'horizontal',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false, // Continue autoplay even after user interactions
    },
    speed: 400,
    spaceBetween: 100
});

var swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1, // Corrected from slidesperGroup
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true, // Corrected from loopfillGroupwithBlank
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
    }
});


  var swiper3 = new Swiper(".swiper3", {
    slidesPerView:2,
    spaceBetween:35,
    slidesperGroup:1,
    loop:true,
    fade:true,
    centerSlide:true,
    grabCursor:true,
    loopfillGroupwithBlank:true,
    autoplay:{
        delay:5000,
    },

    speed:400,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        968:{
            slidesPerView:2,
        },
    }
  });

  var swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    spaceBetween: 95,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 1,
        },
    }
});
