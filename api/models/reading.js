const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const readingSchema = new Schema(
    {
        name: String,
        sanitizedDeck: Array
    },
    {timestamps: true}
);

const Reading = mongoose.model("Reading", readingSchema)

module.exports = Reading;