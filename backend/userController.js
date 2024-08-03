const {User} = require('./schema')
const mongo = require('mongoose')


const createUser = async (req,res) => {

    const {fullName, username, password} = req.body

    

    try {   

        const existingUser =  await User.findOne({username})
        if (existingUser) {
            return res.status(400).json({ message: 'Username  taken' }); }

        const user = await User.create({fullName, username, password})
        res.status(200).json(user)
        
    } catch (error) {

        res.status(400).json({error: error.message })
        
    }


}

const checkUsername = async (req,res) => {
    const {username} = req.body

    try {

        const existingUser =  await User.findOne({username})


        if (existingUser) {
            return res.json({exists: true})
        } else {
            return res.json({exists: false})
        }
        
    } catch (error) {
        res.status(500).json({error: 'Server Error' })
        
    }
}

const checkPassword = async (req,res) => {
    const {username, password} = req.body

    try {

        const user = await User.findOne({username})

        if (!user) {
            return res.json({ correctUser: false });
        }

        if (user.password == password) {
            return res.json({correctUser: true})
        }else {
            return res.json({correctUser: false})
        }

        
    } catch (error) {
        res.status(500).json({error: 'Server Error' })
    }
}



const getUser = async (req,res) => {

    const {id} = req.params

    if (!mongo.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user found'})
    }

    const user = await User.findById(id)

    if (!user) {
        res.status(404).json({error: 'No such user found'})
    }
    res.status(200).json(user)

}



module.exports = {
    createUser,
    getUser,
    checkUsername,
    checkPassword
}