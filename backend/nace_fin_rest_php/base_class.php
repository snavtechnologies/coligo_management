<?php
header("Access-Control-Allow-Origin: *");

include_once("./system/config.php");
require_once("./system/db_all.php");
$dbClass 			= (object) new dataBase();
       
        
        
       
        
if (isset($_POST['link'])){
        extract($_POST);
        $arr = array();
        $key_id = req.session.k_id;
	$resolver = $_POST['link'];
            
       
        $key_data = $dbClass->selectrow("select binder from key_map where `link` LIKE  '%$resolver%' and key_id = '$key_id'");
        $target_link = $resolver."~".$key_data['binder'];
        
        $ac_resolve = $dbClass->selectrow("SELECT id,account_name FROM  `accounts` WHERE  `link` LIKE  '%$target_link%'");
        $returndata['key_id']       = $key_id;
        $returndata['ac_id']        = $ac_resolve['id'];
        $returndata['account_name'] = $ac_resolve['account_name'];
        //$str = '';
    
   // $str .= ' <div class="sub_divs" >\''.$returndata['ac_id'].'\',\''.$returndata['account_name'].'\'</div>'; 
   // array_push($arr, $str);
	echo json_encode($returndata);
        
        }
        
       
?>