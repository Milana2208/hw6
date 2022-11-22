const button = document.querySelector("#button");
const userText = document.getElementById("input");
const text = document.querySelector("#text");

button.addEventListener("click", ()=>{
    let result = userText.value.split("").reverse().join("");
    document.getElementById("text").innerHTML = result;
})
