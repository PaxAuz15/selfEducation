input = document.getElementById("input");
form = document.getElementById("form");
button = document.getElementById("button");
gallery = document.getElementById("gallery");

button.addEventListener("click",(e)=>{
    console.log(e.target);
})

gallery.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
    e.target.classList.add("red")
})

//form.submit() TODO: Forzar la ejecución de un evento

form.addEventListener("submit",(e)=>{
    e.preventDefault(); //Evita el comportamiento por defecto
    console.log("Data Send");
})