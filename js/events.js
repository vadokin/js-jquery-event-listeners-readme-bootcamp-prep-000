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
  $('form').on('keypress', function(key) {
    if ($('input:first').val() === 'g') {

    }
  });
}

$(document).ready(function(){

// call functions here

});
