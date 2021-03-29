const bcrypt = require("bcryptjs");
const  { common_single_insert, common_simple_update, common_custom_update, common_simple_read, common_simple_id_read, common_custom_read, common_delete, common_query} = require("../business_logic_modules/general_modules/common_crud");
const  { give_response }  = require("../business_logic_modules/general_modules/client_response");
const  { get_sequelize_model_instance }  = require("../business_logic_modules/general_modules/basic_functions");

const db = 'nace_fin_employees';

exports.loginUser = (req, res, next) => {
  var data = ["select * from employee_info where username = '" + req.body.username + "'", db];
  const check_username_existence = new Promise((resolve, reject) =>
  {
    common_custom_read(data).then(feedback => {
      const result_user_array = feedback.data;
      fetchedUser = result_user_array[0];
      if(typeof fetchedUser == 'undefined') {
        reject(false);
      } else {
          resolve(bcrypt.compare(req.body.password, fetchedUser.password));   
      }
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
   });
    

   check_username_existence.then(result => {
      if (!result) {
        return res.status(401).json({ 
        });
      }
        // initialize session variables
        req.session.db = 'nace_fin_employees';
        req.session.head_db = 'nace_fin_employees';
        req.session.user_id = fetchedUser.id;
        req.session.username = fetchedUser.username;
        //req.session.k_id = fetchedUser.k_id;
        req.session.branch_code = fetchedUser.branch_code;
        
        
        res.status(200).json({
          msg: fetchedUser.name + " <br>logged in",
          flag: 1,
          user_id:  fetchedUser.id,
          sig: fetchedUser.signature,
          branch_code: fetchedUser.branch_code,
          current_db: fetchedUser.db,
          head_db: 'nace_fin_employees',
          role: fetchedUser.role
        });
    })
    .catch(err => {
      return res.status(401).json({});
    })
}

exports.compare_password = (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;
  var data = ["select * from employee_info where username = '" + username + "'", db];
  const check_username_existence = new Promise((resolve, reject) =>
  {
    common_custom_read(data).then(feedback => {
      const result_user_array = feedback.data;
      fetchedUser = result_user_array[0];
      if(typeof fetchedUser == 'undefined') {
        reject(false);
      } else {
          resolve(bcrypt.compare(password, fetchedUser.password));   
      }
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
   });

   check_username_existence.then(result => {
      if (!result) 
        return res.status(401).json({});

      res.status(200).json({
        is_authorized: true
      })
    })
    .catch(err => {
      return res.status(401).json({});
    })
}

exports.bcrypt_it = (req, res, next) => { 
    bcrypt.hash(req.body.text, 10, function(err, hash) {
      return res.status(200).json({
        bcrypt: hash
      });
   });
  }

exports.is_logged_in = (req, res, next) => { 
    if(req.session.user_id) {
      res.status(200).json({
       status: true
      });
    } else {
      res.status(200).json({
        status: false
       });
    }
  }

exports.logoutUser = (req, res, next) => { 
    req.session.destroy();
    res.status(200).json({
      msg: "Successfully logged out"
     });
  }