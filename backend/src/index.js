const express = require('express');
const cors = require('cors');
const { createTable } = require('./models/todoModel');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize database table
createTable();

// Routes
app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});