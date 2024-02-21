if (document.querySelector(".js-hero-slider")) {
  let heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    navigation: {
      nextEl: ".js-hero-slider-next",
      // prevEl: '.js-hero-slider-prev',
    },
  });
}

//Табы
if (document.querySelector('[data-role*="tabs"]')) {
  let tabsContainers = document.querySelectorAll('[data-role*="tabs"]');
  tabsContainers.forEach((wrapper) => {
    let controls = wrapper.querySelectorAll("[data-tabs-control]"),
      panels = wrapper.querySelectorAll("[data-tabs-panel]");
    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        console.log("123");
        if (e.target.closest("[data-tabs-control]")) {
          e.preventDefault();
          let activeControl = e.target.closest("[data-tabs-control]"),
            activeId = activeControl.dataset.tabsControl;
          if (!activeControl.classList.contains("is-selected")) {
            controls.forEach((oneMoreControl) => {
              oneMoreControl.classList.remove("is-selected");
            });
            activeControl.classList.add("is-selected");
            panels.forEach((panel) => {
              panel.classList.remove("is-open");
            });
            panels.forEach((panel) => {
              if (panel.dataset.tabsPanel == activeId) {
                panel.classList.add("is-open");
              }
            });
          }
        }
      });
    });
  });
}

//Мобильное меню

let menu = document.querySelector(".header__menu");
let menuBtn = document.querySelector(".header__burger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle('is-active')
  menu.classList.toggle("is-open");
});

// Карта
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.16444, 61.436843],
    zoom: 10,
  });
}
