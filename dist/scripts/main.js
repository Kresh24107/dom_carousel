'use strict';
const container = document.querySelector('.container');
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');

const countImg = container.children.length;
const imgWidth = container.children[0].clientWidth;
const visibleImg = 3;
const windowWidth = visibleImg * container.children[0].clientWidth;
const maxRight = countImg * imgWidth - windowWidth;
let posX = 0;

console.dir(countImg);

buttonNext.disabled = false;
buttonPrev.disabled = true;

buttonNext.addEventListener('click', scrollNext);
buttonPrev.addEventListener('click', scrollPrev);

if (container.scrollLeft && container.scrollLeft < maxRight) {
  buttonPrev.disabled = false;
  buttonNext.disabled = false;
}

function scrollNext() {
  posX += windowWidth;
  container.scrollLeft = posX;
  if (container.scrollLeft === maxRight) {
    buttonPrev.disabled = false;
    buttonNext.disabled = true;
  }
  if (container.scrollLeft && container.scrollLeft < maxRight) {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}

function scrollPrev() {
  posX -= windowWidth;
  container.scrollLeft = posX;
  if (posX === 0) {
    buttonPrev.disabled = true;
    buttonNext.disabled = false;
  }
  if (container.scrollLeft && container.scrollLeft < maxRight) {
    buttonPrev.disabled = false;
    buttonNext.disabled = false;
  }
}
