const prices = {
    pricePerPage: 20,
    design: {
        template: 100,
        unique: 200,
    },
    functions: {
        analytics: 20,
        responsive: 5000,
        seo: 30,
        video: 20,
        maps: 20,
        messenger: 20,
        form: 20,
        form2: 20,
        feed: 20,
        languages: 20
    },
    cms: {
        static: 0,
        wordpress: 100,
        other: 50
    },
    additionals: {
        domain: 10,
        logo: 50,
        visitCard: 30,
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
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        functionsList = functionsList.filter(f => f !== this.id)
        $(this).removeClass("bg-primary");
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
