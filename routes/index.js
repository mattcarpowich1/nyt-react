const express = require('express');
const path = require('path');
const router = express.Router();
const apiRoutes = require('./api.js');

router.use('/api', apiRoutes);

router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/src/public/index.html"));
});

module.exports = router;