'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('current_owner_type', {
    'owner_id': {
      type: DataTypes.INTEGER,
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

