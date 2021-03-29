/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_appraisal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    nature_profession: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    other_nature_profession: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cur_emp_period: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tot_emp_period: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    org_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org_pincode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    org_city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    org_state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    office_phone: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    office_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    financial_status: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    income_source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bank_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_acc_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    asset_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    loan_bank: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credit_bank: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'credit_appraisal',
    timestamps: false
  });
};
