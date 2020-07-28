//Grid creator button
let gridCreator = document.createElement('button');
gridCreator.className = 'gridCreator';
gridCreator.textContent = 'New Grid';
document.body.appendChild(gridCreator);

//Create Grid Container
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//Button that resets grid and prompts for new grid value
gridCreator.addEventListener('click', () => {
    //Resets previous grid elements
    container.innerHTML = '';
    let grid = +prompt('Enter the grid size to set columns and rows: ');

    if (grid > 64) {
        alert('Warning: Grid Sizes larger than 64 will take longer to create!')
        let grid = +prompt('Enter the grid size: ');
    } 

    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    createSquares(grid);
});

//Creates container squares and fills color on hover
function createSquares(value) {

    for (i = 0; i < value * value; i++) {
        gridSquare = document.createElement('div');
        gridSquare.className = 'gridSquare';
        gridSquare.id = 'square' + i;
        container.appendChild(gridSquare);
        gridArray = Array.from(container.childNodes);
    }
    //Color grid elements on hover
    gridArray.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.id = 'gridSquareFilled';
        });
    });
}

