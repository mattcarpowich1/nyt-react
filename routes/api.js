const express = require('express');
const router = express.Router();
const { findAll, create, remove } = require('../controllers/articlesController.js');

router.get('/saved', (req, res) => {
  findAll(req, res);
});

router.post('/saved', (req, res) => {
  create(req, res);
});

router.delete('/saved:id', (req, res) => {
  remove(req.params.id, req, res);
})

module.exports = router;