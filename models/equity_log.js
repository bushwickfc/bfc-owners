'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equity_log', {
    'owner_id': {
      type: DataTypes.INTEGER,
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

