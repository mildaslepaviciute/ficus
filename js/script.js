// Get the current year for the copyright 
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

$('#year').text(new Date().getFullYear());

$(".next-step").click(function(){
    $(this).css("display", "none");
});

$(".laststep-btn").click(function(){
    $(".submit-btn").removeClass("d-none");
    $(".submit-btn").addClass("d-flex");
});

$("#calculate-btn").click(function(){
    if ($(this).hasClass("is-s wn")) {
        $("#price-card").removeClass("d-block");
        $("#price-card").addClass("d-none");
        $(this).removeClass("is-shown");
        $(this).text('Skaičiuoti kainą');
    } else {
        $("#price-card").removeClass("d-none");
        $("#price-card").addClass("d-block");
        $(this).addClass("is-shown");
        $(this).text('Suskleisti');
    }

});

$("#price-card-close").click(function(){
    $("#price-card").removeClass("d-block");
    $("#price-card").addClass("d-none");
});

$('.SeeMore2').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('See More');         
    } else {
        $this.text('Suskleisti');
    }
});




$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();



$('[tabindex]').focus(function()
{
    $(this).css('outline', 'none');
});
$('[tabindex]').keyup(function (event)
{
    if(event.keyCode == 9)
    {
        $(this).css('outline', '');
    }
});


  


// Hide the contents until the burger menu finishes sliding in from the left
var content = document.getElementsByTagName("main")[0];
content.style.visibility = "hidden";

var sidebar = document.getElementsByClassName("sidebar")[0];

var lowerLayerBurger = document.getElementsByClassName("menu-toggler__line")[2];
lowerLayerBurger.addEventListener("animationend", function(evt) {
  content.style.visibility = "visible";
});

// Add click listeners to the menu on the sidebar
document.getElementsByTagName("ul")[0].addEventListener("click", function(evt) {
  // when a menu item is clicked hide the sidebar by unchecking the input
  document.getElementById("menuToggler").checked = false;

  function handleTransitionEnd(transitionEvent) {
    
    // show the correct content based on the target of the menu item
    // first hide everything
    var contentDivs = document.querySelectorAll("main div");
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = "none";
    }

    // show the correct div
    var contentId = evt.srcElement.hash;
    var contentDiv = document.getElementById(contentId.substr(1));
    contentDiv.style.display = "inherit";
    
    // remove listener
    sidebar.removeEventListener("transitionend", handleTransitionEnd);
  }
  
  sidebar.addEventListener("transitionend", handleTransitionEnd);
});


// FIXED NAVBAR

$(document).ready(function() {
    $('.js--sticky-navbar-start-point').waypoint(function(direction) {
        if (direction == "down") {
            console.log("labas");
            $('#navbar-sticky').removeClass('d-none');
             $('#navbar-sticky').addClass('fixed-top');
        } else {
            $('#navbar-sticky').removeClass('fixed-top');
            $('#navbar-sticky').addClass('d-none');
        }
    });
});



