var GalleryHolder = {
//set all properties
	anim_gall_width: 15,
	anim_opacity: 0,
	slot_count:  0,
	row_count: 0,
	slot_width: 120,
	gallery: [],
	//extra_slots: this.gallery_size % 3, // 1
	//row_min_slots: ( this.gallery_size - this.extra_slots ) / 3, //8
	//row_max_slots: ( ( this.gallery_size - this.extra_slots ) / 3 ) + this.extra_slots, //9
	//gallery_width: this.row_max_slots * this.slot_width, //1080
	is_gallery_filled: false,
	gallery_holder: "",
	//gallery_holders: [ "graphics_holder_div", "hobbies_holder_div", "web_holder_div" ],
	//gallery_holder_template: '<div id="gallery_holder_div"><div id="scroll_left_div" class="button_scroller" onMouseOver="GalleryHolder.scrollGLeft();" onMouseOut="GalleryHolder.stopGScroll();"><img src="images/layout/scrolling-button-left.png" width="27" height="25" /></div><div id="gallery_div"><div id="row_1" class="gallery_row"></div><div id="row_2" class="gallery_row"></div><div id="row_3" class="gallery_row"></div></div><div id="scroll_right_div" class="button_scroller" onMouseOver="GalleryHolder.scrollGRight();" onMouseOut="GalleryHolder.stopGScroll();"><img src="images/layout/scrolling-button-right.png" width="27" height="25" /></div></div>',
	fillUpGallery: function( ){
//fill in images into gallery holder ///////////////////////////////////////////////////////////////////////////////////////////
/*
		for( var i = 0; i < GalleryHolder.gallery_holders.length; i++ ){
			if( GalleryHolder.gallery_holders[ i ] == GalleryHolder.gallery_holder ){
				$( "#" + GalleryHolder.gallery_holders[ i ] ).html( GalleryHolder.gallery_holder_template );
			}else{
				$( "#" + GalleryHolder.gallery_holders[ i ] ).html( "" );
			}
		}
*/
		//reset row count
		GalleryHolder.row_count = 0;
		var gallery_size = GalleryHolder.gallery.length;
		var extra_slots = gallery_size % 3;
		var row_min_slots =  ( gallery_size - extra_slots ) / 3;
		var row_max_slots = ( ( gallery_size - extra_slots ) / 3 ) + extra_slots;
		var gallery_width = row_max_slots * GalleryHolder.slot_width;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).width( gallery_width );
		for( var i = 0; i < GalleryHolder.gallery.length; i++ ){
			var fill_row = "";
			fill_row += "<div class=\"image_holder\">\n";
			fill_row += "<a href=\"" + GalleryHolder.gallery[i].location + "\" target=\"_blank\" ><img src=\"" + GalleryHolder.gallery[i].tn_location + "\" height=\"100\" onmouseover=\"GalleryHolder.expandImage('" + GalleryHolder.gallery[i].location + "')\" alt=\"" + GalleryHolder.gallery[i].name + "\" onmouseout=\"GalleryHolder.stopImgExpand();\" /></a>\n";
			fill_row += "</div>\n";
			GalleryHolder.slot_count += 1;
			if( GalleryHolder.slot_count == row_min_slots ){
				GalleryHolder.row_count += 1;
				GalleryHolder.slot_count = 0;
			}//end if
			switch( GalleryHolder.row_count ){
			case 0:
				//add to row 1
				$( "#" + GalleryHolder.gallery_holder ).find( ".row_1" ).append( fill_row );
				break;
				case 1:
				//add to row 2
				$( "#" + GalleryHolder.gallery_holder ).find( ".row_2" ).append( fill_row );
				break;
				case 2:
				case 3:
				//add to row 3
				$( "#" + GalleryHolder.gallery_holder ).find( ".row_3" ).append( fill_row );
				break;
			}
		}
		//GalleryHolder.is_gallery_filled = true;
	},
// open close gallery animation ///////////////////////////////////////////////////////////////////////////////////////////
	animOpenGallery: function( ){
		sync_gallery = true;
		GalleryHolder.anim_gall_width = GalleryHolder.anim_gall_width + 15;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( GalleryHolder.anim_gall_width  );
			if( GalleryHolder.anim_gall_width >= 441 ){
				setTimeout( 'clearInterval( anim_ogallery_interval )', 0 );
				$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( 441  );
				GalleryHolder.anim_gall_width = 441;
				$( "#" + GalleryHolder.gallery_holder ).find( ".scroll_right_div" ).css( 'opacity', '1' );
			}//end if
			//console.log( GalleryHolder.anim_gall_width );
	},
	 animCloseGallery: function( ){
		sync_gallery = false;
		//GalleryHolder.anim_gall_width = GalleryHolder.anim_gall_width - 15;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( GalleryHolder.anim_gall_width );
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( 15 );
		GalleryHolder.anim_gall_width = 15;
		if( GalleryHolder.anim_gall_width <= 15 &&  typeof anim_cgallery_interval != 'undefined' ){
			setTimeout( 'clearInterval( anim_cgallery_interval )', 0 );
			$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( 15 );
			GalleryHolder.anim_gall_width = 15;
		}
		//console.log( GalleryHolder.anim_gall_width );
	},
	 animOpacityShow: function( ){
		GalleryHolder.anim_opacity = GalleryHolder.anim_opacity + 0.1;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).css( 'opacity', GalleryHolder.anim_opacity );
		if( GalleryHolder.anim_opacity >= 1 ){
			setTimeout( 'clearInterval(anim_opacitys_interval)', 0 );
			$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).css( 'opacity', '1' );
			GalleryHolder.anim_opacity = 1;
		}//end if
	},
	animOpacityHide: function( ){
		GalleryHolder.anim_opacity = GalleryHolder.anim_opacity - 0.1;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).css( 'opacity', GalleryHolder.anim_opacity );
		if( GalleryHolder.anim_opacity <= 0 ){
			setTimeout( 'clearInterval( anim_opacityh_interval )', 0 );
			$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).css( 'opacity', '0' );
			GalleryHolder.anim_opacity = 0;
		}//end if
	},
	animOpacity: function( ){
		//$( "#" + GalleryHolder.gallery_holder ).find( ".scroll_right_div" ).css( 'opacity', '1' );
		if( $( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).css( 'opacity' ) == 0 ){
			anim_opacitys_interval = setInterval( function( ){
				GalleryHolder.animOpacityShow( );
				}, 30 );
			anim_opacitys_interval;
		}//end if
	},
	ocGallery: function( ){
		//hide the right button
	$( ".scroll_right_div" ).css( 'opacity', '0' );
		//if( !GalleryHolder.is_gallery_filled ){
			GalleryHolder.fillUpGallery( );
			//GalleryHolder.is_gallery_filled = true;
		//}//end if
		GalleryHolder.animOpacity( );
		if( GalleryHolder.anim_gall_width <= 15 ){
			anim_ogallery_interval = setInterval( function( ){
				GalleryHolder.animOpenGallery( );
				}, 30 );
			anim_ogallery_interval;
		}//end if
	},
	ocGalleryStart: function( ){
		var startG = setTimeout( function( ){
			GalleryHolder.ocGallery( );
			}, 200 );
		startG;
	},
//functions to stop intervals for parent website
	StopOpenGallAnim: function( ){
		setTimeout( 'clearInterval( anim_ogallery_interval )', 0 );
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( 441 );
		GalleryHolder.anim_gall_width = 441;
		
	},
	StopCloseGallAnim: function( ){
		setTimeout( 'clearInterval(anim_cgallery_interval)', 0 );
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_holder_div" ).width( 15 );
		anim_gall_width = 15;
	},
//scroll gallery ///////////////////////////////////////////////////////////////////////////////////////////
	scrolling_max: 0,
	scroll_g_at: 0,
	scrolling_left: false,
	scrolling_right: false,
	scrollingGLeft: function( ){
		GalleryHolder.scroll_g_at = GalleryHolder.scroll_g_at + 10;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset( { left: GalleryHolder.scroll_g_at } );
		if( GalleryHolder.scroll_g_at >= 451 ){
			setTimeout( 'clearInterval( anim_scrollGLeft_interval )', 0 );
			GalleryHolder.scroll_g_at = 451;
			$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset( { left: GalleryHolder.scroll_g_at } );
		}
		console.log( "max: " + GalleryHolder.scrolling_max + ", " + GalleryHolder.scroll_g_at + " Offset: " + $( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset().left );
	},
	scrollingGRight: function( ){
		GalleryHolder.scroll_g_at = GalleryHolder.scroll_g_at - 10;
		$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset( { left: GalleryHolder.scroll_g_at } );
		if( GalleryHolder.scroll_g_at <= GalleryHolder.scrolling_max ){
			setTimeout( 'clearInterval( anim_scrollGRight_interval )', 0 );
			GalleryHolder.scroll_g_at = GalleryHolder.scrolling_max;
			$( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset( { left: GalleryHolder.scroll_g_at } );
		}//end if
		console.log( "max: " + GalleryHolder.scrolling_max + ", " + GalleryHolder.scroll_g_at + " Offset: " + $( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset().left );
	},
	scrollGLeft: function( ){
		GalleryHolder.scrolling_left = true;
		GalleryHolder.scrolling_right = false;
		anim_scrollGLeft_interval = setInterval( function( ){
			GalleryHolder.scrollingGLeft( );
			}, 30 );
		anim_scrollGLeft_interval;
	},
	scrollGRight: function( ){
		var gallery_size = GalleryHolder.gallery.length;
		var extra_slots = gallery_size % 3;
		var row_max_slots = ( ( gallery_size - extra_slots ) / 3 ) + extra_slots;
		var gallery_width = row_max_slots * GalleryHolder.slot_width;
		GalleryHolder.scrolling_max = ( gallery_width - 451 ) * -1;// ( gallery_width - 441 ) * - 1;
		GalleryHolder.scrolling_right = true;
		GalleryHolder.scrolling_left = false;
		anim_scrollGRight_interval = setInterval( function( ){
			GalleryHolder.scrollingGRight( );
			}, 30 );
		anim_scrollGRight_interval;
	},
	stopGScroll: function( ){
		var gallery_div_coord = $( "#" + GalleryHolder.gallery_holder ).find( ".gallery_div" ).offset();
		if( GalleryHolder.scrolling_right ){
			setTimeout( 'clearInterval(anim_scrollGRight_interval)', 0 );
			GalleryHolder.scroll_g_at = parseInt( gallery_div_coord.left );
		}else if( GalleryHolder.scrolling_left ){
			setTimeout( 'clearInterval(anim_scrollGLeft_interval)', 0 );
			GalleryHolder.scroll_g_at = parseInt( gallery_div_coord.left );
		}
	},

//Image expand ///////////////////////////////////////////////////////////////////////////////////////////
	exapandingImage: function( image_link ){
		var viewer_content = "<img src=\"" + image_link + "\" width=\"500\" />";
		$( "#image_viewer_div" ).html( viewer_content );
				//call the following in parent function
				/*
				 image_viewer_div.style.display = "block";
				 image_viewer_div.style.width = 500;
				 var s_width = (screen.width / 2) - (parseInt(image_viewer_div.style.width) / 2);
				 image_viewer_div.style.left = s_width + "px";
				 */
		exapandingImage( );
	},
	expandImage: function( image_link ){
		expand_img_timer = setTimeout( function( ){
			GalleryHolder.exapandingImage( image_link );
			}, 1000 );
		expand_img_timer;
	},
	stopImgExpand: function( ){
		clearTimeout( expand_img_timer );
	}
};