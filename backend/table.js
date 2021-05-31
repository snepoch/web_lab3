const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "posts",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
