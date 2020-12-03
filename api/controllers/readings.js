const express = require('express');
const router = express.Router();
const Reading = require("../models/reading");

//Index route
router.get('/', (req, res) => {
    Reading.find({}, (error, allReadings) => {
        error ? res.status(404).json(error) : res.status(200).json(allReadings); 
    });
});

//New

//Delete All
router.delete('/delete', (req, res)=>{
    Reading.deleteMany({}, (error, allReadings) => {
        error ? res.status(404).json(error) : res.status(200).json(allReadings)
    })
})

// Delete
router.delete('/:id', (req, res) => {
    Reading.findByIdAndDelete(req.params.id, (error, Reading) => {
        error ? res.status(404).json(error) : res.status(200).json(Reading);
    });
});


// Update
router.put('/:id', (req, res) => {
    Reading.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedReading) => {
        error ? res.status(404).json(error) : res.status(200).json(updatedReading);
     } 
   );
});


//Create
router.post("/", (req,res)=>{
    // let newData = {
    //     culture = req.body.records.culture,
    //     title = req.body.records.title 
    // }
    console.log(req.body);
    Reading.create(req.body, (error, createdReading)=>{
        error ? res.status(404).json(error) : 
        res.status(200).json(createdReading)
    })
})

// Edit

// Show
router.get('/:id', (req, res) => {
    Reading.findById(req.params.id, (error, foundReading) => {
        error ? res.status(404).json(error) : res.status(200).json(foundReading); 
    });
});

module.exports = router;