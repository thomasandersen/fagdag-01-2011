var queryInput = document.getElementById('query'); 
var searchResultDiv = document.getElementById('search-result');

function handleFormSubmit()
{
    doSearch( queryInput.value );
}


function doSearch(searchTerm)
{
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
    clearList();
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


function clearList()
{
    searchResultDiv.innerHTML = '';
}


function slideDown( element )
{
    // debugger;
    element.className = 'new-position';
}


function init( pageWrapperElement )
{
    queryInput.focus();
    slideDown( pageWrapperElement );
}


init( document.getElementById( 'page-container' ) );



