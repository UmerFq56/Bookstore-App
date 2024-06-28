const express = require('express')
const router = express.Router()
const Book = require('./schema');
const {createBook, getBooks, getSingleBook, deleteBook, updateBook} = require('./bookController')

router.get('/' , getBooks)    

router.get('/:id', getSingleBook)

router.post('/', createBook)

router.delete('/:id', deleteBook)

router.patch('/:id', updateBook)


module.exports = router;