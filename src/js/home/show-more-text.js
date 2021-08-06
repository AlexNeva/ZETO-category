export default function showMoreText() {
  const showMoreBlock = document.querySelector('.article__descr'),
    showMoreTrigger = document.querySelector('.article__text-more');


  showMoreTrigger.onclick = () => {
    showMoreBlock.classList.toggle('open');

    if (showMoreBlock.classList.contains('open')) {
      showMoreBlock.style.height = showMoreBlock.scrollHeight + 'px';
    } else {
      showMoreBlock.style.height = null;
    }
  }
}