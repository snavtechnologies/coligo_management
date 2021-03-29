<?php
header("Access-Control-Allow-Origin: *");
include_once("./../system/config.php");
include_once("./../system/functions.php");
include_once("./../system/db_all.php");

class penaltyCalc
{
    function tot_int_calculator($bill_id,$cus_id,$db_name)
    {
		
        $dbClass 			= (object) new dataBase();
        $db_name            = $db_name;
  
        
    $data[0] = $bill_id;
    $data[1] = $cus_id;

        $fetchQry = "select *,(select loan_name from inventory_gl where id=gl_bills.loan) as loan_name,
        (select gl_amount from inventory_gl where id=gl_bills.loan) as gl_amount,
        (select receipt from inventory_gl where id=gl_bills.loan) as receipt,
        (select coalesce(sum(penalty),0) from gl_collection where gl_collection.loan_id=gl_bills.bill_id ) as i_val,
        (select coalesce(sum(interest),0) from gl_collection where gl_collection.loan_id=gl_bills.bill_id ) as p_val
         from `gl_bills` where bill_id=".$data[0]." order by bill_id desc";
    
    //echo $fetchQry;exit;
    $docInfo  	= $dbClass->selectQrycomm($fetchQry, $db_name);
    foreach($docInfo as $key=>$values) { 
                                                  
                                                  $in_id = $values['loan'];
                                                  $loan_id = $values['bill_id'];
                                                  $fetchschemeqry = "select * from gl_schemes where 
                                                  gl_inventory_id ='$in_id' order by id";
        
        $schemeInfo = $dbClass->selectQrycomm($fetchschemeqry, $db_name);
    
        $schemeInfoSize = sizeof($schemeInfo);
        
        $fetchreceiptqry = "select penalty,timestamp from gl_collection where loan_id ='$loan_id' and penalty != '0.00'
         order by collection_id";
        $receipInfo = $dbClass->selectQrycomm($fetchreceiptqry, $db_name);
        $receiptInfoSize = sizeof($receipInfo);
      
        foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       $max_period = $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] = $value['interest_rate'];
                                                       $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($i=0;$i<($time_period/30);$i++)
                                                       {
                                                       $i_rate[] = $value['interest_rate'];   
                                                       }
                                                   }
        
                                                   // $date = new DateTime($values['timestamp']);
                                                    $now = time(); // or your date as well
        $now =   strtotime(date('Y-m-d')+' 10:00:00');                                           
                                                    $issue_date = strtotime($values['issue_date']);
                                                    $datediff = $now - $issue_date;
                                                    $diff = floor($datediff/(60*60*24));
                                                    if($diff>$max_period)
                                                    {
                                                        $out_lived_terms = $diff-$max_period;
                                                     
                                                        $diff = $max_period;
                                                    }
                                                    $diff += 1;//echo $diff;
                                                   
                                                    $terms = (int)($diff/30);
                                                    $loan_amount = $values['loan_amount'];
                                                    $days = $diff;$j=0;
                                                    $n_of_mnths = (int)($diff/30);
                                                    $n_of_days  = $diff%30;
                                                   
                                                    
    
      $fetchreceiptQry = "select penalty,timestamp,interest from gl_collection where loan_id ='$loan_id' and 
      penalty != '0.00' order by collection_id";
      $intrest_receipts  	= $dbClass->selectQrycomm($fetchreceiptQry, $db_name);
      $recparr = array();
      foreach ($intrest_receipts as $intrest_receipts)
      {
          
          
          $recparr['amount'][] = $intrest_receipts[0];
          $recparr['date'][] = $intrest_receipts[1];
          $recparr['interest'][] = $intrest_receipts[2];
      }
      if($diff > $max_period && !sizeof($recparr['interest']))
      {
    $i_rate = array();
       foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] =$value['interest_rate'];
                                                      // $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($i=0;$i<($time_period/30);$i++)
                                                       {
                                                       $i_rate[] = $value['interest_rate'];   
                                                       }
                                                   }
          
      }
      
      $fetchprincpleQry = "select interest,timestamp from gl_collection where loan_id ='$loan_id' and 
      penalty != '0.00' order by collection_id";
      
      $princlple_receipts  	= $dbClass->selectQrycomm($fetchprincpleQry, $db_name);
      
    $step = 0; 
    $reset_flag=0;$i_amount =0;$counter1=0; $si = number_format($loan_amount*$i_rate[0]/(36500),'2','.','');
    $termstring = '';$flag=0;$p_credit_flag = 0;
    //$credit = $firstreceipt['penalty']-2*$si;
        //echo $credit;
    
    $checkdate = substr($values['issue_date'],0,10);$tot_i = 0;$counter = 0;
    $checkdate_time =  strtotime($checkdate);
    if(($diff)<30)
             {
                 $flag_height =($diff)-1;
            // echo $flag_height;
                 
             }
             else {
                 $flag_height = 29;
             }
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
    $termstring = '<div class="col-md-4" style="background-color:#9f9;border:2px solid #fff;height:20px;width:20px;"></div> &nbsp;: Receipt Date (Paid)</div><br><div class="col-md-4" style="background-color:#F34F4E;border:2px solid #fff;height:20px;width:20px;"></div> &nbsp;: Period of 30 Days (Not Paid)</div><br><div class="col-md-4" style="background-color:#CC0000;height:20px;border:2px solid #fff;width:20px;"></div> &nbsp;: After Normal Period of '.$max_period.' days</div><br><br>';$tot_int = 0;$marker = 1;
    
    if($diff == $max_period)
    {
        $main_limit = $diff;
    }
    else{
        $main_limit = $diff+1;
    }
    for($i=1;$i<=$main_limit;$i++)
    {
        $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
        $tot_i += $per_day_interest;
        $isnextday = date('Y-m-d', strtotime('+'.(($i)).' days',$issue_date));
        $reset = strtotime($isnextday);
        $day = date('d', $reset);
        
        //echo $day.'<br>';
        if(substr($recparr['date'][$counter1],0,10) == $checkdate){
      
          $startdate_time =  strtotime($checkdate);
    $startdate =  date('Y-m-d', strtotime('-'.($marker-2).' days',$startdate_time));
    if($loan_amount)
    {
    $termstring .= '<div class="col-md-4" style="background-color:#9f9;border:2px solid #fff;"><b><b><span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> End Date &nbsp;&nbsp;: '.$checkdate.'</span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.($marker-1).' X '.$per_day_interest.'<br>Amount :'.$tot_i.' <br>Paid : '.$recparr['amount'][$counter1].'</b><br><br></div>';
    }    
        $marker=1;
        $tot_int += $tot_i;
        $tot_i = 0;
        
        if($step !=0)
        {
            $step=0;
        }
        if($i > $max_period){
                $step = sizeof($i_rate)-1;
        }
        if($recparr['interest'][$counter1] != '0.00')
        {
            $loan_amount -= $recparr['interest'][$counter1];
        }
        $counter1++;
        $checkdate_time =  strtotime($checkdate);
         $flag_height = 30;
            // echo $diff;
             if(($diff-$i)<30)
             {
                 $flag_height =($diff)-$i;
            // echo $flag_height;
                 
             }
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
         
    
             }
          else if($i == ($max_period+1)  )
      {
       
       $startdate_time =  strtotime(date('Y-m-d'));
       $startdate =  date('Y-m-d', strtotime('-'.($diff-$i+1).' days',$startdate_time));
       $diff_prev_slip_date_cur_date = (strtotime($prev_slip_end_date)-strtotime($startdate));
           $diff_prev_slip_date_cur_date = abs(floor($diff_prev_slip_date_cur_date/(60*60*24)));
          
       if($i_rate[$step] == $max_rate ){
       $jumper = $diff-$i+1;
       if($jumper>30 || !($diff_prev_slip_date_cur_date))
       {
           $jumper = 30;
       }
       }
       else{
           
           
        
           if($diff_prev_slip_date_cur_date<30)
           {
           $jumper = 30;
           }
           else{
               $jumper = $diff-$i+1;
           }
       }
    
    //echo $diff_prev_slip_date_cur_date."~"."$nextdate"."~".$startdate;
      $residue_time =  strtotime($nextdate);
      if(($diff_prev_slip_date_cur_date+1)>30)
      {
          
      $residuedate =  date('Y-m-d', strtotime('-'.($jumper).' days',$residue_time));
      }
      else{
      $residuedate =  date('Y-m-d', strtotime('-'.($diff_prev_slip_date_cur_date).' days',strtotime($startdate)));
      }
    $gap = (strtotime($residuedate)-$issue_date);
    $gap = floor($gap/(60*60*24));
    $gap =  (($gap+1)-($max_period-1));
     $startdate_time =  strtotime(date('Y-m-d'));
    $startdate =  date('Y-m-d', strtotime('-'.($diff-$i+1).' days',$startdate_time));
                                                  if(abs($gap)>0)
                                                  {
                                                 
                                                  
                                                   $residue_time =  strtotime($residuedate);
    $residuedate =  date('Y-m-d', strtotime('+'.(1).' days',$residue_time));
    
    $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
          $tot_i = ($per_day_interest*(abs($gap))); 
          $tot_int += $tot_i;
          
           $termstring .= '<div class="col-md-4" style="background-color:#F87070;border:2px solid #fff;"><b><b><span style="font-size:14px;"><br> Start Date : '.$residuedate.'<br> End Date &nbsp;&nbsp;: '.$startdate.'</span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.(abs($gap)).' X '.$per_day_interest.'<br>Amount :'.$tot_i.' <br>Paid : 0.00</b><br><br></div>';
           $tot_i=0;                                  
           }
                                                  
     //echo $gap.'<br>'.($diff-$i+1)
    $i_rate = array();
       foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] =$max_rate;
                                                      // $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($b=0;$b<($time_period/30);$b++)
                                                       {
                                                       $i_rate[] = $max_rate;    
                                                       }
                                                   }
          $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
          $tot_i = ($per_day_interest*($diff-$i+1)); 
          $tot_int += $tot_i;
                $startdate_time =  strtotime(date('Y-m-d'));
    $startdate =  date('Y-m-d', strtotime('-'.($diff-$i).' days',$startdate_time));
    if($loan_amount)
    {
          $termstring .= '<div class="col-md-4" style="background-color:#EA1B23;border:2px solid #fff;">
          <span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> 
          End Date &nbsp;&nbsp;: '.date('Y-m-d').'</span></b><br>Principal : '.$loan_amount.'
          <br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.($diff-$i+1).' X '.$per_day_interest.'
          <br>Amount :'.$tot_i.' <br>Paid : 0.00</b><br><br></div>';
    } 
          $i=$diff;
          
                                                       }
        else if($checkdate == $nextdate)
        {
       // echo $day.'c'.$checkdate.'<br>';
            $startdate_time =  strtotime($checkdate);
    $startdate =  date('Y-m-d', strtotime('-'.($marker-2).' days',$startdate_time));
    if($loan_amount)
    {
        $termstring .= '<div class="col-md-4" style="background-color:#F87070;border:2px solid #fff;"><b><b>
        <span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> End Date &nbsp;&nbsp;: '.$checkdate.'
        </span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>
        '.(($marker-1)).' X '.$per_day_interest.'<br>Amount :'.$tot_i.'<br>Paid : 0.00<br><br></div>';
    }   
        $marker=1;
        $step++;
            if($i > $max_period){
                $step = sizeof($i_rate)-1;
        }
        $tot_int += $tot_i;
        $tot_i=0;
     
         if($counter1 == sizeof($recparr['date']))
        {
             
             $flag_height = 30;
            // echo $diff;
             if(($diff-$i)<30)
             {
                 $flag_height =($diff)-$i;
            // echo $flag_height;
                 
             }
           $checkdate_time =  strtotime($checkdate);
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
    
        }
        
        }
        
        $checkdate =  date('Y-m-d', strtotime('+'.($i).' days',$issue_date));
    
        $marker++;
      //  echo $counter.sizeof($recparr['date']);
        }
    


    $arr = array();
        $arr['tot_int'] = $tot_int;
       $arr['loan_amount'] = $loan_amount;
        return json_encode($arr);
        
        }
    
  /*  $arr = array();
        $arr['tot_int'] = 10;
       
        return json_encode($arr);*/
    

	}
    function pen_calculator($bill_id,$cus_id,$db_name)
    {
        $dbClass 			= (object) new dataBase();
        $db_name            = $db_name;
  
        
    $data[0] = $bill_id;
    $data[1] = $cus_id;

        $fetchQry = "select *,(select loan_name from inventory_gl where id=gl_bills.loan) as loan_name,
        (select gl_amount from inventory_gl where id=gl_bills.loan) as gl_amount,
        (select receipt from inventory_gl where id=gl_bills.loan) as receipt,
        (select coalesce(sum(penalty),0) from gl_collection where gl_collection.loan_id=gl_bills.bill_id ) as i_val,
        (select coalesce(sum(interest),0) from gl_collection where gl_collection.loan_id=gl_bills.bill_id ) as p_val
         from `gl_bills` where bill_id=".$data[0]." order by bill_id desc";
    
    //echo $fetchQry;exit;
    $docInfo  	= $dbClass->selectQrycomm($fetchQry, $db_name);
    foreach($docInfo as $key=>$values) { 
                                                  
                                                  $in_id = $values['loan'];
                                                  $loan_id = $values['bill_id'];
                                                  $fetchschemeqry = "select * from gl_schemes where 
                                                  gl_inventory_id ='$in_id' order by id";
        
        $schemeInfo = $dbClass->selectQrycomm($fetchschemeqry, $db_name);
    
        $schemeInfoSize = sizeof($schemeInfo);
        
        $fetchreceiptqry = "select penalty,timestamp from gl_collection where loan_id ='$loan_id' and penalty != '0.00'
         order by collection_id";
        $receipInfo = $dbClass->selectQrycomm($fetchreceiptqry, $db_name);
        $receiptInfoSize = sizeof($receipInfo);
      
        foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       $max_period = $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] = $schemeInfo[0]['interest_rate'];
                                                       $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($i=0;$i<($time_period/30);$i++)
                                                       {
                                                       $i_rate[] = $schemeInfo[0]['interest_rate'];   
                                                       }
                                                   }
        
                                                   // $date = new DateTime($values['timestamp']);
                                                    $now = time(); // or your date as well
        $now =   strtotime(date('Y-m-d')+' 10:00:00');                                           
                                                    $issue_date = strtotime($values['issue_date']);
                                                    $datediff = $now - $issue_date;
                                                    $diff = floor($datediff/(60*60*24));
                                                    if($diff>$max_period)
                                                    {
                                                        $out_lived_terms = $diff-$max_period;
                                                     
                                                        $diff = $max_period;
                                                    }
                                                    $diff += 1;//echo $diff;
                                                   
                                                    $terms = (int)($diff/30);
                                                    $loan_amount = $values['loan_amount'];
                                                    $days = $diff;$j=0;
                                                    $n_of_mnths = (int)($diff/30);
                                                    $n_of_days  = $diff%30;
                                                   
                                                    
    
      $fetchreceiptQry = "select penalty,timestamp,interest from gl_collection where loan_id ='$loan_id' and 
      penalty != '0.00' order by collection_id";
      $intrest_receipts  	= $dbClass->selectQrycomm($fetchreceiptQry, $db_name);
      $recparr = array();
      foreach ($intrest_receipts as $intrest_receipts)
      {
          
          
          $recparr['amount'][] = $intrest_receipts[0];
          $recparr['date'][] = $intrest_receipts[1];
          $recparr['interest'][] = $intrest_receipts[2];
      }
      if($diff > $max_period && !sizeof($recparr['interest']))
      {
    $i_rate = array();
       foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] =$schemeInfo[0]['interest_rate'];
                                                      // $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($i=0;$i<($time_period/30);$i++)
                                                       {
                                                       $i_rate[] = $schemeInfo[0]['interest_rate'];   
                                                       }
                                                   }
          
      }
      
      $fetchprincpleQry = "select interest,timestamp from gl_collection where loan_id ='$loan_id' and 
      penalty != '0.00' order by collection_id";
      
      $princlple_receipts  	= $dbClass->selectQrycomm($fetchprincpleQry, $db_name);
      
    $step = 0; 
    $reset_flag=0;$i_amount =0;$counter1=0; $si = number_format($loan_amount*$i_rate[0]/(36500),'2','.','');
    $termstring = '';$flag=0;$p_credit_flag = 0;
    //$credit = $firstreceipt['penalty']-2*$si;
        //echo $credit;
    
    $checkdate = substr($values['issue_date'],0,10);$tot_i = 0;$counter = 0;
    $checkdate_time =  strtotime($checkdate);
    if(($diff)<30)
             {
                 $flag_height =($diff)-1;
            // echo $flag_height;
                 
             }
             else {
                 $flag_height = 29;
             }
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
    $termstring = '<div class="col-md-4" style="background-color:#9f9;border:2px solid #fff;height:20px;width:20px;"></div> &nbsp;: Receipt Date (Paid)</div><br><div class="col-md-4" style="background-color:#F34F4E;border:2px solid #fff;height:20px;width:20px;"></div> &nbsp;: Period of 30 Days (Not Paid)</div><br><div class="col-md-4" style="background-color:#CC0000;height:20px;border:2px solid #fff;width:20px;"></div> &nbsp;: After Normal Period of '.$max_period.' days</div><br><br>';$tot_int = 0;$marker = 1;
    
    if($diff == $max_period)
    {
        $main_limit = $diff;
    }
    else{
        $main_limit = $diff+1;
    }
    for($i=1;$i<=$main_limit;$i++)
    {
        $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
        $tot_i += $per_day_interest;
        $isnextday = date('Y-m-d', strtotime('+'.(($i)).' days',$issue_date));
        $reset = strtotime($isnextday);
        $day = date('d', $reset);
        
        //echo $day.'<br>';
        if(substr($recparr['date'][$counter1],0,10) == $checkdate){
      
          $startdate_time =  strtotime($checkdate);
    $startdate =  date('Y-m-d', strtotime('-'.($marker-2).' days',$startdate_time));
    if($loan_amount)
    {
    $termstring .= '<div class="col-md-4" style="background-color:#9f9;border:2px solid #fff;"><b><b><span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> End Date &nbsp;&nbsp;: '.$checkdate.'</span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.($marker-1).' X '.$per_day_interest.'<br>Amount :'.$tot_i.' <br>Paid : '.$recparr['amount'][$counter1].'</b><br><br></div>';
    }    
        $marker=1;
        $tot_int += $tot_i;
        $tot_i = 0;
        
        if($step !=0)
        {
            $step=0;
        }
        if($i > $max_period){
                $step = sizeof($i_rate)-1;
        }
        if($recparr['interest'][$counter1] != '0.00')
        {
            $loan_amount -= $recparr['interest'][$counter1];
        }
        $counter1++;
        $checkdate_time =  strtotime($checkdate);
         $flag_height = 30;
            // echo $diff;
             if(($diff-$i)<30)
             {
                 $flag_height =($diff)-$i;
            // echo $flag_height;
                 
             }
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
         
    
             }
          else if($i == ($max_period+1)  )
      {
       
       $startdate_time =  strtotime(date('Y-m-d'));
       $startdate =  date('Y-m-d', strtotime('-'.($diff-$i+1).' days',$startdate_time));
       $diff_prev_slip_date_cur_date = (strtotime($prev_slip_end_date)-strtotime($startdate));
           $diff_prev_slip_date_cur_date = abs(floor($diff_prev_slip_date_cur_date/(60*60*24)));
          
       if($i_rate[$step] == $max_rate ){
       $jumper = $diff-$i+1;
       if($jumper>30 || !($diff_prev_slip_date_cur_date))
       {
           $jumper = 30;
       }
       }
       else{
           
           
        
           if($diff_prev_slip_date_cur_date<30)
           {
           $jumper = 30;
           }
           else{
               $jumper = $diff-$i+1;
           }
       }
    
    //echo $diff_prev_slip_date_cur_date."~"."$nextdate"."~".$startdate;
      $residue_time =  strtotime($nextdate);
      if(($diff_prev_slip_date_cur_date+1)>30)
      {
          
      $residuedate =  date('Y-m-d', strtotime('-'.($jumper).' days',$residue_time));
      }
      else{
      $residuedate =  date('Y-m-d', strtotime('-'.($diff_prev_slip_date_cur_date).' days',strtotime($startdate)));
      }
    $gap = (strtotime($residuedate)-$issue_date);
    $gap = floor($gap/(60*60*24));
    $gap =  (($gap+1)-($max_period-1));
     $startdate_time =  strtotime(date('Y-m-d'));
    $startdate =  date('Y-m-d', strtotime('-'.($diff-$i+1).' days',$startdate_time));
                                                  if(abs($gap)>0)
                                                  {
                                                 
                                                  
                                                   $residue_time =  strtotime($residuedate);
    $residuedate =  date('Y-m-d', strtotime('+'.(1).' days',$residue_time));
    
    $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
          $tot_i = ($per_day_interest*(abs($gap))); 
          $tot_int += $tot_i;
          
           $termstring .= '<div class="col-md-4" style="background-color:#F87070;border:2px solid #fff;"><b><b><span style="font-size:14px;"><br> Start Date : '.$residuedate.'<br> End Date &nbsp;&nbsp;: '.$startdate.'</span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.(abs($gap)).' X '.$per_day_interest.'<br>Amount :'.$tot_i.' <br>Paid : 0.00</b><br><br></div>';
           $tot_i=0;                                  
           }
                                                  
     //echo $gap.'<br>'.($diff-$i+1)
    $i_rate = array();
       foreach($schemeInfo as $key=>$value)
                                                   {
                                                       $time_period =  $value['end_period']- $value['start_period'];
                                                       if($time_period<0)
                                                       {
                                                       $i_rate[] =$schemeInfo[0]['interest_rate'];
                                                      // $max_rate = $value['interest_rate'];
                                                       break;
                                                       }
                                                       for($b=0;$b<($time_period/30);$b++)
                                                       {
                                                       $i_rate[] = $schemeInfo[0]['interest_rate'];  
                                                       }
                                                   }
          $per_day_interest = number_format($loan_amount*$i_rate[$step]/(36500),'2','.','');
          $tot_i = ($per_day_interest*($diff-$i+1)); 
          $tot_int += $tot_i;
                $startdate_time =  strtotime(date('Y-m-d'));
    $startdate =  date('Y-m-d', strtotime('-'.($diff-$i).' days',$startdate_time));
    if($loan_amount)
    {
          $termstring .= '<div class="col-md-4" style="background-color:#EA1B23;border:2px solid #fff;">
          <span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> 
          End Date &nbsp;&nbsp;: '.date('Y-m-d').'</span></b><br>Principal : '.$loan_amount.'
          <br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>'.($diff-$i+1).' X '.$per_day_interest.'
          <br>Amount :'.$tot_i.' <br>Paid : 0.00</b><br><br></div>';
    } 
          $i=$diff;
          
                                                       }
        else if($checkdate == $nextdate)
        {
       // echo $day.'c'.$checkdate.'<br>';
            $startdate_time =  strtotime($checkdate);
    $startdate =  date('Y-m-d', strtotime('-'.($marker-2).' days',$startdate_time));
    if($loan_amount)
    {
        $termstring .= '<div class="col-md-4" style="background-color:#F87070;border:2px solid #fff;"><b><b>
        <span style="font-size:14px;"><br> Start Date : '.$startdate.'<br> End Date &nbsp;&nbsp;: '.$checkdate.'
        </span></b><br>Principal : '.$loan_amount.'<br>Rate : '.$i_rate[$step].'<br>Per Day Interest :<br>
        '.(($marker-1)).' X '.$per_day_interest.'<br>Amount :'.$tot_i.'<br>Paid : 0.00<br><br></div>';
    }   
        $marker=1;
        $step++;
            if($i > $max_period){
                $step = sizeof($i_rate)-1;
        }
        $tot_int += $tot_i;
        $tot_i=0;
     
         if($counter1 == sizeof($recparr['date']))
        {
             
             $flag_height = 30;
            // echo $diff;
             if(($diff-$i)<30)
             {
                 $flag_height =($diff)-$i;
            // echo $flag_height;
                 
             }
           $checkdate_time =  strtotime($checkdate);
    $nextdate =  date('Y-m-d', strtotime('+'.($flag_height).' days',$checkdate_time));
    
        }
        
        }
        
        $checkdate =  date('Y-m-d', strtotime('+'.($i).' days',$issue_date));
    
        $marker++;
      //  echo $counter.sizeof($recparr['date']);
        }
    


    $arr = array();
        $arr['tot_int'] = $tot_int;
       
        return json_encode($arr);
        
        }
    
  /*  $arr = array();
        $arr['tot_int'] = 10;
       
        return json_encode($arr);*/
    
}

}

?>
