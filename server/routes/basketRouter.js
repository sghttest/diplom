const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/',authMiddleware, basketController.create)
router.delete('/', authMiddleware, basketController.remove)
router.get('/', basketController.getAll)




module.exports = router