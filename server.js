const express = require('express'); 
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const user = require('./routes/user')
const employee = require('./routes/employee')
const news = require('./routes/news')


app.use(cors())

app.use('/upload', express.static('upload'))
app.use('/auth', user)
app.use('/emp', employee)
app.use('/news', news)





const db = "mongodb+srv://migara:game1994@unilog.z3swk.mongodb.net/derana?retryWrites=true&w=majority";
mongoose.connect(db, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connect mongodb')
    }
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, () => {
    console.log('server running on: ' + port)
})