// Import content div
import { contentDiv } from "../helper_funcs/funcs.js";

// Form Factory

const addForm = (fieldName) => {
  let container  = document.createElement('div');
  let field = document.createElement('h2');
  field.innerHTML = fieldName;
  
  let input = document.createElement('INPUT')
  input.setAttribute('type', 'text');

  container.appendChild(field);
  container.appendChild(input);

  return container;
};


export const contactForm = () => {
  contentDiv.appendChild(addForm('Name'));
};