const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    description: String
});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;
