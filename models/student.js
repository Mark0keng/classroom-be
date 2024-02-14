"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Course, {
        through: "studentcourses",
        as: "courses",
        foreignKey: "student_id",
      });

      Student.belongsToMany(models.Assignment, {
        through: "studentassignments",
        as: "assignments",
        foreignKey: "student_id",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      major: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
