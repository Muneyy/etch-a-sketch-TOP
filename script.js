const numberSize = prompt("Please enter how large the grid is: ");
const gridSize = numberSize * numberSize;
const gridItem = document.querySelectorAll(".grid-item")
const gridContainer = document.querySelector(".grid-container-test");
const reset = document.querySelector(".reset");
const draw = document.querySelector(".draw");

gridContainer.style.gridTemplateColumns = `repeat(${numberSize}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${numberSize}, auto)`;


for (i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    gridContainer.appendChild(cell);
    // cell.addEventListener('mouseover', changeColor);
};

draw.addEventListener("click", () => {
    const cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
})

reset.addEventListener("click", () => {
    const cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => {
        cell.classList.remove("active");
        cell.removeEventListener("mouseover", changeColor);

    });
});

// const cells = Array.from(document.querySelectorAll('.grid-item'));
// cells.forEach(cell => cell.addEventListener('mouseover', changeColor));

function changeColor() {
    this.classList.add("active");
};

// document.querySelector(".grid-item").onmouseover = function() {
//     // this.classList.add("active");
//     this.style.color = "red";
// }
// gridItem.addEventListener("mouseover", () => {
//     gridItem.style.color = "red";
// })

