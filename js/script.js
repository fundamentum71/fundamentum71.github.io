//!menu

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	closeOverlay = document.querySelector('.menu__overlay'),
	closeLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});
closeOverlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

closeLink.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

$(document).ready(function () {
	//!validation
	function validationForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				comment: {
					required: true,
					minlength: 20,
				},
				policy: {
					required: true,
				},
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format('Введите минимум {0} символа!'),
				},
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес почты',
				},
				comment: {
					required: 'Пожалуйста, введите текст сообщения',
					minlength: jQuery.validator.format('Введите минимум {0} символов!'),
				},
				policy: {
					required: 'Пожалуйста, ознакомьтесь с политикой конфиденциальности',
				},
			},
		});
	}

	validationForms('#message-form');

	//!cart

	function toggleActive(item) {
		$(item).each(function (i) {
			$(this).on('mouseover', function (e) {
				e.preventDefault();
				$('.square__cart-bottom')
					.eq(i)
					.toggleClass('square__cart-bottom_active');
				$('.square__cart-top').eq(i).toggleClass('square__cart-top_active');
			});
		});
	}
	toggleActive('.works__item');

	function toggleBack(item) {
		$(item).each(function (i) {
			$(this).on('mouseout', function (e) {
				e.preventDefault();
				$('.square__cart-bottom_active')
					.removeClass('square__cart-bottom_active')
					.addClass('square__cart-bottom');

				$('.square__cart-top_active')
					.removeClass('square__cart-top_active')
					.addClass('square__cart-top');
			});
		});
	}
	toggleBack('.works__item');

	//!pageUp
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	$("a[href^='#promo']").click(function () {
		const _href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
		return false;
	});

	//!tabs

	$('ul.works__tabs').on('click', 'li:not(.works__tab-active)', function () {
		$(this)
			.addClass('works__tab-active')
			.siblings()
			.removeClass('works__tab-active')
			.closest('div.works__wrapper')
			.find('div.works__items')
			.removeClass('works__items_active')
			.eq($(this).index())
			.addClass('works__items_active');
	});

	//! mailer
	$('form').submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			//$('#consultation, #order').fadeOut();
			//$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});
});

//!theme-dark
function theme() {
	const toggleTheme = document.querySelector('.dark-theme');
	let el = document.documentElement;

	toggleTheme.addEventListener('click', () => {
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme');
			localStorage.removeItem('theme');
		} else {
			el.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
	});
	if (localStorage.getItem('theme') !== null) {
		el.setAttribute('data-theme', 'dark');
	}
}
theme();
