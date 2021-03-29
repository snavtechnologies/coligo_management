const express = require("express");
const bodyParser = require("body-parser");
const listEndpoints = require('express-list-endpoints');
var pretty = require('express-prettify');
var session = require('express-session');
var path = require("path");
const core = require('cors');


const  { run_every_cron } = require("./business_logic_modules/general_modules/run_every_cron");
const  { give_response }  = require("./business_logic_modules/general_modules/client_response");

const app = express();

// Run every added cron tasks
run_every_cron();

const userRoutes = require("./routes/user");
const customerRoutes = require("./routes/customer");
const accountsRoutes = require("./routes/accounts");
const generalRoutes = require("./routes/general_route");
const common_functionsRoutes = require("./routes/common_functions");
const savingsRoutes= require("./routes/savings_account");
const fileUploadRoutes= require("./routes/file_uploads");

const employeeRoutes = require("./routes/employee");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "angular")));
app.use(pretty({ query: 'pretty' }));
app.use(session({secret: "navtechnologies_snav_my_secret_key",saveUninitialized: false,resave: false, cookie: { maxAge: 2400000 }}));
app.use(core({ origin: 'http://localhost:4200'}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-auth, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD"
  );
  next();
});

// all routes main division here
app.use("/api/user", userRoutes);
app.use("/api/crud", generalRoutes);
app.use("/api/common_functions", common_functionsRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/deposits/savings_account", savingsRoutes);
app.use("/api/file_uploads", fileUploadRoutes);

app.use("/api/employees", employeeRoutes);

// all routes main division here

// list every endpoints of nace_fin
app.get("/api/list_all_endpoints", function (req, res) {
  res.json(listEndpoints(app))
//   if(req.session.page_views){
//     req.session.page_views++;
//     res.send("You visited this page " + req.session.page_views + " times");
//  } else {
//     req.session.page_views = 1;
//     res.send("Welcome to this page for the first time!");
//  }
});

app.use((req, res, next) => {
 res.sendFile(path.join(__dirname, "angular", "index.html"))
});

module.exports = app;
