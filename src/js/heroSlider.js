import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export function initHeroSlider() {
  const heroSection = document.querySelector(".hero.swiper");
  if (!heroSection) return;

  new Swiper(".hero.swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 800,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".hero__nav-btn--next",
      prevEl: ".hero__nav-btn--prev",
    },

    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
  });
}
