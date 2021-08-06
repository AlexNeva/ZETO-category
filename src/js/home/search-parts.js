import Choices from "choices.js";

export default function initSearchPartsSelects() {
  const selects = document.querySelectorAll('.select-primary');

  selects.forEach(select => {
    const choices = new Choices(select, {
      itemSelectText: '',
      shouldSort: false,
      searchEnabled: select.classList.contains('no-search') ? false : true,
    });

  })

}

