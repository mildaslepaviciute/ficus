var LanguageList = {
    "LT" : "Lietuvių",
    "EN" : "English"
  };
  
  //languages Objects

  var WORDS_LT = {
    text1: "tekstas Vienas",
    text2: "tekstas Du",
    heading1: "ką mes veikiame?"
  };

  var WORDS_EN = {
    text1: "text One",
    text2: "text Two",
    heading1: "what we do?"
  };
  
  
  
  window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#country_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    loadsLanguage("EN");
  }
  
  function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });
  }