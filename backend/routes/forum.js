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
    forum.findByIdAndDelete(req.params.id, (err) =>{
        if(err){
            next(err);
        }res.status(204).send('Your request has been successfully deleted');
    })
});


//?PATCH REQUEST (PARTIAL UPDATE):
router.patch("/update/:id", (req, res, next) =>{
    forum.findByIdAndUpdate(req.params.id, req.body,
        {new: true},
        (err, result) =>{
            if(err){ next(err); }
            res.status(202).send('Successfully Updated')
        })
});


//?PUT REQUEST (FULLY UPDATING = REPLACING):
router.put("/replace/:id", (req, res, next) =>{
    const {
        username,
        TodoReviewTitle,
        comment,
        postDate
    } = req.body;
    forum.findByIdAndUpdate(req.params.id, {
        username,
        TodoReviewTitle,
        comment,
        postDate
    }, {new:true}, (err, result) =>{
        if(err){
            next(err);
        }
        res.status(202).send('Sucessfully replaced and updated');
    });
});

module.exports = router;
