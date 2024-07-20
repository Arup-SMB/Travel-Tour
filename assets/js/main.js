$(".hero-area").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
});
$(".top-destination").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    dots: true,    
    autoplayTimeout: 3000,
    smartSpeed: 750,
});

// Banner Btns
var slider = $(".owl-carousel");

$(".carousel-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".carousel-next").click(function() {
    slider.trigger("next.owl.carousel")
});
