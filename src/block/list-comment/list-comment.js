(function(){

	// показать скрыть комментарии
	$('.list-comment__btn_more').on('click', function(e) {

		let box= $(this).parents('.list-comment__item').find('.list-comment__nested');
		let icon= $(this).parents('.list-comment__item').find('.list-comment__icon_more');
		if( !box.is( ":visible" ) ){
			box.show(100);
			icon.removeClass('fa-angle-down').addClass('fa-angle-up');
		}else{
			box.hide(100);
			icon.removeClass('fa-angle-up').addClass('fa-angle-down');
		}
	})

	// показать скрать форму для кооментирования - к отзыву
	$('.list-comment__btn_add').on('click', function(e) {
		let box= $(this).parents('.list-comment__item').find('.list-comment__row_4');
		if( !box.is( ":visible" ) ){
			box.show();
		}else{
			box.hide();
		}
	})

	// показать скрать форму для нового кооментирования
	$('.list-comment__btn_add-new-review').on('click', function(e) {
		let box= $(this).parents('.list-comment').find('.list-comment__box-add-new-review');
		if( !box.is( ":visible" ) ){
			box.show(100);
		}else{
			box.hide(100);
		}
	})

})();