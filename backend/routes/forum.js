'use strict';

const router = require('express').Router();
const profanity = require('profanity-middleware');
const {forum } = require("../config/db");

profanity.setOptions({
    mask:'',
    fullyMasked: true,
    blacklist: ['foul','slang']
});

//! API request => C.R.U.D

//?GET REQUEST:
router.get("/getAll", (req, res, next) =>{
    forum.find((err, forum) =>{
        if(err) {next(err) } else{ res.send(forum)}
    });
});

router.get("/get/:id", (req, res, next) =>{
    forum.findById(req.params.id, (err, result) =>{
        if(err){
            next(err);
        }
        res.status(200).send(result);
    });
});


//?POST REQUEST:
router.post("/create", profanity.init, (req, res, next) =>{
    const Message = new forum(req.body);
    Message,save().then((forum) =>{
        res.status(201).send(`${forum.username} this post has been successfully added!`)
    })
    .catch((err) => next(err));
});


//?DELETE REQUEST:
router.delete("/delete/:id", (req, res, next) =>{
    
})


//?PATCH REQUEST:
//?PUT REQUEST:

