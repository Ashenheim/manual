;(function($) {
  materialButton = function(element) {
    'use strict';

    var buttons = $(element);

    if (buttons[0]) {

        buttons
            .off('mousedown mouseup mouseout')
            .on('mousedown', function(event) {

                var button = $(this),
                    offset = button.offset(),
                    offsetY = (event.pageY - offset.top),
                    offsetX = (event.pageX - offset.left),
                    clickTimeout;


                button
                    .addClass('clicked')
                    .append(
                        $('<span class="btn-circle"></span>').css({
                            'top' : offsetY,
                            'left': offsetX
                        })
                    );

                $(window).trigger('hideNav');

            }).on('mouseup mouseout', function(event) {

                var button = $(this);

                button
                    .removeClass('clicked')
                    .find('.btn-circle').fadeOut(function() {
                        $(this).remove();
                    });
                });

        } // End of IF

    } // End of function
}(jQuery));