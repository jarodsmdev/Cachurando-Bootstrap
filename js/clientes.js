

$(document).ready(function(){

    $('#table').DataTable();

    function validarCampo(){
        let mensaje = "El campo no debe estar vacío"
        // DECLARACION DE VARIABLES Y CAPTURA DE DATOS HTML
        let cliente = $("#cliente").val();
        let telefono = $('#telefono').val();
        let direccion = $('#direccion').val();
        let pais = $('#pais').val();
       
        // VALIDACION CLIENTE
        if (cliente == ""){
            $('#mensaje-cliente').text(mensaje)
        }
        
        if (telefono == ""){
            $('#mensaje-telefono').text(mensaje)
        }
    
        if (direccion == ""){
            $('#mensaje-direccion').text(mensaje) 
        }
    
        if (pais == ""){
            $('#mensaje-pais').text(mensaje)  
        }

        if (cliente == "" && 
        telefono == "" &&
        direccion == "" &&
        pais == "") {
            Swal.fire(
                {title: "Faltan campos que rellenar",
                icon: 'warning'}
            )
        }else{
            Swal.fire(
                {title: "Muchas Gracias.",
                icon: 'success'}
            )
        }
    }
    
    // AGREGAR EVENTO CLICK AL BOTON AGREGAR
    $('#btn-agregar').click(function(){
        // INVOCACION DE LA FUNCION
        validarCampo()
    })       
})




