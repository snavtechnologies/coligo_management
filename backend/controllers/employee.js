const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { get_sequelize_model_instance }  = require("../business_logic_modules/general_modules/basic_functions");

//const db = '';

// get employee requests to this endpoint

exports.employees_list_all = (req, res, next) => {
 
  common_simple_read(get_sequelize_model_instance('employee_info', req.session.head_db, req.session)[0],['*']).then(feedback => {
data_response =
{
data: {
        rows: feedback.data,
        no_of_rows: feedback.no_of_rows
    },
status_code: 200
};
give_response(res, data_response);

})
.catch(feedback => {
data_response =
{
data: {
      msg: 'Error',
      error: feedback.data
      },
status_code: 500
};
give_response(res, data_response);

});
}

exports.get_max_id_emp_info = (req, res, next) => {
    const  db = req.body.db;
    const data = req.body.data.branch_code;
    const table_name = req.body.table_name;
     common_custom_read(["select (max(id)) as max_id from " + table_name + " where branch_code = " + data + " ",db
     ]).then(feedback => {
             data_response =
             {
             data: {
                 rows: feedback.data,
                 no_of_rows: feedback.no_of_rows
                   },
             status_code: 200
             };
             give_response(res, data_response);
              
             })
             .catch(feedback => {
       
             data_response =
             {
             data: {
               msg: 'Error',
               error: feedback.data
                   },
             status_code: 500
             };
             give_response(res, data_response);
       
             });
}

exports.fetch_existing_employee_by_last_timestamp = (req, res, next) => { 
    common_custom_read(["SELECT * FROM employee_info where timestamp = (SELECT MAX(timestamp)  FROM employee_info where branch_code =" + req.session.branch_code + ")", req.session.head_db]).then(feedback => {
   data_response =
   {
   data: {
       rows: feedback.data,
       no_of_rows: feedback.no_of_rows
         },
   status_code: 200
   };
   give_response(res, data_response);
    
   })
   .catch(feedback => {

   data_response =
   {
   data: {
     msg: 'Error',
     error: feedback.data
         },
   status_code: 500
   };
   give_response(res, data_response);

   });
}

exports.do_single_fetch_with_where_condition = (req, res, next) => { 
  const data = req.body.data;
  const table_name = req.body.table_name;
  const column = req.body.condition_column;
  const db = req.body.db;
  
  common_custom_read(["select * from " + table_name + " where " + column + " = '" + data + "' ",db
]).then(feedback => {
        data_response =
        {
        data: {
            rows: feedback.data,
            no_of_rows: feedback.no_of_rows
              },
        status_code: 200
        };
        give_response(res, data_response);
         
        })
        .catch(feedback => {
  
        data_response =
        {
        data: {
          msg: 'Error',
          error: feedback.data
              },
        status_code: 500
        };
        give_response(res, data_response);
  
        });
  }