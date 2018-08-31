(function(){
	$('.modal__close').on('click', function(e){
		$('.modal').removeClass('active').fadeOut();
	});
})();