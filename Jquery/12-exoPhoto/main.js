(function ($) {
    $(document).ready(function () {


        // //Avec cette version le slide n'est plus régulier à partir d'un certain moment

        // $('.slide img').slice(1).hide();  //$('.slide img:gt(0)').hide
        // setInterval(function () {
        //     $('.slide > :first-child').fadeOut(1000).next('img').fadeIn(1500).end().appendTo('.slide');
        //     // $('slide img:first').fadeOut(1000).next().fadeIn(1000).end.appendTo('.slide). //seconde version 
        // }, 2000);

        setInterval(imgRotator, 2000)





    });

    function imgRotator() {
        var currentImg = $('.slide .current');

        var nextImg = currentImg.next();

        if (nextImg.length == 0) { //si  la taille de nextImg est égale à 0
            nextImg = $('.slide img:first')
        };

        currentImg.removeClass('current').addClass('prev');
        nextImg.css('opacity', 0).addClass('current').animate({ 'opacity': 1 }, 1000,
            function () {
                currentImg.removeClass('prev');
            });

    }




})(jQuery);

/* -------------------------------------------------------------------------- */



/* ------------------------------- Vanilla JS ------------------------------- */

// setInterval(imgRotatorVanilla, 2000);

// function imgRotatorVanilla() {
//     var currentImg = document.querySelector('.current'); // je stocke l'img qui a la classe current
//     var nextImg = currentImg.nextElementSibling; // je stocke l'élément après current

//     if (!nextImg) { // s'il n'y a pas d'élément suivant 
//         nextImg = document.querySelector('.slide img'); // nextImg devient ...
//      
//     }

//     currentImg.classList.remove('current'); // On enlève la classe current à "current"
//     currentImg.classList.add('prev'); // on lui ajoute la classe prev

//     nextImg.classList.add('current'); // on ajoute la classe curent au suivant 
//     fadeIn(nextImg); // on fait appel à la fct fadeIn en envoyant nextImg
// }

// function fadeIn(el, display) {
//     el.style.opacity = 0;
//     el.style.display = display || "block";

//     (function fade() {
//         var val = parseFloat(el.style.opacity);
//         if (!((val += 0.1) > 1)) {
//             el.style.opacity = val;
//             requestAnimationFrame(fade);
//         }
//     })();

// }

/* -------------------------------------------------------------------------- */
