'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_equity_type', {
    'start_date': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner_equity_type',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.owner, {
      foreignKey: 'email',
      targetKey: 'email',
      primaryKey: true,
      as: '_email',
    });
    Model.belongsTo(models.equity_type, {
      foreignKey: 'equity_type',
      targetKey: 'equity_type',
      primaryKey: true,
      as: '_equity_type',
    });
  };

  return Model;
};
