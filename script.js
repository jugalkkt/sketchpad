let container = document.querySelector('.container');
let rows = 16; let cols = 16;
document.addEventListener('DOMContentLoaded', function()
{
    for (let i = 0; i < rows; i++) 
    {
        for (let j = 0; j < cols; j++)
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
