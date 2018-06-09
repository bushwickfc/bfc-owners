'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_equity_type', {
    'owner_id': {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    'equity_type': {
      type: DataTypes.STRING,
      primaryKey: true
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
