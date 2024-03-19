$(document).ready(function() {
    $("#nav-placeholder").load("nav.html");
    $('a.active').removeClass('active').removeAttr('aria-current');
    $('a[href="' + location.pathname + '"]').addClass('active').attr('aria-current', 'page'); 
});