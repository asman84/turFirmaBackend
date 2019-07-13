$(document).ready(function() {
    var windowHeight = $(window).height();
    var hotelMargin = windowHeight * 0.18;
    var hotelQanotHeight = windowHeight * 0.4;
    var chiqishQanot = hotelQanotHeight * 0.22;

    console.log("windowheight:", windowHeight);
    // $(".test-hotel").marginTop(hotelmargin);
    $(".test-hotel").height(windowHeight - 2 * hotelMargin);
    $('.test-hotel').css('margin-top', hotelMargin);
    $('.test-hotel').css('margin-bottom', hotelMargin);
    $('.hotel-qanot').height(hotelQanotHeight);
    $('.hotel-qanot2').height(hotelQanotHeight);

    anime({
        targets: '.hotel-qanot',
        translateX: -1 * chiqishQanot,
        translateY: -1 * chiqishQanot,
        easing: 'easeInOutSine'
    });
    anime({
        targets: '.hotel-qanot2',
        translateX: chiqishQanot,
        translateY: chiqishQanot,
        easing: 'easeInOutSine'
    });
});

$(document).ready(function() {
    // $(window).scroll(function() {
    //     $(".sticky-head").css("display: none");

    // });

    $(window).scroll(function() {
        var aTop = $('.sticky-head').height();
        if ($(this).scrollTop() >= aTop) {
            alert('header just passed.');
            // instead of alert you can use to show your ad
            // something like $('#footAd').slideup();
        }
    });


});