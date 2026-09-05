export function initAboutTabs() {
  const tabButtons = document.querySelectorAll(".tabs-about__btn");
  const tabContents = document.querySelectorAll(".about__tab-content");

  if (!tabButtons.length || !tabContents.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) =>
        btn.classList.remove("tabs-about__btn--active"),
      );
      tabContents.forEach((content) =>
        content.classList.remove("about__tab-content--active"),
      );

      button.classList.add("tabs-about__btn--active");

      const tabId = button.getAttribute("data-tab");
      const targetContent = document.getElementById(`tab-${tabId}`);
      if (targetContent) {
        targetContent.classList.add("about__tab-content--active");
      }
    });
  });
}
