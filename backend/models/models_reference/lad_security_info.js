/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lad_security_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fd_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fd_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'lad_security_info',
    timestamps: false
  });
};
