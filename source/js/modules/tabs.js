
const TAB_BUTTON = document.querySelectorAll('.subscription__nav-button');
const TAB_NAV = document.querySelector('.subscription__nav');
const TAB_CONTENT = document.querySelectorAll('.subscription__subcontent');
const SUB_TITLE = document.querySelectorAll('[data-sub-title]');

function hideTabContent(tab) {
  for (let i = tab; i < TAB_CONTENT.length; i++) {
    SUB_TITLE[tab].style.display = 'flex';
    TAB_CONTENT[i].classList.remove('subscription__subcontent--active');
    TAB_BUTTON[i].classList.remove('subscription__nav-button--active');
    TAB_CONTENT[i].classList.add('subscription__subcontent--close');
    TAB_BUTTON[i].classList.add('subscription__nav-button--close');
  }
}

function showTabContent(tab) {
  if (!TAB_CONTENT[tab].classList.contains('subscription__subcontent--active')) {
    SUB_TITLE[tab].style.display = 'none';
    TAB_CONTENT[tab].classList.add('subscription__subcontent--active');
    TAB_BUTTON[tab].classList.add('subscription__nav-button--active');
    TAB_CONTENT[tab].classList.remove('subscription__subcontent--close');
    TAB_BUTTON[tab].classList.remove('subscription__nav-button--close');
  }
}

function onClickTab() {
  hideTabContent(1);
  SUB_TITLE[0].style.display = 'none';
  TAB_NAV.classList.remove('no-js');
  TAB_NAV.addEventListener('click', function (evt) {
    evt.preventDefault();
    let target = evt.target;
    if (target && target.classList.contains('subscription__nav-button')) {
      for (let i = 0; i < TAB_BUTTON.length; i++) {
        if (target === TAB_BUTTON[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }

  });
}

export {onClickTab};
