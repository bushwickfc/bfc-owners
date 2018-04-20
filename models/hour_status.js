'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_status', {
    'status': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'display_name': {
      type: DataTypes.STRING,
    },
    'pos_display': {
      type: DataTypes.STRING,
    },
    'minimum_balance': {
      type: DataTypes.INTEGER,
    },
    'maximum_balance': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'hour_status',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

