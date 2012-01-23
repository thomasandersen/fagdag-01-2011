var queryInput = document.getElementById('query'); 
var searchResultDiv = document.getElementById('search-result');
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


function handleFormSubmit()
{
    doSearch( queryInput.value );
}


function doSearch(searchTerm)
{
    clearResult();
    var request = new XMLHttpRequest();
    request.open( 'GET', 'json/products.json', false );
    request.send( null );

    if ( request.status === 200 )
    {
        var products = JSON.parse( request.responseText );
        var filtered = getFilteredResult( products, searchTerm );
        displayProducts(filtered);
    }
    return false;
}


function browseProducts( page )
{
    clearResult();
    var request = new XMLHttpRequest();
    request.open( 'GET', 'json/products.json?page=' + page, false );
    request.send( null );

    if ( request.status === 200 )
    {
        var responseAsJson = JSON.parse( request.responseText );
        displayProducts(responseAsJson.products);
    }
}


function displayProducts(products)
{
    var htmlFormatted = htmlFormat(products);
    searchResultDiv.appendChild( htmlFormatted );
}


function htmlFormat(products)
{
    var container = document.createElement('div');
    var product;
    for (var i = 0; i < products.length; i++)
    {
        product = products[i];
        
        var div = document.createElement('div');
        div.innerHTML = product.key + ' - ' + product.name;
        container.appendChild(div);
    }
    return container;
}


function getFilteredResult(products, nameToFind)
{
    var found = [];
    var p = products.products, product;
    for (var i = 0; i < p.length; i++)
    {
        product = p[i];
        
        if ( product.name.toLowerCase().indexOf( nameToFind.toLowerCase() ) > -1 )
        {
            found.push(product);
        }
    }
    return found;
}


function clearResult()
{
    searchResultDiv.innerHTML = '';
}


function slideDown( element )
{
    // debugger;
    element.className = 'new-position';
}


function init( bodyElement )
{
    queryInput.focus();
    slideDown( bodyElement );
}


init( document.getElementById( 'page-container' ) );



