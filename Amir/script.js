

let usersDiv = document.querySelector('#characters');
let btn = document.querySelector('button');
let select = document.querySelector('select');

async function getUsers() {
  let response = await fetch('https://hp-api.onrender.com/api/characters');
  return await response.json();
}

async function drawUsers() {
  let characters = await getUsers();
  let usersHTML = '';
  
  for (let student of characters) {
    if (select.value === student.house) {
      usersHTML += `
      <div class="user__div" house="${student.house} onclick= "getUser(${student.id})"> 
      <p>${student.name}
      </p>
      <img src="${student.image}">
      </div>`
    }
  }
  
  usersDiv.innerHTML = usersHTML;
}

btn.addEventListener('click', async () => {
  drawUsers();
});


function getUser(data){
    localStorage.setItem("getUser", data)
    location.href = 'MaxDos37.html';
}