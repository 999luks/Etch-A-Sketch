let numOfPixels = prompt('Enter pixel number: pixel*pixel grid will be created', 'Choose a number from 4 to 100');

const screen = document.querySelector('.screen');

if(numOfPixels<=100 && numOfPixels>=4){
    for(let i=0; i<numOfPixels; i++){
        const screenColumn = document.createElement('div');
        screenColumn.classList.add("screen-column");
        screen.appendChild(screenColumn);
        for(let j=0; j<numOfPixels; j++){
            const square = document.createElement('div');
            square.style.height = '100%';
            square.style.width = '100%'
            square.style.border = '1px solid';
            screenColumn.appendChild(square);
            square.classList.add("square");
            square.addEventListener('mouseover', () => square.style.backgroundColor = `${color}`);
        }
    }
}

let color = 'grey' //standard color

const colorPicker = document.querySelector('input');

colorPicker.addEventListener('change', updateColor);

function updateColor(e){
    color = e.target.value;
}

const button = document.querySelector('button');
button.addEventListener('click', clearScreen);

const squares = document.querySelectorAll('.square');

function clearScreen(){
    console.log(squares)
    squares.forEach((square) => square.style.backgroundColor = 'white');
}