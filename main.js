// Rendere visibile la scritta “Live Coding” dentro il cerchio arancione al click sul cerchio

$('.palla span').hide();

$('.palla').click( function (){
  $('.palla span').show();
})
