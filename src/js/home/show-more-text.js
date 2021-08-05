export default function showMoreText() {
  const showMoreBlock = document.querySelector('.about__descr'),
    showMoreTrigger = document.querySelector('.about__text-more');


  showMoreTrigger.onclick = () => {
    showMoreBlock.classList.toggle('open');

    if (showMoreBlock.classList.contains('open')) {
      showMoreBlock.style.height = showMoreBlock.scrollHeight + 'px';
    } else {
      showMoreBlock.style.height = null;
    }
  }
}