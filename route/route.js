const express = require("express")
const taskone = require("../controller/controller")

const router = express.Router()

router.get("/", taskone)

module.exports = router