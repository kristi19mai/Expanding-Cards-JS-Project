const slides = document.querySelectorAll(".slide");

slides.forEach((slide) =>
  slide.addEventListener("click", function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    this.classList.add("active");
  })
);
