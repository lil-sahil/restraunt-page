// Picture of Menu

import { contentDiv, clearContent } from "../helper_funcs/funcs.js";
import waffleCombo from "../photos/waffleCombo.jpg";
import waffleKids from "../photos/waffleKids.jpg";
import waffle from "../photos/waffle.jpg";


const menuItems = (name, price) => {
  let container = document.createElement('div');

  container.className = 'menuItem';

  let pictureDiv = document.createElement('div');
  pictureDiv.className = 'image'
  const waffleImage = new Image();
  waffleImage.src = name;
  pictureDiv.appendChild(waffleImage);


  let infoDiv = document.createElement('div');
  let priceInfo = document.createElement('h1');
  priceInfo.innerHTML = `$${price}`;

  infoDiv.appendChild(priceInfo);
  infoDiv.className = 'info';


  container.appendChild(pictureDiv);
  container.appendChild(infoDiv);

  return container;
}

const createMenu  = () => {
  let menuContainer  = document.createElement('div');

  let menu = document.createElement('h1');
  menu.innerHTML = 'Menu';

  menuContainer.appendChild(menu);

  menuContainer.appendChild(menuItems(waffleCombo, '12.00'));
  menuContainer.appendChild(menuItems(waffleKids, '6.00'));
  menuContainer.appendChild(menuItems(waffle, '8.00'));

  return menuContainer;
}

export const menuPage = () => {
  clearContent();
  contentDiv.appendChild(createMenu());
};