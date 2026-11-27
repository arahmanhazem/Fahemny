const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true},
    educator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    educationalCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EducationalCategory',
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course; //aashan estakhdemna commonjs fi el requirement of the model, fa lazm ne export el model 3ashan ne2dar ne use it  fi ay file tany