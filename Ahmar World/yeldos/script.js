let studentId = localStorage.getItem('clickedCharacterId');
const BASE_URL = 'https://hp-api.onrender.com/api/characters';

async function loadStudents(){
    const response = await fetch(BASE_URL);
    return await response.json();
   
}
async function showStudent(){
    const data = await loadStudents();
    const studentDiv = document.querySelector('div');
    for( let student of data){
        if(studentId == student.id){
            let altNames = ``
            for(let altName of student.alternate_names){
                altNames += `${altName}`
            }
            let nowDay = new Date().getFullYear()
            let p = document.createElement(`p`)
            p.innerHTML = `${student.name}`
            if(student.alive){
                p.style.color = `green`
            }else{
                p.style.color = `red`
            }
            studentDiv.appendChild(p)
            studentDiv.innerHTML += `
                ${student.actor}
                ${altNames} <br>
                ${student.dateOfBirth}(${nowDay - student.yearOfBirth}) <br>
                ${student.house} <br> <br>
                <img src="${student.image}"> 
            `;
        }
    }
}
showStudent();