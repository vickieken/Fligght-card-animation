$(document).ready(()=> {
    $(".card").click(function() {
        $(this).toggleClass("active");

        // window.alert("Thanks for booking your flight with Vee Airline, you'll get a mail from us shortly!");
    })

    $(".take-off").click(()=> {
        
        alert("Thanks for booking your flight with Vee Airline, you'll get a mail from us shortly!");

        $(this).toggleClass("active");
    })
})