$(document).ready(function() {
    $("#nav-placeholder").load("nav.html");
    $("#nav-placeholder").on("click", "a", function() {
        $("#nav-placeholder a.active").removeClass("active");
        $(this).addClass("active");
    });
});