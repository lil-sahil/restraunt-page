// Module Imports
import { navBar } from "./modules/navbar.js";
import { contactForm } from "./modules/contact.js";

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
  getMenuButton().addEventListener('click', showContactForm);
  
  // Home Button
  getHomeButton().addEventListener('click', showContactForm);

})();


