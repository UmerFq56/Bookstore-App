const mongo = require('mongoose');
const express = require('express');
const Book = require('./schema')

const app = express();

app.get('/home',(req,res) => {
    res.send("Dev Start")
})

app.get('/find')

app.get('/update-record')



const dbUrl = 'mongodb+srv://UmerFarooqui:RealMadrid14@cluster0.vbtnfad.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Cluster0';
mongo.connect(dbUrl)
    .then((result) => {
        console.log('connected to mongo')
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err)
    });

// const newBook = new Book({
//     title: 'Harry Potter and the Goblet of Fire',
//     author: 'JK Rowling',
//     rating: 9,
//     pages: 370,
//     genres: ['Fantasy'],
//     review : {
//         name: 'Umer Farooqui',
//         body: 'Very Good Book'
//     }

// })

// newBook.save()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => console.log(err));