// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

let sum;

$("#analytics").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#responsive").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#seo").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#cms").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#video").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#maps").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#messenger").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#feed").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});

$("#form").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
});



$(".next-step").click(function(){
    $(this).css("display", "none");
});

$(".laststep-btn").click(function(){
    $(".submit-btn").removeClass("d-none");
    $(".submit-btn").addClass("d-flex");
    console.log("paspausta");
});

$("#calculate-btn").click(function(){
    if ($(this).hasClass("is-shown")) {
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




function hoverAnalytics(element) {
    element.setAttribute('src', '../img/icon-googleanalytics-c.png');
  }
  
function unhoverAnalytics(element) {
    element.setAttribute('src', '../img/icon-googleanalytics.png');
  }



  


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
