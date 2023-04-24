let BASE_URL = 'https://hp-api.onrender.com/api/characters';
let studentsId = localStorage.getItem("getName");
let div = document.querySelector('div');
async function getActors(){
    let response = await fetch(BASE_URL);
    return await response.json();
}
async function showActor(){
    let actors = await getActors();
    let year = new Date();
    let curYear = year.getFullYear();
    for(let actor of actors){
       if(actor.id == studentsId ){
        div.innerHTML+=`
        <p>${actor.name}</p>
        <p>${actor.actor}</p>
        <p>${actor.alternate_names}</p>
        <p>${actor.dateOfBirth}(${curYear - actor.yearOfBirth})</p>
        <p>${actor.house}</p>
        <img src="${actor.image}">
        `
       }
    }
}
showActor()
