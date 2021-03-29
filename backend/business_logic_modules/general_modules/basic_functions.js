let moment = require("moment-timezone")
const  { model_create} = require("../../models/models");
const  { open_mysql_connection } = require("../../dbs/sequelize");




module.exports.check_json = function (data_json) {
    try {
        JSON.parse(data_json);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports.get_current_date = function () {
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    var stillUtc = moment.utc(date).toDate();
    var datetime = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
    return datetime;
}

module.exports.check_if_array = function (data_to_check) {
    if(Array.isArray(data_to_check)) {
        return true;
    } else {
        return false;
    }
} 

// The data_to_check should be an array of any type of elements and the same elements are checked for objects
module.exports.check_if_obj = function (data_to_check) {
    return data_to_check.every(check_obj);
} 

        function check_obj(data) {
        if(typeof data == 'object') {
            return true;
        } else {
            return false;
        }
        }

module.exports.check_if_contains_prop = function (data_to_check,contains_array) {
    var arrayLength = contains_array.length;
    var flag = [];
    for (var i = 0; i < arrayLength; i++) {
        flag[i] = 0;
        for (var key in data_to_check) {

            if(key == contains_array[i]) {
                flag[i] = 1;
            }
        }    
    }
    var fin = 0;
    for (var i = 0; i < arrayLength; i++) { 
        
        if(flag[i] == 0) {
            fin = 1;
        }
    }
    if(fin == 0) 
    {
        return true;
    } else  
    if(fin == 1) 
    {
        return false;
    }

} 

module.exports.get_sequelize_model_instance = function (table_name, db, session) {

    sequelize = open_mysql_connection(db, session);
    const Model = model_create(sequelize, table_name );
    return [Model, sequelize];
} 