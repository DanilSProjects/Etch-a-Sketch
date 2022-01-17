let mainContainerSide = 16;

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
    div.classList.add('activated');
}

// Set up the main container with the two div functions
function setUpDivs() {
    addRowDivs();
    addIndividualDivs();
}

window.onload(setUpDivs())