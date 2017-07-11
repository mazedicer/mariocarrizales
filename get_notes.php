<?php

if( isset( $_POST[ 'get_notes' ] ) &&
	!empty( $_POST[ 'get_notes' ] ) &&
	$_POST[ 'get_notes' ] === "getnotes" ){
	$notes_array = [];
	foreach( glob( "notes/*.txt" ) as $filename ){
		array_push( $notes_array, $filename );
	}
	echo json_encode( $notes_array );
}
