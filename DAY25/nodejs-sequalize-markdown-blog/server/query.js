var express = require('express');
const db = require('../server/dataBase');

const employees = db.employees;
module.exports.addEmployee = async (firstName, lastName, email) => {
    return await employees.create(
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
    );
}

module.exports.getAllEmployeeData = async () => {
    let empData = await employees.findAll();
    return empData;
}
module.exports.getEmployeeData = async (id) => {
    let empData = await employees.findByPk(id);
    return empData;
}
module.exports.updateEmployeeData = async (id, firstName, lastName, email) => {
    let empData = await employees.update({
        firstName: firstName,
        lastName: lastName,
        email: email,
    },{where:{id:id}});
    return empData;
}
module.exports.deleteUser = async (id)=>{
    return await employees.destroy({
          where:{id:id}
      })
      
  }