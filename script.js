
const btn = document.querySelector('button')

function createCard() {
  const resultElement = document.querySelector(".result")
  const input = document.querySelector("input")
  const filmName = input.value
    if(filmName) {
        fetch(`http://www.omdbapi.com/?r=json&s=${filmName}&apikey=2a7d7e9f&`)
          .then((response) => response.json())
          .then((json) => {
            if (json.Search) {
              json.Search.forEach(function (film) {
                resultElement.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${film.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <p class="card-text">${film.Year}</p>
                <p class="card-text">${film.Type}</p>
            </div>
        </div>`
              })
              input.value = ""
            } else {
                input.value = ""
              alert("Фільм не знайдений!")
            }
          })
    } else alert("Введіть назву фільму")
    
  
}

btn.addEventListener('click', createCard)


