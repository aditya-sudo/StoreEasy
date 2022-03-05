const express = require("express");
const router = express.Router()
const {registerUser, loginUser, logout, 
    forgotPassword, resetPassword, getUserDetails, 
    updatePassword, getAllUser, getSingleUser, updateUserRole, deleteUser} = require("../controllers/userController");
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth")


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/password/forgot").post(forgotPassword)

router.route("/password/reset/:token").put(resetPassword) ///Put request not working

router.route("/logout").get(logout)

router.route("/me").get(isAuthenticatedUser, getUserDetails)

router.route("/password/update").put(isAuthenticatedUser, updatePassword)

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)

router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser) //not working at get request

router.route("/admin/user/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole) //not working

router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser) //not working

module.exports = router
