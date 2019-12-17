/* -------------------------------------------------------------------------- */
/*                                   JQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Manipuler ------------------------------- */

(function ($) {
    $(document).ready(function () {

        /* -------------------------------- InnerHTML ------------------------------- */

        /* ----------------------------- Version Jquery ----------------------------- */

        // console.log($('ul').html()); 

        /* -------------------------------------------------------------------------- */

        /* --------------------------- Version Vanilla JS --------------------------- */

        // document.querySelector('ul').innerHTML

        /* -------------------------------------------------------------------------- */

        /* -------------------------------------------------------------------------- */


        /* -------------------------------- Exemples -------------------------------- */

        // console.log($('ul').text());

        // var oldContent = $('ul').html();
        // $('ul').html(oldContent + '<li>Ceci est un élément de liste</li>')

        /* -------------------------------- .append() ------------------------------- */

        // $('p').append(" auquel j'ajoute du contenu"); 
        // ajouter du contenu au contenu existant

        /* -------------------------------------------------------------------------- */

        /* ------------------------------- .prepend() ------------------------------- */

        // $('p').prepend("Bonjour !")
        // a jouté du contenu avant le contenu existant dans la balise

        /* -------------------------------------------------------------------------- */


        /* -------------------------------- .before() ------------------------------- */

        // $('p').before("BEFORE")
        // a jouté du contenu avant l'élément selectioné en dehors de la balise

        /* -------------------------------------------------------------------------- */

        /* -------------------------------- .after() -------------------------------- */

        // $('p').after("AFTER")
        // a jouté du contenu après l'élément selectioné en dehors de la balise

        /* -------------------------------------------------------------------------- */

        /* ------------------------------- .appendTo() ------------------------------ */
        /* -------------------------------- .clone() -------------------------------- */
        /* ----------------------------- .insertAfter() ----------------------------- */

        // $('span').appendTo("li"); 
        // couper-coller

        // $('span').clone().appendTo("li"); 
        // copier-coller

        // $('span').insertAfter("p") 
        // couper coller après la balise p

        /* -------------------------------------------------------------------------- */

        /* --------------------------------- .wrap() -------------------------------- */
        /* ------------------- Enroulez une structure HTML autour ------------------- */
        /* ----- de chaque élément dans l'ensemble des éléments correspondants. ----- */

        // $('p').wrap('<section style ="border : 3px solid red">')
        // ajoute une section autour de chaque balise p

        //$('p').wrap('<li class="toto" style="border:3px solid red">')

        /* ------------------------------- .wrapAll() ------------------------------- */
        /* ------------------- Enroulez une structure HTML autour ------------------- */
        /* ----- de tous les éléments de l'ensemble des éléments correspondants. ---- */

        $('p').wrapAll('<section style ="border : 3px solid red">')
        // contour sur l'ensemble

        //$('li:has(p)').wrapAll('<ul style="border : 3px solid blue">')

        /* -------------------------------------------------------------------------- */


        /* -------------------------------- .empty() -------------------------------- */

        // $('#container').empty();
        // vide tout ce qu'il y a dans l'id container

        /* -------------------------------------------------------------------------- */





    });
})(jQuery);