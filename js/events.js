function getIt() {
  $('p:first').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img:first').on('load', function() {
    $('img:first').addClass('tasty');
    return;
  });
}

function pressIt() {
  $('input:first').on('keypress', function(key) {
    if ($('input:first').val() === 'g') {
      alert('g');
      return;
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  
});
