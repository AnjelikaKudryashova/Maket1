$(document).ready(function(){

	$('h1').click(function() {
		$(this).slideUp(1000, function(){
			$(this).text('Заголовок').slideDown(1000)
		})
	});
 
 
 
});


