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
            square.style.borderLeft = '1px solid black';
            square.style.borderRight = '1px solid black';
            square.style.flexGrow = '1';
            row.appendChild(square);
            counter2++;
        }

        row.setAttribute('class', 'row');
        row.style.height = '37.5px';
        row.style.border = '1px solid black';
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
    const button = document.querySelector('#changeDimensionOfTheGrid');
    let dimension;
    button.addEventListener('click', ()=>{
        dimension = prompt('Enter the size of the squares on the grid');
        if(dimension > 100){
            return alert('Dimension can\'t be larger than 100!')
        }else{
            const container = document.querySelector('#container');
            container.innerHTML = ''
            colorAndCreateTheGrid(dimension, 'black');
        }
    });
}

startTheGrid();



