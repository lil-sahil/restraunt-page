// Module Imports
import { navBar } from "./modules/navbar.js";
import { contactForm } from "./modules/contact.js";
import { homePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";
import { titlePiece } from "./modules/title.js";

// CSS Imports
import './style.css';


// DOM element and Helper function imports
import { getContactButton, getMenuButton, getHomeButton, addSpecialSelection } from "./helper_funcs/funcs.js";



// Initialization
titlePiece();
navBar();
homePage();

// Contact Form

const showContactForm = () => {
  contactForm();
};



// Add Click Event Listner
const contactEventListner = ( () => {
  
  // Contact Button
  getContactButton().addEventListener('click', showContactForm);
  getContactButton().addEventListener('click', () => addSpecialSelection(getContactButton()), false);

  // Menu Button
  getMenuButton().addEventListener('click', menuPage);
  getMenuButton().addEventListener('click', () => addSpecialSelection(getMenuButton()), false);
  
  // Home Button
  getHomeButton().addEventListener('click', homePage);
  getHomeButton().addEventListener('click', () => addSpecialSelection(getHomeButton()), false);

})();
