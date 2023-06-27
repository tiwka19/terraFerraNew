/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    allowTouchMove: false,
  });
  // Получаем ссылку на чекбокс
  const slideCheckbox = document.getElementById('slideCheckbox');

  // Добавляем обработчик события изменения состояния чекбокса
  slideCheckbox.addEventListener('change', () => {
    // Если чекбокс активен, переключаемся на второй слайд
    if (slideCheckbox.checked) {
      swiper.slideTo(1);
    } else {
      // Если чекбокс неактивен, переключаемся на первый слайд
      swiper.slideTo(0);
    }
  });
}

window.addEventListener('load', function (e) {
  initSliders();
});
