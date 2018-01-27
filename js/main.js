
$(document).ready(function() {

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });


  // Active link switching

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 2;

      if(sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

    });

  });
});

// Hover circles for quotes

$(document).ready(function() {

  var quote = $('.text');

  quote.hide();

});