// DB DEFINISIONS

const dbs = [
{
    db: 'nace_fin_core',
    username: process.env.MYSQL_username,
    password: process.env.MYSQL_password,
    hostname: process.env.MYSQL_hostname
},
{
    db: 'nace_fin_head_office',
    username: process.env.MYSQL_username,
    password: process.env.MYSQL_password,
    hostname: process.env.MYSQL_hostname
},
{
    db: 'nace_fin_users',
    username: process.env.MYSQL_username,
    password: process.env.MYSQL_password,
},
{
    db: 'nace_fin_employees',
    username: process.env.MYSQL_username,
    password: process.env.MYSQL_password,
    hostname: process.env.MYSQL_hostname
}, 
]

module.exports.default_db = 'nace_fin_users';

// DB DEFINISIONS

module.exports.get_db_credentails = function (database) {
    let data = [];
    dbs.forEach(function(entry) {
        if(entry.db==database) {
            data.push(entry.username);
            data.push(entry.password);
            data.push(entry.hostname);
        }
    });
    return data;
}
