const Router = require('express')
const router = new Router()
const exampleController = require('../controllers/exampleController')

router.post('/', exampleController.create)
router.post('./:id',exampleController.updateExample, exampleController.check)
router.get('/', exampleController.getAll)
router.get('/:id', exampleController.getId)

module.exports = router