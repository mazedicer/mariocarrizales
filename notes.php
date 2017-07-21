<?php
if( isset( $_POST[ 'get_notes' ] ) &&
	!empty( $_POST[ 'get_notes' ] ) &&
	$_POST[ 'get_notes' ] === "getnotes" ){
	$dir="notes/*.*";
	returnFiles($dir);
}
if(isset($_POST['get_cert']) && 
	!empty($_POST['get_cert']) && 
	$_POST['get_cert']==="getcert"){
	$dir="certificates/*.*";
	returnFiles($dir);
}
function returnFiles($dir){
	$files_array = Array();
	foreach( glob( $dir ) as $filename ){
		array_push( $files_array, $filename );
	}
	header('Content-Type: application/json');
	echo json_encode( $files_array );
}