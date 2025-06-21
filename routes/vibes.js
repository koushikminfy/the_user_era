const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { postVibe, getVibes } = require('../controllers/vibeController');

router.post('/', protect, postVibe);
router.get('/', getVibes);

module.exports = router;
