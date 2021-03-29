const  acc_entry  = require("../business_logic_modules/general_modules/accounts_entry_interface");
const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query, common_bulk_insert, hard_create} = require("../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { get_sequelize_model_instance }  = require("../business_logic_modules/general_modules/basic_functions");

const db = 'nace_fin_core'

// get request to this endpoint
exports.accounts_list_all = (req, res, next) => {
    common_simple_read(get_sequelize_model_instance('account_folio', db, req.session)[0],['*']).then(feedback => {
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

// [2]
 exports.accounts_list_one = (req, res, next) => {
    common_simple_id_read(get_sequelize_model_instance('account_folio', db, req.session)[0], req.body).then(feedback => {
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

// [1,3]
  exports.accounts_list_some = (req, res, next) => {
    var data = ["select * from account_folio where id between "+ req.body[0] + " and " +  req.body[1], db];
    
    common_custom_read(data).then(feedback => {
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

    // THIS HAS BEEN KEPT COMMENTED FOR REFERENCE
//     AccountFolio.findAll(
//         {
//             where: 
//             {       
//                 id: { [op.between]: [req.body.id1, req.body.id2]  }  
//                 // [op.and]: {id: 5}      
//             }
// }).then(some_account => {
//         res.status(200).json({
//             msg: some_account
//           });
//   }).catch(err => {
//     return res.status(500).json({
//         msg: 'Server Error',
//         error: err  
//     });
//   });
    // THIS HAS BEEN KEPT COMMENTED FOR REFERENCE

  }

// How to pass data to this endpoint
// {
//     "transactions": [
//       {
//         "account_id": "121",
//         "by_account": "3333",
//         "narration": "paid to try cs",
//         "amount" : "1500",
//         "flag" : "1",
//         "extra_prop" : {
//             "name" : "bill_no",
//             "value" : 10,
//             "insert_to" : "second"
//         }
//       }
//     ]
//   }
  exports.bulk_transaction_entry = (req, res, next) => {
    const db = req.session.db;
   
   
      acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
          if(feedback.warning == 1) {
            var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
            var flag2 = 0;
        } else if(feedback.warning == 0) {
            flag2 = 1;
        }
            data_response =
            {
            data: {
                      msg: 'Double transactions created',
                      feedback: feedback.combined_accounts.data,
                      ledger_transaction_id: feedback.ledger_transaction_id,
                      warning : warning_msg,
                      columns_not_inserted: feedback.combined_accounts.column_not_found,
                      flag1: feedback.combined_accounts.flag,
                      flag2: flag2
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
                  flag1: feedback.flag,
                  flag2: 0
              },
        status_code: 500
        };
        give_response(res, data_response);

      })
        
 }

 exports.bulk_transaction_entry_mobile_api = (req, res, next) => {
  const db = req.body.db;
 
 
    acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
        if(feedback.warning == 1) {
          var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
          var flag2 = 0;
      } else if(feedback.warning == 0) {
          flag2 = 1;
      }
          data_response =
          {
          data: {
                    msg: 'Double transactions created',
                    feedback: feedback.combined_accounts.data,
                    ledger_transaction_id: feedback.ledger_transaction_id,
                    warning : warning_msg,
                    columns_not_inserted: feedback.combined_accounts.column_not_found,
                    flag1: feedback.combined_accounts.flag,
                    flag2: flag2
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
                flag1: feedback.flag,
                flag2: 0
            },
      status_code: 500
      };
      give_response(res, data_response);

    })
      
}
 exports.bulk_transaction_entry_multi_branch = (req, res, next) => {
  const db = req.session.multibranch_db;
  
 
    acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
        if(feedback.warning == 1) {
          var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
          var flag2 = 0;
      } else if(feedback.warning == 0) {
          flag2 = 1;
      }
          data_response =
          {
          data: {
                    msg: 'Double transactions created',
                    feedback: feedback.combined_accounts.data,
                    ledger_transaction_id: feedback.ledger_transaction_id,
                    warning : warning_msg,
                    columns_not_inserted: feedback.combined_accounts.column_not_found,
                    flag1: feedback.combined_accounts.flag,
                    flag2: flag2
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
                flag1: feedback.flag,
                flag2: 0
            },
      status_code: 500
      };
      give_response(res, data_response);

    })
      
}
exports.bulk_transaction_entry_party_branch = (req, res, next) => {
  const db = req.session.partybranch_db;
  
 
    acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
        if(feedback.warning == 1) {
          var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
          var flag2 = 0;
      } else if(feedback.warning == 0) {
          flag2 = 1;
      }
          data_response =
          {
          data: {
                    msg: 'Double transactions created',
                    feedback: feedback.combined_accounts.data,
                    ledger_transaction_id: feedback.ledger_transaction_id,
                    warning : warning_msg,
                    columns_not_inserted: feedback.combined_accounts.column_not_found,
                    flag1: feedback.combined_accounts.flag,
                    flag2: flag2
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
                flag1: feedback.flag,
                flag2: 0
            },
      status_code: 500
      };
      give_response(res, data_response);

    })
      
}
exports.bulk_transaction_entry_head_branch = (req, res, next) => {
  const db = req.session.head_db;
  
 
    acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
        if(feedback.warning == 1) {
          var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
          var flag2 = 0;
      } else if(feedback.warning == 0) {
          flag2 = 1;
      }
          data_response =
          {
          data: {
                    msg: 'Double transactions created',
                    feedback: feedback.combined_accounts.data,
                    ledger_transaction_id: feedback.ledger_transaction_id,
                    warning : warning_msg,
                    columns_not_inserted: feedback.combined_accounts.column_not_found,
                    flag1: feedback.combined_accounts.flag,
                    flag2: flag2
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
                flag1: feedback.flag,
                flag2: 0
            },
      status_code: 500
      };
      give_response(res, data_response);

    })
      
}

exports.bulk_transaction_entry_front_db = (req, res, next) => {
  const db = req.body.db;
  
 
    acc_entry(req.body.transactions, get_sequelize_model_instance('account_folio', db, req.session)[0], db) .then(feedback => {
        if(feedback.warning == 1) {
          var warning_msg = 'The column in extra_prop does not exist and has not been inserted';
          var flag2 = 0;
      } else if(feedback.warning == 0) {
          flag2 = 1;
      }
          data_response =
          {
          data: {
                    msg: 'Double transactions created',
                    feedback: feedback.combined_accounts.data,
                    ledger_transaction_id: feedback.ledger_transaction_id,
                    warning : warning_msg,
                    columns_not_inserted: feedback.combined_accounts.column_not_found,
                    flag1: feedback.combined_accounts.flag,
                    flag2: flag2
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
                flag1: feedback.flag,
                flag2: 0
            },
      status_code: 500
      };
      give_response(res, data_response);

    })
      
}
//  {
//    "db" : "nace_fin_core",
//    "loan": "las"
//  }


 exports.fetch_loan_account_values = (req, res, next) => {
      const loan = req.body.loan
      const data = ["head"];
      const db = req.session.db;
      common_simple_read(get_sequelize_model_instance('loan_account_heads', db, req.session)[0], data).then(feedback => {
       
        const heads_arr_parsed = JSON.parse(feedback.data[0].head);
        let out_arr = [];
        let out_arr_json = '';
        heads_arr_parsed.forEach(function(entry) {
          if (entry.loan == loan) {
            out_arr.push(entry.heads.principal_account);
            out_arr.push(entry.heads.interest_account);
            out_arr.push(entry.heads.penalty_account);
            out_arr.push(entry.heads.waiver_account);
            out_arr.push(entry.heads.processing_fee);
            out_arr.push(entry.heads.legal_charge);
            out_arr.push(entry.heads.valuation_charge);
            out_arr_json = JSON.stringify(out_arr);
          }
        });
        if (out_arr_json) {
          res.status(200).json(out_arr_json); 
        } else {
          res.status(401).json({});
        }

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

  //     {
  //     "db" : "nace_fin_core",
  //     "loan_heads": [ 
  //           { 
  //           "loan" : "las",
  //           "heads" :
  //             {
  //             "principal_account" :"1",
  //             "interest_account" : "2",
  //             "penalty_account" : "3",
  //             "waiver_account" : "4",
  //             } 
  //             },  { 
  //               "loan" : "lap",
  //               "heads" :
  //                 {
  //                 "principal_account" :"5",
  //                 "interest_account" : "6",
  //                 "penalty_account" : "7",
  //                 "waiver_account" : "8",
  //                 } 
  //             },  { 
  //               "loan" : "pl",
  //               "heads" :
  //                 {
  //                 "principal_account" :"9",
  //                 "interest_account" : "10",
  //                 "penalty_account" : "11",
  //                 "waiver_account" : "12",
  //                 } 
  //             },  { 
  //               "loan" : "vc",
  //               "heads" :
  //                 {
  //                 "principal_account" :"13",
  //                 "interest_account" : "14",
  //                 "penalty_account" : "15",
  //                 "waiver_account" : "16",
  //                 } 
  //             },  { 
  //               "loan" : "lad",
  //               "heads" :
  //                 {
  //                 "principal_account" :"17",
  //                 "interest_account" : "18",
  //                 "penalty_account" : "19",
  //                 "waiver_account" : "20",
  //                 } 
  //             },  { 
  //               "loan" : "cl",
  //               "heads" :
  //                 {
  //                 "principal_account" :"21",
  //                 "interest_account" : "22",
  //                 "penalty_account" : "23",
  //                 "waiver_account" : "24",
  //                 } 
  //               }     
  //     ]
  // }
 exports.insert_loan_account_values = (req, res, next) => {
  
  const data_to_insert =    {
      "head": JSON.stringify(req.body.loan_heads)
  };
  common_single_insert(get_sequelize_model_instance('loan_account_heads', req.body.db, req.session)[0],data_to_insert).then(feedback => {
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
