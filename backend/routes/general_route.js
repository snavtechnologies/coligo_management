const express = require("express");
const GeneralController = require("../controllers/general_controller");

const router = express.Router();

router.post("/do_single_insertion", GeneralController.do_single_insertion);
router.post("/do_single_insertion_cus_info", GeneralController.do_single_insertion_cus_info);
router.post("/do_single_insertion_emp_info", GeneralController.do_single_insertion_emp_info);
router.post("/do_simple_update", GeneralController.do_simple_update);
router.post("/do_custom_update", GeneralController.do_custom_update);
router.post("/do_simple_update_cus_info", GeneralController.do_simple_update_cus_info);
router.post("/do_simple_update_emp_info", GeneralController.do_simple_update_emp_info);
router.post("/do_simple_read", GeneralController.do_simple_read);
router.post("/do_simple_id_read", GeneralController.do_simple_id_read);
router.post("/do_delete", GeneralController.do_delete);
router.post("/do_bulk_insert", GeneralController.do_bulk_insert);
router.post("/do_simple_id_read_with_where_condition", GeneralController.do_simple_id_read_with_where_condition);
router.post("/do_custom_read", GeneralController.do_custom_read);
router.post("/do_custom_select_query", GeneralController.do_custom_select_query);
router.post("/do_fetch_by_last_timestamp", GeneralController.do_fetch_by_last_timestamp);
router.post("/do_list_all", GeneralController.do_list_all);

module.exports = router;
