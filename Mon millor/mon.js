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