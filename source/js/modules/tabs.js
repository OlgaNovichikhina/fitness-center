const TAB_BUTTONS = document.querySelectorAll('[data-sub-button]');
const TAB_CONTENTS = document.querySelectorAll('[data-sub-tab]');
const TAB_NAVIGATION = document.querySelector('[data-sub-nav]');
const SUB_TITLE = document.querySelectorAll('[data-sub-title]');

const removeNoJS = (elements) => {
  elements.forEach((elem) => {
    elem.classList.remove('no-js');
  });
};

const addClassOnElements = (targetButton) => {
  let currentId = targetButton.getAttribute('data-button-id');
  let currentTab = document.querySelector(`[data-tab='${currentId}']`);

  if (!targetButton.classList.contains('subscription__nav-button--active')) {
    TAB_BUTTONS.forEach((elem) => {
      elem.classList.remove('subscription__nav-button--active');
    });

    TAB_CONTENTS.forEach((elem) => {
      elem.classList.remove('subscription__subcontent--active');
    });

    targetButton.classList.add('subscription__nav-button--active');
    currentTab.classList.add('subscription__subcontent--active');
  }
};

const onClickTab = () => {
  TAB_NAVIGATION.classList.remove('no-js');
  SUB_TITLE.forEach((elem) => {
    elem.style.display = 'none';
  });
  removeNoJS(TAB_BUTTONS);
  removeNoJS(TAB_CONTENTS);

  TAB_NAVIGATION.addEventListener('click', function (evt) {
    let targetButton = evt.target.closest('[data-sub-button]');
    if (targetButton) {
      addClassOnElements(targetButton);
    }
  });
};

export {onClickTab};
