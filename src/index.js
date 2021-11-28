// Module Imports
import { navBar } from "./modules/navbar.js";
import { contactForm } from "./modules/contact.js";
import { homePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";


// DOM elements imports
import { getContactButton, getMenuButton, getHomeButton } from "./helper_funcs/funcs.js";

// Initialization
navBar();

// Home


// Menu



// Contact Form

const showContactForm = () => {
  contactForm();
};



// Add Click Event Listner
const contactEventListner = ( () => {
  
  // Contact Button
  getContactButton().addEventListener('click', showContactForm);

  // Menu Button
  getMenuButton().addEventListener('click', menuPage);
  
  // Home Button
  getHomeButton().addEventListener('click', homePage);

})();

