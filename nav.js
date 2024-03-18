$("#nav-placeholder").load("nav.html");
$(document).ready(function(){
    $(".nav-link").attr("class", "nav-link");
    $(this).attr("class", "nav-link active");
});
const element = document.getElementsByClassName("nav-link active");
console.log(element);