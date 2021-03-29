<?php

class EmiTypes
{
   function get_emi($type, $l, $i, $t)
   {
        $values['loan_type'] = $type;
        $values['loan_amount'] = $l;
        $values['interest'] = $i;
        $values['tenure'] = $t;

        if($values['loan_type'] == '2')
        {
            $emi_dis = round($values['loan_amount'] * $values['interest']/1200 * (pow(1 + $values['interest']/1200, $values['tenure']) / (pow(1 + $values['interest']/1200, $values['tenure']) - 1)));
            $loan_mode = 'DIMINSIHING'  ;   
        }
        else if($values['loan_type'] == '1')
        {
             $emi_dis = round(round($values['loan_amount']+($values['loan_amount'] * $values['interest']/100))/$values['tenure']);
             $loan_mode = 'FLAT'  ;
        }
        else if($values['loan_type'] == '3')
        {
            $emi_dis  = (round(($values['loan_amount'] * $values['interest']/100))/$values['tenure']);
            $loan_mode = 'INTEREST ONLY'  ;     
        }
        $arr = array();
        $arr['emi_type'] = $loan_mode;
        $arr['emi_amount'] = $emi_dis;
        return json_encode($arr);

   }
   function get_rd_emi($amount, $interest, $terms)
   {
    $values['rd_amount'] = $amount;
    $values['interest'] = $interest;
    $values['terms'] = $terms;
    $values['quarters'] = $terms/3;

   $maturity_amount = round($values['rd_amount'] * ((pow($values['interest'] / 400 + 1, $values['quarters'])
   - 1) / (1 - (pow($values['interest'] / 400 + 1, (-1 / 3))))));
   $interest_payable = $maturity_amount - $values['rd_amount'] * $values['terms'];
   $m_amntonly = $maturity_amount - $interest_payable;
   $per_month_amount = $m_amntonly/$terms;
   $permonth_interest = $interest_payable/$terms;

   $arr = array();
   $arr['maturity_amount'] = $loan_mode;
   $arr['interest_payable'] = $emi_dis;
   $arr['month_amount'] = $per_month_amount;
   $arr['month_interest'] = $permonth_interest;

   return json_encode($arr);
   }

}

?>