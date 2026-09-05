import "../styles/main.scss";

import { initBurger } from "./burger";
import { initHeroSlider } from "./heroslider";
import { initAboutTabs } from "./aboutTabs";
import { initReviewsSlider } from "./reviewsSlider";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initHeroSlider();
  initAboutTabs();
  initReviewsSlider();
});
