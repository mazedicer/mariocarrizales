/*
 * MENUBAR javascript:openTopic( [div element holding html of clicked topic] )********************************************************************************************************
 */

//topics list used in openTopic
var topics_list = new Array( 'center_holder_about', 'center_holder_work', 'center_holder_edu', 'center_holder_anim', 'center_holder_graph', 'center_holder_web', 'center_holder_hob', 'center_holder_prog', 'center_holder_mark', 'center_holder_it' );
var banner_mother_div = document.getElementById( "banner_mother_div" );
function openTopic( dom_elem ){
	//arms position check angle 0 is closed so open them
	if( deg == 0 ){
		startRotation( arm_l_div, arm_r_div );
		start_cbc();
	}
	//iterate through topics array
	for( var i = 0; i < topics_list.length; i++ ){
		if( topics_list[i] == dom_elem ){
			//set topic opacity to 0
			setOpacityTo0( document.getElementById( topics_list[i] ) );
			//display the topic
			document.getElementById( topics_list[i] ).style.display = "block";
			//gradually set topic opacity to 1
			animOpacityTo1( document.getElementById( topics_list[i] ) );
			//open containing gallery
			checkIfGalleryActivate( topics_list[i] );
			//gradually change scrolling banner opacity to 0
			banner_mother_div.style.display = "none";
		}else{
			//hide the topic
			document.getElementById( topics_list[i] ).style.display = "none";
		}
	}

}//openTopic 	

function closeTopic( elem ){

	if( deg == 90 ){

		startRotation( arm_l_div, arm_r_div );

		start_cbc();

	}//if

	//gradually set opacity to 0 and hide the topic
	elem.style.display = "none";

	//set scrolling banner opacity to 0
	setOpacityTo0( banner_mother_div );

	//show the scrolling banner
	banner_mother_div.style.display = "block";

	//gradually set scrolling banner opacity to 1
	animOpacityTo1( banner_mother_div );

}//closeTopic

/*
 * OPACITY ********************************************************************************************************
 */

function setOpacityTo0( elem ){

	//set element opacity to 0
	elem.style.opacity = 0;

	//start the opacity animation


}//setOpacityTo0

function animOpacityTo1( elem ){

	//by now, the element's opacity setting should be set to 1 to gradually increase it
	var elem_opacity = elem.style.opacity * 1;

	//alert( "Element: " + elem.id + " Hello from animOpacityTo1" + " " + elem_opacity );

	elem_opacity = elem_opacity + 0.1;

	elem.style.opacity = elem_opacity;

	//first, check the elemen'ts opacity. If it is less than 1, keep running this function
	if( elem_opacity < 1 ){

		//alert( "Element: " + elem.id + " Hello from if" + " " + elem_opacity );	
		setTimeout( function(){
			animOpacityTo1( elem )
		}, 20 );

	}//if

}//animOpacityTo0

var x = 0;
switcherInterval = setInterval( 'imageSwitcher()', 20000 );   //create interval
// ad object
function adNStuff( banner_to_fill, imageURL ){
	this.banner_to_fill = banner_to_fill;
	this.imageURL = imageURL;
}
// ad objects inside array 
var adGallery = new Array();
adGallery[0] = new adNStuff( 'banner_0', 'images/layout/banners/big-brain.png' );
adGallery[1] = new adNStuff( 'banner_1', 'images/layout/banners/sketch.png' );
adGallery[2] = new adNStuff( 'banner_3', 'images/layout/banners/network.png' );
adGallery[3] = new adNStuff( 'banner_4', 'images/layout/banners/art.png' );
adGallery[4] = new adNStuff( 'banner_6', 'images/layout/banners/programming.png' );
adGallery[5] = new adNStuff( 'banner_9', 'images/layout/banners/flash.png' );
adGallery[6] = new adNStuff( 'banner_5', 'images/layout/banners/education.png' );
adGallery[7] = new adNStuff( 'banner_2', 'images/layout/banners/work-experience.png' );
adGallery[8] = new adNStuff( 'banner_11', 'images/layout/banners/comics.png' )
adGallery[9] = new adNStuff( 'banner_7', 'images/layout/banners/3d.png' );
adGallery[10] = new adNStuff( 'banner_8', 'images/layout/banners/web.png' );
adGallery[11] = new adNStuff( 'banner_10', 'images/layout/banners/graphics.png' );


var y = adGallery.length - 1;
// start slideshow
function imageSwitcher(){
	if( x == adGallery.length ){
		x = 0;
	}
	fill_banner_info( adGallery[x].banner_to_fill, adGallery[x].imageURL );
	x = x + 1;
}
function slideShow(){
	switcherInterval;  //start interval
}
// end slideshow
// back/forward buttons
function goBack(){
	clearInterval( switcherInterval );
	if( x <= 0 ){
		x = adGallery.length - 1;
	}else{
		x = x - 1;
	}
	fill_banner_info( adGallery[x].banner_to_fill, adGallery[x].imageURL );
	setTimeout( "switcherInterval = setInterval('imageSwitcher()', 10000)", 0 );
}
function goForward(){
	clearInterval( switcherInterval );
	if( x >= adGallery.length - 1 ){
		x = 0;
	}else{
		x = x + 1;
	}
	fill_banner_info( adGallery[x].banner_to_fill, adGallery[x].imageURL );
	setTimeout( "switcherInterval = setInterval('imageSwitcher()', 10000)", 0 );
}
// end back/forward button

function resetInterval(){
	clearInterval( switcherInterval );
	switcherInterval = setInterval( 'imageSwitcher()', 20000 );   //create interval
	slideShow();
}

//code for home banners buttons



var center_holder_about = "<h2>Welcome To Mario Carrizales' Website</h2> <div id=\"banner_description_div\"> <p>This is Mario Carrizales' Online Portfolio</a> </p> </div><!-- END banner_description_div -->";
var center_holder_hob = "<h2>Hobbies</h2> <div id=\"banner_description_div\">  <p>I didn't realize how sketching is so important until my car...</p> </div><!-- END banner_description_div -->";
var center_holder_work = "<h2>Work Experience</h2> <div id=\"banner_description_div\"> <p>Did you ever shop at Fedco? Well, I was working there when the company...</p></div><!-- END banner_description_div -->";
var center_holder_it = "<h2>Network Administration</h2> <div id=\"banner_description_div\"> <p>Why did I jump from painting to graphics to 3D animation to IT?</p> </div><!-- END banner_description_div -->";
var center_holder_edu = "<h2>Education</h2> <div id=\"banner_description_div\"> <p>I am still going to college because I have always...</p> </div><!-- END banner_description_div -->";
var center_holder_prog = "<h2>Programming</h2> <div id=\"banner_description_div\"> <p>It never occurred to me that I would become efficient in PHP, Javascript, Java, SQL, and VB coming from a rich artistic...</p>  </div><!-- END banner_description_div -->";

var center_holder_anim = "<h2>Animation</h2> <div id=\"banner_description_div\"> <p>My most inspiring moment in 3D was when I saw my creation...</p></div><!-- END banner_description_div -->";
var center_holder_web = "<h2>Web Design</h2> <div id=\"banner_description_div\"> <p>The Internet has become a host of boundless opportunities that...</p></div><!-- END banner_description_div -->";
var center_holder_mark = "<h2>Marketing</h2> <div id=\"banner_description_div\">  <p>When I found Marketing, I saved up to buy my first...</p></div><!-- END banner_description_div -->";
var center_holder_graph = "<h2>Graphics</h2> <div id=\"banner_description_div\"> <p>I could have stopped there but graphics was only...</p></div><!-- END banner_description_div -->";

var banner_link = "";

//handle on banner links
var link_handle_gallery = new Array();

link_handle_gallery[0] = document.getElementById( 'banner_links_1' );
link_handle_gallery[1] = document.getElementById( 'banner_links_2' );
link_handle_gallery[2] = document.getElementById( 'banner_links_3' );
link_handle_gallery[3] = document.getElementById( 'banner_links_4' );
link_handle_gallery[4] = document.getElementById( 'banner_links_5' );
link_handle_gallery[5] = document.getElementById( 'banner_links_6' );
link_handle_gallery[6] = document.getElementById( 'banner_links_7' );
link_handle_gallery[7] = document.getElementById( 'banner_links_8' );
link_handle_gallery[8] = document.getElementById( 'banner_links_9' );
link_handle_gallery[9] = document.getElementById( 'banner_links_10' );
link_handle_gallery[10] = document.getElementById( 'banner_links_11' );
link_handle_gallery[11] = document.getElementById( 'banner_links_12' );

function fill_banner_info( filling_content, image_source ){
	//handle on the image
	var banner_image = document.getElementById( 'banner_image' )

	var banner_link_href = document.getElementById( 'banner_image_link' );

	//handle on the info
	var banner_info = document.getElementById( 'banner_info_div' );

	var position_of_12 = document.getElementById( 'position_banner' );

	switch( filling_content ){

		case "center_holder_about":
			banner_info.innerHTML = center_holder_about;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_about" )';
			position_of_12.innerHTML = "1 of 12 Preview";
			break;

		case "center_holder_work":
			banner_info.innerHTML = center_holder_work;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_work" )';
			position_of_12.innerHTML = "9 of 12 Preview";
			break;

		case "center_holder_edu":
			banner_info.innerHTML = center_holder_edu;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_edu" )';
			position_of_12.innerHTML = "4 of 12 Preview";
			break;

		case "center_holder_anim":
			banner_info.innerHTML = center_holder_anim;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_anim" )';
			position_of_12.innerHTML = "6 of 12 Preview";
			break;

		case "center_holder_graph":
			banner_info.innerHTML = center_holder_graph;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_graph" )';
			position_of_12.innerHTML = "2 of 12 Preview";
			break;

		case "center_holder_web":
			banner_info.innerHTML = center_holder_web;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_web" )';
			position_of_12.innerHTML = "12 of 12 Preview";
			break;

		case "center_holder_hob":
			banner_info.innerHTML = center_holder_hob;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_hob" )';
			position_of_12.innerHTML = "11 of 12 Preview";
			break;

		case "center_holder_prog":
			banner_info.innerHTML = center_holder_prog;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_prog" )';
			position_of_12.innerHTML = "10 of 12 Preview";
			break;

		case "center_holder_mark":
			banner_info.innerHTML = center_holder_mark;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_mark" )';
			position_of_12.innerHTML = "3 of 12 Preview";
			break;

		case "center_holder_it":
			banner_info.innerHTML = center_holder_it;
			banner_image.src = image_source;
			banner_link_href.href = 'javascript:openTopic( "center_holder_it" )';
			position_of_12.innerHTML = "7 of 12 Preview";
			break;
	}
}

var banner_container_width = 1200;
var banner_left = 0;
var scroll_banner_time = 1000;
var scroll_banner_speed = 20;
var scroll_banner_time_interval = 40;
var resolve_left_right = 0;


function hide_left_arrow(){
	document.getElementById( 'banner_left_arrow' ).className = 'push_buttons_on';
//document.getElementById('banner_left_arrow').style.visibility = 'hidden';
	document.getElementById( 'button_left_arrow' ).blur();
}
function uncover_left_arrow(){
	document.getElementById( 'banner_left_arrow' ).className = 'push_buttons';
//document.getElementById('banner_left_arrow').style.visibility = 'visible';
}
function hide_right_arrow(){
	document.getElementById( 'banner_right_arrow' ).className = 'push_buttons_on';
//document.getElementById('banner_right_arrow').style.visibility = 'hidden';
	document.getElementById( 'button_right_arrow' ).blur();
}
function uncover_right_arrow(){
//document.getElementById('banner_right_arrow').style.visibility = 'visible';
	document.getElementById( 'banner_right_arrow' ).className = 'push_buttons';
}

function go_right(){
	hide_left_arrow();
	hide_right_arrow();
	banner_left = banner_left + 20;
	document.getElementById( 'banner_scroll_container_div' ).scrollLeft = banner_left;
	if( banner_left > 399 & banner_left < 401 ){
		uncover_left_arrow();
		uncover_right_arrow();
		document.getElementById( 'left_position_banner' ).innerHTML = "5 - 8 block";
		setTimeout( 'clearInterval(scroll_banner_interval)', 0 );
	}
	if( banner_left > 799 & banner_left < 801 ){
		//uncover_left_arrow();
		uncover_right_arrow();
		document.getElementById( 'left_position_banner' ).innerHTML = "9 - 12 block";
		setTimeout( 'clearInterval(scroll_banner_interval)', 0 );
	}
	/*if (banner_left > 1199 & banner_left < 1201) {
	 setTimeout('clearInterval(scroll_banner_interval)', 0);
	 uncover_left_arrow();
	 uncover_right_arrow();
	 document.getElementById('left_position_banner').innerHTML=banner_left;
	 }*/
}

function scrolling_right(){
	if( banner_left <= 799 ){
		scroll_banner_interval = setInterval( 'go_right()', 40 );
		scroll_banner_interval;
	}
}

function go_left(){
	hide_left_arrow();
	hide_right_arrow();
	banner_left = banner_left - 20;
	document.getElementById( 'banner_scroll_container_div' ).scrollLeft = banner_left;
	switch( banner_left ){
		/*case 1200:
		 setTimeout('clearInterval(scroll_banner_interval)', 0);
		 uncover_left_arrow();
		 uncover_right_arrow();
		 document.getElementById('left_position_banner').innerHTML="5 - 8 block";
		 break;*/
		case 800:
			uncover_left_arrow();
			uncover_right_arrow();
			document.getElementById( 'left_position_banner' ).innerHTML = "9 - 12 block";
			setTimeout( 'clearInterval(scroll_banner_interval)', 0 );
			break;
		case 400:
			uncover_left_arrow();
			uncover_right_arrow();
			document.getElementById( 'left_position_banner' ).innerHTML = "5 - 8 block";
			setTimeout( 'clearInterval(scroll_banner_interval)', 0 );
			break;
		case 0:
			uncover_left_arrow();
			//uncover_right_arrow();
			document.getElementById( 'left_position_banner' ).innerHTML = "1 - 4 block";
			setTimeout( 'clearInterval(scroll_banner_interval)', 0 );
			break;
	}
}
function scrolling_left(){
	if( banner_left >= 20 ){
		scroll_banner_interval = setInterval( 'go_left()', 40 );
	}
}

function auto_scroll(){
	switch( banner_left ){
		case 0:
			scrolling_right();
			break;
		case 400:
			if( resolve_left_right % 2 == 1 ){
				scrolling_right();
			}else{
				scrolling_left();
			}
			resolve_left_right++;
			break;
		case 800:
			scrolling_left();
			break;
	}
}


function start_the_banners(){
	x = Math.round( Math.random() * y );
	fill_banner_info( adGallery[x].banner_to_fill, adGallery[x].imageURL );
	slideShow();
}

//center_holder_browse title show hide __________________________________________________________
var cbc = document.getElementById( "center_holder_browse" );

var sync_arms = false;
var sync_motion = false;
var sync_cbc = false;
var sync_gallery = false;


var cbc_top = 0;

function hide_cbc(){
	sync_cbc = false;
	cbc_top = cbc_top - 2;
	cbc.style.top = cbc_top + "px";
	if( cbc_top == -18 ){
		clearInterval( hide_cbc_interval );
		cbc_top = -18;
	}//end if
}//end function

function show_cbc(){
	sync_cbc = true;
	cbc_top = cbc_top + 2;
	cbc.style.top = cbc_top + "px";
	if( cbc_top == 0 ){
		clearInterval( show_cbc_interval );
		cbc_top = 0;
	}//end if
}//end function

function start_cbc(){
	if( cbc_top == 0 ){
		hide_cbc_interval = setInterval( function(){
			hide_cbc();
		}, 30 );
	}else if( cbc_top == -18 ){
		show_cbc_interval = setInterval( function(){
			show_cbc();
		}, 30 );
	}//end of
}//end function


//left right arm rotator __________________________________________________________________________

var deg = 0;
var degr = 0;
//var arm_l_holder_divLeft = 5;
//var arm_l_holder_div = document.getElementById("arm_l_holder_div");
var arm_l_div = document.getElementById( "arm_l_div" );
var arm_r_div = document.getElementById( "arm_r_div" );

arm_l_div.style.MozTransformOrigin = "17px 19px";
arm_l_div.style.WebkitTransformOrigin = "17px 19px";
arm_l_div.style.OTransformOrigin = "17px 19px";
arm_l_div.style.MsTransformOrigin = "17px 19px";
arm_l_div.style.transformOrigin = "17px 19px";

arm_r_div.style.MozTransformOrigin = "278px 17px";
arm_r_div.style.WebkitTransformOrigin = "278px 17px";
arm_r_div.style.OTransformOrigin = "278px 17px";
arm_r_div.style.MsTransformOrigin = "278px 17px";
arm_r_div.style.transformOrigin = "278px 17px";

function rotatecw( elem1, elem2 ){
	sync_arms = true;
	deg = deg + 6;
	degr = degr - 6;
	elem1.style.MozTransform = 'rotate(' + deg + 'deg)';
	elem1.style.WebkitTransform = 'rotate(' + deg + 'deg)';
	elem1.style.OTransform = 'rotate(' + deg + 'deg)';
	elem1.style.MsTransform = 'rotate(' + deg + 'deg)';
	elem1.style.transform = 'rotate(' + deg + 'deg)';

	elem2.style.MozTransform = 'rotate(' + degr + 'deg)';
	elem2.style.WebkitTransform = 'rotate(' + degr + 'deg)';
	elem2.style.OTransform = 'rotate(' + degr + 'deg)';
	elem2.style.MsTransform = 'rotate(' + degr + 'deg)';
	elem2.style.transform = 'rotate(' + degr + 'deg)';

	if( deg == 90 ){
		clearInterval( rotatecw_interval );
		deg = 90;
		degr = 270;
	}//end if
}//end function

function rotateccw( elem1, elem2 ){
	sync_arms = false;
	deg = deg - 6;
	degr = degr + 6;
	elem1.style.MozTransform = 'rotate(' + deg + 'deg)';
	elem1.style.WebkitTransform = 'rotate(' + deg + 'deg)';
	elem1.style.OTransform = 'rotate(' + deg + 'deg)';
	elem1.style.MsTransform = 'rotate(' + deg + 'deg)';
	elem1.style.transform = 'rotate(' + deg + 'deg)';

	elem2.style.MozTransform = 'rotate(' + degr + 'deg)';
	elem2.style.WebkitTransform = 'rotate(' + degr + 'deg)';
	elem2.style.OTransform = 'rotate(' + degr + 'deg)';
	elem2.style.MsTransform = 'rotate(' + degr + 'deg)';
	elem2.style.transform = 'rotate(' + degr + 'deg)';

	if( deg == 0 ){
		clearInterval( rotateccw_interval );
		deg = 0;
		degr = 0;
	}//end if
}//end function


function startRotation( leftArm, rightArm ){
	if( deg == 0 ){

		rotatecw_interval = setInterval( function(){
			rotatecw( leftArm, rightArm );
		}, 30 );

	}else if( deg == 90 ){
		rotateccw_interval = setInterval( function(){
			rotateccw( leftArm, rightArm );
		}, 30 );
	}//end of
}//end function

function syncAnimations(){
	if( sync_arms ){
		clearInterval( rotatecw_interval );
		deg = 90;
		degr = 270;
		arm_l_div.style.MozTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.WebkitTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.OTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.MsTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.transform = 'rotate(' + deg + 'deg)';

		arm_r_div.style.MozTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.WebkitTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.OTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.MsTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.transform = 'rotate(' + degr + 'deg)';
	}else{
		clearInterval( rotateccw_interval );
		deg = 0;
		degr = 0;
		arm_l_div.style.MozTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.WebkitTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.OTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.MsTransform = 'rotate(' + deg + 'deg)';
		arm_l_div.style.transform = 'rotate(' + deg + 'deg)';

		arm_r_div.style.MozTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.WebkitTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.OTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.MsTransform = 'rotate(' + degr + 'deg)';
		arm_r_div.style.transform = 'rotate(' + degr + 'deg)';
	}//end if

	if( sync_cbc ){
		clearInterval( show_cbc_interval );
		cbc_top = 0;
		cbc.style.top = cbc_top + "px";
	}else{
		clearInterval( hide_cbc_interval );
		cbc_top = -18;
		cbc.style.top = cbc_top + "px";
	}//end if

	/*
	 if(sync_gallery){
	 art_gallery_iframe.contentWindow.StopOpenGallAnim();
	 }else{
	 art_gallery_iframe.contentWindow.StopCloseGallAnim();
	 }//end if
	 */
}//end function	

//code for motion content__________________________________________________________________________________

motion_content_holder = document.getElementById( 'motion_content_div' );
var growth = 20;
var shrinkage = 600;
var the_menu;
var the_grow_factor;
var opened_motion_holder = false; // open or close state of motion holder
var please_reopen = false; // request to reopen in case user jumped to another section

function checkIfGalleryActivate( menu ){
	switch( menu ){
		case "center_holder_graph":
			GalleryHolder.gallery_holder = "graphics_holder_div";
			GalleryHolder.gallery = gallery_list;
			GalleryHolder.animCloseGallery();
			GalleryHolder.ocGalleryStart();
			break;
		case "center_holder_hob":
			GalleryHolder.gallery_holder = "hobbies_holder_div";
			GalleryHolder.gallery = gallery_list_comics;
			GalleryHolder.animCloseGallery();
			GalleryHolder.ocGalleryStart();
			break;
		case "center_holder_web":
			GalleryHolder.gallery_holder = "web_holder_div";
			GalleryHolder.gallery = gallery_list_web;
			GalleryHolder.animCloseGallery();
			GalleryHolder.ocGalleryStart();
			break;
	}//end switch
}//end function

function closeActiveGallery(){
	GalleryHolder.ocGallery();
}//end function

/*grow()
 sync_motion = true
 opened_motion_holder = true;
 checkIfGalleryActivate(menu)
 * 
 * shrink()
 sync_motion = false;
 opened_motion_holder = false;
 syncAnimations();
 * 
 * closeMotionHolder()
 startRotation(arm_l_div, arm_r_div);
 start_cbc();
 closeActiveGallery();
 */


//image viewer opener ____________________________________________________________________________________________________________

var image_viewer_div = document.getElementById( "image_viewer_div" );

function exapandingImage(){
	image_viewer_div.style.display = "block";
	image_viewer_div.style.width = 500 + "px";
	//var s_width = (screen.width / 2) - (parseInt(image_viewer_div.style.width) / 2);
	//alert("s_width: " + s_width + " " + "image_viewer_div.style.width: " + image_viewer_div.style.width);
	//image_viewer_div.style.left = (s_width-20) + "px";
	//image_viewer_div.style.top = -50 + "px";
}//end function

//banner links effect _________________________________________________________________________________________________________________

var animImage1;
var animImage2;
var animImage3;
var animImage4;
var anim_img_count = 0;
var img_mod_height = 37;
var img_margin_top = 0;
var sing_h = 37;
var sing_top = 0;
var increase = true;
var sing_increase = true;
var blow_img_intrvl = false;
var sing_img_intrvl = false;
var LClick = 2;
var RClick = 0;
var brain_tn = document.getElementById( "brain_tn" );
var work_tn = document.getElementById( "work_tn" );
var education_tn = document.getElementById( "education_tn" );
var programming_tn = document.getElementById( "programming_tn" );
var network_tn = document.getElementById( "network_tn" );
var sketch_tn = document.getElementById( "sketch_tn" );
var art_tn = document.getElementById( "art_tn" );
var flash_tn = document.getElementById( "flash_tn" );
var comics_tn = document.getElementById( "comics_tn" );
var threed_tn = document.getElementById( "threed_tn" );
var web_tn = document.getElementById( "web_tn" );
var graphics_tn = document.getElementById( "graphics_tn" );
var blow_img_interval;
var animSingImgInterval;
var arrayFullLinks = new Array();
arrayFullLinks.push( brain_tn, work_tn, education_tn, programming_tn, network_tn, sketch_tn, art_tn, flash_tn, comics_tn, threed_tn, web_tn, graphics_tn );
var arrayLWtoE = new Array();
arrayLWtoE.push( programming_tn, network_tn, sketch_tn, art_tn );
var arrayLEtoW = new Array();
arrayLEtoW.push( network_tn, programming_tn, education_tn, work_tn );
var arrayRWtoE = new Array();
arrayRWtoE.push( flash_tn, comics_tn, threed_tn, web_tn );
var arrayREtoW = new Array();
arrayREtoW.push( comics_tn, flash_tn, art_tn, sketch_tn );

function blowImg( live_img ){
	blow_img_intrvl = true; // blow_img_interval is on
	//increase height, increase margintop
	if( increase ){
		img_mod_height = img_mod_height + 3;
		img_margin_top = img_margin_top - 1;
		live_img.style.height = img_mod_height + "px";
		live_img.style.marginTop = img_margin_top + "px";
	}else if( increase == false ){
		img_mod_height = img_mod_height - 3;
		img_margin_top = img_margin_top + 1;
		live_img.style.height = img_mod_height + "px";
		live_img.style.marginTop = img_margin_top + "px";
	}//end if

	if( img_mod_height >= 50 ){
		increase = false;
	}//end if

	if( img_mod_height <= 37 ){
		clearInterval( blow_img_interval );
		blow_img_intrvl = false;
		img_mod_height = 37;
		img_margin_top = 0;
		live_img.style.height = img_mod_height + "px";
		live_img.style.marginTop = img_margin_top + "px";

		increase = true;
		//create interval for next image
		anim_img_count += 1;
		switch( anim_img_count ){
			case 1:
				blow_img_interval = setInterval( function(){
					blowImg( animImage2 );
				}, 30 );
				break;
			case 2:
				blow_img_interval = setInterval( function(){
					blowImg( animImage3 );
				}, 30 );
				break;
			case 3:
				blow_img_interval = setInterval( function(){
					blowImg( animImage4 );
				}, 30 );
				break;
		}//end switch
	}//end if
}//end function

function blowSingImg( theImgLink ){

	//increase height, increase margintop
	if( sing_increase == true ){
		sing_h = sing_h + 3;
		sing_top = sing_top - 1;
		theImgLink.style.height = sing_h + "px";
		theImgLink.style.marginTop = sing_top + "px";
	}else if( sing_increase == false ){
		sing_h = sing_h - 3;
		sing_top = sing_top + 1;
		theImgLink.style.height = sing_h + "px";
		theImgLink.style.marginTop = sing_top + "px";
	}//end if

	if( sing_h >= 50 ){
		sing_increase = false;
	}//end if

	if( sing_h <= 37 ){
		clearInterval( animSingImgInterval );
		sing_img_intrvl = false;
		sing_h = 37;
		sing_top = 0;
		theImgLink.style.height = sing_h + "px";
		theImgLink.style.marginTop = sing_top + "px";
		sing_increase = true;
	}//end if

}//end function

function animSingleLink( theImgLink ){

	if( blow_img_intrvl == false && sing_img_intrvl == false ){

		animSingImgInterval = setInterval( function(){
			blowSingImg( theImgLink );
		}, 30 );

		sing_img_intrvl = true; //single image link animation is on	

	}//end if
}//end function

function animImgLinks( ImgListToAnimate ){

	anim_img_count = 0;
	animImage1 = ImgListToAnimate[0];
	animImage2 = ImgListToAnimate[1];
	animImage3 = ImgListToAnimate[2];
	animImage4 = ImgListToAnimate[3];
	blow_img_interval = setInterval( function(){
		blowImg( animImage1 );
	}, 30 );

}//end function

function animBannerLinks( LorR ){

	if( LClick == 2 && RClick == 0 && LorR == "R" ){ //RClick only
		LClick = 1;
		RClick = 1;
		animImgLinks( arrayLWtoE ); //(3,4,5,6) animation (height:47px, margin-top:-5px) education-tn, programming-tn, network-tn, sketch-tn
	}else if( LClick == 1 && RClick == 1 ){
		//LClick or RClick available
		if( LorR == "L" ){
			//LClick
			LClick = 2;
			RClick = 0;
			animImgLinks( arrayLEtoW ); //(6,5,4,3) animation	
		}else{
			//RClick
			LClick = 0;
			RClick = 2;
			animImgLinks( arrayRWtoE ); //(7,8,9,10) animation art-tn, flash-tn, comics-tn, 3d-tn
		}//end if
	}else if( LClick == 0 && RClick == 2 && LorR == "L" ){
		//LClick only
		LClick = 1;
		RClick = 1;
		animImgLinks( arrayREtoW ); //(10, 9, 8, 7) animation
	}else{
		var nono = 0;
	}//end if

}//end function	

$( document ).ready(function() {
	console.log( "ready!" );
	start_the_banners;
	hide_right_arrow();
});

	