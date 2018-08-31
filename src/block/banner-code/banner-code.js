(function(){

	try{
		$('.banner-code__btn-copy').on('click', function(){
			$(this).parents('.banner-code__item').find('.banner-code__textarea')[0].select();
			document.execCommand('copy');
		})

	}catch(err){

	}

})();