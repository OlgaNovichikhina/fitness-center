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
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL());
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('gym__iframe');

  return iframe;
};

const addIframe = () => {
  if (!VIDEO_BUTTON) {
    return;
  }

  VIDEO_BUTTON.addEventListener('click', () => {
    let iframe = createIframe();

    VIDEO_BUTTON.remove();
    VIDEO.appendChild(iframe);
  });
};

export {addIframe};
