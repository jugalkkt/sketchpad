let container = document.querySelector('.container');
let rows = 16; let cols = 16;
let numGrid = prompt("Enter number of grids: ");
document.addEventListener('DOMContentLoaded', function()
{
    for (let i = 0; i < numGrid; i++) 
    {
        for (let j = 0; j < numGrid; j++)
        {
            let gridItem = document.createElement('div');
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
