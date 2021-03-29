const Sequelize = require('sequelize');
// const op = Sequelize.Op;
const  { get_db_credentails, default_db } = require("./mysql_dbs");


module.exports.open_mysql_connection = function (database, session) {
  if( database == '') {
    if(typeof session != 'undefined') {
      database = session;
    } else {
      database = default_db //for angular development only since session does not works in port 4200 of angular, remove this else condition while hosting.
    }
}
  var credential_arr = get_db_credentails(database);
  const sequelize = new Sequelize(database,credential_arr[0], credential_arr[1], {
    host: credential_arr[2],
    dialect: 'mysql',
    operatorsAliases: false,
    // logging: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
        freezeTableName: true,
    }
  });
  
  
  sequelize
  .authenticate()
  .then(() => {
    console.log('MySQL Success: ' + database + ' connected');
  })
  .catch(err => {
    console.error('Connection to MySQL failed', err);
  });

  return sequelize;
}

module.exports.close_mysql_connection = function (sequelize) {
  sequelize.connectionManager.close().then(() => console.log('Connection closed'));
}

