

function homePage(){
    const home = document.getElementById("container")

    const homeContent = document.createElement("div");
    homeContent.innerHTML = " <h1>Chop & Chill</h1><br/><h2>Where Every Meal Feels Like Home</h2><p>Fresh, locally sourced ingredients served with love in the heart of the city. Whether it’s a quick lunch or a Sunday dinner,we’ve got a seat waiting for you.</p> <div id='home-cta'><button>View Menu</button>  | <button>Book a Table</button> </div>"


    return home.appendChild(homeContent)
    
}

const home = homePage()

export default home


