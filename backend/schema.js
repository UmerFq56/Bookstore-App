const mongo = require('mongoose');

const Schema = mongo.Schema();

const bS_reviews = new Schema({
    name : {type: String, required: true},
    body : {type: String, required: true}

});

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    rating: {type: String, required: true},
    pages: {type: String, required: true},
    genres: [{type: String, required: true}],
    review: bS_reviews
}, {timestamps: true});