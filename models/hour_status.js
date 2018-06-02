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
    'owner_price': {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'hour_status',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

