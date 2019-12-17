/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Version jQuery ----------------------------- */


(function ($) {
    $(document).ready(function () {

        /* -------------------------------- METHODE 1 ------------------------------- */

        $("tbody tr:nth-child(even)").addClass("even");
        $("tbody tr:nth-child(odd)").addClass("odd");

        $('tbody tr:nth-child(even)').hover(function () {
            $(this).toggleClass("evenHov")

        })

        $('tbody tr:nth-child(odd)').hover(function () {
            $(this).toggleClass("oddHov")

        })

        /* -------------------------------- METHODE 2 ------------------------------- */

        // $("tbody tr:even").addClass("even");
        // $("tbody tr:odd").addClass("odd");

        // $("tbody tr:even").hover(function () {
        //     $(this).toggleClass("evenHov")
        // });

        // $("tbody tr:odd").hover(function () {
        //     $(this).toggleClass("oddHov")
        // });







    });
})(jQuery);

/* -------------------------------------------------------------------------- */


/* --------------------------- Version Vanilla JS --------------------------- */


// var tr = document.querySelectorAll('tbody tr')

// for (var i = 0; i < tr.length; i++) {
//     if (i % 2) {
//         tr[i].classList.add('even')
//         tr[i].addEventListener('mouseenter', function () { addHover(this, 'evenHov') });
//         tr[i].addEventListener('mouseleave', function () { removeHover(this, 'even') });
//     } else {
//         tr[i].classList.add('odd')
//         tr[i].addEventListener('mouseenter', function () { addHover(this, 'oddHov') });
//         tr[i].addEventListener('mouseleave', function () { removeHover(this, 'odd') });

//     }
// }

// function addHover(el, type) {
//     el.classList = " ";
//     el.classList.add(type);
// }


// function removeHover(el, type) {

//     if (type == "odd") {
//         el.classList.remove('oddHov');

//     } else {

//         el.classList.remove('evenHov');
//     }
//     el.classList.add(type);
// }

/* -------------------------------------------------------------------------- */
