const express = require('express')
const router = express.Router()
const Book = require('./schema');

router.get('/' , (req, res) => {
        res.send('Get All Books')
    })    

router.get('/:id' , (req,res) => {
    res.json({mssg: 'GET a  book'})
})

router.post('/', async (req,res) => {
    const {title, author, rating, pages, genres, review} = req.body

    try{ 
            const book = await Book.create({title, author, rating, pages, genres, review})
            res.status(200).json(book)

    } catch (error) {
        res.status(400).json({error: error.message })
    }
    
})

router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a  book'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a book'})
})


module.exports = router;