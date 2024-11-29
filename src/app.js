// app.js
require('dotenv').config();

const express = require('express');

const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

// Sync database and start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  }
);
