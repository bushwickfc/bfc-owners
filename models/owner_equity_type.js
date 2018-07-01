'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_equity_type', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'equity_type': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'start_date': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner_equity_type',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
