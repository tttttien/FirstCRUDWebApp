module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
   
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
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
