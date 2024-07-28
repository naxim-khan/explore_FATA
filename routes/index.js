const express = require("express");
const router = express.Router();
const Place = require('../models/place');
const multer = require("multer");
const path = require('path');
// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, 'public')));


router.get('/', async(req, res) => {
    const places = await Place.find().select('name description image ratings regions description');
    res.render("home",{places});
});

router.get('/about',(req, res)=>{
    res.render("about");
})

router.get('/tours',async(req, res)=>{
    const places = await Place.find().select('name description image ratings regions description');
    res.render("tours",{places});
})

router.get('/destination',async(req, res)=>{
    const places = await Place.find().select('name description image ratings regions description');
    res.render("destination",{places});
})

router.get('/gallery', async(req, res)=>{
    const places = await Place.find().select('name description image ratings regions description');
    res.render("gallery",{places});
})

// Your routes here
router.get('/district/:districtName?', async (req, res) => {
    const districtName = req.params.districtName || req.query.district;

    if (!districtName) {
        return res.status(400).send('District name is required');
    }

    try {
        const place = await Place.findOne({ name: districtName }).select('name description regions image lat lng');

        if (!place) {
            return res.status(404).send('District not found');
        }

        res.render('district', { place });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
// Handle dynamic region requests
router.get('/region/:regionName', async (req, res) => {
    try {
        const regionName = req.params.regionName;
        const place = await Place.findOne({ "regions.name": regionName }, { "regions.$": 1 });
        
        if (!place) {
            return res.status(404).send('Region not found');
        }

        const region = place.regions[0];
        res.render('region', { region });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});



// Render the upload form
router.get("/upload", (req, res) => {
    res.render("upload");
});

// Handle form submission
router.post("/upload", upload.none(), async (req, res) => {
    try {
        const { name, description, ratings, image, lat, lng, regions } = req.body;

        // Check if the place already exists
        const existingPlace = await Place.findOne({ name });

        if (existingPlace) {
            // Send a response message to the user
            res.send("District already exists. Redirecting back to upload page...");
        }

        // Ensure regions is defined and structured properly
        const regionsData = [];
        if (regions && Array.isArray(regions.name)) {
            for (let i = 0; i < regions.name.length; i++) {
                regionsData.push({
                    name: regions.name[i],
                    description: regions.description[i],
                    image: regions.image[i],
                    review: regions.review ? regions.review[i] : '',
                    ratings: regions.ratings[i],
                    lat: regions.lat ? parseFloat(regions.lat[i]) : 0,
                    lng: regions.lng ? parseFloat(regions.lng[i]) : 0
                });
            }
        } else if (regions && typeof regions.name === 'string') {
            regionsData.push({
                name: regions.name,
                description: regions.description,
                image: regions.image,
                review: regions.review || '',
                ratings: regions.ratings,
                lat: parseFloat(regions.lat) || 0,
                lng: parseFloat(regions.lng) || 0 
            });
        }

        // Create and save the new place
        const newPlace = new Place({
            name,
            description,
            ratings,
            image,
            lat: parseFloat(lat) || 0,
            lng: parseFloat(lng) || 0,
            regions: regionsData
        });

        await newPlace.save();
        res.send("Data uploaded and saved successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
        
    }
});


module.exports = router;
