

$(document).ready(function(){
    $('#table').DataTable();


    $('#send_form').on('submit', function(e){
        e.preventDefault();
        Swal.fire(
            {title: "Gracias",
            icon: 'warning',}
        )
    })

// validación para el Botón Guardar el form

// Campos del formulario
cliente = $("#cliente");
f_compra = $("#fecha");
tel = $("#telefono");

productos = $("#productos");
$("#send_form").on("click", function(){

    if(cliente.val() == ""){
        lanzarSweetAlertError("Nombre Cliente");
        return false
        }

    if (f_compra.val() == ""){ 
        lanzarSweetAlertError("Fecha de Compra");
        return false
        }

    if (tel.val() == ""){
        lanzarSweetAlertError("Teléfono");
        return false
        }

        Swal.fire(
            {title: "¡Perfecto!.",
            text: "Pedido Almacenado Correctamente.",
            icon: 'success'}
        )
    })

    

})

function lanzarSweetAlertError(campo){
    let mensaje_text = `${campo} no puede estar vacío, favor complételo.`
    Swal.fire({
        icon: 'error',
        title: 'Oops, algo salió mal',
        text: mensaje_text,
      })
}