const express = require('express')
const router = express.Router()
const Book = require('./schema');
const {createBook, getBooks, getSingleBook, deleteBook, updateBook} = require('./bookController')
const {createUser, checkUsername, checkPassword} = require('./userController')

router.get('/' , getBooks)


router.post('/userSignUp', createUser)

router.post('/userLogin', checkPassword)


router.post('/user_exists', checkUsername)

router.get('/:id', getSingleBook)

router.post('/', createBook)

router.delete('/:id', deleteBook)

router.patch('/:id', updateBook)


module.exports = router;