<?php
include_once("./db_all.php");
include_once("./config.php");

class baseFun
{
    public function putacnno($data,$id)
    {
        $data = str_replace(".", "0", $data);
        $base = 1000;
        return $data.($base+$id);
    }
    public function calc_holidays($issue_date){
        $dbClass 			= (object) new dataBase();
        $today = date("Y-m-d 23:59:59");
        $fetchQry = "select id from evenement where start between '$issue_date' and '$today'";
        
       $Info  	= $dbClass->selectQry($fetchQry);
       return sizeof($Info);
    }
    public function calc_close_flag_count(){
        $dbClass 			= (object) new dataBase();
$fetchQry = "select *,(select loan_name from fd_inventory where id=fd_bills.loan) as loan_name,(select patientname from discharge_bills where bill_id=fd_bills.discharge_bills_id) as customer_name,(select interest from fd_inventory where id=fd_bills.loan) as interest,(select coalesce(sum(interest),0) from fd_collection where fd_collection.loan_id=fd_bills.bill_id ) as ibal,(select lanno from discharge_bills where bill_id=fd_bills.discharge_bills_id) as agent_id,(select bill_no from discharge_bills where bill_id=fd_bills.discharge_bills_id) as cus_ref_no from `fd_bills` where `close_flag` != '1' order by bill_id desc";
//echo $fetchQry;exit;
$docInfo  	= $dbClass->selectQry($fetchQry);
$docInfoSize 	= sizeof($docInfo);
$count=0; foreach($docInfo as $key=>$values) { 
                                                 $now = time(); // or your date as well
                                                $issue_date = strtotime($values['issue_date']);
                                                $datediff = $now - $issue_date;
                                                $diff = floor($datediff/(60*60*24));
                                                $diff = $diff+1;
                                                $terms = (int)($diff/30);
                                               
                                                 $tot_terms = 12;
                                                if($terms >= $tot_terms)
                                                {
                                                    $terms=12;
                                                }
                                               
                                                $debt_amount = $values['fd_amount']+(($values['fd_amount']*$values['interest']/100));
                                                $monthly_collection = $debt_amount/$tot_terms;
                                                $interest = (($monthly_collection)*$terms)-($values['ibal']);
                                                 
                                                $terms_made = $values['ibal']/$monthly_collection;
                                              
                                              $customer_details = $values['discharge_bills_id'].",".$values['loan_name'].",".$agentInfo['name'].",".$values['customer_name'].",".$values['customer_name'].",".$values['bill_id'];
                                                if($tot_terms == $terms_made)
                                              {
                                               $count++;} 
                                               
                                              } 
                                               
                                               return $count;
        
    }
    
    public function calc_terminate_falg_count(){
        $dbClass 			= (object) new dataBase();
       $fetchQry = "select *,(select loan_name from fd_inventory where id=fd_bills.loan) as loan_name,(select patientname from discharge_bills where bill_id=fd_bills.discharge_bills_id) as customer_name,(select interest from fd_inventory where id=fd_bills.loan) as interest,(select coalesce(sum(interest),0) from fd_collection where fd_collection.loan_id=fd_bills.bill_id ) as ibal,(select lanno from discharge_bills where bill_id=fd_bills.discharge_bills_id) as agent_id,(select bill_no from discharge_bills where bill_id=fd_bills.discharge_bills_id) as cus_ref_no from `fd_bills` where `close_flag` != '1' order by bill_id desc";
//echo $fetchQry;exit;
$docInfo  	= $dbClass->selectQry($fetchQry);
$docInfoSize 	= sizeof($docInfo);

         $count=0; foreach($docInfo as $key=>$values) { 
                                                      // $date = new DateTime($values['timestamp']);
                                                $now = time(); // or your date as well
                                                $issue_date = strtotime($values['issue_date']);
                                                $datediff = $now - $issue_date;
                                                $diff = floor($datediff/(60*60*24));
                                                $diff = $diff+1;
                                                $terms = (int)($diff/30);
                                               
                                                 $tot_terms = 12;$flag=0;
                                                if($terms >= $tot_terms)
                                                {
                                                    $terms=12;$flag=1;
                                                }
                                               
                                                $debt_amount = $values['fd_amount']+(($values['fd_amount']*$values['interest']/100));
                                                $monthly_collection = $debt_amount/$tot_terms;
                                                $interest = (($monthly_collection)*$terms)-($values['ibal']);
                                                 
                                                $terms_made = $values['ibal']/$monthly_collection;
                                              
                                              $customer_details = $values['discharge_bills_id'].",".$values['loan_name'].",".$agentInfo['name'].",".$values['customer_name'].",".$values['customer_name'].",".$values['bill_id'];
                                                if($flag && $interest)
                                              {
                                                    $due_flag = 0;$count++;
                                               } 
                                               
                                              } 
    
                                              return $count;
                                              }
}
?>

