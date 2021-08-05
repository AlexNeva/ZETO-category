// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles

export default function initSwipers() {
  const swipers = document.querySelectorAll('.cards-swiper');
  const productCards = document.querySelectorAll('.product__cards')

  swipers.forEach((swiper, index) => {
    const swiperCards = new Swiper(swiper, {
      // Optional parameters
      // loop: true,
      slidesPerView: 2,

      // width: 'auto',

      // spaceBetween: 25,

      // Navigation arrows
      navigation: {
        nextEl: productCards[index].querySelector('.cards-swiper-next'),
        prevEl: productCards[index].querySelector('.cards-swiper-prev'),
      },

      breakpoints: {
        // when window width is >= 320px
        577: {
          // slidesPerView: 5,
          width: 522,
        },
      }

    });
  })
}
