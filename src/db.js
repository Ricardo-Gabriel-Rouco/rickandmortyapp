// hasta ahotra va todo bien
const { Sequelize } = require('sequelize');

let db = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    driver: 'SQL Server Native Client 10.0',
    instanceName: 'SQLEXPRESS',
    trustedConnection: true
    },
  host: 'localhost',
  database: 'ABRANTES'
})

try {
    db.authenticate();
    console.log('se conecto jajaj')
} catch (error) {
    console.error('no nos pudimos conectar che', error)
}



db.close()