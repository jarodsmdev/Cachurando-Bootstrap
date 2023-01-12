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

// Inclusion de funciones con Jquery basicas
$("#mostrar1").click(function() {
  $("#img1").hide(1500);
  $("#mostrar1").html('Gracias por su compra');
  $("#mostrar1").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
  });

  $("#mostrar2").click(function() {
    $("#img2").hide(1500);
    $("#mostrar2").html('Gracias por su compra');
    $("#mostrar2").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
  });

  $("#mostrar3").click(function() {
    $("#img3").hide(1500);
    $("#mostrar3").html('Gracias por su compra');
    $("#mostrar3").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
  });

  $("#mostrar4").click(function() {
    $("#img4").hide(1500);
    $("#mostrar4").html('Gracias por su compra');
    $("#mostrar4").css({'border':'4px solid #b7e5ff','color':'#cc3333','font-weight':'bold','background-color':'#ffffff'});
  });

  $(document).ready(function(){
    $("#productos").hover(function(){
      $(oferta).append("<p>!!!OFERTA......!!!OFERTA....!!OFERTA.....!!COMPRE YA.....!!ULTIMOS PRODUCTOS..</p>");
      $(oferta).css({'color':'red'});
      $(oferta).animate({left: '250px'});
    });
  });
  
 
