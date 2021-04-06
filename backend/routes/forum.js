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

