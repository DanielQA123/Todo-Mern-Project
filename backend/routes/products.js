const router = require('express').Router();

//Requests (CRUD)
router.get("/getAll", (req,res, next)=>{
    res.send("Here's the information you wanted");
    // next();
});

// router.use((req, res, next) =>{
//     console.log("hello");
//     res.send("done");
// });

router.post("/create", (req,res,next) =>{
    const name = req.body.name;
    res.send(`Hello there ${name}`); 
}); 

//url parameters or path variables: 
router.delete("delete/:id", (req,res,next) =>{ 
    console.log(req.params.id);
    res.send("done");
});



module.exports = router;