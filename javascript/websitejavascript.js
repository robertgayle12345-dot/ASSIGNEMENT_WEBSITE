// Reads the cake choices from the URL and displays them on the page
function showOrderSummary() {

    // Get everything after the ? in the URL
    var params = new URLSearchParams(window.location.search);

    // Read each value by its name
    var size     = params.get("cakesize")     || "Not selected";
    var flavour  = params.get("cakeflavour")  || "Not selected";
    var frosting = params.get("cakefrosting") || "Not selected";
    var message  = params.get("customization")|| "None";

    // Read the toppings checkboxes
    var sprinkles = params.get("setsprinkles") === "yes" ? "Yes" : "No";
    var candles   = params.get("setcandles")   === "yes" ? "Yes" : "No";
    var berries   = params.get("setberries")   === "yes" ? "Yes" : "No";
    var drip      = params.get("setdrip")      === "yes" ? "Yes" : "No";

    // Write everything into the summary spans on the page
    document.getElementById("sum-size").innerText      = size;
    document.getElementById("sum-flavour").innerText   = flavour;
    document.getElementById("sum-frosting").innerText  = frosting;
    document.getElementById("sum-message").innerText   = message;
    document.getElementById("sum-sprinkles").innerText = sprinkles;
    document.getElementById("sum-candles").innerText   = candles;
    document.getElementById("sum-berries").innerText   = berries;
    document.getElementById("sum-drip").innerText      = drip;
}

// Run automatically as soon as the page loads
window.onload = showOrderSummary;

function ClearForm() {

    // Clear all the text inputs
    document.getElementById("Fullname").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("CardHolderName").value = "";
    document.getElementById("CardNumber").value = "";
    document.getElementById("CVV").value = "";
    document.getElementById("inquiry").value = "";

    // Clear the address input
    document.querySelector("input[placeholder='📌 place address here']").value = "";

    // Uncheck both radio buttons
    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;

    // Reset payment dropdown back to first option
    document.getElementById("Payment").selectedIndex = 0;
}

// Clears all selections on the cake design page
function ClearCakeForm() {

    // Uncheck all radio buttons — size, flavour and frosting
    var radios = document.querySelectorAll("input[type='radio']");
    radios.forEach(function(radio) {
        radio.checked = false;
    });

    // Uncheck all topping checkboxes
    document.getElementById("sprinkles").checked = false;
    document.getElementById("candles").checked   = false;
    document.getElementById("berries").checked   = false;
    document.getElementById("drip").checked      = false;

    // Clear the special request textarea
    document.getElementById("floatingTextarea2").value = "";
}

$(function() {
    var current = window.location.pathname;
    $('.nav-link').each(function() {
        var $this = $(this);
        // if the link's href is found within the current URL
        if (current.includes($this.attr('href'))) {
            $this.addClass('active');
            $this.attr('aria-current', 'page');
        }
    });
});