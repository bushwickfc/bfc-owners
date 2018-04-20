'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('household', {
    'household': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'owner_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    tableName: 'household',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

