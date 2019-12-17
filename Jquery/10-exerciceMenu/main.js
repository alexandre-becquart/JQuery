/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Créer un menu ----------------------------- */

/* ----------------------------- Version jQuery ----------------------------- */

(function ($) {

    $('.submenu').hide(); // je cache le submenu par defaut

    $(document).ready(function () {

        $('.toggleMenu span').each(function () { // pour chaque toggleMenu avec un span 
            var content = $(this).text();
            $(this).replaceWith('<a href="">' + content + '<span class="more">+</span></a>')


        })


        $('.menu a').on('click', function (e) {
            e.preventDefault(); // il empeche le "a" de faire ce qu'il doit faire par défaut
            $(".submenu").slideUp()
            $(".more").text('+')
            $('li').removeClass('active')
            if ($(this).next(".submenu:visible").length == 0) {

                $(this).next(".submenu").slideDown();
                $(this).find('.more').text('-')
                $(this).parent().addClass('active')

                // } else {
                //     $(this).next(".submenu").slideUp();
                //     $(this).find('.more').text('+')
                //     $(this).parent().removeClass('active')

            }
        });

        // $('.toggleMenu').on('click', function () {
        //     $(".submenu").slideUp()
        //     $(this).find(".submenu").slideDown();
        // })

        // // if ($(this).find(".submenu:visible").legth) {

        // // }

    });

})(jQuery)

/* --------------------------- Version Vanilla JS --------------------------- */

// // Masquer par défaut 
// hideAll()
// function hideAll() {
//     var submenu = document.querySelectorAll('.submenu');
//     for (var i = 0; i < submenu.length; i++) {
//         submenu[i].classList.add('hide'); // l'a jouter dans le sass
//     }
// }

// // Ajouter les a à la place des spans :
// var spans = document.querySelectorAll('.menu .toggleMenu span');
// for (var i = 0; i < spans.length; i++) {
//     var newLink = document.createElement('a');
//     newLink.href = "#";
//     newLink.innerHTML = spans[i].innerHTML;
//     var moreSpan = document.createElement('span');
//     moreSpan.style.float = "right";
//     moreSpan.innerText = "+";
//     newLink.appendChild(moreSpan);
//     spans[i].replaceWith(newLink);
// }

// // ajouter les clicks :
// var a = document.querySelectorAll('.menu a');
// for (var i = 0; i < a.length; i++) {
//     a[i].addEventListener('click', toggleMenu);
// }

// function toggleMenu(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     var thisSubmenu = this.nextElementSibling;
//     // if (!this.nextElementSibling.offsetParent) { // si menu fermé
//     if (thisSubmenu.classList.contains('hide')) { // si menu fermé
//         hideAll();
//         plusAll();
//         thisSubmenu.classList.remove('hide');
//         this.querySelector('span').innerText = "-";
//     } else {
//         thisSubmenu.classList.add('hide');
//         this.querySelector('span').innerText = "+";
//     }
// }

// // remettre le +
// function plusAll() {
//     var plus = document.querySelectorAll('.menu a span');
//     for (var i = 0; i < plus.length; i++) {
//         plus[i].innerText = "+";
//     }
// }

/* -------------------------------------------------------------------------- */
