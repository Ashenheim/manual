;(function() {

	navigation = function () {
		'use strict';

		var $window = $(window),
			$navigation = $('.navigation'),
			$hamburger = $('.hamburger'),
			$content = $('.site-content .inner'),
			navLink = $navigation.find('a'),
			scrollTop = $window.scrollTop(),
			navigationTop = $navigation.offset().top,
			navigationBottom = $navigation.offset().top + $navigation.height();

		/*  Initialize
			------------------------------------ */
		function init() {
			events();
		}


		/*  Event listeners
			------------------------------------ */

		function events() {
			$hamburger.off('click').on('click', toggleMenu);
			navLink.off('click').on('click', toggleMenu);
			$window.off('scroll').on('scroll', stickyMenu);
		}


		/*  Functions
			------------------------------------ */

		function toggleMenu(event) {
			$('html').toggleClass('navigation-is-active');
		}

		function stickyMenu(event) {
			scrollTop = $window.scrollTop();
			if (scrollTop >= navigationTop) {
				$navigation.addClass('is-fixed');
			} else {
				$navigation.removeClass('is-fixed');
			}
		}

		return init();

	}

})();
