$( document ).ready(function() {

  for (var i = 0; i < 40; i++) {
    createPopUp();
  }

  let time = 2000;

  $('.popup-window').each(function() {
    let top = Math.floor(Math.random() * 100).toString() + "%";
    let left = Math.floor(Math.random() * 80).toString() + "%";
    let popup = $(this);

    setTimeout(function(){
      $(popup).css({"left": left, "top": top, "display": "flex"});
    }, time);

    time += 175;
  });

  // close popup when cross is clicked
  $('.popup-close').click(function() {
    $(this).parent().parent().remove();
  });

  // close popup when ok-button is clicked
  $('.popup-button').click(function() {
    $(this).parent().parent().remove();
  });


  function createPopUp() {
    const section = $('body');
    let popup = $('#popup-error').html();

    section.append(popup);
  }
});
