//imports
const express = require('express')
const app = express()
const mysql = require('mysql');
const fs = require('fs');
const port = 8080

app.set('view engine', 'ejs')

//load folders
app.use(express.static("public/stylesheets"));
app.use(express.static("public/images"));
app.use(express.static("public/scripts"));

//===================================================
//RENDER PAGES--------------------
app.get('/', (req, res) => {
    res.render('pages/index')})
    
//world pages----
app.get('/calendar', (req, res) => {
  res.render('pages/World/calendar')})

app.get('/city-map', (req, res) => {
  res.render('pages/World/map')})

app.get('/citizens', (req, res) => {
  res.render('pages/World/people')})

app.get('/the-team', (req, res) => {
  res.render('pages/World/team')})

//ooc pages-----
app.get('/safety-policies', (req, res) => {
  res.render('pages/OOC/consent')})

app.get('/rules-moves', (req, res) => {
  res.render('pages/OOC/rules-moves')})

app.get('/rules-labels', (req, res) => {
  res.render('pages/OOC/rules-labels')})

app.get('/rules-playbook', (req, res) => {
  res.render('pages/OOC/rules-playbook')})

  app.get('/about-us', (req, res) => {
  res.render('pages/OOC/about')})

//Admin page-----
app.get('/admin', (req, res) => {
  res.render('pages/admin')})
//===================================================
//database
const data_con = new mysql.createConnection({
  host: 'mopp.mysql.database.azure.com',
  user: 'mopp_admin',
  password: 'mo@Tunnel4',
  database: 'MOPP',
  port: 3306,
  ssl: {ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
});

data_con.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
        console.log("Database connection established.");
    }
});

//===================================================
//listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))

