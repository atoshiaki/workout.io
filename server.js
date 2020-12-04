const mongoose = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// connection to the database
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/.workouts',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.use(require())