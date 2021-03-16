//!Import the needed router: 
const router = require('express').Router();
const { task } = require("../config/db");

//Request => C.R.U.D

//?Get All(Read All)
router.get("/getAll", (req, res, next) => {
    task.find((err, task) => {
        if (err) {
            next(err)
        } else {
            res.send(task)
        }
    })
});

//?Get one by id (Read by id)
router.get("/get/:id", (req, res, next) => {
    task.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
});

//?Create a task
router.post("/create", (req, res, next) => {
    const Goal = new task(req.body);
    Goal.save()
        .then((task) => {
            res.status(201).send(`${task.title} has been added successfully been added to the system!`)
        })
        .catch((err) => next(err));
});

//?Delete
router.delete("/delete/:id", (req, res, next) => {
    task.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.status(204).send('sucessfully deleted')
    })
});

//?Partial Update
router.patch("/update/:id", (req, res, next) => {
    task.findByIdAndUpdate(req.params.id, req.body,
        { new: true },
        (err, result) => {
            if (err) { next(err); }
            res.status(202).send('Succesfully Updated')
        })
});

//?Update/Replace => Replacing the whole document
router.put("/replace/:id", (req, res, next) => {
    const {
        title,
        startDate,
        notes,
        priority,
        dueDate,
        completed
    } = req.body;
    task.findByIdAndUpdate(req.params.id, {
        title,
        startDate,
        notes,
        priority,
        dueDate,
        completed
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router;


