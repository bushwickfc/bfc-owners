'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner', {
    'owner_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
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
    },
    'first_name': {
      type: DataTypes.STRING,
    },
    'last_name': {
      type: DataTypes.STRING,
    },
    'display_name': {
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
    'country': {
      type: DataTypes.STRING,
    },
    'zipcode': {
      type: DataTypes.STRING,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'owner',
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

