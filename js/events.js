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
  $('input:first').on('keypress', function(key) {
    if ($('input:first').val() === 'g') {
      alert('g')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

// call functions here

});
