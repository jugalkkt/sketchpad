let isGridGenerated = false;
function toggleGrid()
{
    clearGrid();
    generateGrid();
}

function generateGrid()
{
    let container = document.querySelector('.container');
    let numGrid = prompt("Enter number of grids: ");
    if (numGrid > 100) numGrid = 100;
    const GRIDSIZE = 900;
    const containerRect = container.getBoundingClientRect();
    const containerStartX = containerRect.left;
    const containerStartY = containerRect.top;
    for (let i = 0; i < numGrid; i++) 
    {
        for (let j = 0; j < numGrid; j++)
        {
            let gridItem = document.createElement('div');
            let gridSizePx = (GRIDSIZE / numGrid);
            gridItem.style.width = `${gridSizePx}` + 'px';
            gridItem.style.height = `${gridSizePx}` + 'px';
            gridItem.style.left = `${(i * gridSizePx) + containerStartX}` + 'px';
            gridItem.style.top = `${(j * gridSizePx) + containerStartY}` + 'px';
            gridItem.classList.add('gridItem')
            container.appendChild(gridItem);
            gridItem.addEventListener( 'mouseenter', function()
            {
                this.style.backgroundColor = 'blue';
            }
            )
            gridItem.addEventListener( 'mouseleave', function()
            {
                this.style.backgroundColor = '';
            }
            )
        }
    }
}
function clearGrid()
{
    let container = document.querySelector('.container');
    container.innerHTML = '';
}
let btn = document.querySelector('button');
btn.onclick = toggleGrid;


