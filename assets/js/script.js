
let numero = '';

$(document).ready(function () {

    $("#btnBuscar").on('click', function () {
        numero = $('#inputHero').val().trim()
        let patron = /^(0|[1-9][0-9]{0,2})$/;
        let numerocomprobado = numero.match(patron);
        if (numerocomprobado) {
            if (numero >= 733 || numero < 1) {
                alert("🛑El numero ingresado no se encuentra en el listado 🛑")
            } else {

                $(this).boton();

            }
        } else {
            alert("🛑Solo se puede ingresar numeros para buscar un SuperHero🛑")
        }
    })
})

