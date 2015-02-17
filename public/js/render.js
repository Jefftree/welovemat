
var render = {

  init: function() {
    render.updateDisplay();
    render.genImage();
  },

  //When a user types something, execute this
  updateDisplay: function (){
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
  },

  //When the gen-img button is pressed
  genImage: function() {
    $('.gen-img').click(function (){
      var mathtxt = $('.mathinput').val();
      var text = '<a href="http://latex.codecogs.com/gif.latex?' + mathtxt + '">Link to Img</a>';
      $('.img-link').html(text);
    });
  }


};
$(document).ready(render.init);  