// FUNCIONALIDADES DISPONIBLES SÓLO DISPONIBLES PARA CONTACTO.HTML

// SELECCION DEL ELEMENTO HTML MENSAJE
let mensaje = document.getElementById('mensaje_nota')
// SELECCION DEL ELEMENTO NOTA ENCUESTA
let nota_encuesta = document.getElementById('nota_encuesta');

// NOTA DE LA ENCUESTA Y EL MENSAJE DE FEEDBACK
let color_tmp // VARIABLE GLOBAL CONTROLA EL COLOR DEL MENSAJE
let estrellas // VARIABLE GLOBAL CONTROLA CANTIDAD DE ESTRELLAS

nota_encuesta.addEventListener("change", function(event){
    
    estrellas = "" // RESETEO DE CANTIDAD DE ESTRELLAS
    
    // REVISION Y REMOCIÓN DE LA CLASE, EN CASO DE TENERLA, QUE CONTROLA EL COLOR DEL MENSAJE
    if (mensaje.classList.contains(color_tmp)){
        mensaje.classList.remove(color_tmp)
    }
    
    // OBTENCIÓN DE LA NOTA DESDEL EL COMBOBOX
    nota = event.target.value

    // LÓGICA PARA LA RESPUESTA DEPENDIENDO DE LA NOTA
    if (nota <= 3){
        respuesta = "Muy Deficiente"
        color = "alert-danger"
        
    }else if (nota <= 5){
        respuesta = "Insuficiente"
        color = "alert-warning"
        
    }else if (nota <= 6){
        respuesta = "Suficiente"
        color = "alert-warning"
        
    }else if (nota <= 7){
        respuesta = "Bien"
        color = "alert-warning"
        
    }else if (nota <= 9){
        respuesta = "Notable"
        color = "alert-primary"
        
    }else if (nota <=10){
        respuesta = "Sobresaliente"
        color = "alert-success"
        
    // CONTROL DE ERRORES
    // NÚMERO NEGATIVOS O SOBRE EL NÚMERO 10
    }else{
        console.log("NO DEBE OCURRIR ESTO")
        respuesta = "SELECCIÓN ERRÓNEA"
        color = "alert-danger"
    }

    
    // REPITE LA CANTIDAD DE ESTRELLAS DEPENDIENDO DE LA NOTA, P.E: NOTA 3 = SON 3 ESTRELLAS.
    for ( let i = 0; i < nota; i++){
        estrellas += ' <i class="fa-regular fa-star animate__animated animate__infinite animate__slower animate__flip"></i>';
    }

    mensaje.innerText = `${respuesta}` // PINTA EL TEXTO DEL MENSAJE
    mensaje.innerHTML += estrellas // PINTA CANTIDAD DE ESTRELLAS
    mensaje.classList.add(color) // PINTA EL MENSAJE DEL COLOR DEPENDIENTE DE LA NOTA Y EL MENSAJE OBTENIDO
    mensaje.classList.remove('d-none'); // MUESTRA EL MENSAJE QUITANDO LA CLASE 'd-none' DE BOOTSTRAP
    color_tmp = color // GUARDA EN LA VARIABLE LA CLASE DEL COLOR, PARA POSTERIORMENTE LOGRAR IDENTIFICARLA Y QUITARLA
})

// COMPORTAMIENTO DEL BOTON DE ENVÍO DE LA CALIFICACION
$("#send_form").click(function(){
    Swal.fire({
    title: '¿Necesitas más tiempo para pensarlo?',
    text: "Deberías tomarte más tiempo para evaluar nuestra página",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#157347',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Lo enviaré de igual forma!'
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
        '¡Gracias!',
        'Tú calificación ha sido enviada.',
        // 'success'
        )
    }
    })

})