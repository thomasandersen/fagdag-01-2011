var $ = function(id) {
    return document.getElementById(id);
};

$('price').addEventListener('keyup', setTotal);
$('quantity').addEventListener('keyup', setTotal);


/* App */

function setTotal()
{
    $('total').value = calculateTotalIncludingMva();
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


setTotal();

