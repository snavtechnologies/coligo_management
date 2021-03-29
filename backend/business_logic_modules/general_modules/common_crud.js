const  { check_json, check_if_array, check_if_obj, check_if_contains_prop} = require("../../business_logic_modules/general_modules/basic_functions");
const Sequelize = require('sequelize');
const  { open_mysql_connection } = require("../../dbs/sequelize");


// input data should be always array of objects for bulk insert
module.exports.common_bulk_insert = function (model,data_to_insert_json) {

    return new Promise((resolve, reject) =>
    { 
    if(!check_if_array(data_to_insert_json) || !check_if_obj(data_to_insert_json) || (data_to_insert_json.length == 0)) {
        var new_obj2 = {};
        new_obj2.data = 'The input should be a non-empty array';
        return reject(new_obj2);
    } else {
        var len = data_to_insert_json.length;
        
        model
        .bulkCreate(data_to_insert_json, {returning: true}).then(function(response){
            let data_only = JSON.stringify(response);
            let inserted_array = JSON.parse(data_only);
            var new_obj = {};
            new_obj.data = inserted_array;
            new_obj.no_of_rows = inserted_array.length;
            new_obj.flag = 1;

            var set1 = [];var set3 = [];
            for (let i=0;i<len;i++) {
                for (var key in inserted_array[i]) {
                    set1.push(key);
                }
                for (var key in data_to_insert_json[i]) {
                    if(!set1.includes(key)) {
                        let set2_obj = {};
                        set2_obj.row = (i+1);
                        set2_obj.column = key;
                        set3.push(set2_obj);
                    }
                }
            }
            if(set3.length!=0)
            {
                new_obj.column_not_found = set3;
                new_obj.flag = 0;
            }

            return resolve(new_obj);
            // success return consist of object of 
            // data: array of inserted rows
            // flag: 1 if inserted
            // column_not_found: consist of array of objects of rows in which a column has not been inserted and also the column itself that are not present in table and not inserted

        }).catch(err => {
            var new_obj1 = {};
            new_obj1.data = err;
            new_obj1.flag = 0;
            return reject(new_obj1);
            // failure return consist of object of 
            // data: error
            // flag: 0 if not inserted
        });
    }
    });
    
}

module.exports.common_single_insert = function (model,data_to_insert_json) {
    
    return new Promise((resolve, reject) =>
    { 
        if(typeof data_to_insert_json != 'object' || check_if_array(data_to_insert_json)) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an object';
            return reject(new_obj2);
        } else {
            var restriction_arr = [];
            var feedback_arr = [];
            var error_arr = [];
            for (var key in data_to_insert_json) {
                restriction_arr.push(key);
             }
           
            model
            .create(data_to_insert_json, { fields: restriction_arr }).then(function(response){
                let data_only = JSON.stringify(response);
                let data_as_obj = JSON.parse(data_only);
                var new_obj = {};
                new_obj.data = data_as_obj;
                new_obj.id = data_as_obj.id;
                new_obj.flag = 1;

                for (var key in data_as_obj) {
                    feedback_arr.push(key);
                 }
                 
                 restriction_arr.forEach(function (element, i) {
                    if(!feedback_arr.includes(element))
                    {
                        error_arr.push(element);
                    }
                });

                if(error_arr.length!=0)
                {
                    new_obj.column_not_found = error_arr;
                    new_obj.flag = 0;
                }
              
                return resolve(new_obj);
                // success return consist of object of 
                // data: object of inserted row
                // id: id of inserted row
                // flag: 1 if inserted
                // column_not_found: consist of columns that are not present in table and not inserted
            
            }).catch(err => {
                var new_obj1 = {};
                new_obj1.data = err;
                new_obj1.flag = 0;
                return reject(new_obj1);
                // failure return consist of object of 
                // data: error
                // flag: 0 if not inserted
                 });
        }    
    });
    
}

// single or multiple rows can be updated using this endpoint
module.exports.common_simple_update = function (model,data) {
    return new Promise((resolve, reject) =>
    { 
        if(typeof data != 'object' || check_if_array(data) || !check_if_contains_prop(data,['data_to_update','condition'])) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an object with properties data_to_update and condition';
            return reject(new_obj2);
        } else {
            data_to_update_json = data.data_to_update;
            condition_json = data.condition;
            model.update(
                data_to_update_json,
                { where: condition_json }
            )
            .then(function(response){
                let data_only = JSON.stringify(response);
                let data_as_obj = JSON.parse(data_only);
                var new_obj = {};
                new_obj.data = data_as_obj;
                return resolve(new_obj);
                // success return consist of object of 
                // data: array of number of edited rows as integer value
            
            
            }).catch(err => {
                var new_obj1 = {};
                new_obj1.data = err;
                new_obj1.flag = 0;
                return reject(new_obj1);
                // failure return consist of object of 
                // data: error
                // flag: 0 if not inserted
            
            });
        }
    });
    
}

// This endpoint is used for every complex update queries eg that having LIKE, AND etc
module.exports.common_custom_update = function (update_info) {

    sequelize = open_mysql_connection(update_info.db);


    return new Promise((resolve, reject) =>
    { 
        if(typeof update_info != 'object' || check_if_array(update_info) || !check_if_contains_prop(update_info,['table_name','data','condition_string'])) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an object';
            return reject(new_obj2);
        } else {
                let data_to_update = update_info.data;
                let condition = update_info.condition_string;
                let data_string = '';
                for (var key in data_to_update) {
            
                    data_string = data_string.concat(key+'='+data_to_update[key]+',');
                }
                data_string = data_string.slice(0, -1);


                sequelize.query("UPDATE "+update_info.table_name+" SET " + data_string +" WHERE "+ condition).spread((results, metadata) => {
                    var new_obj = {};
                    new_obj.data = metadata.affectedRows;
                    return resolve(new_obj);
                    // success return consist of object of 
                    // data: number of edited rows
                }).catch(err => {
                    var new_obj1 = {};
                    new_obj1.data = err;
                    new_obj1.flag = 0;
                    return reject(new_obj1);
                    // failure return consist of object of 
                    // data: error
                    // flag: 0 if not inserted
            });
        }
    });
    
}

// This reads selected columns/all columns of every rows from database
module.exports.common_simple_read = function (model,received) {
    
    return new Promise((resolve, reject) =>
    { 
        if(!check_if_array(received) || (typeof received[0]!= 'string')) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an array with first element string and second element integer if any';
            return reject(new_obj2);
        } else {
            if(received.length == 2 && (typeof received[1] != 'number')) {
                var new_obj2 = {};
                new_obj2.data = 'The input should be an array with first element string and second element integer if any';
                return reject(new_obj2);
            }
        var property_string = received[0].replace(/ /g,'');
        var limit_if_any = received[1];
        if(property_string != '*')
        {
            flag =0;
            var res = property_string.split(",");
            if(limit_if_any)
            arg = {
                attributes: res, limit: limit_if_any
            };
            else
            {
            arg = {
                attributes: res
            };
            }
        } else {
            flag = 1;
        }
        // var value = data.value;
        if(flag == 0) {
            model.findAll(arg).then(response => {
                var new_obj = {};
                new_obj.data = response;
                new_obj.no_of_rows = response.length;
                return resolve(new_obj);
                // success return consist of object of 
                // data: array of fetched rows
                // no_of_rows: number of rows fetched 
          }).catch(err => {
            var new_obj1 = {};
            new_obj1.data = err;
            return reject(new_obj1);
            // failure return consist of object of 
            // data: error
          });
        } else {
            if(limit_if_any)
            {
                model.findAll({ limit: limit_if_any }).then(response => {
                    var new_obj = {};
                    new_obj.data = response;
                    new_obj.no_of_rows = response.length;
                    return resolve(new_obj);
                    // success return consist of object of 
                    // data: array of fetched rows
                    // no_of_rows: number of rows fetched 
              }).catch(err => {
                var new_obj1 = {};
                new_obj1.data = err;
                return reject(new_obj1);
                // failure return consist of object of 
                // data: error
              });
            } else {
                model.findAll().then(response => {
                    var new_obj = {};
                    new_obj.data = response;
                    new_obj.no_of_rows = response.length;
                    return resolve(new_obj);
                    // success return consist of object of 
                    // data: array of fetched rows
                    // no_of_rows: number of rows fetched 
              }).catch(err => {
                var new_obj1 = {};
                new_obj1.data = err;
                return reject(new_obj1);
                // failure return consist of object of 
                // data: error
              });
            }
          
        }
       
    }
    });
    
}

// to fetch single row data by primary key
module.exports.common_simple_id_read = function (model,received) {
    
    
    return new Promise((resolve, reject) =>
    { 
        if(!check_if_array(received) || (received.length!= 1) || (typeof received[0] != 'number')) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an array of a single element integer value';
            return reject(new_obj2);
        } else {
        var fetched_id = received[0];
        model.findByPk(fetched_id).then(response => {
             
            if(response == null) {
                var found = 0;
            } else {
                found = 1;
            }
            var new_obj = {};
            new_obj.data = response;
            new_obj.found = found;
            return resolve(new_obj);
            // success return consist of object of 
            // data: fetched row
            // found: whether match found
      }).catch(err => {
        var new_obj1 = {};
        new_obj1.data = err;
        return reject(new_obj1);
        // failure return consist of object of 
        // data: error
      });
    }
    });
    
}

// for complex select queries
module.exports.common_custom_read = function (received) {
    
    sequelize = open_mysql_connection(received[1]);

    
    return new Promise((resolve, reject) =>
    { 
        if(!check_if_array(received) || ((received.length!= 2) && (received.length!= 1)) || (typeof received[0] != 'string')) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an array of a two elements ( first element select query and second element db name) or just one element of query, db is autoselected';
            return reject(new_obj2);
        } else {
        var query = received[0];
        sequelize.query(query, { type: sequelize.QueryTypes.SELECT})
        .then(response => {
            var new_obj = {};
            new_obj.data = response;
            new_obj.no_of_rows = response.length;
            return resolve(new_obj);
            // success return consist of object of 
            // data: array of fetched rows
            // no_of_rows: no of fetched rows
        }).catch(err => {
            var new_obj1 = {};
            new_obj1.data = err;
            return reject(new_obj1);
            // failure return consist of object of 
            // data: error
      });
    }
    });
    
}

// delete single/multiple rows based on condition
module.exports.common_delete = function (model,condition) {

    
    return new Promise((resolve, reject) =>
    { 
        if(typeof condition != 'object' || check_if_array(condition)) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an object';
            return reject(new_obj2);
        } else {
        model.destroy({
            where: condition
        })
        .then(response => {
            var new_obj = {};
            new_obj.data = response;
            return resolve(new_obj);
            // success return consist of object of 
            // data: no of rows deleted
        }).catch(err => {
            var new_obj1 = {};
            new_obj1.data = err;
            return reject(new_obj1);
            // failure return consist of object of 
            // data: error
      });
    }
    });
    
}

// for all raw queries
module.exports.common_query = function (received) {

    sequelize = open_mysql_connection(received[1]);

    
    return new Promise((resolve, reject) =>
    { 
        if(!check_if_array(received) || ((received.length!= 2) && (received.length!= 1)) || (typeof received[0] != 'string')) {
            var new_obj2 = {};
            new_obj2.data = 'The input should be an array of a two elements ( first element select query and second element db name) or just one element of query, db is autoselected';
            return reject(new_obj2);
        } else {
        var query = received[0];
        sequelize.query(query)
        .spread((response, metadata) => {
            var new_obj = {};
            new_obj.data = response;
            new_obj.metadata = metadata;
            return resolve(new_obj);
            // success return consist of object of 
            // data: response of query
            // metadata: any additional info as a result of exec of above query

        }).catch(err => {
            var new_obj1 = {};
            new_obj1.data = err;
            return reject(new_obj1);
            // failure return consist of object of 
            // data: error
      });
    }
    });
    
}

// end point to create non-existing tables in phpmyadmin
module.exports.hard_create = function (models) {
    let new_arr = [];
    return new Promise((resolve, reject) =>
    { 

        for(let i=0;i<models.length;i++) {
            models[i].sync().then(() => {
               
                new_arr.push(models[i].tableName);
                if(new_arr.length == models.length) {
                    var new_obj = {};
                    new_obj.data = "Hard created all tables from model js";
                    new_obj.created_tables = new_arr;
                    return resolve(new_obj);
                    // success return consist of object of 
                    // data: success response of hard creation
                    // created_tables: list of tables created
                }
        
            }).catch(err => {
                var new_obj1 = {};
                new_obj1.data = err;
                return reject(new_obj1);
                // failure return consist of object of 
                // data: error
          });
        }

 
    });
    
}
