
$(document).ready(function() {
  $('.mast').waypoint(function() {
      $('.mast p.mast_text span').addClass('letter-glow');
      $('.mast_text').removeClass('mast-text-initial');
    }, {
      offset: '75%'
  });
});

(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);
