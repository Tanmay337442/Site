$(document).ready(function() {
    $("#nav-placeholder").on("click", "a", function() {
        $("#nav-placeholder a.active").removeClass("active");
        $(this).addClass("active");
    });
});