const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth =require('../middleware/auth')


router.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (e) {
        res.status(401).send(e);
    }
});

router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.send({user, token});
    }catch(e){
        res.status(500).send();
    }
});

router.post('/users/logout', auth, async (req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send();
    }
})

router.post('/users/logoutall', auth, async(req,res) => {
    
    try{
        req.user.tokens = [];
        await req.user.save();
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.get("/users/me", auth , async (req, res) => {
    res.send(req.user)
});

router.patch("/users/me", auth, async (req, res) => {
    const _id = req.user._id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "age", "email", "password"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "invalid update!" });
    }

    try {
        const user = await User.findById(_id);

        updates.forEach( (update) => {
            user[update] = req.body[update]
        })

        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/users/me', async (req, res) => {
    const _id = req.user._id;

    try{
        const user = await User.findByIdAndDelete(_id);

        if(!user){
            return res.status(400).send();
        }
        res.send(user);
    }catch(e){
        res.status(500).send();
    }
})



module.exports = router;