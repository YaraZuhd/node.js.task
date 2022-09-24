const express = require('express');
const books = require("./data.js");



const getOneBook = (req, res, next) => {
    let bookID = books.books.filter(function (e) {
        return e.id == req.params.bookId;
    });
    if(bookID.length == 0){
        res.status(404).json({message: `Book not found`});
    }else{
        res.json({message: `The Book with id ${req.params.bookId} Found`, book: bookID}); 
    }
};

const gettAllBooks = (req,res,next)=> {
   if(books.books.length == 0){
      res.status(404).json({message: `The Book List Is Empty`});
   }else{
    res.json({message : `Here Is All The Books We Have`, books: books.books});
   }
};

const addNewBook = (req,res,next)=> {
    console.log(req.body);
    if(Object.keys(req.body).length === 0){
        res.status(404).json({message: `Please enter the book information to added to the list`});
    }else{
        const newbook = {
            title : req.body.title,
            id : books.books.length +1,
            author : req.body.author
        };
        books.books.push(newbook);
        res.json({message: `The book has been successfully added`, book : newbook});
    }
};

const removeAllBooks = (req,res,next) =>{
    if(books.books.length == 0){
        res.status(404).json({message: `The Book List Is Empty`});
     }else{
        books.books.length = 0;
       res.json({message : `All books have been deleted`, books : books.books});
      }
};

const removeBook = (req,res,next) => {
    console.log(req.params.bookId);
    let bookID = books.books.filter(function (e) {
        return e.id == req.params.bookId;
    });
    if(bookID.length == 0){
        res.status(404).json({message: `Book not found`});
    }else{
        books.books = books.books.filter(function (e) {
            return e.id != req.params.bookId;
        });
        res.json({message: `The Book with id ${req.params.bookId} have been successfully deleted `, book: bookID}); 
    }
};

const updateBook = (req,res,next) => {
    let bookID = books.books.filter(function (e) {
        return e.id == req.params.bookId;
    });
    if(bookID.length == 0){
        // const newBook = {
        //     title : "",
        //     id: req.params.bookId,
        //     author : ""
        // };
        // books.books.push(newBook);
        res.status(404).json({message: `Book not found`});
    }else{
        books.books = books.books.filter(function (e) {
            if(e.id == req.params.bookId){
                 e.title = req.body.title;
                 e.author = req.body.author;
                 return;
            }
        });
        res.json({message: `The Book with id ${req.params.bookId} have been successfully Updated `, book: bookID}); 
    }
};

module.exports = {getOneBook, gettAllBooks, addNewBook, updateBook , removeBook, removeAllBooks};