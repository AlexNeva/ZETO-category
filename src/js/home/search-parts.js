import Choices from "choices.js";

export default function initSearchPartsSelects() {
  const selects = document.querySelectorAll('.search-parts__select');

  selects.forEach(select => {
    const choices = new Choices(select, {
      itemSelectText: '',
      shouldSort: false,

    });

  })

}

