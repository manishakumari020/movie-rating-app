const jwt = require("jsonwebtoken");


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
   // console.log("1", token)

    if(token == null){
        return res.sendStatus(401);
    }
    //console.log(token);

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) =>{
        if(err){
            //console.log(err);
            return res.sendStatus(403)
        }

        req.user = user;
        //console.log("User in middleware", user);
        next();
    })
}

module.exports = authenticateToken;