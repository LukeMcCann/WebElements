
$(function() {

var Page = (function() {

	var $navArrows = $( '#nav-arrows' ).hide(),
	    $navDots = $( '#nav-dots' ).hide(),
	    $navOptions = $( '#nav-options' ).hide(),
		$shadow = $( '#shadow' ).hide(),
		slicebox = $( '#sb-slider' ).slicebox( {
			onReady : function() {

				// uncomment to return elements to the page
				// these elements were used for testing purposes
				$navArrows.show();
				$navOptions.show();
				//$navDots.show();

				$shadow.show();
				slicebox.play();
			},

			orientation : 'r',
			cuboidsRandom : true,
			disperseFactor : 30

		} ),
		
		init = function() {

			initEvents();
			
		},
		initEvents = function() {

			// navigation fucntionality
			$navArrows.children( ':first' ).on( 'click', function() {

				slicebox.next();
				return false;

			} );

			$navArrows.children( ':last' ).on( 'click', function() {
				
				slicebox.previous();
				return false;

			} );

			// slideshow functionality
			$('#navPlay').on( 'click' , function() {

				slicebox.play();
				return false;

			} );

			$('#navPause').on( 'click' , function() {

				slicebox.pause();
				return false;

			} );
		};

		return { init : init };

})();

Page.init();

});
