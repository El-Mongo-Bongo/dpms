$( document ).ready(function() {
  $('.video-container video').bind('ended', function(){
     $(this).parent().addClass('fadeout');
     setTimeout(function(){
       $('.video-container').css({'display': 'none'});
     }, 1100);
     setTimeout(function(){
       $('.end').removeClass('hidden');
     }, 1200);
     setTimeout(function(){
       $('.end').addClass('fadein');
     }, 1300);

     setTimeout(function(){
       $('.fade1').addClass('show');
     }, 500);

     setTimeout(function(){
       $('.fade2').addClass('show');
     }, 2500);

     $('.fade2').on('click', function() {
       sessionStorage.setItem("gameover", "no");
     });
  });
})
