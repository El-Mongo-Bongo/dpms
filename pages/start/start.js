$( document ).ready(function() {
     setTimeout(function(){
       $('.content-container').removeClass('hidden');
     }, 1200);
     setTimeout(function(){
       $('.content-container').addClass('fadein');
     }, 1300);
     setTimeout(function(){
       $('.clippit').addClass('fadein');
     }, 2000);
     setTimeout(function(){
       $('.window').addClass('fadein');
     }, 5000);
      $('.update-now').on('click', function() {
        sessionStorage.setItem("update", "yes");
        window.location.href = "../update/update.html";
      });
      $('.update-later').on('click', function() {
        sessionStorage.setItem("update", "no");
        window.location.href = "../update/update.html";
      });


      var width = $(window).width();
      if (width < 993) {
        $('.draggableClass').removeAttr('id')
      }
});

$(window).resize(function() {
  var width = $(window).width();

  if (width < 993) {
    if ($('#draggable').length) {
      $('.draggableClass').removeAttr('id')
    }
  }
  else {
    if (!$('#draggable').length) {
      $('.draggableClass').attr('id', 'draggable');
    }
  }
});
