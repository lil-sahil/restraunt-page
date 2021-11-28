import { contentDiv, clearContent } from "../helper_funcs/funcs.js";



const createHome  = () => {
  let a  = document.createElement('h2');
  a.innerHTML = 'Home Page Comming Soon';
  return a
}

export const homePage = () => {
  clearContent();
  contentDiv.appendChild(createHome());
};