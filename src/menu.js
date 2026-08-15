import logo from "./images/logo.png"
import jollof from "./images/jollof.jpg"
import fries from "./images/fries.jpg"
import ayoyo from "./images/ayoyo.jpg"
import pizza from "./images/pizza.jpg"


 function menu(){
    const menu = document.getElementById("container");
    menu.innerHTML =""

    const menuItems = document.createElement("div")

      
    menuItems.innerHTML = `<div>
    <h1>Your Meal is Just a <span>Click</span> away</h1>
</div>
<fieldset>
    <legend>
        <img class="logo" src="${logo}" alt="logo" />
    </legend>
    <div>
        <h3>Assorted Jollof Rice</h3>
        <img class="food-image" src="${jollof}" alt="" /><button class="cta-button">Place Order</button>
    </div>
</fieldset>

<fieldset>
    <legend><img class="logo" src="${logo}" alt="logo" /></legend>
    <div>
        <h3>Special Banku</h3>
        <img class="food-image" src="${ayoyo}" alt="" /><button class="cta-button">Place Order</button>
    </div>
</fieldset>

<fieldset>
    <legend><img class="logo" src="${logo}" alt="logo" /></legend>
    <div>
        <h3>Irresistible Fries</h3>
        <img class="food-image" src="${fries}" alt="" /><button class="cta-button">Place Order</button>
    </div>
</fieldset>

<fieldset>
    <legend><img class="logo" src="${logo}" alt="logo" /></legend>
    <div>
        <h3>Amazing</h3>
        <img class="food-image" src="${pizza}" alt="" /><button class="cta-button">Place Order</button>
    </div>
</fieldset>
`

   // menuItems.innerHTML = `<img scr='${logo}' >`
    menu.appendChild(menuItems)
}

const items = menu;

export default items;