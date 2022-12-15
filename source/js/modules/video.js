const VIDEO = document.querySelector('[data-video]');
const VIDEO_BUTTON = VIDEO ? VIDEO.querySelector('[data-video-button]') : null;

const generateURL = () => {
  if (!VIDEO) {
    return '';
  }

  let url = VIDEO.getAttribute('data-url');
  let query = '?rel=0&showinfo=0&autoplay=1&mute=1';
  return 'https://www.youtube.com/embed/' + url + query;
};


const createIframe = () => {
  const IFRAME = document.createElement('iframe');

  IFRAME.setAttribute('allowfullscreen', '');
  IFRAME.setAttribute('src', generateURL());
  IFRAME.setAttribute('frameborder', '0');
  IFRAME.classList.add('gym__iframe');

  return IFRAME;
};

const addIframe = () => {
  if (!VIDEO_BUTTON) {
    return;
  }

  VIDEO_BUTTON.style.display = 'block';

  VIDEO_BUTTON.addEventListener('click', () => {
    let iframe = createIframe();

    VIDEO_BUTTON.remove();
    VIDEO.appendChild(iframe);
  });
};

export {addIframe};
