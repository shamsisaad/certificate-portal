const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routes/student');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(error => {
  console.error('Database connection error:', error);
});
