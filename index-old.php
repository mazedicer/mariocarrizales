<?php 
include("templates/mario-c-head.php"); 
$header_template = file_get_contents("templates/mario-c-head-main.php"); 
$header = file_get_contents("templates/header.php"); 
$menubar = file_get_contents("templates/menubar.php"); 
$replace_this = array( "{header}", "{menubar}" );
$replace_with = array( $header, $menubar );
$template = str_replace( $replace_this, $replace_with, $header_template );
echo $template;
?>
<div id="arm_l_holder_div" width='295' height='34'>
	<div id="arm_l_joint_div" width='27' height='27'>
         <img id="left_arm_joint" src="images/layout/armjoint.png" width="27" height="27" />    </div> 
	<div id="arm_l_div" width='295' height='34'>
         <img src="images/layout/arm_l.png" width="295" height="34" />    </div>
</div>
<div id="arm_r_holder_div" width='295' height='34'>
	<div id="arm_r_joint_div" width='27' height='27'>
		<img src="images/layout/armjoint.png" width="27" height="27" />
	</div>
	<div id="arm_r_div" width='295' height='34'>
		<img src="images/layout/arm_r.png" width="295" height="34" />
	</div>
</div>
<div id="info_holder">
	<!-- start of motion content -->
	<div id="motion_content_div" class="rounded_corners">	
		<div id="center_holder_browse" style="display:block;" >
			<h2>WELCOME</h2>
		</div>
		<?php
		$topics_template = file_get_contents("templates/mario-c-topics.php"); 
		$aboutmario = file_get_contents("templates/aboutme.php"); 
		$workexperience = file_get_contents("templates/workexperience.php"); 
		$education = file_get_contents("templates/education.php"); 
		$animation = file_get_contents("templates/animation.php"); 
		$graphics = file_get_contents("templates/graphics.php"); 
		$webdev = file_get_contents("templates/webdesign.php"); 
		$hobbies = file_get_contents("templates/hobbies.php"); 
		$programming = file_get_contents("templates/programming.php"); 
		$marketing = file_get_contents("templates/marketing.php"); 
		$infotech = file_get_contents("templates/it.php"); 
		$replace_this = array( "{aboutmario}", "{workexperience}", "{education}", "{animation}", "{graphics}", "{webdev}", "{hobbies}", "{programming}", "{marketing}", "{infotech}" );
		$replace_with = array( $aboutmario, $workexperience, $education, $animation, $graphics, $webdev, $hobbies, $programming, $marketing, $infotech );
		$template = str_replace( $replace_this, $replace_with, $topics_template );
		echo $template;
		?>
		<div id="image_viewer_div" onClick="this.style.display = 'none';"></div>
		<!-- image_viewer_div -->
	</div>
	
	<!-- start of banner_mother_div -->
	<div id="banner_mother_div" class="rounded_corners" >        
		
		<div id="banner_image_div">
			<a id="banner_image_link" href="javascript: openTopic( 'center_holder_about' );"><img src="images/layout/banners/big-brain.png" name="banner_image" width="375"  id="banner_image" style="margin-top:15px; border:1px solid #000000;" /></a>

		</div><!-- END banner_image_div -->

		<div id="banner_scroll_container_div" class="rounded_corners">
			<div id="banner_links_container_div" >
				<div id="banner_links_1" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_about', 'images/layout/banners/big-brain.png');
					resetInterval();" >
					<a  href="javascript: openTopic( 'center_holder_about' );" ><img id="brain_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/big-brain-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div1 -->
				<div  id="banner_links_8" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_work', 'images/layout/banners/work-experience.png');
					 resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_work' );" ><img id="work_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/work-experience-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div8 -->
				<div  id="banner_links_7" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_edu', 'images/layout/banners/education.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_edu' );"><img id="education_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/education-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div7 -->
				<div id="banner_links_5"  class="banner_links_div" onMouseOver="fill_banner_info('center_holder_prog', 'images/layout/banners/programming.png');
					 resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_prog' );" ><img id="programming_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/programming-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div5 -->
				<div id="banner_links_4"  class="banner_links_div" onMouseOver="fill_banner_info('center_holder_it', 'images/layout/banners/network.png');
					 resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_it' );" ><img id="network_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/network-tn.png" width="87" height="37" style="border:1px solid #000000;"/></a>
				</div><!-- END banner_links_div4 -->
				<div  id="banner_links_2" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_graph', 'images/layout/banners/sketch.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_graph' );" ><img id="sketch_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/sketch-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>

				</div><!-- END banner_links_div2 -->
				<div  id="banner_links_3" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_graph', 'images/layout/banners/art.png');
					resetInterval();">
					<a href="javascript: openTopic( 'center_holder_graph' );" ><img id="art_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/art-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div3 -->
				<div id="banner_links_6"  class="banner_links_div" onMouseOver="fill_banner_info('center_holder_anim', 'images/layout/banners/flash.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_anim' );"  ><img id="flash_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/flash-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div6 -->
				<div id="banner_links_9"  class="banner_links_div" onMouseOver="fill_banner_info('center_holder_hob', 'images/layout/banners/comics.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_hob' );"><img id="comics_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/comics-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div9 -->
				<div id="banner_links_10"  class="banner_links_div" onMouseOver="fill_banner_info('center_holder_anim', 'images/layout/banners/3d.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_anim' );" ><img id="threed_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/3d-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div10 -->

				<div  id="banner_links_11" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_web', 'images/layout/banners/web.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_web' );" ><img id="web_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/web-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>
				</div><!-- END banner_links_div11 -->
				<div  id="banner_links_12" class="banner_links_div" onMouseOver="fill_banner_info('center_holder_graph', 'images/layout/banners/graphics.png');
					resetInterval();">
					<a  href="javascript: openTopic( 'center_holder_graph' );" ><img id="graphics_tn" onMouseOver="animSingleLink(this);"  src="images/layout/banners/graphics-tn.png" width="87" height="37" style="border:1px solid #000000;" /></a>

				</div><!-- END banner_links_div12 -->
			</div><!-- END banner_links_container_div -->
		</div><!-- END banner_scroll_container_div -->

		<div id="banner_buttons_div">
			<a id="button_left_arrow" href="javascript:scrolling_left();animBannerLinks('L');"><span id="banner_right_arrow" class="push_buttons">&lt;</span></a> 
			<a id="button_right_arrow" href="javascript:scrolling_right();animBannerLinks('R');" ><span id="banner_left_arrow" class="push_buttons">&gt;</span></a>
			&nbsp;<span id="position_banner" class="rounded_corners">1 of 12</span>
			&nbsp;<span id="left_position_banner" class="rounded_corners">1 - 4 block</span>
		</div>

		<div id="banner_info_div">
			<h2>Welcome To My Website</h2>
			<div id="banner_description_div">
				<p>This is Mario Carrizales'  online portfolio. Checkout his background in all kinds of stuff. <a href="javascript:openTopic( 'center_holder_about' );"><strong>He is.. >></strong></a> 
                </p>
			</div><!-- END banner_description_div -->
		</div><!-- END banner_info_div -->
	</div><!-- END banner_mother_div -->
</div><!-- end of info_holder -->
<?php include("templates/mario-c-right-end.php"); 

