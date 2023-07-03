//preloader
const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
//-----------------------------------------------------------
// mobile menu button
const navbarBtn = document.querySelector(".navbar-btn-mob");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-menu a");

navbarBtn.addEventListener("click", () => {
  navbarBtn.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar-menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    navbarBtn.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarMenu.style.transition = "0.3s ease-out";
  })
);
//-----------------------------------------------------------
//block scroll
navbarBtn.addEventListener("click", function () {
  if (navbarBtn.classList.contains("active")) {
    // Якщо є клас "active", блокуємо скрол
    document.body.style.overflow = "hidden";
  } else {
    // Якщо немає класу "active", дозволяємо скрол
    document.body.style.overflow = "auto";
    document.body.style.transition = "0.3s ease-in-out";
  }
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    // Згортаємо меню після натискання на посилання
    navbarBtn.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}
//-----------------------------------------------------------
//modal
const closeModal = document.querySelector(".modal-body__close");
const modal = document.querySelector(".modal");
// const sendBtn = document.querySelector(".modal-body__btn");

const openModal = document.querySelectorAll(".modal-btn").forEach((e) =>
  e.addEventListener("click", () => {
    // e.preventDefault();
    modal.classList.add("open");
  })
);

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

//-----------------------------------------------------------
//tabs
const tabs = document.querySelectorAll(".prices-tabs__item");
const content = document.querySelectorAll(".prices-body__item");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");

    content.forEach((content) => content.classList.remove("active-tab"));
    content[index].classList.add("active-tab");
  });
});
//-----------------------------------------------------------
//gallery btn
const btn = document.querySelector(".gallery-wrapper__btn");
const images = document.querySelectorAll(".gallery-wrapper__img");

btn.addEventListener("click", function () {
  for (let image of images) {
    image.style.display = "flex";
  }

  btn.style.display = "none";
});
//-----------------------------------------------------------
//infinity slider
let slider = tns({
  container: ".comments-slider",
  items: 1,
  controls: false,
  nav: false,
  loop: true,
  mouseDrag: true,
  autoplay: false,
  autoplayButtonOutput: false,
  responsive: {
    786: {
      items: 2,
      slideBy: 1,
      autoplay: true,
    },
    1090: {
      items: 4,
      slideBy: 2,
    },
  },
});
