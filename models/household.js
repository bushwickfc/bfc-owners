'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('household', {
    'household': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'email': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
  }, {
    tableName: 'household',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

