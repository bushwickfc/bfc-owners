'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_log', {
    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'email': {
      type: DataTypes.STRING,
    },
    'amount': {
      type: DataTypes.INTEGER,
    },
    'hour_reason': {
      type: DataTypes.STRING,
    },
    'hour_date': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'hour_log',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
