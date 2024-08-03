 const {Book} = require('./schema')
 const mongoose = require('mongoose')


 //get all books

 const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({createdAt: -1})
    res.status(200).json(books)
 }


 //get a single book

 const getSingleBook = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book found'})
    }

    const singleBook = await Book.findById(id)

    if (!singleBook) {
        res.status(404).json({error: 'No such book found'})
    }
    res.status(200).json(singleBook)
 }


 // create a new Book
 const createBook = async (req, res) => {
    const {title, author, rating, pages, genres, review} = req.body

    try{ 
            const book = await Book.create({title, author, rating, pages, genres, review})
            res.status(200).json(book)

    } catch (error) {
        res.status(400).json({error: 'no' })
    }
 }

 const deleteBook = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book found to be deleted'})
    }

    const singleBook = await Book.findOneAndDelete({_id: id})

    if (!singleBook) {
        res.status(404).json({error: 'No such book found'})
    }
    res.status(200).json(singleBook)

 }

 // update a book

 const updateBook = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book found'})
    }

    const singleBook = await Book.findByIdAndUpdate({_id:id}, {...req.body})

    if (!singleBook) {
        res.status(404).json({error: 'No such book found'})
    }
    res.status(200).json(singleBook)
 }





 module.exports = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook
 }