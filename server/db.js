const mysql = require('mysql');
function connect(){
    const connection = mysql.createConnection({
        host:'172.0.2.216',
        user: 'root',
        password: 'root',
        database: 'DacDB',
        port: 8888
    });
    connection.connect();

    return connection;
}

module.exports = {
    connect: connect
}
