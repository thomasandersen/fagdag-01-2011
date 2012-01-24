var $ = function(id) {
    return document.getElementById(id);
};

$('price').addEventListener('keyup', setTotal);
$('quantity').addEventListener('keyup', setTotal);
$('add-button').addEventListener('click', addProduct);

/* App */

function setTotal()
{
    var totalIncludingMva = calculateTotalIncludingMva();
    $('total').value = totalIncludingMva;
}


function calculateTotalIncludingMva()
{
    var total = getPrice() * getQuantity();
    var totalIncludingMva = total * 25*( total / 100 );
    return totalIncludingMva;
}


function getItem()
{
    return $('item').value;
}


function getPrice()
{
    return parseInt($('price').value);
}


function getQuantity()
{
    return parseInt($('quantity').value);
}


function getTotal() 
{
    return getPrice() * getQuantity();
}


var loadCount = 0;
function addProduct()
{
    var request = new XMLHttpRequest();
    request.open( 'GET', 'json/orders.json?load=' + ++loadCount , false );
    request.send( null );

    if ( request.status === 200 )
    {
        var responseAsJson = JSON.parse( request.responseText );
        createOrderList(responseAsJson);
        createOrderTotal(responseAsJson);
    }
}


function createOrderList( json )
{
    var products = json.products;
    
    for ( var i = 0; i < products.length; i++ )
    {
        $('order-list').appendChild( createOrderItem( products[i]) );
    }
}


function createOrderItem( order )
{
    var div = document.createElement('div');
    div.innerHTML = '#' + order.key + '\t' + order.name + '\t' + order.quantity  + '\t' + order.price;
    return div;
}


function createOrderTotal( json )
{
    var products = json.products;
    var total = 0, quantity = 0;
    for ( var i = 0; i < products.length; i++ )
    {
        total += parseInt(products[i].price, 10);
        quantity += parseInt(products[i].quantity, 10); 
    }
    $('order-list').appendChild( document.createTextNode('----------------------------\n') );
    $('order-list').appendChild( document.createTextNode('Total\t\t' + quantity + '\t' + total + '\n') );
    $('order-list').appendChild( document.createTextNode('============================\n') );
}

setTotal();