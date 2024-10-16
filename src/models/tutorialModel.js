import mongoose from 'mongoose'

// Define the schema for your tutorial data
const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: false
    }
});

// Create the model from the schema and export it
const Tutorial = mongoose.model('Tutorial', tutorialSchema);
export default Tutorial;
