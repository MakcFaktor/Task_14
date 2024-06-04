let currentSlide = 2;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dots span");

  currentSlide =
    index >= slides.length ? slides.length - 1 : index < 0 ? 0 : index;

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  document.querySelector(".prev").style.display =
    currentSlide === 0 ? "none" : "block";
  document.querySelector(".next").style.display =
    currentSlide === slides.length - 1 ? "none" : "block";

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

function createDots() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
}

createDots();
showSlide(currentSlide);
