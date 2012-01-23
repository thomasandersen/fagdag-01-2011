var queryInput = document.getElementById('query'); 
var searchResultDiv = document.getElementById('search-result');
var clearButton = document.getElementById('clear-button');


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
        div.innerHTML = product.key + ', ' + product.name;
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



