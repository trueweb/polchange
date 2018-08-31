(function(){
	// Показать больше валют
	let table= document.getElementById('table_currency-selection');
	let row_hide= table.getElementsByClassName('hide');
	let row= table.getElementsByClassName('table__row');

	// При переходе на другую страницу - если список валют был открыт
	// Открывает список валют на другой странице
	document.addEventListener('DOMContentLoaded', function(){

		if(Date.now() / 1000 >=  Number(localStorage.currencyMore) / 1000 + 3600){

			localStorage.currencyMore= '';
			let row_visible= [];
			for(let i= 0, l= row.length; l > i; i++){
				row[i].classList.remove('strip');
				if( !row[i].classList.contains('hide') ){
					row_visible.push(row[i])
				}
			}
			// сделать полосатыми только видимые
			for(let i= 0, l= row_visible.length; l > i; i++){
				if( (i + 1)%2 != 0 ){
					row_visible[i].classList.add('strip');
				}
			}

		}else{
			$('#btn_more-currency-selection').click();
		}
	});

	let showMoreCurency= function(row, row_hide, event) {
		document.getElementById('btn_more-currency-selection').addEventListener(event, function(e){
			let btn= e.target;
			btn.classList.toggle('active');
	
			if( btn.classList.contains('active') ){
					if(localStorage.currencyMore == ''){
						$(row_hide).fadeIn();
					}else{
						for(let i= 0, l= row_hide.length; l > i; i++){
							row_hide[i].style.display= "table-row";
						}
					}
				localStorage.currencyMore= Date.now();
				btn.classList.remove('fa-angle-down');
				btn.classList.add('fa-angle-up');
			}else{
				$(row_hide).hide();
				btn.classList.remove('fa-angle-up');
				btn.classList.add('fa-angle-down');
				localStorage.currencyMore= "";
			}
			// Полосатые таблицы - убррать класс strip, создать массив видимых элементов
			let row_visible= [];
			for(let i= 0, l= row.length; l > i; i++){
				row[i].classList.remove('strip');
				if(row[i].style.display != 'none'){
					row_visible.push(row[i])
				}
			}
			// сделать полосатыми только видимые
			for(let i= 0, l= row_visible.length; l > i; i++){
				if( (i + 1)%2 != 0 ){
					row_visible[i].classList.add('strip');
				}
			}
		});
	}
	showMoreCurency(row, row_hide, 'click');
	showMoreCurency(row, row_hide, 'touch');
})();

(function(){

	// Показать модальное окно 
	let addActive= (idBtn, idModal)=>{
		$(idBtn).on('click', function(e){
			$(idModal).addClass('active').fadeIn();
		});
	}

	try{
		// Показать модальное окно история
		addActive('#btn_info_history', '#modal_history');
		// Показать модальное окно настройки
		addActive('#btn_info_settings', '#modal_settings');
		// Показать модальное окно логин
		addActive('#btn_login', '#modal_login');
		// Показать модальное окно регистрация
		addActive('#btn_reg', '#modal_reg');


		// Показать меню направления валют
		addActive('#btn_show-currency-selection', '.content__col_1');

	}catch(err){

	}

	// Переключение active на элементе
	let toggleActive= (idBtn, idEl)=>{
		$(idBtn).on('click', function(e){
			$(idEl).toggleClass('active');
		});
	}

	// Показать навигацию
	try{
		toggleActive('#btn_nav-main-toggle', '#nav_main');
	}catch(err){

	}
})();

