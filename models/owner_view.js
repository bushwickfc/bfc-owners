'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owner_view', {
    'pos_id': {
      type: DataTypes.STRING,
    },
    'owner_type': {
      type: DataTypes.STRING,
    },
    'owner_type_name': {
      type: DataTypes.STRING,
    },
    'status': {
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
    'concat(o.display_name, s.pos_display, pp.pos_display)': {
      type: DataTypes.STRING,
    },
    'hour_balance': {
      type: DataTypes.DOUBLE,
    },
    'owner_price': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'owner_view',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

