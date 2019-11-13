$(function(){ //shorthand
  
  $('#userSignInput').on('keyup', function(e) {
    
    

    var inputLength = $(this).val().length;
    
    $('#tiles').text(inputLength);
    updatePrice(inputLength);
   
    
  })

  $('#userFontInput').on('click', function(e) {
    
      var inputFont = $(this).is(':checked');

        updatePrice($('#userSignInput').val().length, inputFont)
  })
})

  $('#confirmOrder').on('click', function(e) {
    event.perventDefault();
    console.log('firing');
  
  $('#cancelPreview').on('click', function(e) {
    event.perventDefault();
    console.log('firing');
    
    var previewMsg = $('#userSignInput').val();
    previewMsg += '<a href="#" id="cancelPreview">x</a>';
    
   $('#previewScreen').append(previewMsg);
   $('#previewScreen').animate({ 'right': '0px' }, 235);
  }) // closing tag to preview/confirm click event

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costPerTile = 5;
  
  if(fontUpgrade) {
    console.log('Upgrading your tile cost...');
    costPerTile = 6; }
  else
    { costPerTile = 5; }
  
  if(colorUpgrade) { colorUpgrade = 1; }
  else { colorUpgrade = 0; }

  
  var subTotal = signLength * costPerTile + colorUpgrade;
  var shipping = 7;
 
  
  if (signLength != 0) { shipping = 7; }
  else { shipping = 0; }
  
  var grandTotal = subTotal + shipping;
  
  // var elSign = document.getElementById('userSign');
  // elSign.textContent = sign;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
}
/*
OLD JAVASCRIPT FROM BOOK
// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

// Note: textContent does not work in IE8 or earlier - see explanation on website
*/