let select = document.querySelector('select')
let divCharacters = document.querySelector('#characters')
let button = document.querySelector('button')

const BASE_URL = 'https://hp-api.onrender.com/api/characters/house/'

async function makeQuery() {
    const URL = BASE_URL + select.value
    const response = await fetch(URL)
    return await response.json()

}

async function showCharacters() {
    const results = await makeQuery()

    divCharacters.innerHTML = ''

    for (let result of results ) {
        divCharacters.innerHTML += `
            <p onclick="getInfo('${result.id}')">${result.name} </p>
            <img src="${result.image}">
        `
    }
}

button.addEventListener('click', () => {
    showCharacters()
})

function getInfo(resultId){
    localStorage.setItem("resultId", resultId)
    location.href = "second.html"
} 