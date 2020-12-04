const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/hw17',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.use(require('./routes/api.js'));
app.get('/', function(req, res){
    res.json(__dirname + '/public/index.html');
});
app.get('/exercise', function(req,res){
    res.sendFile(__dirname + '/public/exercise.html');
});
app.get('/stats', function(req,res){
    res.sendFile(__dirname + '/public/stats.html');
});