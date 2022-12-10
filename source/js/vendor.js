// Swiper 7.4.1
import './vendor/swiper.js';

const coachSwiper = document.querySelector('.coaches__wrapper');

const swipeCoachSwiper = () => {
  if (coachSwiper) {
    const swiper = new Swiper(coachSwiper, {
      direction: 'horizontal',
      loop: true,
      allowTouchMove: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },
    });
  }

  const slidesDuplicate = document.querySelectorAll('.swiper-slide-duplicate');

  slidesDuplicate.forEach((el) => {
    el.removeAttribute('tabindex');
  });
};

/*
const checkReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper(reviewsSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      spaceBetween: 60,
      slidesPerView: 1,
    });
  }
};*/

export {swipeCoachSwiper};
