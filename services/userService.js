const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registrationUser = async (userData) => {
    try{
        const existingUser = await User.findOne({ email: userData.email });
        if(existingUser){
            throw new Error("User already exists.");
        }
        const user = new User(userData);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(userData.password, salt);
        user.password = hashPassword;
        await user.save();
        return user;
    }
    catch(error){
        throw error;
    }
}

const loginUser = async (userData) => {
    //console.log("Inside Login user")
    try{
        const { email, password } = userData;
        const user = await User.findOne({ email });
       // console.log(user);
        if(!user){
            throw new Error("User is not found");
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            throw new Error("Invalid Credentials");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return { token, user };
    }
    catch(error){
        throw error;
    }
}

module.exports = { registrationUser, loginUser };