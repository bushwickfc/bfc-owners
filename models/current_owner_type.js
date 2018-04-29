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
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

