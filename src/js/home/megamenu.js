
function hoveredItems() {

  const megaM = document.querySelectorAll('.mega-m');


  megaM.forEach(mega => {
    const cardsCatalogMenuList = mega.querySelector('.mega-m__menu'),
      megaItems = mega.querySelectorAll('.mega-m__menu > li'),
      megaSubmenus = mega.querySelectorAll('.mega-m__submenu');

    megaItems.forEach((item, index) => {

      item.onmouseenter = (e) => {

        megaItems.forEach(item => {
          item.classList.remove('active')
        })

        item.classList.add('active')
        megaSubmenus.forEach(item => {
          item.classList.remove('show')
        })

        megaSubmenus[index].classList.add('show')


      }

    })

    mega.onmouseleave = () => {
      console.log('ddfg');

      megaItems.forEach(item => {
        item.classList.remove('active')
      })
      megaSubmenus.forEach(item => {
        item.classList.remove('show')
      })
    }
  })


}

export default {
  hoveredItems,
}