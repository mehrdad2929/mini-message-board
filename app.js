const express = require('express')
const compression = require('compression');
const path = require('path');
const messageRouter = require('./routes/messagesRouter');

const app = express()
app.use(compression()); // Compresses res body (gzip, etc.)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', messageRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3001;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`form app - listening on port ${PORT}!`);
});
