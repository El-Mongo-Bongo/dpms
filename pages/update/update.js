$( document ).ready(function() {
    var update = sessionStorage.getItem("update");

    if (update == "yes") {
      $('.container').removeClass('hidden');
      window.scrollTo(0, 0);
    }
    else if (update == "no") {
      for (var i = 0; i < 40; i++) {
        createPopUp();
      }

      let popups = 0;
      let time = 0;
      let maxLeft = $(window).width() - $('.popup-window').width();
      let maxTop = $(window).height() - $('.popup-window').height();
      $('#wait').get(0).play();
      $('.clip_start').addClass('hidden');
      $('.update').addClass('hidden');
      setTimeout(function(){
        $('.clip_error').removeClass('hidden')
      }, 3000);



      $('.popup-window').each(function() {
        let top = Math.floor(Math.random() * maxTop).toString() + "px";
        let left = Math.floor(Math.random() * maxLeft).toString() + "px";
        let popup = $(this);

        setTimeout(function(){
          $(popup).css({"left": left, "top": top, "display": "flex"});
        }, time);

        time += 175;
      });



      // close popup when ok-button is clicked
      $('.popup-button').click(function() {
        $(this).parent().parent().parent().parent().parent().remove();
        popups += 1;

        if (popups == 40) {
          $('.clip_start').removeClass('hidden');
          $('.container').removeClass('hidden');
          window.scrollTo(0, 0);
        }

        if (popups == 0) {

        }
      });



      $('.ok').on('click', function() {
        $('.clip_error').addClass('hidden');
      });

      function createPopUp() {
        const section = $('body');
        let popup = $('#popup-error').html();

        section.append(popup);
      }
    }
    else {
      // HIER NOCH ERGÄNZEN WENN MANN EINFACH SO INS SPIEL EINSTEIGT
      console.log("other");
    }

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
