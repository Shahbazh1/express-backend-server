const express = require('express');
const sequelize = require('./db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => res.json({ message: 'Server is running' }));

// Mount student routes
app.use('/users', userRoutes); // ✅ correct usage

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ DB connection failed:', err));
