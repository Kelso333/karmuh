
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
  
    var glowOne = $('.circles');
    window.setInterval(function() {
      glowOne.toggleClass('active');
    }, 2000);


  // Show quotes
     
    var quotes = $('.text');
    var quoteIndex = -1;

    function displayNewQuote() {
        $('#firstQuotes p').hide();
        $('#secondQuotes p').hide();
        $('#thirdQuotes p').hide();
        quoteIndex++;
        quotes.eq(quoteIndex % quotes.length)
        .fadeIn(3000)
        .delay(500)
        .fadeOut(1200, displayNewQuote);
      }
    displayNewQuote();



  

}); // end of ready 


