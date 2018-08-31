(function(){
let table= [], col= [], give= [], get= [];
try {
	table= document.getElementById('table_currency-selection');
	col= table.getElementsByClassName('table__col');
	give= table.getElementsByClassName('table__col_give');
	get= table.getElementsByClassName('table__col_get');
} catch (error) {
		
}

document.addEventListener("DOMContentLoaded", function(e){
	let url= document.location.pathname.split("/");
	try {
		let click = new Event("click");
		let give= table.querySelector(`.table__col_give[data-currency=${url[1]}]`).dispatchEvent(click);
		let get= table.querySelector(`.table__col_get[data-currency=${url[2]}]`).dispatchEvent(click);
	} catch (error) {
		
	}
})

let activeCell= function(from, to, event){
	for(let i= 0; from.length > i; i++){
		from[i].addEventListener(event, function(){
			// Удалить активный класс с элемента
			for(let j= 0; from.length > j; j++){
				from[j].classList.remove('active');
			}
			// Удалить активный класс элементу
			from[i].classList.add('active');

			// Переключение disabled
				for(let k= 0; to.length > k; k++){
					if(to[k].getAttribute('data-direction').indexOf( from[i].getAttribute('data-currency') ) + 1){
						to[k].classList.remove('disabled');
					}else{
						to[k].classList.add('disabled');
					}
				}
		})
	}
}


let redirect= function(el, give, get, event){
	for(let i= 0; el.length > i; i++){
		el[i].addEventListener(event, function(){
		
			let currency_1, currency_2, category_1, category_2;

			for(let j= 0; give.length > j; j++){
				if(give[j].classList.contains('active')){
					currency_1= give[j].getAttribute("data-currency");
					category_1= give[j].getAttribute("data-category");
				}
			}

			for(let j= 0; get.length > j; j++){
				if(get[j].classList.contains('active')){
					currency_2= get[j].getAttribute("data-currency");
					category_2= get[j].getAttribute("data-category");
				}
			}

			if(currency_1 && currency_2 && category_1 == category_2){

				let url= document.location.pathname.split("/");

				if( url[1]+url[2] != currency_1+currency_2){
					document.location.href= `${location.origin}/${currency_1}/${currency_2}`;
				}
				
			}
		})
	}
}

	activeCell(give, get, 'click');
	activeCell(get, give, 'click');
	redirect(col, give, get, 'click');

	activeCell(give, get, 'touch');
	activeCell(get, give, 'touch');
	redirect(col, give, get, 'touch');


})();