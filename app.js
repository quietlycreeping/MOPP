//imports
const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

//===================================================
//RENDER PAGES--------------------
app.get('/', (req, res) => {
    res.render('pages/index')
})
//world pages
app.get('/calendar', (req, res) => {
  res.render('pages/World/calendar')
})
app.get('/city-map', (req, res) => {
  res.render('pages/World/map')
})
app.get('/citizens', (req, res) => {
  res.render('pages/World/people')
})
app.get('/the-team', (req, res) => {
  res.render('pages/World/team')
})
//ooc pages
app.get('/safety-policies', (req, res) => {
  res.render('pages/OOC/consent')
})
app.get('/ruleset', (req, res) => {
  res.render('pages/OOC/rules')
})
//===================================================

//listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))