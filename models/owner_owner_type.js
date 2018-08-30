'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_owner_type', {
    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'email': {
      type: DataTypes.STRING,
    },
    'start_date': {
      type: DataTypes.DATEONLY,
    },
    'owner_type': {
      type: DataTypes.STRING,
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
