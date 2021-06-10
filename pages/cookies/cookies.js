$( document ).ready(function() {
  setTimeout(function(){
    $('.cookie-wrapper').removeClass('hidden')
  }, 2000);
  setTimeout(function(){
    $('.cookie-wrapper').addClass('cookie-wrapper-right')
    $('#cookiesound').get(0).play();
  }, 2100);
  setTimeout(function(){
    $('.cookie-wrapper').addClass('hidden');
  }, 5000);
  setTimeout(function(){
    $('.subintro-container').removeClass('hidden');
  }, 5700);
  setTimeout(function(){
    $('.subintro-container').addClass('fadein');
  }, 5000);

  $('.accept-link').on('click', function() {
    $('.confirmed').removeClass('hidden');

    setTimeout(function(){
      $('.intro-container').addClass('hidden');
      $('.content-container').removeClass('hidden');
      window.scrollTo(0, 0);
    }, 1000);

    setTimeout(function(){
      $('.accept-meme').addClass('hidden');
    }, 2000);
  });

  $('.decline-link').on('click', function() {
    $('.denied').removeClass('hidden');

    setTimeout(function(){
      $('.intro-container').addClass('hidden');
      $('.content-container').removeClass('hidden');
      window.scrollTo(0, 0);
    }, 1000);

    setTimeout(function(){
      $('.decline-meme').addClass('hidden');
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
