import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export function initReviewsSlider() {
  const reviewsSection = document.querySelector(".reviews__slider.swiper");
  if (!reviewsSection) return;

  new Swiper(".reviews__slider.swiper", {
    modules: [Navigation],
    loop: true,
    spaceBetween: 24,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },

    navigation: {
      nextEl: ".reviews__nav-btn--next",
      prevEl: ".reviews__nav-btn--prev",
    },
  });
}
