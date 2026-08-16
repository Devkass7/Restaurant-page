
document.getElementById("contact").addEventListener("click", () => {
    document.getElementById("container").innerHTML = ""

    document.getElementById("container").innerHTML = `
        <div class="contact">
    <form action="#">
        <h2>We're glad to hear from you.</h2>
        <div>
            <label for="fname">
                First Name
            </label>
            <input type="text" id="fname">
        </div>

          <div>
            <label for="lname">
                Last Name
            </label>
            <input type="text" id="lname">
        </div>

          <div>
            <label for="email">
                Email
            </label>
            <input type="text" id="email">
        </div>

          <div>
            <label for="phone">
                Phone Number
            </label>
            <input type="tel" id="phone">
        </div>
        <div class="message">
            <!-- <label for="textarea">
                Your Message
            </label> -->
            <textarea name="" id="textarea" placeholder="Please enter your message."></textarea>
        </div>
        <input class="cta-button submit" type="submit">
    </form></div>
    `

})