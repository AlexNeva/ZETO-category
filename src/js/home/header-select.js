import Choices from "choices.js";
import dataArr from "./data-select.js"


export default function headerSelect() {
  const headerSelects = document.querySelectorAll('.search-goods__category');


  headerSelects.forEach((select, index) => {

    const initSelect = new Choices(select, {
      itemSelectText: '',
      shouldSort: false,
      choices: dataArr[index],
      callbackOnCreateTemplates: function (template) {
        return {

          choice: (classNames, data) => {
            return template(`
              <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable
              }" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
                ? 'data-choice-disabled aria-disabled="true"'
                : 'data-choice-selectable'
              } data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
              }>
              <span><svg><use xlink:href=${data.customProperties.icon}></use></svg></span> <span>${data.label}<span/>
              </div>
            `);
          },
        };
      },


    });

  })
}
