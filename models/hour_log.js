'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('hour_log', {
    'email': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'amount': {
      type: DataTypes.INTEGER,
    },
    'hour_reason': {
      type: DataTypes.STRING,
      primaryKey: true 
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
    
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.hour_reason, {
      foreignKey: 'hour_reason',
      targetKey: 'hour_reason',
      as: '_hour_reason',
    });
  };

  return Model;
};

