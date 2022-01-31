//id (întreg, cheie primară),
//un nume (un string de cel puțin 5 caractere), un rol (dintr-un set limitat de roluri posibile e.g. DIRECTOR, WRITER).

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("CrewMember", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5, 32] },
    },
    role: {
      type: DataTypes.ENUM("DIRECTOR", "WRITER", "REGIZOR"),
      allowNull: false,
    },
    idMovie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
