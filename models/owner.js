'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner', {
    'old_member_id': {
      type: DataTypes.INTEGER,
    },
    'pos_id': {
      type: DataTypes.STRING,
    },
    'seven_shifts_id': {
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
    'join_date': {
      type: DataTypes.DATE,
    },
    'phone': {
      type: DataTypes.STRING,
    },
    'address': {
      type: DataTypes.STRING,
    },
    'city': {
      type: DataTypes.STRING,
    },
    'state': {
      type: DataTypes.STRING,
    },
    'zipcode': {
      type: DataTypes.STRING,
    },
    'payment_plan_delinquent': {
      type: DataTypes.BOOLEAN,
    },
    'created_at': {
      type: DataTypes.DATEONLY,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner',
    underscored: true,

    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.hasOne(models.owner_equity_type, {
      foreignKey: 'email',
      targetKey: 'email',
    });
  };

  return Model;
};
