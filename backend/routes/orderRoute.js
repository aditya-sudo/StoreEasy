const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const router = express.Router()
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser,newOrder)

router.route("/order/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder)  // Not working

router.route("/orders/me").get(isAuthenticatedUser, myOrders)   // Not working

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders)  

router.route("/admin/orders/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)  //    not needed

router.route("/admin/orders/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)   //not neede


module.exports = router