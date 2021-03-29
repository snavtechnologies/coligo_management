const express = require("express");
const Savings_Controller = require("../controllers/deposits/savings_account");

const router = express.Router();

router.post("/sd_details_fetch", Savings_Controller.sd_details_fetch);
router.post("/savings_fetch_accounts", Savings_Controller.savings_fetch_accounts);
router.post("/savings_fetch_availbal", Savings_Controller.savings_fetch_availbal);
router.post("/sd_balance", Savings_Controller.sd_balance);
router.post("/get_binder_session", Savings_Controller.get_binder_session);
router.post("/get_target_link_session", Savings_Controller.get_target_link_session);
router.post("/get_all_banks_by_link", Savings_Controller.get_all_banks_by_link);
router.post("/get_database_by_cus_branch", Savings_Controller.get_database_by_cus_branch);
router.post("/get_database_by_party_branch", Savings_Controller.get_database_by_party_branch);
router.post("/get_multi_branch_details", Savings_Controller.get_multi_branch_details);
router.post("/get_multi_branch_details1", Savings_Controller.get_multi_branch_details1);
router.post("/get_multi_branch_cheque_details1", Savings_Controller.get_multi_branch_cheque_details1);
router.post("/get_multi_branch_cheque_details", Savings_Controller.get_multi_branch_cheque_details);
router.get("/savings_ac_fetch_existing_customer_by_last_timestamp", Savings_Controller.savings_ac_fetch_existing_customer_by_last_timestamp);
router.get("/get_max_sd_id", Savings_Controller.get_max_sd_id);
router.get("/get_branch_code", Savings_Controller.get_branch_code);


module.exports = router;
