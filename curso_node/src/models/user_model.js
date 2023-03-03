const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        minlength:7,
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;