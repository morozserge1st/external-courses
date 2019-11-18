const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const slider = document.querySelector('.slider');
const slides = [
  document.querySelector('.first'),
  document.querySelector('.second'),
  document.querySelector('.third')
];

let images = [],
  lastImg,
  currentImg = 0,
  nextImg = 1,
  prevImg,
  currentSlide = 0,
  rotateY = 0;

prevArrow.addEventListener('click', showPrev);
nextArrow.addEventListener('click', showNext);

fetch('/api/v1/images')
  .then(response => response.json())
  .then(result => {
    images = result.data;
    lastImg = images.length - 1;
    prevImg = lastImg;
    putImg();
  });

function showNext() {
  currentImg = currentImg >= lastImg ? 0 : currentImg + 1;
  currentSlide = currentSlide === 2 ? 0 : currentSlide + 1;  
  rotateY = rotateY + 120;

  let nextSlide = currentSlide + 1 > 2 ? 0 : currentSlide + 1;
  nextImg = nextImg >= lastImg ? 0 : nextImg + 1;

  changeImg(nextSlide, nextImg);
}

function showPrev() {
  currentImg = currentImg === 0 ? lastImg : currentImg - 1;
  currentSlide = currentSlide === 0 ? 2 : currentSlide - 1;
  rotateY = rotateY - 120;

  let prevSlide = currentSlide - 1 < 0 ? 2 : currentSlide - 1;
  prevImg = prevImg === 0 ? lastImg : prevImg - 1;

  changeImg(prevSlide, prevImg);
}

function changeImg(slide, img) {
  slides[slide].style.backgroundImage = `url(./img/${images[img]})`;
  slider.style.transform = `rotateY(${rotateY}deg)`;
}

function putImg() {
  slides[0].style.backgroundImage = `url(./img/${images[currentImg]})`;
  slides[1].style.backgroundImage = `url(./img/${images[nextImg]})`;
  slides[2].style.backgroundImage = `url(./img/${images[lastImg]})`;
}
