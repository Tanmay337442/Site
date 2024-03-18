$("#nav-placeholder").load("nav.html");
var pathname = window.location.href;
$(".nav-link").attr("class", "nav-link");
$("a[href='" + pathname + "']").attr("class", "nav-link active");