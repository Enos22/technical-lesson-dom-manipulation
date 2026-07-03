const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
    const header = document.querySelector("#main")
    header.textContent = userInfo.username + "'s Personal Webpage" //changes the content of the webpage.
    header.className = userInfo.theme //changes the name of the class applied to any piece of DOM.

    const description = document.createElement("p")
    const body = document.querySelector("body")

    description.textContent = userInfo.description
    description.className = userInfo.theme

    body.appendChild(description) //adds the description to the body of the webpage.
    }
displayUser(userInfo)

