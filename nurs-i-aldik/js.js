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
  
  for (let user of characters) {
    if (select.value === user.house) {
      usersHTML += `<div id="userDiv" class="user__div" name="${user.name}" house="${user.house}"><p>${user.name}</p></div>`
    }
  }
  
  usersDiv.innerHTML = usersHTML;
}

btn.addEventListener('click', async () => {
  drawUsers();
});

drawUsers().then(() => {
  let userDivs = document.querySelectorAll('.user__div');
  let userDiv = document.querySelector("#userDiv")
  for (const userDiv of userDivs) {
    userDiv.addEventListener('click', () => {
      localStorage.setItem('clickedCharacterId', userDiv.getAttribute('name'));
      location.href = 'aldik.html';
    });
  }
});