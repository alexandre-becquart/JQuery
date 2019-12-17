/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//ajouter une icone pdf devant chacun des liens dirigeant vers un pdf
//l'icone doit être clicable

/* -------------------------------- Solution -------------------------------- */

/* ----------------------------- Version jQuery ----------------------------- */

(function ($) {
    $(document).ready(function () {


        //$('a[href$=".pdf"]').prepend('<img src="pdf.png" alt="pdf"> ');

    });
})(jQuery);

/* -------------------------------------------------------------------------- */


/* --------------------------- Version Vanilla JS --------------------------- */

var a = document.querySelectorAll('a[href$=".pdf"]')

for (var i = 0; i < a.length; i++) {
    var pdf = document.createElement('img');
    pdf.src = "pdf.png";
    pdf.alt = "pdf";
    a[i].insertBefore(pdf, a[i].firstChild);
}

/* -------------------------------------------------------------------------- */
