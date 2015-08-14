;(function ($) {

	_navigation = function (element) {
		'use strict';

		var $window = $(window),
			$element = $(element),
			$scrollTop = $window.scrollTop(),
			$elementTop = $element.offset().top,
			$elementBottom = $element.offset().top + $element.height();


		$('.site-content .inner').css({
			'min-height': $elementBottom
		})

		$window.on('scroll', function() {
			$scrollTop = $window.scrollTop();

			if($scrollTop >= $elementTop) {
				$element.addClass('is-fixed');
			} else {
				$element.removeClass('is-fixed');
			}
		});
	}

}(jQuery));