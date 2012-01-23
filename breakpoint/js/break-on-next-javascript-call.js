var queryInput = document.getElementById('query'); 
var searchResultDiv = document.getElementById('search-result');
var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    clear();
    queryInput.focus();
});

var json = {
    "products": [
        { "key": 1, "name": "Nykokt hummer fra Maine" },
        { "key": 2, "name": "Ferske fjordreker" },
        { "key": 3, "name": "Kamtchatca krabbe" },
        { "key": 4, "name": "Hvitløk&sitron marinerte kongereker" },
        { "key": 5, "name": "Dampet kamskjell med estragon" },
        { "key": 6, "name": "Gambas med chili og ingefær" },
        { "key": 7, "name": "Skagenrøre m/løyrom" },
        { "key": 8, "name": "Vindampet blåskjell" },
        { "key": 9, "name": "Krabbeskjell/klør" },
        { "key": 10, "name": "NykoktSjøkreps" }
    ]
};


function handleFormSubmit()
{
    doSearch( queryInput.value );
}


function doSearch(searchTerm)
{
    var products = findProductsByName( searchTerm );
    displayProducts(products);
    
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


function findProductsByName(nameToFind)
{
    var found = [];
    var products = json.products, product;
    for (var i = 0; i < products.length; i++)
    {
        product = products[i];
        
        if ( product.name.toLowerCase().indexOf( nameToFind.toLowerCase() ) > -1 )
        {
            found.push(product);
        }
    }
    
    return found;
}


function clear()
{
    queryInput.value = '';
    searchResultDiv.innerHTML = '';
}


queryInput.focus();

