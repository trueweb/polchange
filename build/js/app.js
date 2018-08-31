'use strict';

(function () {
	var banner__btn = document.querySelectorAll('.banner_polchange .banner__btn');

	var clk = function clk(el, event) {
		for (var i = 0; el.length > i; i++) {
			el[i].addEventListener(event, function (e) {
				var banner = this.parentNode.parentNode;
				var option_1 = banner.querySelectorAll('.banner__select[name="output_money_1"] option');
				var option_2 = banner.querySelectorAll('.banner__select[name="output_money_2"] option');
				var site = banner.getAttribute('data-site');
				var ref = banner.getAttribute('data-ref');
				var cur_1 = void 0,
				    cur_2 = void 0;

				for (var _i = 0; option_1.length > _i; _i++) {
					if (option_1[_i].selected) {
						cur_1 = option_1[_i].getAttribute('data-currency');
					}
				}

				for (var _i2 = 0; option_2.length > _i2; _i2++) {
					if (option_2[_i2].selected) {
						cur_2 = option_2[_i2].getAttribute('data-currency');
					}
				}

				window.open(site + '/' + cur_1 + '/' + cur_2 + '/' + ref, '_blank');
			});
		}
	};

	try {
		clk(banner__btn, "click");
	} catch (err) {}
	//clk(banner__btn, "touch")
})();
'use strict';

(function () {

	try {
		$('.banner-code__btn-copy').on('click', function () {
			$(this).parents('.banner-code__item').find('.banner-code__textarea')[0].select();
			document.execCommand('copy');
		});
	} catch (err) {}
})();
'use strict';

(function () {
	// Показать больше валют
	var table = document.getElementById('table_currency-selection');
	var row_hide = table.getElementsByClassName('hide');
	var row = table.getElementsByClassName('table__row');

	// При переходе на другую страницу - если список валют был открыт
	// Открывает список валют на другой странице
	document.addEventListener('DOMContentLoaded', function () {

		if (Date.now() / 1000 >= Number(localStorage.currencyMore) / 1000 + 3600) {

			localStorage.currencyMore = '';
			var row_visible = [];
			for (var i = 0, l = row.length; l > i; i++) {
				row[i].classList.remove('strip');
				if (!row[i].classList.contains('hide')) {
					row_visible.push(row[i]);
				}
			}
			// сделать полосатыми только видимые
			for (var _i = 0, _l = row_visible.length; _l > _i; _i++) {
				if ((_i + 1) % 2 != 0) {
					row_visible[_i].classList.add('strip');
				}
			}
		} else {
			$('#btn_more-currency-selection').click();
		}
	});

	var showMoreCurency = function showMoreCurency(row, row_hide, event) {
		document.getElementById('btn_more-currency-selection').addEventListener(event, function (e) {
			var btn = e.target;
			btn.classList.toggle('active');

			if (btn.classList.contains('active')) {
				if (localStorage.currencyMore == '') {
					$(row_hide).fadeIn();
				} else {
					for (var i = 0, l = row_hide.length; l > i; i++) {
						row_hide[i].style.display = "table-row";
					}
				}
				localStorage.currencyMore = Date.now();
				btn.classList.remove('fa-angle-down');
				btn.classList.add('fa-angle-up');
			} else {
				$(row_hide).hide();
				btn.classList.remove('fa-angle-up');
				btn.classList.add('fa-angle-down');
				localStorage.currencyMore = "";
			}
			// Полосатые таблицы - убррать класс strip, создать массив видимых элементов
			var row_visible = [];
			for (var _i2 = 0, _l2 = row.length; _l2 > _i2; _i2++) {
				row[_i2].classList.remove('strip');
				if (row[_i2].style.display != 'none') {
					row_visible.push(row[_i2]);
				}
			}
			// сделать полосатыми только видимые
			for (var _i3 = 0, _l3 = row_visible.length; _l3 > _i3; _i3++) {
				if ((_i3 + 1) % 2 != 0) {
					row_visible[_i3].classList.add('strip');
				}
			}
		});
	};
	showMoreCurency(row, row_hide, 'click');
	showMoreCurency(row, row_hide, 'touch');
})();

(function () {

	// Показать модальное окно 
	var addActive = function addActive(idBtn, idModal) {
		$(idBtn).on('click', function (e) {
			$(idModal).addClass('active').fadeIn();
		});
	};

	try {
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
	} catch (err) {}

	// Переключение active на элементе
	var toggleActive = function toggleActive(idBtn, idEl) {
		$(idBtn).on('click', function (e) {
			$(idEl).toggleClass('active');
		});
	};

	// Показать навигацию
	try {
		toggleActive('#btn_nav-main-toggle', '#nav_main');
	} catch (err) {}
})();
'use strict';

(function () {

	try {
		$('.sidebar__close').on("click", function () {
			$('.content__col_1').removeClass("active");
		});
	} catch (err) {}
})();
"use strict";

(function () {

	try {
		// При нажатии на радио кнопку dislike - уведомление
		$(".form_comment-add .form__radio").on("change", function (e) {
			$(".form__info-dislike").removeClass('active');
			if ($("#review_dislike").is(":checked")) {
				$(".form__info-dislike").addClass('active');
			}
		});
	} catch (err) {}
})();

(function () {
	// Генерация кода партнерской ссылки
	try {

		var form = $("#form_page-generate");
		var linkForm = function linkForm() {
			var cur_1 = form.find(".form__select[name='output_money_1'] option:selected").data("currency");
			var cur_2 = form.find(".form__select[name='output_money_2'] option:selected").data("currency");

			var idRef = form.data("id-ref-user");
			var link = form.find(".form__radio[data-link]:checked").data("link");
			var view = form.find(".form__radio[data-link-view]:checked").data("link-view");

			if (form.find(".form__radio_page-change").is(":checked")) {
				link = link + cur_1 + '/' + cur_2 + '/';
			}

			var linkRef = link + idRef;
			var viewText = view.replace(/linkRef/g, linkRef).replace(/XlinkX/g, link);

			form.find(".form__textarea").text(viewText);
		};

		linkForm();

		form.on("change", function (e) {
			linkForm();
		});
	} catch (err) {}
})();

/* Капча */
(function () {
	var date, captcha, captchaInput;
	date = new Date();
	captcha = date.getSeconds() * date.getSeconds() * date.getYear() * date.getSeconds();
	$('.form_purse .form__text-captcha').text(captcha);
	$('.form__field_captcha').on('keyup', function () {
		captchaInput = $(this).val();
		if (captcha == captchaInput) {
			$(this).parents('.form_purse').find('.form__btn-send').removeAttr('disabled');
		} else {
			$(this).parents('.form_purse').find('.form__btn-send').attr("disabled", "disabled");
		}
	});
}).call(undefined);
'use strict';

(function () {

	// показать скрыть комментарии
	$('.list-comment__btn_more').on('click', function (e) {

		var box = $(this).parents('.list-comment__item').find('.list-comment__nested');
		var icon = $(this).parents('.list-comment__item').find('.list-comment__icon_more');
		if (!box.is(":visible")) {
			box.show(100);
			icon.removeClass('fa-angle-down').addClass('fa-angle-up');
		} else {
			box.hide(100);
			icon.removeClass('fa-angle-up').addClass('fa-angle-down');
		}
	});

	// показать скрать форму для кооментирования - к отзыву
	$('.list-comment__btn_add').on('click', function (e) {
		var box = $(this).parents('.list-comment__item').find('.list-comment__row_4');
		if (!box.is(":visible")) {
			box.show();
		} else {
			box.hide();
		}
	});

	// показать скрать форму для нового кооментирования
	$('.list-comment__btn_add-new-review').on('click', function (e) {
		var box = $(this).parents('.list-comment').find('.list-comment__box-add-new-review');
		if (!box.is(":visible")) {
			box.show(100);
		} else {
			box.hide(100);
		}
	});
})();
'use strict';

(function () {
	$('.modal__close').on('click', function (e) {
		$('.modal').removeClass('active').fadeOut();
	});
})();
'use strict';

// Активный пункт меню
(function () {
	var nav_header = document.querySelectorAll('.nav_header .nav__item');

	var funActiveMenu__item = function funActiveMenu__item(event, el) {
		for (var i = 0; el.length > i; i++) {
			el[i].addEventListener(event, function (e) {
				for (var j = 0; el.length > j; j++) {
					el[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	};

	funActiveMenu__item('click', nav_header);
	funActiveMenu__item('touch', nav_header);
})();
"use strict";

(function () {
	$(".tab__item").on("click", function () {
		$(this).parent().find(".tab__item").removeClass("active");
		$(this).addClass("active");

		$(this).parents(".tab").find(".tab__content").removeClass("active");

		var id = $(this).attr("id");
		$(".tab__content[data-id=\"" + id + "\"]").addClass("active");
	});
})();
'use strict';

(function () {
	var table = [],
	    col = [],
	    give = [],
	    get = [];
	try {
		table = document.getElementById('table_currency-selection');
		col = table.getElementsByClassName('table__col');
		give = table.getElementsByClassName('table__col_give');
		get = table.getElementsByClassName('table__col_get');
	} catch (error) {}

	document.addEventListener("DOMContentLoaded", function (e) {
		var url = document.location.pathname.split("/");
		try {
			var click = new Event("click");
			var _give = table.querySelector('.table__col_give[data-currency=' + url[1] + ']').dispatchEvent(click);
			var _get = table.querySelector('.table__col_get[data-currency=' + url[2] + ']').dispatchEvent(click);
		} catch (error) {}
	});

	var activeCell = function activeCell(from, to, event) {
		var _loop = function _loop(i) {
			from[i].addEventListener(event, function () {
				// Удалить активный класс с элемента
				for (var j = 0; from.length > j; j++) {
					from[j].classList.remove('active');
				}
				// Удалить активный класс элементу
				from[i].classList.add('active');

				// Переключение disabled
				for (var k = 0; to.length > k; k++) {
					if (to[k].getAttribute('data-direction').indexOf(from[i].getAttribute('data-currency')) + 1) {
						to[k].classList.remove('disabled');
					} else {
						to[k].classList.add('disabled');
					}
				}
			});
		};

		for (var i = 0; from.length > i; i++) {
			_loop(i);
		}
	};

	var redirect = function redirect(el, give, get, event) {
		for (var i = 0; el.length > i; i++) {
			el[i].addEventListener(event, function () {

				var currency_1 = void 0,
				    currency_2 = void 0,
				    category_1 = void 0,
				    category_2 = void 0;

				for (var j = 0; give.length > j; j++) {
					if (give[j].classList.contains('active')) {
						currency_1 = give[j].getAttribute("data-currency");
						category_1 = give[j].getAttribute("data-category");
					}
				}

				for (var _j = 0; get.length > _j; _j++) {
					if (get[_j].classList.contains('active')) {
						currency_2 = get[_j].getAttribute("data-currency");
						category_2 = get[_j].getAttribute("data-category");
					}
				}

				if (currency_1 && currency_2 && category_1 == category_2) {

					var url = document.location.pathname.split("/");

					if (url[1] + url[2] != currency_1 + currency_2) {
						document.location.href = location.origin + '/' + currency_1 + '/' + currency_2;
					}
				}
			});
		}
	};

	activeCell(give, get, 'click');
	activeCell(get, give, 'click');
	redirect(col, give, get, 'click');

	activeCell(give, get, 'touch');
	activeCell(get, give, 'touch');
	redirect(col, give, get, 'touch');
})();
'use strict';

(function () {
	var toggleBox = function toggleBox(el) {
		el.on('click', function () {
			var box = $(this).parents('.toggler-more-info__item').find('.toggler-more-info__box-toggle');
			var icon = $(this).parents('.toggler-more-info__item').find('.toggler-more-info__icon_toggle');
			if (!box.is(":visible")) {
				box.show();
				icon.removeClass('fa-angle-down').addClass('fa-angle-up');
			} else {
				box.hide();
				icon.removeClass('fa-angle-up').addClass('fa-angle-down');
			}
		});
	};
	toggleBox($('.toggler-more-info__btn-toggle'));
	toggleBox($('.toggler-more-info__icon_toggle'));
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci9iYW5uZXIuanMiLCJiYW5uZXItY29kZS9iYW5uZXItY29kZS5qcyIsImJ0bi9idG4uanMiLCJjb250ZW50L2NvbnRlbnQuanMiLCJmb3JtL2Zvcm0uanMiLCJsaXN0LWNvbW1lbnQvbGlzdC1jb21tZW50LmpzIiwibW9kYWwvbW9kYWwuanMiLCJuYXYvbmF2LmpzIiwidGFiL3RhYi5qcyIsInRhYmxlL3RhYmxlLmpzIiwidG9nZ2xlci1tb3JlLWluZm8vdG9nZ2xlci1tb3JlLWluZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBiYW5uZXJfX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXJfcG9sY2hhbmdlIC5iYW5uZXJfX2J0bicpO1xuXG5cdHZhciBjbGsgPSBmdW5jdGlvbiBjbGsoZWwsIGV2ZW50KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGVsLmxlbmd0aCA+IGk7IGkrKykge1xuXHRcdFx0ZWxbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0dmFyIGJhbm5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHR2YXIgb3B0aW9uXzEgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmJhbm5lcl9fc2VsZWN0W25hbWU9XCJvdXRwdXRfbW9uZXlfMVwiXSBvcHRpb24nKTtcblx0XHRcdFx0dmFyIG9wdGlvbl8yID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXJfX3NlbGVjdFtuYW1lPVwib3V0cHV0X21vbmV5XzJcIl0gb3B0aW9uJyk7XG5cdFx0XHRcdHZhciBzaXRlID0gYmFubmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXRlJyk7XG5cdFx0XHRcdHZhciByZWYgPSBiYW5uZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZicpO1xuXHRcdFx0XHR2YXIgY3VyXzEgPSB2b2lkIDAsXG5cdFx0XHRcdCAgICBjdXJfMiA9IHZvaWQgMDtcblxuXHRcdFx0XHRmb3IgKHZhciBfaSA9IDA7IG9wdGlvbl8xLmxlbmd0aCA+IF9pOyBfaSsrKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbl8xW19pXS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdFx0Y3VyXzEgPSBvcHRpb25fMVtfaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgX2kyID0gMDsgb3B0aW9uXzIubGVuZ3RoID4gX2kyOyBfaTIrKykge1xuXHRcdFx0XHRcdGlmIChvcHRpb25fMltfaTJdLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRjdXJfMiA9IG9wdGlvbl8yW19pMl0uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93Lm9wZW4oc2l0ZSArICcvJyArIGN1cl8xICsgJy8nICsgY3VyXzIgKyAnLycgKyByZWYsICdfYmxhbmsnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHR0cnkge1xuXHRcdGNsayhiYW5uZXJfX2J0biwgXCJjbGlja1wiKTtcblx0fSBjYXRjaCAoZXJyKSB7fVxuXHQvL2NsayhiYW5uZXJfX2J0biwgXCJ0b3VjaFwiKVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0dHJ5IHtcblx0XHQkKCcuYmFubmVyLWNvZGVfX2J0bi1jb3B5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcuYmFubmVyLWNvZGVfX2l0ZW0nKS5maW5kKCcuYmFubmVyLWNvZGVfX3RleHRhcmVhJylbMF0uc2VsZWN0KCk7XG5cdFx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnIpIHt9XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0Ly8g0J/QvtC60LDQt9Cw0YLRjCDQsdC+0LvRjNGI0LUg0LLQsNC70Y7RglxuXHR2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVfY3VycmVuY3ktc2VsZWN0aW9uJyk7XG5cdHZhciByb3dfaGlkZSA9IHRhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZGUnKTtcblx0dmFyIHJvdyA9IHRhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlX19yb3cnKTtcblxuXHQvLyDQn9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQvdCwINC00YDRg9Cz0YPRjiDRgdGC0YDQsNC90LjRhtGDIC0g0LXRgdC70Lgg0YHQv9C40YHQvtC6INCy0LDQu9GO0YIg0LHRi9C7INC+0YLQutGA0YvRglxuXHQvLyDQntGC0LrRgNGL0LLQsNC10YIg0YHQv9C40YHQvtC6INCy0LDQu9GO0YIg0L3QsCDQtNGA0YPQs9C+0Lkg0YHRgtGA0LDQvdC40YbQtVxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKERhdGUubm93KCkgLyAxMDAwID49IE51bWJlcihsb2NhbFN0b3JhZ2UuY3VycmVuY3lNb3JlKSAvIDEwMDAgKyAzNjAwKSB7XG5cblx0XHRcdGxvY2FsU3RvcmFnZS5jdXJyZW5jeU1vcmUgPSAnJztcblx0XHRcdHZhciByb3dfdmlzaWJsZSA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSByb3cubGVuZ3RoOyBsID4gaTsgaSsrKSB7XG5cdFx0XHRcdHJvd1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpcCcpO1xuXHRcdFx0XHRpZiAoIXJvd1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuXHRcdFx0XHRcdHJvd192aXNpYmxlLnB1c2gocm93W2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8g0YHQtNC10LvQsNGC0Ywg0L/QvtC70L7RgdCw0YLRi9C80Lgg0YLQvtC70YzQutC+INCy0LjQtNC40LzRi9C1XG5cdFx0XHRmb3IgKHZhciBfaSA9IDAsIF9sID0gcm93X3Zpc2libGUubGVuZ3RoOyBfbCA+IF9pOyBfaSsrKSB7XG5cdFx0XHRcdGlmICgoX2kgKyAxKSAlIDIgIT0gMCkge1xuXHRcdFx0XHRcdHJvd192aXNpYmxlW19pXS5jbGFzc0xpc3QuYWRkKCdzdHJpcCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJyNidG5fbW9yZS1jdXJyZW5jeS1zZWxlY3Rpb24nKS5jbGljaygpO1xuXHRcdH1cblx0fSk7XG5cblx0dmFyIHNob3dNb3JlQ3VyZW5jeSA9IGZ1bmN0aW9uIHNob3dNb3JlQ3VyZW5jeShyb3csIHJvd19oaWRlLCBldmVudCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbW9yZS1jdXJyZW5jeS1zZWxlY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGJ0biA9IGUudGFyZ2V0O1xuXHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXG5cdFx0XHRpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5jdXJyZW5jeU1vcmUgPT0gJycpIHtcblx0XHRcdFx0XHQkKHJvd19oaWRlKS5mYWRlSW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbCA9IHJvd19oaWRlLmxlbmd0aDsgbCA+IGk7IGkrKykge1xuXHRcdFx0XHRcdFx0cm93X2hpZGVbaV0uc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5jdXJyZW5jeU1vcmUgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYW5nbGUtZG93bicpO1xuXHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnZmEtYW5nbGUtdXAnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQocm93X2hpZGUpLmhpZGUoKTtcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWFuZ2xlLXVwJyk7XG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1hbmdsZS1kb3duJyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5jdXJyZW5jeU1vcmUgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdFx0Ly8g0J/QvtC70L7RgdCw0YLRi9C1INGC0LDQsdC70LjRhtGLIC0g0YPQsdGA0YDQsNGC0Ywg0LrQu9Cw0YHRgSBzdHJpcCwg0YHQvtC30LTQsNGC0Ywg0LzQsNGB0YHQuNCyINCy0LjQtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QslxuXHRcdFx0dmFyIHJvd192aXNpYmxlID0gW107XG5cdFx0XHRmb3IgKHZhciBfaTIgPSAwLCBfbDIgPSByb3cubGVuZ3RoOyBfbDIgPiBfaTI7IF9pMisrKSB7XG5cdFx0XHRcdHJvd1tfaTJdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlwJyk7XG5cdFx0XHRcdGlmIChyb3dbX2kyXS5zdHlsZS5kaXNwbGF5ICE9ICdub25lJykge1xuXHRcdFx0XHRcdHJvd192aXNpYmxlLnB1c2gocm93W19pMl0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyDRgdC00LXQu9Cw0YLRjCDQv9C+0LvQvtGB0LDRgtGL0LzQuCDRgtC+0LvRjNC60L4g0LLQuNC00LjQvNGL0LVcblx0XHRcdGZvciAodmFyIF9pMyA9IDAsIF9sMyA9IHJvd192aXNpYmxlLmxlbmd0aDsgX2wzID4gX2kzOyBfaTMrKykge1xuXHRcdFx0XHRpZiAoKF9pMyArIDEpICUgMiAhPSAwKSB7XG5cdFx0XHRcdFx0cm93X3Zpc2libGVbX2kzXS5jbGFzc0xpc3QuYWRkKCdzdHJpcCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdHNob3dNb3JlQ3VyZW5jeShyb3csIHJvd19oaWRlLCAnY2xpY2snKTtcblx0c2hvd01vcmVDdXJlbmN5KHJvdywgcm93X2hpZGUsICd0b3VjaCcpO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQvLyDQn9C+0LrQsNC30LDRgtGMINC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviBcblx0dmFyIGFkZEFjdGl2ZSA9IGZ1bmN0aW9uIGFkZEFjdGl2ZShpZEJ0biwgaWRNb2RhbCkge1xuXHRcdCQoaWRCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHQkKGlkTW9kYWwpLmFkZENsYXNzKCdhY3RpdmUnKS5mYWRlSW4oKTtcblx0XHR9KTtcblx0fTtcblxuXHR0cnkge1xuXHRcdC8vINCf0L7QutCw0LfQsNGC0Ywg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC40YHRgtC+0YDQuNGPXG5cdFx0YWRkQWN0aXZlKCcjYnRuX2luZm9faGlzdG9yeScsICcjbW9kYWxfaGlzdG9yeScpO1xuXHRcdC8vINCf0L7QutCw0LfQsNGC0Ywg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC90LDRgdGC0YDQvtC50LrQuFxuXHRcdGFkZEFjdGl2ZSgnI2J0bl9pbmZvX3NldHRpbmdzJywgJyNtb2RhbF9zZXR0aW5ncycpO1xuXHRcdC8vINCf0L7QutCw0LfQsNGC0Ywg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC70L7Qs9C40L1cblx0XHRhZGRBY3RpdmUoJyNidG5fbG9naW4nLCAnI21vZGFsX2xvZ2luJyk7XG5cdFx0Ly8g0J/QvtC60LDQt9Cw0YLRjCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YDQtdCz0LjRgdGC0YDQsNGG0LjRj1xuXHRcdGFkZEFjdGl2ZSgnI2J0bl9yZWcnLCAnI21vZGFsX3JlZycpO1xuXG5cdFx0Ly8g0J/QvtC60LDQt9Cw0YLRjCDQvNC10L3RjiDQvdCw0L/RgNCw0LLQu9C10L3QuNGPINCy0LDQu9GO0YJcblx0XHRhZGRBY3RpdmUoJyNidG5fc2hvdy1jdXJyZW5jeS1zZWxlY3Rpb24nLCAnLmNvbnRlbnRfX2NvbF8xJyk7XG5cdH0gY2F0Y2ggKGVycikge31cblxuXHQvLyDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUgYWN0aXZlINC90LAg0Y3Qu9C10LzQtdC90YLQtVxuXHR2YXIgdG9nZ2xlQWN0aXZlID0gZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGlkQnRuLCBpZEVsKSB7XG5cdFx0JChpZEJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdCQoaWRFbCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8vINCf0L7QutCw0LfQsNGC0Ywg0L3QsNCy0LjQs9Cw0YbQuNGOXG5cdHRyeSB7XG5cdFx0dG9nZ2xlQWN0aXZlKCcjYnRuX25hdi1tYWluLXRvZ2dsZScsICcjbmF2X21haW4nKTtcblx0fSBjYXRjaCAoZXJyKSB7fVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0dHJ5IHtcblx0XHQkKCcuc2lkZWJhcl9fY2xvc2UnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5jb250ZW50X19jb2xfMScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnIpIHt9XG59KSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdHRyeSB7XG5cdFx0Ly8g0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0YDQsNC00LjQviDQutC90L7Qv9C60YMgZGlzbGlrZSAtINGD0LLQtdC00L7QvNC70LXQvdC40LVcblx0XHQkKFwiLmZvcm1fY29tbWVudC1hZGQgLmZvcm1fX3JhZGlvXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHQkKFwiLmZvcm1fX2luZm8tZGlzbGlrZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRpZiAoJChcIiNyZXZpZXdfZGlzbGlrZVwiKS5pcyhcIjpjaGVja2VkXCIpKSB7XG5cdFx0XHRcdCQoXCIuZm9ybV9faW5mby1kaXNsaWtlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyKSB7fVxufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcblx0Ly8g0JPQtdC90LXRgNCw0YbQuNGPINC60L7QtNCwINC/0LDRgNGC0L3QtdGA0YHQutC+0Lkg0YHRgdGL0LvQutC4XG5cdHRyeSB7XG5cblx0XHR2YXIgZm9ybSA9ICQoXCIjZm9ybV9wYWdlLWdlbmVyYXRlXCIpO1xuXHRcdHZhciBsaW5rRm9ybSA9IGZ1bmN0aW9uIGxpbmtGb3JtKCkge1xuXHRcdFx0dmFyIGN1cl8xID0gZm9ybS5maW5kKFwiLmZvcm1fX3NlbGVjdFtuYW1lPSdvdXRwdXRfbW9uZXlfMSddIG9wdGlvbjpzZWxlY3RlZFwiKS5kYXRhKFwiY3VycmVuY3lcIik7XG5cdFx0XHR2YXIgY3VyXzIgPSBmb3JtLmZpbmQoXCIuZm9ybV9fc2VsZWN0W25hbWU9J291dHB1dF9tb25leV8yJ10gb3B0aW9uOnNlbGVjdGVkXCIpLmRhdGEoXCJjdXJyZW5jeVwiKTtcblxuXHRcdFx0dmFyIGlkUmVmID0gZm9ybS5kYXRhKFwiaWQtcmVmLXVzZXJcIik7XG5cdFx0XHR2YXIgbGluayA9IGZvcm0uZmluZChcIi5mb3JtX19yYWRpb1tkYXRhLWxpbmtdOmNoZWNrZWRcIikuZGF0YShcImxpbmtcIik7XG5cdFx0XHR2YXIgdmlldyA9IGZvcm0uZmluZChcIi5mb3JtX19yYWRpb1tkYXRhLWxpbmstdmlld106Y2hlY2tlZFwiKS5kYXRhKFwibGluay12aWV3XCIpO1xuXG5cdFx0XHRpZiAoZm9ybS5maW5kKFwiLmZvcm1fX3JhZGlvX3BhZ2UtY2hhbmdlXCIpLmlzKFwiOmNoZWNrZWRcIikpIHtcblx0XHRcdFx0bGluayA9IGxpbmsgKyBjdXJfMSArICcvJyArIGN1cl8yICsgJy8nO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGlua1JlZiA9IGxpbmsgKyBpZFJlZjtcblx0XHRcdHZhciB2aWV3VGV4dCA9IHZpZXcucmVwbGFjZSgvbGlua1JlZi9nLCBsaW5rUmVmKS5yZXBsYWNlKC9YbGlua1gvZywgbGluayk7XG5cblx0XHRcdGZvcm0uZmluZChcIi5mb3JtX190ZXh0YXJlYVwiKS50ZXh0KHZpZXdUZXh0KTtcblx0XHR9O1xuXG5cdFx0bGlua0Zvcm0oKTtcblxuXHRcdGZvcm0ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxpbmtGb3JtKCk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycikge31cbn0pKCk7XG5cbi8qINCa0LDQv9GH0LAgKi9cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBkYXRlLCBjYXB0Y2hhLCBjYXB0Y2hhSW5wdXQ7XG5cdGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRjYXB0Y2hhID0gZGF0ZS5nZXRTZWNvbmRzKCkgKiBkYXRlLmdldFNlY29uZHMoKSAqIGRhdGUuZ2V0WWVhcigpICogZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdCQoJy5mb3JtX3B1cnNlIC5mb3JtX190ZXh0LWNhcHRjaGEnKS50ZXh0KGNhcHRjaGEpO1xuXHQkKCcuZm9ybV9fZmllbGRfY2FwdGNoYScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjYXB0Y2hhSW5wdXQgPSAkKHRoaXMpLnZhbCgpO1xuXHRcdGlmIChjYXB0Y2hhID09IGNhcHRjaGFJbnB1dCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcuZm9ybV9wdXJzZScpLmZpbmQoJy5mb3JtX19idG4tc2VuZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykucGFyZW50cygnLmZvcm1fcHVyc2UnKS5maW5kKCcuZm9ybV9fYnRuLXNlbmQnKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblx0XHR9XG5cdH0pO1xufSkuY2FsbCh1bmRlZmluZWQpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQvLyDQv9C+0LrQsNC30LDRgtGMINGB0LrRgNGL0YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC4XG5cdCQoJy5saXN0LWNvbW1lbnRfX2J0bl9tb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuXHRcdHZhciBib3ggPSAkKHRoaXMpLnBhcmVudHMoJy5saXN0LWNvbW1lbnRfX2l0ZW0nKS5maW5kKCcubGlzdC1jb21tZW50X19uZXN0ZWQnKTtcblx0XHR2YXIgaWNvbiA9ICQodGhpcykucGFyZW50cygnLmxpc3QtY29tbWVudF9faXRlbScpLmZpbmQoJy5saXN0LWNvbW1lbnRfX2ljb25fbW9yZScpO1xuXHRcdGlmICghYm94LmlzKFwiOnZpc2libGVcIikpIHtcblx0XHRcdGJveC5zaG93KDEwMCk7XG5cdFx0XHRpY29uLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJveC5oaWRlKDEwMCk7XG5cdFx0XHRpY29uLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS11cCcpLmFkZENsYXNzKCdmYS1hbmdsZS1kb3duJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQv9C+0LrQsNC30LDRgtGMINGB0LrRgNCw0YLRjCDRhNC+0YDQvNGDINC00LvRjyDQutC+0L7QvNC10L3RgtC40YDQvtCy0LDQvdC40Y8gLSDQuiDQvtGC0LfRi9Cy0YNcblx0JCgnLmxpc3QtY29tbWVudF9fYnRuX2FkZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIGJveCA9ICQodGhpcykucGFyZW50cygnLmxpc3QtY29tbWVudF9faXRlbScpLmZpbmQoJy5saXN0LWNvbW1lbnRfX3Jvd180Jyk7XG5cdFx0aWYgKCFib3guaXMoXCI6dmlzaWJsZVwiKSkge1xuXHRcdFx0Ym94LnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym94LmhpZGUoKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vINC/0L7QutCw0LfQsNGC0Ywg0YHQutGA0LDRgtGMINGE0L7RgNC80YMg0LTQu9GPINC90L7QstC+0LPQviDQutC+0L7QvNC10L3RgtC40YDQvtCy0LDQvdC40Y9cblx0JCgnLmxpc3QtY29tbWVudF9fYnRuX2FkZC1uZXctcmV2aWV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgYm94ID0gJCh0aGlzKS5wYXJlbnRzKCcubGlzdC1jb21tZW50JykuZmluZCgnLmxpc3QtY29tbWVudF9fYm94LWFkZC1uZXctcmV2aWV3Jyk7XG5cdFx0aWYgKCFib3guaXMoXCI6dmlzaWJsZVwiKSkge1xuXHRcdFx0Ym94LnNob3coMTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym94LmhpZGUoMTAwKTtcblx0XHR9XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdCQoJy5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdCQoJy5tb2RhbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5mYWRlT3V0KCk7XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbi8vINCQ0LrRgtC40LLQvdGL0Lkg0L/Rg9C90LrRgiDQvNC10L3RjlxuKGZ1bmN0aW9uICgpIHtcblx0dmFyIG5hdl9oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X2hlYWRlciAubmF2X19pdGVtJyk7XG5cblx0dmFyIGZ1bkFjdGl2ZU1lbnVfX2l0ZW0gPSBmdW5jdGlvbiBmdW5BY3RpdmVNZW51X19pdGVtKGV2ZW50LCBlbCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBlbC5sZW5ndGggPiBpOyBpKyspIHtcblx0XHRcdGVsW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBlbC5sZW5ndGggPiBqOyBqKyspIHtcblx0XHRcdFx0XHRlbFtqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bkFjdGl2ZU1lbnVfX2l0ZW0oJ2NsaWNrJywgbmF2X2hlYWRlcik7XG5cdGZ1bkFjdGl2ZU1lbnVfX2l0ZW0oJ3RvdWNoJywgbmF2X2hlYWRlcik7XG59KSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQkKFwiLnRhYl9faXRlbVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCIudGFiX19pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdCQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0XHQkKHRoaXMpLnBhcmVudHMoXCIudGFiXCIpLmZpbmQoXCIudGFiX19jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG5cdFx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG5cdFx0JChcIi50YWJfX2NvbnRlbnRbZGF0YS1pZD1cXFwiXCIgKyBpZCArIFwiXFxcIl1cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cdH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciB0YWJsZSA9IFtdLFxuXHQgICAgY29sID0gW10sXG5cdCAgICBnaXZlID0gW10sXG5cdCAgICBnZXQgPSBbXTtcblx0dHJ5IHtcblx0XHR0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZV9jdXJyZW5jeS1zZWxlY3Rpb24nKTtcblx0XHRjb2wgPSB0YWJsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJsZV9fY29sJyk7XG5cdFx0Z2l2ZSA9IHRhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlX19jb2xfZ2l2ZScpO1xuXHRcdGdldCA9IHRhYmxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlX19jb2xfZ2V0Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7fVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGNsaWNrID0gbmV3IEV2ZW50KFwiY2xpY2tcIik7XG5cdFx0XHR2YXIgX2dpdmUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2NvbF9naXZlW2RhdGEtY3VycmVuY3k9JyArIHVybFsxXSArICddJykuZGlzcGF0Y2hFdmVudChjbGljayk7XG5cdFx0XHR2YXIgX2dldCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fY29sX2dldFtkYXRhLWN1cnJlbmN5PScgKyB1cmxbMl0gKyAnXScpLmRpc3BhdGNoRXZlbnQoY2xpY2spO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7fVxuXHR9KTtcblxuXHR2YXIgYWN0aXZlQ2VsbCA9IGZ1bmN0aW9uIGFjdGl2ZUNlbGwoZnJvbSwgdG8sIGV2ZW50KSB7XG5cdFx0dmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuXHRcdFx0ZnJvbVtpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdC8vINCj0LTQsNC70LjRgtGMINCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDRgSDRjdC70LXQvNC10L3RgtCwXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBmcm9tLmxlbmd0aCA+IGo7IGorKykge1xuXHRcdFx0XHRcdGZyb21bal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8g0KPQtNCw0LvQuNGC0Ywg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGN0LvQtdC80LXQvdGC0YNcblx0XHRcdFx0ZnJvbVtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuXHRcdFx0XHQvLyDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUgZGlzYWJsZWRcblx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IHRvLmxlbmd0aCA+IGs7IGsrKykge1xuXHRcdFx0XHRcdGlmICh0b1trXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJykuaW5kZXhPZihmcm9tW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW5jeScpKSArIDEpIHtcblx0XHRcdFx0XHRcdHRvW2tdLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvW2tdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGZyb20ubGVuZ3RoID4gaTsgaSsrKSB7XG5cdFx0XHRfbG9vcChpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIHJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QoZWwsIGdpdmUsIGdldCwgZXZlbnQpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgZWwubGVuZ3RoID4gaTsgaSsrKSB7XG5cdFx0XHRlbFtpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0dmFyIGN1cnJlbmN5XzEgPSB2b2lkIDAsXG5cdFx0XHRcdCAgICBjdXJyZW5jeV8yID0gdm9pZCAwLFxuXHRcdFx0XHQgICAgY2F0ZWdvcnlfMSA9IHZvaWQgMCxcblx0XHRcdFx0ICAgIGNhdGVnb3J5XzIgPSB2b2lkIDA7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGdpdmUubGVuZ3RoID4gajsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGdpdmVbal0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXHRcdFx0XHRcdFx0Y3VycmVuY3lfMSA9IGdpdmVbal0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW5jeVwiKTtcblx0XHRcdFx0XHRcdGNhdGVnb3J5XzEgPSBnaXZlW2pdLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgX2ogPSAwOyBnZXQubGVuZ3RoID4gX2o7IF9qKyspIHtcblx0XHRcdFx0XHRpZiAoZ2V0W19qXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW5jeV8yID0gZ2V0W19qXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1cnJlbmN5XCIpO1xuXHRcdFx0XHRcdFx0Y2F0ZWdvcnlfMiA9IGdldFtfal0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVuY3lfMSAmJiBjdXJyZW5jeV8yICYmIGNhdGVnb3J5XzEgPT0gY2F0ZWdvcnlfMikge1xuXG5cdFx0XHRcdFx0dmFyIHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcblxuXHRcdFx0XHRcdGlmICh1cmxbMV0gKyB1cmxbMl0gIT0gY3VycmVuY3lfMSArIGN1cnJlbmN5XzIpIHtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyAnLycgKyBjdXJyZW5jeV8xICsgJy8nICsgY3VycmVuY3lfMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRhY3RpdmVDZWxsKGdpdmUsIGdldCwgJ2NsaWNrJyk7XG5cdGFjdGl2ZUNlbGwoZ2V0LCBnaXZlLCAnY2xpY2snKTtcblx0cmVkaXJlY3QoY29sLCBnaXZlLCBnZXQsICdjbGljaycpO1xuXG5cdGFjdGl2ZUNlbGwoZ2l2ZSwgZ2V0LCAndG91Y2gnKTtcblx0YWN0aXZlQ2VsbChnZXQsIGdpdmUsICd0b3VjaCcpO1xuXHRyZWRpcmVjdChjb2wsIGdpdmUsIGdldCwgJ3RvdWNoJyk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRvZ2dsZUJveCA9IGZ1bmN0aW9uIHRvZ2dsZUJveChlbCkge1xuXHRcdGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBib3ggPSAkKHRoaXMpLnBhcmVudHMoJy50b2dnbGVyLW1vcmUtaW5mb19faXRlbScpLmZpbmQoJy50b2dnbGVyLW1vcmUtaW5mb19fYm94LXRvZ2dsZScpO1xuXHRcdFx0dmFyIGljb24gPSAkKHRoaXMpLnBhcmVudHMoJy50b2dnbGVyLW1vcmUtaW5mb19faXRlbScpLmZpbmQoJy50b2dnbGVyLW1vcmUtaW5mb19faWNvbl90b2dnbGUnKTtcblx0XHRcdGlmICghYm94LmlzKFwiOnZpc2libGVcIikpIHtcblx0XHRcdFx0Ym94LnNob3coKTtcblx0XHRcdFx0aWNvbi5yZW1vdmVDbGFzcygnZmEtYW5nbGUtZG93bicpLmFkZENsYXNzKCdmYS1hbmdsZS11cCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ym94LmhpZGUoKTtcblx0XHRcdFx0aWNvbi5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHR0b2dnbGVCb3goJCgnLnRvZ2dsZXItbW9yZS1pbmZvX19idG4tdG9nZ2xlJykpO1xuXHR0b2dnbGVCb3goJCgnLnRvZ2dsZXItbW9yZS1pbmZvX19pY29uX3RvZ2dsZScpKTtcbn0pKCk7Il19
