
const colors = ['#f0f6ff', '#fffcf2', '#b6eefc', '#c0baff', '#ffbdca'];
let button = document.getElementById('button');
function changeColor() { 
    let randomColor = colors[Math.floor(Math.random()*(colors.length))];
    console.log(randomColor);
    document.querySelector('body').style.backgroundColor = randomColor;
}
button.onclick = changeColor;
