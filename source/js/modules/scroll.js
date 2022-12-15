const ANCHOR = document.querySelectorAll('a[data-anchor]');

function scrollPage() {
  for (let anchor of ANCHOR) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

export {scrollPage};
