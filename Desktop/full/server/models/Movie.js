//id (întreg, cheie primară), un titlu (un string de cel puțin 3 caractere),
//o categorie (enumerare de categorii posibile), o dată a publicării (date)

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Movies", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 32] },
    },
    category: {
      type: DataTypes.ENUM("HORROR", "THRILLER", "ACTION", "COMEDY"),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
