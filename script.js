let container = document.querySelector('.container');
let numGrid = prompt("Enter number of grids: ");
if (numGrid > 100) numGrid = 100;
const GRIDSIZE = 900;
document.addEventListener('DOMContentLoaded', function()
{
    for (let i = 0; i < numGrid; i++) 
    {
        for (let j = 0; j < numGrid; j++)
        {
            let gridItem = document.createElement('div');
            let gridSizePx = (GRIDSIZE / numGrid);
            gridItem.style.width = `${gridSizePx}` + 'px';
            gridItem.style.height = `${gridSizePx}` + 'px';
            gridItem.style.left = `${(i * gridSizePx)}` + 'px';
            gridItem.style.top = `${(j * gridSizePx)}` + 'px';
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
