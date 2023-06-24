// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideUp, _slideDown } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';
import Toastify from 'toastify-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 650,
  anchorPlacement: 'top-bottom',
  offset: window.innerHeight * 0.1,
  startEvent: 'DOMContentLoaded',
  mirror: false,
  once: true,
});

setTimeout(() => {AOS.refresh();}, 500);


const validator = new JustValidate('#designerForm', {});
validator
  .addField('#name', [{ rule: 'required' }])
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#website', [{ rule: 'required' }])

  .addField('#accept_des', [{ rule: 'required' }]);

const validator2 = new JustValidate('#influencerForm', {});
validator2
  .addField('#nameInf', [{ rule: 'required' }])
  .addField('#emailInf', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phoneInf', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#websiteInf', [{ rule: 'required' }])
  .addField('#accept_inf', [{ rule: 'required' }]);

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  const formInputs = form.querySelectorAll('input.form-input');
  const formButton = form.querySelector('.button');
  console.log(formButton);
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const isFormFilled = Array.from(formInputs).every((input) => {
        if (input.type === 'checkbox') {
          return input.checked;
        } else {
          return input.value !== '';
        }
      });
      if (isFormFilled) {
        formButton.classList.add('_active');
      } else {
        formButton.classList.remove('_active');
      }
    });
  });
});

document.querySelectorAll('form input[type="submit"]').forEach((formInput) => {
  formInput.addEventListener('click', () => {
    formInput.value = 'Please, wait...';
    formInput.classList.add('_sending');
  });
});

document.addEventListener('wpcf7invalid', function (event) {
  let submitButton = event.target.querySelector('input[type="submit"]');
  if (submitButton) {
    submitButton.value = 'APPLY NOW';
    submitButton.classList.remove('_sending');
  }
  Toastify({
    text: 'One or more fields contain erroneous data',
    duration: 6000,
    fontSize: 30,
    gravity: 'top',
    position: 'right',
    style: {
      background: '#F27C4F',
    },
    onClick: function () {},
  }).showToast();
});

document.addEventListener(
  'wpcf7mailsent',
  function (event) {
    flsModules.popup.close('#popup');
    let submitButton = event.target.querySelector('input[type="submit"]');
    if (submitButton) {
      submitButton.value = 'APPLY NOW';
      submitButton.classList.remove('_sending');
    }
    Toastify({
      text: 'Thanks for Your request. It has been sent successfully!',
      duration: 6000,
      fontSize: 30,
      gravity: 'bottom',
      position: 'center',
      style: {
        background: '#5C6BD7',
      },
      onClick: function () {},
    }).showToast();
  },
  false,
);

const slider = () => {
  const checkSlider = document.querySelector('.advantages__slider ');
  const designerContent = document.querySelector('.advantages__item--designers');
  const influencersContent = document.querySelector('.advantages__item--influencers');
  if (!checkSlider) return;
  checkSlider.addEventListener('click', () => {
    document.querySelectorAll('.advantages__item').forEach((item) => {
      item.classList.remove('aos-animate');
    });
    checkSlider.classList.toggle('_active');
    checkSlider.classList.contains('_active') ? showDesigners() : showInfluencers();
    AOS.refresh();
  });

  document.addEventListener('click', (e) => {
    e.target.classList.contains('_influencers') ? showInfluencers() : null;
    e.target.classList.contains('_designers') ? showDesigners() : null;
  });

  function showDesigners() {
    designerContent.classList.add('_hide');
    influencersContent.classList.add('_active');
    influencersContent.querySelectorAll('.advantages__item').forEach((item) => {
      setTimeout(function () {
        item.classList.add('aos-animate');
      }, 100);
    });
    document.querySelector('#checkbox').checked = false;
  }
  function showInfluencers() {
    designerContent.classList.remove('_hide');
    influencersContent.classList.remove('_active');
    designerContent.querySelectorAll('.advantages__item').forEach((item) => {
      setTimeout(function () {
        item.classList.add('aos-animate');
      }, 100);
    });
    document.querySelector('#checkbox').checked = true;
  }
};
slider();

const menuItems = document.querySelectorAll('a[data-goto]');
menuItems.forEach((menuItem) => {
  if (!document.querySelector('.home-page')) {
    menuItem.removeAttribute('data-goto');
  }
});

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   cleanup: true,
//   duration: 800,
//   delay: 200,
//   reset: false,
//   once: true,
//   // mobile: false,
//   easing: 'cubic-bezier(0.5, 0, 0, 1)',
// });
// sr.reveal(`.hero__image`);
// sr.reveal('.hero__title', { origin: 'top', delay: 400 });
// sr.reveal('.hero__phone', { origin: 'right', delay: 400 });
// sr.reveal('.hero__image-text', { origin: 'top', delay: 400 });
// sr.reveal('.benefits__decor-image', { origin: 'left' });
// sr.reveal('.benefits__item', { interval: 300 });
// sr.reveal('.benefits__image, .advantages', { origin: 'bottom' });
// sr.reveal('.subscribe__image-one', { origin: 'top', delay: 300 });
// sr.reveal('.subscribe__image-two', { origin: 'bottom', delay: 600 });
// sr.reveal('.subscribe__image-three', {
//   origin: 'right',
//   delay: 900,
//   viewOffset: {
//     top: 100,
//   },
// });
// sr.reveal('.process, .contacts');
// sr.reveal('.process__item', { interval: 300 });
// sr.reveal('.tools__image', { origin: 'left' });
// sr.reveal('.tools__data', { origin: 'right' });

document.querySelector('#date').textContent = new Date().getFullYear();
