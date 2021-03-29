<?php
function get_client_ip() {
    $ipaddress = '';
    if ($_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if($_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if($_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if($_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if($_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if($_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
 $count='10';
 
 function hashkey($curpage) {
 $GLOBALS['password']="1234";
 $page=$GLOBALS['password'].$curpage;
 
 $hash=  hash("sha256",$page); 
 return strtoupper($hash);
 }
 function format($val){
     return number_format(round($val),'2','.','');
 }
$month=array(1=>"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

if (isset($_GET['page'])) { $page  = $_GET['page']; } else { $page=1; }; 
$start_from = ($page-1)*$count; 
$next_page = ($page+1); 

function convert_number_to_words($number) {
   
    $hyphen      = '-';
    $conjunction = ' and ';
    $separator   = ', ';
    $negative    = 'negative ';
    $decimal     = ' point ';
    $dictionary  = array(
        0                   => 'zero',
        1                   => 'one',
        2                   => 'two',
        3                   => 'three',
        4                   => 'four',
        5                   => 'five',
        6                   => 'six',
        7                   => 'seven',
        8                   => 'eight',
        9                   => 'nine',
        10                  => 'ten',
        11                  => 'eleven',
        12                  => 'twelve',
        13                  => 'thirteen',
        14                  => 'fourteen',
        15                  => 'fifteen',
        16                  => 'sixteen',
        17                  => 'seventeen',
        18                  => 'eighteen',
        19                  => 'nineteen',
        20                  => 'twenty',
        30                  => 'thirty',
        40                  => 'fourty',
        50                  => 'fifty',
        60                  => 'sixty',
        70                  => 'seventy',
        80                  => 'eighty',
        90                  => 'ninety',
        100                 => 'hundred',
        1000                => 'thousand',
        1000000             => 'million',
        1000000000          => 'billion',
        1000000000000       => 'trillion',
        1000000000000000    => 'quadrillion',
        1000000000000000000 => 'quintillion'
    );
   
    if (!is_numeric($number)) {
        return false;
    }
   
    if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
        // overflow
        trigger_error(
            'convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX,
            E_USER_WARNING
        );
        return false;
    }

    if ($number < 0) {
        return $negative . convert_number_to_words(abs($number));
    }
   
    $string = $fraction = null;
   
    if (strpos($number, '.') !== false) {
        list($number, $fraction) = explode('.', $number);
    }
   
    switch (true) {
        case $number < 21:
            $string = $dictionary[$number];
            break;
        case $number < 100:
            $tens   = ((int) ($number / 10)) * 10;
            $units  = $number % 10;
            $string = $dictionary[$tens];
            if ($units) {
                $string .= $hyphen . $dictionary[$units];
            }
            break;
        case $number < 1000:
            $hundreds  = $number / 100;
            $remainder = $number % 100;
            $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
            if ($remainder) {
                $string .= $conjunction . convert_number_to_words($remainder);
            }
            break;
        default:
            $baseUnit = pow(1000, floor(log($number, 1000)));
            $numBaseUnits = (int) ($number / $baseUnit);
            $remainder = $number % $baseUnit;
            $string = convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
            if ($remainder) {
                $string .= $remainder < 100 ? $conjunction : $separator;
                $string .= convert_number_to_words($remainder);
            }
            break;
    }
   
    if (null !== $fraction && is_numeric($fraction)) {
        $string .= $decimal;
        $words = array();
        foreach (str_split((string) $fraction) as $number) {
            $words[] = $dictionary[$number];
        }
        $string .= implode(' ', $words);
    }
   
    return $string;
}

function datesplit($date,$var)
{
list($year, $month, $day) = split('[-]', $date);
if($var=="year"){return $year;}
else if($var=="day"){return $day;}
else if($var=="month"){return $month;}
}

//~ function loadname($name) {
	//~ $abc=$name;
	//~ 
	//~ 
	//~ for($i=0;$i<5;$i++) {
    //~ echo "<div class=\"sub_divs\" onclick=\"val_to_text1('".$name."');\">".$name."</div>";
	//~ }
 //~ //echo ("select * from discharge_bills where patientname like '%".$abc."%'");

function loadname($name) {
$parray=array();
//print_r($_SESSION['disabled']);
//$new=array_diff($_SESSION['id'],$_SESSION['disabled']);
//print_r($_SESSION['disabled']);
for($l=0;$l<count($_SESSION['id']);$l++) {
	if(in_array($_SESSION['itemlist'][$_SESSION['id'][$l]]['id'],$_SESSION['disabled'])) { }
	else { $parray[]=$_SESSION['itemlist'][$_SESSION['id'][$l]]['id']; }
}
//print_r(count($parray));
//return $parray;
 
//print_r($new); 
//print_r($_SESSION['disabled']);
/*if(count($new)>0) {
	//print_r($new);*/
//print_r($parray);
if(count($parray)>0) {
	//print_r($_SESSION['disabled']);
for($k=0;$k<count($parray);$k++) {
	
    $pattern = "/^".$name."/";
 
	//preg_match($pattern,$_SESSION['itemlist'][$_SESSION['id'][$k]]['item_name'], $matches);
	preg_match($pattern,$_SESSION['itemlist'][$parray[$k]]['item_name'], $matches);
	if($matches) {	$part[]=$_SESSION['itemlist'][$parray[$k]]['id']; }

   
    //}
}
}
else if(count($parray)==0)  { 
	$part[]="";
	
	
}
else { $pattern = "/^".$name."/"; 
	for($k=0;$k<count($_SESSION['id']);$k++) {
	preg_match($pattern,$_SESSION['itemlist'][$_SESSION['id'][$k]]['item_name'], $matches);
	if($matches) {	$part[]=$_SESSION['itemlist'][$_SESSION['id'][$k]]['id']; }
	
	}
}
  
  return $part;
}

function get_cut_strng ($str,$len)
{
if(strlen($str)>=$len)
{echo substr($str,0,$len)."..";}
else
{echo $str;} 
}

// ---------------------  Setting active links  ------------------- //
function activelink($val)
{
	if(isset($_GET['tab']) && $_GET['tab']==$val) 
		{
		echo ' class="active" ';
		}
}
// ---------------------  /Setting active links  ------------------- //

// ------- album list for event gallery ---------------------//
function album_list($albm)
{
	$cresult = @mysql_query("SELECT * FROM `album`");
	while($row = mysql_fetch_array($cresult))
	{
		if($row['id']==$albm) {  $s='selected'; } else { $s=''; }
		echo '<option '.$s.' value="'.$row['id'].'">'.$row['name'].'</option>';
	}
}

// ---------------------  clean values Function  ------------------- //	
function clean($str) 
{
$str = @trim($str);
if(get_magic_quotes_gpc()) {$str = stripslashes($str);	}
return mysql_real_escape_string($str);
}
// ---------------------  clean values Function ends  ------------------- //	

// ---------------------  get url config starts  ------------------- //		   
function curPageURL() {
 $pageURL = 'http';
 if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
 $pageURL .= "://";
 if ($_SERVER["SERVER_PORT"] != "80") {
  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
 } else {
  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
 }
 echo  $pageURL;
 }
 
 
 
 function curPageURL1() {
 $pageURL = 'http';
 if(isset($_SERVER["HTTPS"])) 
 {
 if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
 }
 $pageURL .= "://";
 if ($_SERVER["SERVER_PORT"] != "80") {
  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
 } else {
  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
 }
return  $pageURL;
 }
// --------------------- / get url config starts  ------------------- //	

function enc()
{
echo base64_decode('
PC9oZWFkPg0KPGJvZHk+DQo8ZGl2IGlkPSJjb250YWluZXIiPg0KPCEtLSBhdXRob3IgOiBqaXRoaW4ua3IgKGppdGhpbmtyNEBnbWFpbC5jb20pLS0+'); 
}

function my_enc()
{
echo base64_decode('
PCEtLSBhdXRob3IgOiBqaXRoaW4ua3IgKGppdGhpbmtyNEBnbWFpbC5jb20pLS0+DQo='); 
}

#---------------- random password gen.-------------------
function generatePassword($length, $strength) {
	$vowels = 'aeuy';
	$consonants = 'bdghjmnpqrstvz';
	if ($strength & 1) {
		$consonants .= 'BDGHJLMNPQRSTVWXZ';
	}
	if ($strength & 2) {
		$vowels .= "AEUY";
	}
	if ($strength & 4) {
		$consonants .= '23456789';
	}
	if ($strength & 8) {
		$consonants .= '@#$%';
	}
 
	$password = '';
	$alt = time() % 2;
	for ($i = 0; $i < $length; $i++) {
		if ($alt == 1) {
			$password .= $consonants[(rand() % strlen($consonants))];
			$alt = 0;
		} else {
			$password .= $vowels[(rand() % strlen($vowels))];
			$alt = 1;
		}
	}
	return $password;
}
#---------------- random password gen.-------------------

// video exploding funtion --------------------
function vdo_exp($url)
{
	$vdo=explode('/',$url);
	$cc=count($vdo);
	$v_cd=$vdo[$cc-1];
	
	if(strstr($v_cd, "v="))
	{
		$n_cod=explode('v=',$v_cd);
		$new_vcod=$n_cod[1];
		if(strstr($new_vcod, "&"))
		{
			$n_cods=explode('&',$new_vcod);
			$new_vcods=$n_cods[0];
			return $new_vcods;
		}
		else{ return $new_vcod; }
	}
	else
	{ return $v_cd;	}
}
// ------- // video explode ends -------------


// `-------------	email validation/
function ValidateEmail($email)
{
	$regex = "([a-z0-9_.-]+)@([a-z0-9.-]+){2,255}.([a-z])"; # domain extension 
	$eregi = eregi_replace($regex, '', $email);
	return empty($eregi) ? true : false;
}
// `-------------	email validation /



// Paragraph filter ------------------
function parafilter($para)
{
   $para = preg_replace('(\[b\](.+?)\[\/b\])is', '<b>$1</b>', $para);
   $para = preg_replace('(\[i\](.+?)\[\/i\])is', '<i>$1</i>', $para);
   $para = preg_replace('(\[u\](.+?)\[\/u\])is', '<u>$1</u>', $para);
   $para = preg_replace('(\n)is', '<br />', $para);
   return trim($para);
}
// Paragraph filter -----------------





// short long texts ------------------
function shorttext($text)
{
if (strlen($text)>=51){return substr($text,0,50).'...';}
else
return $text;
}
// short long texts ------------------



// messages error, success , warning

function msgs()
{

if(isset($_SESSION['SUCMSG'])){ echo  '<div class="sucmsg">'.$_SESSION['SUCMSG'].'</div>'; clearerrormsg(); }
if(isset($_SESSION['ERRMSG'])){ echo  '<div class="errormsg">'.$_SESSION['ERRMSG'].'</div>';clearerrormsg(); }

if(isset($_SESSION['AERRMSG']) && is_array($_SESSION['AERRMSG']) && count($_SESSION['AERRMSG']) >0)
{ echo  '<div class="errormsg"><ul>';
foreach($_SESSION['AERRMSG'] as $msg) {echo '<li>'.$msg.'</li>'; }
echo '</ul></div>';unset($_SESSION['AERRMSG']); }

if(isset($_SESSION['WARNMSG'])){ echo  '<div class="warnmsg">'.$_SESSION['WARNMSG'].'</div>'; clearerrormsg(); }
}

function clearerrormsg()
{unset($_SESSION['SUCMSG'],$_SESSION['ERRMSG'] ,$_SESSION['AERRMSG'],$_SESSION['WARNMSG'] ); }

// messages error, success , warning


function logouts()
{
unset($_SESSION['event_session']);
unset($_SESSION['event_id']);
clearerrormsg();
header("location: ./");
exit();
}

function logout()
{
unset($_SESSION['userlogin']);
unset($_SESSION['adminlogin']);
clearerrormsg();
header("location: ../");
exit();
}


function mailsend($from,$subject,$message)
{
	$to="pooramkuries@gmail.com";
	$theboundary = md5(uniqid(""));
	$header = "From: :".$from;
	$header .= "\nMIME-Version: 1.0";
	$header .= "\nContent-Type: multipart/alternative;";
	$header .= "\n        boundary=\"----=_NextPart_$theboundary\"";
	$header .= "\nX-Priority: 3";
	$header .= "\nX-MSMail-Priority: Normal";
	
	$body = "This is a multi-part message in MIME format.\n\n";
	$body = "------=_NextPart_$theboundary\nContent-Type: text/plain;\n\n";
	$body .= "\n------=_NextPart_$theboundary\nContent-Type: text/html;\n\n";
	$body .=$message;
	$body .= "\n\n";
	//mail($to, $subject, $body, $header);

}
#---------------------------- send sms ---------------------------->
function sendsms($no,$chitty_no,$cust_no,$message,$smsusername,$smspassword,$smssender,$smsdomain,$co_unt,$priority)
{
$date=time();
$opts = array(
  'http'=>array(
    'method'=>"POST",
    'content' => "username=$smsusername&password=$smspassword&sender=$smssender&to=$no&message=$message&priority=$priority",
    'header'=>"Accept-language: en\r\n" .  "Cookie: foo=bar\r\n"
  ));
$context = stream_context_create($opts);
$fp = fopen("http://$smsdomain/pushsms.php", "r", false, $context);
$response = @stream_get_contents($fp);
if( $response=="Wrong Username or password.") {$error[]="Wrong Username or password for sms access ";}
if( $response=="Sorry, you dont have enough credits to process!") {$error[]="Sorry, you dont have enough credits to process!";}

if($error) 
{
$_SESSION['AERRMSG']=$error;
session_write_close();
header("Location:".$_SERVER[HTTP_REFERER]);
exit();
}
else
{
 $insrt=mysql_query("insert into smslog (`chitty_no`,`cust_id`,`mobile`,`message`,`status`,`date`) values('$chitty_no','$cust_no','$no','$message','1','$date')");
if($insrt){$co_unt=$co_unt+1;}
}
fpassthru($fp);
fclose($fp);
return $co_unt;
}
#----------------------------/ send sms ---------------------------->

# --------- send sms to one ----------------------------------------->
function sendonesms($no,$message,$smsusername,$smspassword,$smssender,$smsdomain,$priority)
{
$date=time();
$opts = array(
  'http'=>array(
    'method'=>"POST",
    'content' => "username=$smsusername&password=$smspassword&sender=$smssender&to=$no&message=$message&priority=$priority",
    'header'=>"Accept-language: en\r\n" .  "Cookie: foo=bar\r\n"
  ));
$context = stream_context_create($opts);
$fp = fopen("http://$smsdomain/pushsms.php", "r", false, $context);
$response = @stream_get_contents($fp);
if( $response=="Wrong Username or password.") {$error[]="Wrong Username or password for sms access ";}
if( $response=="Sorry, you dont have enough credits to process!") {$error[]="Sorry, you dont have enough credits to process!";}

if($error) 
{
$_SESSION['AERRMSG']=$error;
session_write_close();
header("Location:".$_SERVER[HTTP_REFERER]);
exit();
}
else
{ $co_unt=$co_unt+1; }
fpassthru($fp);
fclose($fp);
return $co_unt;
}

# =-------------------------------//---------------------------------

#---------------------------- sms balance ---------------------------->
function smsbalance($smsusername,$smspassword,$smsdomain,$priority)
{
$opts = array(
  'http'=>array(
    'method'=>"POST",
    'content' => "username=$smsusername&password=$smspassword&priority=$priority",
    'header'=>"Accept-language: en\r\n" .  "Cookie: foo=bar\r\n"
  ));

$context = stream_context_create($opts);
$fp = fopen("http://sms.kuruvy.com/balancecheck.php", "r", false, $context);
echo $response = @stream_get_contents($fp);
fpassthru($fp);
fclose($fp);
}
#---------------------------- sms balance ---------------------------->
?>
