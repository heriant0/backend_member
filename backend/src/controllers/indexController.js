const User = require('../models/userModel')
const UserAward = require('../models/userAwardModel')

class UserController {
  static async getUser(req, res) {
		try {
			const email = req.body.email;
			const result = await User.findOne({
				where: {
					userEmail: email
				}
			})
			if (result) {
				return res.status(200).json({
					message: 'Get data succesfully',
					data: result
				}) 
			} else {
				return res.status(200).json({
					message: 'Email Address is not exists',
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async getAward(req, res) {
		try {
			console.log('lewat sini lah')
			const userId = req.params.userId
			const result = await UserAward.findAll({
				where: { 
					userId : userId }
			})
			if (result) {
				return res.status(200).json({
					message: 'Get data succesfully',
					data: result
				}) 
			} else {
				return res.status(200).json({
					message: 'Data does not exists',
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

}

module.exports = UserController