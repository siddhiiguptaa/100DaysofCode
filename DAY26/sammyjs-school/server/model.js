module.exports = (sequelize, Sequelize) => {
  const students = sequelize.define("students", {
    firstName: {
      type: Sequelize.STRING,
      field: "firstName",
      defaultValue: "John",
    },
    lastName: {
      type: Sequelize.STRING,
      field: "lastName",
      defaultValue: "Doe",
    },
    studentRoll: {
      type: Sequelize.STRING,
      field: "studentRoll",
      defaultValue: '0',
    },
    studentClass: {
      type: Sequelize.STRING,
      field: "studentClass",
      defaultValue: '0',
    },
  });
  // console.log(students);
  return students;
};
