'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_balance', {
    'owner_id': {
      type: DataTypes.INTEGER,
    },
    'balance': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'hour_balance',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

