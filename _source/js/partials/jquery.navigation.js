navigation = (function () {
    'use strict';

    /*  Initialize
        ------------------------------------ */
    function init(success) {
        var $window = $(window),
            $navigation = $('.navigation'),
            $navLink = $navigation.find('a'),
            $overlay = $('.overlay'),
            $hamburger = $('.hamburger'),
            $content = $('.site-content .inner');

        $hamburger.off('click').on('click', toggleMenu);
        $navLink.off('click').on('click', removeMenu);
        $overlay.off('click').on('click', removeMenu);
    }


    /*  Functions
        ------------------------------------ */

    function toggleMenu(event) {
        $('html').toggleClass('navigation-is-active');
    }

    function removeMenu(event) {
        $('html').removeClass('navigation-is-active');
    }

    events.on('navigation', init);

})();
