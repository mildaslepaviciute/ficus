if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
}

$(document).ready(function () {
    const loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart

    //Preloader
    const preloaderFadeOutTime = 500
    const minimumPreloaderTime = 2000
    function hidePreloader() {
        var preloader = $('.spinner-wrapper')
        preloader.fadeOut(preloaderFadeOutTime)
    }
    
    const preloadDiff = minimumPreloaderTime - loadTime
    if (preloadDiff > 0) {
        setTimeout(() => {
            hidePreloader()
        }, preloadDiff)
    } else {
        hidePreloader()
    }
})

// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());




$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });