const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bS_reviews = new Schema({
    name : {type: String, required: true},
    body : {type: String, required: true}

});

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    rating: {type: Number, required: true},
    pages: {type: Number, required: true},
    genres: [{type: String, required: true}],
    review: bS_reviews
}, {timestamps: true});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;