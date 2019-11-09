const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const slider = document.querySelector('.slider');
const slides = {
  1: document.querySelector('.first'),
  2: document.querySelector('.second'),
  3: document.querySelector('.third')
}

let images = [];
let lastImg = 0;
let currentImg = 0;
let nextImg = 1;
let prevImg = lastImg;
let currentSlide = 1;
let rotateY = 0;

prevArrow.addEventListener('click', showPrev);
nextArrow.addEventListener('click', showNext);

fetch('/api/v1/images')
  .then(response => response.json())
  .then(result => {
    images = result.data;

    console.log(images)
    lastImg = images.length - 1;
    putImg();
  });

function showNext() {
  currentImg = currentImg >= lastImg ? 0 : currentImg + 1;
  currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;  
  rotateY = rotateY + 120;

  let nextSlide = currentSlide + 1 > 3 ? 1 : currentSlide + 1;
  nextImg = nextImg >= lastImg ? 0 : nextImg + 1;

  changeImg(nextSlide, nextImg)
}

function showPrev() {
  currentImg = currentImg === 0 ? lastImg : currentImg - 1;
  currentSlide = currentSlide === 1 ? 3 : currentSlide - 1;
  rotateY = rotateY - 120;

  let prevSlide = currentSlide - 1 < 1 ? 3 : currentSlide - 1;
  prevImg = prevImg === 0 ? lastImg : prevImg - 1;

  changeImg(prevSlide, prevImg)
}

function changeImg(slide, img) {
  slides[slide].style.backgroundImage = `url(./asset/${images[img]})`;
  slider.style.transform = `rotateY(${rotateY}deg)`;
}

function putImg() {
  slides[1].style.backgroundImage = `url(./asset/${images[currentImg]})`;
  slides[2].style.backgroundImage = `url(./asset/${images[nextImg]})`;
  slides[3].style.backgroundImage = `url(./asset/${images[lastImg]})`;
};
