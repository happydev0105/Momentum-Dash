const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const visionItemsRoute = require('./visionItems');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/visionboard', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/vision-items', visionItemsRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
