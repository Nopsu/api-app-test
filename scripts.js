const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
        // create div with card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        
        // create h1 and film title
        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        // create p and film description
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300) // limit to 300 chars

        p.textContent = `${movie.description}...` // End with an ellipses

        // append cards to container element
        container.appendChild(card)

        // each card contains h1 and p
        card.appendChild(h1)
        card.appendChild(p)

    })
    } else {
        console.log('error')
    }

}
// Send request
request.send()