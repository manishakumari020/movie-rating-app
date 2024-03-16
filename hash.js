const bcrypt = require("bcryptjs");

const password = "12456";
//const password2 = "12456";

const run = async () =>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.compare.hash(password, salt);
    console.log("Salt", salt);
    console.log('hasPassword', hashPassword);

    console.log(await bcrypt.compare(password, hashPassword));
}

run();