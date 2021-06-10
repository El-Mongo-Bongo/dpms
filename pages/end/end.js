$( document ).ready(function() {
     $(this).parent().addClass('fadeout');
     setTimeout(function(){
       $('.video-container').css({'display': 'none'});
     }, 1100);
     setTimeout(function(){
       $('.end').removeClass('hidden');
     }, 1200);
     setTimeout(function(){
       $('.end').addClass('fadein');
     }, 1300);

     setTimeout(function(){
       $('.fade1').addClass('show');
     }, 500);

     setTimeout(function(){
       $('.fade2').addClass('show');
     }, 2500);

     // fall down
     setTimeout(function(){
      $('img').solitaireVictory();
    }, 500);

    setTimeout(function(){
      $('#placeholder-gif').prepend('<img class="fall" id="gif" src="../../ressources/images/space-cadet.gif">');
      $('#gif').solitaireVictory();
    }, 5500);

    setTimeout(function(){
      $('#placeholder-jpg1').prepend('<img class="fall" id="jpg1" src="../../ressources/images/mspaint.jpg">');
      $('#jpg1').solitaireVictory();
    }, 7500);

    setTimeout(function(){
      $('#placeholder-jpg2').prepend('<img class="fall" id="jpg2" src="../../ressources/images/mines.jpg">');
      $('#jpg2').solitaireVictory();
    }, 9500);

    setTimeout(function(){
      $('#placeholder-jpg3').prepend('<img class="fall" id="jpg3" src="../../ressources/images/Windows_Logo_old.png">');
      $('#jpg3').solitaireVictory();
    }, 10500);

    setTimeout(function(){
      $('#placeholder-jpg4').prepend("<div class='window fall' id='jpg4'><div class='title-bar'><div class='title-bar-text'>Error</div></div><div class='window-body'><div class='error-text'>filename.exe - System Error</div><div class='popup-middle'><div class='error-warning'>&#10060;</div><div class='error-text'>Error - System not reacting! What did you do?!?1!</div></div><div class='popup-lower'><button class='popup-button' onclick='play()'>OK</button></div></div></div></div></div>");
      $('#jpg4').solitaireVictory();
    }, 11500);

     $('.fade2').on('click', function() {
       sessionStorage.setItem("gameover", "no");
     });
   
})

// src https://github.com/peterkhayes/solitaireVictory
(function( $ ) {

  $.fn.solitaireVictory = function(settings) {

      settings = settings || {};

      var g = settings.g || -3;
      var dt = settings.dt || 20;
      var bounce = settings.bounce || 0.7;
      var endVelocity = settings.endVelocity || 20;
      var stagger = settings.stagger || 200;
      var relativeToDocument = settings.relativeToDocument || false;
      var clear = settings.clear || false;
      var fallToLeft = settings.fallToLeft || false;

      var body = $('body');
      var windowHeight = (relativeToDocument ? $(document).height() : $(window).height());

      var fallIteration = function(elem, elemHeight, oldPos, dx, dy) {
          var copy = elem.clone();
          body.append(copy);

          var newTop = Math.min(windowHeight - elemHeight, oldPos.top + dy);
          var newPos = {
              left: oldPos.left + dx,
              top: newTop
          };
          copy.offset(newPos);
          if (Math.abs(newTop - (windowHeight - elemHeight)) < 5) {
              if (dy < 0 || dy > endVelocity) {
                  dy *= -1*bounce;
                  setTimeout(function() {
                      fallIteration(copy, elemHeight, newPos, dx, dy);
                  }, dt);
              }
          } else {
              dy = dy - g;
              setTimeout(function() {
                  fallIteration(copy, elemHeight, newPos, dx, dy);
              }, dt);
          }
      };

      var startFall = function(elem, height, stagger) {
          var dx = settings.dx || Math.floor((Math.random()*10)) + 5;
          if (fallToLeft) {
              dx = -dx;
          }
          var copy = elem.clone();
          copy.addClass('solitaire-victory-clone');
          if (relativeToDocument) {
              copy.css('position', 'absolute');
          } else {
              copy.css('position', 'fixed');
          }
          var originalOffset = elem.offset();
          copy.offset({top: originalOffset.top, left: originalOffset.left});
          body.append(copy);
          setTimeout(function() {fallIteration(copy, height, copy.offset(), dx, 0);}, stagger);
      };

      if (clear) $('.solitaire-victory-clone').remove();

      this.each(function(index) {
          var obj = $(this);
          if (relativeToDocument || obj.offset().top < $(window).height()) {
              if (!obj.hasClass('solitaire-victory-clone')) {
                  startFall(obj, obj.height(), index*stagger);
              }
          }
      });
  };

}( jQuery ));