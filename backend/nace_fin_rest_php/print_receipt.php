<?php
header("Access-Control-Allow-Origin: *");
include_once("./system/config.php");
require_once("./system/db_all.php");
require_once("./system/functions.php");
$dbClass 			= (object) new dataBase();


if(isset($_GET['p'])) {
 $receipt_id = $_POST['id'];

 $db_name = $_POST['db_name'];
 $print_Data = "select * from loan_receipts where id = ".$receipt_id;

 $docInfo  	= $dbClass->selectrowcomm($print_Data, $db_name);
 $receipt = $docInfo['data'];
 echo $receipt;

}

?>