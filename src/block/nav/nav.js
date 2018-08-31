// Активный пункт меню
(function(){
	let nav_header= document.querySelectorAll('.nav_header .nav__item');

	let funActiveMenu__item= (event, el)=>{
		for(let i= 0; el.length > i; i++){
			el[i].addEventListener(event, function(e){
				for(let j= 0; el.length > j; j++){
					el[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	}

	funActiveMenu__item('click', nav_header);
	funActiveMenu__item('touch', nav_header);
})();