/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gl_schemes', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    gl_inventory_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    start_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    end_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    interest_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'gl_schemes',
    timestamps: false
  });
};
