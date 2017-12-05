const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const index = require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.listen(PORT);