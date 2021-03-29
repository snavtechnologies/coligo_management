const express = require("express");
const AccountsController = require("../controllers/accounts");

const router = express.Router();

router.get("/accounts_list_all", AccountsController.accounts_list_all);
router.post("/accounts_list_one", AccountsController.accounts_list_one);
router.post("/accounts_list_some", AccountsController.accounts_list_some);
router.post("/bulk_transaction_entry", AccountsController.bulk_transaction_entry);
router.post("/bulk_transaction_entry_multi_branch", AccountsController.bulk_transaction_entry_multi_branch);
router.post("/bulk_transaction_entry_party_branch", AccountsController.bulk_transaction_entry_party_branch);
router.post("/bulk_transaction_entry_head_branch", AccountsController.bulk_transaction_entry_head_branch);
router.post("/bulk_transaction_entry_front_db", AccountsController.bulk_transaction_entry_front_db);
router.post("/bulk_transaction_entry_mobile_api", AccountsController.bulk_transaction_entry_mobile_api);



router.post("/fetch_loan_account_values", AccountsController.fetch_loan_account_values);
router.post("/insert_loan_account_values", AccountsController.insert_loan_account_values);
module.exports = router;
