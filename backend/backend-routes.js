const express = require('express')
const router = express.Router()

router.get('/' , (req, res) => {
        res.send('Get All Books')
    })    

router.get('/:id' , (req,res) => {
    res.json({mssg: 'GET a  book'})
})

router.post('/', (req,res) => {
    res.json({mssg: 'POST a  book'})
})

router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a  book'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a book'})
})


module.exports = router;