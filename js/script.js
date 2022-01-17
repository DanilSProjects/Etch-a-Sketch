let mainContainerSide = 16;
let paintColour = "black";

// Add row divs/flex containers to house individual divs
function addRowDivs() {
    for (let i = 1; i <= mainContainerSide; i++) {
        let mainContainer = document.querySelector('#main-container');
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('id', `row-${i}`);
        rowDiv.classList.add('row-div');
        mainContainer.appendChild(rowDiv);
    }
}

// Add individual divs for the user to actually draw on
function addIndividualDivs() {
    let rowDivNodeList = document.querySelectorAll('.row-div');
    rowDivNodeList.forEach( (rowDiv) => {
        for (let i = 1; i <= mainContainerSide; i++) {
            let individualDiv = document.createElement('div');
            individualDiv.classList.add('individual-div');
            individualDiv.setAttribute('onmouseenter', 'hover(this)')
            rowDiv.appendChild(individualDiv);
        }
    })
}

// Turn divs black when moused over
function hover(div) {
    div.style.backgroundColor = paintColour;
}

function clearDivs() {
    let mainContainer = document.querySelector('#main-container');
    let rowDivNodeList = document.querySelectorAll('.row-div');
    rowDivNodeList.forEach( (rowDiv) => {
        mainContainer.removeChild(rowDiv);
    })
}

// Set up the main container with the two div functions
function setUpDivs() {
    addRowDivs();
    addIndividualDivs();
}

window.onload = setUpDivs();

// Clear grid button
let resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let individualDivNodeList = document.querySelectorAll('.individual-div');
    individualDivNodeList.forEach( (individualDiv) => {
        individualDiv.style.backgroundColor = "white";
    } )
}

// Grid slider changes label + grid itself
let sliderLabel = document.querySelector('#slider-label')
let gridSlider = document.querySelector('#grid-slider');

gridSlider.addEventListener('input', () => {
    mainContainerSide = gridSlider.value;
    clearDivs();
    setUpDivs();

    sliderLabel.textContent = `The grid is currently ${gridSlider.value} x ${gridSlider.value} squares.`;
});

// Change colour of hover with buttons

let colourButtons = document.querySelectorAll(".colour-button");
colourButtons.forEach( (button) => {
    button.style.backgroundColor = button.getAttribute('id');
    button.addEventListener('click', (e) => {
        paintColour = e.target.id;
    })
})