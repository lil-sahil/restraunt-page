// Import content div
import { contentDiv, clearContent } from "../helper_funcs/funcs.js";

// Form Factory

const addForm = (fieldName) => {
  let container  = document.createElement('div');
  let field = document.createElement('h2');
  field.innerHTML = fieldName;
  
  let input = document.createElement('INPUT')
  input.setAttribute('type', 'text');

  container.appendChild(field);
  container.appendChild(input);

  container.classList.add(fieldName);
  return container;
};


export const contactForm = () => {
  clearContent();
  contentDiv.appendChild(addForm('Name'));
  contentDiv.appendChild(addForm('Email'));
  contentDiv.appendChild(addForm('Message'));
};