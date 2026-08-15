
 function menu(){
    const menu = document.getElementById("container");
    menu.innerHTML =""

    const menuItems = document.createElement("div")

    menuItems.innerHTML = '<div><img src="./images/logo.png" alt="logo"><h3>Jollof Rice</h3></div><div><img src="./images/logo.png" alt="logo"><h3>Pizza</h3></div><div><img src="./images/logo.png" alt="logo"><h3>Banku</h3></div><div><img src="./images/logo.png" alt="logo"><h3>Fries</h3></div>'

    menu.appendChild(menuItems)
}

const menuItems = menu;

export default menuItems();