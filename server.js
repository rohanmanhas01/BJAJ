require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Run server ONLY in local environment
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
