$( document ).ready(function() {
  setTimeout(function(){
    $('.window').removeClass('hidden');
  }, 2000);
  setTimeout(function(){
    $('.clippit').removeClass('hidden');
  }, 3000);
  setTimeout(function(){
    $('.window').addClass('fadein');
  }, 2100);


  $('.window').on('click', function() {
    $('.intro-container').addClass('hidden');
    $('.mail-container').removeClass('hidden');
    $('.mail-container').addClass('display');
    $('.warntext').removeClass('hidden');
    $('.options').removeClass('hidden');
  });

  $('.negative-link').on('click', function() {
    $('.mail-container').addClass('hidden');
    $('.mail-container').removeClass('display');
    $('.starttext').addClass('hidden');
    $('.warntext').addClass('hidden');
    $('.options').addClass('hidden');
    $('.content-container').removeClass('hidden');
    window.scrollTo(0, 0);
  });

  $('.positive-link').on('click', function() {
    $('.content-container').removeClass('hidden');
    $('.first').addClass('hidden');
    $('.second').removeClass('hidden');
    window.scrollTo(0, 0);
  });

  $('.mail-link').on('click', function() {
    $('.content-container').removeClass('hidden');
    $('.starttext').addClass('hidden');
    $('.warntext').addClass('hidden');
    $('.first').addClass('hidden');
    $('.second').removeClass('hidden');

    window.scrollTo(0, 0);
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
})
