const express = require("express")
const router = express.Router()
const {order} =require('../controllers/order')

router.get('/',order)
module.exports = router;
