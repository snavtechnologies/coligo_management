const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { get_sequelize_model_instance }  = require("../business_logic_modules/general_modules/basic_functions");
const  { default_db } = require("../dbs/mysql_dbs");

// get request to this endpoint
exports.get_default_db = (req, res, next) => {
    if(typeof req.session.db != 'undefined') {
        database = req.session.db;
      } else {
        database = default_db //for angular development only since session does not works in port 4200 of angular, remove this else condition while hosting.
      }

      res.status(200).json({
        db: database
       });
}