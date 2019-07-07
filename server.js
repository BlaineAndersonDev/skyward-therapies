// =====================================
// Base Imports ========================
// =====================================
// Allows use of backend routing.
// https://expressjs.com/
const express = require('express');
// Path allows our Server to find build files stored in our frontend.
// https://nodejs.org/api/path.html
const path = require('path');
// Date & Time Parser / Manipulator / Validator.
// https://momentjs.com/
const moment = require('moment');
// Helmet helps you secure your Express apps by setting various HTTP headers.
// https://helmetjs.github.io/
const helmet = require('helmet')
// HTTP request logger
// https://github.com/expressjs/morgan
const morgan = require('morgan')
// Makes the Express API accessible for any outside requests. ()
// https://stackoverflow.com/questions/52665604/when-to-use-proxy-and-when-to-use-cors-in-a-react-project
// https://github.com/expressjs/cors
const cors = require('cors');

// =====================================
// Initial Setup =======================
// =====================================
// Initialize the 'app' using 'express'.
const app = express();
// Use the provided PORT if it exists else default to PORT 3001.
const port = process.env.PORT || 3001;
// Increase App API security by setting Headers using Helemt.
app.use(helmet())
// Allows the app to parse 'application/json' request bodies.
app.use(express.json());
// Allows the app to parse 'x-ww-form-urlencoded' request bodies.
app.use(express.urlencoded({ extended: false }));
// Logs all HTTP actions to the console
app.use(morgan(':method :url {HTTP Status: :status} {Content Length: :res[content-length]} {Response Time: :response-time ms}'))

// =====================================
// Database Setup ======================
// =====================================
// Activates our database detection and creation in db.js.
// const knex = require('./db/knex.js');

// =====================================
// Routes & Builds =====================
// =====================================
// Tells the app to use files in the Client's 'build' folder when rendering static pages (production pages).
app.use(express.static(path.join(__dirname, 'client/build')));
// This is a catchall route to prevent the user from dealing with errors from visiting routes that do not exist. It sends a 404 (Not Found) Status as well as a message.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// =====================================
// Final Steps =========================
// =====================================
// Tells the app what port to listen on. Upon listening it will display a console log. Upon close it will close and exit the server process.
app.listen(port, () => console.log('Listening on port ' + port));
process.on('SIGINT', () => {
    server.close();
    process.exit();
  });

// Exports the `Express App` to be used elsewhere in the project.
module.exports = app;
