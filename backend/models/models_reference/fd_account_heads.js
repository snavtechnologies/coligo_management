/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fd_account_heads', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    head: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'fd_account_heads',
    timestamps: false
  });
};
