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
			var images = [ ];
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
	var section_elements = document.getElementsByClassName( 'h2_button' );
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
//get certificates
	fetch( "notes.php", {
		method: 'post',
		headers: {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: 'get_cert=getcert'
	} )
	.then( function( response ){
		if( response.status === 500 || response.status === 200 ){
			return response.json()
			.then( function( data ){
				displayElem( data, /(certificates\/|-)/g, "certificate-icon.png", "certs_content_div" );
			} );
		}
	} )
	.catch( function( error ){
		console.log( 'Request failed', error );
	} );
//get notes
	fetch( "notes.php", {
		method: 'post',
		headers: {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: 'get_notes=getnotes'
	} )
	.then( function( response ){
		if( response.status === 500 || response.status === 200 ){
			return response.json()
			.then( function( data ){
				//displayNotes( data );
				displayElem( data, /(notes\/|-)/g, "notes-icon.png", "notes_content_div" );
			} );
		}
	} )
	.catch( function( error ){
		console.log( 'Request failed', error );
	} );
	function displayElem( elem_array, replace_dashes, icon, target_elem ){
		var template = `<div class="row">`;
		for( var i = 1; i < elem_array.length; i++ ){
			var title = elem_array[i].replace( replace_dashes, " " );
			template += `<div class="col-xs-6 col-sm-4 col-md-2">
						<div class="thumbnail">
							<img src="images/${icon}" alt="${title}">
							<div class="caption">
								<h3>${title}</h3>
								<p><a href="${elem_array[i]}" class="btn btn-primary" target="_blank" role="button">Open</a></p>
							</div>
						</div>
					</div>`;
			if( i >= 6 && i % 6 === 0 ){
				template += `</div><div class="row">`;
			}
		}
		template += `</div>`;
		document.getElementById( target_elem ).innerHTML = template;
	}
} )();