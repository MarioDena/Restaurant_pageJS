import * as assets from './variables';
import FoodImage1 from './assets/food1.jpg';
import FoodImage2 from './assets/food2.jpg';
import FoodImage3 from './assets/food3.jpg';
import FoodImage4 from './assets/food4.jpg';

const createCards = (text, mainText, img) => {
  const cardColum = document.createElement('div');
  cardColum.classList.add('col-3');
  const card = document.createElement('div');
  card.classList.add('card');
  cardColum.appendChild(card);
  const pic = new Image();
  pic.classList.add('card-img-top');
  pic.src = img;
  card.appendChild(pic);
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = mainText;
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = text;
  cardBody.appendChild(cardText);

  return cardColum;
};

// eslint-disable-next-line import/prefer-default-export
export const menuContainer = () => {
  const container = document.createElement('div');
  container.id = 'content_menu';
  container.classList.add('row', 'hide');
  container.appendChild(createCards(assets.cardText1, assets.cardTitle1, FoodImage1));
  container.appendChild(createCards(assets.cardText2, assets.cardTitle2, FoodImage2));
  container.appendChild(createCards(assets.cardText3, assets.cardTitle3, FoodImage3));
  container.appendChild(createCards(assets.cardText4, assets.cardTitle4, FoodImage4));

  return container;
};