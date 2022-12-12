const express = require("express");
const users = require("../userList")
const userRouter = express.Router();

//get user

userRouter.get("/", (req, res) => {
    const date = new Date();
    const hours = date.getHours();
    if(hours>8 && hours<17){
        res.render("opened")
    }
    else{
        res.render("closed")
    }
});
//post user
userRouter.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    res.send(`Welcome Back ! Make sure you're using the right email and password.
     "${email}:${password}"`)
})
//delete user

//update user

module.exports = userRouter;
