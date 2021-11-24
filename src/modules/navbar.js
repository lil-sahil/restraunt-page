// Import content div
import { contentDiv } from "../helper_funcs/funcs.js";

// Navbar


const addMenuItem = (name, description) => {
  let menuItemContainer = document.createElement('div');
  menuItemContainer.className = 'menu-item';
  
  let menuName = document.createElement('h2');
  menuName.innerHTML = `${name}`;

  let menuDesc = document.createElement('p');
  menuDesc.innerHTML = `${description}`;
  
  menuItemContainer.appendChild(menuName);
  menuItemContainer.appendChild(menuDesc);

  return menuItemContainer
}

export const menu = () => {
  let menuBar =  document.createElement('div')
  menuBar.className = 'navBar'

  menuBar.appendChild(addMenuItem('Pizza', 'Zesty Thin crust'));
  menuBar.appendChild(addMenuItem('Spaghetti', 'Spicy Meatball'));
  menuBar.appendChild(addMenuItem('Salad', 'Lettuce and Tomatoes'));

  contentDiv.appendChild(menuBar);
}
