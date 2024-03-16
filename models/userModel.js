const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timeStamps: true,
    }
)

userSchema.methods.comparePassword = async function(candiatePassword){
    return await bcrypt.compare(candiatePassword, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User