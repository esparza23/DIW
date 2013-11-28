//Este JS sirve para cambiar como se muestran los divs de mon.html, para que sea de una manera mas razonable.

function resolution()
{
    if ($(window).width() < 992) {
        $("#contDer").appendTo("#appends");
        $("#contIzq").appendTo("#appends");
        //visible-lg visible-md
    }
    else
    {
        $("#contIzq").appendTo("#appends");
        $("#contDer").appendTo("#appends");
    }
}

jQuery(document).ready(function($) {
    resolution();
	$(window).resize(function () {
        resolution();
    });
});