/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gl_account_heads', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    heads: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'gl_account_heads',
    timestamps: false
  });
};
