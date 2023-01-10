const express = require("express")
const router = express.Router()
const {product} =require('../controllers/product')

router.get('/',product)
module.exports = router;
