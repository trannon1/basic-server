'use strict';

const express = require('express')
require('dotenv').config()
const app = express()
require('ejs')

const PORT = process.env.PORT;

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded ({ extended: true, }));
app.get('/', getHome);
app.get('/portfolio', getInterest);
app.get('/about', getAbout);
app.get('/contact', getContact);

function getHome(request, response){
    response.render('home');
  }

function getInterest(request, response){
    response.render('portfolio');
}

function getAbout(request, response){
    response.render('about');
}

function getContact(request, response){
    response.render('contact');
}

app.get('*', (request, response) =>{
    response.status(404).send("Page not found");
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})