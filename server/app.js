const express = require('express')
const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const admin = require('firebase-admin')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const serviceAccount = require('./serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL
})

const { unknownEndpoint, errorHandler, checkAuth } = require('./util/middleware')

const app = express()
app.use(logger('dev'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.use(csrf({ cookie: true }))

app.all('*', (req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken())
  next()
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.get('/profile', checkAuth, (req, res) => {
  res.render('profile')
})

app.use('/auth', require('./routes/auth'))
app.use('/data', require('./routes/data'))

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app