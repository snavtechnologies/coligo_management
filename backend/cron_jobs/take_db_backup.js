module.exports.do_db_backup_cron = function (cron) {
        
        cron.schedule("0 17 * * 5", function() {
        console.log("Running database backup every Friday at 05:00 pm");
        var exec = require('child_process').exec;
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        date = year + "_" + month + "_" + day;
        // be sure to replace below password with current server mysql password or else it will result in empty sql
        var child = exec(' mysqldump -u "root" -p"root" nace_fin_core > backend/database_backups/nace_fin_core_backup_' + date +'.sql');
      });
    
}