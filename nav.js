$(document).ready(function() {
    $("#nav-placeholder").load("nav.html");
    var active = $('#nav-placeholder a.active');
    console.log(active);
    $('#nav-placeholder a.active').removeClass('active').removeAttr('aria-current');
    active = $('#nav-placeholder a.active');
    console.log(active);
    $('a[href="' + location.href + '"]').addClass('active').attr('aria-current', 'page');
    console.log(location.href);
});