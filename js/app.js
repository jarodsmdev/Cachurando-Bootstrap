// FUNCIONALIADES DISPONIBLES PARA TODOS LOS DOCUMENTOS HTML


// SELECCION DEL ELEMENTO FECHA DEL HTML
let fecha = document.getElementById('fecha_hora');

// AL CARGAR EL DOCUMENTO COMPLETO SE EJECUTARÁ LA FUNCIÓN
document.addEventListener("DOMContentLoaded", function(){
    // PINTA LA FECHA EN PANTALLA USA COMO ARGUMENTO EL ELEMENTO QUE LA RENDERIZARÁ EN EL HTML
    insertarFecha(fecha);
})


// OBTIENE LA FECHA DEL SISTEMA LA DESGLOSA Y LA FORMATEA
function insertarFecha(elemento_fecha){
    let fecha_hora = new Date();

    let day = doble_digito(fecha_hora.getDate());
    let month = doble_digito(fecha_hora.getMonth() + 1); //ENE = 0; FEB = 1...DIC = 11
    let year = doble_digito(fecha_hora.getFullYear());
    let hour = doble_digito(fecha_hora.getHours());
    let minute = doble_digito(fecha_hora.getMinutes());
    // let seconds = doble_digito(fecha_hora.getSeconds());


    // FORMATEA LA FECHA Y HORA
    // let fecha_completa = `Fecha / Hora: ${day}/${month}/${year} ${hour}:${minute}:${seconds}`
    let fecha_completa = `Fecha / Hora: ${day}/${month}/${year} ${hour}:${minute}`
    elemento_fecha.innerText = fecha_completa

    // FUNCIÓN QUE SE AUTOEJECUTA CADA 1000 MILISEGUNDOS (1 SEG)
    setTimeout(function(){
        insertarFecha(fecha);
    },
    1000)

}

// CONTROLA QUE LOS DATOS FECHA TENGAN COMO MÍNIMO 2 DÍGITOS
// RECIBE COMO ARGUMENTO EL DATO DE LA FECHA A COMPARAR
function doble_digito(dato){
    if (dato.toString().length < 2){
        dato = `0${dato}`
        return dato
    }
    return dato
}
