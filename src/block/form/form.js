(function(){

	try{
	// При нажатии на радио кнопку dislike - уведомление
	$(".form_comment-add .form__radio").on("change", function(e){
		$(".form__info-dislike").removeClass('active');
		if( $("#review_dislike").is(":checked") ){
			$(".form__info-dislike").addClass('active');
		}
	})
	}catch(err){

	}
})();


(function(){
	// Генерация кода партнерской ссылки
	try{

		let form= $("#form_page-generate");
		let linkForm= function(){
			let cur_1= form.find(".form__select[name='output_money_1'] option:selected").data("currency");
			let cur_2= form.find(".form__select[name='output_money_2'] option:selected").data("currency");
	
	
			let idRef= form.data("id-ref-user");
			let link= form.find(".form__radio[data-link]:checked").data("link");
			let view= form.find(".form__radio[data-link-view]:checked").data("link-view");
	
			if(form.find(".form__radio_page-change").is(":checked")){
				link= link + cur_1 + '/' + cur_2 + '/';
			}
	
			let linkRef= link + idRef;
			let viewText= view.replace(/linkRef/g, linkRef).replace(/XlinkX/g, link);
	
			form.find(".form__textarea").text(viewText);
		}
	
		linkForm();
	
		form.on("change", function(e){
			linkForm();
		})

	}catch(err){

	}
})();

/* Капча */
(function() {
	var date, captcha, captchaInput;
		date = new Date();
		captcha = date.getSeconds() * date.getSeconds() * date.getYear() * date.getSeconds();
		$('.form_purse .form__text-captcha').text(captcha);
			$('.form__field_captcha').on('keyup', function(){
					captchaInput = $(this).val();
					if(captcha == captchaInput) {
							$(this).parents('.form_purse').find('.form__btn-send').removeAttr('disabled');
					} else {
							$(this).parents('.form_purse').find('.form__btn-send').attr("disabled","disabled");
					}
			}); 
}).call(this);