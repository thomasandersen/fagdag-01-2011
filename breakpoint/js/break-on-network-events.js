console.info( 'Example 3' );

var button1 = document.getElementById( 'break-on-xhr-button-1' );
button1.addEventListener( 'click', function ()
{
    loadProducts('1');
});

var button2 = document.getElementById( 'break-on-xhr-button-2' );
button2.addEventListener( 'click', function ()
{
    loadProducts('2');
});

var button2 = document.getElementById( 'break-on-xhr-button-3' );
button2.addEventListener( 'click', function ()
{
    loadProducts('3');
});

 
function loadProducts( page )
{
    var request = new XMLHttpRequest();
    request.open( 'GET', 'json/products.json?page=' + page, false );
    request.send( null );

    if ( request.status === 200 )
    {
        console.log('Response as JSON: ', JSON.parse( request.responseText ) );
    }
}