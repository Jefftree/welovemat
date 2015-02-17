var main = function() {
  $('.mathinput').keyup(function() {
    var text = $('.mathinput').val();
    var done = function (){
      $('.mathguy').show();
    }
    $('.mathguy').hide();
    if (text==""){
      $('.mathguy').text("");
    } else {
      $('.mathguy').text("$"+text+"$");
      MathJax.Hub.Queue(
        ["Typeset",MathJax.Hub],
        ["",done]);
    }
    

  });
}
$(document).ready(main);  