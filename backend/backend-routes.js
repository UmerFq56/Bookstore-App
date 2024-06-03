const mongo = require('mongoose');
const express = require('express');

const app = express();




const dbUrl = 'mongodb+srv://UmerFarooqui:RealMadrid14@cluster0.vbtnfad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongo.connect(dbUrl)
    .then((result) => {
        console.log('connected to mongo')
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err)
    });