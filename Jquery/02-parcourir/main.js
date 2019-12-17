/* -------------------------------------------------------------------------- */
/*                                   JQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Parcourir                                 */
/* -------------------------------------------------------------------------- */

(function ($) {
    $(document).ready(function () {


        /* --------------------------------- .lenght -------------------------------- */
        /* ------------------ Nombre d'éléments dans l'objet jQuery ----------------- */

        // $('p').lenght
        // console.log("Il y a " + $('p').length + " paragraphe(s) dans le document, dont " + $('p:hidden').length + " caché(s)");

        /* --------------------------------- .each() -------------------------------- */
        /* ---------------- Itérer sur un objet jQuery, en exécutant ---------------- */
        /* ------------- une fonction pour chaque élément correspondant. ------------ */

        // var count = 1;
        // $('p').each(function () {
        //     // alert(count);
        //     // count++;
        //     //$('p').css("border", "3px solid red")

        // })

        /* -------------------------------------------------------------------------- */
        /*                                  Exercice                                  */
        /* -------------------------------------------------------------------------- */

        /* --------------------------------- Enoncé --------------------------------- */

        // Ajouter une bordure de plus en plus épaisse sur les paragraphes et une marge gauche de pus en plus grande

        /* -------------------------------- Solution -------------------------------- */


        var bordure = 1;
        var marginLeft = 0;

        $('p').each(
            function () {
                //$(this).css("border", bordure + "px solid red") // this - l'élément sur lequel il boucle
                //$(this).css("margin-left", marginLeft + "px")
                //this.style.border = bordure + "px solid blue";

                //$(this)
                //.css("border", bordure + "px solid red")
                //.css("margin-left", marginLeft + "px")

                $(this).css({
                    "border": bordure + "px solid blue",
                    "margin-left": marginLeft + "px",

                })


                bordure += 5;
                marginLeft += 10;

            }
        );

        /* -------------------------------- .parent() ------------------------------- */

        $("p.b").parent().css("border", "3px solid green");
        // Cible le parent de l'élément

        /* -------------------------------------------------------------------------- */


        /* ------------------------------- .parents() ------------------------------- */

        $("p.b").parents().css("border", "3px solid blue");
        //tous les parents

        /* -------------------------------------------------------------------------- */


        /* ----------------------------- .parentsUntil() ---------------------------- */

        $("p.b").parentsUntil("body").css("border", "3px solid red");
        //tous les parents jusqu'au body

        /* -------------------------------------------------------------------------- */


        /* ------------------------------- .closest() ------------------------------- */

        $(".b").closest("ul").css("border", "3px solid red");

        // Pour chaque élément de l'ensemble, obtenez le premier élément correspondant 
        // au sélecteur en testant l'élément lui-même et en parcourant ses ancêtres 
        // dans l'arborescence DOM

        /* -------------------------------------------------------------------------- */


        /* ------------------------------- .children() ------------------------------ */

        $('div').children().css("border", "3px solid orange")
        // tous les enfants

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- .find() -------------------------------- */

        $('div').find("li").css("border", "1px solid orange").css("margin-bottom", "20px")
        // tous les enfants qui ont la balise li

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- .next() -------------------------------- */

        $('p.b').next().css("border", "1px solid fuchsia")
        // tous les enfants qui ont la balise li

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- .prev() -------------------------------- */

        $('p.b').prev().css("border", "1px solid navy")
        // tous les enfants qui ont la balise li

        /* -------------------------------------------------------------------------- */



        /* -------------------------------------------------------------------------- */
        /*                             Version Vanilla JS                             */
        /* -------------------------------------------------------------------------- */


        document.querySelector('p.b').nextElementSibling.style.border = "3px solid navy"




















    });
})(jQuery)

// var p = document.querySelectorAll("p")
// var b = 2;
// var m = 0;

// for (var i = 0; i < p.length; i++) {
//     p[i].style.border = b + "px solid red"
//     p[i].style.marginLeft = bm + "px"
// }