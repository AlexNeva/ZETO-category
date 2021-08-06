import '../scss/category.scss';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import initAccordions from './home/accordion.js'
import header from './home/header.js'
import initSwipers from './home/swiper-cards.js'
import initSearchPartsSelects from './home/search-parts.js'
import headerSelect from './home/header-select'
import megamenu from './home/megamenu.js'
import popup from './home/popups.js'
import dataDa from './home/dynamicAdapt.js'
import showMoreText from './home/show-more-text.js'
import initRangeSlider from './home/uislider.js'


window.initAll = () => {
  dataDa();
  initAccordions();
  initSwipers();
  initSearchPartsSelects();
  megamenu.hoveredItems();
  header.actionCart('open');
  header.openSearch();
  popup.openPopup();
  popup.closePopup();
  headerSelect();
  initRangeSlider();
  showMoreText();

  // закрытие всех окон при клике вне

  window.onclick = (e) => {


    if (!e.target.closest('.cart')) {
      header.actionCart('close');
    }
    if (!e.target.closest('.header__search')) {
      document.querySelector('.search-goods').classList.remove('open')
    }
    if (!e.target.closest('.catalog-parts__card')) {
      document.querySelectorAll('.catalog-parts__card').forEach(el => {
        el.classList.remove('open')
      })
    }


  }

}
window.initAll();







