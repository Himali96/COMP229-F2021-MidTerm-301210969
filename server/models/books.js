/*
File name: book.js
Student’s Name: Himali Kothari,
StudentID: 301210969
Web App name: COMP229-W2021-MidTerm-301210969
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
