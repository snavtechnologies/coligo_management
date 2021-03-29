const  { common_bulk_insert, common_query, common_single_insert, common_simple_update } = require("../../business_logic_modules/general_modules/common_crud");
// let moment = require("moment-timezone");
const  { get_current_date, get_sequelize_model_instance } = require("./basic_functions");


module.exports = function (acc_info, model, db, session) {
    return new Promise((resolve, reject) =>
    { 
        
        common_single_insert(get_sequelize_model_instance('group_transactions', db, session)[0],{"account_id_string":"test"}).then(feedback => {
                
            var ledger_trans_id = feedback.id;
        
            combined_accounts = [];
            for(i=0;i<acc_info.length;i++)
            {
                var comb_arr = [];
                
                var datetime = get_current_date();

                acc_info[i]['entrydate']=  datetime;
                if(acc_info[i].flag == 1)
                {
                    acc_info[i]['debit'] =  '0.00';
                    acc_info[i]['credit'] =  acc_info[i]['amount'];
            
                } 
                else
                if(acc_info[i].flag == 0)
                {
                    acc_info[i]['debit'] =  acc_info[i]['amount'];
                    acc_info[i]['credit'] =  '0.00';
                

                }


                var obj1 = { ...acc_info[i] };
                

                let temp=acc_info[i]['account_id'];
                acc_info[i]['account_id']  = acc_info[i]['by_account'];
                acc_info[i]['by_account']  = temp;

                let temp1=acc_info[i]['credit'];
                acc_info[i]['credit']  = acc_info[i]['debit'];
                acc_info[i]['debit']  = temp1;


                var obj2 = { ...acc_info[i] };
                var warning = 0;
                if(acc_info[i]['extra_prop'].name && acc_info[i]['extra_prop'].value && acc_info[i]['extra_prop'].insert_to) {
                    let e_p_name = acc_info[i]['extra_prop'].name;
                    let e_p_value = acc_info[i]['extra_prop'].value;
                    let e_p_to = acc_info[i]['extra_prop'].insert_to;

                    let data = ["SHOW COLUMNS FROM `account_folio` LIKE '"+e_p_name+"';",db];
                    common_query(data).then(feedback => {
                        if(feedback.data.length == 0) {
                            warning = 1;
                        }
                    
                    });
                    
                    if(e_p_to == 'first')
                    {
                        obj1[e_p_name] = e_p_value;

                    } else
                    if(e_p_to == 'second')
                    {
                        obj2[e_p_name] = e_p_value;
                    } else 
                    if(e_p_to == 'all')
                    {
                        obj1[e_p_name] = e_p_value;
                        obj2[e_p_name] = e_p_value;
                    } 
                }   
        
                obj1.ledger_transaction_id = ledger_trans_id;
                obj2.ledger_transaction_id = ledger_trans_id;
                delete obj1.amount;
                delete obj1.flag;
                delete obj1.extra_prop;
                delete obj2.amount;
                delete obj2.flag;
                delete obj2.extra_prop;
                comb_arr.push(obj1);
                comb_arr.push(obj2);
                
                common_bulk_insert(model, comb_arr).then(feedback => {
                    let parsed_accounts = feedback.data;
                    combined_accounts = combined_accounts.concat(parsed_accounts);
                    if(combined_accounts.length == (acc_info.length*2)) {
                        combined_accounts.data = combined_accounts;
                        combined_accounts.warning = warning;
                        combined_accounts.flag = feedback.flag;
                        combined_accounts.column_not_found = feedback.column_not_found;
                        let account_id_json_str = [];
                        combined_accounts.data.forEach(function (element, i) {
                            account_id_json_str[i] = element.id
                        });
                        let account_id_json_str_stringified = JSON.stringify(account_id_json_str);


                        data1 = {
                            data_to_update : {
                                "account_id_string" : account_id_json_str_stringified
                            },
                            condition : {
                                "id": ledger_trans_id
                            }
                        }
                        
                        common_simple_update(get_sequelize_model_instance('group_transactions', db, session)[0],data1).then(feedback => {
                            const arr1 = [];
                            arr1['combined_accounts'] = combined_accounts;
                            arr1['ledger_transaction_id'] = ledger_trans_id;
                            return resolve(arr1);
                           
                          })
                          .catch(error_data => {
                            return reject(error_data);
                      
                          });

                        
                    }
                
                })
                .catch(error_data => {
                return reject(error_data);
            
                });
            
        }
        })
            .catch(error_data => {
            return reject(error_data);   
        });
    });
       
}
