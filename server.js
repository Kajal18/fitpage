const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./src/middleware/logger.js')
const rateLimit = require('express-rate-limit');

const app = express();

const port = process.env.PORT || 3000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 1, 
  message: 'Too many requests from this IP, please try again later'
});
app.use(limiter);

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

const employeeRoutes = require('./src/routes/location.routes')

app.use('/api/v1', employeeRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ error: err.message , status: statusCode });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});