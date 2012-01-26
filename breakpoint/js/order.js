var $ = function(id) {
    return document.getElementById(id);
};

$('price').addEventListener('keyup', handleKeyboardEvent);
$('quantity').addEventListener('keyup', handleKeyboardEvent);
$('add-button').addEventListener('click', addOrder);
$('all-orders-button').addEventListener('click', loadAllOrders);


/* App */

function handleKeyboardEvent(event)
{
    setTotal();
}


function setTotal()
{
    var totalIncludingMva = calculateTotal();
    $('total').value = totalIncludingMva;
}


function calculateTotal()
{
    var total = getPrice() * getQuantity();
    var totalIncludingMva = total + 25*( total / 100 );
    return totalIncludingMva;
}


function getProductName()
{
    return $('product').value;
}


function getPrice()
{
    return parseInt($('price').value, 10);
}


function getQuantity()
{
    return parseInt($('quantity').value, 10);
}


function addOrder()
{
    var order = {
        'key':      10,
        'name':     getProductName(),
        'price':    getPrice(),
        'quantity': getQuantity()
    };
    
    var orderItem = createOrderItem( order );
    
    $('order-list').appendChild( orderItem );
}


var loadCount = 0;
function loadAllOrders()
{
    $('order-list').innerHTML = '';
    var request = new XMLHttpRequest();
    request.open( 'GET', 'json/orders.json?load=' + (++loadCount) , false );
    request.send( null );

    if ( request.status === 200 )
    {
        var responseAsJson = JSON.parse( request.responseText );
        createOrderList(responseAsJson);
    }
}


function createOrderList( json )
{
    var orders = json.orders;
    
    for ( var i = 0; i < orders.length; i++ )
    {
        $('order-list').appendChild( createOrderItem( orders[i]) );
    }
}


function createOrderItem( order )
{
    var div = document.createElement('div');
    div.innerHTML = '#' + order.key + '\t' + order.quantity + '\t' + order.name  + '\t' + order.price;
    
    return div;
}


setTotal();