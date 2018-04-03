const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
// Load Home Page
app.get('/', (req, res) => {
    res.render('home.hbs');
});
// Load About page
app.get('/about', (req, res) => {
    res.render('about.hbs');
});
// Load Portfolio page
app.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs');
});
// Load Resume page
app.get('/resume', (req, res) => {
    res.render('resume.hbs');
});
// Load Contact Page
app.get('/contact', (req, res) => {
    res.render('contact.hbs');
});
const port = 1987;
app.listen(port, () => {
    console.log(`Personal Web Server is up on port ${port}`);
});