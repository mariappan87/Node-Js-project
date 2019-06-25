const mongoose = require('mongoose');
const URL = require('../config/config.json').connectionString;

mongoose.connect(process.env.MONGODB_URI || URL, { useCreateIndex: true, useNewUrlParser: true });
