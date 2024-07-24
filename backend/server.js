const mongo = require('mongoose');
const express = require('express');
const Book = require('./schema');
const Routes = require('./backend-routes')

const app = express();

const dbUrl = 'mongodb+srv://UmerFarooqui:RealMadrid123Canon@cluster0.vbtnfad.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Cluster0';
mongo.connect(dbUrl)
    .then((result) => {
        console.log('connected to mongo')
        app.listen(4000, () => {
            console.log('Listening on Port 4000')
        });
    })
    .catch((err) => {
        console.log(err)
    });
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method)
    next()
})    

app.use('/api',Routes)
// const newBook = new Book({
    // title: 'Harry Potter and the Goblet of Fire',
    // author: 'JK Rowling',
    // rating: 9,
    // pages: 370,
    // genres: ['Fantasy'],
    // review : {
    //     name: 'Umer Farooqui',
    //     body: 'Very Good Book'
    // }

// })

// newBook.save()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => console.log(err)); 