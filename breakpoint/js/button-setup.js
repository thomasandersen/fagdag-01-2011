var button1 = document.getElementById( 'break-on-xhr-button-1' );
button1.addEventListener( 'click', function ()
{
    browseProducts('1');
});

var button2 = document.getElementById( 'break-on-xhr-button-2' );
button2.addEventListener( 'click', function ()
{
    browseProducts('2');
});

var button2 = document.getElementById( 'break-on-xhr-button-3' );
button2.addEventListener( 'click', function ()
{
    browseProducts('3');
});

var clearButton = document.getElementById( 'clear-button' );
clearButton.addEventListener( 'click', function ()
{
    clearList();
});
