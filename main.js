$(document).ready(function() {
    $('.next').click(function() {
        nextSlide();
    });

    $('.prev').click(function() {
        prevSlide();
    });
});

function prevSlide() {
    var showImage = $('.images img.active');
    var showDot = $('.nav i.active');

    showImage.removeClass('active');
    showDot.removeClass('active');

    if (showImage.hasClass('first')) {
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        showImage.prev('img').addClass('active');
        showDot.prev('i').addClass('active');
    }
}

function nextSlide() {
    var showImage = $('.images img.active');
    var showDot = $('.nav i.active');

    showImage.removeClass('active');
    showDot.removeClass('active');

    if (showImage.hasClass('last')) {
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    } else {
        showImage.next('img').addClass('active');
        showDot.next('i').addClass('active');
    }
}