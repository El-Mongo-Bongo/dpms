$( document ).ready(function() {
  $('.login-forgot').on('click', function() {
    $('.intro-container').addClass('hidden');
    $('.content-container').removeClass('hidden');
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
