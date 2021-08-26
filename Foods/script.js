'use strict';

const icons = document.querySelectorAll('.section-1-icons i');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  const targets = document.querySelectorAll('.target');
  targets.forEach(target => {
    target.classList.toggle('change');
  });
});

let i = 1;

//Make the slideshow
setInterval(() => {
  i++;
  const icon = document.querySelector('.section-1-icons .change');
  icon.classList.remove('change');
  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else icon.nextElementSibling.classList.add('change');
}, 3000);
