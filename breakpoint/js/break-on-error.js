function init( bodyElement )
{
    setBackground( bodyElement );
}

function setBackground( element )
{
    // debugger;
    element.className = 'sky';
}

init( document.getElementsByTagName( 'bod' )[0] );