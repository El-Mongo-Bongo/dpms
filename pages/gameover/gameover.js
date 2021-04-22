$( document ).ready(function() {
  setTimeout(function(){
    $('.fade1').addClass('show');
  }, 500);

  setTimeout(function(){
    $('.fade2').addClass('show');
  }, 2500);

  setTimeout(function(){
    $('.fade3').addClass('show');
  }, 4500);

  setTimeout(function(){
    $('.fade4').addClass('show');
  }, 6500);

  $('.fade4').on('click', function() {
    sessionStorage.setItem("gameover", "yes");
  });
})
