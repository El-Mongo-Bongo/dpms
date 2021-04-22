$( document ).ready(function() {
  var gameover = sessionStorage.getItem("gameover");

  if (gameover == "yes") {
    $('h1').text('Wilkommen zurück');
    $('h2').text('Schade hast du es am Schluss noch versäumt. Aber du kannst gerne nochmals einen Versuch starten.');
  }
  else if (gameover == "no") {
    $('h1').text('Wilkommen zurück');
    $('h2').text('Wir hoffen du hattest Spass und dazu noch was gelernt.');
  }
});
