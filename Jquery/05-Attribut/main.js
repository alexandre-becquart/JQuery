/* -------------------------------------------------------------------------- */
/*                                   JQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Attribut -------------------------------- */

(function ($) {

    $(document).ready(function () {

        /* --------------------------------- .attr() -------------------------------- */

        /* ------------------------------- Vanilla JS ------------------------------- */

        /* ----------------------------- .setAttribute() ---------------------------- */
        /* -------------- Ajoute un nouvel attribut ou change la valeur ------------- */
        /* ------------- d'un attribut existant pour l'élément spécifié ------------- */

        //document.querySelector('a').setAttribute('target', '_blank');

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- JQuery --------------------------------- */
        /* ----------------------- Equivalent .setAttribute() ----------------------- */

        $('a').attr('target', '_blank');

        /* -------------------------------------------------------------------------- */



        /* ------------------------------- Vanilla JS ------------------------------- */
        /* ------------------------------ .gettribute() ----------------------------- */
        /* -------------- Pour obtenir la valeur actuelle d'un attribut ------------- */

        //console.log(document.querySelector('a').getAttribute('href'));

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- JQuery --------------------------------- */
        /* ----------------------- Equivalent .getAttribute() ----------------------- */

        console.log($('a').attr('href'));

        /* -------------------------------------------------------------------------- */


        /* ------------------------------- Vanilla JS ------------------------------- */
        /* --------------------------- .removeAttribute() --------------------------- */
        /* -------------------------- Supprimer un attribut ------------------------- */

        // document.querySelector('a').removeAttribute('href');

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- JQuery --------------------------------- */
        /* ---------------------- Equivalent .removeAttibute() ---------------------- */

        $('a').removeAttr('href');

        /* -------------------------------------------------------------------------- */


        $('img').attr({
            "src": "https://picsum.photos/300/200",
            "alt": "random image"
        })


    });

})(jQuery)