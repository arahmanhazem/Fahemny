const mongoose = require('mongoose');

const educationalCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    type:{
        type: String,
        enum:['System', 'University', 'Faculty', 'Major', 'Year', 'Grade'],
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EducationalCategory',
        default: null
    }

}, { timestamps: true });

educationalCategorySchema.index(
    { name: 1, parentCategory: 1 },
    { unique: true }
);

const EducationalCategory = mongoose.model('EducationalCategory', educationalCategorySchema);
module.exports = EducationalCategory;