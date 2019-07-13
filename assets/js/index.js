function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function() {
        var obj = this;

        obj.dd.on('click', function(event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

// obj.dd.on('click', function(event) {
//     $(this).toggleClass('active');
//     return false;
// });

// //...

$(function() {

    var dd = new DropDown($('#dd'));

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-1').removeClass('active');
    });
});




(function() {
    var tiltSettings = [
        {},
        {
            movement: {
                imgWrapper: {
                    translation: { x: 10, y: 10, z: 30 },
                    rotation: { x: 0, y: -10, z: 0 },
                    reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                },
                lines: {
                    translation: { x: 10, y: 10, z: [0, 70] },
                    rotation: { x: 0, y: 0, z: -2 },
                    reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                },
                caption: {
                    rotation: { x: 0, y: 0, z: 2 },
                    reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                },
                overlay: {
                    translation: { x: 10, y: -10, z: 0 },
                    rotation: { x: 0, y: 0, z: 2 },
                    reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
                },
                shine: {
                    translation: { x: 100, y: 100, z: 0 },
                    reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                }
            }
        },
        {
            movement: {
                imgWrapper: {
                    rotation: { x: -5, y: 10, z: 0 },
                    reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                },
                caption: {
                    translation: { x: 30, y: 30, z: [0, 40] },
                    rotation: { x: [0, 15], y: 0, z: 0 },
                    reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                },
                overlay: {
                    translation: { x: 10, y: 10, z: [0, 20] },
                    reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                },
                shine: {
                    translation: { x: 100, y: 100, z: 0 },
                    reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
                }
            }
        },
        {
            movement: {
                imgWrapper: {
                    rotation: { x: -5, y: 10, z: 0 },
                    reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                },
                caption: {
                    translation: { x: 20, y: 20, z: 0 },
                    reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
                },
                overlay: {
                    translation: { x: 5, y: -5, z: 0 },
                    rotation: { x: 0, y: 0, z: 6 },
                    reverseAnimation: { duration: 1000, easing: 'easeOutQuad' }
                },
                shine: {
                    translation: { x: 50, y: 50, z: 0 },
                    reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
                }
            }
        },
        {
            movement: {
                imgWrapper: {
                    translation: { x: 0, y: -8, z: 0 },
                    rotation: { x: 3, y: 3, z: 0 },
                    reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                },
                lines: {
                    translation: { x: 15, y: 15, z: [0, 15] },
                    reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                },
                overlay: {
                    translation: { x: 0, y: 8, z: 0 },
                    reverseAnimation: { duration: 600, easing: 'easeOutExpo' }
                },
                caption: {
                    translation: { x: 10, y: -15, z: 0 },
                    reverseAnimation: { duration: 900, easing: 'easeOutExpo' }
                },
                shine: {
                    translation: { x: 50, y: 50, z: 0 },
                    reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
                }
            }
        },
        {
            movement: {
                lines: {
                    translation: { x: -5, y: 5, z: 0 },
                    reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                },
                caption: {
                    translation: { x: 15, y: 15, z: 0 },
                    rotation: { x: 0, y: 0, z: 3 },
                    reverseAnimation: { duration: 1500, easing: 'easeOutElastic', elasticity: 700 }
                },
                overlay: {
                    translation: { x: 15, y: -15, z: 0 },
                    reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                },
                shine: {
                    translation: { x: 50, y: 50, z: 0 },
                    reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
                }
            }
        },
        {
            movement: {
                imgWrapper: {
                    translation: { x: 5, y: 5, z: 0 },
                    reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                },
                caption: {
                    translation: { x: 10, y: 10, z: [0, 50] },
                    reverseAnimation: { duration: 1000, easing: 'easeOutQuart' }
                },
                shine: {
                    translation: { x: 50, y: 50, z: 0 },
                    reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
                }
            }
        },
        {
            movement: {
                lines: {
                    translation: { x: 40, y: 40, z: 0 },
                    reverseAnimation: { duration: 1500, easing: 'easeOutElastic' }
                },
                caption: {
                    translation: { x: 20, y: 20, z: 0 },
                    rotation: { x: 0, y: 0, z: -5 },
                    reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
                },
                overlay: {
                    translation: { x: -30, y: -30, z: 0 },
                    rotation: { x: 0, y: 0, z: 3 },
                    reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                },
                shine: {
                    translation: { x: 100, y: 100, z: 0 },
                    reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
                }
            }
        }
    ];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
            idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
        });
    }

    // Preload all images.
    imagesLoaded(document.querySelector('main'), function() {
        document.body.classList.remove('loading');
        init();
    });

    // REMOVE THIS!
    // For Demo purposes only. Prevent the click event.
    [].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function(el) {
        el.addEventListener('click', function(ev) { ev.preventDefault(); });
    });

    var pater = document.querySelector('.pater'),
        paterSVG = pater.querySelector('.pater__svg'),
        pathEl = paterSVG.querySelector('path'),
        paths = { default: pathEl.getAttribute('d'), active: paterSVG.getAttribute('data-path-hover') };

    pater.addEventListener('mouseenter', function() {
        anime.remove(pathEl);
        anime({
            targets: pathEl,
            d: paths.active,
            duration: 400,
            easing: 'easeOutQuad'
        });
    });

    pater.addEventListener('mouseleave', function() {
        anime.remove(pathEl);
        anime({
            targets: pathEl,
            d: paths.default,
            duration: 400,
            easing: 'easeOutExpo'
        });
    });
});

$(document).ready(function() {
    $(".slick").slick({
        slidesToShow: 1,
        fade: true
    });
});

$(document).ready(function() {
    $(".owl-carousel").on("initialized.owl.carousel", () => {
        setTimeout(() => {
            $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
            $("section").show();
        }, 200);
    });

    const $owlCarousel = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [
            '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
            '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
        ]
    });

    $owlCarousel.on("changed.owl.carousel", e => {
        $(".owl-slide-animated").removeClass("is-transitioned");

        const $currentOwlItem = $(".owl-item").eq(e.item.index);
        $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

        const $target = $currentOwlItem.find(".owl-slide-text");
        doDotsCalculations($target);
    });

    $owlCarousel.on("resize.owl.carousel", () => {
        setTimeout(() => {
            setOwlDotsPosition();
        }, 50);
    });

    /*if there isn't content underneath the carousel*/
    //$owlCarousel.trigger("refresh.owl.carousel");

    setOwlDotsPosition();

    function setOwlDotsPosition() {
        const $target = $(".owl-item.active .owl-slide-text");
        doDotsCalculations($target);
    }

    function doDotsCalculations(el) {
        const height = el.height();
        const { top, left } = el.position();
        const res = height + top + 20;

        $(".owl-carousel .owl-dots").css({
            top: `${res}px`,
            left: `${left}px`
        });
    }
});