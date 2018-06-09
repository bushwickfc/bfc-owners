'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_log', {
    'amount': {
      type: DataTypes.INTEGER,
    },
    'hour_date': {
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
    tableName: 'hour_log',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.hour_reason, {
      foreignKey: 'hour_reason',
      targetKey: 'hour_reason',
      primaryKey: true,
      as: '_hour_reason',
    });
    Model.belongsTo(models.owner, {
      foreignKey: 'email',
      targetKey: 'email',
      primaryKey: true,
      as: '_email',
    });
  };

  return Model;
};
