const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  claimPoints,
  getLeaderboard
} = require('../controllers/userController');

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/', createUser);

// Claim random points
router.post('/claim/:id', claimPoints);

// Get leaderboard (sorted users by points)
router.get('/leaderboard', getLeaderboard);

module.exports = router;
