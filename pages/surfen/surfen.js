$( document ).ready(function() {
    $('.confirm-link').on('click', function() {
      $('.confirm-meme').removeClass('hidden');

      setTimeout(function(){
        $('.intro-container').addClass('hidden');
        $('.content-container').removeClass('hidden');
        $('.content-container h1').text('Gute Wahl. Das weiss jemand bereits so einiges über Datensicherheit.');
      }, 1000);

      setTimeout(function(){
        $('.confirm-meme').addClass('hidden');
      }, 2000);
    });

    $('.denie-link').on('click', function() {
      $('.denie-meme').removeClass('hidden');

      setTimeout(function(){
        $('.intro-container').addClass('hidden');
        $('.content-container').removeClass('hidden');
        $('.content-container h1').text('Das war jetzt aber auch keine einfache Entscheidung.');
      }, 1000);

      setTimeout(function(){
        $('.denie-meme').addClass('hidden');
      }, 2000);
    });

    $('.textlink').on('click', function() {
      $(this).addClass('link-active');
      $('.audiolink').removeClass('link-active');
      $('.theorieaudio').addClass('hidden');
      $('.theorietext').removeClass('hidden');
    });
    $('.audiolink').on('click', function() {
      $(this).addClass('link-active');
      $('.textlink').removeClass('link-active');
      $('.theorietext').addClass('hidden');
      $('.theorieaudio').removeClass('hidden');
    })
});
