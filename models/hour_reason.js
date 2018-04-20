'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_reason', {
    'hour_reason': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'display_name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'hour_reason',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

