'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('schema_version', {
    'installed_rank': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'version': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.STRING,
    },
    'script': {
      type: DataTypes.STRING,
    },
    'checksum': {
      type: DataTypes.INTEGER,
    },
    'installed_by': {
      type: DataTypes.STRING,
    },
    'installed_on': {
      type: DataTypes.DATE,
    },
    'execution_time': {
      type: DataTypes.INTEGER,
    },
    'success': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'schema_version',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

