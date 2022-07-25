function createGrid(dimension){
    const container = document.querySelector('#container');
    let counter = 0;

    while(counter<dimension){
        let row = document.createElement('div');
        row.style.display = 'flex';

        let counter2 = 0;
        while(counter2<dimension){
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.flexGrow = '1';
            row.appendChild(square);
            counter2++;
        }

        row.setAttribute('class', 'row');
        row.style.height = '37.5px';
        container.appendChild(row);
        counter++;
    }
}

function colorAndCreateTheGrid(gridDimension, color){
    createGrid(gridDimension);

    const colorLowerCase = color.toLowerCase();

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => square.style.backgroundColor = colorLowerCase);
    })
}

function startTheGrid(){
    colorAndCreateTheGrid(16, 'black');
    const buttonChangeDimension = document.querySelector('#changeDimensionOfTheGrid');
    const container = document.querySelector('#container');
    let dimension;
    buttonChangeDimension.addEventListener('click', ()=>{
        dimension = prompt('Enter the size of the squares on the grid');
        if(dimension > 100 || dimension < 16){
            return alert('Dimension can\'t be more than 100 or less than 16!')
        }else{
            container.innerHTML = ''
            colorAndCreateTheGrid(dimension, 'black');
        }
    });

    const buttonClearTheGrid = document.querySelector('#clearTheGrid');
    buttonClearTheGrid.addEventListener('click', ()=>{
        container.innerHTML = ''
        colorAndCreateTheGrid(16, 'black');
    })
}

startTheGrid();



