$("#nav-placeholder").load("nav.html");

$(document).ready(function(){
    var pathname = window.location.pathname;
    $(".nav-link active").attr("class", "nav-link");
    $("a[href='" + pathname + "']").attr("class", "nav-link active");
});

console.log(pathname)