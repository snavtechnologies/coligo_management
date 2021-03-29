/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cus_documents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    folder: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'cus_documents',
    timestamps: false
  });
};
