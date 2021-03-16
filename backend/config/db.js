'use strict';

//Connecting to the database
const mongoose = require('mongoose'); 
const {Schema, model} = mongoose;
const {DB_URL, DB_NAME } = require('../config/CONSTS.json');

const TaskSchema = new Schema({
    title:String,
    startDate: Date,
    notes: String,
    priority: String,
    dueDate: Date,
    completed: Boolean
});

const task = model('task', TaskSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if (err){
        console.error(err);
    }else {
        console.log(`Connected`);
    }
});

module.exports = {"task":task};
