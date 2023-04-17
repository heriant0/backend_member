const { DataTypes } = require('sequelize');
const sequelize  = require('../config/database')
const User = require('./userModel')

const UserAward = sequelize.define('users_award', {
  // Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: 'user_id'
	},
	awardName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'award_name'
	},
	awardPoin: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: 'award_poin'
	},
	awardType: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'award_type'
	},
}, {
  // Other model options go here
	sequelize, 
    createdAt: false,
    updatedAt: false
});

User.hasMany(UserAward);
UserAward.belongsTo(User);

sequelize.sync({ force: false }).then(() => {
  console.log(`Tables Users created!`);
});

module.exports = UserAward
