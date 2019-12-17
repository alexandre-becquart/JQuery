/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Ajax ---------------------------------- */

(function ($) {
    $(document).ready(function () {

        $('.fichier').on('click', showContent);
        $('.datas').on('click', showDatas);
        $('.gallery').on('click', showGallery)

    });

    function showContent() {

        /* ------------------------------- lancer ajax ------------------------------ */

        //jQuery.ajax()

        $.ajax({
            url: "fichier.txt",
            dataType: "text",
            type: "get",
            success: successFct,
            error: function (err) {
                console.log(err);
                if (err.status == 404) {
                    $('#container').html('<mark> infos non trouvées</mark>')
                }
            }
        });
    }
    /* -------------------------------------------------------------------------- */

    /* ------------------ Afficher le contenu d'un fichier text ----------------- */

    function successFct(resultat) {
        console.log(resultat);
        $('#container').html(resultat)
    }
    /* -------------------------------------------------------------------------- */



    /* ------------------------------- lancer Ajax ------------------------------ */

    function showDatas() {
        $.ajax({
            url: 'datas.json',
            dataType: 'json',
            type: 'get',
            success: listDatas,
            error: function (err) { console.log(err.status); }
        })
    }

    /* ------------------------ Afficher le nom des users ----------------------- */

    function listDatas(res) {
        console.log(res);
        console.log(res[0].username);
        var content = '';

        for (var i = 0; i < res.length; i++) {
            content += '<li>' + res[i].username + '</li>'
        }

        $('#container').append('<ul>' + content + '</ul>')


    }

    /* -------------------------------------------------------------------------- */



    /* --------------------------- Afficher les images -------------------------- */

    function showGallery() {

        $.ajax({
            url: "image.json",
            dataType: "json",
            type: "get",
            success: showImage,

        })
    }

    function showImage(image) {
        var contenu = "";
        for (var i = 0; i < image.length; i++) {

            contenu += `<a href="${image[i].hd}"><img src="${image[i].src}" alt="${image[i].alt}"></a>`

            // contenu += '<a href="' + image[i].hd
            // contenu += '"><img src="' + image[i].src + '" alt="' + image[i].alt
            // contenu += '" title="' + image[i].title
            // contenu += '"></a>'
        }
        $('main').append(contenu);// ajouter les éléments à main
    }


})(jQuery);