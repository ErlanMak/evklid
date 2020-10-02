window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#menu').classList.toggle('header__nav-active')
		document.querySelector('#burger').classList.toggle('header__burger-active')
	})
	// document.querySelectorAll('.question__li').addEventListener('click', function () {
	// 	document.querySelector('.question__img').classList.toggle('question__img-active')
	// })

	// document.querySelectorAll('.question__li').forEach(function (element) {
	// 	element.addEventListener('click', function () {
	// 		document.querySelectorAll('.question__img').classList.toggle('question__img-active')
	// 	})
	// })
	document.querySelectorAll('.question__li').forEach(function (element) {
		element.addEventListener('click', function () {
			this.querySelector('.question__img').classList.toggle('question__img-active')
		})
	})
})


var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

// accordionn
$(function () {
	$("#accordion").accordion();
});