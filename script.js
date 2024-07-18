$('document').ready(function() {
    $('#nav-mini-button').click(function() {
        $('.mini-links').toggleClass('mini-links-active');
        $('#nav-mini-button').toggleClass('nav-mini-button-active');
    });
});