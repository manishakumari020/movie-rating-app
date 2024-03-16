const authService = require("../services/userService");

const register = async(req, res) => {
    console.log("Inside Register")
    try{
        const userData = req.body;
        const user = await authService.registrationUser(userData);
        res.status(201).json({
            message: "User registered Succsessfully",
            userId: user,
        })
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) =>{
    try{
        const userData = req.body;
        const { token, userId } = await authService.loginUser(userData);
        res.status(200).json({
            message: "User logged in successfully",
            token,
            userId,
        })
    }
    catch(error){
        res.status(500).json({ message: error.message});
    }
}

const getData = async (req, res) => {
    res.send("You just accessed endpoint")
}


module.exports = { register, login, getData };
