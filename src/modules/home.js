import { contentDiv, clearContent } from "../helper_funcs/funcs.js";
import Img from '../photos/showcase.jpg';


const createHome  = () => {
  let showCase  = document.createElement('div');
  showCase.className = 'showCase';
  
  // Image
  // const waffleImage = new Image();
  // waffleImage.src = Img;

  // showCase.appendChild(waffleImage);

  let slogan = document.createElement('h1');
  slogan.className = 'slogan';
  slogan.innerHTML = 'Welcome to Waffle House';

  showCase.appendChild(slogan);

  
  return showCase;
};

export const homePage = () => {
  clearContent();
  contentDiv.appendChild(createHome());
};