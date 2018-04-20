'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equity_round', {
    'equity_round': {
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
    tableName: 'equity_round',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

