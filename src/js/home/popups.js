function closePopup() {
  const popups = document.querySelectorAll('.popup'),
    body = document.querySelector('body');

  popups.forEach(popup => {

    popup.onclick = (e) => {
      if (!e.target.closest('.popup__body') || e.target.closest('.popup__close')) {
        popup.classList.remove('show');

        setTimeout(() => {
          body.style.paddingRight = 0;
          popup.style.paddingRight = 0;
          body.classList.remove('lock');
        }, 300)

      }
    }
  })

}

function openPopup() {
  const popups = document.querySelectorAll('.popup'),
    body = document.querySelector('body');

  popups.forEach(popup => {
    const openTrigger = document.querySelectorAll(`[data-target=${popup.id}]`)

    openTrigger.forEach(trigger => {
      trigger.onclick = () => {
        const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        body.style.paddingRight = paddingOffset;
        popup.style.paddingRight = paddingOffset;
        popup.classList.add('show');
        body.classList.add('lock');
      }
    })


  })
}

export default {
  closePopup,
  openPopup,
}