'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equity_log', {
    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'email': {
      type: DataTypes.STRING,
    },
    'amount': {
      type: DataTypes.DOUBLE,
    },
    'transaction_date': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'equity_log',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
