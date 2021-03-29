/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lap_configuration', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ceiling_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    penal_interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    processing_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'lap_configuration',
    timestamps: false
  });
};
