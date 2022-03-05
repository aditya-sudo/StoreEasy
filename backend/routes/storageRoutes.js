const express = require("express")

const router = express.Router()

const {getAllStorage, createStorage } = require( '../controllers/storageController')
const { isAuthenticatedUser } = require("../middleware/auth")




router.route("/").get( getAllStorage)
router.route("/vendor").post(createStorage) 

module.exports = router