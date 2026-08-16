import "./styles.css"
import {home} from "./home.js"
import items  from  "./menu.js"

import "./about.js"

//menu activation

document.getElementById("menu").addEventListener("click", () => {  
    items()   
})


const year = new Date().getFullYear()

document.getElementById("footer").innerHTML = `<p>Chop & Chill  <b>&copy; ${year}</b> | All rights reserved</p>`