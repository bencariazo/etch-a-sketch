const squares = document.querySelector('.container');
const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.grid-size');
const buttons = document.querySelector('.buttons')
const sizeBtn = document.querySelector('#grid-size-btn')
const clearGrid = document.querySelector('#clear-grid-btn')

const divSize = document.createElement('div');
divSize.textContent = '';

function askSize() {
    let askSize = Number(prompt("What is the new size of your grid? (Max: 100)"));
    function getSize(input) {
        if(isNaN(input) || input === '' || input > 100){
            return false;
        } else {
            return askSize;
        }
    }
    return getSize(askSize)
}
const defaultGridSize = (size=16) => {
    divSize.textContent = `${size} x ${size}`
    gridSize.insertBefore(divSize, buttons);

    for(let i=0;i<size*size;i++){
        const divSquare = document.createElement('div')
        divSquare.classList.add('grid-square')
        divSquare.style.flex = `1 0 calc(100%/${size})`;
        grid.appendChild(divSquare)
    }

    let isMouseDown = false;
    const gridEl = document.querySelectorAll('.grid-square')

    const changeColorOnMouseDown = gridItem => {
        gridItem.style.backgroundColor = "gray"
    }
    gridEl.forEach(item => {

        item.addEventListener("mousedown", () => {
            isMouseDown = true;
            changeColorOnMouseDown(item)
        })
        
        item.addEventListener("mouseup", () => {
            isMouseDown = false;
        })
        
        item.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                changeColorOnMouseDown(item); 
            }
        })
    })

}

const applyNewGridSize = () => {
    removeGrid();
    let newSize = askSize();
    while(newSize === false || newSize === 0){

        newSize = askSize();
    }
    defaultGridSize(newSize);
};

const removeGrid = () => {
    while (grid.hasChildNodes()){
        grid.removeChild(grid.firstChild)
    }
}

const eraseGrid = () => {
    const gridEl = document.querySelectorAll('.grid-square')
    gridEl.forEach(item => {
        item.style.backgroundColor = "";
    })
}
sizeBtn.addEventListener('click', applyNewGridSize);
clearGrid.addEventListener('click', eraseGrid);

defaultGridSize();