router = require('express').Router();
const controllers = require('../controllers/indexController')


router.post('/', controllers.getUser)
router.get('/award/:userId', controllers.getAward)

module.exports = router