const { unique } = require('jquery');
const DataTypes = require('sequelize');

const model_array = [
  {
      table_name: 'employee_roles',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        link: {
          type: DataTypes.STRING(255),
          allowNull: false
        }
      }
    },
    {
      table_name: 'employee_info',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        date: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        role_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        title: {
          type: DataTypes.STRING(2),
          allowNull: false
        },
        emp_first_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        emp_middle_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        emp_last_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        gender: {
          type: DataTypes.STRING(1),
          allowNull: false
        },
        id1: {
          type: DataTypes.STRING(1),
          allowNull: false
        },
        id1_type: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        id1_value: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        id2: {
          type: DataTypes.STRING(1),
          allowNull: false
        },
        id2_type: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        id2_value: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        permanent_address: {
          type: DataTypes.STRING(250),
          allowNull: false
        },
        res_code: {
          type: DataTypes.STRING(2),
          allowNull: false
        },
        permanent_pincode: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        permanent_state: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        permanent_district: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        permanent_city_town: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        permanent_area: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        h_coordinate: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        v_coordinate: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        present_address: {
          type: DataTypes.STRING(250),
          allowNull: false
        },
        present_pincode: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        present_state: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        present_district: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        present_city_town: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        present_area: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        contact1: {
          type: DataTypes.STRING(2),
          allowNull: false
        },
        contact1_value: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        contact2: {
          type: DataTypes.STRING(2),
          allowNull: false
        },
        contact2_value: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        contact3: {
          type: DataTypes.STRING(2),
          allowNull: false
        },
        contact3_value: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        dob: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        age: {
          type: DataTypes.STRING(3),
          allowNull: false
        },
        pan_card: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        aadhar: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        emp_status: {
          type: DataTypes.STRING(8),
          allowNull: false
        },
        emp_image: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER(1),
          allowNull: false
        },
        branch_code: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        username: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: true
        }
      }
    }, 
    {
        table_name: 'customer_info',
        model: {
            id: {
              type: DataTypes.INTEGER(11),
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            accounts: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            date: {
              type: DataTypes.STRING(100),
              allowNull: false
            },
            title: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            cus_first_name: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            cus_middle_name: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            cus_last_name: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            gender: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            occupation: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            id1: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            id1_type: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            id1_value: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            id2: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            id2_type: {
              type: DataTypes.STRING(50),
              allowNull: false
            },
            id2_value: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            address_1: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
           /* address_cat: {
              type: DataTypes.STRING(55),
              allowNull: false
            },*/
            address_2: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            res_code: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            pincode: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            state: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            district: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            city_town: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            area: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            present_pincode: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            present_state: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            present_district: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            present_city_town: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            present_area: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            h_coordinate: {
              type: DataTypes.DECIMAL,
              allowNull: false
            },
            v_coordinate: {
              type: DataTypes.DECIMAL,
              allowNull: false
            },
            email: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            contact1: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            contact1_value: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            contact2: {
              type: DataTypes.STRING(50),
              allowNull: false
            },
            contact2_value: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            contact3: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            contact3_value: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            no_of_shares: {
              type: DataTypes.INTEGER(55),
              allowNull: false
            },
            age: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            dob: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            pan_card: {
              type: DataTypes.STRING(100),
              allowNull: false
            },
            aadhar: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            vip_code: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            cus_status: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            cus_image: {
              type: DataTypes.STRING(200),
              allowNull: false
            },
            cus_sign: {
              type: DataTypes.STRING(200),
              allowNull: false
            },
            account_no: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            bank_ifsc: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            bank_name: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            bank_branch: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            bank_contact: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            bank_address: {
              type: DataTypes.STRING(255),
              allowNull: false
            },
            nominee_name: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            nominee_relation: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            nominee_age: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            nominee_gender: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            nominee_address: {
              type: DataTypes.STRING(255),
              allowNull: false
            },
            branch_code: {
              type: DataTypes.STRING(55),
              allowNull: false
            },
            status: {
              type: DataTypes.INTEGER(1),
              allowNull: false
            }
        }
    } ,
    {
      table_name: 'cheque_book_details',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        cheque_no: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        cus_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER(1),
          allowNull: false
        },
      }
    },
    {
      table_name: 'cheque_transactions',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        holder_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        cus_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        cheque_no: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        debit_branch: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        credit_branch: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
      }
    },
    {
      table_name: 'fd_bills',
      model:
      {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        action_on_maturity: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        fd_account_no: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        fd_invent_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        rate: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        fd_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        tds_details: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        nominee_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_dob1: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_name1: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_address1: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        nominee_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_dob2: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_name2: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_address2: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        nominee_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        nominee_dob3: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_name3: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        guardian_address3: {
          type: DataTypes.STRING(100),
          allowNull: false
        }      }
    },
    {
      table_name: 'fd_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },       
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tds_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        tds_percent: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tds_aplied_flag: {
          type: DataTypes.INTEGER(1),
          allowNull: false
        }
    
  }
},
{
  table_name: 'loan_receipts',
  model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }

},
{
  table_name: 'fd_inventory',
  model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fd_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    interest_rate_n: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    interest_rate_i: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    interest_accu: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    time_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }
},
{
  table_name: 'gl_bills',
  model: {
    bill_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan: {
      type: DataTypes.INTEGER(100),
      allowNull: false
    },
    ledger_transaction_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    specification: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    percentage: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    loan_total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    close_flag: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    terminate_close_flag: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    close_date: {
      type: DataTypes.STRING(19),
      allowNull: false
    },
    issue_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    discharge_bills_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    ref_no: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }
   
},
{
  table_name: 'gl_collection',
  model: {
    collection_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    loan_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ledger_trans_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    principal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    penalty: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    i_waiver: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    p_waiver: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tot_pay: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fine: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    print_rcpt_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }
   
},
{
  table_name: 'gl_loan_details',
  model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    inv_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    loan_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    gl_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
   
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }
   
},
{
  table_name: 'rd_bills',
  model:
  {
    bill_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rd_invent_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false
    },
    rd_name: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rd_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    maturity_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    terms: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    issue_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    guardian_name3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    guardian_address2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    discharge_bills_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    nominee_name1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_address1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_contact1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_dob1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_name2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_address2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_contact2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_dob2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_name3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_address3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_contact3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nominee_dob3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ledger_transaction_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    guardian_name1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    guardian_address1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    guardian_name2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    guardian_address3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    close_flag: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    close_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    terminate_close_flag: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    }

  }},
  {
    table_name: 'rd_collection',
    model: {
      collection_id: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      customer_id: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      rd_bill_id: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      receipt_id: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      agent_id: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      rec_amnt: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      print_rcpt_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      interest: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      penalty: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },                
      receipt_no: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      tot_pay: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      ledger_transaction_id: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    }
  },
  {
    table_name: 'rd_inventory',
    model: {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      rd_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      interest_accu: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      interest_rate: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }, 
      penal_interest_rate: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }      
    }
  },
  {
    table_name: 'rd_payment',
    model: {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ledger_transaction_id: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      loan_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      collection_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      payment_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      customer_id: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      receipt_no: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
    }
  },
{
  table_name: 'inventory_gs',
  model: {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gl_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }
   
},
    {
      table_name: 'gl_schemes_alt',
      model: {
        id: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        gl_inventory_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        start_period: {
          type: DataTypes.TEXT,
          allowNull: false
        },
       
  }
},
{
  table_name: 'gl_schemes',
  model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gl_inventory_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    start_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    end_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    interest_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
   
}
},
    {
      table_name: 'sd_account',
      model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sd_account_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
   
    sd_avail_bal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }    
  }
},
{
  table_name: 'las_security_info',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    value_of_security: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    maturity_date: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    margin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    advance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'lad_security_info',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fd_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fd_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
    
}
},
{
  table_name: 'lap_security_info',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    extend: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    market_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    internal_valuation: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    external_valuation: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    margin_percentage: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    advance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
    
}
},
{
  table_name: 'pl_security_info',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    net_income: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    existing_emi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    advance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
    
}
},

{
  table_name: 'vc_security_info',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    on_road_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    margin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    advance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    insurance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    date_of_insurance: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    vehicle_details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
    
}
},
{
  table_name: 'cl_security_info',
  model: {
    
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    item_details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    advance_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'lad_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    fd_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'las_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'lap_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'pl_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'cl_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'vc_sanction',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
}
},
{
  table_name: 'cus_documents',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    folder: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }
},
/*{
  table_name: 'cus_documents',
  model: {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
},*/

{
  table_name: 'credit_appraisal',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    nature_profession: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    other_nature_profession: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cur_emp_period: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tot_emp_period: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    org_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org_pincode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    org_city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    org_state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    office_phone: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    office_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    financial_status: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    income_source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bank_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_acc_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    asset_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loan_bank: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credit_bank: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
    

}
},

{
  table_name: 'inventory_gl',
  model: {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gl_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    receipt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    grace_period: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    }   
}
},
{
  table_name: 'accounts',
  model:
  {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }
 
}, {
      table_name: 'stored_procedure',
      model: {
        id: {
          type: DataTypes.INTEGER(50),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        proc_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        data: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        table_name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        action: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        }
      } 
    },

{
  table_name: 'key_map',
  model:
  {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    binder: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    
  }
 
},
{
  table_name: 'company_details',
  model: {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    company_abrevation: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    registered_office: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    business_address: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    contact1: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    contact2: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    cin: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    date_of_cin: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
  }
}, 

{
  table_name: 'pending_cheques',
  model:
  {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    assoc_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    flag: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cheque_no: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cheque_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cheque_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    narration: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    host_branch: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    native_branch: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }
},
    {
        table_name: 'account_folio',
        model: {
            id: {
              type: DataTypes.INTEGER(11),
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            account_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            by_account: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            credit: {
              type: DataTypes.DECIMAL,
              allowNull: false
            },
            debit: {
              type: DataTypes.DECIMAL,
              allowNull: false
            },
            narration: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            trans_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            entrydate: {
              type: DataTypes.STRING(25),
              allowNull: false
            },
            particular: {
              type: DataTypes.STRING(250),
              allowNull: false
            },
            bill_no: {
              type: DataTypes.STRING(10),
              allowNull: false
            },
            collection_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            customer_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            loan_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            },
            ledger_transaction_id: {
              type: DataTypes.INTEGER(11),
              allowNull: false
            }
          }
    },
     {
      table_name: 'group_permission',
      model: {
        id: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        user_name: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        userid: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        group_name: {
          type: DataTypes.STRING(150),
          allowNull: false
        },
        permission: {
          type: DataTypes.TEXT,
          allowNull: false
        }
        }
  },
    {
        table_name: 'group_transactions',
        model: {
            id: {
              type: DataTypes.INTEGER(11),
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            account_id_string: {
              type: DataTypes.STRING(50),
              allowNull: false
            }
          }
    },
    {
      table_name: 'lad_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      }
    }, {
      table_name: 'lad_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'lad_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        lad_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    }, 
    {
      table_name: 'lad_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    },
    {
      table_name: 'lap_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      }
    }, {
      table_name: 'lap_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'lap_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        lap_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    },
    {
      table_name: 'lap_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    },
     {
      table_name: 'las_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      
      }
    }, {
      table_name: 'las_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'las_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        las_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    },
    {
      table_name: 'las_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    },
     {
      table_name: 'pl_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      }
    }, {
      table_name: 'pl_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'pl_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        pl_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    },
    {
      table_name: 'pl_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    },
     {
      table_name: 'vc_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      }
    }, {
      table_name: 'vc_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'vc_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        vc_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    },
    {
      table_name: 'vc_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    }, , {
      table_name: 'cl_bills',
      model: {
        bill_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        loan: {
          type: DataTypes.INTEGER(100),
          allowNull: false
        },
        specification: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        },
        status: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        terminate_close_flag: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        close_date: {
          type: DataTypes.STRING(19),
          allowNull: false
        },
        issue_date: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        discharge_bills_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        ref_no: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact1: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact2: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_name3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_address3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        gurantor_contact3: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        security_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false
        },
        lean: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        }
      }
    }, {
      table_name: 'cl_collection',
      model: {
        collection_id: {
          type: DataTypes.INTEGER(100),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ledger_transaction_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        i_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        p_waiver: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        customer_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        receipt_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        agent_id: {
          type: DataTypes.INTEGER(50),
          allowNull: false
        },
        principal: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        penalty: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        receipt_no: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        tot_pay: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        credit_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        print_rcpt_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
      }
    }, {
      table_name: 'cl_inventory',
      model: {
        id: {
          type: DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        cl_amount: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        },
        interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        tenure: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(1),
          allowNull: false
        }
      }
    },
    {
      table_name: 'cl_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        ceiling_amount: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        penal_interest: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        processing_fee: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        max_terms: {
          type: DataTypes.INTEGER(10),
          allowNull: false
        }
        
      }
    },
    , {
      table_name: 'arrear_list',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        cus_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        terms: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        due_amount: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        loan_type: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        loan_name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false
        },
        response_flag: {
          type: DataTypes.STRING(50),
          allowNull: false
        }
      }
    },
    {
      table_name: 'cl_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'pl_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'lad_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'lap_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'las_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'vc_recovery_schedule',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        loan_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        due_reason: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },        
        due_amount: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        promised_payment_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        followup_date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },        
        remarks: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'users',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        k_id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        username: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        password: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        role: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        db: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        head_db: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        signature: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        branch_code: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER(1),
          allowNull: false,
        },
        kit_issued: {
          type: DataTypes.INTEGER(1),
          allowNull: false,
        },
      }
    },
    {
      table_name: 'users_log',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        login_time :{
          type: DataTypes.STRING(55),
          allowNull: false
        } 
      }
    },
    {
      table_name: 'branch_details',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        branch_code: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        address: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        contact_no: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        incharge: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        cin: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        date_of_cin: {
          type: DataTypes.STRING(55),
          allowNull: false
        },
        database_name: {
          type: DataTypes.STRING(55),
          allowNull: false
        }
        
      }
    },
    {
      table_name: 'intra_branch_accounts',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        account_head: {
          type: DataTypes.STRING(55),
          allowNull: false,
        },
        account_id: {
          type: DataTypes.INTEGER(55),
          allowNull: false,
        },
        native_branch_code: {
          type: DataTypes.INTEGER(55),
          allowNull: false,
        },
        host_branch_code: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
        }
            
      }
    },
    {
      table_name: 'loan_configuration',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        penal_interest_rate: {
          type: DataTypes.DECIMAL,
          allowNull: false
        }
      }
    },
    {
      table_name: 'loan_account_heads',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        head: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      }
    },
    {
      table_name: 'gl_account_heads',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        head: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      }
    },
    {
      table_name: 'fd_account_heads',
      model: {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        head: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      }
    }
];

module.exports.model_create = function (sequelize,table_name) {
    let data;
    model_array.forEach(function(entry) {
        if(entry.table_name==table_name) {
            data = entry.model
        }
    });

    return sequelize.define(table_name, data , {
        tableName: table_name,
        timestamps: false
      });

}
