const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejsCrud', 'root', 'Sparta@123', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection done.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};

db.employees = require('../server/model.js')(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports.employees = db.employees;

