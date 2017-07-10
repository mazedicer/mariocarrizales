( function(){
//animations

	setTimeout( function(){
		anime( {
			targets: '.anime_title',
			translateX: function( el ){
				return el.getAttribute( 'data-x' );
			},
			translateY: function( el, i ){
				return 250 + ( -50 * i );
			},
			scale: function( el, i, l ){
				return ( l - i ) + .25;
			},
			rotate: function(){
				return anime.random( -360, 360 );
			},
			duration: function(){
				return anime.random( 800, 1600 );
			},
			direction: 'reverse', // Play the animation in reverse
			delay: function(){
				return anime.random( 0, 1000 );
			}
		} );
		anime( {
			targets: '#portfolio_image',
			opacity: 1, // Animate all divs opacity to .8
			//backgroundColor: '#FFF' // Animate all divs background color to #FFF
			//left: '80%', // Animate all divs left position to 80%
		} );
		anime( {
			targets: '#portfolio_image_div',
			//left: '80%', // Animate all divs left position to 80%
			width: 170, // Animate all divs opacity to .8
			//backgroundColor: '#FFF' // Animate all divs background color to #FFF
		} );
		anime( {
			targets: '.full_width',
			//left: '80%', // Animate all divs left position to 80%
			opacity: 0
					//backgroundColor: '#FFF' // Animate all divs background color to #FFF
		} );
		//preload images
		function preload(){
			var images = [];
			for( i = 0; i < preload.arguments.length; i++ ){
				images[i] = new Image();
				images[i].src = preload.arguments[i];
			}
		}
		preload(
			"images/selfie1000x1000_0.jpg",
			"images/selfie1000x1000_1.jpg",
			"images/selfie1000x1000_2.jpg",
			"images/selfie1000x1000_3.jpg"
		);

	}, 2000 );
	setTimeout( function(){
		anime( {
			targets: '.full_width',
			//left: '80%', // Animate all divs left position to 80%
			opacity: 1
					//backgroundColor: '#FFF' // Animate all divs background color to #FFF
		} );
		anime( {
			targets: '.full_width',
			translateX: function( el ){
				return el.getAttribute( 'data-x' );
			},
			elasticity: function( target, index, totalTargets ){
				// Elasticity multiplied by every div index, in descending order
				return 100 + ( ( totalTargets - index ) * 100 );
			},
			direction: 'reverse', // Play the animation in reverse
			delay: function( el ){
				//return anime.random( 0, 1000 );
				return el.getAttribute( 'data-x' );
			}
		} );
	}, 5000 );

//section show/hide
	var section_elements = document.getElementsByClassName( 'full_width' );
	var section_contents = document.getElementsByClassName( 'content_div' );
	for( var i = 0; i < section_elements.length; i++ ){
		showContents.apply( section_elements[i], [ section_elements[i], section_contents[i] ] )
	}
	function showContents( section, content ){
		content.style.display = "none";
		section.onclick = function(){
			show_hide = ( content.style.display == "none" ) ? "block" : "none";
			content.style.display = show_hide;
		};
	}
	;
//change portrait image
	var portrait_image = document.getElementById( "portfolio_image" );
	function changeImage(){
		var image_num = 3;
		portrait_image.onclick = function(){
			image_num = ( image_num == 0 ) ? 1 : ( image_num == 1 ) ? 2 : ( image_num == 2 ) ? 3 : 0;
			this.src = `images/selfie1000x1000_${image_num}.jpg`;
		};
	}
	changeImage();

} )();