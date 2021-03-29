//const { Customer_Info } = require("../../dbs/sequelize");
const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../../business_logic_modules/general_modules/client_response");


exports.sd_details_fetch = (req, res, next) => { 
  const sd_ac_id = req.body.data;
  const db = req.body.db;
  common_custom_read(["select id,(select coalesce(sum(credit)-sum(debit),0) from account_folio where account_folio.account_id = accounts.id) as avail_bal,(select cus_id from sd_account where sd_account.cus_id = accounts.cus_id) as sd_cus_id,(select sd_account_no from sd_account where sd_account.cus_id = accounts.cus_id) as savings_ac_no  from accounts where accounts.cus_id = "+sd_ac_id+" and `link` LIKE '%3~5~%'",db
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


exports.savings_fetch_accounts = (req, res, next) => { 
    const mem_id = req.body.data;
    const link = req.body.link;
    const db = req.body.db;
    common_custom_read(["select * from accounts where cus_id =" + mem_id + " and link LIKE '%" + link + "%'",db]).then(feedback => {
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
 
exports.savings_fetch_availbal = (req, res, next) => { 
      const chitsaccount_id = req.body.data;
      const db = req.body.db;
      
      common_custom_read(["select coalesce(sum(credit)-sum(debit),0) as sd_avail_bal from account_folio where account_folio.account_id =" + chitsaccount_id,db ]).then(feedback => {
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
exports.sd_balance = (req, res, next) => { 
        const db = req.session.db;
        
        common_custom_read(["select id,(select coalesce(sum(credit)-sum(debit),0) from account_folio where account_folio.account_id = accounts.id) as avail_bal from accounts where accounts.cus_id = "+ req.body.cus_id +" and `link` LIKE '%3~5~%'",db ]).then(feedback => {
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


exports.savings_ac_fetch_existing_customer_by_last_timestamp = (req, res, next) => { 
      const acc_id = req.body.data;
      const db = req.session.db;
      common_custom_read(["SELECT * FROM account_folio where timestamp = (SELECT MAX(timestamp)  FROM account_folio) and account_id ='710'",db
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

exports.get_binder_session = (req, res, next) => { 
        const resolver = req.body.link;
        const key_id = req.session.k_id;
        
        common_custom_read(["select * from key_map where `link` LIKE  '%" + resolver + "%' and key_id = " + key_id +"",req.session.db
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
        
      
exports.get_target_link_session = (req, res, next) => { 
          
        const target_link = req.body.link + req.body.data;
          
        common_custom_read(["SELECT id,account_name FROM  `accounts` WHERE  `link` LIKE '%" + target_link + "%'",req.session.db
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
        
exports.get_max_sd_id = (req, res, next) => {
         
        common_custom_read(["select (max(id)+1) as seq from sd_account",req.session.db
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

exports.get_branch_code = (req, res, next) => { 

        const key_id = req.session.k_id;

        common_custom_read(["select * from users where k_id =" + key_id ,'nace_fin_users'
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
          
exports.get_database_by_cus_branch = (req, res, next) => { 
          
        const branch_code = req.body.data;
        const db = req.body.db;
        common_custom_read(["SELECT * FROM  users WHERE  branch_code =" + branch_code +"" ,db
            ]).then(feedback => {
              const result_user_array = feedback.data;
              fetchedDetails = result_user_array[0];
              req.session.multibranch_db = fetchedDetails.db;
              
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
              exports.get_database_by_party_branch = (req, res, next) => { 
          
                  const branch_code = req.body.data;
                  const db = req.body.db;
                  common_custom_read(["SELECT * FROM  users WHERE  branch_code =" + branch_code +"" ,db
                      ]).then(feedback => {
                        const result_user_array = feedback.data;
                        fetchedDetails = result_user_array[0];
                        req.session.partybranch_db = fetchedDetails.db;
                        
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
                    
exports.get_multi_branch_details = (req, res, next) => { 
          
                const native_branch_code = req.session.branch_code;
                const host_branch_code = req.body.data;
                const db = 'nace_fin_head_office';
  
              common_custom_read(["SELECT * FROM  intra_branch_accounts WHERE  host_branch_code =" + native_branch_code +" and native_branch_code= " + host_branch_code + "" ,db
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
exports.get_multi_branch_details1 = (req, res, next) => { 
          
                  const native_branch_code = req.body.data;
                  const host_branch_code = req.session.branch_code;
                  const db = 'nace_fin_head_office';
    
                common_custom_read(["SELECT * FROM  intra_branch_accounts WHERE  native_branch_code =" + host_branch_code +" and host_branch_code= " + native_branch_code + "" ,db
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
                  
                  exports.get_multi_branch_cheque_details = (req, res, next) => { 
          
                        const native_branch_code = req.body.condition_column;
                        const host_branch_code = req.body.data;
                        const db = 'nace_fin_head_office';
          
                      common_custom_read(["SELECT * FROM  intra_branch_accounts WHERE  native_branch_code =" + host_branch_code +" and host_branch_code= " + native_branch_code + "" ,db
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
                        exports.get_multi_branch_cheque_details1 = (req, res, next) => { 
          
                              const native_branch_code = req.body.data;
                              const host_branch_code = req.body.condition_column
                              const db = 'nace_fin_head_office';
                
                            common_custom_read(["SELECT * FROM  intra_branch_accounts WHERE  host_branch_code =" + native_branch_code +" and native_branch_code= " + host_branch_code + "" ,db
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

exports.get_all_banks_by_link = (req, res, next) => { 
          
        const target_link = req.body.data;
        const table_name = req.body.table_name;
          
        common_custom_read(["SELECT * FROM  " + table_name + " WHERE  `link` LIKE '%" + target_link + "%'",req.session.db
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
