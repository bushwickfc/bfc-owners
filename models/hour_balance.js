'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_balance', {
    'email': {
      type: DataTypes.STRING,
    },
    'balance': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'hour_balance',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

