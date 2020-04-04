import { welcomeContent } from './home';
import { actionButton } from './events';
import * as assets from './variables';


const createMainContainer = () => {
  const element = document.createElement('main');
  element.classList.add('floating');

  return element;
};

const createButtons = (content, primary) => {
  const element = document.createElement('li');
  element.classList.add('nav-item');
  element.id = content;
  element.addEventListener('click', actionButton.bind(this, element.id), false);
  const item = document.createElement('a');
  item.href = '#';
  item.id = content;
  // eslint-disable-next-line no-unused-expressions
  !primary ? item.classList.add('nav-link') : item.classList.add('nav-link', 'active');
  item.innerHTML = content;

  element.appendChild(item);

  return element;
};

const createnav = () => {
  const element = document.createElement('nav');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.innerHTML = assets.brand;
  const nav = document.createElement('ul');
  nav.classList.add('nav', 'nav-tabs', 'justify-content-end');
  nav.appendChild(createButtons('Home', true));
  nav.appendChild(createButtons('Menu', false));
  nav.appendChild(createButtons('Reservations', false));

  element.appendChild(logo);
  element.appendChild(nav);

  return element;
};

const contents = () => {
  const element = document.createElement('div');
  element.classList.add('content');
  element.id = 'content';

  element.appendChild(createnav());

  const maincontainer = createMainContainer();
  maincontainer.appendChild(welcomeContent());

  element.appendChild(maincontainer);

  element.appendChild(assets.cover('mainImage', true));
  element.appendChild(assets.cover('menuImage', false));

  return element;
};

document.body.appendChild(contents());