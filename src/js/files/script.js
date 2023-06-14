// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import JustValidate from 'just-validate';
import Toastify from 'toastify-js';

const validator = new JustValidate('#designerForm', {});
validator
  .addField('#name', [{ rule: 'required' }])
  .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phone', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#website', [{ rule: 'required' }])
  .addField('#accept_des', [{ rule: 'required' }])


const validator2 = new JustValidate('#influencerForm', {});
validator2
  .addField('#nameInf', [{ rule: 'required' }])
  .addField('#emailInf', [{ rule: 'required' }, { rule: 'email' }])
  .addField('#phoneInf', [{ rule: 'required' }, { rule: 'number' }])
  .addField('#websiteInf', [{ rule: 'required' }])
  .addField('#accept_inf', [{ rule: 'required' }])
 

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
    checkSlider.classList.toggle('_active');
    checkSlider.classList.contains('_active') ? showDesigners() : showInfluencers();
  });

  document.addEventListener('click', (e) => {
    e.target.classList.contains('_influencers') ? showInfluencers() : null;
    e.target.classList.contains('_designers') ? showDesigners() : null;
  });

  function showDesigners() {
    designerContent.classList.add('_hide');
    influencersContent.classList.add('_active');
    document.querySelector('#checkbox').checked = false;
  }
  function showInfluencers() {
    designerContent.classList.remove('_hide');
    influencersContent.classList.remove('_active');
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

document.querySelector('#date').textContent = new Date().getFullYear();
