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

// Button Event listner

const buttonListen = (b) => {
  b.addEventListener('click', contactForm)
};


export const contactForm = () => {
  clearContent();
  let form = document.createElement('div')
  form.className = 'formContainer';

  let contactSlogan = document.createElement('h1')
  contactSlogan.innerHTML = 'Contact Us Today!'

  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.setAttribute('type','submit');


  form.appendChild(contactSlogan);
  form.appendChild(addForm('Name'));
  form.appendChild(addForm('Email'));
  form.appendChild(addForm('Message'));
  form.appendChild(submitButton);
  
  contentDiv.appendChild(form);

  buttonListen(submitButton);
};

