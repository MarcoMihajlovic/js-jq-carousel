$(document).ready(function() {
    $('.next').click(function() {
        nextSlide();
    });

    $('.prev').click(function() {
        prevSlide();
    });

    $('.fa-circle').click(function() {
        $('i').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');
        id = id.split(" ");
        id = id[1];
        $('.images img.active').removeClass('active');
        $('#number' + id).addClass('active');
    });
});

var n = $('.images img').length;

for (var i = 0; i < n; i++) {
    $(".images img:nth-child(" + (i+1) +")").attr('id', 'number' + (i+1));
}

//Inserisce tanti pallini quanti sono le immagini
for (var i = 0; i < n; i++) {
    if(i == 0){
        $('.nav').append('<i id="circle ' + (i+1) + '" class="fas fa-circle active first"></i>');
    } else if(i == (n-1)){
        $('.nav').append('<i id="circle ' + (i+1) + '" class="fas fa-circle last">');
    } else {
        $('.nav').append('<i id="circle ' + (i+1) + '" class="fas fa-circle"></i>');
    }
}

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