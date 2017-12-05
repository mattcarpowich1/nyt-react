const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const stuff = {
		Hello: 'World'
	}
	res.json(stuff);
});

module.exports = router;