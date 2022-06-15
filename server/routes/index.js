const Router = require('express')
const router = new Router()
const exampleRouter = require('./exampleRouter')

router.use('/examples', exampleRouter)

module.exports = router