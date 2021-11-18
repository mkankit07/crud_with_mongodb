
const mongodb = require('mongoose')
let counter =1
const UserSchema = new mongodb.Schema({
    id: {
        type: Number,
        unique: true,
        default: () => counter++
    },
    Name: { type: String },
    Email: { type: String },
    password: { type: String }
})

module.exports=mongodb.model("users",UserSchema)