const express = require("express")
const router = express.Router()
const {auth, payment} =require('../controllers/payment')

router.get('/',payment)
module.exports = router;
