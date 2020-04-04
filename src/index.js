import assets from './assets.js';

function createnavcontent(content, primary) {
  const element = document.createElement('li');
  element.classList.add('nav-item');

  const item = document.createElement('a');
  item.href = '#';
  // eslint-disable-next-line no-unused-expressions
  !primary ? item.classList.add('nav-link') : item.classList.add('nav-link', 'active');
  item.innerHTML = content;

  element.appendChild(item);

  return element;
}

function createnav() {
  const element = document.createElement('ul');
  element.classList.add('nav', 'nav-tabs', 'justify-content-end');
  element.appendChild(createnavcontent('Home', true));
  element.appendChild(createnavcontent('Menu', false));
  element.appendChild(createnavcontent('Reservations', false));

  return element;
}

function contents() {
  const element = document.createElement('div');

  element.classList.add('content');
  element.id = 'content';

  element.appendChild(createnav());

  // const myIcon = new Image();
  // myIcon.src = Image1;

  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(contents());