/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Events --------------------------------- */

(function ($) {
    $(document).ready(function () {

        /* -------------------------------- .click() -------------------------------- */

        // $('button').click(function () {
        //     $('div').toggleClass('monStyle autreStyle')
        // });

        /* -------------------------------------------------------------------------- */


        /* ---------------------------------- .on() --------------------------------- */

        $('button').on('click', monClick);
        //$(document).on('click', 'button', monClick);

        // Cette façon permet d'utiliser le .off() sur le click 

        /* -------------------------------------------------------------------------- */


        /* -------------------------------- .hover() -------------------------------- */

        // $('div').hover(function () {
        //     $(this).html('ENTER')

        // }, function () {
        //     $(this).html('LEAVE')
        // });

        /* ---------------------------- Avec toggleClass ---------------------------- */

        $('div').hover(function () {
            $('div').toggleClass("monStyle autreStyle")
        });

        /* -------------------------------------------------------------------------- */








    }); //fin du document ready


    var count = 1;
    function monClick(e) {
        console.log(count);
        //console.log(e);

        if (count > 9) {

            $('button').off('click', monClick);
        } else {

            $('div').toggleClass('monStyle autreStyle')
            count++
        }

    }




})(jQuery)