const express = require("express");
const CustomerController = require("../controllers/customer");

const router = express.Router();

router.get("/customers_list_all", CustomerController.customers_list_all);
router.get("/kyc_fetch_existing_customer_by_last_timestamp", CustomerController.kyc_fetch_existing_customer_by_last_timestamp);

router.post("/customers_list_one", CustomerController.customers_list_one);
router.post("/customers_list_some", CustomerController.customers_list_some);
router.post("/security_get_existing_customer_by_last_timestamp", CustomerController.security_get_existing_customer_by_last_timestamp);
router.post("/get_max_id_cus_info", CustomerController.get_max_id_cus_info);
router.post("/get_max_id", CustomerController.get_max_id);
router.post("/do_simple_read_cus_documents", CustomerController.do_simple_read_cus_documents);
router.post("/do_single_fetch_with_where_condition", CustomerController.do_single_fetch_with_where_condition);

module.exports = router;
