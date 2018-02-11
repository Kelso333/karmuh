
$(document).ready(function() {

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  }); // end of click 


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
  
  // Circle glow effect
  
    var glow = $('#circleOne');
    window.setInterval(function() {
      glow.toggleClass('active');
    }, 2000);



}); // end of ready 


