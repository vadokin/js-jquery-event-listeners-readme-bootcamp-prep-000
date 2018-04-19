function getIt() {
  $('p:first').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img:first').on('load', function() {
    $('img:first').addClass('tasty');
  });
}

function pressIt() {
  $('form').on('keypress', function() {
    
  });
}

$(document).ready(function(){

// call functions here

});
