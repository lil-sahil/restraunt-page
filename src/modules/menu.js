// Picture of Menu

import { contentDiv, clearContent } from "../helper_funcs/funcs.js";



const createMenu  = () => {
  let a  = document.createElement('h2');
  a.innerHTML = 'Menu Page Comming Soon';
  return a
}

export const menuPage = () => {
  clearContent();
  contentDiv.appendChild(createMenu());
};