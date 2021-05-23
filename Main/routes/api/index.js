const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/employees', employeeRoutes);

module.exports = router;