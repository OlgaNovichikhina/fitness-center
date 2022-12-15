// Swiper 7.4.1
/* global Swiper */
import './vendor/swiper.js';

const COACHES_SWIPER = document.querySelector('.coaches__wrapper');
const COACHES_LIST = document.querySelector('.coaches__list');
const COACHES_BUTTONS = document.querySelectorAll('.coaches__button');

const REVIEWS_SWIPER = document.querySelector('.reviews__wrapper');
const REVIEWS_LIST = document.querySelector('.reviews__list');
const REVIEWS_BUTTONS = document.querySelectorAll('.reviews__button');


function deleteTabindex() {
  const SLIDES_DUPLICATE = document.querySelectorAll('.swiper-slide-duplicate');

  SLIDES_DUPLICATE.forEach((slide) => {
    slide.removeAttribute('tabindex');
  });
}

function deleteClassNoJS(elem, navButtons) {
  elem.classList.remove('no-js');

  navButtons.forEach((button) => {
    button.style.display = 'block';
  });
}

const swipeCoachSwiper = () => {

  deleteClassNoJS(COACHES_LIST, COACHES_BUTTONS);


  if (COACHES_SWIPER) {
    const swiper = new Swiper(COACHES_SWIPER, {
      direction: 'horizontal',
      loop: true,
      allowTouchMove: true,
      autoHeight: true,
      watchOverflow: true,
      watchSlidesProgress: true,
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
  deleteTabindex();
};

const swipeReviewsSwiper = () => {

  deleteClassNoJS(REVIEWS_LIST, REVIEWS_BUTTONS);

  if (REVIEWS_SWIPER) {
    const swiper = new Swiper(REVIEWS_SWIPER, {

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      spaceBetween: 60,
      slidesPerView: 1,
    });
  }
};

export {swipeCoachSwiper, swipeReviewsSwiper};
