const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/mochachailatte');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/hello', function (req, res) {
  res.json({"hello": "world"})
})

module.exports = router;
