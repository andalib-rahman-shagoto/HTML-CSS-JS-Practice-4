$('document').ready(function() {
    $('#nav-mini-button').click(function() {
        $('.mini-links').toggleClass('mini-links-active');
        $('#nav-mini-button').toggleClass('nav-mini-button-active');
    });

    $('#doc-dot1').click(function(){
        $('#doc-dot1').toggleClass('doc-dot-active');
        $('#doc-dot2').removeClass('doc-dot-active');
        $('#doc-dot3').removeClass('doc-dot-active');
        $('#doc-dot4').removeClass('doc-dot-active');
    });

    $('#doc-dot2').click(function(){
        $('#doc-dot2').toggleClass('doc-dot-active');
        $('#doc-dot1').removeClass('doc-dot-active');
        $('#doc-dot3').removeClass('doc-dot-active');
        $('#doc-dot4').removeClass('doc-dot-active');
    });

    $('#doc-dot3').click(function(){
        $('#doc-dot3').toggleClass('doc-dot-active');
        $('#doc-dot1').removeClass('doc-dot-active');
        $('#doc-dot2').removeClass('doc-dot-active');
        $('#doc-dot4').removeClass('doc-dot-active');
    });

    $('#doc-dot4').click(function(){
        $('#doc-dot4').toggleClass('doc-dot-active');
        $('#doc-dot1').removeClass('doc-dot-active');
        $('#doc-dot2').removeClass('doc-dot-active');
        $('#doc-dot3').removeClass('doc-dot-active');
    });
});