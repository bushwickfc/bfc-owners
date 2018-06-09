'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('equity_type', {
    'equity_type': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'amount': {
      type: DataTypes.DOUBLE,
    },
    'payment_plan_amount': {
      type: DataTypes.DOUBLE,
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
    tableName: 'equity_type',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.equity_round, {
      foreignKey: 'equity_round',
      targetKey: 'equity_round',
      as: '_equity_round',
    });

  };

  return Model;
};
