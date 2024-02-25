const express = require("express");

const router = express.Router();

// controllers
const {
  sendTestEmail,
  createOrder,
  handlePayment,
} = require("../controllers/auth");

router.get("/send-email", sendTestEmail);
router.post("/create-order", createOrder);
router.post("/handle-payment", handlePayment);

module.exports = router;
