const express = require("express");
const router = express.Router();
const {
  getTickets,
  createTicket,
  getUserTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

const protect = require("../middleware/authMiddleware");
const { update } = require("../models/user");

router.route("/").get(protect, getTickets).post(protect, createTicket);
router
  .route("/:id")
  .get(protect, getUserTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);
module.exports = router;
