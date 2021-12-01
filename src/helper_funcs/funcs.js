// Get DOM element

// Main content div
export let contentDiv = document.querySelector('#content');


// Contact Button Div
export let getContactButton = () => {
  return document.querySelector('.Contact');
};


// Menu Button Div
export let getMenuButton = () => {
  return document.querySelector('.Menu');
};


// Home Button Div
export let getHomeButton = () => {
  return document.querySelector('.Home');
};


// Clear Content div
export const clearContent = () => {
  while(contentDiv.lastChild.className !== 'navBar'){
    contentDiv.removeChild(contentDiv.lastChild);
  }
};


// Add a special selection around current selected navbar item
export const addSpecialSelection = (item) => {
  item.classList.add('special');

  for (let i of [getContactButton(), getHomeButton(), getMenuButton()]){
    if (i !== item){
      i.classList.remove('special');
    };
  };
};

