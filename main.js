let swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 6,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var nav = document.getElementById("nav"),
  i = document.getElementById("i"),
  c1 = document.getElementsByTagName("div")[2],
  c2 = document.getElementsByTagName("div")[3],
  c3 = document.getElementsByTagName("div")[4];
i.addEventListener("click", function () {
  if (nav.className.match(/\bopen\b/)) {
    nav.classList.remove("open");
    c1.classList.remove("close-c1");
    c2.classList.remove("close-c2");
    c3.classList.remove("close-c3");
  } else {
    nav.classList.add("open");
    c1.classList.add("close-c1");
    c2.classList.add("close-c2");
    c3.classList.add("close-c3");
  }
});
nav.addEventListener("click", function () {
  nav.classList.remove("open");
  c1.classList.remove("close-c1");
  c2.classList.remove("close-c2");
  c3.classList.remove("close-c3");
});
