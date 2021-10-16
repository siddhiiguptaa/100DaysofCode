module.exports = (sequelize,Sequelize)=>{
    const employees = sequelize.define('employees', {
        firstName: {
            type: Sequelize.STRING,
            field: 'firstName'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'lastName'
        },
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        
    }
    );
    return employees;
}
