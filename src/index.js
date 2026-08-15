import "./styles.css"
import {home} from "./home.js"

import {menuItems} from  "./menu.js"

//menu activation

document.getElementById("menu").addEventListener("click", (menuItems) => {
    return menuItems()
})