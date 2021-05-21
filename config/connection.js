const { Sequelize } = require('sequelize');
require('dotenv').config();
 
//! create database w/ Sequelize constructor func
//* add environment vars dbname / dbuser / mysql pass
 const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }    
);

(async () => {
    //await sequelize.sync();
    try {
        await sequelize.authenticate();
        console.log('Connection successfully established!')
    } catch(err) {
        if (err) throw ('Connection unsuccessful', err);
    } /* finally{
        console.log('Try & Catch aren\'t working. So, neither am I. Beer time! 🤷‍♂️ ')
    } */
})();


module.exports = sequelize;