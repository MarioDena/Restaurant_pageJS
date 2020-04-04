/* eslint-disable no-unused-vars */
import 'bootstrap';
import './styles/bootstrap.css';
import './styles/style.css';
import Image1 from './assets/img1.jpg';
import Image2 from './assets/img2.jpg';

export const welcomeMessage = 'THE PLACE WHERE EVERYTHING IS POSSIBLE';
export const welcomeText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nemo vero dolorem consequatur dicta magnam natus voluptates labore. Hic animi maiores fugiat incidunt cupiditate quos ipsam iste eum laudantium magni.';
export const brand = 'LÉ COUSINE';
export const buttons = document.getElementsByClassName('nav-link');

export const cover = (id, show) => {
  const img = new Image();
  // eslint-disable-next-line no-unused-expressions
  id === 'mainImage' ? img.src = Image1 : img.src = Image2;
  img.alt = 'Background';
  // eslint-disable-next-line no-unused-expressions
  show ? img.classList.add('mainImage') : img.classList.add('mainImage', 'hide');
  img.id = id;

  return img;
};