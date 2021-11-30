// Import content div
import { contentDiv } from "../helper_funcs/funcs.js";


const createTitle  = () => {
  let title = document.createElement('div');
  title.className = 'title';

  let name = document.createElement('h1');
  name.innerHTML = 'The Waffle House!'

  title.appendChild(name);

  return title;
};

export const titlePiece = () => {
  contentDiv.appendChild(createTitle());
};