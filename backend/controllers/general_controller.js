const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { common_bulk_insert, common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../business_logic_modules/general_modules/common_crud");
const  { get_sequelize_model_instance}  = require("../business_logic_modules/general_modules/basic_functions");



exports.do_list_all = (req, res, next) => {
    const table_name = req.body.table_name;
 
    common_simple_read(get_sequelize_model_instance(table_name, req.session.head_db, req.session)[0],['*']).then(feedback => {
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


// Sample data to pass
// { table_name: "employee_roles" }
exports.do_fetch_by_last_timestamp = (req, res, next) => { 
    const table_name = req.body.table_name;
    common_custom_read(["SELECT * FROM " + table_name + " where timestamp = (SELECT MAX(timestamp)  FROM " + table_name + ")", req.session.head_db]).then(feedback => {
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
// ______________________________________________________________________________________________________
// If the db parameters is ommited, the default db will be used


//   Sample updating data passed
//   The below endpoint insert below properties in single row
//   {
//       "table_name" : 'account_folio' ,
//       "db" : "nace_fin_core",
//         "data": {
//             "bill_no" :"13",
//             "particular" : "1"
//         }
//   }



exports.do_single_insertion = (req, res, next) => {
   const  db = req.body.db;
    common_single_insert(get_sequelize_model_instance(req.body.table_name, req.body.db, req.session)[0],req.body.data).then(feedback => {
        data_response =
        {
        data: {
                inserted_id: feedback.id,
                inserted_row: feedback.data,
                flag: feedback.flag,
                column_not_found: feedback.column_not_found
            },
        status_code: 201
        };
        give_response(res, data_response); 
})
    .catch(feedback => {

        data_response =
        {
        data: {
                msg: 'Error',
                error: feedback.data,
                flag: feedback.flag
              },
        status_code: 500
        };
        give_response(res, data_response);

    });
}

exports.do_single_insertion_cus_info = (req, res, next) => {
    const  db = req.body.db;
    common_single_insert(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
         data_response =
         {
         data: {
                 inserted_id: feedback.id,
                 inserted_row: feedback.data,
                 flag: feedback.flag,
                 column_not_found: feedback.column_not_found
             },
         status_code: 201
         };
         give_response(res, data_response); 
 })
     .catch(feedback => {
 
         data_response =
         {
         data: {
                 msg: 'Error',
                 error: feedback.data,
                 flag: feedback.flag
               },
         status_code: 500
         };
         give_response(res, data_response);
 
     });
}

exports.do_single_insertion_emp_info = (req, res, next) => {
    const  db = req.body.db;
    common_single_insert(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
         data_response =
         {
         data: {
                 inserted_id: feedback.id,
                 inserted_row: feedback.data,
                 flag: feedback.flag,
                 column_not_found: feedback.column_not_found
             },
         status_code: 201
         };
         give_response(res, data_response); 
 })
     .catch(feedback => {
 
         data_response =
         {
         data: {
                 msg: 'Error',
                 error: feedback.data,
                 flag: feedback.flag
               },
         status_code: 500
         };
         give_response(res, data_response);
 
     });
}

exports.do_simple_update_emp_info = (req, res, next) => {
    const db = req.body.db;
    common_simple_update(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
        data_response =
        {
        data: {
            no_of_rows_updated: feedback.data
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);

    });
}
 
 
 


// ______________________________________________________________________________________________________


//   Sample updating data passed
    // {
    // "table_name" : "account_folio" ,
    // "db" : "nace_fin_core",
    // "data":   {
    //         "data_to_update" : {
    //             "narration" : "updated narrationw"
    //             },
    //             "condition" : {
    //             "account_id": ["3333","121"]
    //             }
    //         }
    // }

//   The , seperated values will be treated as logical IN in sql and the additional properties will be treated as logical AND

exports.do_simple_update = (req, res, next) => {
    const db = req.body.db;
    common_simple_update(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
        data_response =
        {
        data: {
            no_of_rows_updated: feedback.data
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);

    });
}

exports.do_custom_update = (req, res, next) => {
    common_custom_update(req.body).then(feedback => {
        data_response =
        {
        data: {
            no_of_rows_updated: feedback.data
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);

    });

}

exports.do_simple_update_cus_info = (req, res, next) => {
    const db = req.body.db;
    common_simple_update(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
        data_response =
        {
        data: {
            no_of_rows_updated: feedback.data
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);

    });
}
// ______________________________________________________________________________________________________

//    Sample data to pass
//   {
//       "table_name" : "account_folio" ,
//       "db" : "nace_fin_core",
//       "data": ["id, particular",2]
//   }
   
//    First element is comma seperated values of columns to find
//    If first element is given as * fetches all data, 
//    You can also specifiy a limit for * by giving an integer value as second element

exports.do_simple_read = (req, res, next) => {
    const db = req.session.db;
    common_simple_read(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);
    });
}

// ______________________________________________________________________________________________________


//   Sample data to pass
//   {
//       "table_name" : "account_folio" ,
//       "db" : "nace_fin_core",
//       "data": [4]
//   }
//   id should be an integer value

exports.do_simple_id_read = (req, res, next) => {
    
    
    common_simple_id_read(get_sequelize_model_instance(req.body.table_name, req.body.db, req.session)[0],req.body.data).then(feedback => {
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);
       
    });
}

// ______________________________________________________________________________________________________

//Retrieves only needed columns from the table using id

//   Sample data to pass
//   {
//    table_name: 'employee_info',
//    columns_to_retrieve: 'id, emp_first_name, emp_middle_name, emp_last_name, branch_code',
//    data: view_id,
//    db: this.head_db
//   }
//   id should be an integer value


exports.do_simple_id_read_with_where_condition = (req, res, next) => {
    const data = req.body.data;
    const db = req.body.db;
    const table_name = req.body.table_name;
    const columns_to_retrieve = req.body.columns_to_retrieve;
    

    common_custom_read(["select " + columns_to_retrieve + " from " + table_name + " where id = '" + data + "' ",db])
    .then(feedback => {
        data_response =
        {
        data: {
            row: feedback.data[0],
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

exports.do_custom_read = (req, res, next) => {
    const data = req.body.data;
    const db = req.body.db;
    const table_name = req.body.table_name;
    const columns_to_retrieve = req.body.columns_to_retrieve;
    const condition = data.condition;
    const keys = Object.keys(condition);

    common_custom_read(["select " + columns_to_retrieve + " from " + table_name + " where " + keys[0] + " = '" + condition[keys[0]] + "' ",db])
    .then(feedback => {
        data_response =
        {
        data: {
            row: feedback.data[0],
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

exports.do_custom_select_query = (req, res, next) => {
    const data = req.body.data;
    const db = req.body.db;
    const query = data['query'];

    common_custom_read([query,db])
    .then(feedback => {
        data_response =
        {
        data: {
            row: feedback.data[0],
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

// ______________________________________________________________________________________________________

// Sample data to pass
//   {
//       "table_name" : "account_folio" ,
//       "db" : "nace_fin_core",
//       "data": {
//         "id" : 3,
//         "account_id" : "11"
//       }
//   }


exports.do_delete = (req, res, next) => {
    const db = req.session.db;
    const user_id = req.session.user_id;
    common_custom_read(["SELECT * FROM  group_permission WHERE  userid =" + user_id +"" ,db
      ]).then(feedback => {
       // const result_user_array = feedback.data;
       // fetchedDetails = result_user_array;
       // console.log(fetchedDetails);
        permissionDetails = JSON.parse(feedback.data[0].permission);
       // console.log(permissionDetails.delete.permission);
        req.session.delete = permissionDetails.delete.permission;
    if ( req.session.delete === '1') {
        delete  req.session.delete;
    common_delete(get_sequelize_model_instance(req.body.table_name, db, req.session)[0],req.body.data).then(feedback => {
        data_response =
        {
        data: {
            no_of_rows_deleted: feedback.data,
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
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);
       
    });
  } else {
    data_response =
    {
    data: {
            msg: 'Error',
            error: 'No Permision',
          },
    status_code: 401
    };
    give_response(res, data_response);
  }
})
}

// ______________________________________________________________________________________________________

//  Sample data to pass
// {
//     "table_name" : "account_folio" ,
//     "db" : "nace_fin_core",
//     "data": [
//         {
//           "account_id" : 1,
//           "by_account" : 2
//         },
//           {
//           "account_id" : 3,
//           "by_account" : 4
//         }
//       ]
// }

exports.do_bulk_insert = (req, res, next) => {
common_bulk_insert(get_sequelize_model_instance(req.body.table_name, req.body.db, req.session)[0], req.body.data).then(feedback => {
    data_response =
    {
    data: {
        inserted_data: feedback.data,
        flag: feedback.flag,
        not_found: feedback.column_not_found
    },
    status_code: 201
    };
    give_response(res, data_response); 

    })
    .catch(feedback => {
        data_response =
        {
        data: {
                msg: 'Error',
                error: feedback.data,
              },
        status_code: 500
        };
        give_response(res, data_response);

    });
}



// ______________________________________________________________________________________________________
