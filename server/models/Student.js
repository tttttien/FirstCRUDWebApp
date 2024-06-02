module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    StudentID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StudentDOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StudentAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StudentPhone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
  );
  
  return Student;
};
