/*
File name: index.js
Student’s Name: Himali Kothari,
StudentID: 301210969
Web App name: COMP229-W2021-MidTerm-301210969
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

//getting db config
let DB = require('../config/db');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
