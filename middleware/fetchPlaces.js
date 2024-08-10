// middleware/fetchPlaces.js
const Place = require('../models/place');

const fetchPlaces = async (req, res, next) => {
    try {
        const places = await Place.find().select('name description lat lng image ratings regions description');
        res.locals.places = places; // Attach to res.locals
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = fetchPlaces;
