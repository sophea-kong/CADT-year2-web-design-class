 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color
function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    const colorLabel = document.getElementById('result-color');
    const maintext= document.getElementById('t');
    maintext.style.backgroundColor = randomColor;
    colorLabel.innerText = randomColor;
}
const randomColorButton = document.getElementById('random-color-button');
randomColorButton.addEventListener("click",changeBackgroundColor);
