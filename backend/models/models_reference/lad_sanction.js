/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lad_sanction', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loan_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.INTEGER(55),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'lad_sanction',
    timestamps: false
  });
};
