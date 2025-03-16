const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];

const changeColorButton = document.getElementById('changeColorButton');
const heading = document.getElementById('heading');

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    heading.style.backgroundColor = randomColor;
}


changeColorButton.addEventListener('click', changeBackgroundColor);
