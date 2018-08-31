(function(){
	let banner__btn= document.querySelectorAll('.banner_polchange .banner__btn');

	let clk= function(el, event){
		for(let i= 0; el.length > i; i++){
			el[i].addEventListener(event, function(e){
				let banner= this.parentNode.parentNode;
				let option_1= banner.querySelectorAll('.banner__select[name="output_money_1"] option');
				let option_2= banner.querySelectorAll('.banner__select[name="output_money_2"] option');
				let site= banner.getAttribute('data-site');
				let ref= banner.getAttribute('data-ref');
				let cur_1, cur_2;

				for(let i= 0; option_1.length > i; i++){
					if(option_1[i].selected){
						cur_1= option_1[i].getAttribute('data-currency');
					}
				}

				for(let i= 0; option_2.length > i; i++){
					if(option_2[i].selected){
						cur_2= option_2[i].getAttribute('data-currency');
					}
				}

				window.open(`${site}/${cur_1}/${cur_2}/${ref}`, '_blank')
			})
		}
	}


	try{
		clk(banner__btn, "click")
	}catch(err){

	}
	//clk(banner__btn, "touch")
})();