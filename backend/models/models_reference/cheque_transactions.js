/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque_transactions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    holder_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    cus_id: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    debit_branch: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    credit_branch: {
      type: DataTypes.INTEGER(50),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'cheque_transactions',
    timestamps: false
  });
};
