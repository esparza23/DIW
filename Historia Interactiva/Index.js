//Funcion que indica como se ordenara el array de escenas(porque puede estar desordenado)
function compare(a,b) {
	if (a.id < b.id)
		return -1;
	if (a.id > b.id)
		return 1;
	return 0;
}


//Funcion que coge la siguiente escena, a traves del click en las imagenes
function cogeSigEscena(event)
{
	var video = document.getElementById("video");
	escenaActual = $(this).attr("escenaSig");
	video.currentTime = info.escenas[escenaActual-1].inicio;
	animateGrande();
}

//Funcion que oculta el video y muestra el mensaje final, y da la opcion de volver  a empezar la reproduccion.
function finalVideo(mensaje)
{
	video.pause();
	$("#video").css("width","0px").css("height","0px")
	$("#video").addClass("hidden");
	$("#accion").text("Repetir Aventura.");
	$("#mensaje").text(mensaje);
	$("#mensaje").removeClass("hidden");
	$("#accion").removeClass("hidden");
}

//Funcion para hacer el video pequeño y que salgan las imagenes
function animatePequeño()
{
	$("#video").animate({
		"width": "700px",
		"height": "600px",
		"zIndex":-1000,
		"opacity":0.3
	}, 1000);
	$("#videoAbs").css("z-index","-1");
	$("img").animate({
		"width": "100%",
		"height": "270px"
	}, 1000);
	$("#preguntas").animate({
		"width": "400px",
		"height": "300px",
		"opacity":1
	}, 1000);
	$("#cont").animate({
		"opacity":1
	},1000);
};

//Funcion para hacer el video grande y que se quiten las imagenes
function animateGrande()
{
	$("#video").animate({
		"width": "1000px",
		"height": "720px",
		"opacity":1
	}, 1000, function() {
	 	video.play();
	});
	$("#videoAbs").css("z-index","3");
	$("img").animate({
		"width": "0px",
		"height": "0px"
	}, 1000);
	$("#preguntas").animate({
		"width": "0px",
		"height": "0px",
		"opacity":0
	}, 1000);
	$("#cont").animate({
		"opacity":0
	},1000);
};


jQuery(document).ready(function($) {

	//Funcion que se ejecuta cuando clickamos en el boton, ya sea para empezar al aventura la 1 vez, o repetirla una vez acabada.
	$("#accion").click(function(event) {
		if($("#video").hasClass("hidden"))
		{
			$("#video").removeClass("hidden");

			//si estamos en debug, avanzamos hasta el segundo 45, para saltarnos la presentacion.
			if(debug)
				video.currentTime = 45;
			animateGrande();
			$(this).addClass("hidden");
			escenaActual = 1;
			$("#mensaje").addClass("hidden");
		}
	});

	//Ordenamos el array de escenas, por si lo teniamos desordenado.
	info.escenas = info.escenas.sort(compare);

	//nos guardamos en una variable el div video, porque lo usaremos a menudo
	var video = document.getElementById("video");

	//Añadimos al video un evento de time update, que se ejecutara cuando el video se vaya reproduciendo, y que utilizaremos para capturar
	//los segundos, y parar el video cuando nos corresponda.
	video.addEventListener("timeupdate", function () {

		//Cogemos el tiempo actual del video
		var tiempo = video.currentTime;

		//miraremos si estamos en el rango donde hay que parar para lanzar la pregunta
		if(tiempo >= info.escenas[escenaActual-1].fin && tiempo <= (info.escenas[escenaActual-1].fin+0.5))
		{
			video.pause();
			var pregunta = info.escenas[escenaActual-1].pregunta;
			//console.log("escena actual : "+escenaActual-1);

			//la pregunta esta vacia, iremos a la escena 22, salvo que estemos en la escena 8, que es la del final feliz
			if(pregunta.pregunta == null && escenaActual != 8)
			{
				//Si  es la ultima escena,llamammos a final video con mensaje negativo
				if(escenaActual==22)
					finalVideo("Has muerto");
				
				//En otro caso, quiere decir que hemos muerto, por lo cual iremos a la escena final.
				else
				{
					escenaActual = 22;
					video.currentTime = info.escenas[escenaActual-1].inicio;
					animateGrande();
				}
			}

			//Si es la escena del final feliz, llamammos a final video con mensaje positivo
			else if(pregunta.pregunta == null && escenaActual == 8)
				finalVideo("Has sobrevivido");

			//Si la escena actual no es un final, actualizaremos la pregunta, las imagenes y su titulo y se las mostraremos al usuario para que
			//escoja.
			else
			{
				$("#pregunta").text(pregunta.pregunta);
				$("#img1").attr("src",info.escenas[pregunta.respuestas[0].id_escena-1].imagen);
				$("#img1").attr("escenaSig",pregunta.respuestas[0].id_escena);

				$("#img2").attr("src",info.escenas[pregunta.respuestas[1].id_escena-1].imagen);
				$("#img2").attr("escenaSig",pregunta.respuestas[1].id_escena);

				$('#img1').popover('destroy');
				$('#img2').popover('destroy');
				$("#img1").popover({
					placement:"top",
					trigger:"hover",
					content:pregunta.respuestas[0].enunciado
				});
				$("#img2").popover({
					placement:"top",
					trigger:"hover",
					content:pregunta.respuestas[1].enunciado
				});
				animatePequeño();
			}
			console.log()
		}
	}, false);

	//Capturamos los clicks en las imagenes
	$("#img1").click(cogeSigEscena);
	$("#img2").click(cogeSigEscena);
});