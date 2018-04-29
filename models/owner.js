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
  };

  return Model;
};

