import * as assets from './variables';

// eslint-disable-next-line import/prefer-default-export
export const actionButton = (id) => {
  Array.prototype.forEach.call(assets.buttons, (el) => {
    // eslint-disable-next-line no-unused-expressions
    el.id === id ? el.classList.add('active') : el.classList.remove('active');
  });
};