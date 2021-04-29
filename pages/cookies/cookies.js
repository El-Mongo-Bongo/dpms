$( document ).ready(function() {
  setTimeout(function(){
    $('.cookie-wrapper').removeClass('hidden')
  }, 2000);
  setTimeout(function(){
    $('.cookie-wrapper').addClass('cookie-wrapper-right')
  }, 2100);
  setTimeout(function(){
    $('.cookie-wrapper').addClass('hidden');
  }, 6200);
  setTimeout(function(){
    $('.subintro-container').removeClass('hidden');
  }, 5900);
  setTimeout(function(){
    $('.subintro-container').addClass('fadein');
  }, 6200);

  $('.accept-link').on('click', function() {
    $('.accept-meme').removeClass('hidden');

    setTimeout(function(){
      $('.intro-container').addClass('hidden');
      $('.content-container').removeClass('hidden');
      $('.content-container h1').text('Genau so ist es.');
      window.scrollTo(0, 0);
    }, 1000);

    setTimeout(function(){
      $('.accept-meme').addClass('hidden');
    }, 2000);
  });

  $('.decline-link').on('click', function() {
    $('.decline-meme').removeClass('hidden');

    setTimeout(function(){
      $('.intro-container').addClass('hidden');
      $('.content-container').removeClass('hidden');
      $('.content-container h1').text('Ab und zu muss man einfach mal akzeptieren.');
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
