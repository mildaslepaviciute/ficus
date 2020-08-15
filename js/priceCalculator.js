let totalPrice = 0

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
        netlify: 50
    },
    additional: {
        logo: 50,
        visitCard: 30,
    }
}

function renewPrice() {
    let price;
}

function addDesign() {
    const selectedDesignOption = $('input[name="select-design"]:checked').val()
    const price = prices.design[selectedDesignOption]
    addPrice(price)
}

function setPrice() {
    $("#total-price").text(totalPrice)
    $("#total-price-sticky").text(totalPrice)
}

function addPrice(price) {
    totalPrice = isNaN(price) ? totalPrice : totalPrice + price
    setPrice()
}

function removePrice(price) {
    totalPrice = isNaN(price) ? totalPrice : totalPrice - price
    setPrice()
}

$("#step-3").find("img").click(function(){
    if ($(this).hasClass("unselected-feature")) {
        addPrice(prices.functions[this.id])
        $(this).removeClass("bg-light");
        $(this).addClass("bg-primary");
        $(this).removeClass("unselected-feature");
        $(this).addClass("selected-feature");
    } else {
        removePrice(prices.functions[this.id])
        $(this).removeClass("bg-primary");
        $(this).addClass("bg-light");
        $(this).addClass("unselected-feature")
        $(this).removeClass("selected-feature")
    }
})

$('#select-design-form').change(function(){
    addDesign()
});
