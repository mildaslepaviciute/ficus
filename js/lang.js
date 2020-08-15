var LanguageList = {
    "LT" : "LT /",
    "EN" : "EN"
  };

 window.onload = initializeTexts

 function initializeTexts() {
    $.getScript("../content/cms.json", function(res) {
      translations = JSON.parse(res)
      if (translations) {
        Object.keys(translations).forEach(tr => {
          $("." + tr).html(translations[tr])
        })
      }
    })
 }

  var WORDS_LT = {
    text1: "tekstas Vienas",
    text2: "tekstas Du",
    heading1: "Ką mes veikiame?"
  };

  var WORDS_EN = {
    text1: "text One",
    text2: "text Two",
    heading1: "What we do?"
  };
  
  
  
 // window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#country_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    loadsLanguage("LT");
  }
  
  function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });
  }