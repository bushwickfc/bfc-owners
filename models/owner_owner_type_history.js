'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_owner_type_history', {
    'owner_id': {
      type: DataTypes.INTEGER,
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
    tableName: 'owner_owner_type_history',
    underscored: true,
    
    
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

