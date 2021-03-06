'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_type', {
    'owner_type': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'display_name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'work_requirement': {
      type: DataTypes.INTEGER,
    },
    'work_surrogate': {
      type: DataTypes.INTEGER,
    },
    'shopping_surrogate': {
      type: DataTypes.INTEGER,
    },
    'owner_price': {
      type: DataTypes.BOOLEAN,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner_type',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

