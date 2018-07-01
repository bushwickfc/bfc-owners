'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_equity', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'paid': {
      type: DataTypes.DOUBLE,
    },
    'due': {
      type: DataTypes.DOUBLE,
    },
    'pos_display': {
      type: DataTypes.STRING,
    },
    'owner_price': {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'owner_equity',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
