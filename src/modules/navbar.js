// Import content div
import { contentDiv } from "../helper_funcs/funcs.js";


// Factory Function to create nav bar items

const addNavItems = (items, container) => {

  items.forEach(element => {
    let individualElement = document.createElement('div');
    individualElement.className = 'navItem';
    individualElement.innerHTML = element;
    container.appendChild(individualElement);
  });

  return container;
};




// Navbar
export const navBar = () => {
  let bar =  document.createElement('div')
  bar.className = 'navBar'

  contentDiv.appendChild(addNavItems(["Home", "Menu", "Contact"], bar));


};
