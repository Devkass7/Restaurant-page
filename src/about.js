import logo from "./images/logo.png"

const about =  document.getElementById("about") 
function aboutUs(){
    document.querySelector(".hero").innerHTML = ""

   document.getElementById("container").innerHTML = `
    <section class="about-chop-chill">
    <img class="about-logo" src ="${logo}" alt = "logo" />
  <h1>About Chop & Chill</h1>
  <h2>Where Fresh Cuts Meet Good Vibes.</h2>
  
  <p>At <strong>Chop & Chill</strong>, great food shouldn't come with the stress. We created a space where the chopping is done by us, and the chilling is up to you.</p>

  <h3>Our Story</h3>
  <p>Born from a passion for real ingredients, we wanted to solve the "fast food, slow flavor" dilemma. <br> Whether you're grabbing a quick lunch between meetings or unwinding with friends, <strong>Chop & Chill</strong> is your sanctuary.</p>

  <h3>What We Serve</h3>
  <ul>
    <li><strong>Signature Bowls:</strong> Hearty grains, crisp greens, and house-marinated proteins.</li>
    <li><strong>Fresh Chops:</strong> Daily-prepped local meats and vibrant plant-based options.</li>
    <li><strong>Chill Drinks:</strong> Crafted lemonades, fresh juices, and curated beverages.</li>
  </ul>

  <h3>The Vibe</h3>
  <p>Modern, open, and inviting. Our space is designed to be an escape from the rush, with music that keeps the energy up without getting in the way.</p>

  <h3>Our Promise</h3>
  <p><strong>Freshness First:</strong> No shortcuts. <br>
  <strong>Quality You Can Taste:</strong> Locally sourced whenever possible. <br>
  <strong>Chill Always:</strong> Making your day easier and more delicious.</p>

  <div class="tagline">
    <p><em>Come for the Chop. Stay for the Chill.</em></p>
    <p><strong>Chop & Chill: Fresh Food. Good Mood.</strong></p>
  </div>
</section>
    `
}

about.addEventListener("click", () =>{
    document.getElementById("container").innerHTML =" "
    aboutUs()
})