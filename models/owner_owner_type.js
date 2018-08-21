'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_owner_type', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'start_date': {
      type: DataTypes.DATEONLY,
      primaryKey: true
    },
    'owner_type': {
      type: DataTypes.STRING
    },
    'end_date': {
      type: DataTypes.DATEONLY,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner_owner_type',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
