;(function ($) {

	navigationScroll = function (element) {
		'use strict';

		var $window = $(window),
			$element = $(element),
			$scrollTop = $window.scrollTop(),
			$elementTop = $element.offset().top;

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