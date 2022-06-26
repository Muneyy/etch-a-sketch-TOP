// const numberSize = prompt("Please enter how large the grid is: ");
const gridText = document.querySelector(".grid-text-display");
const slider = document.getElementById("myRange");
const gridItem = document.querySelectorAll(".grid-item")
// const gridContent = document.getElementsByClassName("grid-container-test");
const reset = document.querySelector(".reset");
const content = document.querySelector(".content");
const changeColorButtons = document.querySelectorAll(".change-color");
const gridOn = document.querySelector(".grid-on");
const gridOff = document.querySelector(".grid-off");
const selectedColor = document.getElementById("selectedColor");

//Initialize brush color
const colorButtons = Array.from(document.querySelectorAll('.change-color'));
colorButtons.forEach(colorButton => colorButton.addEventListener('click', () => {
    penColor = (colorButton.id);
    selectedColor.style.backgroundColor = `#${penColor}`

    // const cells = Array.from(document.querySelectorAll('.grid-item'));
    // console.log(`This happens before error: ${penColor}`);
    // cells.forEach(cell => cell.classList.remove(`active-${temp}`));
}));



initialize();

function initialize() {
    let sliderValue = 32
    makeGrid(sliderValue);
    slider.oninput = function() {
        sliderValue = parseInt(this.value);
        makeGrid(sliderValue);
        return;
    };
}

gridOn.addEventListener('click', () => {
    const cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => cell.style.border="1px solid rgba(0, 0, 0, 0.2)");
});

gridOff.addEventListener('click', () => {
    const cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => cell.style.border="0");
});

function makeGrid(sliderValue) {
    const gridSize = sliderValue * sliderValue;
    const gridContainer = document.querySelector(".grid-container-test");
    gridContainer.textContent = '';
    gridContainer.style.gridTemplateColumns = `repeat(${sliderValue}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${sliderValue}, auto)`;
    gridText.textContent = `${sliderValue} x ${sliderValue} Grid`;



    
    for (i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        gridContainer.appendChild(cell);
        cell.addEventListener('mousedown', changeColor);
        cell.setAttribute('draggable', false);
    };
    gridContainer.addEventListener('mousedown', () => {
        console.log("triggermouseDOWN");
        addActive();
    });

    gridContainer.addEventListener('mouseup', () => {
        console.log("triggermouseUP");
        removeActive();
    });
}

function addActive() {
    // console.log("does addActive work?")
    const cells = Array.from(document.querySelectorAll('.grid-item'));
    // console.log(`This happens before error: ${penColor}`);
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
}

function removeActive() {

    const cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => cell.removeEventListener('mouseover', changeColor));
}

// const colorChecker = ["aquamarine", "yellow", "red", "green", "violet"];
const colorChecker = document.querySelectorAll(".change-color");
const colorArray = [];
colorChecker.forEach(eachColor => {
    colorArray.push(eachColor.id);
    eachColor.style.backgroundColor = `#${eachColor.id}`
});
// console.log(colorChecker);
// console.log(colorCheckerTest);
console.log(`This is ${colorArray}`);

function changeColor() {
    colorArray.forEach(eachColor => {
        if (penColor != eachColor) {
            this.classList.remove(`active-${eachColor}`);
        };
    });

    // this.classList.remove(`active-${temp}`);
    // console.log(`This happens before error: ${penColor}`);
    this.classList.add(`active-${penColor}`);
    console.log(penColor);
};

reset.addEventListener("click", () => {
    slider.value = 32;
    makeGrid(32);
    // const cells = Array.from(document.querySelectorAll('.grid-item'));
    // cells.forEach(cell => {
    //     cell.classList.remove(`active-*`);

    // });
});

console.log(PointerEvent);



// const gridSize = sliderValue * sliderValue;
// console.log(gridSize);


// gridContainer.style.gridTemplateColumns = `repeat(${sliderValue}, auto)`;
// gridContainer.style.gridTemplateRows = `repeat(${sliderValue}, auto)`;


// for (i = 0; i < gridSize; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("grid-item");
//     gridContainer.appendChild(cell);
//     // cell.addEventListener('mouseover', changeColor);
// };

// const cells = Array.from(document.querySelectorAll('.grid-item'));
// cells.forEach(cell => cell.addEventListener('mouseover', changeColor));


// const cells = Array.from(document.querySelectorAll('.grid-item'));
// cells.forEach(cell => cell.addEventListener('mouseover', changeColor));


// document.querySelector(".grid-item").onmouseover = function() {
//     // this.classList.add("active");
//     this.style.color = "red";
// }
// gridItem.addEventListener("mouseover", () => {
//     gridItem.style.color = "red";
// })

