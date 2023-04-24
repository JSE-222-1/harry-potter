async function getUsers() {
    let response = await fetch('https://hp-api.onrender.com/api/characters');
    return await response.json();
  }
  async function showInfo(){
    let house = localStorage.getItem('clickedCharacterId');
    let characters = await getUsers();
    let div = document.querySelector("div")
    
    for (let character of characters) {
        if (character.name === house) {
            let p = document.createElement("p");
            p.innerHTML = character.name;
            let pp = document.createElement("p")
            let ppp = document.createElement("p")
            pp.innerHTML =character.actor
            ppp.innerHTML =character.alternate_names
            div.appendChild(ppp);
            div.appendChild(p);
            div.appendChild(pp);
            let years = new Date().getFullYear() - character.yearOfBirth 
            let pppp = document.createElement("p")
            pppp.innerHTML = years
            div.appendChild(pppp);
            let ppppp = document.createElement("p")
            ppppp.innerHTML = character.house
            div.appendChild(ppppp);
            let img = document.createElement("img")
            img.setAttribute("src",character.image)
            div.appendChild(img);
        }
    }
}
showInfo()