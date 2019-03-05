const burger = document.querySelector('.burger');
const aside = document.querySelector('aside');
const fas = document.querySelector('.fas');
const faTimes = document.querySelector('.fa-times');
const angleLeft = document.getElementById('angleLeft');
const angleRight = document.getElementById('angleRight');
const conRight = document.querySelector('div.conRight');
const indie1 = document.querySelector('div.indicator1');
const indie2 = document.querySelector('div.indicator2');
const indie3 = document.querySelector('div.indicator3');
const span = document.querySelector('.link span');
const h2 = document.querySelector('.conLeft h2');
const lorem = document.querySelector('.lorem');
let flag = 1;

// Burger menu
burger.addEventListener('click', () => {
  aside.classList.toggle('show');
  fas.classList.toggle('show');
  faTimes.classList.toggle('show');
})


// Main slide

// Left button
angleLeft.addEventListener('click', () => {
  if(flag === 1) {
    conRight.style.backgroundImage = "url(img/3.jpg)";
    indie1.classList.remove('active');
    indie3.classList.add('active');
    span.innerHTML = 'build 3.7';
    h2.innerHTML = 'Simple yet aesthetic.';
    lorem.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi fugiat saepe veniam at aque quisquam. Dolor sit amet consectetur adipisicing elit. Inventore, dolorum?';
    flag = 3;
  } else if(flag === 2) {
    conRight.style.backgroundImage = "url(img/1.jpg)";
    indie2.classList.remove('active');
    indie1.classList.add('active');
    span.innerHTML = 'build 1.1';
    h2.innerHTML = 'Fits everywhere. Exceptional design for everyone.';
    lorem.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi fugiat saepe veniam at aque quisquam. Inventore, dolorum?';
    flag = 1;
  } else if (flag === 3) {
    conRight.style.backgroundImage = "url(img/2.jpg)";
    indie3.classList.remove('active');
    indie2.classList.add('active');
    span.innerHTML = 'build 2.4';
    h2.innerHTML = 'Individual approach to Customers.';
    lorem.innerHTML = 'Dolor sit amet consectetur adipisicing elit. Inventore, dolorum?';
    flag = 2;
  }
})

// Right button
angleRight.addEventListener('click', () => {
  if(flag === 1) {
    conRight.style.backgroundImage = "url(img/2.jpg)";
    indie1.classList.remove('active');
    indie2.classList.add('active');
    span.innerHTML = 'build 2.4';
    h2.innerHTML = 'Individual approach to Customers.';
    lorem.innerHTML = 'Dolor sit amet consectetur adipisicing elit. Inventore, dolorum?';
    flag = 2;
  } else if(flag === 2) {
    conRight.style.backgroundImage = "url(img/3.jpg)";
    indie2.classList.remove('active');
    indie3.classList.add('active');
    span.innerHTML = 'build 3.7';
    h2.innerHTML = 'Simple yet aesthetic.';
    lorem.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi fugiat saepe veniam at aque quisquam. Dolor sit amet consectetur adipisicing elit. Inventore, dolorum?';
    flag = 3;
  } else if (flag === 3) {
    conRight.style.backgroundImage = "url(img/1.jpg)";
    indie3.classList.remove('active');
    indie1.classList.add('active');
    span.innerHTML = 'build 1.1';
    h2.innerHTML = 'Fits everywhere. Exceptional design for everyone.';
    lorem.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi fugiat saepe veniam at aque quisquam. Inventore, dolorum?';
    flag = 1;
  }
})