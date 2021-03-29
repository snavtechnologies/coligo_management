<?php
error_reporting(0);
session_start();
    Config::write('db.host', $_SERVER['MYSQL_HOSTNAME']);
    Config::write('db.port', '3306');
    Config::write('db.basename', 'nace_fin_employees');
    Config::write('db.user', $_SERVER['MYSQL_USERNAME']);
    Config::write('db.password', $_SERVER['MYSQL_PASSWORD']);
    
    
    class Config {

        static $confArray;

        public static function read($name) {
            return self::$confArray[$name];
        }

        public static function write($name, $value) {
            self::$confArray[$name] = $value;
        }

    }

    class Core {
        public $dbh; // handle of the db connection
        private static $instance;
        private function __construct()  {

            // building data source name from config
            $dsn = 'mysql:host=' . Config::read('db.host') . ';dbname=' . Config::read('db.basename') . ';port=' . Config::read('db.port') .';connect_timeout=15';

            // getting DB user from config
            $user = Config::read('db.user');	
            // getting DB password from config
            $password = Config::read('db.password');
            try{
            $this->dbh = new PDO($dsn, $user, $password);
            $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOException $e){
                echo $e->getMessage();
            }
          
        }

        public static function getInstance() {
            
            if (!isset(self::$instance)) {
                $object = __CLASS__;
                self::$instance = new $object;
            }
            return self::$instance;
        }

        // others global functions
    }
?>
