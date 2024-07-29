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
    genres: {type: Array, required: true},
    review: bS_reviews
}, {timestamps: true});

const userSchema = new Schema({
    fullName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    repeatPassword: {type: String, required: true}
})

const Book = mongoose.model('book', bookSchema);
const User = mongoose.model('user', userSchema);


module.exports = {
    Book,User
}
