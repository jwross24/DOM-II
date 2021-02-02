/* eslint-disable no-undef */
let navLinks = document.querySelectorAll('.nav a');
let body = document.querySelector('body');
let h1Text = document.querySelector('h1');
let headerImage = document.querySelector('.intro img');
let h2Content = document.querySelectorAll('h2');
let images = document.querySelectorAll('img');
let bodyImages = [images[1], images[2]];

// Scale nav items when moused over, and reset when taken away
navLinks.forEach((link) => {
  link.addEventListener(
    'mouseover',
    (event) => (event.target.style.transform = 'scale(1.2)'),
  );
  link.addEventListener(
    'mouseout',
    (event) => (event.target.style.transform = 'scale(1.0)'),
  );
  // Prevent nav items from refreshing page when clicked
  link.addEventListener('click', (event) => event.preventDefault());
});

// When 'Contact' is clicked, change the background color
navLinks[3].addEventListener(
  'click',
  (event) => (event.target.style.background = '#d1c3fd'),
);

// Change the background color when a key is pressed
document.addEventListener('keydown', () => (body.style.background = '#d1c3fd'));
document.addEventListener('keyup', () => (body.style.background = 'inherit'));

// Change header color on scroll
document.addEventListener('scroll', () => {
  h2Content.forEach((item) => (item.style.color = 'red'));
  setTimeout(
    () => h2Content.forEach((item) => (item.style.color = 'black')),
    500,
  );
});

// Toggle header image opacity on double-click
headerImage.style.opacity = 1;
headerImage.addEventListener('dblclick', (event) => {
  event.target.style.opacity = event.target.style.opacity === '1' ? '0.5' : '1';
});

const flashStep = 250;

// Flash the main header when the page loads
window.addEventListener('load', () => {
  let totalTime = 0;
  let x = setInterval(() => {
    h1Text.style.color = h1Text.style.color === 'red' ? 'black' : 'red';

    if (totalTime > 8 * flashStep) {
      clearInterval(x);
    }

    totalTime += flashStep;
  }, flashStep);

  // Rotate the header as well
  gsap.to(h1Text, {
    duration: Math.round((8 * flashStep) / 1000),
    rotation: 360,
  });
});

images.forEach((image) => {
  // Alert when an image is copied
  image.addEventListener('copy', () =>
    window.alert(
      'These images are copyrighted. Please contact us to use them with proper permission. Thank you!',
    ),
  );

  // Disable right-click menu on images
  image.addEventListener('contextmenu', (event) => event.preventDefault());
});

// Change size of body images on mouseover with GSAP
bodyImages.forEach((image) => {
  image.addEventListener('mouseover', function () {
    gsap.to(this, { duration: 1, scale: 1.05 });
  });
  image.addEventListener('mouseleave', function () {
    gsap.to(this, { duration: 1, scale: 1 });
  });
});

// Elements modified by GSAP overlap with the header
document.querySelector('.main-navigation').style.zIndex = '1';
