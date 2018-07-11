'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_view', {
    'pos_id': {
      type: DataTypes.STRING,
    },
    'owner_type': {
      type: DataTypes.STRING,
    },
    'owner_type_name': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'first_name': {
      type: DataTypes.STRING,
    },
    'last_name': {
      type: DataTypes.STRING,
    },
    'pos_display': {
      type: DataTypes.STRING,
    },
    'hour_balance': {
      type: DataTypes.DOUBLE,
    },
    'equity_current': {
      type: DataTypes.BOOLEAN,
    },
    'hours_current': {
      type: DataTypes.BOOLEAN,
    },
    'owner_price': {
      type: DataTypes.BOOLEAN,
    },
    'equity_paid': {
      type: DataTypes.DOUBLE,
    },
    'equity_due': {
      type: DataTypes.DOUBLE,
    },
    'equity_delinquent': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'owner_view',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
