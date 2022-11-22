let massiv =[]
for (let i = 0; i <= 10; i++){
    massiv.push(i)
}
console.log(massiv)
for (let i = 20; i >= 0; i--){
    console.log(i)
}


let trafficLight = prompt("Введите цвет светофора")

if (trafficLight === "Красный") {
    alert("Стоп !")
}

else if (trafficLight === "Желтый") {
    alert("готовься !")
}
else if (trafficLight === "Зеленый") {
    alert("Езжай !")
}

else {
    alert("надо ввести одну из перечисленых цветов :Красный,Желтый,Зеленый.")
}