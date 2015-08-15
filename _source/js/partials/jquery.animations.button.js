(function() {
    materialButton = function() {
        'use strict';

        // Store Dom elements
        var $buttons     = $('.btn, .nav-item, button');
        var circleClass  = 'btn-circle';
        var clickedClass = 'clicked';
        var fadeOutTime  = 250;

        // Event listeners
        $buttons.off('mousedown mouseup mouseleave');
        $buttons.on('mousedown', addCircle);
        $buttons.on('mouseup mouseleave', removeCircle);


        $buttons.addClass('btn-js');

        function addCircle(event) {
            var $this = $(this);
            var offset = $this.offset();
            var offsetY = (event.pageY - offset.top);
            var offsetX = (event.pageX - offset.left);
            var circle = $('<span class="' + circleClass + '"></span>').css({ 'top' : offsetY, 'left': offsetX });

            $this.addClass(clickedClass);
            $this.append(circle);
        }

        function removeCircle(event) {
            var $this = $(this);
            $this.removeClass(clickedClass)
            $this.find('.btn-circle').fadeOut( fadeOutTime, function() {
                $(this).remove();
            });
            $(window).trigger('hideNav');
        }
    }
})();