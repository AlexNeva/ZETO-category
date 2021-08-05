
function actionCart(action) {
  const cart = document.querySelector('.cart'),
    cartTrigger = cart.querySelector('.cart__btn');

  if (action === 'open') {
    cartTrigger.onclick = () => {
      cart.classList.toggle('open')
    }
  }
  if (action === 'close') {
    cart.classList.remove('open')
  }
}
function openSearch() {
  const headerSearch = document.querySelector('.search-goods'),
    searchTriggerOpen = headerSearch.querySelector('.search-goods__label'),
    searchTriggerClose = headerSearch.querySelector('.search-goods__btn');



  searchTriggerOpen.onclick = () => {
    headerSearch.classList.add('open');
    searchTriggerClose.classList.add('close');
  }

  searchTriggerClose.onclick = () => {
    if (searchTriggerClose.classList.contains('close')) {
      headerSearch.classList.remove('open');
    }
  }


}


export default {
  actionCart,
  openSearch,
}
