function displayTime() {
  // Obtener una instancia de la fecha y hora actual
  var date = new Date();

  // Obtener los valores de hora, minutos y segundos
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Formatear hora, minutos y segundos con dos dígitos
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Obtener el elemento HTML donde deseas mostrar la fecha y hora
  var timeDisplay = document.getElementById("time");

  // Establecer el contenido del elemento HTML con la hora actual
  timeDisplay.innerHTML =
    "<b>Fecha:</b> " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " <b>Hora:</b> " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
}

// Ejecutar la función displayTime cada segundo
setInterval(displayTime, 1000);

function showrango() {
  // Obtener la calificación del usuario
  var rango = parseFloat(document.getElementById("rango").value);

  // Inicializar variable para el mensaje de calificación
  var message;

  // Asignar un mensaje de calificación según la nota
  if (rango >= 0 && rango <= 3) {
    message = "Muy deficiente";
  } else if (rango > 3 && rango <= 5) {
    message = "Insuficiente";
  } else if (rango > 5 && rango <= 6) {
    message = "Suficiente";
  } else if (rango > 6 && rango <= 7) {
    message = "Bien";
  } else if (rango > 7 && rango <= 9) {
    message = "Notable";
  } else if (rango > 9 && rango <= 10) {
    message = "Sobresaliente";
  } else {
    message = "Por favor ingrese una nota válida";
  }

  // Mostrar el mensaje de calificación
  document.getElementById("result").innerHTML = message;
}
