const block = document.getElementById("box");
const x = document.getElementById("x")
const y = document.getElementById("Y")

block.addEventListener("mousemove", event => {
    document.getElementById("x_x").innerHTML = event.offsetX;
    document.getElementById("y_y").innerHTML = event.offsetY

})


// const mainus = document.getElementById('mainus')
// const plus = document.getElementById('plus')
// const number = document.getElementById('number')
// let o = 0;
// mainus.addEventListener("click", function (){
//     if (o > 0){
//         o--;
//         number.style.color = 'red';
//         number.innerHTML = o
//
//     }
// })
// plus.addEventListener('click', function (){
//     o++;
//     number.style.color = "green";
//     number.innerHTML = o
// })
//
//
// const Y = document.getElementById('y_y')
// const X = document.getElementById('x_x')
// const box = document.getElementById("box")
// let yy;
// let xx;
// box.addEventListener('mousemove', e => {
//     yy = e.screenY
//     xx = e.screenX
//     y.innerHTML = yy
//     x.innerHTML = xx
// })