import './styles/style.css';
import Image1 from './assets/img1.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Working';
  element.classList.add('floating');
  const myIcon = new Image();
  myIcon.src = Image1;

  element.appendChild(myIcon);
  return element;
}


document.body.appendChild(component());