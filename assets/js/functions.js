/* -----------------------------------------------------
  Pure CSS Progress Bars
  GitHub Project: https://github.com/rkchauhan/pure-css-progress-bars/
  By: Ravikumar Chauhan
  Find me on -
  Twitter: https://twitter.com/rkchauhan01
  Facebook: https://www.facebook.com/ravi032chauhan
  GitHub: https://github.com/rkchauhan
  CodePen: http://codepen.io/rkchauhan
-------------------------------------------------------- */
$(document).ready(function() {

  $('#example-1').progress_fnc();
  $('#example-2').progress_fnc();
  $('#example-3').progress_fnc();
  $('#example-4').progress_fnc();
  $('#example-5').progress_fnc();
  $('#example-6').progress_fnc();
  $('#example-7').progress_fnc();
  $('#example-8').progress_fnc();
  $('#example-9').progress_fnc();
  $('#example-10').progress_fnc();
  $('#example-11').progress_fnc();
  $('#example-12').progress_fnc();
  $('#example-13').progress_fnc();

  $('.progressStart').on('click', function() {
    var perent = $(this).closest("div").attr("id");
    $('#' + perent).progress_fnc({ type: 'start' });
  });

  $('.progressReset').on('click', function() {
    var perent = $(this).closest("div").attr("id");
    $('#' + perent).progress_fnc({ type: 'reset' });
  });

});


(function($) {

  $.fn.progress_fnc = function(options) {
    var settings = $.extend({
      type: 'start'
    }, options);

    var div = $(this);
    var progress = div.find('.cssProgress');

    progress.each(function() {
      var self = $(this);
      var progress_bar = self.find('.cssProgress-bar');
      var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
      var progress_value = progress_bar.data('percent');
      var percentage = parseInt(progress_value, 10) + '%';

      progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});

      if(settings.type == 'start') {

        progress_bar.animate({
          width: percentage
        }, {
          duration: 1000,
          step: function(x) {
            progress_label.text(Math.round(x) + '%');
          }
        });
        
      } else if(settings.type == 'reset') {
        progress_bar.css('width', '0%');
        progress_label.text('0%');
      }

    });
  }

}(jQuery));
