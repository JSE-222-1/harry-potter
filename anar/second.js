let getActor = localStorage.getItem("resultId")

const BASE_URL = 'https://hp-api.onrender.com/api/characters'

async function makeQuery(id) {
    const URL = BASE_URL
    const response = await fetch(URL)
    const characters = await response.json()

    return characters.find(item => item.id == getActor)
}

async function drawInfo() {
    const result = await makeQuery()
    let divInfo = document.querySelector('#info')
    let currentYear = new Date().getFullYear()


    divInfo.innerHTML = "" 
    divInfo.innerHTML += `            
        <p>${result.name}</p>
        <p>${result.actor}</p>
        <p>(${result.alternate_names})</p>
        <p>${result.yearOfBirth} (${currentYear - result.yearOfBirth})</p>
        <img src="${result.image}">
        
        `
        
}
drawInfo()

