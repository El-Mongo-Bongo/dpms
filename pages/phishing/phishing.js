$( document ).ready(function() {
  setTimeout(function(){
    $('.mail-popup').removeClass('hidden');
  }, 2000);
  setTimeout(function(){
    $('.mail-popup').addClass('fadein');
  }, 2100);
  setTimeout(function(){
    $('h1').text('Oh eine Mail. Mal schauen was drin steht')
  }, 2600);

  $('.mail-popup').on('click', function() {
    $('.intro-container').addClass('hidden');
    $('.mail-container').removeClass('hidden');
    $('.mail-container').addClass('display');
  });

  $('.negative-link').on('click', function() {
    $('.mail-container').addClass('hidden');
    $('.mail-container').removeClass('display');
    $('.content-container').removeClass('hidden');
    $('.content-container h1').text('Genau so ist es.');
    $('.title').text('Das hat du gut erkannt.');
  });

  $('.positive-link').on('click', function() {
    $('.mail-container').addClass('hidden');
    $('.mail-container').removeClass('display');
    $('.content-container').removeClass('hidden');
    $('.content-container h1').text('Aufgepasst mit solchen Mails!');
    $('.title').text('Phishing ist eine gefährliche Sache');
  });

  $('.mail-link').on('click', function() {
    $('.mail-container').addClass('hidden');
    $('.mail-container').removeClass('display');
    $('.content-container').removeClass('hidden');
    $('.content-container h1').text('Aufgepasst mit solchen Mails!');
    $('.content-container h2').text('Phishing ist eine gefährliche Sache');
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
