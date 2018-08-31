(function(){
	$(".tab__item").on("click", function(){
		$(this).parent().find(".tab__item").removeClass("active");
		$(this).addClass("active");

		$(this).parents(".tab").find(".tab__content").removeClass("active");

		let id= $(this).attr("id");
		$(`.tab__content[data-id="${id}"]`).addClass("active");
	})
})()