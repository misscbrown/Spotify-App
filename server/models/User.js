const {model, Schema} = require("mongoose");

// @changes needed
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});


const User = model('User', userSchema);

module.exports = User;