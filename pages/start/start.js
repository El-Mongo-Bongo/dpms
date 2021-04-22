$( document ).ready(function() {
  $('.video-container video').bind('ended', function(){
     $(this).parent().addClass('fadeout');
     setTimeout(function(){
       $('.video-container').addClass('hidden');
     }, 510);
     setTimeout(function(){
       $('.content-container').removeClass('hidden');
     }, 600);
     setTimeout(function(){
       $('.content-container').addClass('fadein');
     }, 610);
     setTimeout(function(){
       $('.popup-antivirus').addClass('fadein');
       $('h1').text('Immer diese mühsamen Antivirus-Updates.. Soll Horst es ausführen?')
     }, 3000);
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
