'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_owner_type', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true
    },
    'start_date': {
      type: DataTypes.DATE,
      primaryKey: true
    },
    'end_date': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner_owner_type',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.owner_type, {
      foreignKey: 'owner_type',
      targetKey: 'owner_type',
      as: '_owner_type',
    });
  };

  return Model;
};
