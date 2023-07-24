const router = require('express').Router();


//service router

const serviceRouter = require('./services')

router.use('/', serviceRouter)

//party router

const partyRouter = require('./parties')

router.use('/', partyRouter)

module.exports = router;