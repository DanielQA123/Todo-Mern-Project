const router = require('express').Router();
const {Product} = require("../config/db");

let products = ["deodrant", "apples", "cheese","pineapple"];

//Requests (CRUD)
router.get("/getAll", (req,res, next)=>{
    Product.find((err, products) => {
        if(err){
            console.log(err)
        }
        res.send(products);
    })

    // res.send("Here's the information you wanted");
    // next();
});

// router.use((req, res, next) =>{
//     console.log("hello");
//     res.send("done");
// });

router.post("/create", (req,res,next) =>{
    const name = req.body.name;
    products.push(name);
    res.send(`Hello there ${name} added to the product list`); 
}); 

//url parameters or path variables: 
router.delete("delete/:id", (req,res,next) =>{ 
    console.log(req.params.id);
    res.send("done");
});

//Query Parameters: 
router.patch("/update/:id", (req,res,next) => {
    const id = req.params.id;
    console.log(`id: ${id}`);
    // const name = req.query.name;
    // const age = req.query.age;

    //destructuring??
    const {name, age} = req.query;
    console.log(` name: ${name}, age: ${age}`);
    res.send(`Thanks for your information have a nice day, byeee!!`);


})

module.exports = router;