import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

const backend_def =  environment.apiUrl;
const backend_def_php = environment.PhpapiUrl;



@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  // ALL THE REST API PATHS HERE

  // third part rest apis
  fetch_bank_details_endpoint = 'https://ifsc.razorpay.com/';
  fetch_pincode_details_endpoint = 'https://api.postalpincode.in/pincode/';

  // crud rest apis
  do_single_insertion = backend_def + 'crud/do_single_insertion';
  do_single_insertion_cus_info = backend_def + 'crud/do_single_insertion_cus_info';
  do_single_insertion_emp_info = backend_def + 'crud/do_single_insertion_emp_info';
  do_simple_update = backend_def + 'crud/do_simple_update';
  do_custom_update = backend_def + 'crud/do_custom_update';
  do_simple_update_cus_info = backend_def + 'crud/do_simple_update_cus_info';
  do_simple_update_emp_info = backend_def + 'crud/do_simple_update_emp_info';
  do_simple_id_read =  backend_def + 'crud/do_simple_id_read';
  do_simple_id_read_with_where_condition = backend_def + 'crud/do_simple_id_read_with_where_condition';
  do_custom_read = backend_def + 'crud/do_custom_read';
  do_custom_select_query = backend_def + 'crud/do_custom_select_query';
  do_simple_read =  backend_def + 'crud/do_simple_read';
  do_delete =  backend_def + 'crud/do_delete';
  do_bulk_insert = backend_def + 'crud/do_bulk_insert';
  do_fetch_by_last_timestamp = backend_def + 'crud/do_fetch_by_last_timestamp';
  do_list_all = backend_def + 'crud/do_list_all';


  // php rest apis
  do_searchbox = backend_def_php + 'customer_search.php';
  table_backend = backend_def_php + 'ajax_load_common_loan_table_data.php';


  do_share_certificate_print = backend_def_php + 'share_certificate.php';


  // user defined rest apis
  login_route_endpoint = backend_def + 'user/login';
  logout_route_endpoint = backend_def + 'user/logout';
  check_login_endpoint = backend_def + 'user/is_logged_in'
  get_default_db_endpoint = backend_def + 'common_functions/get_default_db';
  compare_password = backend_def + 'user/compare_password';

  kyc_fetch_customer_by_ts_endpoint =  backend_def + 'customers/kyc_fetch_existing_customer_by_last_timestamp';
  kyc_fetch_all_customer = backend_def + 'customers/customers_list_all';
  security_get_existing_customer_by_last_timestamp = backend_def + 'customers/security_get_existing_customer_by_last_timestamp';
  get_max_id_cus_info = backend_def + 'customers/get_max_id_cus_info';
  get_max_id = backend_def + 'customers/get_max_id';
  do_simple_read_cus_documents = backend_def + 'customers/do_simple_read_cus_documents';
  do_single_fetch_with_where_condition = backend_def + 'customers/do_single_fetch_with_where_condition';

  fetch_employee_by_ts_endpoint =  backend_def + 'employees/fetch_existing_employee_by_last_timestamp';
  get_max_id_emp_info = backend_def + 'employees/get_max_id_emp_info';
  fetch_all_employee = backend_def + 'employees/employees_list_all';
  do_single_fetch_employee_with_where_condition = backend_def + 'employees/do_single_fetch_with_where_condition';

  bulk_transaction_entry = backend_def + 'accounts/bulk_transaction_entry';
  bulk_transaction_entry_multi_branch =  backend_def + 'accounts/bulk_transaction_entry_multi_branch';
  bulk_transaction_entry_party_branch =  backend_def + 'accounts/bulk_transaction_entry_party_branch';
  bulk_transaction_entry_head_branch =  backend_def + 'accounts/bulk_transaction_entry_head_branch';
  bulk_transaction_entry_front_db =  backend_def + 'accounts/bulk_transaction_entry_front_db';



  fetch_loan_account_head = backend_def + 'accounts/fetch_loan_account_values';


  savings_ac_fetch_customer_by_ts_endpoint =  backend_def + 'deposits/savings_account/savings_ac_fetch_existing_customer_by_last_timestamp';
  do_get_binder_session = backend_def + 'deposits/savings_account/get_binder_session';
  do_get_target_link_session = backend_def + 'deposits/savings_account/get_target_link_session';
  do_get_all_banks_by_link = backend_def + 'deposits/savings_account/get_all_banks_by_link';
  do_get_max_sd_id = backend_def + 'deposits/savings_account/get_max_sd_id';
  do_get_branch_code = backend_def + 'deposits/savings_account/get_branch_code';
  do_savings_common_custom_read = backend_def + 'deposits/savings_account/sd_details_fetch';
  get_database_by_cus_branch = backend_def + 'deposits/savings_account/get_database_by_cus_branch';
  get_database_by_party_branch = backend_def + 'deposits/savings_account/get_database_by_party_branch';

  get_multi_branch_details = backend_def + 'deposits/savings_account/get_multi_branch_details';
  get_multi_branch_cheque_details1 = backend_def + 'deposits/savings_account/get_multi_branch_cheque_details1';
  get_multi_branch_cheque_details  = backend_def + 'deposits/savings_account/get_multi_branch_cheque_details';
  get_multi_branch_details1 = backend_def + 'deposits/savings_account/get_multi_branch_details1';
  do_savings_common_custom_read_accounts = backend_def + 'deposits/savings_account/savings_fetch_accounts';
  do_savings_avail_bal_fetch = backend_def + 'deposits/savings_account/savings_fetch_availbal';
  get_sd_balance = backend_def + 'deposits/savings_account/sd_balance';

  file_uploader = backend_def + 'file_uploads';
  constructor() {  }

}
