<?php
date_default_timezone_set("Asia/Kolkata");
class dataBase
{



                #####################################################################

				/*

				Function for fetching data from table

				$sql is the QUERY  passed to function

				retur_type is the return type whether resource id or result array.

				*/
    public $t;
    public function __construct()  {
       
       $this->t =  Core::getInstance();
  
       
    }

				public function selectQry($sql,$return_type = '')

				{		
						$retResultSelect	=	array();

						//$rs	=	mysql_query($sql) or die("MySQL Error Happend : " .mysql_error());
                                               	
                                              try { 
                                               
                                                  $result=$this->t->dbh->query($sql); 
                                                  
                                              } catch (PDOException $e) { echo $e->getMessage(); } 
                                                
                                               
						if($return_type == "")

						{ $r=$result->fetchAll(); return $r;
                                                      foreach($r as $r) {
                                                          
                                                          
                                                      $retResultSelect[]	=	$r;    
                                                          
                                                      }
//							while( ($row	=	mysql_fetch_assoc($rs)))
//
//							{
//
//								$retResultSelect[]	=	$row;
//
//							}

						//echo $retResultSelect;

							return $retResultSelect;

							

						}

						//else if($return_type == "resource") return $rs;

				}
				########### Function Select Ends Here ####################################

				

				

				#####################################################################

				/*

				Function for fetching data from table

				$table_name is the table Name is the QUERY  passed to function

				*/
                               public  function fetchshakey($table){
                                   
                                  $sql= "SELECT * FROM ".$table."";
                                   $rs1	=	mysql_query($sql) or die("MySQL Error Happend : " .mysql_error());
                                   $key= mysql_fetch_array($rs1);
                                   return $key['shakey'];
                               }
                               public function fetchData($table,$condition='')

				{						

						//echo $sql;

						$retResultSelect	=	array();

						$sql= "SELECT * FROM ".$table."";

						if($condition!=''){

							$sql.= " WHERE ".$condition;

						}

						$rs	=	mysql_query($sql) or die("MySQL Error Happend : " .mysql_error());

						

						while( ($row	=	mysql_fetch_assoc($rs)))

						{

							$retResultSelect[]	=	$row;

						}

					
                                                //return "dfgd";
                                                 return $retResultSelect;

							

				}

				#####################################################################

				/*

				Function for fetching number of records in a table

				$sql is the QUERY  passed to function

				*/

				public function numRowsQry($sql)

				{

					

					//echo $sql;

					//return $sql;

					$rs	=	mysql_query($sql);
                                      // return $rs;
					if(! is_resource($rs) )

					{

						//die("Error in Selection Statement....");

					}

					return mysql_num_rows($rs);

					

				}
public function insertQry_mul($table, $arFieldsValues,$db_arr)

				{
    $arFieldsValues['timestamp']=date("Y-m-d h:i:s");
   $db_arr_val = explode("/", $db_arr);
   for($i=0;$i<8;$i++)
                                                  {
                                     try { 
                                                 
                                                      
                                                      
                                                 
                                                  $dbLink=new PDO('mysql:host=localhost;dbname='.$db_arr_val[$i].'', "navteflf_finsoft", "Finsoft4007654123");
                                                  $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                                                  
//                                                
                                                 
                                              } 
                                              
                                              catch (PDOException $e) { echo $e->getMessage(); }  

						$fields	=	array_keys($arFieldsValues);

						$values	=	array_values($arFieldsValues);

						

						$formatedValues	=	array();

						foreach($values as $val)

						{

							if(!is_numeric($val))

							{

								if(strcmp($val,"NOW()") == 0)

									$val	=	$val;

								else

									$val	=	"'".addslashes($val)."'";

							}

							$formatedValues[]	=	$val;

						}

						

						$sql	=	"INSERT INTO ".$table." (";

						$sql	.=	implode(", ",$fields).") ";

						$sql	.=	"VALUES( ";

						$sql	.=	implode(", ",$formatedValues);

						$sql	.=	")";

                       //echo $sql;exit;

					

						//mysql_query($sql) or die(mysql_error());
                                                
                                               $dbLink->exec($sql);
                                               
                                                  }
                                               return $dbLink->lastInsertId();
                                                 
						// mysql_insert_id();
                                                 //If the table contains autoincrement field

				 }
                 
				########### Function insertQry Ends Here ####################################

				

				##########################################################################

				/*

				Function for inserting data 

				$table is the table name

				$arFieldsValues is an array, where arrakeys are field name and the corressponding valuse are the data to be inserted

				function will return the last autoincrement field value

				*/

				public function insertQry($table, $arFieldsValues)

				{
                                    
    
                                                                     
    if(!$arFieldsValues['timestamp']){
     
        $arFieldsValues['timestamp']=date("Y-m-d h:i:s");
    }
	

						$fields	=	array_keys($arFieldsValues);

						$values	=	array_values($arFieldsValues);

						

						$formatedValues	=	array();

						foreach($values as $val)

						{

							if(!is_numeric($val))

							{

								if(strcmp($val,"NOW()") == 0)

									$val	=	$val;

								else

									$val	=	"'".addslashes($val)."'";

							}

							$formatedValues[]	=	$val;

						}

						

						$sql	=	"INSERT INTO ".$table." (";

						$sql	.=	implode(", ",$fields).") ";

						$sql	.=	"VALUES( ";

						$sql	.=	implode(", ",$formatedValues);

						$sql	.=	")";

                     //  echo $sql;exit;

					

						//mysql_query($sql) or die(mysql_error());
                                                
                                               $this->t->dbh->exec($sql);
                                               return $this->t->dbh->lastInsertId();
                                                 
						// mysql_insert_id();
                                                 //If the table contains autoincrement field

				 }

                 
				########### Function insertQry Ends Here ####################################

				

				

				##########################################################################

				/*

				Function for updating data 

				$table is the table name

				$arFieldsValues is an array, where arrakeys are field name and the corressponding valuse are the data to be inserted

				$strCondition is the update condition

				function will return the affected number of rows field value

				*/
public function updateQrystatus($table, $arFieldsValues, $strCondition='')

				{

	$arFieldsValues['timestamp']=date("Y-m-d h:i:s");

						$formatedValues	=	array();

						foreach($arFieldsValues as $key => $val)

						{

							if(!is_numeric($val))

							{

								if(strcmp($val,"NOW()") == 0)

									$val	=	$val;

								else

									$val	=	"'".addslashes($val)."'";

							}

							$formatedValues[]	=	"$key = $val";

						}

						

						$sql	=	"UPDATE ".$table." SET ";

						

						$sql	.=      $arFieldsValues;	

						if($strCondition != "") 

						{

							$sql	.=	" WHERE ".$strCondition;

						}



						//echo $sql;	exit;	

						$rs	=	mysql_query($sql) or die(mysql_error());

						

						return mysql_affected_rows();

	            }
//				public function updateQry($table, $arFieldsValues, $strCondition='')
//
//				{
//                                  try{ $dbLink=new PDO('mysql:host=localhost;dbname='.$_SESSION['db'].'', "root", "root");
//                                   $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//                                  } catch(PDOException $e) { echo $e->getMessage(); }
//	
//
//						$formatedValues	=	array();
//
//						foreach($arFieldsValues as $key => $val)
//
//						{
//
//							if(!is_numeric($val))
//
//							{
//
//								if(strcmp($val,"NOW()") == 0)
//
//									$val	=	$val;
//
//								else
//
//									$val	=	"'".addslashes($val)."'";
//
//							}
//
//							$formatedValues[]	=	"$key = $val";
//
//						}
//
//						
//
//						$sql	=	"UPDATE ".$table." SET ";
//
//						
//
//						$sql	.=	implode(", ",$formatedValues);
//
//						if($strCondition != "") 
//
//						{
//
//							$sql	.=	" WHERE ".$strCondition;
//
//						}
//						//echo $sql;exit;
//                                               
//                                                $count=$dbLink->prepare($sql);
//                                                $count->execute();
//                                                $no_of_rows_affected=$count->rowCount();
//                                                return $no_of_rows_affected;
//                                                
//                                                //echo $sql;exit;
//						//$rs	=	mysql_query($sql) or die(mysql_error());
//
//						
//
//						//return mysql_affected_rows();
//
//	            }
                    public function updateQry($table, $arFieldsValues, $strCondition='')

				{

	
                                    $arFieldsValues['timestamp']=date("Y-m-d h:i:s");
						$formatedValues	=	array();

						foreach($arFieldsValues as $key => $val)

						{

							if(!is_numeric($val))

							{

								if(strcmp($val,"NOW()") == 0)

									$val	=	$val;

								else

									$val	=	"'".addslashes($val)."'";

							}

							$formatedValues[]	=	"$key = $val";

						}

						

						$sql	=	"UPDATE ".$table." SET ";

						

						$sql	.=	implode(", ",$formatedValues);

						if($strCondition != "") 

						{

							$sql	.=	" WHERE ".$strCondition;

						}
						
                                               //echo $sql;exit;
                                                $count=$this->t->dbh->prepare($sql);
                                                $count->execute();
                                                $no_of_rows_affected=$count->rowCount();
                                                return $no_of_rows_affected;
                                                
                                                //echo $sql;exit;
						//$rs	=	mysql_query($sql) or die(mysql_error());

						

						//return mysql_affected_rows();

	            }


				########### Function updateQry Ends Here #################################

				

				

				##########################################################################

				/*

				Function for deleting data 

				$strCondition is the delete condition

				function will return the affected number of rows field value

				*/

//				public function deleteQry($table, $strCondition='')
//
//				{
//
//	                     try{ $dbLink=new PDO('mysql:host=localhost;dbname='.$_SESSION['db'].'', "root", "root");
//                                   $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//                                  } catch(PDOException $e) { echo $e->getMessage(); }
//
//						$sql	=	"DELETE FROM ".$table;
//
//						if($strCondition != "") 
//
//						{
//
//							$sql	.=	" WHERE ".$strCondition;
//
//						}
//
//						//echo $sql;
//                        $count=$dbLink->prepare($sql);
//                                                $count->execute();
//                                                $no_of_rows_affected=$count->rowCount();
//                                                return $no_of_rows_affected;
//						//$rs	=	mysql_query($sql) or die(mysql_error());
//
//						//return mysql_affected_rows();
//
//       			}
public function deleteQry($table, $strCondition='')

				{

//	                     try{ $dbLink=new PDO('mysql:host=localhost;dbname=masterdb', "root", "root");
//                                   $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//                                  } catch(PDOException $e) { echo $e->getMessage(); }

						$sql	=	"DELETE FROM ".$table;

						if($strCondition != "") 

						{

							$sql	.=	" WHERE ".$strCondition;

						}

						//echo $sql;
                        $count=$this->t->dbh->prepare($sql);
                                                $count->execute();
                                                $no_of_rows_affected=$count->rowCount();
                                                return $no_of_rows_affected;
						//$rs	=	mysql_query($sql) or die(mysql_error());

						//return mysql_affected_rows();

       			}
				

				public function db_insert_id() 

				{

					return mysql_insert_id();

				}
                
//                public function selectrow($sql) {
//					
//					try{ $dbLink=new PDO('mysql:host=localhost;dbname='.$_SESSION['db'].'', "root", "root");
//                                   $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//                                  } catch(PDOException $e) { echo $e->getMessage(); }
//                      $db=$dbLink->prepare($sql);
//                      $db->execute();
//                      $row=$db->fetch();
//                      return $row;
//					
//				}
                                
                                
    public function selectrow($sql) {
					
				
                                $db=$this->t->dbh->prepare($sql);
                                $db->execute();
                                $row=$db->fetch();
                                
                                return $row;
					
				}
				
				public function update() {
					try{ $dbLink=new PDO('mysql:host=localhost;dbname='.$_SESSION['db'].'', "root", "root");
                                   $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                                  } catch(PDOException $e) { echo $e->getMessage(); }
					
				}
				
				
/* common db functions*/
public function insertQrycomm($table,$db_name,$arFieldsValues)
{
  $arFieldsValues['timestamp']=date("Y-m-d h:i:s");
    
                                    try { 
                                                  
											$dbLink=new PDO('mysql:host='.$_SERVER['MYSQL_HOSTNAME'].';dbname='.$db_name.'', $_SERVER['MYSQL_USERNAME'], $_SERVER['MYSQL_PASSWORD']);
											$dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                                                  
//                                                
                                                 
                                              } catch (PDOException $e) { echo $e->getMessage(); } 

						$fields	=	array_keys($arFieldsValues);

						$values	=	array_values($arFieldsValues);

						

						$formatedValues	=	array();

						foreach($values as $val)

						{

							if(!is_numeric($val))

							{

								if(strcmp($val,"NOW()") == 0)

									$val	=	$val;

								else

									$val	=	"'".addslashes($val)."'";

							}

							$formatedValues[]	=	$val;

						}

						

						$sql	=	"INSERT INTO ".$table." (";

						$sql	.=	implode(", ",$fields).") ";

						$sql	.=	"VALUES( ";

						$sql	.=	implode(", ",$formatedValues);

						$sql	.=	")";

                       // echo $sql;exit;

					

						//mysql_query($sql) or die(mysql_error());
                                                
                                               $dbLink->exec($sql);
                                               return $dbLink->lastInsertId();
                                                 
						// mysql_insert_id();
                                                 //If the table contains autoincrement field

				 }
                                 
                                     public function selectrowcomm($sql,$db_name) {
					
										try { 
                                                  
											$dbLink=new PDO('mysql:host='.$_SERVER['MYSQL_HOSTNAME'].';dbname='.$db_name.'', $_SERVER['MYSQL_USERNAME'], $_SERVER['MYSQL_PASSWORD']);
											$dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
											
//                                                
											$result=$dbLink->query($sql); 
										} catch (PDOException $e) { echo $e->getMessage(); } 
                      $db=$dbLink->prepare($sql);
                      $db->execute();
                      $row=$db->fetch();
                      return $row;
					
				}
                                
                                public function selectQrycomm($sql,$db_name,$return_type = '')

				{				

						$retResultSelect	=	array();

						//$rs	=	mysql_query($sql) or die("MySQL Error Happend : " .mysql_error());
                                                	
                                              try { 
                                                  
                                                  $dbLink=new PDO('mysql:host='.$_SERVER['MYSQL_HOSTNAME'].';dbname='.$db_name.'', $_SERVER['MYSQL_USERNAME'], $_SERVER['MYSQL_PASSWORD']);
                                                  $dbLink->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                                                  
//                                                
                                                  $result=$dbLink->query($sql); 
                                              } catch (PDOException $e) { echo $e->getMessage(); } 
                                                
                                               
						if($return_type == "")

						{ $r=$result->fetchAll();
                                                      foreach($r as $r) {
                                                          
                                                          
                                                      $retResultSelect[]	=	$r;    
                                                          
                                                      }
//							while( ($row	=	mysql_fetch_assoc($rs)))
//
//							{
//
//								$retResultSelect[]	=	$row;
//
//							}

						//echo $retResultSelect;

							return $retResultSelect;

							

						}

						//else if($return_type == "resource") return $rs;

				}

/* common db functions ends*/


}
?>
