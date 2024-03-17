const colors = ['#f0f6ff', '#fffcf2', '#b6eefc', '#c0baff', '#ffbdca'];
let randomColor = colors[Math.floor(Math.random()*(colors.length))];
console.log(randomColor);
let button = document.getElementsByTagName('button');
function changeColor() { 
    document.querySelector('body').style.backgroundColor = randomColor;
}
button.onclick = changeColor;