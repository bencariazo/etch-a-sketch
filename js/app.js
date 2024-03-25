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

