(function(){
	let toggleBox= function(el){
		el.on('click', function(){
			let box= $(this).parents('.toggler-more-info__item').find('.toggler-more-info__box-toggle');
			let icon= $(this).parents('.toggler-more-info__item').find('.toggler-more-info__icon_toggle');
			if( !box.is( ":visible" ) ){
				box.show();
				icon.removeClass('fa-angle-down').addClass('fa-angle-up');
			}else{
				box.hide();
				icon.removeClass('fa-angle-up').addClass('fa-angle-down');
			}
		});
	}
	toggleBox( $('.toggler-more-info__btn-toggle') );
	toggleBox( $('.toggler-more-info__icon_toggle') );
})();