'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('current_owner_type', {
    'owner_id': {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    'owner_type': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'current_owner_type',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

