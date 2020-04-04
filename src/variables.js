/* eslint-disable no-unused-vars */
import 'bootstrap';
import './styles/bootstrap.css';
import './styles/style.css';
import Image1 from './assets/img1.jpg';
import Image2 from './assets/img2.jpg';

export const reservationTitle = 'WE ARE SORRY NO RESERVATIONS AVAILABLE';
export const reservationsText = 'Due to an egg problem we are unable to take reservations at the moment, please feel free to check back on us after a few eggs';
export const welcomeMessage = 'THE PLACE WHERE EVERYTHING IS POSSIBLE';
export const welcomeText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nemo vero dolorem consequatur dicta magnam natus voluptates labore. Hic animi maiores fugiat incidunt cupiditate quos ipsam iste eum laudantium magni.';
export const brand = 'LÉ COUSINE';
export const buttons = document.getElementsByClassName('nav-link');
export const cardText1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ad sit unde iste quas voluptatum.';
export const cardText2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt at veritatis in nulla qui.';
export const cardText3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quidem? Beatae modi, veritatis.';
export const cardText4 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt cumque vel earum accusamus.';
export const cardTitle1 = 'Egg & Bread';
export const cardTitle2 = 'Egg & Fruit';
export const cardTitle3 = 'Egg on Soup';
export const cardTitle4 = 'No egg';

export const cover = (id) => {
  const img = new Image();
  // eslint-disable-next-line no-unused-expressions
  img.src = Image1;
  img.alt = 'Background';
  // eslint-disable-next-line no-unused-expressions
  img.classList.add('mainImage');
  img.id = id;

  return img;
};

export const changeCover = (img) => {
  // eslint-disable-next-line no-unused-expressions
  img === 1 ? document.getElementById('mainImage').src = Image1 : document.getElementById('mainImage').src = Image2;
};
