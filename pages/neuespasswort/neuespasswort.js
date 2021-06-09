$( document ).ready(function() {
  $('.submit').on('click', function() {
    var pw = $('#password').val();
    var pwConfim = $('#password-confirm').val();

    if (pw != pwConfim) {
      $('.error').removeClass('hidden');
      $('#password').val('')
      $('#password-confirm').val('');
    }

    if (pw.length > 1 && pwConfim.length > 0) {
      if (pw == pwConfim) {
        if (pw.length > 8) {
          window.location.href = "../mails/mails.html";
        }
        else {
          $('.confirm').removeClass('hidden');
          $('.submit').addClass('hidden');
          $('.new').on('click', function() {
            window.location.href = window.location.href;
          });
          $('.definitiv').on('click', function() {
            window.location.href = "../gameover/gameover.html";
          });

        }
      }
    }
  });
})
