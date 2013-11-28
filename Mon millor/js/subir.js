//Este JS controla los botones subir de la pagina amigos.

$("#subir").css("display","none");
$("#subir2").css("display","none");

$(window).scroll(function(event) {
	if($(window).width()>991)
	{
		if($(window).scrollTop() >=100)
			$("#subir").fadeIn(300)
		else
			$("#subir").fadeOut(300)
	}
	else
	{
		if($(window).scrollTop() >=100)
			$("#subir2").fadeIn(300)
		else
			$("#subir2").fadeOut(300)
	}
});

jQuery(document).ready(function($) {
	$("#subir").css("display","none");
	$("#subir2").css("display","none");

	$("#subir").click(function(event) {
		$("html, body").animate({scrollTop:0},'slow');
	});
	$("#subir2").click(function(event) {
		$("html, body").animate({scrollTop:0},'slow');
	});

	$(window).resize(function () {
        if($(window).width()>991)
        {
			$("#subir").removeClass("hidden");
			$("#subir2").addClass("hidden");
        }
		else
		{
			$("#subir").addClass("hidden");
			$("#subir2").removeClass("hidden");
		}
    });
});