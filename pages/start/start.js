$( document ).ready(function() {
  $('.video-container video').bind('ended', function(){
     $(this).parent().addClass('fadeout');
     setTimeout(function(){
       $('.video-container').addClass('hidden');
     }, 1100);
     setTimeout(function(){
       $('.content-container').removeClass('hidden');
     }, 1200);
     setTimeout(function(){
       $('.content-container').addClass('fadein');
     }, 1300);
     setTimeout(function(){
       $('.window').addClass('fadein');
     }, 4000);
     setTimeout(function(){
       $('.window').addClass('fadein');
     }, 4000);
     //setTimeout(function(){
    //   $('h1').text('Immer diese mühsamen Antivirus-Updates.. Soll Horst es ausführen?')
    // }, 5000);
  });

  $('.update-now').on('click', function() {
    sessionStorage.setItem("update", "yes");
    window.location.href = "../update/update.html";
  });
  $('.update-later').on('click', function() {
    sessionStorage.setItem("update", "no");
    window.location.href = "../update/update.html";
  });
});
