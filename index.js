require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const path = require('path');

const app = express();

// Set up views and static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set port
const port = process.env.PORT || 3000;

// Get MongoDB URI
const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("Error: MONGODB_URI is not defined. Please set it in the .env file or as an environment variable.");
    process.exit(1); // Exit the application if the URI is not defined
}

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
        console.error("Caught error connecting MongoDB:", err);
    });

// Set up routes
app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
