'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equity_log', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'amount': {
      type: DataTypes.DOUBLE,
    },
    'transaction_date': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'equity_log',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

