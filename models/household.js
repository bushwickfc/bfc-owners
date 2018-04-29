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
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

