var express = require('express');
const db = require('../server/dataBase');

const students = db.students;
module.exports.addStudent = async (firstName, lastName, studentRoll, studentClass) => {
    return await students.create(
        {
            firstName: firstName,
            lastName: lastName,
            studentRoll: studentRoll,
            studentClass: studentClass,
        }
    );
}

module.exports.getAllStudentData = async () => {
    let stuData = await students.findAll();
        console.log(stuData);
    return stuData;
}
module.exports.getStudentData = async (id) => {
    let stuData = await students.findByPk(id);
    // console.log(stuData);
    return stuData;
}
module.exports.updateStudentData = async (id, firstName, lastName, studentRoll, studentClass) => {
    let stuData = await students.update({
        firstName: firstName,
        lastName: lastName,
        studentRoll: studentRoll,
        studentClass: studentClass,
    },{where:{id:id}});
        // console.log(stuData);
  
    return stuData;
}
module.exports.deleteUser = async (id)=>{
        // console.log(stuData);
    return await students.destroy({
          where:{id:id}
      })
  }