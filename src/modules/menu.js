// Picture of Menu

import { contentDiv, clearContent } from "../helper_funcs/funcs.js";
import waffleCombo from "../photos/waffleCombo.jpg";
import waffleKids from "../photos/waffleKids.jpg";
import waffle from "../photos/waffle.jpg";


const menuItems = (img, price, name) => {
  let container = document.createElement('div');

  container.className = 'menuItem';

  let pictureDiv = document.createElement('div');
  pictureDiv.className = 'image'
  const waffleImage = new Image();
  waffleImage.src = img;
  pictureDiv.appendChild(waffleImage);


  let infoDiv = document.createElement('div');
  let priceInfo = document.createElement('h1');
  priceInfo.innerHTML = `$${price}`;

  let nameInfo = document.createElement('h1');
  nameInfo.innerHTML = `${name}`;

  infoDiv.appendChild(nameInfo);
  infoDiv.appendChild(priceInfo);
  infoDiv.className = 'info';
  


  container.appendChild(pictureDiv);
  container.appendChild(infoDiv);

  return container;
}

const createMenu  = () => {
  let menuContainer  = document.createElement('div');

  let menu = document.createElement('h1');
  menu.innerHTML = 'Yummy Waffles for Breakfast, Lunch or Dinner!';
  menu.className = 'menuSlogan';

  menuContainer.appendChild(menu);

  menuContainer.appendChild(menuItems(waffleCombo, '12.00', 'Waffle Combo'));
  menuContainer.appendChild(menuItems(waffleKids, '6.00', "Kid's Meal"));
  menuContainer.appendChild(menuItems(waffle, '8.00', "Regular Waffle"));

  menuContainer.className = 'menuContainer';

  return menuContainer;
}

export const menuPage = () => {
  clearContent();
  contentDiv.appendChild(createMenu());
};