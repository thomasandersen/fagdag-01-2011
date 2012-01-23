console.info('Example 3');

var image = document.getElementById('image');
var label = document.getElementById('label');
image.addEventListener('mouseover', handleMouseEvents);
image.addEventListener('mouseout', handleMouseEvents);

function handleMouseEvents(event)
{
    if (event.type === 'mouseover')
    {
        handleMouseOver(event);
    }
    else if (event.type === 'mouseout')
    {
        handleMouseOut(event);
    }
}

function handleMouseOver(event)
{
    image.src = 'images/agile.png';
    label.innerHTML = 'Agile';
}

function handleMouseOut(event)
{
    image.src = 'images/developer.png';
    label.innerHTML = 'Open Source';
}
