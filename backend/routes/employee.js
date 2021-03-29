const express = require("express");
const EmployeeController = require("../controllers/employee");

const router = express.Router();

router.get("/employees_list_all", EmployeeController.employees_list_all);
router.get("/fetch_existing_employee_by_last_timestamp", EmployeeController.fetch_existing_employee_by_last_timestamp);

router.post("/get_max_id_emp_info", EmployeeController.get_max_id_emp_info);
router.post("/do_single_fetch_with_where_condition", EmployeeController.do_single_fetch_with_where_condition);

module.exports = router;