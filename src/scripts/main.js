if (document.querySelector(".js-hero-slider")) {
  let heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    navigation: {
      nextEl: ".js-hero-slider-next",
      prevEl: '.js-hero-slider-prev',
    },
  });
}

if (document.querySelector(".js-benefits-slider")) {
  let benefitsSlider = new Swiper(".js-benefits-slider", {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".js-team-slider")) {
  let benefitsSlider = new Swiper(".js-team-slider", {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelector(".js-reviews-slider")) {
  let benefitsSlider = new Swiper(".js-reviews-slider", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
      767: {
        spaceBetween: 16,
      },
      800: {
        spaceBetween: 20,
      },
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
  menuBtn.classList.toggle("is-active");
  menu.classList.toggle("is-open");
});

let showTextBtn = document.querySelectorAll(".js-show-text");

if (showTextBtn) {
  showTextBtn.forEach((btn) => {
    let text = btn.previousElementSibling;
    btn.addEventListener("click", () => {
      text.classList.toggle("is-show");
    });
  });
}

let accordeonItems = document.querySelectorAll('.js-accordeon');

if(accordeonItems) {
  accordeonItems.forEach((item) => {
    let accordeonBtn = item.querySelector('.js-accordeon-btn');
    accordeonBtn.addEventListener('click', () => {
      item.classList.toggle('is-open');
    })
  })
}

let popupBtns = document.querySelectorAll('.js-popup-open');

if(popupBtns) {
  popupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      let popup = document.querySelector(`.js-popup[data-popup="${btn.dataset.popup}"]`);
      popup.classList.add('is-open');
    })
  })

  let popupBtnsClose = document.querySelectorAll('.js-popup-close');

  popupBtnsClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      let popup = btn.closest('.js-popup');
      popup.classList.remove('is-open');
    })
  })
}

// Карта
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.16444, 61.436843],
    zoom: 12,
  });

  myMap.geoObjects

    .add(
      new ymaps.Placemark(
        [55.178551611964316, 61.45060215767084],
        {
          balloonContent: "ул. Котина, 26",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      )
    )

    .add(
      new ymaps.Placemark(
        [55.17094280699047, 61.44534799572664],
        {
          balloonContent: "ул. Салютная, 26",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      )
    )

    .add(
      new ymaps.Placemark(
        [55.158659362006254, 61.46926322640924],
        {
          balloonContent: "пр. Ленина, 3",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      )
    );
}
