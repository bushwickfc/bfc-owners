'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_balance', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'balance': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'hour_balance',

    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

