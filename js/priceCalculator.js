const prices = {
    pricePerPage: 20,
    design: {
        template: 50,
        unique: 100,
    },
    functions: {
        analytics: 10,
        responsive: 40,
        seo: 20,
        video: 10,
        maps: 10,
        messenger: 10,
        form: 40,
        gallery: 30,
        feed: 20,
        languages: 50,
        ssl: 5,
        blog: 40,
    },
    cms: {
        static: 0,
        wordpress: 50,
        other: 40,
    },
    additionals: {
        domain: 10,
        logo: 80,
        visitCard: 40,
        domainEmail: 40,
    }
}

let pagesCount = 0
let selectedDesign = null
let functionsList = []
let selectedCMS = null
let additionalsList = []

setBubble(true)

function setBubble(firstTime = false) {
    const range = $("#page-amount")
    const bubble = $("#bubble")

    const val = firstTime ? 1 : range.val()
    const min = range.attr('min')
    const max =  range.attr('max')
    bubble.text(val)
    pagesCount = val

    const offset = Number(((val - min) * 100) / (max - min))
    bubble.css("left", `calc(${offset}% - 14px)`)
}

$("#page-amount").on('input', function () {
    setBubble()
    setPrice()
});

$('#step-2-button').click(function(){
    selectedDesign = $('input[name="select-design"]:checked').val()
    setPrice()
})


//select design radio changed event
$('#step-2').change(() => { 
    selectedDesign = $('input[name="select-design"]:checked').val()
    setPrice()
})

//add functions to active functions array, change style and invoke price recalculation
$("#step-3").find("img").click(function() {
    if ($(this).hasClass("unselected-feature")) {
        functionsList.push(this.id)
        $(this).removeClass("bg-light");
        $(this).addClass("bg-secondary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        functionsList = functionsList.filter(f => f !== this.id)
        $(this).removeClass("bg-secondary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
    setPrice()
})

$('#step-4-button').click(function(){
    selectedCMS = $('input[name="select-cms"]:checked').val()
    setPrice()
})

//select cms radio changed event
$('#step-4').change(() => { 
    selectedCMS = $('input[name="select-cms"]:checked').val()
    setPrice()
})


//add additionals to active additionals array, and invoke price recalculation
$("#step-5").find("input").change(function() {
    const isChecked = $(this).is(":checked")
    if (isChecked) {
        additionalsList.push(this.id)
    } else {
        additionalsList = additionalsList.filter(f => f !== this.id)
    }
    setPrice()
})

//recalculates price
function setPrice() {
    const priceForPages = prices.pricePerPage * pagesCount
    const priceForDesign = selectedDesign && prices.design[selectedDesign]
    const priceForFunctions = functionsList.length > 0 ? functionsList.reduce((price, funcName) => {
        const priceForFunction = prices.functions[funcName]
        return priceForFunction && !isNaN(priceForFunction) ? price + priceForFunction : price
    }, 0) : 0
    const priceForCms = selectedCMS && prices.cms[selectedCMS]
    const priceForAdditionals = additionalsList.length > 0 ? additionalsList.reduce((price, addName) => {
        const priceForAdditional = prices.additionals[addName]
        return priceForAdditional && !isNaN(priceForAdditional) ? price + priceForAdditional : price
    }, 0) : 0

    const totalPrice = priceForPages + priceForDesign + priceForFunctions + priceForCms + priceForAdditionals
    $("#total-price").text(totalPrice)
    $("#total-price-sticky").text(totalPrice)
}