/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arrear_list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cus_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    terms: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    due_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    loan_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    loan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    loan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    response: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'arrear_list',
    timestamps: false
  });
};
