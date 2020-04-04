import * as assets from './variables';

const setHomeImages = () => {
  document.getElementById('content_menu').classList.add('hide');
  document.getElementById('content_home').classList.remove('hide');
};

// eslint-disable-next-line import/prefer-default-export
export const actionButton = (id) => {
  Array.prototype.forEach.call(assets.buttons, (el) => {
    // eslint-disable-next-line no-unused-expressions
    el.id === id ? el.classList.add('active') : el.classList.remove('active');
  });

  if (id === 'Home') {
    setHomeImages();
    document.getElementById('page_text').innerHTML = assets.welcomeText;
    document.getElementById('page_title').innerHTML = assets.welcomeMessage;
    assets.changeCover(1);
  }
  if (id === 'Menu') {
    document.getElementById('content_menu').classList.remove('hide');
    document.getElementById('content_home').classList.add('hide');
    assets.changeCover(2);
  }
  if (id === 'Reservations') {
    setHomeImages();
    document.getElementById('page_text').innerHTML = assets.reservationsText;
    document.getElementById('page_title').innerHTML = assets.reservationTitle;
    assets.changeCover(1);
  }
};