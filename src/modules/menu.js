// Menu Item Factory
const addMenuItem = (name, description) => {
  let menuItemContainer = document.createElement('div');
  menuItemContainer.className = 'menu-item';
  
  let menuName = document.createElement('h2');
  menuName.innerHTML = `${name}`;

  let menuDesc = document.createElement('p');
  menuDesc.innerHTML = `${description}`;
  
  menuItemContainer.appendChild(menuName);
  menuItemContainer.appendChild(menuDesc);

  return menuItemContainer
}
