$(document).ready(function() {
	setSetka(16);
	$('button').click(function() {
		var input = prompt ("Сколько пикселей на сторону?");
		console.log("Пикселей на сторону: ",input,' штук');
		setSetka(input);

	});
});


function setSetka(n)
{
	$('.container').empty();
	var r = $('.wrapper').width();
	console.log("wrapper width is: ",r,'px ');
	var w = r/n >> 0;
	console.log("divpixel width is: ",w,'px ');
	var i = 0;
	for(i = 0;i<n*n;i++)
	{
		$('.container').append('<div class="setka" style = "width:' + w + 'px; height:'+ w +'px;">');
	}
	$('.setka').hover(function() {
    $(this).addClass("selected");
	});
}