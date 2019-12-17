/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Animation ------------------------------- */

(function ($) {
    $(document).ready(function () {

        /* ------------------------------- .animate() ------------------------------- */

        $('.btnBigDiv').on('click', function () {
            $('.box').animate({ 'width': '500px' }, 1000)
        });

        $('.btnBigText').on('click', function () {
            $('.box').animate({ 'font-size': '30px' }, 1000)
        });

        $('.btnMoveDiv').on('click', function () {
            $('.box')
                .css('position', 'relative')
                .animate({
                    'left': '500px'
                }, 1000)
        });

        $('.refresh').on('click', function () {
            $('.box')
                //.css('position', 'static')
                .animate({
                    'width': '250px',
                    'font-size': '1rem',
                    'left': '0px',

                }, () => $('.box').css('position', 'static'))
        })


        /* -------------------------------- Exercice -------------------------------- */


        /* --------------------------------- Enoncé --------------------------------- */

        // 1 button avec les 3 actions en même temps
        // 1 buton avec les 3 action à la suite anim fin anim 
        // 1 button à chaque click elle se déplace 
        // 1 button tout à droite stop
        // 1 button tout à droite faire vers la gauche - en marche arrière 

        /* -------------------------------- Solution -------------------------------- */

        /* ------------------------------- Exercice 1 ------------------------------- */

        $('.animateAll').on('click', function () {
            $('.box2')
                .css('position', 'relative')
                .animate({
                    'width': '500px',
                    'font-size': '30px',
                    'left': '500px'
                }, 500)
        });


        /* ------------------------------- Exercice 2 ------------------------------- */

        $('.animateOnce').on('click', function () {
            $('.box2')
                .animate({
                    'width': '500px'
                }, function () {
                    $('.box2')
                        .animate({
                            'font-size': '30px'
                        }, function () {
                            $('.box2')
                                .css('position', 'relative')
                                .animate({
                                    'left': '500px'
                                })
                        })
                })
        })

        // ANOMALIE cela fonctionne mais on n'est pas sur qu'il attende la fin de l'animation
        // $('.animateOnce').on('click', function () { 
        //     $('.box2')
        //         .animate({ 'width': '500px' })
        //         .animate({ 'font-size': '30px' })
        //         .animate({ 'left': '500px' })
        // })


        /* ------------------------------- Exercice 3 ------------------------------- */

        var left = 200;
        $('.keepMoving').on('click', function () {
            $('.box2')
                .css('position', 'relative')
                .animate({
                    'left': left + 'px'
                });
            left += 200;

        });

        /* ------------------------------- Exercice 4 ------------------------------- */

        // var largeur = window.innerWidth; //vanilla
        var largeur = $(window).width; //Jquery

        $('.keepMovingRight').on('click', function () {
            $('.box2')
                .css('position', 'relative')
            if (left < largeur) {
                $('.box2')
                    .animate({
                        'left': left + "px"
                    })
                left += 200;
            } else {
                $('.box2')
                    .animate({
                        'left': '0px'
                    })

            }

        })

        /* ------------------------------- Exercice 5 ------------------------------- */

        var direction = true; // true va vers la droite et false va vers la gauche 

        $('.keepMovingRightLeft').on('click', function () {
            $('.box2')
                .css('position', 'relative');
            if (left < largeur && direction) {
                $('.box2')
                    .animate({
                        'left': left + "px"
                    });
                left += 200;
            } else if (left > largeur && direction) {
                direction = false;
                $('.box2')
                    .animate({
                        'left': left + "px"
                    });
                left -= 200;
            } else if (left > 0 && !direction) {
                $('.box2')
                    .animate({
                        'left': left + "px"
                    });
                left -= 200;
            } else {
                direction = true;
                $('.box2')
                    .animate({
                        'left': left + "px"
                    });
                left += 200;
            }

        });

        /* ------------------------------ Bouton reset ------------------------------ */


        $('.reset').on('click', function () {
            $('.box2')
                .animate({
                    'left': '0px',
                    'width': '250px',
                    'font-size': '1rem'
                })
            left = 200;

        })

    });

})(jQuery);