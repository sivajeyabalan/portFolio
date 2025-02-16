const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('User route works!');
});

module.exports = router;  // Ensure this is exporting the router
