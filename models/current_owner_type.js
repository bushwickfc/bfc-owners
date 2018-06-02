'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('current_owner_type', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'owner_type': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'current_owner_type',

    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
