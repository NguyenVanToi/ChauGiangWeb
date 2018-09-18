/**
 * Created by toinv-php on 18/09/2018.
 */
$(document).ready(function () {
    $(".drop-menu").hover(function () {
            $(this).addClass("active");
            $(this).children(".line").animate({
                width: '90%'
            });
            $(this).parent(".dropdown").children(".dropdown-content").animate({
                left: '8px'
            })
        },
        function () {
            $(this).removeClass("active");
            $(this).children(".line").animate({
                width: '0%'
            });
            $(this).parent(".dropdown").children(".dropdown-content").animate({
                left: '8px'
            });
        }
    );
    $('.list-item').slick({
        dots: true,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });
})