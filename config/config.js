// {
//   "development": {
//     "username": "postgres",
//     "password": "Family",
//     "database": "holly_database_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "postgres",
//     "password": "Family",
//     "database": "holly_database_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "postgres",
//     "password": "PzVvJT1Bjio1Q1c6YPWi",
//     "database": "railway",
//     "host": "containers-us-west-108.railway.app",
//     "dialect": "postgres",
//     "port": "7138"
//   }
// }

require('dotenv').config()
module.exports = {
  development: {
    database: '<holly_database_development>',
    dialect: 'postgres'
  },
  test: {
    database: '<holly_database_test>',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}