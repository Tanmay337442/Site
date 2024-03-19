$(document).ready(function() {
    $("#nav-placeholder").load("nav.html");
    var active = $('a.active');
    console.log(active);
    $('a.active').removeClass('active').removeAttr('aria-current');
    $('a[href="' + window.location.href + '"]').addClass('active').attr('aria-current', 'page');
    console.log(window.location.href);
});