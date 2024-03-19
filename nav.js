$("#nav-placeholder").load("nav.html");
var active = $('a.active');
console.log(active);
$('a.active').removeClass('active').removeAttr('aria-current');
active = $('a.active');
console.log(active);
$('a[href="' + location.href + '"]').addClass('active').attr('aria-current', 'page');
console.log(location.href);