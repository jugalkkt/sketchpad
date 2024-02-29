let container = document.querySelector('.container');
let numGrid = prompt("Enter number of grids: ");
const GRIDSIZE = 900;
document.addEventListener('DOMContentLoaded', function()
{
    for (let i = 0; i < numGrid; i++) 
    {
        for (let j = 0; j < numGrid; j++)
        {
            let gridItem = document.createElement('div');
            gridItem.style.width = gridItem.style.height = `${(GRIDSIZE / numGrid) - 2}px`;
            gridItem.style.left = i*100 + "px";
            gridItem.style.top = j*100 + "px";
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
})
