let selectCharacters = document.querySelector(`select`)
let divCharacters = document.querySelector(`#person`)
let showBtn = document.querySelector(`button`)
async function makeQuery() {
    const BASE_URL = `https://hp-api.onrender.com/api/characters`
    let link = BASE_URL
    if(selectCharacters.value != `all`){
        link = `${BASE_URL + `/house/` + selectCharacters.value}`
    }
    let response = await fetch(link)
    let data = await response.json()
    return data
}
async function drawCharacters() {
    let data = await makeQuery()
    divCharacters.innerHTML = ``
    for (let character of data) {
        let characterDiv = document.createElement(`div`)
        characterDiv.setAttribute(`id`, `pers`)
        characterDiv.setAttribute(`character`, `${character.id}`)
        let pCharacter = document.createElement(`p`)
        pCharacter.innerHTML = `${character.name}`
        let imgCharacter = document.createElement(`img`)
        imgCharacter.setAttribute(`src`, `${character.image}`)
        imgCharacter.style.width =`150px`
        characterDiv.style.border = `1px solid red`
        characterDiv.style.padding = `5px`
        characterDiv.style.cursor = `pointer`
        characterDiv.appendChild(pCharacter)
        characterDiv.appendChild(imgCharacter)
        divCharacters.appendChild(characterDiv)
    }
}
drawCharacters().then(() => {
    let charactersP = document.querySelectorAll(`#pers`)
    for (let p of charactersP) {
        p.addEventListener(`click`, () => {
            localStorage.setItem(`clickedCharacterId`, `${p.getAttribute('character')}`)
            location.href = `../yeldos/second.html`
        })
    }
})
showBtn.addEventListener(`click`, () => {
    drawCharacters()
})