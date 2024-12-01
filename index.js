const express = require('express');
const cartRoutes = require('./routes/cartRoutes');
const AuthMiddleware = require('./middlewares/authMiddlewares')

const app = express();
app.use(express.json());
app.use(AuthMiddleware)

// Product routes 
app.use('/api/cart', cartRoutes);

// Catch undefined routes
app.use((req, res) => {
    res.status(404).json({
      error: 'Route not found',
    });
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;