import $ from 'jquery'

$(document).ready(() => {
	$('.header__prime__button').click(() => {
		$('.popup').toggleClass('show')
		$('.background').toggleClass('show')
	}).hover(() => {
		$('.header__prime__button__background').toggleClass('button__background__move')
	})
	$('.header__menu__online__button').click(() => {
		$('.popup').toggleClass('show')
		$('.background').toggleClass('show')
	})
	$('.popup__close').click(() => {
		$('.popup').toggleClass('show')
		$('.background').removeClass('show')
	})
	$('.popup__form__button').click(() => {
		$('.popup__accept').toggleClass('show')
		$('.popup').toggleClass('show')
	}).hover(() => {
		$('.popup__form__button__background').toggleClass('button__background__move')
	})
	$('.popup__accept__close').click(() => {
		$('.popup__accept').toggleClass('show')
		$('.background').removeClass('show')
	})
	$('.header__prime__card__hint__show').hover(() => {
		$('.header__prime__card__hint').toggleClass('appear')
	})
	$('.background').click(() => {
		$('.background').removeClass('show')
		$('.popup').removeClass('show')
		$('.popup__accept').removeClass('show')
	})
})
