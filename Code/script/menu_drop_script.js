jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	var position = 'up';
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		if( position = 'up' ) {

			position = 'down';
			console.log(position);
		} else if ( position = 'down' ) {
			position = 'up';
			console.log(position);
		} else {

			position = 'up'

			console.log(position);
		}
		


		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}

		console.log($( document ).height());

	});


	$("a[href='#contact']").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");

		return false;

	});



});