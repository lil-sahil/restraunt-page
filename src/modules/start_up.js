import { contentDiv } from "../helper_funcs/funcs.js";

export const menu = () => {
  let menuBar =  document.createElement('div')
  menuBar.className = 'menu'

  contentDiv.appendChild(menuBar)

  console.log("Menu is working?")
}