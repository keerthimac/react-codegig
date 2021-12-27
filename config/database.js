const Sequelize = require('sequelize');

// Option 1: Passing a connection URI
module.exports = new Sequelize('codegig', 'root', '0542222175', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });


