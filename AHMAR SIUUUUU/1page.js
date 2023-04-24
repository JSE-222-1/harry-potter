let select = document.querySelector("select")
let BASE_URL = "https://hp-api.onrender.com/api/characters/house/"


select.addEventListener('change', async () => {
    let div= document.querySelector("div")
    let response = await fetch(BASE_URL+select.value);
    let data = await response.json()
    div.innerHTML = ""
        for(let res of data){
            div.innerHTML+=`
            <div onclick="getId('${res.id}')">
                <p>${res.name}</p>
                <img src="${res.image}">
            </div>
            `
        }
    console.log(data)
})
function getId(data){
    localStorage.getItem("getName", data);
    location.href="2page.html"
}