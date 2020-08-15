  var languageList = {
    "lt": "lt",
    "en": "en",
    "ru": "ru"
  }

  window.onload = setTexts()

  $('#country_select').change(() => setTexts())

  $('#a_country_select').click((e) => e.preventDefault())

  function setTexts(e) {
    const lang = $("#country_select option:selected").val()

    $.getScript("../content/cms.json", (res) => {
      const texts = JSON.parse(res)
      if (texts) {
        Object.keys(texts).forEach(t => {
          $("." + t).html(texts[t][lang])
        })
      }
    })
  }
