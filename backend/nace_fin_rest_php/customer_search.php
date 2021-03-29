<?php
header("Access-Control-Allow-Origin: *");

include_once("./system/config.php");
require_once("./system/db_all.php");
$dbClass 			= (object) new dataBase();


if (isset($_POST['change_bill_id'])){
	$arr = array();
	// array_push($arr, 'hi');
	
	$table_name = $_POST['table_name'];
	$db = $_POST['db'];
	$column_name_unsplitted = $_POST['column_name'];
	$view_column_name_unsplitted = $_POST['view_column_name'];
	$searchbox_id = $_POST['searchbox_id'];
	$dropdown_id = $_POST['dropdown_id'];
	$searchbtn_id = $_POST['searchbtn_id'];

	$searchable_columns_splitted = explode("~",$column_name_unsplitted);
	$view_columns_splitted = explode("~",$view_column_name_unsplitted);

	$change_id = '';
	for ($i=0; $i < sizeof($searchable_columns_splitted); $i++) {

		$change_id .= " `".$searchable_columns_splitted[$i]."` like '".$_POST['change_bill_id']."%'";
		if ($i!=sizeof($searchable_columns_splitted)-1) {
			$change_id .= " OR";
		}

	}
	
	

	$view_cols = '';
	for ($i=0; $i < sizeof($view_columns_splitted); $i++) {

		$view_cols .= $view_columns_splitted[$i];
		if ($i!=sizeof($view_columns_splitted)-1) {
			$view_cols .= " ,";
		}

	}
	
	// echo "select ".$view_cols." from `".$table_name."` where".$change_id." order by `".$view_columns_splitted[0]."` asc limit 0,10";exit;
	$qry = $dbClass->selectQrycomm("select id,".$view_cols." from `".$table_name."` where".$change_id." and status = 0 order by `".$view_columns_splitted[0]."` asc limit 0,10", $db);
	// $arr = array();
	if(sizeof($qry)>0)	
	{ 
		 $str = '';
         foreach ($qry as  $keys=>$qry_fetch) {
			$name= '';
			for ($i=0; $i < sizeof($view_columns_splitted); $i++) {

				$name .= $qry_fetch[$view_columns_splitted[$i]];
				if ($i!=sizeof($view_columns_splitted)-1) {
					$name .= " ";
				}
				
			}
			$name_without_id = $name;
			$name .= "-".$qry_fetch['id']; 
            
			$str .= ' <div class="sub_divs" onclick="val_to_text(\''.$name.'\',\''.$searchbox_id.'\',\''.$dropdown_id.'\',\''.$searchbtn_id.'\');">'.$name_without_id.'</div>'; ;	
        	// $arr[$keys]['cus_first_name'] = $name; 
             
       	 }

	} else {
     $str ='<div class="sub_divs">No details found</div>';	
	}

	array_push($arr, $str);
	echo json_encode($arr);
}


?>
