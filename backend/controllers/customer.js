const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { get_sequelize_model_instance }  = require("../business_logic_modules/general_modules/basic_functions");

const db = '';

// get request to this endpoint
exports.customers_list_all = (req, res, next) => {
 
        common_simple_read(get_sequelize_model_instance('customer_info', req.session.head_db, req.session)[0],['*']).then(feedback => {
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

exports.customers_list_one = (req, res, next) => {
  common_simple_id_read(get_sequelize_model_instance('customer_info', req.session.head_db, req.session)[0], req.body).then(feedback => {
    data_response =
    {
    data: {
              row: feedback.data,
              found: feedback.found
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


exports.customers_list_some = (req, res, next) => {
  var data = ["select * from customer_info where id between "+ req.body[0] + " and " +  req.body[1], req.session.head_db];
  common_custom_read(data).then(feedback => {
    data_response =
    {
    data:{
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

exports.kyc_fetch_existing_customer_by_last_timestamp = (req, res, next) => { 
  
       common_custom_read(["SELECT * FROM customer_info where timestamp = (SELECT MAX(timestamp)  FROM customer_info where branch_code =" + req.session.branch_code + ")", req.session.head_db]).then(feedback => {
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

exports.security_get_existing_customer_by_last_timestamp = (req, res, next) => { 
  
  const table_name = req.body.table_name;
  const db = req.session.db;

  common_custom_read(["SELECT * FROM " + table_name + " where timestamp = (SELECT MAX(timestamp)  FROM " + table_name + " )", db]).then(feedback => {
      data_response =
      {
      data: {
          rows: feedback.data,
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

exports.get_max_id_cus_info = (req, res, next) => {
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
exports.get_max_id = (req, res, next) => {
      const  db = req.body.db;
      const table_name = req.body.table_name;
       common_custom_read(["select (max(id)) as max_id from " + table_name + "",db
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
         exports.do_simple_read_cus_documents = (req, res, next) => {
          const  db = req.body.db;
          const table_name = req.body.table_name;
           common_custom_read(["select * from " + table_name + " where cus_id = "+ req.body.data +"",db
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
